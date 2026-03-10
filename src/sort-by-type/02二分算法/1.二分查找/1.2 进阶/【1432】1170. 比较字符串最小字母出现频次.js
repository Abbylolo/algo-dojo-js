/**
 * @description 1170. 比较字符串最小字母出现频次
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 * @link https://leetcode.cn/problems/compare-strings-by-frequency-of-the-smallest-character/description/
 * 
 * 给你两个字符串数组 queries 和 words ，请你返回一个整数数组 answer ，其中每个 answer[i] 是满足 f(queries[i]) < f(W) 的单词 W 的数目，f(x) 是字符串 x 中最小字母的出现频次。
 * 函数 f(x) 表示字符串 x 中最小字母的出现频次。例如，f("hello") = 1 ，因为最小的字母是 "e"，它出现了 1 次。
 * 
 * 示例 1：
 * 输入：queries = ["cbd"], words = ["zaaaz"]
 * 输出：[1]
 * 解释：查询 f("cbd") = 1，而 f("zaaaz") = 3 所以 f("cbd") < f("zaaaz")。
 */
/**
 * 法一：排序 + 二分
 */
var numSmallerByFrequency = function (queries, words) {
    let ans = []
    for (let i = 0; i < queries.length; i++) {
        queries[i] = f(queries[i])
    }
    for (let i = 0; i < words.length; i++) {
        words[i] = f(words[i])
    }
    words.sort((a, b) => a - b)
    for (let i = 0; i < queries.length; i++) {
        queries[i] = words.length - upperBound(words, queries[i])
    }
    return queries
};
// 求升序nums中第一个大于target值的索引值
function upperBound(nums, target) {
    let left = -1, right = nums.length
    while (left + 1 < right) {
        let mid = (left + right) >> 1
        if (nums[mid] > target) {
            right = mid
        } else {
            left = mid
        }
    }
    return right
}

function f(s) {
    let min = 'z', ch = 0
    for (const c of s) {
        if (c < min) {
            min = c
            ch = 1
        } else if (c === min) {
            ch++
        }
    }
    return ch
}

// TEST
console.log(numSmallerByFrequency(["cbd"], ["zaaaz"])); // [1]
console.log(numSmallerByFrequency(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"])); // [1,2]
