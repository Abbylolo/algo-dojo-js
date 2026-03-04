/**
 * @description 930. 和相同的二元子数组
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 * @link https://leetcode.cn/problems/binary-subarrays-with-sum/description/
 * 给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。
 * 子数组 是数组的一段连续部分。
 * 
 * 示例 1：
 * 输入：nums = [1,0,1,0,1], goal = 2
 * 输出：4
 * 解释：有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]
 */
var numSubarraysWithSum = function (nums, goal) {
    // 遍历每个右端点，>=goal的子数组 - >goal(>=goal+1)的子数组
    return solve(nums, goal) - solve(nums, goal + 1)
};
// 求大于等于goal的子数组个数
const solve = function (nums, goal) {
    // 越长越合法 =》 求最短子串, 累加left
    let ans = 0, left = 0, sum = 0
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]
        // 是否需要加边界判断：所有都减完后是否还满足要求，由于goal会=0，全部减完也会0，无法判断边界溢出，需要加边界判断
        while (sum >= goal && left <= right) {
            sum -= nums[left]
            left++
        }
        ans += left
    }
    return ans
};

// TEST
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2)) // 4
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0)) // 15
