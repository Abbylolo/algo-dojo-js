/**
 * @description 1209. 删除字符串中的所有相邻重复项 II
 * @link https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string-ii/description/
 * 给你一个字符串 s，「k 倍重复项删除操作」将会从 s 中选择 k 个相邻且相等的字母，并删除它们，使被删去的字符串的左侧和右侧连在一起。
 * 你需要对 s 重复进行无限次这样的删除操作，直到无法继续为止。
 * 在执行完所有删除操作后，返回最终得到的字符串。
 * 本题答案保证唯一。
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    const res = [] // 存每个字符，及连续出现的次数
    for (let i = 0; i < s.length; i++) {
        let n = res.length
        if (n && s[i] === res[n - 1][0]) {
            res[n - 1][1]++
            if (res[n - 1][1] === k) {
                res.pop()
            }
        } else {
            res.push([s[i], 1])
        }
    }
    return res.map(([c, k]) => c.repeat(k)).join('')
};

// TEST
console.log(removeDuplicates("deeedbbcccbdaa", 3)) // "aa"