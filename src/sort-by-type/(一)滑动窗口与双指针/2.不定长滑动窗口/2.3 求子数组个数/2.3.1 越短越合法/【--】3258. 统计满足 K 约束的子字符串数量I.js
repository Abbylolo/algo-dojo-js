/**
 * @description 3258. 统计满足 K 约束的子字符串数量I
 * @param {string} s
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/count-substrings-that-satisfy-k-constraint-i/description/
 * @tags 滑动窗口
 * 
 * 给你一个 二进制 字符串 s 和一个整数 k。
 * 
 * 如果一个 二进制 字符串满足以下任一条件，则认为该字符串满足 k 约束：
 * 字符串中 0 的数量最多为 k。
 * 字符串中 1 的数量最多为 k。
 * 返回一个整数，表示 s 的所有满足 k 约束 的子字符串数量。
 * 
 * 示例 1：
 * 输入：s = "10101", k = 1
 * 输出：12
 * 解释：
 * 除了 s[0] = "1" 以外，所有子字符串都满足 k 约束。
 * 
 * 示例 2：
 * 输入：s = "1010101", k = 2
 * 输出：25
 * 解释：
 * 除了 s[0] = "1" 以外，所有子字符串都满足 k 约束。
 * 
 * 示例 3：
 * 输入：s = "11111", k = 1
 * 输出：15
 * 解释：
 * 所有子字符串都满足 k 约束。
 */
var countKConstraintSubstrings = function (s, k) {
    let ans = 0, left = 0, cnt = new Map()
    for (let right = 0; right < s.length; right++) {
        cnt.set(s[right], (cnt.get(s[right]) ?? 0) + 1)
        while (cnt.get('1') > k && cnt.get('0') > k) {
            cnt.set(s[left], cnt.get(s[left]) - 1)
            left++
        }
        ans += right - left + 1
    }
    return ans
};

// TEST
console.log(countKConstraintSubstrings("10101", 1)) // 12
console.log(countKConstraintSubstrings("1010101", 2)) // 25
console.log(countKConstraintSubstrings("11111", 1)) // 15
