/**
 * @description 1283. 使结果不超过阈值的最小除数
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 * @link https://leetcode.cn/problems/find-the-smallest-divisor-given-a-threshold/
 * 给你一个整数数组 nums 和一个正整数 threshold  ，你需要选择一个正整数作为除数，然后将数组里每个数都除以它，并对除法结果求和。
 * 请你找出能够使上述结果小于等于阈值 threshold 的除数中 最小 的那个。
 * 每个数除以除数后都向上取整，比方说 7/3 = 3 ， 10/2 = 5 。
 * 题目保证一定有解。nums.length <= threshold
 * 
 * 示例 1：
 * 输入：nums = [1,2,5,9], threshold = 6
 * 输出：5
 * 解释：如果除数为 1 ，我们可以得到和为 17 （1+2+5+9）。
 * 如果除数为 4 ，我们可以得到和为 7 (1+1+2+3) 。如果除数为 5 ，和为 5 (1+1+1+2)。
 */
var smallestDivisor = function (nums, threshold) {
    // nums.length <= threshold 且 向上取整：所以当right >= maxV时，求和为n一定满足 
    const maxV = Math.max(...nums)
    // right及右边的都是满足的答案
    let left = 0, right = maxV
    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2)
        if (check(nums, threshold, mid)) { // 由于单调性：除数越大（目标函数越小）越满足条件。所以往左边找
            right = mid
        } else {
            left = mid
        }
    }
    return right
};
function check(nums, threshold, divisor) {
    let sum = 0
    nums.forEach(v => sum += Math.ceil(v / divisor))
    return sum <= threshold
}

// TEST
console.log(smallestDivisor([1, 2, 5, 9], 6)) // 5