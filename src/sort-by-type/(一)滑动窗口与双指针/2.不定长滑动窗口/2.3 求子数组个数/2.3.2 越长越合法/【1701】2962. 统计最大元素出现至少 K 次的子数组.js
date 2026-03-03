/**
 * @description 统计最大元素出现至少 K 次的子数组
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/count-subarrays-where-max-element-appears-at-least-k-times/description/
 * 
 * 给你一个整数数组 nums 和一个 正整数 k 。
 * 请你统计有多少满足 「 nums 中的 最大 元素」至少出现 k 次的子数组，并返回满足这一条件的子数组的数目。
 * 子数组是数组中的一个连续元素序列。
 * 
 * 示例 1：
 * 输入：nums = [1,3,2,3,3], k = 2
 * 输出：6
 * 解释：包含元素 3 至少 2 次的子数组为：[1,3,2,3]、[1,3,2,3,3]、[3,2,3]、[3,2,3,3]、[2,3,3] 和 [3,3] 。
 */
var countSubarrays = function (nums, k) {
    // 越长越合法，求最短子串
    const max = Math.max(...nums)
    let ans = 0, left = 0, cnt = 0
    for (let right = 0; right < nums.length; right++) {
        // 统计子串最大元素出现个数
        if (nums[right] === max) {
            cnt++
        }
        while (cnt >= k) {
            if (nums[left] === max) {
                cnt--
            }
            left++
        }
        ans += left
    }
    return ans
};