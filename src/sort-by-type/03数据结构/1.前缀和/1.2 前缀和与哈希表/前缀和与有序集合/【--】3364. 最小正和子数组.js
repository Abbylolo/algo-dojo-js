/**
 * @description 3364. 最小正和子数组
 * @link https://leetcode.cn/problems/minimum-positive-sum-subarray/description/
 * 给你一个整数数组 nums 和 两个 整数 l 和 r。你的任务是找到一个长度在 l 和 r 之间（包含）且和大于 0 的 子数组 的 最小 和。
 * 返回满足条件的子数组的 最小 和。如果不存在这样的子数组，则返回 -1。
 * 子数组 是数组中的一个连续 非空 元素序列。
 * 
 * 示例 1：
 * 输入： nums = [3, -2, 1, 4], l = 2, r = 3
 * 输出： 1
 */
/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
/**
 * 法一：前缀和+定长滑窗+有序集合
 * 思路：枚举右j，减去左边前缀和中<=nums[j]值的最大值（且l≤j−i≤r => j−r≤i≤j−l）=> 前缀和要做排序，便于找到<=nums[j]值的最大值（二分查找）
 */
var minimumSumSubarray = function (nums, l, r) {
    const n = nums.length;
    const s = new Array(n + 1).fill(0);

    // 1. 计算前缀和
    for (let i = 0; i < n; i++) {
        s[i + 1] = s[i] + nums[i];
    }

    // 2. 用数组 + 二分查找模拟有序集合
    const sortedList = [];

    // 二分查找：寻找第一个 > target 的位置，返回插入位置
    const bisectRight = (arr, target) => {
        let left = 0, right = arr.length;
        while (left < right) {
            const mid = (left + right) >> 1;
            if (arr[mid] > target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };

    // 二分查找：寻找第一个 >= target 的位置
    const bisectLeft = (arr, target) => {
        let left = 0, right = arr.length;
        while (left < right) {
            const mid = (left + right) >> 1;
            if (arr[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };

    let ans = Infinity;

    // 3. 枚举右边界 j（即前缀和数组的下标）
    for (let j = 0; j <= n; j++) {
        // 当 j >= l 时，我们需要开始在窗口 [j-r, j-l] 中找 i
        // j-l 是 i 的最大可能值
        const iMax = j - l;
        if (iMax >= 0) {
            // 在有序集合中添加 s[iMax]
            const insertPos = bisectRight(sortedList, s[iMax]);
            sortedList.splice(insertPos, 0, s[iMax]);
        }

        // 当 j > r 时，需要移除不在窗口中的元素 s[j-r-1]
        const removeIdx = j - r - 1;
        if (removeIdx >= 0) {
            const delPos = bisectLeft(sortedList, s[removeIdx]);
            if (delPos < sortedList.length && sortedList[delPos] === s[removeIdx]) {
                sortedList.splice(delPos, 1);
            }
        }

        // 当 j >= l 时，我们可以开始查找答案
        if (j >= l && sortedList.length > 0) {
            // 在有序集合中找最大的 s[i] < s[j]
            // 也就是找第一个 >= s[j] 的位置，然后它的前一个就是我们要找的
            const pos = bisectLeft(sortedList, s[j]);
            if (pos > 0) {
                // pos-1 就是最大的小于 s[j] 的元素下标
                const currentSum = s[j] - sortedList[pos - 1];
                if (currentSum > 0 && currentSum < ans) {
                    ans = currentSum;
                }
            }
        }
    }

    return ans === Infinity ? -1 : ans;
};

/**
 * 法二：暴力枚举
 */
var minimumSumSubarray = function (nums, l, r) {
    const n = nums.length;
    let minPositiveSum = Infinity;

    for (let start = 0; start < n; start++) {
        let windowSum = 0;
        for (let end = start; end < Math.min(start + r, n); end++) {
            windowSum += nums[end];
            const currentLength = end - start + 1;
            if (currentLength >= l && windowSum > 0) {
                minPositiveSum = Math.min(minPositiveSum, windowSum);
            }
        }
    }

    return minPositiveSum === Infinity ? -1 : minPositiveSum;
};

// TEST
console.log(minimumSumSubarray([3, -2, 1, 4], 2, 3)); // 1
