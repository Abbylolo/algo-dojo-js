/**
 * @description 304. 二维区域和检索 - 矩阵不可变
 * @link https://leetcode.cn/problems/range-sum-query-2d-immutable/description/
 * 给定一个二维矩阵 matrix，以下类型的多个请求：
 * 计算其子矩形范围内元素的总和，该子矩阵的 左上角 为 (row1, col1) ，右下角 为 (row2, col2) 。
实现 NumMatrix 类：
 * NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
 * int sumRegion(int row1, int col1, int row2, int col2) 返回 左上角 (row1, col1) 、右下角 (row2, col2) 所描述的子矩阵的元素 总和 。
 */
/** ES5写法
 * @param {number[][]} matrix
 */
// var NumMatrix = function(matrix) {
// };

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
// NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
// };

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

// ES6 写法
class NumMatrix {
    constructor(matrix) {
        const m = matrix.length, n = matrix[0].length
        // 初始化二维前缀和
        const sum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                sum[i + 1][j + 1] = sum[i + 1][j] + sum[i][j + 1] - sum[i][j] + matrix[i][j]
            }
        }
        // 计算任意子矩阵元素和
        this.sumRegion = function (row1, col1, row2, col2) {
            return sum[row2 + 1][col2 + 1] - sum[row2 + 1][col1] - sum[row1][col2 + 1] + sum[row1][col1]
        }
    }

}

// TEST
console.log(new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]).sumRegion(2, 1, 4, 3)); // 8
console.log(new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]).sumRegion(1, 1, 2, 2)); // 11
