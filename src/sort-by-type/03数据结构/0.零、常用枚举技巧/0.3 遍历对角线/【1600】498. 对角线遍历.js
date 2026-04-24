/**
 * @deprecated 498. 对角线遍历 
 * @link https://leetcode.cn/problems/diagonal-traverse/description/
 * 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。
 */
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
/**
 * 思路：该方向对角线每移动一个点：i减少1个，j增加一个，所以每移动一个点i+j=0 => 对角线上点i+j是常数
 * 解题思路：
 * 1、遍历对角线: k=i+j+1 => 范围[1, m+n-1]
 * 2、遍历对角线上点：遍历j，j=k-i-1 => jmin = max(k-m,0),jmax = min(k-1,n-1)
 * 3、奇偶遍历点
 */
var findDiagonalOrder = function (mat) {
    const m = mat.length, n = mat[0].length, ans = []
    for (let k = 1; k < m + n; k++) {
        const minJ = Math.max(k - m, 0), maxJ = Math.min(k - 1, n - 1)
        if (k % 2 === 1) {
            for (let j = minJ; j <= maxJ; j++) {
                ans.push(mat[k - j - 1][j])
            }
        } else {
            for (let j = maxJ; j >= minJ; j--) {
                ans.push(mat[k - j - 1][j])
            }
        }
    }
    return ans
};

// 测试
console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // [1,2,4,7,5,3,6,8,9]