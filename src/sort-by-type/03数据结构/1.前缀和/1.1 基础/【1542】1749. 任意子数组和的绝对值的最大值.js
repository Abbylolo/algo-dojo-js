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
/**
 * 法一：动态规划
 * 思路：
 * 1. 计算最大子串和和最小子串和（动态规划，以i为结尾的最小或最大子串）。f(i) = max(f(i-1)+x, x) = max(f(i-1),0) + x
 * 2. 比较最大子串和和最小子串和的绝对值，取最大值
 * 3. 返回最大值
 * */
var maxAbsoluteSum = function (nums) {
    let ans = 0, fMax = 0, fMin = 0
    for (const x of nums) {
        fMax = Math.max(fMax, 0) + x
        fMin = Math.min(fMin, 0) + x
        ans = Math.max(ans, fMax, -fMin) // 以i为结尾的最大
    }
    return ans
};

/**
 * 法二：前缀和
 * 思路：子数组最大值 = 前缀和之差|num[j]-nums[i]|最大值 => 最大前缀和 - 最小前缀和
 */
var maxAbsoluteSum = function (nums) {
    let minPrefix = 0, maxPrefix = 0, sum = 0
    for (const x of nums) {
        sum += x
        maxPrefix = Math.max(maxPrefix, sum)
        minPrefix = Math.min(minPrefix, sum)
    }
    return maxPrefix - minPrefix
};


// TEST
console.log(maxAbsoluteSum([1, -3, 2, 3, -4])) // 5
