/**
 * @description 2090. 半径为 k 的子数组平均值
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * @link https://leetcode.cn/problems/k-radius-subarray-averages/
 */

var getAverages = function (nums, k) { 
    // 初始化赋值-减少后半截无效窗口循环次数
    let res = new Array(nums.length).fill(-1), sum = 0
    for (let mid = -k; mid < nums.length - k; mid++) {
        // 1.进入窗口
        let right = mid + k, left = mid - k
        sum += nums[right]
        // 窗口未形成处理
        if(left < 0) {
            continue
        } 
        // 2.窗口形成 记录答案
        res[mid] = Math.floor(sum / (2 * k + 1))
        // 3.出窗口
        sum -= nums[left]
    }
    return res
}

console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));

console.log(getAverages([7,4,3,9,1,8,5,2,6], 0));