/**
 * @description 1109. 航班预订统计 
 * @link https://leetcode.cn/problems/corporate-flight-bookings/description/
 * 这里有 n 个航班，它们分别从 1 到 n 进行编号。
 * 有一份航班预订表 bookings ，表中第 i 条预订记录 bookings[i] = [firsti, lasti, seatsi] 意味着在从 firsti 到 lasti （包含 firsti 和 lasti ）的 每个航班 上预订了 seatsi 个座位。
 * 请你返回一个长度为 n 的数组 answer，里面的元素是每个航班预定的座位总数。
 */
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
    // 1、计算差分 - 航班座位数
    const d = Array(n).fill(0)
    for (const [from, to, num] of bookings) {
        d[from - 1] += num
        d[to] -= num
    }
    let s = 0
    const ans = Array(n)
    for (let i = 0; i < n; i++) {
        s += d[i]
        ans[i] = s
    }
    return ans
};

// TEST
console.log(corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5)) // [10, 55, 45, 25, 25]