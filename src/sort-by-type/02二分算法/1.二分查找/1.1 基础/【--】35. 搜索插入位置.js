/**
 * @description 35.搜索插入位置
 * @param {*} nums
 * @param {*} target
 * @return {*}
 * @link https://leetcode.cn/problems/search-insert-position/description/
 * 
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 * 
 * 示例 1：
 * 输入：nums = [1,3,5,6], target = 5
 * 输出：2
 */
// 题目解析：返回 nums 中的第一个（最左边的）大于或等于 target 的数的下标。
var searchInsert = function (nums, target) {
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
};

// TEST
console.log(searchInsert([1, 3, 5, 6], 5)) // 2
console.log(searchInsert([1, 3, 5, 6], 2)) // 1
console.log(searchInsert([1, 3, 5, 6], 7)) // 4
