/**
 * @description 1854. 人口最多的年份
 * @link https://leetcode.cn/problems/maximum-population-year/description/
 * 给你一个二维整数数组 logs ，其中每个 logs[i] = [birthi, deathi] 表示第 i 个人的出生和死亡年份。
 * 年份 x 的 人口 定义为这一年期间活着的人的数目。第 i 个人被计入年份 x 的人口需要满足：x 在闭区间 [birthi, deathi - 1] 内。注意，人不应当计入他们死亡当年的人口中。
 * 返回 人口最多 且 最早 的年份。
 * 
 * 示例 1：
 * 输入：logs = [[1993,1999],[2000,2010]]
 * 输出：1993
 * 解释：人口最多为 1 ，而 1993 是人口为 1 的最早年份。
 */

/**
 * @param {number[][]} logs
 * @return {number}
 */
// 数组区间统一操作，并根据最终结果求值的 => 差分
var maximumPopulation = function (logs) {
    // 1、求差分
    const d = new Map()
    for (const [from, to] of logs) {
        d.set(from, (d.get(from) ?? 0) + 1)
        d.set(to, (d.get(to) ?? 0) - 1)
    }
    // 2、还原数组，按照年份排序，记录当前人口数
    let s = 0, maxNum = 0, ans = 0
    for (const v of [...d.keys()].sort((a, b) => a - b)) {
        s += d.get(v)
        if (s > maxNum) {
            maxNum = Math.max(maxNum, s)
            ans = v
        }
    }
    return ans
};