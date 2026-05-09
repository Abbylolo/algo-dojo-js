/**
 * @description 560. 和为 K 的子数组 
 * @link https://leetcode.cn/problems/subarray-sum-equals-k/
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
 * 子数组是数组中元素的连续非空序列。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * 法一：前缀和 +哈希表
 * 思路：前缀和s[j] - s[i] = k（i < j） => 枚举右维护左，编辑j，找到前面符合条件的i的个数s[i] = s[j] - k（统计个数，哈希表）
 */
var subarraySum = function (nums, k) {
    let ans = 0, sum = 0
    const cnt = new Map()
    cnt.set(0, 1) // s[0] = 0, 所以初始化前缀和0有1个
    for (const num of nums) { // 枚举右s[j]
        sum += num
        // 统计当前数字下标前面有几个符合条件的s[i] = s[j] - k
        ans += cnt.get(sum - k) ?? 0
        // 维护最新个数
        cnt.set(sum, (cnt.get(sum) ?? 0) + 1)
    }
    return ans
};

/**
 * 法一优化
 * 思路：在同一轮循环中，先把 s[i−1] 加入哈希表，再根据 s[i] 更新答案。这样写无需初始化 cnt[0]=1。
 */
var subarraySum = function (nums, k) {
    let ans = 0, sum = 0
    const cnt = new Map()
    for (const num of nums) { // 枚举右s[j]
        // 维护[0,j-1]的前缀和cnt个数
        cnt.set(sum, (cnt.get(sum) ?? 0) + 1)
        sum += num
        // 统计当前数字下标前面有几个符合条件的s[i] = s[j] - k
        ans += cnt.get(sum - k) ?? 0
    }
    return ans
};


// 个人解法
// 思路：1、计算前缀和 2、当前下标前缀和值为k则个数+1；若>k，寻找前面数组中值为k-sum[i]的值个数
var subarraySum = function (nums, k) {
    let ans = 0, sum = 0
    const cnt = new Map()
    cnt.set(0, 1)
    for (const num of nums) {
        sum += num
        if (sum === k) {
            ans++
        }
        ans += (cnt.get(sum - k) ?? 0)
        cnt.set(sum, (cnt.get(sum) ?? 0) + 1)
    }
    return ans
};

// 测试
console.log(subarraySum([1, 1, 1], 2)) // 2
console.log(subarraySum([1, 2, 3], 3)) // 2
console.log(subarraySum([-1, -1, 1], 0)) // 1
console.log(subarraySum([1, -1, 0], 0)) // 3