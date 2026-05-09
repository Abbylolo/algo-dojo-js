/**
 * @description 1524. 和为奇数的子数组数目 
 * @link https://leetcode.cn/problems/number-of-sub-arrays-with-odd-sum/description/
 * 给你一个整数数组 arr 。请你返回和为 奇数 的子数组数目。
 * 由于答案可能会很大，请你将结果对 10^9 + 7 取余后返回。
 * 示例 1：
 * 输入：arr = [1,3,5]
 * 输出：4
 * 解释：所有的子数组为 [[1],[1,3],[1,3,5],[3],[3,5],[5]] 。所有子数组的和为 [1,4,9,3,8,5].奇数和包括 [1,9,3,5] ，所以答案为 4 。
 */
/**
 * @param {number[]} arr
 * @return {number}
 */

/**
* 思路： s[j]-s[i]=奇数 => 1）奇数-偶数=奇数 2）偶数-奇数=奇数 => 根据s[j]的奇偶判断需要的s[i]的奇偶,统计符合的s[i]个数
*/
var numOfSubarrays = function (arr) {
    let evenNum = 0, oddNum = 0, ans = 0, sum = 0
    for (const num of arr) {
        // 统计[0, j-1]前缀后奇偶数
        if (sum % 2 === 0) {
            evenNum++
        } else {
            oddNum++
        }
        // 计算个数
        sum += num
        ans += sum % 2 === 0 ? oddNum : evenNum
    }
    return ans % (1e9 + 7)
};