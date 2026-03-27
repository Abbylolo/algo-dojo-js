/**
 * @description 1128. 等价多米诺骨牌对的数量
 * @param {number[][]} dominoes
 * @return {number}
 * @link https://leetcode.cn/problems/number-of-equivalent-domino-pairs/description/
 * 给你一组多米诺骨牌 dominoes 。
 * 形式上，dominoes[i] = [a, b] 与 dominoes[j] = [c, d] 等价 当且仅当 (a == c 且 b == d) 或者 (a == d 且 b == c) 。即一张骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌。
 * 在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对 (i, j) 的数量。
 * 
 * 示例 1：
 * 输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
 * 输出：1
 */
var numEquivDominoPairs = function (dominoes) {
    // 维护每种数组类型个数
    const iMap = new Map()
    let cnt = 0
    for (const dom of dominoes) {
        dom.sort((a, b) => a - b)
        cnt += iMap.get(dom.toString()) ?? 0
        iMap.set(dom.toString(), (iMap.get(dom.toString()) ?? 0) + 1)
    }
    return cnt
};

// TEST
console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]])) // 1