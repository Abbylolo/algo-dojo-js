/**
 * @description 2848. 与车相交的点 
 * @link https://leetcode.cn/problems/points-that-intersect-with-cars/description/
 * 给你一个下标从 0 开始的二维整数数组 nums 表示汽车停放在数轴上的坐标。对于任意下标 i，nums[i] = [starti, endi] ，其中 starti 是第 i 辆车的起点，endi 是第 i 辆车的终点。
 * 返回数轴上被车 任意部分 覆盖的整数点的数目。
 * 
 * 示例 1：
 * 输入：nums = [[3,6],[1,5],[4,7]]
 * 输出：7
 * 解释：从 1 到 7 的所有点都至少与一辆车相交，因此答案为 7 。
 */
/**
 * @param {number[][]} nums
 * @return {number}
 */
// 计算每个点被覆盖了多少次。统计覆盖次数大于 0 的点，即为答案
var numberOfPoints = function (nums) {
    const maxEnd = Math.max(...nums.map(item => item[1]))
    // 1、计算差分
    // +2 是为了处理边界情况，确保所有点都被覆盖到d[0, maxEnd + 1]一共有 maxEnd + 2 个点
    const d = Array(maxEnd + 2).fill(0)
    for (const [from, to] of nums) {
        d[from] += 1
        d[to + 1] -= 1
    }
    // 按照坐标轴排序，求前缀和 => 还原数轴值
    let s = 0, cnt = 0
    for (const v of d) {
        s += v
        if (s > 0) {
            cnt++
        }
    }
    return cnt
};

// TEST
console.log(numberOfPoints([[3,6],[1,5],[4,7]])) // 7