// Host half of dsh-plugin-zh-catalog.
//
// 全自动模式的后端：注册一个只读 HTTP 接口 `/zh-catalog/describe`，浏览器半在
// 遇到内置目录里没有的插件时调用它，由本半通过 ctx.llm 让 AI 现场总结该插件的
// 中文名与功能简介，并把结果缓存到 $DSH_HOME/plugin-zh-catalog-cache.json，
// 之后同一插件直接命中缓存，不再消耗 LLM 调用。
//
// 服务依赖：webServer（注册路由）、llm（大模型）、agentDefaultModel（默认模型）。
import { createRequire } from "node:module";
import { readFileSync, writeFileSync, mkdirSync, renameSync } from "node:fs";
import { dirname, join } from "node:path";
import { homedir } from "node:os";
import { BlockAssembler, createUserMessage } from "@deepseek-ai/dsh-llm";

/**
* 插件名（供 loader 展示）。
*/
const name = "plugin-zh-catalog";

/**
* 需要的服务：webServer 用于注册 HTTP 路由；llm 用于 AI 总结；
* agentDefaultModel 用于解析默认 provider/model。
*/
const inject = ["webServer", "llm", "agentDefaultModel"];

/**
* 缓存文件路径：$DSH_HOME/plugin-zh-catalog-cache.json。
*/
function cachePath() {
	const home = process.env.DSH_HOME ?? join(homedir(), ".dsh");
	return join(home, "plugin-zh-catalog-cache.json");
}

/**
* 读取缓存（容错：文件缺失或损坏返回空对象）。
*/
function readCache() {
	try {
		const raw = readFileSync(cachePath(), "utf8");
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
	} catch {
		return {};
	}
}

/**
* 原子写缓存（临时文件 + rename，避免半写）。
*/
function writeCache(cache) {
	try {
		const file = cachePath();
		mkdirSync(dirname(file), { recursive: true });
		const tmp = `${file}.tmp`;
		writeFileSync(tmp, JSON.stringify(cache, null, 2), "utf8");
		try {
			renameSync(tmp, file);
		} catch {
			writeFileSync(file, JSON.stringify(cache, null, 2), "utf8");
		}
	} catch {
		// 缓存失败不致命：结果仍然返回给调用方
	}
}

/**
* 读取一个包的 package.json description 与 README 摘要，作为 AI 总结的输入。
* @param ctx - 宿主上下文（用其 baseUrl 解析包）。
* @param moduleName - 包名（Loader 行 name），如 '@deepseek-ai/dsh-foo'。
* @returns 包信息文本，或 null（无法解析时）。
*/
function readPackageInfo(ctx, moduleName) {
	try {
		const base = typeof ctx.baseUrl === "string" && ctx.baseUrl.startsWith("file:") ? new URL(ctx.baseUrl) : ctx.baseUrl;
		const req = createRequire(base);
		const pkgJsonPath = req.resolve(`${moduleName}/package.json`);
		const pkg = JSON.parse(readFileSync(pkgJsonPath, "utf8"));
		const dir = dirname(pkgJsonPath);
		let readme = "";
		for (const file of ["README.zh.md", "README.md", "README"]) {
			try {
				readme = readFileSync(join(dir, file), "utf8");
				break;
			} catch {
				/* try next */
			}
		}
		// 摘要只取头部，控制输入长度
		const readmeHead = readme.slice(0, 3000).replace(/\s+/g, " ").trim();
		return {
			name: moduleName,
			description: typeof pkg.description === "string" ? pkg.description : "",
			readme: readmeHead
		};
	} catch {
		return null;
	}
}

/**
* 让 AI 总结一个插件的中文名与功能简介。
* @returns {zh, desc}，解析失败抛错。
*/
async function summarize(ctx, info) {
	const selection = ctx.agentDefaultModel.currentSelection();
	const prompt = [
		`请为下面的 DeepSeek Harness (DSH) 插件总结一个简短中文名和一句话功能简介。`,
		`要求：`,
		`1. 只输出一个 JSON 对象，不要任何其他文字或代码块标记：{"zh":"2-8字中文名","desc":"一句话中文功能简介（不超过60字）"}`,
		`2. 中文名要短、像产品名；简介要准确概括这个包做什么，基于给出的描述和 README。`,
		``,
		`包名：${info.name}`,
		`package.json description：${info.description || "（无）"}`,
		`README 摘要：${info.readme || "（无）"}`,
		``,
		`输出 JSON：`
	].join("\n");
	const assembler = new BlockAssembler();
	const stream = ctx.llm.stream({
		provider: selection.provider,
		model: selection.model,
		system: "你是一个插件文档总结助手，只输出 JSON。",
		messages: [createUserMessage({
			content: [{ type: "text", text: prompt }],
			source: { kind: "plugin", plugin: "dsh-plugin-zh-catalog" }
		})],
		temperature: 0.2,
		maxTokens: 200
	});
	for await (const chunk of stream) assembler.push(chunk);
	const blocks = assembler.blocks();
	const text = blocks.map((block) => block.type === "text" ? block.text : "").join("").trim();
	const match = text.match(/\{[\s\S]*\}/);
	if (!match) throw new Error(`LLM 返回不是 JSON：${text.slice(0, 200)}`);
	const parsed = JSON.parse(match[0]);
	if (typeof parsed.zh !== "string" || typeof parsed.desc !== "string") throw new Error("LLM JSON 缺少 zh/desc 字段");
	return {
		zh: parsed.zh.slice(0, 30),
		desc: parsed.desc.slice(0, 120)
	};
}

/**
* 串行化 LLM 总结，避免并发请求同时烧 token。
*/
let queue = Promise.resolve();
function enqueue(task) {
	const run = queue.then(task, task);
	queue = run.then(() => {}, () => {});
	return run;
}

/**
* 处理一次 describe 请求：读缓存 → 命中返回；未命中 → AI 总结 → 写缓存 → 返回。
*/
async function describe(ctx, moduleName) {
	const cache = readCache();
	if (cache[moduleName] && typeof cache[moduleName].zh === "string" && typeof cache[moduleName].desc === "string") {
		return { ok: true, cached: true, ...cache[moduleName] };
	}
	const info = readPackageInfo(ctx, moduleName);
	if (info === null) return { ok: false, error: "package not resolvable" };
	const summary = await enqueue(() => summarize(ctx, info));
	const next = readCache();
	next[moduleName] = summary;
	writeCache(next);
	return { ok: true, cached: false, ...summary };
}

/**
* 注册 `/zh-catalog/describe` 只读路由。
* @param ctx - 宿主上下文。
*/
function apply(ctx) {
	ctx.effect(() => ctx.webServer.register({
		kind: "prefix",
		path: "/zh-catalog",
		handler: async (req, res) => {
			const url = new URL(req.url ?? "/", "http://localhost");
			if (req.method !== "GET" || url.pathname !== "/zh-catalog/describe") {
				res.writeHead(404);
				res.end();
				return;
			}
			const moduleName = url.searchParams.get("module");
			if (!moduleName) {
				res.writeHead(400, { "content-type": "application/json; charset=utf-8" });
				res.end(JSON.stringify({ ok: false, error: "missing module" }));
				return;
			}
			try {
				const result = await describe(ctx, moduleName);
				res.writeHead(200, { "content-type": "application/json; charset=utf-8", "cache-control": "no-cache" });
				res.end(JSON.stringify(result));
			} catch (error) {
				res.writeHead(200, { "content-type": "application/json; charset=utf-8", "cache-control": "no-cache" });
				res.end(JSON.stringify({ ok: false, error: error instanceof Error ? error.message : String(error) }));
			}
		}
	}), "plugin-zh-catalog: describe route");
}

export { apply, inject, name };
