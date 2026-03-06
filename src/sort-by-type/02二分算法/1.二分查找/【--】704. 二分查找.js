/**
 * @description 704. 二分查找
 * @param {*} nums
 * @param {*} target
 * @return {*}
 * @link https://leetcode.cn/problems/binary-search/description/
 * 
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * 你必须编写一个具有 O(log n) 时间复杂度的算法。
 * 
 * 示例 1:
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 * 
 */
var search = function (nums, target) {
    let left = -1, right = nums.length
    while (right - left > 1) {
        let mid = (left + right) >> 1
        if (nums[mid] < target) {
            left = mid
        } else {
            right = mid
        }
    }
    return right === nums.length || nums[right] !== target ? -1 : right
};

// TEST
console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1