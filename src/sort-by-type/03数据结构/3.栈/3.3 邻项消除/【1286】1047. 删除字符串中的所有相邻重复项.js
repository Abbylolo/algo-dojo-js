/**
 * @description 1047. 删除字符串中的所有相邻重复项
 * @link https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/
 * 给出由小写字母组成的字符串 s，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
 * 在 s 上反复执行重复项删除操作，直到无法继续删除。
 * 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let ans = []
    for (const c of s) {
        if (ans.at(-1) === c) {
            ans.pop()
        } else {
            ans.push(c)
        }
    }
    return ans.join('')
};

// TEST
console.log(removeDuplicates('abbaca')) // 'ca'