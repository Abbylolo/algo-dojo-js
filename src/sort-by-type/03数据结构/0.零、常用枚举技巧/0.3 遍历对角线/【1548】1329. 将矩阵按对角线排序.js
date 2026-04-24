/**
 * @deprecated 1329. 将矩阵按对角线排序 
 * @link https://leetcode.cn/problems/sort-the-matrix-diagonally/description/
 * 给你一个 m * n 的整数矩阵 mat ，请你将同一条 矩阵对角线 上的元素按升序排序后，返回排好序的矩阵。
 */
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
/**
 * 思路：
 * 1、遍历对角线：k=i-j+n => 范围[1, m+n-1]
 * 2、遍历对角线上点：遍历j得点，j=i-k+n => jmin=max(n-k,0),jmax=min(m+n-k-1,n-1)
 * 3、对角线上点排序
 */
var diagonalSort = function (mat) {
    let m = mat.length, n = mat[0].length
    for (let k = 1; k < m + n; k++) {
        let minJ = Math.max(n - k, 0), maxJ = Math.min(m + n - k - 1, n - 1)
        let arr = []
        for (let j = minJ; j <= maxJ; j++) {
            const i = j + k - n
            arr.push(mat[i][j])
        }
        arr.sort((a, b) => a - b)
        for (let j = minJ; j <= maxJ; j++) {
            const i = j + k - n
            mat[i][j] = arr[j - minJ]
        }
    }
    return mat
};