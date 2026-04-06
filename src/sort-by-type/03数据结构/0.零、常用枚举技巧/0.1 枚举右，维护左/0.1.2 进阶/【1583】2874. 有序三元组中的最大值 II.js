/**
 * @description 2874. 有序三元组中的最大值 II
 * @link https://leetcode.cn/problems/maximum-value-of-an-ordered-triplet-ii/description/
 * 给你一个下标从 0 开始的整数数组 nums 。
 * 请你从所有满足 i < j < k 的下标三元组 (i, j, k) 中，找出并返回下标三元组的最大值。如果所有满足条件的三元组的值都是负数，则返回 0 。
 * 下标三元组 (i, j, k) 的值等于 (nums[i] - nums[j]) * nums[k] 。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 法一：枚举k（推荐）
 * 思路：枚举k，维护左边队列的num[i]-nums[j]的最大值 max_diff =>(类似买卖股票)枚举j计算prev_max
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
*/
var maximumTripletValue = function (nums) {
    let ans = 0, max_diff = 0, prev_max = 0
    for (const x of nums) {
        // 顺序不能变：i < j < k
        // 把x当作nums[k]
        ans = Math.max(ans, max_diff * x) // 此时计算的max_diff还是curIndex-1左边范围的最大差，因为max_diff值还没更新
        // 把x当作nums[j]
        max_diff = Math.max(max_diff, prev_max - x)
        // 把x当作nums[i]
        prev_max = Math.max(prev_max, x)
    }
    return ans
};

/**
 * 法二：枚举j
 * 思路：
 *    1）计算每个j位的后缀最大值suf_max = Math.max([j+1,n-1])和前缀最大值pre_max = Math.max([0,j-1])
 *    2）后缀最大值从右往左维护(比较k和右边suf_max(k+1,n-1))；前缀最大值从左往右，同时计算ans
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
*/
var maximumTripletValue = function (nums) {
    const n = nums.length
    let ans = 0, suf_max = Array(n), pre_max = nums[0]
    suf_max[n - 1] = nums[n - 1]
    for (let k = n - 2; k > 1; k--) {
        suf_max[k] = Math.max(suf_max[k + 1], nums[k])
    }
    for (let j = 1; j < n - 1; j++) {
        ans = Math.max(ans, (pre_max - nums[j]) * suf_max[j + 1])
        pre_max = Math.max(pre_max, nums[j])
    }
    return ans
};

// 测试
console.log(maximumTripletValue([1, 2, 3, 4, 5])) // 12