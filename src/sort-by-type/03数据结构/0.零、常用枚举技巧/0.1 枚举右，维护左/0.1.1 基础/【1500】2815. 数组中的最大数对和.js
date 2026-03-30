/**
 * @description 2815. 数组中的最大数对和
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/max-pair-sum-in-an-array/description/
 * 
 * 给你一个下标从 0 开始的整数数组 nums 。请你从 nums 中找出和 最大 的一对数，且这两个数数位上最大的数字相等。
 * 返回最大和，如果不存在满足题意的数字对，返回 -1 。
 * 
 * 示例 1：
 * 输入：nums = [51,71,17,24,42]
 * 输出：88
 * 解释：
 * i = 1 和 j = 2 ，nums[i] 和 nums[j] 数位上最大的数字相等，且这一对的总和 71 + 17 = 88 。 
 * i = 3 和 j = 4 ，nums[i] 和 nums[j] 数位上最大的数字相等，且这一对的总和 24 + 42 = 66 。
 * 可以证明不存在其他数对满足数位上最大的数字相等，所以答案是 88 。
 */

/**
 * 法一：map维护
 */
var maxSum = function(nums) {
    // 维护左边每个数的最大数字（更新最大）
    const iMap = new Map()
    let maxSum = -1
    for(const j of nums) {
        const m = Math.max(...(String(j).split('')))
        if(iMap.has(m)) {
             maxSum = Math.max(maxSum, j + iMap.get(m))
        }
        if(!(iMap.has(m)) || j > iMap.get(m)) {
            iMap.set(m, j)
        }
    }
    return maxSum
};

/**
 * 法二：数组维护
 */
var maxSum = function(nums) {
    const arr = new Array(10).fill(-Infinity)
    let maxSum = -1
    for(const j of nums) {
        const m = Math.max(...(String(j).split('')))
        maxSum = Math.max(maxSum, j + arr[m])
        arr[m] = Math.max(arr[m], j)
    }
    return maxSum
};

// TEST
console.log(maxSum([51,71,17,24,42])) // 88
