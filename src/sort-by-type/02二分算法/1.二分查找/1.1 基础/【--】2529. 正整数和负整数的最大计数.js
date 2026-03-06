/**
 * @description 2529. 正整数和负整数的最大计数
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/maximum-count-of-positive-integer-and-negative-integer/description/
 * 
 * 给你一个按 非递减顺序 排列的数组 nums ，返回正整数和负整数的数量。
 * 换句话讲，如果 nums 中正整数的数目是 pos ，而负整数的数目是 neg ，则返回 pos + neg 的值。
 * 注意：0 既不是正整数也不是负整数。
 * 
 * 示例 1：
 * 输入：nums = [-2,-1,-1,1,2,3]
 * 输出：3
 * 解释：共有 3 个正整数和 3 个负整数。计数得到的最大值是 3 。
 */
var maximumCount = function (nums) {
    // 负整数个数：lowerBound(0) 【如果不存在负整数，返回0】
    // 正整数个数：n - lowerBound(1) 【如果不存在正整数，lowerBound返回n, n-n = 0】
    const neg = lowerBound(nums, 0),
        pos = nums.length - lowerBound(nums, 1)
    return Math.max(neg, pos)
};

const lowerBound = function (nums, target) {
    let left = -1, right = nums.length
    while (right - left > 1) {
        let mid = (left + right) >> 1
        if (nums[mid] < target) {
            left = mid
        } else {
            right = mid
        }
    }
    return right
}

// TEST
console.log(maximumCount([-2, -1, -1, 1, 2, 3]));
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));