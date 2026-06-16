/**
 * @description 3561. 移除相邻字符
 * @link https://leetcode.cn/problems/resulting-string-after-adjacent-removals/description/
 * 给你一个由小写英文字母组成的字符串 s。
 * 你 必须 在字符串 s 中至少存在两个 连续 字符时，反复执行以下操作：
 *      移除字符串中 最左边 的一对按照字母表 连续 的相邻字符（无论是按顺序还是逆序，例如 'a' 和 'b'，或 'b' 和 'a'）。
 *      将剩余字符向左移动以填补空隙。
 * 当无法再执行任何操作时，返回最终的字符串。
 * 注意：字母表是循环的，因此 'a' 和 'z' 也视为连续。
 */
/**
 * @param {string} s
 * @return {string}
 */
var resultingString = function (s) {
    const res = []
    for (const char of s) {
        if (
            res.length &&
            [1, 25].includes(Math.abs(res[res.length - 1].charCodeAt(0) - char.charCodeAt(0)))
        ) {
            res.pop()
        } else {
            res.push(char)
        }
    }
    return res.join('')
};

// TEST
console.log(resultingString('zadb'))
