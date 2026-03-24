/**
 * @description 每个小孩最多能分到多少糖果
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 * @link https://leetcode.cn/problems/kids-with-the-greatest-number-of-candies/
 * 
 * 给你一个 下标从 0 开始 的整数数组 candies 。数组中的每个元素表示大小为 candies[i] 的一堆糖果。你可以将每堆糖果分成任意数量的 子堆 ，但 无法 再将两堆合并到一起。
 * 另给你一个整数 k 。你需要将这些糖果分配给 k 个小孩，使每个小孩分到 相同 数量的糖果。每个小孩可以拿走 至多一堆 糖果，有些糖果可能会不被分配。
 * 返回每个小孩可以拿走的 最大糖果数目 。
 * 
 * 示例 1：
 * 输入：candies = [5,8,6], k = 3
 * 输出：5
 * 解释：可以将 candies[1] 分成大小分别为 5 和 3 的两堆，然后把 candies[2] 分成大小分别为 5 和 1 的两堆。现在就有五堆大小分别为 5、5、3、5 和 1 的糖果。可以把 3 堆大小为 5 的糖果分给 3 个小孩。可以证明无法让每个小孩得到超过 5 颗糖果。
 */
/**
 * 单调性：每堆糖果数量m越大，越不符合
 * 答案区间：[0, max(candies)] 优化为 [0, Math.min(sum(candies) / k, max(candies))]
 */
var maximumCandies = function (candies, k) {
    let left = -1, right = Math.min(Math.max(...candies), Math.floor(candies.reduce((a, b) => a + b, 0) / k)) + 1
    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2)
        if (check(candies, k, mid)) {
            left = mid
        } else {
            right = mid
        }
    }
    return left === -1 ? 0 : left

};
function check(candies, k, m) {
    let cnt = 0
    candies.forEach(v => cnt += Math.floor(v / m))
    return cnt >= k
}