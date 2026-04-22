/**
 * @description 3446. 按对角线进行矩阵排序
 * @link https://leetcode.cn/problems/sort-matrix-by-diagonals/description/
 * 给你一个大小为 n x n 的整数方阵 grid。返回一个经过如下调整的矩阵：
 * 左下角三角形（包括中间对角线）的对角线按 非递增顺序 排序。
 * 右上角三角形 的对角线按 非递减顺序 排序。1
 */
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

/**
 * 核心思路：遍历什么？=》该值的取数范围去遍历
 * 题目思路：
 * 1、遍历对角线：i-j是常数，对角线k=i-j+n，带入第一条和最后一条对角线得出k范围[1，m+n-1]
 * 2、遍历对角线上的点：遍历j（根据公式可得i以得点位）=> j=i+n-k =>j(min)=max(n-k,0),j(max)=min(m+n-k-1,n-1) 得出遍历的j的范围
 */
var sortMatrix = function (grid) {
    const m = grid.length, n = grid[0].length
    // 遍历对角线
    for (let k = 1; k < m + n; k++) {
        // 计算j范围
        const minJ = Math.max(n - k, 0)
        const maxJ = Math.min(m + n - k - 1, n - 1)
        const a = []
        // 获取对角线上的点
        for (let j = minJ; j <= maxJ; j++) {
            a.push(grid[k + j - n][j])
        }
        if (minJ > 0) { // 右上 非递减
            a.sort((x, y) => x - y)
        } else { // 左下 非递增
            a.sort((x, y) => y - x)
        }
        for (let j = minJ; j <= maxJ; j++) {
            grid[k + j - n][j] = a[j - minJ]
        }
    }
    return grid
};

// TEST
console.log(sortMatrix([[1, 7, 3], [9, 8, 2], [4, 5, 6]])) // [[8,2,3],[9,6,7],[4,5,1]]