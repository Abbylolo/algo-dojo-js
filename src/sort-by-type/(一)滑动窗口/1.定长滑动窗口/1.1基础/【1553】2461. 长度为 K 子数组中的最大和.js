/**
 * @description 2461. 长度为 K 子数组中的最大和
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/maximum-sum-of-subarray-with-length-k/
 * 
 * 给你一个整数数组 nums 和一个整数 k 。请你从 nums 中选择一个长度为 k 的子数组，并返回满足条件「数组中存在某个元素出现的次数至少为 2 次」的最小子数组长度。
 * 如果不存在这样的子数组，返回 -1 。
 * 子数组是数组中连续非空的一组元素。
 * 
 * 示例 1：
 * 输入：nums = [1,2,3,1,2,3,1], k = 3
 * 输出：3
 * 解释：长度为 3 的子数组 [1,2,3] 包含 3 个不同的元素，且子数组中存在一个元素重复 2 次。
 * 
 * 示例 2：
 * 输入：nums = [1,2,3,4,5], k = 4
 * 输出：-1
 * 解释：nums 中不存在重复元素，所以不可能存在长度为 4 的子数组满足题目条件。
 */

/**
 * 法一：滑动窗口
 * 时间复杂度：O(n) 空间复杂度：O(n)
 * 思路：使用滑动窗口，遍历数组，统计子数组中包含的互不相同的元素个数，如果个数大于等于 m，则更新最大和
 */
var maximumSubarraySum = function(nums, k) {
    // 子数组所有元素各不想同 =》map记录每个值出现次数=〉map.size不等于k说明各不相同
    let maxSum = 0, nMap = new Map(), curSum = 0
    for(let right = 0; right < nums.length; right++) {
        // 1.进入窗口
        nMap.set(nums[right], ((nMap.get(nums[right]) ?? 0) + 1))
        curSum += nums[right]
        // 窗口未形成
        let left = right - k + 1
        if(left < 0) continue
        // 2.更新值
        if(nMap.size == k) {
            maxSum = Math.max(maxSum, curSum)
        }
        // 3.左指针出窗口
        const leftNum = nums[left], leftCount = nMap.get(leftNum)
        curSum -= leftNum
        if(leftCount > 1) {
            nMap.set(leftNum, leftCount - 1)
        } else {
            nMap.delete(leftNum)
        }
    }
    return maxSum
};

console.log(maximumSubarraySum([9,9,9,1,2,3], 3)); // 12
