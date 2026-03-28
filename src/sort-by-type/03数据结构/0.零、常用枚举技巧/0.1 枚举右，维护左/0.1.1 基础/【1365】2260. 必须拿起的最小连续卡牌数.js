/**
 * @description 2260. 必须拿起的最小连续卡牌数
 * @param {number[]} cards
 * @return {number}
 * @link https://leetcode.cn/problems/minimum-consecutive-cards-to-pick-up/description/
 * 给你一个整数数组 cards ，其中 cards[i] 表示第 i 张卡牌的 值 。如果两张卡牌的值相同，则认为这一对卡牌 匹配 。
 * 返回你必须拿起的最小连续卡牌数，以使在拿起的卡牌中有一对匹配的卡牌。如果无法得到一对匹配的卡牌，返回 -1 。
 * 
 * 示例 1：
 * 输入：cards = [3,4,2,3,4,7]
 * 输出：4
 * 解释：拿起卡牌 [3,4,2,3] 将会包含一对值为 3 的匹配卡牌。注意，拿起 [4,2,3,4] 也是最优方案。
 * */
var minimumCardPickup = function (cards) {
    // 求两个相同卡牌的最小距离。维护左队列每个数的index（更新最大）
    let ans = Infinity
    const iMap = new Map()
    for (let j = 0; j < cards.length; j++) {
        if (iMap.has(cards[j])) {
            ans = Math.min(ans, j - iMap.get(cards[j]) + 1)
        }
        iMap.set(cards[j], j)
    }
    return ans === Infinity ? -1 : ans
};

// TEST
console.log(minimumCardPickup([3,4,2,3,4,7])) // 4