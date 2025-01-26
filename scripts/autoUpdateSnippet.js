// 自动更新代码片段-定时任务（暂时不用这个文件了，用PM2实现打开项目时自动执行脚本）
const cron = require('node-cron');
const fs = require('fs');
const path = require('path');

// 生成日期字符串，格式：YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 生成未来n天的日期
function getFutureDate(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return formatDate(date);
}

// 更新代码片段的函数
function updateSnippet() {
    const snippetContent = {
        "Review Record": {
            "prefix": "review",
            "body": [
                `reviewRecord：[]${getFutureDate(1)} []${getFutureDate(3)} []${getFutureDate(7)} []${getFutureDate(15)}`
            ],
            "description": "生成reviewRecord时间"
        }
    };

    const snippetPath = path.join(__dirname, '../.vscode/reviewRecord.code-snippets');
    fs.writeFileSync(snippetPath, JSON.stringify(snippetContent, null, 2), 'utf8');
    console.log(`代码片段已更新！当前时间：${new Date().toLocaleString()}`);
}

// 立即执行一次
updateSnippet();

// 设置定时任务：每天凌晨 00:01 执行
cron.schedule('1 0 * * *', () => {
    updateSnippet();
});

console.log('自动更新服务已启动！'); 