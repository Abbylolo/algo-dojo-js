/**
 * @description 3761. 镜像对之间最小绝对距离
 * @link https://leetcode.cn/problems/minimum-absolute-distance-between-mirror-pairs/description/
 * 
 * 给你一个整数数组 nums。
 * 镜像对 是指一对满足下述条件的下标 (i, j)：
 * 0 <= i < j < nums.length，并且
 * reverse(nums[i]) == nums[j]，其中 reverse(x) 表示将整数 x 的数字反转后形成的整数。反转后会忽略前导零，例如 reverse(120) = 21。
 * 返回任意镜像对的下标之间的 最小绝对距离。下标 i 和 j 之间的绝对距离为 abs(i - j)。
 * 如果不存在镜像对，返回 -1。
 * 
 * 示例 1：
 * 输入： nums = [12,21,45,33,54]
 * 输出： 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function (nums) {
    // 维护左队列，记录每个reverse(nums[i]),并维护最大值（以计算最小距离）
    let minDistance = nums.length
    const rMap = new Map()
    for (let j = 0; j < nums.length; j++) {
        if (rMap.has(nums[j])) {
            minDistance = Math.min(minDistance, j - rMap.get(nums[j]))
        }
        rMap.set(reverseNum(nums[j]), j)
    }
    return minDistance === nums.length ? -1 : minDistance
};

function reverseNum(num) {
    let rev = 0
    for (; num > 0; num = Math.floor(num / 10)) {
        rev = rev * 10 + num % 10
    }
    return rev
}

// 测试
console.log(minMirrorPairDistance([12, 21, 45, 33, 54])) // 1