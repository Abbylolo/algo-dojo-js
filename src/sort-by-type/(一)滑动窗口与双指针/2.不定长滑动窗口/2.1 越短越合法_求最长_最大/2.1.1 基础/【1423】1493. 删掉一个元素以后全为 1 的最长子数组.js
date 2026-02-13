/**
 * @description 1493. 删掉一个元素以后全为 1 的最长子数组
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/longest-subarray-of-1s-after-deleting-one-element/description/
 * 
 * 给你一个二进制数组 nums ，你需要从中删掉一个元素。
 * 请你在删掉元素的结果数组中，返回最长的且只包含 1 的非空子数组的长度。
 * 如果不存在这样的子数组，请返回 0 。
 * 
 * 示例 1：
 * 输入：nums = [1,1,0,1]
 * 输出：3
 * 解释：删掉位置 2 的数后，[1,1,1] 包含 3 个 1 。
 */
var longestSubarray = function (nums) {
    let zeroCount = 0, left = 0, ans = 0
    for (let right = 0; right < nums.length; right++) {
        let c = nums[right]
        if (c === 0) zeroCount++
        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--
            }
            left++
        }
        ans = Math.max(ans, right - left + 1 - 1)
    }
    return ans
};