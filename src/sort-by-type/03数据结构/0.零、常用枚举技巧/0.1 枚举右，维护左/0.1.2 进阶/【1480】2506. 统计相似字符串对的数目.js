/**
 * @description 2506. 统计相似字符串对的数目
 * @link https://leetcode.cn/problems/count-pairs-of-similar-strings/description/
 * 给你一个下标从 0 开始的字符串数组 words 。
 * 如果两个字符串由相同的字符组成，则认为这两个字符串 相似 。
 * 例如，"abca" 和 "cba" 相似，因为它们都由字符 'a'、'b'、'c' 组成。
 * 然而，"abacba" 和 "bcfd" 不相似，因为它们不是相同字符组成的。
 * 请你找出满足字符串 words[i] 和 words[j] 相似的下标对 (i, j) ，并返回下标对的数目，其中 0 <= i < j <= words.length - 1 。
 * 
 * 示例 1：
 * 输入：words = ["aba","aabb","abcd","bac","aabc"]
 * 输出：2
 * 解释：共有 2 对满足条件：
 * - i = 0 且 j = 1 ：words[0] 和 words[1] 只由字符 'a' 和 'b' 组成。
 * - i = 3 且 j = 4 ：words[3] 和 words[4] 只由字符 'a'、'b' 和 'c' 。
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
    // 维护左边队列字符串个数。如何抽取？转为二进制存储字母出现位置做或运算
    const sMap = new Map()
    let count = 0
    for (const word of words) {
        let simWord
        for (const c of word) {
            simWord |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0)) // 每个1的二进制位代表一个字母
        }
        count += sMap.get(simWord) ?? 0
        sMap.set(simWord, (sMap.get(simWord) ?? 0) + 1)
    }
    return count
};

// 测试
console.log(similarPairs(["aba","aabb","abcd","bac","aabc"])) // 2