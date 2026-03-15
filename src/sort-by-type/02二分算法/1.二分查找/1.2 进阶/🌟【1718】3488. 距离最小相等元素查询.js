/** 
 * @description 3488. 距离最小相等元素查询
 * @link https://leetcode.cn/problems/closest-equal-element-queries/description/
 * 给你一个 环形 数组 nums 和一个数组 queries 。
 * 对于每个查询 i ，你需要找到以下内容：
 *      数组 nums 中下标 queries[i] 处的元素与 任意 其他下标 j（满足 nums[j] == nums[queries[i]]）之间的 最小 距离。如果不存在这样的下标 j，则该查询的结果为 -1 。
 * 返回一个数组 answer，其大小与 queries 相同，其中 answer[i] 表示查询i的结果。
 * 
 * 示例：
 * 输入： nums = [1,3,1,4,1,3,2], queries = [0,3,5]
 * 输出： [2,-1,3]
 * 
 * TODO: 灵神解法前后各加节点没懂
 */

/**
 * 法一：二分查找
 * 思路：
 *      1、遍历nums记录每个元素的下标；
 *      2、找到元素nums[queries[i]]）的有序下标数组中和i相邻最小距离值
 */
const _ = require('lodash');
var solveQueries = function (nums, queries) {
    // 1、遍历nums记录每个元素的下标
    const pos = {}
    nums.forEach((v, index) => {
        if (pos[v] === undefined) {
            pos[v] = []
        }
        pos[v].push(index)
    })
    // 2、找到元素nums[queries[i]]）的有序下标数组中和i相邻最小距离值
    for (let i = 0; i < queries.length; i++) {
        let x = nums[queries[i]], posArr = pos[x]
        const qNum = queries[i]
        if (posArr.length === 1) {
            queries[i] = -1
        } else {
            // 找到posArr中qNum的位置
            const n = posArr.length,
                qIndex = _.sortedIndex(posArr, qNum),
                // 环形数组中，与 qNum 距离最近的候选是其在有序数组中的前一个和后一个（带环）
                prevIdx = (qIndex - 1 + n) % n, // 🌟
                nextIdx = (qIndex + 1) % n, // 🌟
                left = posArr[prevIdx],
                right = posArr[nextIdx],
                distL = Math.min(Math.abs(qNum - left), nums.length - Math.abs(qNum - left)), // 🌟
                distR = Math.min(Math.abs(qNum - right), nums.length - Math.abs(qNum - right))
            queries[i] = Math.min(distL, distR)
        }
    }
    return queries
};

// TEST
// console.log(solveQueries([1, 3, 1, 4, 1, 3, 2], [0, 3, 5])); // [2,-1,3]
console.log(solveQueries([14, 14, 4, 2, 19, 19, 14, 19, 14], [2, 4, 8, 6, 3])); // [-1,1,1,2,-1]
