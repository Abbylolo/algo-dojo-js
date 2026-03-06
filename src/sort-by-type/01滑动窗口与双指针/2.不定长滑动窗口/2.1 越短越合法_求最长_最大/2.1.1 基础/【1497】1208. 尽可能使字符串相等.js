/**
 * @description 1208. 尽可能使字符串相等
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 * @link https://leetcode.cn/problems/get-equal-substrings-within-budget/
 * 
 * 给你两个长度相同的字符串，s 和 t。
 * 将 s 中的第 i 个字符变到 t 中的第 i 个字符需要 |s[i] - t[i]| 的开销（开销可能为 0），也就是两个字符的 ASCII 码值的差的绝对值。
 * 用于变更字符串的最大预算是 maxCost。在转化字符串时，总开销应当小于等于该预算，这也意味着字符串的转化可能是不完全的。
 * 如果你可以将 s 的子字符串转化为它在 t 中对应的子字符串，则返回可以转化的最大长度。
 * 如果 s 中没有子字符串可以转化成 t 中对应的子字符串，则返回 0。
 * 
 * 示例 1：
 * 输入：s = "abcd", t = "bcdf", maxCost = 3
 * 输出：3
 * 解释：s 中的 "abc" 可以变为 "bcd"。开销为 3，所以最大长度为 3。
 */
var equalSubstring = function (s, t, maxCost) {
    // 求转化的最大长度。条件：sumCost <= maxCost
    let ans = 0, left = 0, sumCost = 0
    for (let right = 0; right < s.length; right++) {
        const diff = Math.abs(t[right].charCodeAt() - s[right].charCodeAt())
        sumCost += diff
        // while可以改成if：if内将left++然后right++相当于平移窗口，因为求的是最大窗口，即窗口[left, right)滑动时内可能不符合条件，但并不妨碍找到最大窗口
        while (sumCost > maxCost) {
            sumCost -= Math.abs(t[left].charCodeAt() - s[left].charCodeAt())
            left++
        }
        ans = Math.max(ans, right - left + 1)
    }
    return ans
};

// TEST
console.log(equalSubstring("anryddgaqpjdw", "zjhotgdlmadcf", 5)) // 1