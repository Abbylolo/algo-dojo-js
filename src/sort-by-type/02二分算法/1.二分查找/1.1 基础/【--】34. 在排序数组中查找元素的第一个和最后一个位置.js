/**
 * @description 34. 在排序数组中查找元素的第一个和最后一个位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @link https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 * 
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 * 
 * 示例 1：
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 */

var searchRange = function (nums, target) {
    // 开始位置：>=target的第一个值 结束位置: >=target的最后一个值（>=target+1的第一个值-1）
    let start = lower_bound(nums, target), end = lower_bound(nums, target + 1) - 1
    // target 比数组所有元素都大 || target 比数组所有元素都小
    if (start === nums.length || nums[start] !== target) return [-1, -1]
    return [start, end]
};

var lower_bound = function (nums, target) {
    // 开区间(left, right)
    let left = -1, right = nums.length
    while (right - left > 1) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] < target) {
            left = mid
        } else {
            right = mid
        }
    }
    return right
}

// TEST
// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));

