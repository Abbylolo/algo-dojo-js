/**
 * @description 3090.每个字符最多出现两次的最长子字符串
 * @param {string} s
 * @return {number}
 * @link https://leetcode.cn/problems/maximum-length-substring-with-two-occurrences/description/
 * 
 * 给你一个字符串 s ，请找出满足每个字符最多出现两次的最长子字符串，并返回该子字符串的 最大 长度。
 * 
 * 示例 1:
 * 输入：s = "bcbbbcba"
 * 输出：4
 */

var maximumLengthSubstring = function (s) {
    let left = 0, cnt = new Map(), ans = 0
    for (let right = 0; right < s.length; right++) {
        let c = s[right]
        cnt.set(c, (cnt.get(c) ?? 0) + 1)
        while (cnt.get(c) > 2) {
            cnt.set(s[left], cnt.get(s[left]) - 1)
            left++
        }
        ans = Math.max(ans, right - left + 1)
    }
    return ans
};

// test
console.log(maximumLengthSubstring("bcbbbcba")) // 4