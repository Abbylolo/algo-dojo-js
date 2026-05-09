/**
 * @description 2588. 统计美丽子数组数目
 * @link https://leetcode.cn/problems/count-the-number-of-beautiful-subarrays/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 思路：转二进制按列找规律分析题目 => 美丽子数组 等价于 子数组的异或和等于 0 => s[j] = s[i]
 * => 等价于寻找 “异或结果为 0 的区间” 。任何异或和不为 0 的子数组，其前缀异或和一定不相等，因此绝对不会被统计进去。
 */
var beautifulSubarrays = function (nums) {
    let ans = 0, s = 0;
    const cnt = new Map();
    for (const x of nums) {
        cnt.set(s, (cnt.get(s) ?? 0) + 1);
        s ^= x;
        ans += cnt.get(s) ?? 0;
    }
    return ans;
}

// TEST
console.log(beautifulSubarrays([4, 3, 1, 2, 4])) // 2