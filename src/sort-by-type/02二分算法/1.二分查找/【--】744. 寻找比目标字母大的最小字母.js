/**
 * @description 744. 寻找比目标字母大的最小字母
 * @param {*} letters
 * @param {*} target
 * @return {*}
 * @link https://leetcode.cn/problems/find-smallest-letter-greater-than-target/description/
 * 
 * 给你一个字符数组 letters，该数组按 非递减顺序 排序，以及一个字符 target。letters 里至少有两个不同的字符。
 * 返回 letters 中大于 target 的最小的字符。如果不存在这样的字符，则返回 letters 的第一个字符。
 * 
 * 示例 1:
 * 输入: letters = ["c", "f", "j"], target = "a"
 * 输出: "c"
 * 解释: letters 中字典上比 'a' 大的最小字符是 'c'。
 */
var nextGreatestLetter = function (letters, target) {
    // 题目解析：转换为lowerBound(target+1)，即大于等于target+1的第一个字符
    let left = -1, right = letters.length
    while (right - left > 1) {
        let mid = (left + right) >> 1
        if (letters[mid] < target + 1) {
            left = mid
        } else {
            right = mid
        }
    }
    return right === letters.length ? letters[0] : letters[right]
};

// TEST
console.log(nextGreatestLetter(["c", "f", "j"], "a")) // "c"
console.log(nextGreatestLetter(["c", "f", "j"], "c")) // "f"
console.log(nextGreatestLetter(["c", "f", "j"], "d")) // "f"
console.log(nextGreatestLetter(["c", "f", "j"], "g")) // "j"
console.log(nextGreatestLetter(["c", "f", "j"], "j")) // "c"
console.log(nextGreatestLetter(["c", "f", "j"], "k")) // "c"