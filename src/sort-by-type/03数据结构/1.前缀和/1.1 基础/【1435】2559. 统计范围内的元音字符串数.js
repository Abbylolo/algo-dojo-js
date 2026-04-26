/**
 * @description 2559. 统计范围内的元音字符串数
 * @link https://leetcode.cn/problems/count-vowel-strings-in-ranges/description/
 * 给你一个下标从 0 开始的字符串数组 words 以及一个二维整数数组 queries 。
 * 每个查询 queries[i] = [li, ri] 会要求我们统计在 words 中下标在 li 到 ri 范围内（包含 这两个值）并且以元音开头和结尾的字符串的数目。
 * 返回一个整数数组，其中数组的第 i 个元素对应第 i 个查询的答案。
 * 注意：元音字母是 'a'、'e'、'i'、'o' 和 'u' 。
 */
/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
// 统计前缀和：元音字符串个数
var vowelStrings = function (words, queries) {
    const cnt = Array(words.length + 1), ans = []
    cnt[0] = 0
    for (let i = 0; i < words.length; i++) {
        cnt[i + 1] = cnt[i] + (isYy(words[i]) ? 1 : 0)
    }
    for (let i = 0; i < queries.length; i++) {
        ans.push(cnt[queries[i][1] + 1] - cnt[queries[i][0]])
    }
    return ans
};
function isYy(str) {
    const arr = ['a', 'e', 'i', 'o', 'u']
    return arr.includes(str[0]) && arr.includes(str[str.length - 1])
}

// TEST
console.log(vowelStrings(["aba", "bcb", "ece", "aa", "e"], [[0, 2], [1, 4], [1, 1]])) // [2, 3, 0]