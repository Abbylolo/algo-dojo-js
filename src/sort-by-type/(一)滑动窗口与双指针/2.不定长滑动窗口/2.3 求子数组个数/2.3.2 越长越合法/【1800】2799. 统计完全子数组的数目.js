/**
 * @description 2799. 统计完全子数组的数目
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/count-complete-subarrays-in-an-array/description/
 * 给你一个由 正 整数组成的数组 nums 。
 * 如果数组中的某个子数组满足下述条件，则称之为 完全子数组 ：子数组中 不同 元素的数目等于整个数组不同元素的数目。
 * 返回数组中 完全子数组 的数目。
 * 子数组 是数组中的一个连续非空序列。
 * 
 * 示例 1：
 * 输入：nums = [1,3,1,2,2]
 * 输出：4
 * 解释：完全子数组有：[1,3,1,2]、[1,3,1,2,2]、[3,1,2] 和 [3,1,2,2] 。
 */
var countCompleteSubarrays = function (nums) {
    // 越长越合法 =》 求右端点固定最短子串，累加left
    // 求数组不同元素
    const cnt = new Map()
    nums.forEach(item => cnt.set(item, 0))
    let left = 0, ans = 0
    for (const num of nums) {
        cnt.set(num, cnt.get(num) + 1)
        // 如果满足条件，缩小左端点
        while ([...cnt.values()].every(v => v > 0)) {
            cnt.set(nums[left], cnt.get(nums[left]) - 1)
            left++
        }
        ans += left
    }
    return ans
};

var countCompleteSubarrays = function (nums) {
    // 越长越合法 =》 求右端点固定最短子串，累加left
    // 求数组不同元素
    const k = new Set(nums).size
    const cnt = new Map()
    let left = 0, ans = 0
    for (const num of nums) {
        cnt.set(num, (cnt.get(num) ?? 0) + 1)
        // 如果满足条件，缩小左端点
        while (cnt.size === k) {
            if (cnt.get(nums[left]) === 1) {
                cnt.delete(nums[left])
            } else {
                cnt.set(nums[left], cnt.get(nums[left]) - 1)
            }
            left++
        }
        ans += left
    }
    return ans
};

// TEST
console.log(countCompleteSubarrays([1, 3, 1, 2, 2])) // 4