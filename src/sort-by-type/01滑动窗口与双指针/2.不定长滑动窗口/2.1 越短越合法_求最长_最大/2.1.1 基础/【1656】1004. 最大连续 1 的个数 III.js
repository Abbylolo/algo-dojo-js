/**
 * @description 1004. 最大连续 1 的个数 III
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/max-consecutive-ones-iii/
 * 
 * 给你一个二进制数组 nums 和一个整数 k 。
 * nums 中所有元素不是 0 就是 1 。
 * 你可以最多将 k 个值从 0 变成 1 。
 * 请你返回仅包含 1 的最长子数组的长度。
 * 
 * 示例 1：
 * 输入：nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
 * 输出：6
 * 解释：[1,1,1,0,0,1,1,1,1,1,1]
 * 粗体数字从 0 翻转到 1，最长的子数组长度为 6。
 */

var longestOnes = function (nums, k) {
    // 求最长子串1。条件：子串中包含0的个数<=k
    let ans = 0, left = 0, zeroNums = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroNums++
        }
        while (zeroNums > k) {
            zeroNums -= 1 - nums[left]
            left++
        }
        ans = Math.max(ans, right - left + 1)
    }
    return ans
};

// TEST
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)) // 6
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)) // 10