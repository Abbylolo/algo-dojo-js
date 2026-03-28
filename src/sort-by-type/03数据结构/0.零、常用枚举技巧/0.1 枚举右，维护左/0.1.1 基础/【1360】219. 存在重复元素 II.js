/**
 * @description 219. 存在重复元素 II
 * @param {number[]} nums
 * @return {boolean}
 * @link https://leetcode.cn/problems/contains-duplicate-ii/description/
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个不同的索引 i 和 j，使得 nums[i] == nums[j] 且 abs(i - j) <= k 。
 * 如果存在，返回 true ；否则，返回 false 。
 * 
 * 示例 1：
 * 输入：nums = [1,2,3,1], k = 3
 * 输出：true
 * 解释：数组中存在两个 1 ，且它们的索引分别为 0 和 3 ，相隔绝对值为 3 ，小于等于 k 。
 * */

/**
 * 法一：枚举右，维护左
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var containsNearbyDuplicate = function (nums, k) {
    // 维护左边每个数的个数及索引值（只需维护最大的）
    const iMap = new Map()
    for (let j = 0; j < nums.length; j++) {
        if (iMap.has(nums[j]) && (j - iMap.get(nums[j]) <= k)) {
            return true
        }
        iMap.set(nums[j], j)
    }
    return false
};

/**
 * 法二：滑动窗口
 * 时间复杂度：O(n)
 * 空间复杂度：O(min(k,n))
 */
var containsNearbyDuplicate = function (nums, k) {
    const set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) { // 长度为k的窗口中是否有该元素
            return true
        }
        set.add(nums[i])
        if (i >= k) { // 超过窗口长度要出队列
            set.delete(nums[i - k])
        }
    }
    return false
};

// TEST
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)) // true