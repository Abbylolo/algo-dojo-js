/**
 * @description 3623. 统计梯形的数目 I 
 * @param {number[][]} points
 * @return {number}
 * @link https://leetcode.cn/problems/count-number-of-trapezoids-i/description/
 * 
 * 给你一个二维整数数组 points，其中 points[i] = [xi, yi] 表示第 i 个点在笛卡尔平面上的坐标。
 * 水平梯形 是一种凸四边形，具有 至少一对 水平边（即平行于 x 轴的边）。两条直线平行当且仅当它们的斜率相同。
 * 返回可以从 points 中任意选择四个不同点组成的 水平梯形 数量。
 * 由于答案可能非常大，请返回结果对 109 + 7 取余数后的值。
 */

var countTrapezoids = function(points) {
    // 维护y值作key，value为每一行的点数
    const iMap = new Map()
    const MOD = 1000000007n;
    let cnt = 0n;
    for(const point of points) {
        let pointCount = (iMap.get(point[1]) ?? 0) + 1
        iMap.set(point[1], pointCount)
    }
    let k = 0n; // 前面（左边队列）的总平行边数
    for(const linePointCount of iMap.values()) {
        const pc = BigInt(linePointCount);
        const pSides = pc * (pc - 1n) / 2n;
        cnt = (cnt + pSides * k) % MOD;
        k += pSides;
    }
    return Number(cnt);
};

// TEST 
console.log(countTrapezoids([[1,0],[2,0],[3,0],[2,2],[3,2]])) // 3