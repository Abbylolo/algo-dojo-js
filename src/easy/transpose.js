/**
 * @description 867. 转置矩阵
 * @param {number[][]} matrix
 * @return {number[][]}
 *
 * 给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。
 *
 * 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
 *
 * 示例 1：
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[1,4,7],[2,5,8],[3,6,9]]
 */
 
/**
 * 法一：模拟
 * 时间复杂度：O(m * n) 空间复杂度：O(m * n)
 * 思路：遍历矩阵，将矩阵的行索引与列索引交换
 */
var transpose = function (matrix) {
    // 原数组是n列m行，转置后应为m列n行
    const m = matrix.length, n = matrix[0].length
    const res = Array.from({ length: n }, () => Array(m))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[j][i] = matrix[i][j]
        }
    }
    return res
}

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]])); // [[1,4,7],[2,5,8],[3,6,9]]