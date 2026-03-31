/**
 * @description 2364. 统计坏数对的数目 
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/count-number-of-bad-pairs/
 * 给你一个下标从 0 开始的整数数组 nums 。如果 i < j 且 j - i != nums[j] - nums[i] ，则数对 (i, j) 是一个 坏数对 。
 * 返回 nums 中 坏数对 的总数目。
 * 
 * 示例 1：
 * 输入：nums = [4,1,3,3]
 * 输出：5
 * 解释：总共有 5 个坏数对 (i, j) ：
 * - 数对 (0, 1) 是坏数对，因为 1 - 0 != 1 - 4 。
 * - 数对 (0, 2) 是坏数对，因为 2 - 0 != 3 - 4, 2 != -1 。
 * - 数对 (0, 3) 是坏数对，因为 3 - 0 != 3 - 4, 3 != -1 。
 * - 数对 (1, 2) 是坏数对，因为 2 - 1 != 3 - 1, 1 != 2 。
 * - 数对 (2, 3) 是坏数对，因为 3 - 2 != 3 - 3, 1 != 0 。
 * 总共有 5 个坏数对，所以我们返回 5 
 */
var countBadPairs = function(nums) {
    // nums[j] - j != nums[i] - i的个数 =》 维护每个index的(nums[i] - i)
    const iMap = new Map()
    let cnt = 0
    for(let j = 0; j < nums.length; j++) {
        const m = nums[j] - j
        cnt += j - (iMap.get(m) ?? 0)
        iMap.set(m, (iMap.get(m) ?? 0) + 1)
    }
    return cnt
};