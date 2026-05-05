/**
 * @description 1523. 在区间范围内统计奇数数目 
 * @link https://leetcode.cn/problems/count-odd-numbers-in-an-interval-range/description/
 * 给你两个非负整数 low 和 high 。请你返回 low 和 high 之间（包括二者）奇数的数目。
 * 示例 1：
 * 输入：low = 3, high = 7
 * 输出：3
 * 解释：3 到 7 之间奇数数字为 [3,5,7] 。
 */
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
/**
 * 思路：前缀和[1, high]中奇数个数 - [1, low -1]中奇数个数
 * [1,n]中的奇数个数：1<=2k-1<=n  ==>  1<=k<=(n+1)/2 ==> k的个数为(n+1)/2
 */
var countOdds = function (low, high) {
    return Math.floor((high + 1) / 2) - Math.floor(low / 2)
};

// var countOdds = function (low, high) {
//     if (low % 2 === 0 && high % 2 === 0) {
//         return (high - low) / 2
//     } else {
//         return Math.floor((high - low) / 2) + 1
//     }
// };

// TEST
console.log(countOdds(3, 7)) // 3
