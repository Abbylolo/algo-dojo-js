/**
 * @description 2187. 完成旅途的最少时间
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 * @link https://leetcode.cn/problems/minimum-time-to-complete-trips/
 * 给你一个数组 time ，其中 time[i] 表示第 i 辆公交车完成 一趟旅途 所需要花费的时间。
 * 每辆公交车可以 连续 完成多趟旅途，也就是说，一辆公交车当前旅途完成后，可以 立马开始 下一趟旅途。每辆公交车 独立 运行，也就是说可以同时有多辆公交车在运行且互不影响。
 * 给你一个整数 totalTrips ，表示所有公交车 总共 需要完成的旅途数目。请你返回完成 至少 totalTrips 趟旅途需要花费的 最少 时间。
 * 
 * 示例 1：
 * 输入：time = [1,2,3], totalTrips = 5
 * 输出：3
 * 解释：
 * - 时刻 t = 1 ，每辆公交车完成的旅途数分别为 [1,0,0] 。已完成的总旅途数为 1 + 0 + 0 = 1 。
 * - 时刻 t = 2 ，每辆公交车完成的旅途数分别为 [2,1,0] 。已完成的总旅途数为 2 + 1 + 0 = 3 。
 * - 时刻 t = 3 ，每辆公交车完成的旅途数分别为 [3,1,1] 。已完成的总旅途数为 3 + 1 + 1 = 5 。
 * 所以总共完成至少 5 趟旅途的最少时间为 3 。
 */
/**
 * 法一：二分猜答案
 * 时间复杂度：O(nlogU)，其中 n 为 time 的长度，U 为二分上下界之差。
 * 空间复杂度：O(1)。
 */
var minimumTime = function (time, totalTrips) {
    /**
     * 1、check目标函数：时刻t完成总趟数 >= totalTrips
     * 2、求什么：最少时间t，对t二分查找【具备单调性，t越大越符合】
     * 3、二分查找t范围：待查找区间[minV,totalTrips*minV)
     * 【1）向下取整，连minV都没达到的话一趟都跑不起来，<minV不符合totalTrips>=1 2）最差就是只有跑的最快的车在开,一定满足】
     */
    const minV = Math.min(...time)
    let left = minV - 1, right = minV * totalTrips
    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2)
        if (check(time, totalTrips, mid)) {
            right = mid
        } else {
            left = mid
        }
    }
    return right
};
function check(time, totalTrips, t) {
    for (let sum = 0, i = 0; i < time.length; i++) {
        sum += Math.floor(t / time[i])
        if (sum >= totalTrips) return true
    }
    return false
}

// TEST
console.log(minimumTime([1, 2, 3], 5)) // 3