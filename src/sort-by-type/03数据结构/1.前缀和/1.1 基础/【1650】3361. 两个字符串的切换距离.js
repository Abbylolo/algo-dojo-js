/**
 * @description 3361. 两个字符串的切换距离
 * @link https://leetcode.cn/problems/shift-distance-between-two-strings/description/
 * 给你两个长度相同的字符串 s 和 t ，以及两个整数数组 nextCost 和 previousCost 。
 * 一次操作中，你可以选择 s 中的一个下标 i ，执行以下操作 之一 ：
 *   将 s[i] 切换为字母表中的下一个字母，如果 s[i] == 'z' ，切换后得到 'a' 。操作的代价为 nextCost[j] ，其中 j 表示 s[i] 在字母表中的下标。
 *   将 s[i] 切换为字母表中的上一个字母，如果 s[i] == 'a' ，切换后得到 'z' 。操作的代价为 previousCost[j] ，其中 j 是 s[i] 在字母表中的下标。
 * 切换距离 指的是将字符串 s 变为字符串 t 的 最少 操作代价总和。
 * 请你返回从 s 到 t 的 切换距离 。
 */
/**
 * @param {string} s
 * @param {string} t
 * @param {number[]} nextCost
 * @param {number[]} previousCost
 * @return {number}
 */
// 重点：涉及前后相连的考虑环形，数组长度*2计算前缀和
var shiftDistance = function (s, t, nextCost, previousCost) {
    const SIGMA = 26, nextSum = Array(SIGMA * 2 + 1), preSum = Array(SIGMA * 2 + 1)
    nextSum[0] = 0, preSum[0] = 0
    for (let i = 0; i < SIGMA * 2; i++) {
        nextSum[i + 1] = nextSum[i] + nextCost[i % SIGMA]
        preSum[i + 1] = preSum[i] + previousCost[i % SIGMA]
    }
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        const sIndex = s[i].charCodeAt() - 'a'.charCodeAt(),
            tIndex = t[i].charCodeAt() - 'a'.charCodeAt()
        ans += Math.min(nextSum[sIndex > tIndex ? SIGMA + tIndex : tIndex] - nextSum[sIndex],
            preSum[sIndex < tIndex ? SIGMA + sIndex + 1 : sIndex + 1] - preSum[tIndex + 1])
    }
    return ans
};

// TEST
console.log(shiftDistance("abab", "baba", [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])) // 2