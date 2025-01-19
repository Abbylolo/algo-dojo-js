/**
 * @description 53. 最大子数组和
 * @param {number[]} nums
 * @return {number}
 *
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 子数组 是数组中的一个连续部分。
 *
 * 示例 1：
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 */

/**
 * 法一：贪心算法
 * 时间复杂度：O(n) 空间复杂度：O(1)
 * 贪心算法：在对问题求解时，总是做出在当前看来是最好的选择。
 * 思路：若当前指针所指元素之前的和小于0，则丢弃当前元素之前的数列
 */
var maxSubArray = function (nums) {
    let currSum = (maxSum = nums[0]);
    for (let i = 1; i < nums.length; i++) {
      currSum = Math.max(nums[i], currSum + nums[i]);
      maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
};

/**
 * 法二：动态规划
 * 时间复杂度：O(n) 空间复杂度：O(n)
 * 动态规划：动态规划（Dynamic Programming, DP）是一种通过将问题分解为更小的子问题，逐步求解并存储中间结果，从而避免重复计算的优化方法。它适用于具有 重叠子问题 和 最优子结构 的问题。
 * 思路：若前一个元素大于0，则将当前元素与前一个元素相加，否则当前元素为最大和，将该最大和记录到当前元素值上
 */
maxSubArray = function (nums) {
    let dp = nums[0], // 当前元素位置最大和
      maxSum = nums[0]; // 最大和
    for (let i = 1; i < nums.length; i++) {
      dp = Math.max(nums[i], nums[i] + dp); // 若前一个元素大于0，则将当前元素与前一个元素相加，否则当前元素为最大和，将该最大和记录到当前元素值上
      maxSum = Math.max(dp, maxSum);
    }
    return maxSum;
}





// 测试
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log('输入:', nums)
console.log('输出:', maxSubArray(nums))

const nums2 = [1]
console.log('输入:', nums2)
console.log('输出:', maxSubArray(nums2))

const nums3 = [5, 4, -1, 7, 8]
console.log('输入:', nums3)
console.log('输出:', maxSubArray(nums3))

const nums4 = [-1]
console.log('输入:', nums4)
console.log('输出:', maxSubArray(nums4))

