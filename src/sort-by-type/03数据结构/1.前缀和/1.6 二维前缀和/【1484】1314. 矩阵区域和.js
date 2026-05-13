/**
 * @description 1314. 矩阵区域和
 * @link https://leetcode.cn/problems/matrix-block-sum/description/
 * 给你一个 m x n 的矩阵 mat 和一个整数 k ，请你返回一个矩阵 answer ，其中每个 answer[i][j] 是所有满足下述条件的元素 mat[r][c] 的和：
 * i - k <= r <= i + k,
 * j - k <= c <= j + k 且
 * (r, c) 在矩阵内。
 */
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
// 遍历二维数组，计算每个(i,j)点对应范围的子矩阵元素和
var matrixBlockSum = function (mat, k) {
    const obj = new NumMatrix(mat)
    const m = mat.length, n = mat[0].length
    const ans = Array.from({ length: m }, () => Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const r1 = Math.max(i - k, 0), r2 = Math.min(i + k, m - 1),
                c1 = Math.max(j - k, 0), c2 = Math.min(j + k, n - 1)
            ans[i][j] = obj.sumRange(r1, c1, r2, c2)
        }
    }
    return ans
};

class NumMatrix {
    constructor(mat) {
        const m = mat.length, n = mat[0].length
        const sum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                sum[i + 1][j + 1] = sum[i + 1][j] + sum[i][j + 1] - sum[i][j] + mat[i][j]
            }
        }
        this.sumRange = function (r1, c1, r2, c2) {
            return sum[r2 + 1][c2 + 1] - sum[r2 + 1][c1] - sum[r1][c2 + 1] + sum[r1][c1]
        }
    }
}

// TEST
console.log(matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1)); // [[12,21,16],[27,45,33],[24,39,28]]
