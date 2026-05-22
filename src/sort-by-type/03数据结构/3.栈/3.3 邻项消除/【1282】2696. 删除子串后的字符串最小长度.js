/**
 * @description 2696. 删除子串后的字符串最小长度
 * @link https://leetcode.cn/problems/minimum-string-length-after-removing-substrings/description/
 * 
 * 给你一个仅由大写英文字符组成的字符串 s。
 * 你可以对此字符串执行一些操作，在每一步操作中，你可以从 s 中删除任一个 "AB" 或 "CD" 子字符串。
 * 通过执行操作，删除所有 "AB" 和 "CD" 子串，返回可获得的最终字符串的最小可能长度。
 * 
 * 注意：删除子串后，重新连接出的字符串可能会产生新的 "AB" 或 "CD" 子串。
 */
/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    const arr = s.split('')
    const ans = []
    for (const c of arr) {
        const endChar = ans.length ? ans[ans.length - 1] : ''
        if ((c === 'B' && endChar === 'A') || (c === 'D' && endChar === 'C')) {
            ans.pop()
        } else {
            ans.push(c)
        }
    }
    return ans.length
};

// TEST
console.log(minLength('ABFCACDB')) // 2