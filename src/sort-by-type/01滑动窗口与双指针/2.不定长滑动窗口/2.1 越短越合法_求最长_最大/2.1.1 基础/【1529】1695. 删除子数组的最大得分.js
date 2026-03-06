/**
 * @description 1695. 删除子数组的最大得分
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/maximum-erasure-value/
 * 
 * 给你一个正整数数组 nums ，请你从中删除一个含有 若干不同元素 的子数组。删除子数组的 得分 就是子数组各元素之 和 。
 * 返回 只删除一个 子数组可获得的 最大得分 。
 * 如果数组 b 是数组 a 的一个连续子序列，即如果它等于 a[l],a[l+1],...,a[r] ，那么它就是 a 的一个子数组。
 * 
 * 示例 1：
 * 输入：nums = [4,2,4,5,6]
 * 输出：17
 * 解释：最优子数组是 [2,4,5,6]
 */

var maximumUniqueSubarray = function (nums) {
    // 求sum最大的子字符串。条件：元素各不相同
    let sum = 0, ans = 0, left = 0
    const cnt = new Set()
    for (let right = 0; right < nums.length; right++) {
        while (cnt.has(nums[right])) {
            cnt.delete(nums[left])
            sum -= nums[left]
            left++
        }
        cnt.add(nums[right])
        sum += nums[right]
        ans = Math.max(ans, sum)
    }
    return ans
};

// TEST
console.log(maximumUniqueSubarray([4, 2, 4, 5, 6])) // 17