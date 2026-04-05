/**
 * @description 3371. 识别数组中的最大异常值
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/problems/identify-the-largest-outlier-in-an-array/description/
 * 给你一个整数数组 nums。该数组包含 n 个元素，其中 恰好 有 n - 2 个元素是 特殊数字 。剩下的 两个 元素中，一个是所有 特殊数字 的 和 ，另一个是 异常值 。
 * 异常值 的定义是：既不是原始特殊数字之一，也不是表示元素和的那个数。
 * 注意，特殊数字、和 以及 异常值 的下标必须 不同 ，但可以共享 相同 的值。
 * 返回 nums 中可能的 最大异常值。
 * 
 * 输入： nums = [2,3,5,10]
 * 输出： 10
 * 解释：特殊数字可以是 2 和 3，因此和为 5，异常值为 10。
 */

/**
 * 法一：枚举异常值
 */
var getLargestOutlier = function (nums) {
    // 题意转化：x+2y = total (x为异常值)，求x的最大值
    // 枚举异常值：类似两数之和。先记录每个数出现次数的map，再次遍历找是否存在
    let max = -1000, total = 0
    const iMap = new Map()
    for (const x of nums) {
        total += x
        iMap.set(x, (iMap.get(x) ?? 0) + 1)
    }
    for (const x of nums) {
        // 判断是否存在y满足：y = (total - x) / 2
        iMap.set(x, iMap.get(x) - 1) // 下标不重复
        if ((total - x) % 2 === 0 && iMap.get((total - x) / 2)) {
            max = Math.max(max, x)
        }
        iMap.set(x, iMap.get(x) + 1)
    }
    return max
};

/**
 * 法二：枚举元素和
 */
var getLargestOutlier = function (nums) {
    // 题意转化：x+2y = total (x为异常值)，求x的最大值
    // 枚举y元素和：x = total - 2y => 找（total - 2y）最大值
    let max = -1000, total = 0
    const iMap = new Map()
    for (const x of nums) {
        total += x
        iMap.set(x, (iMap.get(x) ?? 0) + 1)
    }
    for (const y of nums) {
        const x = total - 2 * y
        if (iMap.has(x) && (x != y || iMap.get(x) > 1)) {
            max = Math.max(max, x)
        }
    }
    return max
};

// TEST
console.log(getLargestOutlier([2, 3, 5, 10])) // 10