/**
 * @description 2001. 可互换矩形的组数
 * @param {number[]} rectangles
 * @return {number}
 * @link https://leetcode.cn/problems/number-of-pairs-of-interchangeable-rectangles/description/
 * 
 * 用一个下标从 0 开始的二维整数数组 rectangles 来表示 n 个矩形，其中 rectangles[i] = [widthi, heighti] 表示第 i 个矩形的宽度和高度。
 * 如果两个矩形 i 和 j（i < j）的宽高比相同，则认为这两个矩形 可互换 。更规范的说法是，两个矩形满足 widthi/heighti == widthj/heightj（使用实数除法而非整数除法），则认为这两个矩形 可互换 。
 * 计算并返回 rectangles 中有多少对 可互换 矩形。
 * 
 * 示例 1：
 * 输入：rectangles = [[4,8],[3,6],[10,20],[15,30]]
 * 输出：6
 * */
var interchangeableRectangles = function(rectangles) {
    const iMap = new Map()
    let count = 0
    for(const j of rectangles) {
        const divisor = j[0] / j[1]
        count += iMap.get(divisor) ?? 0
        iMap.set(divisor, (iMap.get(divisor) ?? 0) + 1)
    }
    return count
};

// TEST
console.log(interchangeableRectangles([[4,8],[3,6],[10,20],[15,30]])) // 6