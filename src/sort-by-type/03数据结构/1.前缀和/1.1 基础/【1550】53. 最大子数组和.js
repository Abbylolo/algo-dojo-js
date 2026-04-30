/**
 * @description 53. 最大子数组和
 * @link https://leetcode.cn/problems/maximum-subarray/description/
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组是数组中的一个连续部分。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 最大和的连续子数组 =》遍历i，（当前前缀和 - i-1最小前缀和）max
var maxSubArray = function (nums) {
    let ans = nums[0], minSum = 0, curSum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        minSum = Math.min(minSum, curSum)
        curSum += nums[i]
        ans = Math.max(ans, curSum - minSum)
    }
    return ans
};

// TEST
console.log(maxSubArray([1, -3, 2, 3, -4])) // 5