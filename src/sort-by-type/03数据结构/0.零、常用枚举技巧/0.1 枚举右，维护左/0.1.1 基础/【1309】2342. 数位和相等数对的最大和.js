/**
 * @description 2342. 数位和相等数对的最大和
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/max-sum-of-a-pair-with-equal-sum-of-digits/description/
 * 给你一个下标从 0 开始的数组 nums ，数组中的元素都是 正 整数。请你选出两个下标 i 和 j（i != j），且 nums[i] 的数位和 与  nums[j] 的数位和相等。
 * 请你找出所有满足条件的下标 i 和 j ，找出并返回 nums[i] + nums[j] 可以得到的 最大值。如果不存在这样的下标对，返回 -1。
 * 
 * 示例 1：
 * 输入：nums = [18,43,36,13,7,15]
 * 输出：54
 * 解释：
 * 下标 i = 1 和 j = 2 满足条件，nums[i] = 43 且 nums[j] = 36 。
 * nums[i] + nums[j] = 43 + 36 = 79 ，这是可以得到的最大和。
 * */
var maximumSum = function (nums) {
    // map维护数位和和对应数值（相同数位和更新最大）
    const iMap = new Map()
    let max = -1
    for (let j = 0; j < nums.length; j++) {
        // 求数位和
        const bitSum = getBitSum(nums[j])
        if (iMap.has(bitSum)) {
            max = Math.max(max, nums[j] + iMap.get(bitSum))
            if (nums[j] > iMap.get(bitSum)) {
                iMap.set(bitSum, nums[j])
            }
        } else {
            iMap.set(bitSum, nums[j])
        }
    }
    return max
};
function getBitSum(num) {
    let sum = 0
    while (num != 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }
    return sum
}

// TEST
console.log(maximumSum([18, 43, 36, 13, 7, 15])) // 54