/**
 * @description 2441. 与对应负数同时存在的最大正整数
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/largest-positive-integer-that-exists-with-its-negative/
 * 给你一个 不包含 任何零的整数数组 nums ，找出自身与对应的负数都在数组中存在的最大正整数 k 。
 * 返回正整数 k ，如果不存在这样的整数，返回 -1 。
 * 
 * 示例 1：
 * 输入：nums = [-1,2,-3,3]
 * 输出：3
 * 解释：3 是数组中唯一一个满足题目要求的 k 。
 */
var findMaxK = function (nums) {
    const iSet = new Set()
    let max = -1
    for (let j = 0; j < nums.length; j++) {
        if (iSet.has(-1 * nums[j])) {
            max = Math.max(max, Math.abs(nums[j]))
        }
        iSet.add(nums[j])
    }
    return max
};

// TEST
console.log(findMaxK([-1, 2, -3, 3])) // 3
