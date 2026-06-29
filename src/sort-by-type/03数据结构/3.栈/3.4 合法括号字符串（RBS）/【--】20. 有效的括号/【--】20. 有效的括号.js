/**
 * @description 20. 有效的括号
 * @link https://leetcode.cn/problems/valid-parentheses/description/
 * 给定一个只包含 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 *      左括号必须用相同类型的右括号闭合。
 *      左括号必须以正确的顺序闭合。
 *      每个右括号都有一个对应的相同类型的左括号。  
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 != 0) {
        return false
    }
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = []
    for (const c of s) {
        if (c in pairs) {
            if (!stack.length || stack[stack.length - 1] != pairs[c]) {
                return false
            }
            stack.pop()
        } else {
            stack.push(c)
        }
    }
    return !stack.length
};

// 测试
console.log(isValid('()')) // true