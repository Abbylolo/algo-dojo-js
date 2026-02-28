/**
 * @description 76. 最小覆盖子串
 * @param {string} s
 * @param {string} t
 * @return {string}
 * @link https://leetcode.cn/problems/minimum-window-substring/
 * 
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 
 * 注意：
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 示例 1：
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 
 * 示例 2：
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 
 * 示例 3：
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 * 
 */

/**
 * 法一
 * 时间复杂度 O(m+n)
 * 空间复杂度：O(m)
 * 思路：使用 Map 记录 t 中每个字符的需求量（正数）。滑动窗口右指针 right 每次移动时，将当前字符在 Map 中的计数减1（若字符不在 t 中，则初始为0再减1，变为负数）。然后通过 [...tMap].every(...) 检查是否所有字符的计数都 ≤ 0，即窗口是否已覆盖 t。若满足，则进入 while 循环尝试收缩左边界，每次收缩前更新答案，并将左边字符的计数加1，左指针右移，直到条件不再满足。
 */
var minWindow = function (s, t) {
    if (s.length < t.length) return ''
    const tMap = new Map()
    t.split('').forEach(ch => tMap.set(ch, (tMap.get(ch) ?? 0) + 1))
    let ans = s + '1', left = 0
    for (let right = 0; right < s.length; right++) {
        tMap.set(s[right], (tMap.get(s[right]) ?? 0) - 1)
        while ([...tMap].every(([key, value]) => value <= 0)) {
            if (ans.length > right - left + 1) {
                ans = s.substring(left, right + 1)
            }
            tMap.set(s[left], (tMap.get(s[left]) ?? 0) + 1)
            left++
        }
    }
    return ans === s + '1' ? '' : ans
};

/**
 * 法二（更优）：优化了法一的while遍历Map
 * 时间复杂度 O(n)
 * 空间复杂度：O(m)
 * 思路：同样使用 Map 记录 t 中每个字符的需求量，并引入变量 needKinds 表示当前还缺少几种字符（初始为 tMap.size）。右指针移动时，若当前字符在 t 中，则将其计数减1，若减到0，说明该字符已满足需求，needKinds 减1。当 needKinds === 0 时，窗口已覆盖 t，进入 while 循环收缩左边界：更新答案，将左边字符计数加1，若从0变为1，则 needKinds 加1，左指针右移，直到 needKinds > 0。
 */
var minWindow = function (s, t) {
    if (s.length < t.length) return ''
    const tMap = new Map()
    for (const ch of t) tMap.set(ch, (tMap.get(ch) ?? 0) + 1)
    let ans = s + '1', left = 0, needKinds = tMap.size
    for (let right = 0; right < s.length; right++) {
        if (tMap.has(s[right])) {
            tMap.set(s[right], tMap.get(s[right]) - 1)
            if (tMap.get(s[right]) === 0) needKinds--
        }
        while (needKinds === 0) {
            if (ans.length > right - left + 1) {
                ans = s.substring(left, right + 1)
            }
            if (tMap.has(s[left])) {
                tMap.set(s[left], tMap.get(s[left]) + 1)
                if (tMap.get(s[left]) === 1) needKinds++
            }
            left++
        }
    }
    return ans === s + '1' ? '' : ans
};

// 测试
console.log(minWindow("ADOBECODEBANC", "ABC")); //"BANC"
console.log(minWindow("a", "a")); //"a"
console.log(minWindow("a", "aa")); //""