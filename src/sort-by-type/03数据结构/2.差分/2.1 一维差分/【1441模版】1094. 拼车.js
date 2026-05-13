/**
 * @description 1094. 拼车 
 * @link https://leetcode.cn/problems/car-pooling/description/
 * 车上最初有 capacity 个空座位。车 只能 向一个方向行驶（也就是说，不允许掉头或改变方向）
 * 给定整数 capacity 和一个数组 trips ,  trips[i] = [numPassengersi, fromi, toi] 表示第 i 次旅行有 numPassengersi 乘客，接他们和放他们的位置分别是 fromi 和 toi 。这些位置是从汽车的初始位置向东的公里数。
 * 当且仅当你可以在所有给定的行程中接送所有乘客时，返回 true，否则请返回 false。
 * 
 * 示例 1：
 * 输入：trips = [[2,1,5],[3,3,7]], capacity = 4
 * 输出：false
 */
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
/**
 * 法一： 使用数组存储差分数组
 * 思路：
 * 1. 问题转化：每个行程 [num, from, to] 等价于在区间 [from, to-1] 都增加 num 个乘客
 * 2. 差分操作：
 *    - 在 from 处 +num（表示从 from 开始上车）
 *    - 在 to 处 -num（表示到 to 开始下车）
 * 3. 前缀和还原：遍历差分数组求前缀和，实时检查是否超过 capacity
 * 
 * 注意：题目中明确限制了 fromi < toi <= 1000，所以可以用固定长度的数组
 */
var carPooling = function (trips, capacity) {
    // 1、计算差分数组
    const d = Array(1001).fill(0)
    for (let i = 0; i < trips.length; i++) {
        const trip = trips[i]
        d[trip[1]] += trip[0]
        d[trip[2]] -= trip[0]
    }

    // 2、计算差分数组前缀和 得 最终数组（每公里乘客数）
    let s = 0
    for (const v of d) {
        s += v
        if (s > capacity) return false
    }
    return true
};

/**
 * 法二： 使用Map存储差分数组，公里数对应的差分值
 * 思路：
 * 1. 空间优化：当公里数范围很大但实际使用的点很少时，用 Map 只记录有变化的点
 * 2. 步骤：
 *    - 用 Map 记录每个公里数的差分变化（+num 或 -num）
 *    - 将 Map 的 key 排序，按时间顺序计算前缀和
 *    - 每次累加后检查是否超过容量
 * 
 * 优势：不需要预先知道最大公里数，适合范围很大的情况
 */
var carPooling = function (trips, capacity) {
    // 1、计算差分数组，公里数对应的差分值
    const d = new Map()
    for (const [num, from, to] of trips) {
        d.set(from, (d.get(from) ?? 0) + num)
        d.set(to, (d.get(to) ?? 0) - num)
    }

    // 2、计算差分数组前缀和 得 最终数组（每公里乘客数）
    // map需要排序，按照公里数升序 => 计算前缀和
    let s = 0
    for (const v of [...d.keys()].sort((a, b) => a - b)) {
        s += d.get(v)
        if (s > capacity) return false
    }
    return true
};