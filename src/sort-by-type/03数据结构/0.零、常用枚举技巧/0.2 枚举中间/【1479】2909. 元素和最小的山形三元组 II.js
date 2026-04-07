/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
    const n = nums.length
    const sufMin = Array(n)
    sufMin[n - 1] = nums[n - 1]
    let preMin = nums[0], sum = Infinity
    for (let k = n - 2; k > 1; k--) { // 后缀最小值：以index往右的队列中的最小值
        sufMin[k] = Math.min(sufMin[k + 1], nums[k])
    }
    for (let j = 1; j < n - 1; j++) { // 前缀最小值
        if (preMin < nums[j] && sufMin[j + 1] < nums[j]) {
            sum = Math.min(sum, preMin + nums[j] + sufMin[j + 1])
        }
        preMin = Math.min(preMin, nums[j])
    }
    return sum === Infinity ? -1 : sum
};

// 测试
console.log(minimumSum([8, 6, 1, 5, 3])) // 9