/**
 * @description 2762. 不间断子数组
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/continuous-subarrays/description/
 * 
 * 给你一个下标从 0 开始的整数数组 nums 。nums 的一个子数组如果满足以下条件，那么它是 不间断 的：
 * i，i + 1 ，...，j  表示子数组中的下标。对于所有满足 i <= i1, i2 <= j 的下标对，都有 0 <= |nums[i1] - nums[i2]| <= 2 。
 * 请你返回 不间断 子数组的总数目。
 * 子数组是一个数组中一段连续 非空 的元素序列。
 * 
 * 示例 1：
 * 输入：nums = [5,4,2,4]
 * 输出：8
 * 解释：
 * 大小为 1 的不间断子数组：[5], [4], [2], [4] 。
 * 大小为 2 的不间断子数组：[5,4], [4,2], [2,4] 。
 * 大小为 3 的不间断子数组：[4,2,4] 。
 * 没有大小为 4 的不间断子数组。
 * 不间断子数组的总数目为 4 + 3 + 1 = 8 。
 * 除了这些以外，没有别的不间断子数组。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 失败：超出时间限制。时间复杂度O(n^2)
var continuousSubarrays = function (nums) {
    // 越短越合适-》求最长子串 =〉统计不满足的个数，为0则说明满足条件 =>记录每一个nums[i]不满足的个数
    let ans = 0, left = 0, cnt = [], fail = 0
    for (let right = 0; right < nums.length; right++) {
        for (let i = left; i < right; i++) {
            if (Math.abs(nums[right] - nums[i]) > 2) {
                cnt[i] = (cnt[i] ?? 0) + 1
                fail++
            }
        }
        while (fail > 0) {
            fail -= (cnt[left] ?? 0)
            left++
        }
        ans += right - left + 1
    }
    return ans
};

/**
 * 法一：方法一：滑动窗口+有序集合/哈希表
 * 关键思路：若符合条件，max-min<=2。通过哈希表减少比较个数
 * 时间复杂度：O(nD)，其中 n 为 nums 的长度，D=2 表示最大值与最小值之差的上限。
 * 
 * logD解释：
 * cnt 是一个哈希表（Map），存储当前窗口内每个数值的出现次数。由于窗口内的最大值与最小值之差不超过 2，因此可能的数值种类非常有限（最多连续 3 个整数，例如 [5,6,7]）。
 * 所以每次调用 Math.max(...cnt.keys()) 实际上只需要遍历最多 3 个键，时间复杂度是 O(1) 的，即 O(D)，其中 D=2 是差值上限。
 */
var continuousSubarrays = function (nums) {
    // 越短越合适-》求最长子串 =〉若符合条件，max-min<=2
    let ans = 0, left = 0, cnt = new Map()
    for (let right = 0; right < nums.length; right++) {
        cnt.set(nums[right], (cnt.get(nums[right]) ?? 0) + 1)
        let max = Math.max(...cnt.keys()),
            min = Math.min(...cnt.keys())
        while (max - min > 2) {
            cnt.set(nums[left], cnt.get(nums[left]) - 1)
            if (cnt.get(nums[left]) === 0) {
                cnt.delete(nums[left])
            }
            max = Math.max(...cnt.keys())
            min = Math.min(...cnt.keys())
            left++
        }
        ans += right - left + 1
    }
    return ans
};

/**
 * 法二：滑动窗口+单调队列（TODO）
 */