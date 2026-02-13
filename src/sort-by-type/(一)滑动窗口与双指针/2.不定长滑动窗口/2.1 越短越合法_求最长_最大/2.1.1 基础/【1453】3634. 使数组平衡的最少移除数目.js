/**
 * @description 3634. 使数组平衡的最少移除数目
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/minimum-removals-to-make-array-balanced/description/
 * 
 * 给你一个下标从 0 开始的整数数组 nums 。你可以从 nums 中删除任意数量的元素。
 * 删除元素后，剩余元素的下标将被重新排序。
 * 如果删除 nums 中的任意元素后，使剩余元素按 非递减 顺序排列，那么我们称数组 nums 是 平衡 的。
 * 请你返回删除任意数量元素后，使 nums 平衡 的 最少 删除数目。
 * 
 * 示例 1：
 * 输入：nums = [1,1,2,3,5]
 * 输出：2
 * 解释：我们可以删除下标 2 和下标 4 。
 * 删除后，nums 为 [1,1,3] 。
 * 它是一个平衡数组，所以我们返回 2 。
 * 这是最少删除数目。
 */

var minRemoval = function (nums, k) {
    // 条件：min * k >= max ==> 求排序后的数组,满足条件的最长子串
    nums.sort((a, b) => a - b)
    let ans = 0, left = 0
    for (let right = 0; right < nums.length; right++) {
        while (nums[left] * k < nums[right]) {
            left++
        }
        ans = Math.max(ans, right - left + 1)
    }
    return nums.length - ans
};

// test
console.log(minRemoval([1, 1, 2, 3, 5], 2)) // 2