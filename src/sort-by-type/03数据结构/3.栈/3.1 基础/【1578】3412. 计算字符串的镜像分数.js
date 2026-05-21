/**
 * @description 3412. 计算字符串的镜像分数
 * @link https://leetcode.cn/problems/find-mirror-score-of-a-string/description/
 * 
 * 题目描述：
 * 给你一个字符串 s。
 * 英文字母中每个字母的 镜像 定义为反转字母表之后对应位置上的字母。例如，'a' 的镜像是 'z'，'y' 的镜像是 'b'。
 * 最初，字符串 s 中的所有字符都 未标记 。
 * 字符串 s 的初始分数为 0 ，你需要对其执行以下过程：
 * 
 * 从左到右遍历字符串。
 * 对于每个下标 i ，找到距离最近的 未标记 下标 j，下标 j 需要满足 j < i 且 s[j] 是 s[i] 的镜像。然后 标记 下标 i 和 j，总分加上 i - j 的值。
 * 如果对于下标 i，不存在满足条件的下标 j，则跳过该下标，继续处理下一个下标，不需要进行标记。
 * 返回最终的总分。
 */

/**
 * @param {string} s
 * @return {number}
 */
// 思路： 26个单调栈记录每个字母出现位置
var calculateScore = function (s) {
    const stk = Array.from({ length: 26 }, () => [])
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i) - 'a'.charCodeAt(0)
        const mirror = 25 - c
        if (stk[mirror].length > 0) {
            ans += i - stk[mirror].pop()
        } else {
            stk[c].push(i)
        }
    }
    return ans
}

// TEST
console.log(calculateScore("abba")) // 4
console.log(calculateScore("abcd")) // 0
