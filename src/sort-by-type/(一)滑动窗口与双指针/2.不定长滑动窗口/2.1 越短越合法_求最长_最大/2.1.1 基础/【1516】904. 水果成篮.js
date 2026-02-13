/**
 * @description 904. 水果成篮
 * @param {number[]} fruits
 * @return {number}
 * @link https://leetcode.cn/problems/fruit-into-baskets/
 * 
 * 你正在探访一家农场，农场从左到右种植了一排果树。这些树用一个整数数组 fruits 表示，其中 fruits[i] 是第 i 棵树上的水果 种类 。
 * 你想要尽可能多地收集水果。然而，农场的主人设定了一些严格的规矩，你必须按照要求采摘水果：
 * 你只有 两个 篮子，并且每个篮子只能装 单一类型 的水果。每个篮子能够装的水果总量没有限制。
 * 你可以选择任意一棵树开始采摘，你必须从 每棵 树（包括开始采摘的树）上 恰好摘一个水果 。采摘的水果应当符合篮子中的水果类型。每采摘一次，你将会向右移动到下一棵树，并继续采摘。
 * 一旦你走到某棵树前，但水果不符合篮子的水果类型，那么就必须停止采摘。
 * 给你一个整数数组 fruits ，返回你可以收集的水果的 最大 数目。
 * 
 * 示例 1：
 * 输入：fruits = [1,2,1]
 * 输出：3
 * 解释：可以采摘全部 3 棵树。
 */

var totalFruit = function (fruits) {
    // 求最长子串。条件：子串中的数字种类不超过2个
    let ans = 0, left = 0, fruitMap = new Map()
    for (let right = 0; right < fruits.length; right++) {
        let curFruit = fruits[right]
        fruitMap.set(curFruit, (fruitMap.get(curFruit) ?? 0) + 1)
        while (fruitMap.size > 2) {
            let leftFruit = fruits[left]
            fruitMap.set(leftFruit, (fruitMap.get(leftFruit) ?? 0) - 1)
            left++
            if (fruitMap.get(leftFruit) === 0) fruitMap.delete(leftFruit)
        }
        ans = Math.max(ans, right - left + 1)
    }
    return ans
};

// TEST
console.log(totalFruit([1, 2, 1])) // 3