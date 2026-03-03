/**
 * @description 3325. 字符至少出现 K 次的子字符串 I
 * @param {string} s
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/count-substrings-with-k-frequency-characters-i/description/
 * 
 * 给你一个字符串 s 和一个整数 k，在 s 的所有子字符串中，请你统计并返回 至少有一个 字符 至少出现 k 次的子字符串总数。
 * 子字符串 是字符串中的一个连续、 非空 的字符序列。
 * 
 * 示例 1：
 * 输入：s = "abacb", k = 2
 * 输出：4
 * 解释：符合要求的子字符串如下：
 * - "abacb"（"a" 出现 2 次）
 * - "abacb"（"b" 出现 2 次）
 * - "abacb"（"ab" 出现 2 次）
 * - "abacb"（"bacb" 出现 2 次）
 */
var numberOfSubstrings = function (s, k) {
    // 越长越合理=》求最短子串
    let ans = 0, left = 0, maxCount = 0
    const cnt = new Map()
    for (let right = 0; right < s.length; right++) {
        cnt.set(s[right], (cnt.get(s[right]) ?? 0) + 1)
        maxCount = Math.max(...cnt.values())
        while (maxCount >= k) {
            cnt.set(s[left], cnt.get(s[left]) - 1)
            if (cnt.get(s[left]) === 0) cnt.delete(s[left])
            maxCount = Math.max(...cnt.values())
            left++
        }
        ans += left
    }
    return ans
};

// TEST
console.log(numberOfSubstrings("abacb", 2)) // 4