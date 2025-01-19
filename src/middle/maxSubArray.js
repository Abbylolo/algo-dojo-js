/**
 * @description 53. 最大子数组和
 * @param {number[]} nums
 * @return {number}
 *
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 子数组 是数组中的一个连续部分。
 *
 * 示例 1：
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 */

/**
 * 法一：贪心算法
 * 时间复杂度：O(n) 空间复杂度：O(1)
 * 贪心算法：在对问题求解时，总是做出在当前看来是最好的选择。
 * 思路：若当前指针所指元素之前的和小于0，则丢弃当前元素之前的数列
 */
var maxSubArray = function (nums) {
    let currSum = (maxSum = nums[0]);
    for (let i = 1; i < nums.length; i++) {
      currSum = Math.max(nums[i], currSum + nums[i]);
      maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
};

/**
 * 法二：动态规划
 * 时间复杂度：O(n) 空间复杂度：O(n)
 * 动态规划：动态规划（Dynamic Programming, DP）是一种通过将问题分解为更小的子问题，逐步求解并存储中间结果，从而避免重复计算的优化方法。它适用于具有 重叠子问题 和 最优子结构 的问题。
 * 思路：若前一个元素大于0，则将当前元素与前一个元素相加，否则当前元素为最大和，将该最大和记录到当前元素值上
 */
maxSubArray = function (nums) {
    let dp = nums[0], // 当前元素位置最大和
      maxSum = nums[0]; // 最大和
    for (let i = 1; i < nums.length; i++) {
      dp = Math.max(nums[i], nums[i] + dp); // 若前一个元素大于0，则将当前元素与前一个元素相加，否则当前元素为最大和，将该最大和记录到当前元素值上
      maxSum = Math.max(dp, maxSum);
    }
    return maxSum;
}

/**
 * 法三：分治法（没懂 🌟🌟）
 * 时间复杂度：O(n) 空间复杂度：O(logn)
 * 分治法：分治法是一种将问题分解为更小的子问题，分别求解这些子问题，然后将结果合并以得到原问题解的算法设计方法。它适用于具有 可分割性 和 可合并性 的问题。
 * 思路：将数组一分为二，分别求解左右两边的最大和，然后合并结果
 */
function Status(l, r, m, i) {
    this.lSum = l; // 包含左端点的最大子段和
    this.rSum = r; // 包含右端点的最大子段和
    this.mSum = m; // 区间内的最大子段和
    this.iSum = i; // 区间所有数的和
}

const pushUp = (l, r) => {
    const iSum = l.iSum + r.iSum;
    const lSum = Math.max(l.lSum, l.iSum + r.lSum);
    const rSum = Math.max(r.rSum, r.iSum + l.rSum);
    const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
    return new Status(lSum, rSum, mSum, iSum);
}

const getInfo = (a, l, r) => {
    if (l === r) {
        return new Status(a[l], a[l], a[l], a[l]);
    }
    const m = (l + r) >> 1;
    const lSub = getInfo(a, l, m);
    const rSub = getInfo(a, m + 1, r);
    return pushUp(lSub, rSub);
}

maxSubArray = function(nums) {
    return getInfo(nums, 0, nums.length - 1).mSum;
};




// 测试
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log('输入:', nums)
console.log('输出:', maxSubArray(nums))

const nums2 = [1]
console.log('输入:', nums2)
console.log('输出:', maxSubArray(nums2))

const nums3 = [5, 4, -1, 7, 8]
console.log('输入:', nums3)
console.log('输出:', maxSubArray(nums3))

const nums4 = [-1]
console.log('输入:', nums4)
console.log('输出:', maxSubArray(nums4))

