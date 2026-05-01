/**
 * @description 3652. 按策略买卖股票的最佳时机 
 * @link https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-using-strategy/description/
 */
/**
 * @param {number[]} prices
 * @param {number[]} strategy
 * @param {number} k
 * @return {number}
 */
/**
 * 思路：
 * 1、一次遍历，每次遍历计算调整后的利润。分三段算调整的总和 
 *   1) [0, i-k-1] -> sum(i-k)
 *   2) [i-k/2, i-1] -> sumSell(i) - sumSell(i-k/2) 【[i-k,i-k/2-1]这段因为是*0,所以不用纳入】
 *   3) [i, n -1] -> sum(n) - sum(i)
 * 2、sum[n]就是不调整的利润，直接比较
 */
var maxProfit = function (prices, strategy, k) {
    const n = prices.length
    const sum = Array(n + 1) // 前i天的总利润
    sum[0] = 0
    const sumSell = Array(n + 1) // 前i天的总卖出值
    sumSell[0] = 0
    for (let i = 0; i < n; i++) {
        sum[i + 1] = sum[i] + prices[i] * strategy[i]
        sumSell[i + 1] = sumSell[i] + prices[i]
    }
    let maxProfit = sum[n]
    for (let i = k; i <= n; i++) {
        maxProfit = Math.max(maxProfit, sum[i - k] + sumSell[i] - sumSell[i - k / 2] + sum[n] - sum[i])
    }
    return maxProfit
};

// TEST
console.log(maxProfit([1, 2, 3, 4, 5], [1, 0, 1, 0, 1], 2)) // 10