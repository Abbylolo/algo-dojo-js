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

// 生成代码片段内容
const snippetContent = {
    "Review Record": {
        "prefix": ["review", "rv", "复习"],  // 触发这个代码片段的快捷方式
        "body": [
            `reviewRecord：[]${getFutureDate(1)} []${getFutureDate(3)} []${getFutureDate(7)} []${getFutureDate(15)}`
        ],
        "description": "生成reviewRecord时间"
    }
};

// 写入文件
const snippetPath = path.join(__dirname, '../.vscode/reviewRecord.code-snippets');
fs.writeFileSync(snippetPath, JSON.stringify(snippetContent, null, 2), 'utf8');

console.log('代码片段已更新！'); 