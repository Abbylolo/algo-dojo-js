/**
 * @description 1422. 分割字符串的最大得分
 * @param {string} s
 * @return {number}
 *
 * 给你一个由若干 0 和 1 组成的字符串 s ，请你计算并返回将该字符串分割成两个 非空 子字符串（即 左 子字符串和 右 子字符串）所能获得的最大得分。
 *
 * 「分割字符串的得分」为 左 子字符串中 0 的数量加上 右 子字符串中 1 的数量。
 *
 * 示例 1：
 * 输入：s = "011101"
 * 输出：5 
 * 解释：
 * 将字符串 s 划分为两个非空子字符串的可行方案有：
 */

/**
 * 法一：贪心/前后缀分解
 * 【贪心算法：在每一步都选择当前看起来最优的选项，不会回退或重新考虑之前的选择】
 * 时间复杂度：O(n) 空间复杂度：O(1)
 * 思路：遍历字符串，统计左子字符串中0的个数和右子字符串中1的个数，计算得分，更新最大得分
 * 1）统计字符串中1的个数
 * 2）遍历字符串，统计左子字符串中0的个数和右子字符串中1的个数，计算得分，更新最大得分
 * 3）返回最大得分
 */
var maxScore = function(s) {
    let leftZero = 0, rightOne = 0, maxScore = 0,
        // totalOne = Array.from(s).filter(num => num == '1').length
        totalOne = _.countBy(s)['1'] ?? 0 // 统计字符串中1的个数，如果为null/undefined返回默认值0
    for(let i = 0; i < s.length-1; i++) {
        if(s[i] == '0') {
            leftZero++
        } else {
            rightOne++
        }
        maxScore = Math.max(maxScore, leftZero + totalOne - rightOne)
    }
    return maxScore
};

/**
 * 法二：合并变量，累计更新
 * 时间复杂度：O(n) 空间复杂度：O(1)
 * 思路：curScore 记录当前得分，遍历字符串，统计左子字符串中0的个数和右子字符串中1的个数，计算得分，更新最大得分
 * 1）一开始，分割线在最左边，score 初始化成 s 中的 1 的个数。
 * 2）不断向右移动分割线，或者说，把 s[i] 从分割线右边移动到分割线左边。
 *      --如果 s[i]=0，那么左边多了个 0，把 score 增加 1。
 *      --否则 s[i]=1，那么右边少了个 1，把 score 减少 1。
 * 3）最后返回最大得分
 */
var maxScore = function(s) {
    let curScore = _.countBy(s)['1'] ?? 0, maxScore = 0
    for(let i = 0; i < s.length - 1; i++) {
        curScore += (s[i] === '0' ? 1 : -1) 
        maxScore = Math.max(curScore, maxScore)
    }
    return maxScore
};

console.log(maxScore("011101")); // 5