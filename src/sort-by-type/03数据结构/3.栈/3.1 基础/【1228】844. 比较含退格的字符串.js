/**
 * @description 844. 比较含退格的字符串
 * @link https://leetcode.cn/problems/backspace-string-compare/description/
 * 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。
 * 注意：如果对空文本输入退格字符，文本继续为空。
 * 
 * 示例 1：
 *  输入：s = "ab#c", t = "ad#c"
 *  输出：true
 *  解释：s 和 t 都会变成 "ac"。
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    // 入栈 - 遇到#则出栈
    return processStr(s) === processStr(t)
};

function processStr(str) {
    const arr = str.split(''), res = []
    for (const c of arr) {
        if (c === '#') {
            res.join('') != '' && res.pop()
        } else {
            res.push(c)
        }
    }
    return res.join('')
}

// TEST
console.log(backspaceCompare('ab#c', 'ad#c')) // true