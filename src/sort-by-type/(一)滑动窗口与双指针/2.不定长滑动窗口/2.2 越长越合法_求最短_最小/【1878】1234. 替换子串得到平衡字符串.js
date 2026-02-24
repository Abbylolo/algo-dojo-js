/**
 * @description 1234. 替换子串得到平衡字符串
 * @param {string} s
 * @return {number}
 * @link https://leetcode.cn/problems/replace-the-substring-for-balanced-string/
 * 
 * 有一个只含有 'Q', 'W', 'E', 'R' 四种字符，且长度为 n 的字符串。
 * 假如在该字符串中，这四个字符都恰好出现 n/4 次，那么它就是一个「平衡字符串」。
 * 给你一个这样的字符串 s，请通过「替换一个子串」的方式，使原字符串 s 变成一个「平衡字符串」。
 * 你可以用和「待替换子串」长度相同的 任何 其他字符串来完成替换。
 * 请返回待替换子串的最小可能长度。
 * 如果原字符串自身就是一个平衡字符串，则返回 0。
 * 
 * 提示： 1 <= s.length <= 10^5
 * s.length 是 4 的倍数
 * s 中只含有 'Q', 'W', 'E', 'R' 四种字符
 * 
 * 示例 1：
 * 输入：s = "QWER"
 * 输出：0
 * 解释：s 已经是平衡的了。
 * 
 */

// 法一：求最短替换子串：1、遍历s统计字符,计算多余字符 2、找出满足多余字符的子串
var balancedString = function (s) {
    const len = s.length / 4, cMap = new Map([['Q', 0], ['W', 0], ['E', 0], ['R', 0]]);
    s.split('').forEach(c => {
        cMap.set(c, cMap.get(c) + 1)
    })
    if (['Q', 'W', 'E', 'R'].every(ch => cMap.get(ch) === len)) {
        return 0
    }
    const need = new Map([...'QWER'].map(ch => [ch, Math.max(0, cMap.get(ch) - len)]))
    let ans = s.length, left = 0, nMap = new Map([['Q', 0], ['W', 0], ['E', 0], ['R', 0]]);
    for (let right = 0; right < s.length; right++) {
        let c = s[right]
        nMap.set(c, nMap.get(c) + 1)
        while (['Q', 'W', 'E', 'R'].every(ch => nMap.get(ch) >= need.get(ch))) {
            ans = Math.min(ans, right - left + 1)
            nMap.set(s[left], nMap.get(s[left]) - 1)
            left++
        }
    }
    return ans
};

//法二（推荐）：转换为 =》待替换子串外的任意字母的个数都不回超过n/4
var balancedString = function (s) {
    const len = s.length / 4, cMap = new Map([['Q', 0], ['W', 0], ['E', 0], ['R', 0]]);
    s.split('').forEach(c => {
        cMap.set(c, cMap.get(c) + 1)
    })
    if (['Q', 'W', 'E', 'R'].every(ch => cMap.get(ch) === len)) {
        return 0
    }
    let ans = s.length, left = 0
    for (let right = 0; right < s.length; right++) {
        let c = s[right]
        cMap.set(c, cMap.get(c) - 1)
        while (['Q', 'W', 'E', 'R'].every(ch => cMap.get(ch) <= len)) {
            ans = Math.min(ans, right - left + 1)
            cMap.set(s[left], cMap.get(s[left]) + 1)
            left++
        }
    }
    return ans
};

// 测试
console.log(balancedString("QWER"));
console.log(balancedString("QQWE"));
console.log(balancedString("QQQW"));
console.log(balancedString("QQQQ"));