/**
 * @description 1400. 变长子数组求和
 * @link https://leetcode.cn/problems/sum-of-variable-length-subarrays/description/
 * 给你一个长度为 n 的整数数组 nums 。对于 每个 下标 i（0 <= i < n），定义对应的子数组 nums[start ... i]（start = max(0, i - nums[i])）。
 * 返回为数组中每个下标定义的子数组中所有元素的总和。
 * 子数组 是数组中的一个连续、非空 的元素序列。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1、求前缀和数组s2、计算s[i+1] - s[start]，累加求和
var subarraySum = function (nums) {
    const s = Array(nums.length + 1)
    let sum = 0
    s[0] = 0
    for (let i = 0; i < nums.length; i++) {
        s[i + 1] = s[i] + nums[i]
        const start = Math.max(0, i - nums[i])
        sum += s[i + 1] - s[start]
    }
    return sum
};

// TEST
console.log(subarraySum([2, 3, 1])) // 11