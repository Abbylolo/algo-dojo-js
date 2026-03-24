/**
 * @description: 275. H 指数 II
 * @param {number[]} citations
 * @return {number}
 * @link https://leetcode.cn/problems/h-index-ii/description/
 * 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数，citations 已经按照 非降序排列 。计算并返回该研究者的 h 指数。
 * h 指数的定义：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （n 篇论文中）至少 有 h 篇论文分别被引用了至少 h 次。
 * 
 * 示例 1：
 * 输入：citations = [0,1,3,5,6]
 * 输出：3
 * 解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 0, 1, 3, 5, 6 次。
 *      由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。
 */

/**
 * 法一：二分答案查找+二分查找
 * 时间复杂度：O(log² N)
 */
var hIndex = function (citations) {
    /**
     * 1、check目标函数：cnt（citations[i]>=h）>=h
     * 2、求h，二分h【具备单调性，h越大越不满足】:所以二分区间左边都是满足的，右边都是不满足
     * 3、二分答案查找范围：(0, citations.length]【0是一定会满足的】
     */
    let left = 0, right = citations.length + 1
    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2)
        if (check(citations, mid)) {
            left = mid
        } else {
            right = mid
        }
    }
    return left

};
function check(citations, h) {
    const n = citations.length // 数组中>=h的个数 =》数组len - lb（h）
    let cnt = n - lowerBound(citations, h)
    return cnt >= h
}
function lowerBound(nums, target) {
    let left = -1, right = nums.length
    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] < target) {
            left = mid
        } else {
            right = mid
        }
    }
    return right
}

/**
 * 法二：二分答案查找（法一再优化）
 * 时间复杂度：O(logN)
 * check目标函数：cnt（citations[i]>=h）>=h  ==优化为==》 citations[n - h] >= h
 */

// TEST CASE
console.log(hIndex([0, 1, 3, 5, 6])) // 3