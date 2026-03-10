/**
 * @description 1385. 两个数组间的距离值
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 * @link https://leetcode.cn/problems/find-the-distance-value-between-two-arrays/description/
 * 
 * 给你两个整数数组 arr1 ， arr2 和一个整数 d ，请你返回两个数组之间的 距离值 。
 * 「距离值」 定义为符合此距离要求的元素数目：对于元素 arr1[i] ，不存在任何元素 arr2[j] 满足 |arr1[i]-arr2[j]| <= d 。
 * 
 * 示例 1：
 * 输入：arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
 * 输出：2
 * 解释：
 * 对于 arr1[0]=4 我们有：
 * |4-10|=6 > d=2 
 * |4-9|=5 > d=2 
 * |4-1|=3 > d=2 
 * |4-8|=4 > d=2 
 * 所以 arr1[0]=4 符合距离要求
 * 对于 arr1[1]=5 我们有：
 * |5-10|=5 > d=2 
 * |5-9|=4 > d=2 
 * |5-1|=4 > d=2 
 * |5-8|=3 > d=2
 * 所以 arr1[1]=5 也符合距离要求
 * 对于 arr1[2]=8 我们有：
 * |8-10|=2 <= d=2
 * 
 */

/**
 * 法一：排序 + 二分查找
 * 时间复杂度：O((m+n)logm)，其中 n 是 arr1 的长度，m 是 arr2 的长度
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    // arr1[i] => x
    // arr2每个元素若都不在[x-d,x+d]范围内，统计值+1
    // ==》arr2中，第一个>=x-d的数，不存在 或 值>x+d
    let ans = 0
    arr2.sort((a, b) => a - b) // 代价O(mlogm)
    for (const x of arr1) {
        let i = _.sortedIndex(arr2, x - d) // 二分查找
        // 若i===arr2.length，说明arr2中所有元素都<x-d，符合距离要求
        // 若arr2[i]>x+d，说明arr2中第一个>=x-d的数>x+d，符合距离要求
        if (i === arr2.length || arr2[i] > x + d) {
            ans++
        }
    }
    return ans
};

/**
 * 法二：排序 + 双指针
 * 时间复杂度：O(mlogm + nlogn)，其中 n 是 arr1 的长度，m 是 arr2 的长度。瓶颈在排序上，双指针是 O(n+m) 的。
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    // arr1[i] => x
    // arr2每个元素若都不在[x-d,x+d]范围内，统计值+1
    arr1.sort((a, b) => a - b)
    arr2.sort((a, b) => a - b)
    let ans = 0, k = 0
    for (const x of arr1) {
        while (arr2[k] < x - d) {
            k++
        }
        if (k === arr2.length || arr2[k] > x + d) {
            ans++
        }
    }
    return ans
};