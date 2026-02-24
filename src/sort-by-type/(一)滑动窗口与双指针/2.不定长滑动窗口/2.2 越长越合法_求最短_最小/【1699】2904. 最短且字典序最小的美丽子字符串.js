/**
 * @description: 2904. 最短且字典序最小的美丽子字符串
 * @param {string} s
 * @param {number} k
 * @return {string}
 * @link https://leetcode.cn/problems/shortest-and-lexicographically-smallest-beautiful-string/description/
 * 
 * 给你一个二进制字符串 s 和一个正整数 k。
 * 如果 s 的某个子字符串中 1 的个数恰好等于 k，则称这个子字符串是一个 美丽子字符串。
 * 令 len 等于 最短 美丽子字符串的长度。
 * 返回长度等于 len 且字典序 最小 的美丽子字符串。如果 s 中不含美丽子字符串，则返回一个 空 字符串。
 * 对于相同长度的两个字符串 a 和 b，在 a 和 b 出现不同的第一个位置上，如果该位置上 a 中对应字母比 b 中对应字母在字母表中出现顺序更早，则认为 a 的字典序比 b 的字典序要小。
 * 
 * 子字符串 是字符串中的一个连续字符序列。
 * 
 * 提示： 1 <= s.length <= 100
 * 1 <= k <= s.length
 * 
 * 示例 1：
 * 输入：s = "100011001", k = 3
 * 输出："11001"
 * 解释：示例 1 中，s 中共有 5 个美丽子字符串：["100011","1001","11001","11001","00110"]。
 * 最短且字典序最小的美丽子字符串为 "11001" 。
 * 
 * 示例 2：
 * 输入：s = "1011", k = 2
 * 输出："11"
 * 解释：示例 2 中，s 中共有 2 个美丽子字符串：["1011","11"]。
 * 最短且字典序最小的美丽子字符串为 "11" 。
 * 
 * 示例 3：
 * 输入：s = "000", k = 1
 * 输出：""
 */
var shortestBeautifulSubstring = function (s, k) {
    // 求最短子串。条件：1个数===k且字典序最小
    // 什么时候移动左端点？窗口内1的个数 > k or 左端点是0
    if (s.replaceAll('0', '').length < k) return ''
    let ans = s, left = 0, cnt = 0
    for (let right = 0; right < s.length; right++) {
        cnt += s[right] - '0'
        while (cnt > k || s[left] === '0') {
            cnt -= s[left] - '0'
            left++
        }
        if (cnt === k) {
            const subStr = s.substring(left, right + 1)
            if (ans.length > subStr.length
                || ans.length === subStr.length && subStr < ans) {
                ans = subStr
            }
        }
    }
    return ans
};

// TEST
console.log(shortestBeautifulSubstring("100011001", 3)) // "11001"
console.log(shortestBeautifulSubstring("1011", 2)) // "11"
console.log(shortestBeautifulSubstring("000", 1)) // ""