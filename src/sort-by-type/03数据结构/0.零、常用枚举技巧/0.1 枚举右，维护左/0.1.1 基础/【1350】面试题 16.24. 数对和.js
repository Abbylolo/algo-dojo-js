/**
 * @description 面试题 16.24. 数对和
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/pairs-with-sum-lcci/description/
 * 设计一个算法，找出数组中两数之和为指定值的所有整数对。一个数只能属于一个数对。
 * 
 * 示例 1：
 * 输入：nums = [5,6,5], target = 11
 * 输出：[[5,6]]
 */
var pairSums = function (nums, target) {
    // 维护左边队列数字个数
    const iMap = new Map()
    let ans = []
    for (const num of nums) {
        const remain = target - num
        if (iMap.get(remain)) {
            ans.push([remain, num])
            iMap.set(remain, iMap.get(remain) - 1)
        } else {
            iMap.set(num, (iMap.get(num) ?? 0) + 1)
        }
    }
    return ans
};

// TEST
console.log(pairSums([5,6,5], 11)) // [[5,6]]

