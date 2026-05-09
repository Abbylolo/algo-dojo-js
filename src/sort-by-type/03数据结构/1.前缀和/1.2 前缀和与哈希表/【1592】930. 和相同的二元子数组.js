/**
 * @description 930. 和相同的二元子数组 
 * @link https://leetcode.cn/problems/binary-subarrays-with-sum/description/
 * 给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。
 * 子数组 是数组的一段连续部分。
 * nums[i] 不是 0 就是 1
 * 
 * 示例 1：
 * 输入：nums = [1,0,1,0,1], goal = 2
 * 输出：4
 * 解释：有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]
 */
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    // 前缀和s[j] - s[i] = goal(i<j) => 枚举右j，维护左i个数。注意s[0] = 0
    const cnt = new Map()
    let ans = 0, sum = 0
    for (const num of nums) {
        // 维护[0,j-1]的前缀和cnt个数
        cnt.set(sum, (cnt.get(sum) ?? 0) + 1)
        // 计算满足的s[i]个数（s[i]=s[j]-goal）
        // 计算更新s[j]
        sum += num
        // 计算满足的s[i]个数（s[i]=s[j]-goal）
        ans += cnt.get(sum - goal) ?? 0
    }
    return ans
};