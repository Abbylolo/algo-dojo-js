/**
 * @description 3128. 直角三角形
 * @link https://leetcode.cn/problems/right-triangles/description/
 * 给你一个二维 boolean 矩阵 grid 。
 * 如果 grid 的 3 个元素的集合中，一个元素与另一个元素在 同一行，并且与第三个元素在 同一列，则该集合是一个 直角三角形。3 个元素 不必 彼此相邻。
 * 请你返回使用 grid 中的 3 个元素可以构建的 直角三角形 数目，且满足 3 个元素值 都 为 1 。
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
const _ = require('lodash')


var numberOfRightTriangles = function (grid) {
    let count = 0
    // 遍历三角形顶点，每个顶点个数：（r-1)*(c-1)
    const n = grid[0].length // 列数
    const jArr = Array(n).fill(-1) // 提前-1
    // 计算每列和
    for (let j = 0; j < n; j++) {
        for (const iNum of grid) {
            jArr[j] += iNum[j]
        }
    }
    for (let i = 0; i < grid.length; i++) {
        const iSum = _.sum(grid[i]) - 1 // 每行和-1
        for (const [j, origin] of grid[i].entries()) {
            if (origin === 1) {
                count += jArr[j] * iSum
            }
        }
    }
    return count
};

// TEST
console.log(numberOfRightTriangles([[0, 1, 0], [0, 1, 1], [0, 1, 0]])) // 2
