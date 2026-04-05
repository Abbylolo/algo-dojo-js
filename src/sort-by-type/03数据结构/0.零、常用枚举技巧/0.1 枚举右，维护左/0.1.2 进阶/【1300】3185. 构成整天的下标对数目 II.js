/**
 * @description 3185. 构成整天的下标对数目 II
 * @link https://leetcode.cn/problems/count-pairs-that-form-a-complete-day-ii/
 * 给你一个整数数组 hours，表示以 小时 为单位的时间，返回一个整数，表示满足 i < j 且 hours[i] + hours[j] 构成 整天 的下标对 i, j 的数目。
 * 整天 定义为时间持续时间是 24 小时的 整数倍 。
 * 例如，1 天是 24 小时，2 天是 48 小时，3 天是 72 小时，以此类推。
 * 
 * 示例 1：
 * 输入： hours = [12,12,30,24,24]
 * 输出： 2
 * 解释：构成整天的下标对分别是 (0, 1) 和 (3, 4)。
 */

/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
    // 左边队列维护余数
    const rMap = new Map()
    let count = 0
    for (let j = 0; j < hours.length; j++) {
        const remain = hours[j] % 24, // 余数
            x = (24 - remain) % 24 // 匹配值。%24是考虑到24的倍数取余都是0若要匹配需再取余
        count += rMap.get(x) ?? 0
        rMap.set(remain, (rMap.get(remain) ?? 0) + 1)
    }
    return count
};

// 测试
console.log(countCompleteDayPairs([12, 12, 30, 24, 24])) // 2