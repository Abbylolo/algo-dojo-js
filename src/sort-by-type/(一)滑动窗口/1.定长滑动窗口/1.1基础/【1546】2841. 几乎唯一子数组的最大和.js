/**
 * @description 2841. 几乎唯一子数组的最大和
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/maximum-sum-of-almost-unique-subarray/
 * 
 * 给你一个整数数组 nums 和两个正整数 m 和 k 。
 * 请你返回 nums 中长度为 k 的 几乎唯一 子数组的 最大和 ，如果不存在几乎唯一子数组，请你返回 0 。
 * 如果 nums 的一个子数组有至少 m 个互不相同的元素，我们称它是 几乎唯一 子数组。
 * 子数组指的是一个数组中一段连续 非空 的元素序列。
 * 
 * 示例 1：
 * 输入：nums = [2,6,7,3,1,7], m = 3, k = 4
 * 输出：18
 * 解释：总共有 3 个长度为 k = 4 的几乎唯一子数组。分别为 [2, 6, 7, 3] ，[6, 7, 3, 1] 和 [7, 3, 1, 7] 。这些子数组中，和最大的是 [2, 6, 7, 3] ，和为 18 。
 */


/**
 * 法一：滑动窗口
 * 重点；统计子数组中包含的互不相同的元素个数 =》使用哈希表map结构记录每个元素的出现次数
 */
var maxSum = function(nums, m, k) {
    let sum = 0, maxSum = 0, numMap = new Map() // 不包含重复值窗口数组
    for(let right = 0; right < nums.length; right++) {
        // 1.进入窗口
        numMap.set(nums[right], (numMap.get(nums[right]) ?? 0) + 1)
        sum += nums[right]
        let left = right - k + 1
        // 窗口未形成
        if(left < 0) continue
        // 2.更新值
        if(numMap.size >= m) {
            maxSum = Math.max(maxSum, sum)
        }
        // 3.退出
        const leftNums = numMap.get(nums[left])
        if(leftNums > 1) {
            numMap.set(nums[left], leftNums - 1)
        } else {
            numMap.delete(nums[left])
        }
        sum -= nums[left]
    }
    return maxSum
};

console.log(maxSum([2,6,7,3,1,7], 3, 4));