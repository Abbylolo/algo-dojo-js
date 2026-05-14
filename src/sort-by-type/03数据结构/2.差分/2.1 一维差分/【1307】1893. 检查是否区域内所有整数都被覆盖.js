/**
 * @description 1893. 检查是否区域内所有整数都被覆盖 
 * @link https://leetcode.cn/problems/check-if-all-the-integers-in-a-range-are-covered/description/
 * 给你一个二维整数数组 ranges 和两个整数 left 和 right 。每个 ranges[i] = [starti, endi] 表示一个从 starti 到 endi 的 闭区间 。
 * 如果闭区间 [left, right] 内每个整数都被 ranges 中 至少一个 区间覆盖，那么请你返回 true ，否则返回 false 。
 * 已知区间 ranges[i] = [starti, endi] ，如果整数 x 满足 starti <= x <= endi ，那么我们称整数x 被覆盖了。
 */
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
// 1、计算差分数组 2、前缀和判断
var isCovered = function (ranges, left, right) {
    const d = Array(52).fill(0)
    for (const [from, to] of ranges) {
        d[from]++
        d[to + 1]--
    }
    let s = 0
    for (let i = 1; i <= right; i++) {
        s += d[i]
        if (i >= left && s <= 0) {
            return false
        }
    }
    return true
};