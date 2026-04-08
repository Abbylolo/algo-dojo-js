/**
 * @description 1930. 长度为 3 的不同回文子序列
 * @link https://leetcode.cn/problems/unique-length-3-palindromic-subsequences/description/
 * 给你一个字符串 s ，返回 s 中 长度为 3 的不同回文子序列 的个数。
 * 即便存在多种方法来构建相同的子序列，但相同的子序列只计数一次。
 * 回文 是正着读和反着读一样的字符串。
 * 子序列 是由原字符串删除其中部分字符（也可以不删除）且不改变剩余字符之间相对顺序形成的一个新字符串。
 * 例如，"ace" 是 "abcde" 的一个子序列。
 * 
 * 示例 1：
 * 输入：s = "aabca"
 * 输出：3
 * 解释：长度为 3 的 3 个回文子序列分别是：
 * - "aba" ("aabca" 的子序列)
 * - "aaa" ("aabca" 的子序列)
 * - "aca" ("aabca" 的子序列)
 */

/**
 * @param {string} s
 * @return {number}
 */
/**
 * 法一：枚举两侧
 * 思路：由于左右值相等，枚举两端值分别为a-z时中间字母个数（去重）进行累加
 */
var countPalindromicSubsequence = function (s) {
    let count = 0
    // 枚举两侧：遍历26个小写字母
    for (let alpha = 'a'.charCodeAt(0); alpha <= 'z'.charCodeAt(0); alpha++) {
        // 计算以alpha为两端的不同回文子序列个数 =》 统计中间不重复字母个数
        const fixedC = String.fromCharCode(alpha)
        const i = s.indexOf(fixedC) // 最左端的alpha下标
        if (i < 0) { // s中没有alpha
            continue;
        }
        const k = s.lastIndexOf(fixedC) // 最右端的alpha下标
        const arr = Array(26).fill(0) // 统计每个字母出现次数
        for (let j = i + 1; j < k; j++) {
            const index = s.charCodeAt(j) - 'a'.charCodeAt(0)
            if (!arr[index]) {
                count++
                arr[index] = 1
            }

        }
    }

    return count
};

// TEST
console.log(countPalindromicSubsequence("aabca")) // 3
