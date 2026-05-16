/**
 * @description 3355. 零数组变换 I 
 * @link https://leetcode.cn/problems/zero-array-transformation-i/description/
 * 给定一个长度为 n 的整数数组 nums 和一个二维数组 queries，其中 queries[i] = [li, ri]。
 * 对于每个查询 queries[i]：
 *    在 nums 的下标范围 [li, ri] 内选择一个下标子集。
 *    将选中的每个下标对应的元素值减 1。
 * 零数组 是指所有元素都等于 0 的数组。
 * 如果在按顺序处理所有查询后，可以将 nums 转换为零数组，则返回 true，否则返回 false。
 * 
 * 示例 1：
 * 输入： nums = [1,0,1], queries = [[0,2]]
 * 输出： true
 * 解释：
 *  对于 i = 0：
 *      选择下标子集 [0, 2] 并将这些下标处的值减 1。
 *      数组将变为 [0, 0, 0]，这是一个零数组。
 */
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function (nums, queries) {
    // 差分 - 数组需要扣减的数
    const d = Array(nums.length + 1).fill(0)
    for (const [from, to] of queries) {
        d[from] += 1
        d[to + 1] -= 1
    }
    let s = 0
    for (let i = 0; i < nums.length; i++) {
        s += d[i]
        nums[i] -= s
    }
    return !nums.filter(v => v > 0).length
};

// TEST
console.log(isZeroArray([1, 0, 1], [[0, 2]])) // true