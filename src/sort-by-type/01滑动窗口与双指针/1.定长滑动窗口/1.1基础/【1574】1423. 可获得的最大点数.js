/**
 * @description 1423. 可获得的最大点数
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/maximum-points-you-can-obtain-from-cards/
 * 
 * 
 * 几张卡牌 排成一行，每张卡牌都有一个对应的点数。点数由整数数组 cardPoints 给出。
 * 每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 k 张卡牌。
 * 你的点数就是你拿到手中的所有卡牌的点数之和。
 * 给你一个整数数组 cardPoints 和整数 k，请你返回可以获得的最大点数。
 * 
 * 示例 1：
 * 输入：cardPoints = [1,2,3,4,5,6,1], k = 3
 * 输出：12
 * 解释：第一次行动，不管拿哪张牌，你的点数总是 1 。但是，先拿最右边的卡牌将会最大化你的可获得点数。最优策略是拿右边的三张牌，最终点数为 1 + 6 + 5 = 12 。
 */

/**
 * 法一：反向思维（滑动窗口）
 * 思路：求两端拿走的牌最大和 =》求n-k的最小和。以m（n-k)为窗口滑动
 * 时间复杂度：O(n) 空间复杂度：O(1)
 */
var maxScore = function(cardPoints, k) {
    // 求n-k的最小和及总和。以m（n-k)为窗口滑动
    // 1.窗口未形成，计算初始窗口总和
    const n = cardPoints.length, m = n - k
    let sum = 0
    for(let i = 0; i < m; i++) {
        sum += cardPoints[i]
    }
    // 2.开始向右滑动
    let total = sum, minSum = sum
    for(let i = m; i < n; i++) {
        total += cardPoints[i]
        let diff = cardPoints[i] - cardPoints[i - m]
        sum += diff
        minSum = Math.min(minSum, sum)
    }
    return total - minSum
};

/**
 * 法二：正向思维（滑动窗口）
 * 思路：1.先计算最左端的k个的sum 2.再整体左移，最多移动k次
 * 时间复杂度：O(k) 空间复杂度：O(1)
 */
var maxScore = function(cardPoints, k) {
    const n = cardPoints.length
    let sum = 0, maxSum = 0
    // 1.计算初始k长的滑动窗口总和(窗口未形成)
    for(let i = 0; i < k; i++) {
        sum += cardPoints[i]
    }
    // 2.窗口已形成，计算头部出1个和尾部进1个的差值更新总和;i为移动的个数
    maxSum = sum
    for(let i = 1; i <= k; i++) {
        let diff = cardPoints[n-i] - cardPoints[k-i]
        sum += diff
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum
};

/**
 * 法三：正向思维（传统滑动）
 * 思路：滑动轨迹：前部出后部进，以left为滑动指针，初始位为k-1
 * 时间复杂度：O(k) 空间复杂度：O(1)
 */
var maxScore = function(cardPoints, k) {
    const n = cardPoints.length
    let sum = 0, maxSum = 0
    for(let left = k - 1; left >= -k; left--) {
        // 1.进入窗口
        sum += cardPoints[left < 0 ? n + left : left]
        // 窗口未形成
        if(left > 0) continue
        // 2.更新值
        maxSum = Math.max(maxSum, sum)
        // 3.出窗口
        let right = left + k - 1
        sum -= cardPoints[right < 0 ? n - 1 : right]
    }
    return maxSum
};

console.log(maxScore([1,2,3,4,5,6,1], 3));