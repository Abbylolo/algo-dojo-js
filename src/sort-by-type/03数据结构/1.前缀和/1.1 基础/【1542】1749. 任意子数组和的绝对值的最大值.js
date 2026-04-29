/**
 * @description 1749. 任意子数组和的绝对值的最大值 
 * @link https://leetcode.cn/problems/maximum-absolute-sum-of-any-subarray/description/
 * 给你一个整数数组 nums 。一个子数组 [numsl, numsl+1, ..., numsr-1, numsr] 的 和的绝对值 为 abs(numsl + numsl+1 + ... + numsr-1 + numsr) 。
 * 请你找出 nums 中 和的绝对值 最大的任意子数组（可能为空），并返回该 最大值 。
 * abs(x) 定义如下：
 * 如果 x 是负整数，那么 abs(x) = -x 。
 * 如果 x 是非负整数，那么 abs(x) = x 。    
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
    // 计算最大子串和和最小子串和（动态规划，以i为结尾的最小或最大子串），再比较
    let ans = 0, fMax = 0, fMin = 0
    for (const x of nums) {
        fMax = Math.max(fMax, 0) + x
        fMin = Math.min(fMin, 0) + x
        ans = Math.max(ans, fMax, -fMin) // 以i为结尾的最大
    }
    return ans
};



// TEST
console.log(maxAbsoluteSum([1, -3, 2, 3])) // 5
console.log(maxAbsoluteSum([2, -5, 1, -4])) // 8
console.log(maxAbsoluteSum([-10, 1])) // 10
