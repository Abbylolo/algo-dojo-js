/**
 * @description 2875. 无限数组的最短子数组长度
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/minimum-size-subarray-in-infinite-array/
 * 
 * 给你一个下标从 0 开始的数组 nums 和一个整数 k。
 * 下标从 0 开始的数组 infinite_nums 是通过无限地将 nums 的元素 appended 连续无限次生成的。
 * 请你从 infinite_nums 中找出满足元素和等于 k 的 最短 子数组，并返回其长度。如果不存在满足条件的子数组，返回 -1。
 * 
 * 提示： 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^5
 * 1 <= k <= 10^9
 * 
 * 示例 1：
 * 输入：nums = [1,2,3], k = 5
 * 输出：2
 * 
 * 示例 2：
 * 输入：nums = [1,1,1,2,3], k = 4
 * 输出：2
 * 
 * 示例 3：
 * 输入：nums = [2,4,6,8], k = 3
 * 输出：-1
 */
var minSizeSubarray = function (nums, target) {
    // 求最短子数组：要求总和 = target
    // => target = k * nums_sum + rem => rem = target mod nums_sum
    // => 求最短rem（在2个nums窗口内）
    let sum = 0, left = 0, ans = Infinity
    nums.forEach(num => {
        sum += num
    })
    const rem = target % sum, k = Math.floor(target / sum)
    // 无需特判。如果 rem=0，那么和为 0 的最短子数组，就是空数组，长度为 0
    // if (rem === 0) {
    //     return k * nums.length
    // }
    for (let right = 0, temp = 0; right < nums.length * 2; right++) {
        temp += nums[right % nums.length]
        while (temp > rem) {
            temp -= nums[left % nums.length]
            left++
        }
        if (temp === rem) {
            ans = Math.min(ans, right - left + 1)
        }
    }
    return ans === Infinity ? -1 : k * nums.length + ans
};

// 测试
console.log(minSizeSubarray([1, 2, 3], 5)); //2
console.log(minSizeSubarray([1], 1));
console.log(minSizeSubarray([1, 2], 4));
console.log(minSizeSubarray([2, 4, 6, 8], 3));