/**
 * @description 3805.统计凯撒加密对数目
 * @param {string[]} words
 * @return {number}
 * @link https://leetcode.cn/problems/count-caesar-cipher-pairs/description/
 * 给你一个由 n 个字符串组成的数组 words。每个字符串的长度均为 m 且仅包含小写英文字母。
 * 如果我们可以通过执行以下操作任意次数（可能为零次）使得两个字符串 s 和 t 变得 相等，则称这两个字符串是 相似 的。
 * 1）选择 s 或 t 。
 * 2）将所选字符串中的 每个 字母替换为字母表中的下一个字母（循环替换）。'z' 之后的下一个字母是 'a'。
 * 
 * 计算满足以下条件的下标对 (i, j) 的数量：
 * 1）i < j
 * 2）words[i] 和 words[j] 是 相似 的。
 * 返回一个整数，表示此类下标对的数量。
 * 
 * 示例 1：
 * 输入：words = ["ab","aa","za","aa"]
 * 输出：2
 * 解释：下标对 (0, 1) 和 (2, 3) 是相似的。
 * - 下标对 (0, 1) 是相似的，因为 "ab" 可以通过将 "aa" 变以 "ab" 。
 * - 下标对 (2, 3) 是相似的，因为 "za" 可以通过将 "za" 变以 "za" 。
 */

/**
 * 法一：枚举右，维护左
 * 核心：字符串 归一化 + 环形取余
 */
var countPairs = function (words) {
    const iMap = new Map();
    let cnt = 0;
    for (const word of words) {
        let t = "";
        const base = word.charCodeAt(0);
        // 直接遍历字符串，生成紧凑的特征值
        for (let i = 0; i < word.length; i++) {
            // 计算相对于第一个字符的偏移量 (0-25)
            // 取余想象成一个环
            const diff = (word.charCodeAt(i) - base + 26) % 26;
            // 将 0-25 映射为 a-z，生成归一化后的字符串
            t += String.fromCharCode(97 + diff);
        }
        const prevCount = iMap.get(t) || 0;
        cnt += prevCount;
        iMap.set(t, prevCount + 1);
    }
    return cnt;
};

// TEST
console.log(countPairs(["ab", "aa", "za", "aa"])) // 2