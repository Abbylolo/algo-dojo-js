/**
 * @description 2958. 最多 K 个重复元素的最长子数组
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/length-of-longest-subarray-with-at-most-k-frequency/
 * 
 * 给你一个整数数组 nums 和一个整数 k 。
 * 一个元素 x 在数组中的 频率 指的是它在数组中的出现次数。
 * 如果一个数组中所有元素的频率都 小于等于 k ，那么我们称这个数组是 好 数组。
 * 请你返回 nums 中 最长好 子数组的长度。
 * 子数组 指的是一个数组中一段连续非空的元素序列。
 * 
 * 示例 1：
 * 输入：nums = [1,2,3,1,2,3,1,2], k = 2
 * 输出：6
 */

var maxSubarrayLength = function (nums, k) {
    // 求最长子串。条件：每个字符的个数不能超过k
    let ans = 0, left = 0
    const cnt = new Map()
    for (let right = 0; right < nums.length; right++) {
        let c = nums[right]
        while ((cnt.get(c) ?? 0) >= k) {
            cnt.set(nums[left], cnt.get(nums[left]) - 1)
            left++
        }
        cnt.set(c, (cnt.get(c) ?? 0) + 1)
        ans = Math.max(ans, right - left + 1)
    }
    return ans
};