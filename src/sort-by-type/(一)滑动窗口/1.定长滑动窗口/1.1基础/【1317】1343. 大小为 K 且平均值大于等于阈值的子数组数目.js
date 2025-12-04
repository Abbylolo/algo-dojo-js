/**
 * @description 1343. 大小为 K 且平均值大于等于阈值的子数组数目
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 * @link https://leetcode.cn/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
 * 
 * 给你一个整数数组 arr 和两个整数 k 和 threshold 。
 * 请你返回长度为 k 且平均值大于等于 threshold 的子数组数目。
 * 
 * 示例 1：
 * 输入：arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
 * 输出：3
 * 解释：子数组 [2,5,5],[5,5,5],[5,5,8] 的平均值分别为 4，5，6 且大于 4 。其他长度为 3 的子数组平均值都小于 4 。
 */

var numOfSubarrays = function (arr, k, threshold) { 
    let sum = 0, num = 0
    for(let right = 0; right < arr.length; right++) {
        sum += arr[right]
        let left = right - k + 1
        if(left < 0) continue
        if(sum >= threshold * k) {
            num++
        }
        sum -= arr[left]
    }
    return num
}