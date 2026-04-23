/**
 * @description 2711.对角线上不同值的数量差
 * @link https://leetcode.cn/problems/difference-of-number-of-distinct-values-on-diagonals/description/
 */
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
/**
 * 法一：遍历对角线 + 前后缀分解
 * 思路：遍历对角线=>遍历对角线的每个值=>hash记录个数
 * 步骤：
 * 1、对角线k=i-j+n,范围[1,m+n-1] 
 * 2、对角线上点遍历j，j=i-k+n,，范围[max(n-k,0),min(m+n-k-1, n-1)] 
 * 3、前后缀分解计算值（预处理前缀数组+预处理后缀数组+组合求解）
 */
var differenceOfDistinctValues = function (grid) {
    let m = grid.length, n = grid[0].length, cnt = new Set()
    const ans = Array.from({ length: m }, () => Array(n).fill(0))
    // Array(m).fill().map(() => Array(n).fill(0))
    // 遍历对角线
    for (k = 1; k < m + n; k++) {
        let minJ = Math.max(n - k, 0), maxJ = Math.min(m + n - k - 1, n - 1)
        cnt.clear()
        // 前缀遍历
        for (let j = minJ; j <= maxJ; j++) {
            let i = k + j - n
            ans[i][j] = cnt.size
            cnt.add(grid[i][j])
        }
        cnt.clear()
        // 后缀遍历+组合求解
        for (let j = maxJ; j >= minJ; j--) {
            let i = k + j - n
            ans[i][j] = Math.abs(ans[i][j] - cnt.size)
            cnt.add(grid[i][j])
        }
    }
    return ans
};