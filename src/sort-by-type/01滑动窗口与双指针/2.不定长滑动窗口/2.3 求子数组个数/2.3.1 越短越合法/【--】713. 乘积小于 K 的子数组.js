/**
 * @description 713. 乘积小于 K 的子数组
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/subarray-product-less-than-k/
 * 
 * 给你一个整数数组 nums 和一个整数 k ，请你返回子数组内所有元素的乘积严格小于 k 的连续子数组的数目。
 * 
 * 提示： 1 <= nums.length <= 3 * 10^4
 * 1 <= nums[i] <= 1000
 * 0 <= k <= 10^6
 */

// 两种方法都可以。如果不提前判断k<=1，那么就要考虑到当 k≤1 时，mul >= k 恒为真，为了退出循环要额外判断 left≤right 避免下标越界
var numSubarrayProductLessThanK = function (nums, k) {
    // 找每一个右端点对应的满足条件的最长子串，left-right的个数就是满足条件子数组个数。遍历右端点累加
    if (k <= 1) return 0
    let ans = 0, mul = 1, left = 0
    for (let right = 0; right < nums.length; right++) {
        mul *= nums[right]
        while (mul >= k) {
            mul /= nums[left]
            left++
        }
        ans += right - left + 1
    }
    return ans
};

var numSubarrayProductLessThanK = function (nums, k) {
    // 找每一个右端点对应的满足条件的最长子串，left-right的个数就是满足条件子数组个数。遍历右端点累加
    let ans = 0, mul = 1, left = 0
    for (let right = 0; right < nums.length; right++) {
        mul *= nums[right]
        while (mul >= k && left <= right) {
            mul /= nums[left]
            left++
        }
        ans += right - left + 1
    }
    return ans
};

// 测试
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); //8
console.log(numSubarrayProductLessThanK([1, 2, 3], 0)); //0