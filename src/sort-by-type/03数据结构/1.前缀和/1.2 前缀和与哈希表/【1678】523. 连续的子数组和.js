/**
 * @description 523. 连续的子数组和
 * @link https://leetcode.cn/problems/continuous-subarray-sum/description/
 * 给你一个整数数组 nums 和一个整数 k ，如果 nums 有一个 好的子数组 返回 true ，否则返回 false：
 * 一个 好的子数组 是：
 * 长度 至少为 2 ，且
 * 子数组元素总和为 k 的倍数。
 * 
 * 注意：
 * 子数组 是数组中 连续 的部分。
 * 如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。0 始终 视为 k 的一个倍数。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/**
 * 思路：(s[j]-s[i])%k=0 => s[j]%k == s[i]%k (i-1<j)
 */
var checkSubarraySum = function (nums, k) {
    if (nums.length < 2) return false

    // Map 存储 {余数: 该余数第一次出现的下标}
    // 初始化 {0: -1} 是为了处理从索引 0 开始且和为 k 倍数的子数组
    const remainderMap = new Map([[0, -1]])
    let preSumRemainder = 0

    for (let i = 0; i < nums.length; i++) {
        // 计算当前前缀和对 k 的余数
        preSumRemainder = (preSumRemainder + nums[i]) % k

        if (remainderMap.has(preSumRemainder)) {
            // 如果该余数已存在，且当前下标与第一次出现的下标距离 >= 2
            if (i - remainderMap.get(preSumRemainder) >= 2) {
                return true
            }
        } else {
            // 只记录第一次出现的下标，保证子数组尽可能长
            remainderMap.set(preSumRemainder, i)
        }
    }

    return false
};

// TEST
console.log(checkSubarraySum([23, 2, 4, 6, 6], 7)) // true
