/**
 * @description 3824. 减小数组使其满足条件的最小 K 值
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/minimum-k-increments-to-make-array-non-decreasing/description/
 * 给你一个 正 整数数组 nums。
 * 对于一个正整数 k，定义 nonPositive(nums, k) 为使 nums 的每个元素都变为 非正数 所需的 最小 操作 次数。在一次操作中，你可以选择一个下标 i 并将 nums[i] 减少 k。
 * 返回一个整数，表示满足 nonPositive(nums, k) <= k2 的 k 的 最小 值。
 * 
 * 示例 1：
 * 输入： nums = [3,7,5]
 * 输出： 3
 * 解释：
 * 当 k = 3 时，nonPositive(nums, k) = 6 <= k2。
 *   减少 nums[0] = 3 一次。nums[0] 变为 3 - 3 = 0。
 *   减少 nums[1] = 7 三次。nums[1] 变为 7 - 3 - 3 - 3 = -2。
 *   减少 nums[2] = 5 两次。nums[2] 变为 5 - 3 - 3 = -1。
 */
/**
 * 法一：二分猜答案
 * 思路：
 * 1、check目标函数：sum累加[ceil(nums[i]/k)] <= k^2
 * 2、求k，二分查k【具备单调性，k越大越符合】
 * 3、二分答案区间[根号n，maxV]:
 *      a)由正变负，每个数字都至少操作1次，np>=n;由于要找k^2>=np,k^2>=n，故k>=根号n，比k小的左边值肯定不满足目标函数
 *      b)向上取整，当k=maxV时，np=n，由于n<=k^2，故一定满足目标函数np<=k^2
 * 时间复杂度：O(nlog(U− 根号n))，其中 n 是 nums 的长度，U=max(nums)
 * 空间复杂度：O(1)。
 */
var minimumK = function (nums) {
    const maxV = Math.max(...nums), n = nums.length
    // 二分答案区间[根号n，maxV]：特殊情况，如果根号n >= maxV，答案是根号n
    if (Math.ceil(Math.sqrt(n)) >= maxV) return Math.ceil(Math.sqrt(n))
    // 开区间查找范围：（根号n-1，maxV）
    let left = Math.ceil(Math.sqrt(n)) - 1, right = maxV
    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2)
        if (check(nums, mid)) {
            right = mid
        } else {
            left = mid
        }
    }
    return right
};
function check(nums, k) {
    let sum = 0
    nums.forEach(v => sum += Math.ceil(v / k))
    return sum <= Math.pow(k, 2)
}