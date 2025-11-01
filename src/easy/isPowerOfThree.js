/**
 * @description 326. 3 的幂
 * @param {number} n
 * @return {boolean}
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。
 * 整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3x
 * -2^31 <= n <= 2^31 - 1
 */

/**
 * 时间复杂度：O(1) 空间复杂度：O(1)
 * 思路：数据范围内最大是3的19次方，3^19 / 3^x= 3^(19-x) 一定不会有余数
 */
var isPowerOfThree = function(n) {
    return n > 0 && Math.pow(3,19) % n === 0
};