/**
 * @description 2024. 考试的最大困扰度
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/maximize-the-confusion-of-an-exam/
 * 
 * 一位老师正在出一场由 n 道判断题构成的考试，每道题的答案为 true （用 'T' 表示）或者 false （用 'F' 表示）。
 * 老师想增加学生对自己做出答案的不确定性，方法是 最大化 有 连续相同 结果的题数。（也就是连续出现 true 或者连续出现 false）。
 * 给你一个字符串 answerKey ，其中 answerKey[i] 是第 i 个问题的正确结果。除此以外，还给你一个整数 k ，表示你能进行以下操作的最多次数：
 * 每次操作中，将问题的正确答案改为 'T' 或者 'F' （也就是将 answerKey[i] 改为 'T' 或者 'F' ）。
 * 
 * 请你返回在不超过 k 次操作的情况下，最大 连续 'T' 或者 'F' 的数目。
 * 
 * 提示： 1 <= k <= answerKey.length <= 10^5
 * answerKey[i] 不是 'T' 就是 'F'
 * 
 * 示例 1：
 * 输入：answerKey = "TTFF", k = 2
 * 输出：4
 * 解释：我们可以将两个 'F' 都变为 'T' ，得到 answerKey = "TTTT" 。
 * 总共有四个连续的 'T' 。
 * 
 * 示例 2：
 * 输入：answerKey = "TFFT", k = 1
 * 输出：3
 * 解释：我们可以将最前面的 'T' 换成 'F' ，得到 answerKey = "FFFT" 。
 * 总共有三个连续的 'F' 。
 * 
 * 示例 3：
 * 输入：answerKey = "TTFTTFTT", k = 1
 * 输出：5
 * 解释：我们可以将中间的 'F' 换成 'T' ，得到 answerKey = "TTTTTFTT" 。
 * 总共有五个连续的 'T' 。
 */

var maxConsecutiveAnswers = function (answerKey, k) {
    // 求最大连续子串。条件：子串中t的个数和f的个数不得同时>k
    let ans = 0, left = 0
    const cnt = new Map()
    for (let right = 0; right < answerKey.length; right++) {
        let c = answerKey[right]
        cnt.set(c, (cnt.get(c) ?? 0) + 1)
        while (cnt.get('T') > k && cnt.get('F') > k) {
            cnt.set(answerKey[left], (cnt.get(answerKey[left] ?? 0) - 1))
            left++
        }
        ans = Math.max(ans, right - left + 1)
    }
    return ans
};

// TEST
console.log(maxConsecutiveAnswers("TTFF", 2)) // 4
console.log(maxConsecutiveAnswers("TFFT", 1)) // 3
console.log(maxConsecutiveAnswers("TTFTTFTT", 1)) // 5