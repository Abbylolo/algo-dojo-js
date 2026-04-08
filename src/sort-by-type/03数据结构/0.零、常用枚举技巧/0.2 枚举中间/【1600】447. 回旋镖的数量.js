/**
 * @description 447. 回旋镖的数量
 * @link https://leetcode.cn/problems/number-of-boomerangs/description/
 * 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组 ，
 * 其中 i 和 j 之间的欧式距离和 i 和 k 之间的欧式距离相等（需要考虑元组的顺序）。
 * 请返回平面上所有回旋镖的数量。
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    // 枚举中间点i，统计有多少j和k满足欧式距离:每一个中间点i的距离值用map维护，枚举j点，看有多少个同距离k点可取。需考虑顺序，所以个数*2
    let ans = 0
    const map = new Map()
    for (const [x1, y1] of points) {
        map.clear() // 记录固定i点的距离边
        for (const [x2, y2] of points) {
            const d = (x1 - x2) ** 2 + (y1 - y2) ** 2
            const c = map.get(d) ?? 0
            ans += c * 2 // ? TODO 没懂
            map.set(d, c + 1)
        }
    }
    return ans;
};

// TEST
console.log(numberOfBoomerangs([[0, 0], [1, 0], [2, 0]])) // 2