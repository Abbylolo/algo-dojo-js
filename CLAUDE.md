# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 仓库简介

这是一个用 JavaScript 记录算法刷题与笔记的仓库。

主要包含两块内容：
- `src/easy/`、`src/middle/`：按难度划分的单题解答文件。
- `src/sort-by-type/`：按解题方法/套路（如滑动窗口、二分等）分类整理的题解与笔记（目录多为中文），常配套 `README.md` 说明与 `assets/` 图片。

另外还包含一套用于“按记忆曲线生成复习时间”的 VS Code 代码片段（snippet）自动更新脚本。

## 常用命令

### 安装依赖

```bash
npm i
```

### 更新 VS Code 复习 snippet（一次性执行）

会根据“今天 + 1/3/7/15 天”计算日期，并写入 `.vscode/reviewRecord.code-snippets`。

```bash
npm run update-snippet
# 或
node scripts/updateReviewSnippet.js
```

### PM2 进程管理（snippet updater）

仓库中提供了 `ecosystem.config.js`，定义了名为 `snippet-updater` 的应用。

```bash
# 启动
npm run pm2:start
# 停止
npm run pm2:stop
# 重启
npm run pm2:restart

# 查看日志/状态
npm run pm2:logs
npm run pm2:status
npm run pm2:monit
```

### 调试单个题解文件（VS Code）

`.vscode/launch.json` 配置了运行当前打开文件：
- 配置名：“调试当前文件”
- 执行路径：`${workspaceFolder}/${relativeFile}`

## 代码结构（大图景）

### 算法题解

- 题解以独立的 `.js` 文件为主（通常是独立函数/实现）。
- 基本没有共享的工具库层，每个文件一般自包含实现。

核心目录：
- `src/easy/`、`src/middle/`：按难度的题解集合。
- `src/sort-by-type/`：按套路分类的知识库。子目录通常包含：
  - `README.md`：该套路的整理/笔记
  - 若干题解文件（文件名常类似 `【难度/编号】<题目>.js`）
  - 可选的 `assets/`：README 引用的图片

### 复习 snippet 自动化

目标：生成一个 VS Code snippet，用于插入带未来复习日期的 `reviewRecord:` 行。

相关文件：
- `scripts/updateReviewSnippet.js`：计算日期并写入 `.vscode/reviewRecord.code-snippets`。
- `ecosystem.config.js`：PM2 配置（应用名 `snippet-updater`，运行上述脚本）。
- `.vscode/tasks.json`：VS Code 任务配置，在打开文件夹时启动 PM2、关闭文件夹时停止。
- `scripts/autoUpdateSnippet.js`：旧的/目前未使用的方案（基于 `node-cron` 的定时任务，文件注释说明已不再使用）。

## 注意事项

- 目录/文件名包含大量中文与特殊字符；需要在命令行操作时建议从 `git status` 或文件管理器复制路径。
- 当前仓库未发现已配置的测试/代码风格工具（根目录没有 Jest/Vitest 配置）。若后续引入并接入 npm scripts，请在此补充对应命令。
