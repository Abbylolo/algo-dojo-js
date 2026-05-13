/**
 * @description 3070. 元素和小于等于 k 的子矩阵的数目
 * @link https://leetcode.cn/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/description/
 * 给你一个下标从 0 开始的整数矩阵 grid 和一个整数 k。
 * 返回包含 grid 左上角元素、元素和小于或等于 k 的 子矩阵的数目。
 */
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
// 计算(0,0)为起点的二维数组前缀和，统计满足条件的个数
var countSubmatrices = function (grid, k) {
    let ans = 0
    const m = grid.length, n = grid[0].length
    const sum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            sum[i + 1][j + 1] = sum[i + 1][j] + sum[i][j + 1] - sum[i][j] + grid[i][j]
            if (sum[i + 1][j + 1] <= k) {
                ans++
            }
        }
    }
    return ans
};

// TEST
console.log(countSubmatrices([[7, 6, 3], [6, 6, 1]], 18)); // 4