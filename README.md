# dsh-plugin-zh-catalog

**插件列表中文说明** —— 为 DeepSeek Harness (DSH) Web 的「设置 → 插件」分区新增一个 **「中文说明」** 标签页：每个插件显示 **原名（中文名）**，下方附一行 **AI 总结的功能简介**，让看不懂英文插件名的人也能一目了然。

> 📷 使用位置：设置（Settings）→ 插件（Plugins）→「中文说明」标签页。

> 🔗 **出处声明**：本仓库为**基于多款开源项目的二次开发（整合）作品**（上游：DeepSeek Harness / Koishi Cordis / React，均为 MIT），详见文末 [出处与开源声明](#-出处与开源声明)（含作者原创部分说明）。

## 📖 这是什么？

DSH Web 的「设置 → 插件」页里有一堆英文插件名（`@deepseek-ai/dsh-xxx`），普通人根本看不懂是干嘛的。本插件在旁边加了一个 **「中文说明」** 标签页，把每个插件翻译成中文名 + 一句话功能简介：

- 比如 `@deepseek-ai/dsh-llm` → **「大模型服务」—— 提供方无关的 LLM 抽象与流式调用接口…**
- 128 个内置插件全部有中文简介，**离线就能看，不消耗 AI 调用**
- 以后新装的插件，会自动用 AI 现场总结中文名并缓存，右上角带「AI 生成」标记

**快速上手**：打开 DSH Web → 设置 → 插件 → 切到「中文说明」标签 → 直接看/搜索即可，无需任何配置。

## ✨ 功能

- 与官方「插件列表」标签页读取同一份 `pluginInventory/list` 数据（当前 Web 组合的全部 Loader 条目）。
- 每张插件卡片显示：`短名（中文名）`、条目 id、启停状态、挂载阶段，以及一句中文功能简介。
- 内置 **AI 总结目录**：覆盖当前 DSH Web 组合的全部 128 个 `@deepseek-ai/*` 模块，内容由 AI 阅读各包 README 与 `package.json.description` 后总结生成，**离线可用、无运行时 LLM 调用**。
- **全自动 AI 补全**：目录里没有的新插件，会通过 Host 半接口（`/zh-catalog/describe`）调用 DSH 默认 LLM 现场总结中文名与功能简介，并缓存到 `$DSH_HOME/plugin-zh-catalog-cache.json`，之后秒开、不再消耗 LLM 调用。卡片右上角带「AI 生成」标记。
- 支持搜索（匹配中文名、功能简介、原名与条目 id）。
- 未收录且 AI 不可用（后端未加载）时回退为原名 + 「暂无中文简介」，不影响列表展示。

## 🧠 全自动模式说明

- 浏览器半：目录缺失的插件显示「AI 生成中…」，逐个串行请求 Host 半（避免并发打爆 LLM）。
- Host 半（`lib/index.js`）：注册 `GET /zh-catalog/describe?module=<包名>`，读取该包的 README 摘要，用 `ctx.llm.stream`（默认模型）总结 JSON `{zh, desc}`，写缓存。
- 缓存文件：`$DSH_HOME/plugin-zh-catalog-cache.json`。删除它即可让 AI 重新生成。
- **重要**：Host 半代码变更后需要**重启 dsh web** 才生效（DSH 的模块缓存机制，改 Host 代码不热更新）。浏览器半的 UI 改动刷新页面即生效。

## 📦 安装

DSH 插件通过 profile 的 `cordis.patch.yml` 挂载。本插件是纯浏览器半插件（`dsh.client`），Host 侧无行为。

### 方式一：从 GitHub 安装（推荐，可更新）

```sh
# 1) 把仓库加入 Web profile 作为插件
dsh plugin --profile web add git+https://github.com/ayrlinzz/dsh-plugin-zh-catalog.git

# 2) 在 $DSH_HOME/profiles/web/cordis.patch.yml 追加一行（若 dsh plugin 未自动 reconcile）：
# - insert:
#     - id: plugin-zh-catalog
#       name: 'dsh-plugin-zh-catalog'

# 3) 重启 dsh web（或等待 patch 热重载后刷新页面）
```

### 方式二：手动拷贝

把整个 `dsh-plugin-zh-catalog` 文件夹放入 `$DSH_HOME/profiles/node_modules/` 下，再按上面的方式 2 追加 Loader 行。

> 说明：从 git 安装的插件，pnpm 默认拦截构建脚本（本插件无构建脚本，纯静态文件，一般不会触发）；如被拦，在 `profiles/web/pnpm-workspace.yaml` 的 `allowBuilds` 中按提示放行对应 key 即可。

## 🔍 使用

1. 打开 DSH Web。
2. 进入 **设置（Settings）→ 插件（Plugins）**。
3. 切换到 **「中文说明」** 标签页。
4. 每个插件会显示 `原名（中文名）` 与功能简介，可直接搜索。

## 🗂 目录结构

```
dsh-plugin-zh-catalog/
├── package.json          # 包清单，声明 dsh.client（platform: web）
├── lib/
│   ├── index.js          # Host 半，无宿主行为
│   ├── client.js         # 浏览器半 bundle（window.__ModuleLoader__.load 格式）
│   └── types/            # 类型声明占位
└── README.md
```

## 🧠 目录内容说明

`lib/client.js` 内的 `CATALOG` 对象由 AI 依据各包在 `profiles/node_modules/@deepseek-ai/<pkg>` 下的 `README.md` / `README.zh.md` 与 `package.json.description` 总结而成：

```js
{
  "@deepseek-ai/dsh-llm": { zh: "大模型服务", desc: "提供方无关的 LLM 抽象与流式调用接口…" },
  // …
}
```

新增或更新插件后，可编辑该对象补充 `{ moduleName: { zh, desc } }`，刷新页面即生效。

## 🔗 出处与开源声明

本项目是**基于多款开源项目的二次开发（整合）作品**，由 [ayrlinzz](https://github.com/ayrlinzz) 整理并开源。

### 上游开源项目

| 上游项目 | 在本仓库中的角色 | 许可证 |
|---|---|---|
| [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness) | 基础平台：插件协议（`dsh.client`）、Web UI「设置 → 插件」页与 `pluginInventory/list` 数据源、`@deepseek-ai/dsh-api-remotes`、`@deepseek-ai/dsh-client-ui-settings` 等扩展点 | MIT |
| [Koishi Cordis](https://github.com/koishijs/cordis) | 插件/依赖注入框架，`cordis.patch.yml` 挂载机制（DSH 内置分支 `@deepseek-ai/cordis`） | MIT |
| [React](https://github.com/facebook/react) | 浏览器半 UI 渲染（peerDependencies `^18.2.0`） | MIT |

### 作者原创部分（ayrlinzz）

- **插件本体代码**（「中文说明」标签页 UI、Host 半 `/zh-catalog/describe` 接口、AI 总结与缓存逻辑）为作者**原创编写**。
- **内置中文说明目录**（128 个 `@deepseek-ai/*` 模块的 `{zh, desc}` 条目）由作者组织 AI 依据各包 README 与 `package.json.description` 总结整理而成；原始内容版权归 DeepSeek Harness 团队，中文概括与整理为本仓库作者成果。

### 声明

- 本仓库代码是在 DeepSeek Harness 开放插件体系上进行的**二次开发**：仅使用其公开 API 与扩展点（`pluginInventory/list`、Host 半路由、`settings.section` slot）。
- 内置「中文说明」目录的**内容源自** DSH 各 `@deepseek-ai/*` 内置包的 README 与 `package.json.description`（由 AI 阅读后总结生成），原始版权归 DeepSeek Harness 团队所有。
- 上述**作者原创部分**（插件逻辑、界面、目录缓存逻辑）以 **MIT** 许可证发布（见 [LICENSE](LICENSE)），与上游一致；二次修改与再分发时请保留本声明及上游出处。
- 致谢：感谢 DeepSeek Harness 团队与所有上游开源社区的贡献。

## 📄 许可证

[MIT](LICENSE)

## 🧪 开发验证

`test-zh-catalog-host.mjs`（仓库根，见 git 历史或工作区副本）用 mock 的 `ctx` 离线验证 Host 半：路由注册、首次 AI 生成、缓存命中、404 防护。运行前复制到能解析 `@deepseek-ai/dsh-llm` 的位置（如 `profiles/node_modules/` 下）再执行：
`node test-zh-catalog-host.mjs`
