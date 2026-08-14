window.__ModuleLoader__.load({
	id: "dsh-plugin-zh-catalog",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		//#region \0dsh-css:D:/DSHDATA/dsh-plugin-zh-catalog/src/client/ZhCatalogTab.module.css.mjs
		const css = ".zqCat_section{width:100%;max-width:760px;color:var(--dsw-alias-label-primary);flex-direction:column;gap:14px;display:flex}.zqCat_heading{display:flex;align-items:baseline;gap:7px;padding:0 2px}.zqCat_heading h3{margin:0;font-size:13px;font-weight:600;line-height:20px}.zqCat_heading span{color:var(--dsw-alias-label-tertiary);font-variant-numeric:tabular-nums;font-size:12px;line-height:18px}.zqCat_search{width:100%;color:var(--dsw-alias-label-tertiary);align-items:center;display:flex;position:relative}.zqCat_search>svg{pointer-events:none;position:absolute;left:12px}.zqCat_search input{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);width:100%;height:36px;color:var(--dsw-alias-label-primary);font:inherit;border-radius:8px;outline:none;padding:0 34px 0 36px;font-size:13px}.zqCat_search input::placeholder{color:var(--dsw-alias-label-tertiary)}.zqCat_search input:focus-visible{border-color:var(--dsw-alias-state-business-primary);box-shadow:0 0 0 2px color-mix(in srgb, var(--dsw-alias-state-business-primary) 18%, transparent)}.zqCat_catalog{flex-direction:column;gap:12px;display:flex}.zqCat_cards{flex-direction:column;gap:10px;margin:0;padding:0;list-style:none;display:flex}.zqCat_card{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);border-radius:10px;min-width:0;padding:12px 14px;display:flex;flex-direction:column;gap:6px}.zqCat_cardTitle{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}.zqCat_cardTitle strong{min-width:0;font-size:14px;font-weight:600;line-height:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.zqCat_trailing{color:var(--dsw-alias-label-tertiary);flex:none;align-items:center;gap:7px;display:inline-flex}.zqCat_statusDot{background:var(--dsw-alias-label-tertiary);border-radius:999px;flex:none;width:7px;height:7px;display:inline-block}.zqCat_statusDot[data-phase=active]{background:var(--dsw-alias-state-success-primary)}.zqCat_statusDot[data-phase=failed]{background:var(--dsw-alias-state-error-primary)}.zqCat_statusDot[data-phase=loading]{background:var(--dsw-alias-state-business-primary)}.zqCat_configTag{background:var(--dsw-alias-bg-layer-1);min-height:20px;color:var(--dsw-alias-label-secondary);white-space:nowrap;border-radius:5px;align-items:center;padding:1px 6px;font-size:11px;line-height:16px;display:inline-flex}.zqCat_configTag[data-enabled=true]{background:color-mix(in srgb, var(--dsw-alias-state-success-primary) 10%, transparent);color:var(--dsw-alias-state-success-primary)}.zqCat_entryId{overflow-wrap:anywhere;color:var(--dsw-alias-label-tertiary);font-family:var(--ds-font-family-code);font-size:11px;line-height:17px;display:block}.zqCat_desc{color:var(--dsw-alias-label-secondary);margin:0;font-size:13px;line-height:20px}.zqCat_aiTag{background:color-mix(in srgb, var(--dsw-alias-state-business-primary) 12%, transparent);color:var(--dsw-alias-state-business-primary);white-space:nowrap;border-radius:5px;align-items:center;padding:1px 6px;font-size:11px;line-height:16px;display:inline-flex;flex:none}.zqCat_descLine{display:flex;align-items:flex-start;gap:8px;min-width:0}.zqCat_status{color:var(--dsw-alias-label-tertiary);font-size:13px;line-height:20px;margin:0}.zqCat_failure{color:var(--dsw-alias-state-error-primary);align-items:center;gap:10px;display:flex;font-size:13px;line-height:20px}.zqCat_failure p{margin:0}.zqCat_failure button{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary);font:inherit;cursor:pointer;background:0 0;border-radius:6px;padding:4px 10px}.zqCat_visuallyHidden{clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}";
		const tagId = "dsh-plugin-zh-catalog/ZhCatalogTab.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-plugin-zh-catalog";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var ZhCatalogTab_module_css_default = {
			"section": "zqCat_section",
			"heading": "zqCat_heading",
			"search": "zqCat_search",
			"catalog": "zqCat_catalog",
			"cards": "zqCat_cards",
			"card": "zqCat_card",
			"cardTitle": "zqCat_cardTitle",
			"trailing": "zqCat_trailing",
			"statusDot": "zqCat_statusDot",
			"configTag": "zqCat_configTag",
			"entryId": "zqCat_entryId",
			"desc": "zqCat_desc",
			"descLine": "zqCat_descLine",
			"aiTag": "zqCat_aiTag",
			"status": "zqCat_status",
			"failure": "zqCat_failure",
			"visuallyHidden": "zqCat_visuallyHidden"
		};
		//#endregion
		//#region lib/types/client/catalog.js
		/**
		* AI 总结的中文插件目录：key = Loader 行 package 名（moduleName），value =
		* { zh: 中文名, desc: 一句话功能简介 }。内容由 AI 阅读每个包的 README 与
		* package.json description 后总结生成，随本插件打包，离线可用。
		*
		* 不在目录里的插件由 Host 半（/zh-catalog/describe）现场 AI 总结并缓存。
		*/
		const CATALOG = {
			"@deepseek-ai/cordis-plugin-timer": {
				zh: "定时器",
				desc: "为插件提供可随生命周期自动清理的定时器（setTimeout/setInterval）服务。"
			},
			"@deepseek-ai/cordis-plugin-hmr": {
				zh: "热更新",
				desc: "监听源码变更并只重载受影响插件条目的热模块替换服务（Web 组合中默认禁用）。"
			},
			"@deepseek-ai/dsh-llm": {
				zh: "大模型服务",
				desc: "提供方无关的 LLM 抽象与流式调用接口，是 agent 循环和所有插件共用的大模型词汇层。"
			},
			"@deepseek-ai/dsh-session": {
				zh: "会话存储",
				desc: "事件溯源的会话日志与内存存储，是 agent 全部交互历史的唯一真源。"
			},
			"@deepseek-ai/dsh-typert-registry": {
				zh: "Typert 注册表",
				desc: "生成的包反射信息与 Zod schema 的运行时注册中心，供 Typert 产物使用。"
			},
			"@deepseek-ai/dsh-typert-loader": {
				zh: "Typert 加载器",
				desc: "扫描 Loader 配置项，导入并注册各包导出的 ./typert 产物。"
			},
			"@deepseek-ai/dsh-api-gateway": {
				zh: "API 网关",
				desc: "为 Host 与浏览器两侧提供 Typert RPC 端点分发。"
			},
			"@deepseek-ai/dsh-session-title": {
				zh: "会话标题",
				desc: "由日志支持的会话标题服务，提供即时确定性回退与可选异步标题提供方。"
			},
			"@deepseek-ai/dsh-session-title-first-prompt-llm": {
				zh: "会话标题生成（LLM）",
				desc: "用 LLM 总结第一条符合条件的用户消息，自动生成会话标题。"
			},
			"@deepseek-ai/dsh-user-questions": {
				zh: "用户提问接口",
				desc: "在 agent 运行中向人类提问的抽象接口（ctx.userQuestions）。"
			},
			"@deepseek-ai/dsh-agent": {
				zh: "Agent 抽象",
				desc: "Agent 接口、注册表、作用域与事件词汇，供所有 UI 与编排插件使用。"
			},
			"@deepseek-ai/dsh-agent-default-model": {
				zh: "默认模型选择",
				desc: "为新建 Agent 提供默认的 provider/model 选择服务。"
			},
			"@deepseek-ai/dsh-jobs-local": {
				zh: "后台任务注册表",
				desc: "进程本地的后台任务注册表实现（ctx.jobs），管理任务生命周期。"
			},
			"@deepseek-ai/dsh-llm-retry": {
				zh: "LLM 重试策略",
				desc: "按提供方路由的 LLM 请求重试策略，带有限预算与指数退避。"
			},
			"@deepseek-ai/dsh-settings-file": {
				zh: "设置文件",
				desc: "基于 settings.yaml 的设置提供方，支持热重载与原子写回。"
			},
			"@deepseek-ai/dsh-credentials-local": {
				zh: "凭据存储",
				desc: "文件型凭据提供方：环境变量、.credentials.yaml 与 .env 分层，模型页写入密钥。"
			},
			"@deepseek-ai/dsh-llm-pi-ai": {
				zh: "pi-ai 适配器",
				desc: "基于 pi-ai 的多提供方 LLM 适配器，可接入 OpenAI 兼容网关或自建服务。"
			},
			"@deepseek-ai/dsh-session-persistence-jsonl": {
				zh: "会话持久化（JSONL）",
				desc: "仅追加的 JSONL 会话日志持久化后端，默认 zstd 压缩。"
			},
			"@deepseek-ai/dsh-attachment-local": {
				zh: "附件存储",
				desc: "内容寻址（sha256）的私有附件对象存储，位于 DSH_HOME 下。"
			},
			"@deepseek-ai/dsh-session-query-sqlite": {
				zh: "会话查询（SQLite）",
				desc: "基于 SQLite FTS5 的会话全文搜索后端（Web 默认不启用搜索）。"
			},
			"@deepseek-ai/dsh-session-projection": {
				zh: "会话投影注册表",
				desc: "把日志派生的会话状态投影为当前值，供历史尾页与推送帧使用。"
			},
			"@deepseek-ai/dsh-session-telemetry-otel": {
				zh: "遥测上报（OTel）",
				desc: "OpenTelemetry 后端，把会话记录上报到 OTLP 日志端点（默认关闭）。"
			},
			"@deepseek-ai/dsh-subprocess-local": {
				zh: "子进程",
				desc: "本地子进程/终端进程的 spawn 与信号控制实现。"
			},
			"@deepseek-ai/dsh-sandbox-local": {
				zh: "沙箱后端",
				desc: "本地进程沙箱实现：Windows ACL、bwrap、Landlock 或 Seatbelt。"
			},
			"@deepseek-ai/dsh-sandbox-policy": {
				zh: "沙箱策略",
				desc: "按调用解析沙箱模式与工作区根目录的策略归属服务。"
			},
			"@deepseek-ai/dsh-bash-sandbox": {
				zh: "Bash 沙箱执行器",
				desc: "经 ctx.sandbox 隔离每条 bash 命令的 Shell 执行器（Windows 默认禁用）。"
			},
			"@deepseek-ai/dsh-pwsh-sandbox": {
				zh: "PowerShell 沙箱执行器",
				desc: "经 ctx.sandbox 隔离每条 pwsh 命令的 PowerShell 执行器（Windows 默认）。"
			},
			"@deepseek-ai/dsh-user-approval": {
				zh: "用户审批",
				desc: "一次性权限决策的审批服务（ctx.approval），无应答者时默认拒绝。"
			},
			"@deepseek-ai/dsh-permission-presets": {
				zh: "权限预设",
				desc: "把沙箱模式与审批策略打包为用户可选的权限预设（workspace-write 等）。"
			},
			"@deepseek-ai/dsh-shell-env": {
				zh: "Shell 环境变量",
				desc: "管理受信任的 DSH_* 环境变量注册表，供 shell 工具收集。"
			},
			"@deepseek-ai/dsh-tool-bash": {
				zh: "bash 工具",
				desc: "模型可用的 bash 命令执行工具，支持后台任务与沙箱升级（Windows 默认禁用）。"
			},
			"@deepseek-ai/dsh-tool-pwsh": {
				zh: "pwsh 工具",
				desc: "模型可用的 PowerShell 命令执行工具（Windows 默认）。"
			},
			"@deepseek-ai/dsh-tool-jobs": {
				zh: "后台任务控制工具",
				desc: "模型可用的 job_output / job_list / job_kill 任务控制工具。"
			},
			"@deepseek-ai/dsh-fs-observation-policy": {
				zh: "文件观察策略",
				desc: "记录文件观察状态，强制编辑前读取与版本防护的写入/编辑。"
			},
			"@deepseek-ai/dsh-tool-fs": {
				zh: "文件工具",
				desc: "模型可用的 read / write / edit / read_image 文件读写工具。"
			},
			"@deepseek-ai/dsh-tool-fs-search": {
				zh: "文件搜索工具",
				desc: "模型可用的 glob / grep 文件发现工具，基于打包的 ripgrep。"
			},
			"@deepseek-ai/dsh-agent-instructions": {
				zh: "项目指令",
				desc: "为会话加载 AGENTS.md / CLAUDE.md 工作区指令文件。"
			},
			"@deepseek-ai/dsh-skill": {
				zh: "技能注册表",
				desc: "智能体技能（skill）提供方注册表（ctx.skills）。"
			},
			"@deepseek-ai/dsh-skill-filesystem": {
				zh: "技能文件系统",
				desc: "扫描本地 skill 目录并向注册表提供技能的提供方。"
			},
			"@deepseek-ai/dsh-skill-badge": {
				zh: "徽章技能",
				desc: "内置的 dsh 徽章技能提供方（默认禁用）。"
			},
			"@deepseek-ai/dsh-tool-skill": {
				zh: "技能加载工具",
				desc: "模型可用的技能目录与 skill 加载工具。"
			},
			"@deepseek-ai/dsh-commands": {
				zh: "命令注册表",
				desc: "插件面向用户注册斜杠命令的注册表（ctx.commands）。"
			},
			"@deepseek-ai/dsh-command-feedback": {
				zh: "反馈命令",
				desc: "/feedback 用户反馈采集命令与日志记录。"
			},
			"@deepseek-ai/dsh-goal": {
				zh: "目标服务",
				desc: "事件溯源的同会话目标状态与生命周期服务（ctx.goals）。"
			},
			"@deepseek-ai/dsh-goal-round-driver": {
				zh: "目标轮次驱动",
				desc: "把活跃且启用续行的目标转换为连续目标轮次的驱动器。"
			},
			"@deepseek-ai/dsh-command-goal": {
				zh: "/goal 命令",
				desc: "面向用户的 /goal 目标管理斜杠命令。"
			},
			"@deepseek-ai/dsh-plan-mode": {
				zh: "计划模式",
				desc: "按 agent 记录的 plan 协作状态、/plan 命令与受审退出（Web 默认禁用）。"
			},
			"@deepseek-ai/dsh-token-meter": {
				zh: "Token 计量",
				desc: "可回放的 token 用量测量服务，供压缩等压力敏感插件共享计量。"
			},
			"@deepseek-ai/dsh-compaction-basic": {
				zh: "基础压缩",
				desc: "基于 token 压力的压缩策略与 LLM 摘要后端（Web 默认禁用）。"
			},
			"@deepseek-ai/dsh-command-compact": {
				zh: "/compact 命令",
				desc: "面向用户的 /compact 手动会话压缩命令（Web 默认禁用）。"
			},
			"@deepseek-ai/dsh-subagent": {
				zh: "子代理抽象",
				desc: "具名提供方的子 agent 委派注册表与编排（ctx.subagents）。"
			},
			"@deepseek-ai/dsh-subagent-spawn-in-process": {
				zh: "子代理（spawn）",
				desc: "进程内创建全新子 agent 的后端，子 agent 看不到父级历史。"
			},
			"@deepseek-ai/dsh-subagent-fork-in-process": {
				zh: "子代理（fork）",
				desc: "进程内创建继承父级已完成轮次的子 agent 后端。"
			},
			"@deepseek-ai/dsh-tool-subagent-control": {
				zh: "子代理控制工具",
				desc: "全局的 send_message / interrupt_agent / list_agents 工具。"
			},
			"@deepseek-ai/dsh-tool-subagent-control/list-agents": {
				zh: "子代理列表工具",
				desc: "list_agents：列出调用方可继续的后台子 agent。"
			},
			"@deepseek-ai/dsh-tool-subagent": {
				zh: "子代理委派工具",
				desc: "模型可用的 subagent / subagent_fork 委派工具（Web 默认禁用）。"
			},
			"@deepseek-ai/dsh-tool-subagent-report": {
				zh: "子代理上报工具",
				desc: "可继续子 agent 内的 report 返回通道工具。"
			},
			"@deepseek-ai/dsh-workflow-worker-thread": {
				zh: "工作流引擎",
				desc: "在 worker 线程中执行模型编写的编排脚本（Web 默认禁用）。"
			},
			"@deepseek-ai/dsh-tool-workflow": {
				zh: "workflow 工具",
				desc: "模型可用的 workflow 工具：运行扇出子 agent 的 JS 编排脚本（Web 默认禁用）。"
			},
			"@deepseek-ai/dsh-tool-call-timeout-policy": {
				zh: "工具调用超时策略",
				desc: "为声明了超时的工具调用设置协作式截止时间，超时返回 TOOL_TIMEOUT。"
			},
			"@deepseek-ai/dsh-spill-local": {
				zh: "溢出存储",
				desc: "把过大的工具输出持久化到私有会话级文件的本地实现。"
			},
			"@deepseek-ai/dsh-spill-policy": {
				zh: "溢出策略",
				desc: "把超过上限的纯文本工具结果替换为预览 + 文件路径。"
			},
			"@deepseek-ai/dsh-session-checkpoint-policy": {
				zh: "会话检查点",
				desc: "在模型请求与工具副作用前创建持久化检查点。"
			},
			"@deepseek-ai/dsh-compaction-tool-result-pruner": {
				zh: "工具结果剪枝",
				desc: "对超预算工具结果做头/尾保留的裁剪（不依赖模型，Web 默认禁用）。"
			},
			"@deepseek-ai/dsh-tool-todo": {
				zh: "任务清单工具",
				desc: "模型可用的 todo_write 任务清单工具（整体替换式）。"
			},
			"@deepseek-ai/dsh-tool-goal": {
				zh: "目标工具",
				desc: "模型可用的 get_goal / create_goal / update_goal 目标工具（Web 默认禁用）。"
			},
			"@deepseek-ai/dsh-tool-ralph": {
				zh: "Ralph 循环工具",
				desc: "模型可用的 ralph 工具：把目标交给多个全新子 agent 迭代（Web 默认禁用）。"
			},
			"@deepseek-ai/dsh-tool-str-replace-editor": {
				zh: "文本编辑工具",
				desc: "基于 ctx.fs 的 view / create / str_replace / insert 编辑工具（Web 默认禁用）。"
			},
			"@deepseek-ai/dsh-repeat-tool-reminder": {
				zh: "重复调用提醒",
				desc: "agent 反复调用相同工具时注入逐步增强的提醒，建议换思路。"
			},
			"@deepseek-ai/dsh-web": {
				zh: "Web 能力抽象",
				desc: "搜索/抓取提供方注册表与请求词汇（ctx.web）。"
			},
			"@deepseek-ai/dsh-web-search-deepseek": {
				zh: "DeepSeek 搜索提供方",
				desc: "调用 Anthropic 兼容 API 的 DeepSeek 原生搜索提供方。"
			},
			"@deepseek-ai/dsh-tool-web": {
				zh: "联网工具",
				desc: "模型可用的 web_search / web_fetch 工具（Web 默认禁用）。"
			},
			"@deepseek-ai/dsh-tools": {
				zh: "工具注册表",
				desc: "工具注册与执行流水线：pre/execute/post 钩子与呈现模式。"
			},
			"@deepseek-ai/dsh-system-prompt": {
				zh: "系统提示词",
				desc: "系统提示词组装注册表：有序段落、工具 schema 与变量。"
			},
			"@deepseek-ai/dsh-agent-loop": {
				zh: "Agent 循环",
				desc: "智能体的具体实现与循环驱动器，驱动会话/轮次/步骤生命周期。"
			},
			"@deepseek-ai/dsh-fs-sandbox": {
				zh: "文件沙箱",
				desc: "按沙箱模式围栏写入/编辑的 ctx.fs 后端，读取直通。"
			},
			"@deepseek-ai/dsh-llm-deepseek": {
				zh: "DeepSeek 适配器",
				desc: "官方 DeepSeek chat-completions 的 LLM 适配器（fetch + SSE）。"
			},
			"@deepseek-ai/dsh-code-runtime-worker-thread": {
				zh: "代码运行环境",
				desc: "在 worker 线程中执行 TypeScript 代码的运行环境（隔离，非安全边界）。"
			},
			"@deepseek-ai/dsh-storage": {
				zh: "存储中心",
				desc: "非会话数据的具名后端注册表与数据形态设施（ctx.storage）。"
			},
			"@deepseek-ai/dsh-storage-json": {
				zh: "JSON 存储后端",
				desc: "人类可读的 <unit>.json KV 文件存储后端。"
			},
			"@deepseek-ai/dsh-storage-domain": {
				zh: "领域存储",
				desc: "schema 校验、事件广播的 KV 领域数据形态（ctx.storageDomain）。"
			},
			"@deepseek-ai/dsh-message-feedback": {
				zh: "消息反馈",
				desc: "单条消息的评分与备注伴随记录（messageFeedback Remote）。"
			},
			"@deepseek-ai/dsh-session-log-export": {
				zh: "会话导出",
				desc: "/export 命令与共享下载弹窗，导出会话日志 ZIP。"
			},
			"@deepseek-ai/dsh-workspace": {
				zh: "工作区",
				desc: "工作区实体注册表与会话挂载（ctx.workspaceRegistry）。"
			},
			"@deepseek-ai/dsh-session-projection-cache": {
				zh: "投影缓存",
				desc: "持久化的会话投影检查点缓存，失败软降级。"
			},
			"@deepseek-ai/dsh-session-stats": {
				zh: "会话统计",
				desc: "全日志的轮/步计数与耗时投影（sessionStats），供聊天统计条使用。"
			},
			"@deepseek-ai/dsh-host-directory-picker-auto": {
				zh: "目录选择器",
				desc: "启动时判定宿主环境，挂载原生或浏览式目录选择器后端。"
			},
			"@deepseek-ai/dsh-host-plugin-inventory": {
				zh: "插件清单服务",
				desc: "只读的 Loader 插件清单 Remote（pluginInventory/list）。"
			},
			"@deepseek-ai/dsh-host-apiproxy": {
				zh: "API 网关宿主",
				desc: "所有客户端共用的 API 网关宿主侧（ctx.apiProxy）。"
			},
			"@deepseek-ai/dsh-cordis-host-runner": {
				zh: "Cordis 宿主运行器",
				desc: "动态双半插件包的宿主侧：定义注册、沙箱与 invoke 表。"
			},
			"@deepseek-ai/dsh-web-app/startup": {
				zh: "Web 启动参数",
				desc: "解析 dsh web 启动 flag 的提供方（端口/主机等）。"
			},
			"@deepseek-ai/dsh-host-webserver": {
				zh: "Web 服务器",
				desc: "HTTP/upgrade 路由注册与静态回退的 web 服务器插件。"
			},
			"@deepseek-ai/dsh-web-app": {
				zh: "Web 应用组合",
				desc: "dsh 浏览器表层组合包：补丁层 + 运行时粘合插件（前端 dist 服务等）。"
			},
			"@deepseek-ai/dsh-client-hmr": {
				zh: "客户端热更新",
				desc: "为脚本加载的客户端插件提供热重载（开发模式，平时空闲）。"
			},
			"@deepseek-ai/dsh-client-modules": {
				zh: "客户端模块系统",
				desc: "扫描 dsh.client 包、编排 __DSH_BOOT__ 入口图并服务 bundle。"
			},
			"@deepseek-ai/dsh-client-connection": {
				zh: "客户端连接",
				desc: "HTTP/WebSocket 双流连接层与重连（ctx.connection）。"
			},
			"@deepseek-ai/dsh-api-remotes": {
				zh: "API Remotes 组装",
				desc: "Host Remote 能力的双侧 BFF 组装与 Agent/Session 查找策略。"
			},
			"@deepseek-ai/dsh-client-runtime": {
				zh: "客户端运行时",
				desc: "客户端核心服务：SlotRegistry 与 SessionRuntime 对象层。"
			},
			"@deepseek-ai/dsh-cordis-client-runner": {
				zh: "Cordis 客户端运行器",
				desc: "动态双半插件包的浏览器半（事件订阅与运行）。"
			},
			"@deepseek-ai/dsh-client-ui-theme": {
				zh: "主题",
				desc: "亮/暗/系统主题运行时与 --dsw-* token 样式。"
			},
			"@deepseek-ai/dsh-client-locale": {
				zh: "语言环境",
				desc: "zh/en 偏好与类型化字典注册表（ctx.locale）。"
			},
			"@deepseek-ai/dsh-client-ui-layout": {
				zh: "布局",
				desc: "三栏 AppFrame 外壳、拖动手柄与面板几何服务。"
			},
			"@deepseek-ai/dsh-client-ui-sidebar": {
				zh: "侧边栏",
				desc: "会话树、搜索、分组与状态点的侧边栏插件。"
			},
			"@deepseek-ai/dsh-client-ui-settings": {
				zh: "设置底座",
				desc: "设置命名空间 scope 服务与设置 slot 契约（无 UI）。"
			},
			"@deepseek-ai/dsh-client-ui-settings-general": {
				zh: "通用设置",
				desc: "设置外壳、导航、欢迎引导与通用分区。"
			},
			"@deepseek-ai/dsh-client-ui-settings-models": {
				zh: "模型设置",
				desc: "模型设置页：提供方目录、编辑卡片与引导弹窗。"
			},
			"@deepseek-ai/dsh-client-ui-settings-plugin-inventory": {
				zh: "插件列表",
				desc: "设置中只读的插件清单标签页（可搜索的紧凑卡片）。"
			},
			"@deepseek-ai/dsh-client-ui-conversation": {
				zh: "会话界面",
				desc: "聊天视图、编辑器、输入区与详情壳层。"
			},
			"@deepseek-ai/dsh-client-ui-tool": {
				zh: "工具视图",
				desc: "工具调用树渲染器与按工具的呈现 slot。"
			},
			"@deepseek-ai/dsh-client-ui-cordis": {
				zh: "Cordis 面板",
				desc: "动态插件定义卡与全局运行/停止面板。"
			},
			"@deepseek-ai/dsh-client-ui-workflow-run": {
				zh: "工作流运行视图",
				desc: "把持久化工作流运行重建为聊天节点。"
			},
			"@deepseek-ai/dsh-client-ui-deliverables": {
				zh: "产出文件",
				desc: "轮次尾部的产出文件行与可点击的代码引用。"
			},
			"@deepseek-ai/dsh-client-ui-workspace": {
				zh: "工作区界面",
				desc: "Workspace 浏览器与选择器（侧边栏与空状态）。"
			},
			"@deepseek-ai/dsh-client-ui-input-trigger": {
				zh: "输入触发",
				desc: "'/' 与 '@' 检测、候选菜单与路由。"
			},
			"@deepseek-ai/dsh-client-ui-commands": {
				zh: "命令界面",
				desc: "客户端命令目录、'/' source 与三类命令 UI。"
			},
			"@deepseek-ai/dsh-client-ui-skill": {
				zh: "技能界面",
				desc: "技能引用的浏览器端：'/' skill source 与目录。"
			},
			"@deepseek-ai/dsh-client-ui-subagent": {
				zh: "子代理界面",
				desc: "子代理会话目录、续接路由 UI 与 '@' 引用。"
			},
			"@deepseek-ai/dsh-client-ui-jobs": {
				zh: "任务界面",
				desc: "会话头部后台任务列表（从 session/jobs 帧镜像）。"
			},
			"@deepseek-ai/dsh-client-ui-goal": {
				zh: "目标条",
				desc: "输入区上方的 GoalBar 目标状态条。"
			},
			"@deepseek-ai/dsh-client-ui-message-feedback": {
				zh: "消息反馈控件",
				desc: "消息操作栏的 Like/Dislike 与备注控件。"
			},
			"@deepseek-ai/dsh-client-ui-model-selection": {
				zh: "模型选择",
				desc: "/model 与 composer 的模型/推理强度选择菜单。"
			},
			"@deepseek-ai/dsh-client-ui-permission-presets": {
				zh: "权限界面",
				desc: "新会话默认权限行与 /permission 弹窗。"
			},
			"@deepseek-ai/dsh-client-ui-agent-preset": {
				zh: "Agent 预设界面",
				desc: "默认预设选择、会话 chip 与预设管理分区。"
			},
			"@deepseek-ai/dsh-client-ui-settings-plugins": {
				zh: "插件设置",
				desc: "插件分区与标签栏，含可配置宿主插件的卡片。"
			},
			"@deepseek-ai/dsh-client-ui-plan": {
				zh: "Plan 控件",
				desc: "输入区 plan 模式状态徽章。"
			},
			"@deepseek-ai/dsh-client-ui-user-questions": {
				zh: "提问界面",
				desc: "ask_user_question 的浏览器提问 UI。"
			},
			"@deepseek-ai/dsh-client-ui-trajectory": {
				zh: "轨迹视图",
				desc: "按轮次的事件记录表与交互式计时概览。"
			},
			"@deepseek-ai/dsh-agent-presets": {
				zh: "Agent 预设",
				desc: "从 preset cordis.yml 按会话组装智能体的机制。"
			}
		};
		//#endregion
		//#region lib/types/client/ZhCatalogTab.js
		/** 根 Fiber 阶段 → 本地化标签。 */
		const PHASE_KEYS = {
			pending: "pending",
			loading: "loadingPhase",
			active: "active",
			failed: "failed",
			unloading: "unloading"
		};
		/** 本地化的 Fiber 阶段标签。 */
		function phaseLabel(phase, t) {
			return phase === null ? t("unobserved") : t(PHASE_KEYS[phase]);
		}
		/** 压缩模块说明符为短名（与官方插件列表一致）。 */
		function moduleShortName(moduleName) {
			return (moduleName.startsWith("@") ? moduleName.slice(moduleName.indexOf("/") + 1) : moduleName).replace(/^cordis:/, "").replace(/^cordis-plugin-/, "").replace(/^dsh-(?:host-|client-)?/, "");
		}
		/** 是否匹配本地搜索词。 */
		function matches(entry, normalizedQuery, hit) {
			if (normalizedQuery.length === 0) return true;
			const haystack = [entry.moduleName, entry.entryId, moduleShortName(entry.moduleName), hit?.zh ?? "", hit?.desc ?? ""].join(" ").toLocaleLowerCase();
			return haystack.includes(normalizedQuery);
		}
		/**
		* 请求 Host 半为未知插件生成中文说明；失败时抛出。
		* 未挂载 Host 半（旧版本/纯前端运行）时走回退文案。
		*/
		async function fetchDescribe(moduleName) {
			const response = await fetch(`/zh-catalog/describe?module=${encodeURIComponent(moduleName)}`);
			if (!response.ok) throw new Error(`describe ${response.status}`);
			const body = await response.json();
			if (!body.ok || typeof body.zh !== "string" || typeof body.desc !== "string") throw new Error(body.error ?? "describe failed");
			return { zh: body.zh, desc: body.desc };
		}
		/** 渲染中文说明标签页：每个插件显示 原名（中文名）+ 功能简介，未知插件由 AI 现场总结。 */
		function ZhCatalogTab({ list, t }) {
			const [request, setRequest] = (0, react.useState)(0);
			const [query, setQuery] = (0, react.useState)("");
			const [state, setState] = (0, react.useState)({ status: "loading" });
			/** moduleName → { zh, desc } | 'pending' | 'failed'（本次会话内缓存）。 */
			const [dynamic, setDynamic] = (0, react.useState)({});
			(0, react.useEffect)(() => {
				let current = true;
				Promise.resolve().then(() => list()).then((snapshot) => {
					if (current) setState({
						status: "ready",
						snapshot
					});
				}, () => {
					if (current) setState({ status: "error" });
				});
				return () => {
					current = false;
				};
			}, [list, request]);
			/** 对目录外的插件逐个调用 Host 半，串行避免打爆 LLM。 */
			(0, react.useEffect)(() => {
				if (state.status !== "ready") return;
				const unknown = state.snapshot.entries.filter((entry) => CATALOG[entry.moduleName] === void 0 && dynamic[entry.moduleName] === void 0).map((entry) => entry.moduleName);
				if (unknown.length === 0) return;
				let cancelled = false;
				(async () => {
					for (const moduleName of unknown) {
						if (cancelled) return;
						setDynamic((prev) => ({ ...prev, [moduleName]: "pending" }));
						try {
							const result = await fetchDescribe(moduleName);
							if (cancelled) return;
							setDynamic((prev) => ({ ...prev, [moduleName]: result }));
						} catch {
							if (cancelled) return;
							setDynamic((prev) => ({ ...prev, [moduleName]: "failed" }));
						}
					}
				})();
				return () => {
					cancelled = true;
				};
			}, [state, dynamic]);
			const normalizedQuery = query.trim().toLocaleLowerCase();
			const filteredEntries = (0, react.useMemo)(() => state.status === "ready" ? state.snapshot.entries.filter((entry) => matches(entry, normalizedQuery, CATALOG[entry.moduleName] ?? dynamic[entry.moduleName])) : [], [normalizedQuery, state, dynamic]);
			const retry = () => {
				setState({ status: "loading" });
				setRequest((value) => value + 1);
			};
			return (0, react_jsx_runtime.jsxs)("div", {
				className: ZhCatalogTab_module_css_default.section,
				"aria-busy": state.status === "loading",
				children: [
					state.status === "loading" ? (0, react_jsx_runtime.jsx)("p", {
						className: ZhCatalogTab_module_css_default.status,
						children: t("loading")
					}) : null,
					state.status === "error" ? (0, react_jsx_runtime.jsxs)("div", {
						className: ZhCatalogTab_module_css_default.failure,
						children: [(0, react_jsx_runtime.jsx)("p", {
							role: "alert",
							children: t("error")
						}), (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: retry,
							children: t("retry")
						})]
					}) : null,
					state.status === "ready" ? (0, react_jsx_runtime.jsxs)("div", {
						className: ZhCatalogTab_module_css_default.catalog,
						children: [
							(0, react_jsx_runtime.jsxs)("label", {
								className: ZhCatalogTab_module_css_default.search,
								children: [
									(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSearchOutline16, { "aria-hidden": "true" }),
									(0, react_jsx_runtime.jsx)("span", {
										className: ZhCatalogTab_module_css_default.visuallyHidden,
										children: t("search")
									}),
									(0, react_jsx_runtime.jsx)("input", {
										type: "search",
										value: query,
										placeholder: t("search"),
										"aria-label": t("search"),
										onChange: (event) => {
											setQuery(event.currentTarget.value);
										}
									})
								]
							}),
							(0, react_jsx_runtime.jsxs)("div", {
								className: ZhCatalogTab_module_css_default.heading,
								children: [(0, react_jsx_runtime.jsx)("h3", { children: t("catalog") }), (0, react_jsx_runtime.jsx)("span", {
									"data-plugin-count": filteredEntries.length,
									children: filteredEntries.length
								})]
							}),
							state.snapshot.entries.length === 0 ? (0, react_jsx_runtime.jsx)("p", {
								className: ZhCatalogTab_module_css_default.status,
								children: t("empty")
							}) : null,
							state.snapshot.entries.length > 0 && filteredEntries.length === 0 ? (0, react_jsx_runtime.jsx)("p", {
								className: ZhCatalogTab_module_css_default.status,
								children: t("emptySearch")
							}) : null,
							filteredEntries.length > 0 ? (0, react_jsx_runtime.jsx)("ul", {
								className: ZhCatalogTab_module_css_default.cards,
								children: filteredEntries.map((entry) => {
									const status = phaseLabel(entry.fiberPhase, t);
									const shortName = moduleShortName(entry.moduleName);
									const hit = CATALOG[entry.moduleName];
									const dyn = dynamic[entry.moduleName];
									const live = hit ?? (dyn && dyn !== "pending" && dyn !== "failed" ? dyn : void 0);
									const title = live === void 0 ? shortName : `${shortName}（${live.zh}）`;
									const configuration = t(entry.enabled ? "enabledTag" : "disabledTag");
									let desc = "";
									let aiTag = false;
									if (hit !== void 0) {
										desc = hit.desc;
									} else if (dyn === "pending") {
										desc = t("generating");
									} else if (dyn === "failed") {
										desc = t("generateFailed");
									} else if (live !== void 0) {
										desc = live.desc;
										aiTag = true;
									} else {
										desc = t("unknownDesc");
									}
									return (0, react_jsx_runtime.jsxs)("li", {
										className: ZhCatalogTab_module_css_default.card,
										"data-plugin-entry": entry.entryId,
										children: [
											(0, react_jsx_runtime.jsxs)("div", {
												className: ZhCatalogTab_module_css_default.cardTitle,
												children: [(0, react_jsx_runtime.jsx)("strong", {
													title: entry.moduleName,
													children: title
												}), (0, react_jsx_runtime.jsxs)("span", {
													className: ZhCatalogTab_module_css_default.trailing,
													children: [
														entry.enabled ? (0, react_jsx_runtime.jsx)("span", {
															className: ZhCatalogTab_module_css_default.statusDot,
															"data-phase": entry.fiberPhase ?? "unobserved",
															role: "img",
															"aria-label": status,
															title: status
														}) : null,
														(0, react_jsx_runtime.jsx)("span", {
															className: ZhCatalogTab_module_css_default.configTag,
															"data-enabled": entry.enabled ? "true" : "false",
															children: configuration
														})
													]
												})]
											}),
											(0, react_jsx_runtime.jsx)("code", {
												className: ZhCatalogTab_module_css_default.entryId,
												children: entry.entryId
											}),
											(0, react_jsx_runtime.jsxs)("div", {
												className: ZhCatalogTab_module_css_default.descLine,
												children: [aiTag ? (0, react_jsx_runtime.jsx)("span", {
													className: ZhCatalogTab_module_css_default.aiTag,
													children: t("aiTag")
												}) : null, (0, react_jsx_runtime.jsx)("p", {
													className: ZhCatalogTab_module_css_default.desc,
													children: desc
												})]
											})
										]
									}, entry.entryId);
								})
							}) : null
						]
					}) : null
				]
			});
		}
		//#endregion
		//#region lib/types/client/locales.js
		/** 简体中文词典（键源）。 */
		const zh = {
			tab: "中文说明",
			loading: "正在读取插件…",
			error: "暂时无法读取插件。",
			retry: "重试",
			search: "搜索插件（支持中文名与简介）",
			catalog: "插件中文说明",
			empty: "暂无插件。",
			emptySearch: "没有匹配的插件。",
			enabledTag: "已启用",
			disabledTag: "已停用",
			unobserved: "未挂载",
			pending: "等待依赖",
			loadingPhase: "加载中",
			active: "已挂载",
			failed: "挂载失败",
			unloading: "卸载中",
			unknownDesc: "此插件暂无中文简介。",
			generating: "AI 生成中…",
			generateFailed: "AI 生成失败（后端不可用）。",
			aiTag: "AI 生成"
		};
		/** 英文词典，与中文键集对齐。 */
		const en = {
			tab: "Chinese guide",
			loading: "Reading plugins…",
			error: "Plugins are temporarily unavailable.",
			retry: "Retry",
			search: "Search plugins (Chinese name & description)",
			catalog: "Plugin Chinese guide",
			empty: "No plugins are available.",
			emptySearch: "No matching plugins.",
			enabledTag: "Enabled",
			disabledTag: "Disabled",
			unobserved: "Not mounted",
			pending: "Waiting for dependencies",
			loadingPhase: "Loading",
			active: "Mounted",
			failed: "Mount failed",
			unloading: "Unloading",
			unknownDesc: "No Chinese description available for this plugin yet.",
			generating: "Generating with AI…",
			generateFailed: "AI generation failed (backend unavailable).",
			aiTag: "AI generated"
		};
		//#endregion
		//#region lib/types/client/index.js
		/** 中文插件说明标签页（浏览器半）。 */
		const NS = "settings.pluginZhCatalog";
		const inject = [
			"slots",
			"locale",
			"remote",
			"remote.pluginInventory"
		];
		/** 注册「中文说明」标签页到插件设置分区。 */
		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "plugin-zh-catalog: dictionaries");
			const t = ctx.locale.bind(NS);
			const list = async () => {
				const result = await ctx.remote.pluginInventory.list();
				if (!result.ok) throw new Error(`pluginInventory.list failed: ${result.error.code}: ${result.error.message}`);
				return result.value;
			};
			const injected = () => ({ list });
			ctx.slots.inject("settings.plugins.tab", () => ctx.slots.register({
				name: "settings.plugins.tab",
				id: "zh-catalog",
				order: 20,
				label: () => t("tab"),
				locale: NS,
				inject: injected
			}, ZhCatalogTab));
		}
		//#endregion
		exports.NS = NS;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map
