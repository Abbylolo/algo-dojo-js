/**
 * @description 974. 和可被 K 整除的子数组
 * @link https://leetcode.cn/problems/subarray-sums-divisible-by-k/description/
 * 给定一个整数数组 nums 和一个整数 k ，返回其中元素之和可被 k 整除的非空 子数组 的数目。
 * 子数组 是数组中 连续 的部分。
 * 
 * 示例 1：
 * 输入：nums = [4,5,0,-2,-3,1], k = 5
 * 输出：7
 * 解释：有 7 个子数组满足其元素之和可被 k = 5 整除：[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * 思路：（s[j]-s[i]）% k = 0 => s[j] % k == s[i] % k => cnt记录 前缀和对k取余 个数
 * 兼容负数：x % m => (x % m + m) % m。如-17 % 20 = （-20 + 3） % 20 = 3 = （-17 % 20 + 20）% 20
 */
var subarraysDivByK = function (nums, k) {
    const cnt = new Map()
    let ans = 0, sum = 0
    for (const num of nums) {
        // 维护[0, j-1]的前缀和
        cnt.set(sum, (cnt.get(sum) ?? 0) + 1)
        // 计算s[j]
        sum = ((sum + num) % k + k) % k
        ans += cnt.get(sum) ?? 0
    }
    return ans
};