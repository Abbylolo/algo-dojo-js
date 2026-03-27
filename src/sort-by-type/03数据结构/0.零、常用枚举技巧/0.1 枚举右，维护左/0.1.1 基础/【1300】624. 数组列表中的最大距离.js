/**
 * @description 624. 数组列表中的最大距离
 * @param {number[]} nums
 * @return {number}
 * 给定 m 个数组，每个数组都已经按照升序排好序了。
 * 现在你需要从两个不同的数组中选择两个整数（每个数组选一个）并且计算它们的距离。两个整数 a 和 b 之间的距离定义为它们差的绝对值 |a-b| 。
 * 返回最大距离。
 * 
 * 示例 1：
 * 输入：nums = [[1,2,3],[4,5,6]]
 * 输出：5
 * 解释：
 * 最大距离出现在 nums[0][1] 和 nums[1][0] 之间，距离为 5 。
 */
var maxDistance = function (arrays) {
    // 遍历右端，维护左边队列最小值和最大值
    let res = 0, min = arrays[0][0], max = arrays[0].at(-1)
    for (let j = 1; j < arrays.length; j++) {
        const arr = arrays[j]
        res = Math.max(res, max - arr[0], arr.at(-1) - min)
        min = Math.min(min, arr[0])
        max = Math.max(max, arr.at(-1))
    }
    return res
};

// TEST
console.log(maxDistance([[1,2,3],[4,5,6]])) // 5