/**
 * @description 1358. 包含所有三种字符的子字符串数目
 * @param {string} s
 * @return {number}
 * @link https://leetcode.cn/problems/number-of-substrings-containing-all-three-characters/
 * 
 * 给你一个字符串 s ，它只包含三种字符 a, b 和 c 。
 * 请你返回 a，b 和 c 都 至少 出现过一次的子字符串数目。
 * 
 * 提示：
 * 3 <= s.length <= 5 x 10^4
 * s 只包含字符 a，b 和 c 。
 * 
 * 示例 1：
 * 输入：s = "abcabc"
 * 输出：10
 * 解释：包含 a，b 和 c 各至少一次的子字符串为 "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" 和 "abc" (相同字符串算多次)。
 */
var numberOfSubstrings = function (s) {
    // 求子串+越长越合法（单调性）=》滑动窗口 =〉求每个右端点最短子串，累加left个数
    let ans = 0, left = 0, cnt = new Map()
    for (let right = 0; right < s.length; right++) {
        cnt.set(s[right], (cnt.get(s[right]) ?? 0) + 1)
        // 如果不合法，不再操作移动右端点
        // 如果合法，则开始内循环，缩小左端点直到不合法，以找出最短子串
        while (['a', 'b', 'c'].every(ch => (cnt.get(ch) ?? 0) > 0)) {
            cnt.set(s[left], cnt.get(s[left]) - 1)
            left++
        }
        // 退出循环 说明[left, right]不符合，[left-1, right]...[0, right]都符合，也就是有left个子数组
        // 如果一开始就不合法left是0，只有合法才会进while内层循环，left才会有值去累加，left标记最短合法子串的位置
        ans += left
    }
    return ans
};

// TEST
console.log(numberOfSubstrings('abcabc')) // 10
