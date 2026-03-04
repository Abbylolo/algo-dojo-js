/**
 * @description 1248. 统计「优美子数组」
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/count-number-of-nice-subarrays/description/
 * 给你一个整数数组 nums 和一个整数 k。
 * 如果某个 连续 子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。
 * 请返回这个数组中 「优美子数组」 的数目。
 * 
 * 示例 1：
 * 输入：nums = [1,1,2,1,1], k = 3
 * 输出：2
 * 解释：包含 3 个奇数的子数组是 [1,1,2,1] 和 [1,2,1,1] 。
 */
var numberOfSubarrays = function (nums, k) {
    // 恰好有k个奇数数字(cnt===k) =》 遍历右端点，cnt>=k - cnt>k(cnt>=k+1)
    return solve(nums, k) - solve(nums, k + 1)
};
const solve = function (nums, k) {
    // 求奇数数字个数cnt>=k的子数组个数 =》越长越合法，求最短子串，累加left
    let ans = 0, left = 0, cnt = 0
    for (let right = 0; right < nums.length; right++) {
        cnt += nums[right] % 2
        while (cnt >= k) {
            cnt -= nums[left] % 2
            left++
        }
        ans += left
    }
    return ans

};

// TEST
console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3)) // 2