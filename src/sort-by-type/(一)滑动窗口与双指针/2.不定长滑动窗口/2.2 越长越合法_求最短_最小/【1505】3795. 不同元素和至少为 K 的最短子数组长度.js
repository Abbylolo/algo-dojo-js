/**
 * @description 3795. 不同元素和至少为 K 的最短子数组长度
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k/
 * 
 * 给你一个整数数组 nums 和一个整数 k。
 * 返回一个 子数组 的 最小 长度，使得该子数组中出现的 不同 值之和（每个值只计算一次）至少 为 k。如果不存在这样的子数组，则返回 -1。
 * 子数组 是数组中 连续 的一部分。
 * 
 * 提示： 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^5
 * 1 <= k <= 10^9
 * 
 * 示例 1：
 * 输入：nums = [3,2,3,4], k = 5
 * 输出：2
 * 
 * 示例 2：
 * 输入：nums = [5,5,4], k = 5
 * 输出：1
 */
var minLength = function (nums, k) {
    let ans = nums.length + 1, left = 0, sum = 0
    const cnt = new Map()
    for (let right = 0; right < nums.length; right++) {
        let c = nums[right]
        cnt.set(c, (cnt.get(c) ?? 0) + 1)
        if (cnt.get(c) <= 1) {
            sum += c
        }
        while (sum >= k) {
            ans = Math.min(ans, right - left + 1)
            if (cnt.get(nums[left]) === 1) {
                sum -= nums[left]
            }
            cnt.set(nums[left], cnt.get(nums[left]) - 1)
            left++
        }
    }
    return ans > nums.length ? -1 : ans
};

// 测试
console.log(minLength([1], 1));
console.log(minLength([1, 2], 4));