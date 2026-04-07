/**
 * @description 3583. 统计特殊三元组
 * @link https://leetcode.cn/problems/count-special-triplets/description/
 * 给你一个整数数组 nums。
 * 特殊三元组 定义为满足以下条件的下标三元组 (i, j, k)：
 *   0 <= i < j < k < n，其中 n = nums.length
 *   nums[i] == nums[j] * 2
 *   nums[k] == nums[j] * 2 
 * 数组中 特殊三元组 的总数。
 * 由于答案可能非常大，请返回结果对 10^9 + 7 取余数后的值。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 法一：枚举中间 --枚举j
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var specialTriplets = function (nums) {
    // 前缀后缀分别求取到该下标m的值个数：后缀先哈希维护所有，计算时减去前部分(利用ni和nk相等)
    let count = 0
    const n = nums.length
    const preMap = new Map(), sufMap = new Map()
    for (const n of nums) {
        sufMap.set(n, (sufMap.get(n) ?? 0) + 1)
    }
    preMap.set(nums[0], 1)
    for (let j = 1; j < n - 1; j++) {
        const m = nums[j] * 2
        if (preMap.has(m)) {
            const preCount = preMap.get(m)
            count += preCount * (sufMap.get(m) - preCount - (m === 0 ? 1 : 0))
        }
        preMap.set(nums[j], (preMap.get(nums[j]) ?? 0) + 1)
    }
    return count % (1e9 + 7)
};

/**
 * 方法二：枚举右，维护左（一次遍历）--枚举k
 */
var specialTriplets = function (nums) {
    // 枚举k
    let count = 0
    const iMap = new Map(), // 维护ni的个数
        jMap = new Map() // 枚举j，维护(i,j)数组的个数
    for (const x of nums) {
        // 把 x 当作 nums[k]
        if (x % 2 === 0) {
            count += (jMap.get(x / 2) ?? 0)
        }
        // 把 x 当作 nums[j]：固定j的（2x,x)的ij数组个数
        jMap.set(x, (jMap.get(x) ?? 0) + (iMap.get(x * 2) ?? 0))
        // 把 x 当作 nums[i]
        iMap.set(x, (iMap.get(x) ?? 0) + 1)
    }
    return count % (1e9 + 7)
};

// 测试
console.log(specialTriplets([8, 4, 2, 8, 4])) // 2