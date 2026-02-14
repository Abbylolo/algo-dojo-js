/**
 * @description 209. 长度最小的子数组
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/minimum-size-subarray-sum/
 * 
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 * 
 * 示例 1：
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 */

// 法一：在 while 循环结束后更新答案
var minSubArrayLen = function (target, nums) {
    // 求最小长度子串。条件：sum>=target
    let n = nums.length, ans = n + 1, left = 0, sum = 0
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]
        while (sum - nums[left] >= target) { // 缩小左端，找最小子串(如果缩小左端仍满足则移动)
            sum -= nums[left]
            left++
        }
        if (sum >= target) { // 满足条件才更新值
            ans = Math.min(ans, right - left + 1)
        }
    }
    return ans > n ? 0 : ans
};

// 法二：在 while 循环内更新答案
var minSubArrayLen = function (target, nums) {
    // 求最小长度子串。条件：sum>=target
    let n = nums.length, ans = n + 1, left = 0, sum = 0
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]
        while (sum >= target) { // 缩小左端，找最小子串(如果缩小左端仍满足则移动)
            ans = Math.min(ans, right - left + 1)
            sum -= nums[left]
            left++
        }
    }
    return ans > n ? 0 : ans
};

// TEST
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));