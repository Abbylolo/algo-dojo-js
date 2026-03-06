/**
 * @description 2302. 统计得分小于 K 的子数组数目
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/count-subarrays-with-score-less-than-k/description/
 * 
 * 一个数组的 分数 定义为数组之和 乘以 数组的长度。
 * 比方说，[1, 2, 3, 4, 5] 的分数为 (1 + 2 + 3 + 4 + 5) * 5 = 75 。
 * 给你一个正整数数组 nums 和一个整数 k ，请你返回 nums 中分数 严格小于 k 的 非空整数子数组数目。
 * 子数组 是数组中的一个连续元素序列。
 * 
 * 示例 1：
 * 输入：nums = [2,1,4,3,5], k = 10
 * 输出：6
 * 解释：
 * 有 6 个子数组的分数小于 10 ：
 * - [2] 分数为 2 * 1 = 2 。
 * - [1] 分数为 1 * 1 = 1 。
 * - [4] 分数为 4 * 1 = 4 。
 * - [3] 分数为 3 * 1 = 3 。 
 * - [5] 分数为 5 * 1 = 5 。
 * - [2,1] 分数为 (2 + 1) * 2 = 6 。
 * 注意，子数组 [1,4] 和 [4,3,5] 不符合要求，因为它们的分数分别为 10 和 36，但我们要求子数组的分数严格小于 10 。
 * 
 * 提示： 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^5
 * 1 <= k <= 10^15
 */
var countSubarrays = function (nums, k) {
    // 越短越合法 =》 求最长子串
    let ans = 0, left = 0, sum = 0
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]
        while (sum * (right - left + 1) >= k && left <= right) {
            sum -= nums[left]
            left++
        }
        ans += right - left + 1
    }
    return ans
};

// TEST
console.log(countSubarrays([2, 1, 4, 3, 5], 10)) // 6
