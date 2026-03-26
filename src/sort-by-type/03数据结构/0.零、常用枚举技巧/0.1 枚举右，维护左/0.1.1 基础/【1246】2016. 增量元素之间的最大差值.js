/**
 * @description 2016. 增量元素之间的最大差值
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/maximum-difference-between-increasing-elements/
 * 给你一个下标从 0 开始的整数数组 nums ，该数组的大小为 n ，请你计算 nums[j] - nums[i] 能求得的 最大差值 ，其中 0 <= i < j < n 且 nums[i] < nums[j] 。
 * 返回 最大差值 。如果不存在满足要求的 i 和 j ，返回 -1 。
 * 
 * 示例 1：
 * 输入：nums = [7,1,5,4]
 * 输出：4
 * 解释：
 * 最大差值出现在 i = 1 且 j = 2 时，nums[j] - nums[i] = 5 - 1 = 4 。
 * 注意，尽管 i = 1 且 j = 0 时 ，nums[j] - nums[i] = 7 - 1 = 6 > 4 ，但 i > j 不满足题面要求，所以 6 不是有效的答案。
 */
var maximumDifference = function (nums) {
    let res = -1, min = nums[0]
    for (let j = 1; j < nums.length; j++) {
        res = Math.max(res, nums[j] - min)
        min = Math.min(min, nums[j])
    }
    return res === 0 ? -1 : res
};

// TEST
// console.log(maximumDifference([7, 1, 5, 4])) // 4
// console.log(maximumDifference([9, 4, 3, 2])) // -1
console.log(maximumDifference([999, 997, 980, 976, 948, 940, 938, 928, 924, 917, 907, 907, 881, 878, 864, 862, 859, 857, 848, 840, 824, 824, 824, 805, 802, 798, 788, 777, 775, 766, 755, 748, 735, 732, 727, 705, 700, 697, 693, 679, 676, 644, 634, 624, 599, 596, 588, 583, 562, 558, 553, 539, 537, 536, 509, 491, 485, 483, 454, 449, 438, 425, 403, 368, 345, 327, 287, 285, 270, 263, 255, 248, 235, 234, 224, 221, 201, 189, 187, 183, 179, 168, 155, 153, 150, 144, 107, 102, 102, 87, 80, 57, 55, 49, 48, 45, 26, 26, 23, 15])) // 9