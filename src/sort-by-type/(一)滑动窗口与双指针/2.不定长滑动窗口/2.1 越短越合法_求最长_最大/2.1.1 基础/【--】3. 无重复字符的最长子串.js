/**
 * @description 3. 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 * @link https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 * 
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
 * 
 * 示例 1:
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 示例 2:
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 示例 3:
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

/**
 * 法一：哈希表（Map）
 * 时间复杂度：O(n) 空间复杂度：O(1)
 */
var lengthOfLongestSubstring = function (s) {
    const cnt = new Map()
    let ans = 0, left = 0
    for (let right = 0; right < s.length; right++) {
        const c = s[right]
        cnt.set(c, (cnt.get(c) ?? 0) + 1)
        while (cnt.get(c) > 1) {
            cnt.set(s[left], cnt.get(s[left]) - 1)
            left++
        }
        ans = Math.max(ans, right - left + 1)
    }
    return ans
};

/**
 * 法二：哈希表（Set）
 * 时间复杂度：O(n) 空间复杂度：O(1)
 */
var lengthOfLongestSubstring = function (s) {
    const window = new Set()
    let ans = 0, left = 0
    for (let right = 0; right < s.length; right++) {
        const c = s[right]
        while (window.has(c)) {
            window.delete(s[left])
            left++
        }
        window.add(c)
        ans = Math.max(ans, right - left + 1)
    }
    return ans
};

// 测试
console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3
