/**
 * @description 1456. 定长子串中元音的最大数目
 * @param {string} s
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length
 *
 * 给你一个字符串 s 和一个整数 k 。请你从 s 中选出一个子字符串并计算该子字符串中包含的字符种数不超过 k 的 最长子字符串 的长度。
 *
 * 示例 1：
 * 输入：s = "havefunonleetcode", k = 5
 * 输出：6
 * 解释：最长的子字符串是 "havefun" ，这个子字符串包含 5 种字符：'a', 'e', 'f', 'o', 'u' 。
 */

/**
 * 法一：滑动窗口
 * 时间复杂度：O(n) 空间复杂度：O(1)
 * 思路：使用滑动窗口，遍历字符串，统计子字符串中包含的字符种数不超过 k 的 最长子字符串 的长度
 */
var maxVowels = function(s, k) {
    let maxV = 0, curV = 0, vowelLetter = 'aeiou'
    for(let right = 0; right < s.length; right++) {
        if(vowelLetter.includes(s[right])) {
            curV++
        }
        // k = right - left + 1
        const left = right - k + 1
        // 窗口未形成
        if(left < 0) continue; 

        // 当前窗口
        maxV = Math.max(maxV, curV)
        // 答案已等于理论最大值无需循环
        if(maxV === k) break

        // 窗口左指针右移，第一个元素排出
        if(vowelLetter.includes(s[left])) {
            curV--
        }
    }
    return maxV
}

var maxVowels = function(s, k) {
    let maxV = 0, curV = 0, vowelLetter = 'aeiou'
    let left = -k, right = -1
    while(right < s.length) {
        if(vowelLetter.includes(s[right + 1])) {
            curV++
        }
        if(left >= 0 && vowelLetter.includes(s[left])) {
            curV--
        }
        left++
        right++
        maxV = Math.max(maxV, curV)
        if(maxV === k) break
    }
    return maxV
};

console.log(maxVowels("havefunonleetcode", 5)); // 3