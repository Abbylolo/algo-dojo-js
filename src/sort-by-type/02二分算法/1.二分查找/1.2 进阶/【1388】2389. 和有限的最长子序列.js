/**
 * @description 2389. 和有限的最长子序列
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 * @link https://leetcode.cn/problems/longest-subsequence-with-limited-sum/description/
 * 
 * 给你一个长度为 n 的整数数组 nums ，和一个长度为 m 的整数数组 queries 。
 * 返回一个长度为 m 的数组 answer ，其中 answer[i] 是 nums 中 元素之和小于等于 queries[i] 的 子序列 的 最大 长度 。
 * 子序列 是由一个数组删除某些元素（也可以不删除）但不改变剩余元素顺序得到的一个数组。
 * 
 * 示例 1：
 * 输入：nums = [4,5,2,1], queries = [3,10,21]
 * 输出：[2,3,4]
 * 解释：queries 对应的 answer 如下：
 * - 子序列 [2,1] 的和小于或等于 3 。可以证明满足题目要求的子序列的最大长度是 2 ，所以 answer[0] = 2 。
 * - 子序列 [4,5,1] 的和小于或等于 10 。可以证明满足题目要求的子序列的最大长度是 3 ，所以 answer[1] = 3 。
 * - 子序列 [4,5,2,1] 的和小于或等于 21 。可以证明满足题目要求的子序列的最大长度是 4 ，所以 answer[2] = 4 。
 */

/**
 * 法一：前缀和 + 二分+ 原地 O(1) 空间
 * 时间复杂度：O(nlogn + mlogn)
 * 空间复杂度：O(1)
 */
var answerQueries = function (nums, queries) {
    // 前缀和+二分
    nums.sort((a, b) => a - b) // nlogn
    // 求前缀和
    let sum = 0
    nums = nums.map(n => {
        sum += n
        return sum
    })
    // 遍历queries，二分找>x的第一个元素下标
    for (let i = 0; i < queries.length; i++) { // m * logn
        queries[i] = upperBound(nums, queries[i])
    }
    return queries
};

// 找升序nums中第一个大于x的元素下标
const upperBound = function (nums, target) {
    let left = -1, right = nums.length
    while (right - left > 1) {
        let mid = (right + left) >> 1
        if (nums[mid] > target) {
            right = mid
        } else {
            left = mid
        }
    }
    return right
}

// TEST
console.log(answerQueries([736411, 184882, 914641, 37925, 214915], [331244, 273144, 118983, 118252, 305688, 718089, 665450])); // [2,2,1,1,2,3,3]
