/**
 * @description 3. 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。
 *
 * 示例 1:
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

/**
 * 法一： 滑动窗口
 */
var lengthOfLongestSubstring = function (s) {
  // 滑动窗口-无重复子串
  let curContiSubstr = "";
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (curContiSubstr.includes(s[i])) {
      curContiSubstr =
        curContiSubstr.slice(curContiSubstr.indexOf(s[i]) + 1) + s[i];
    } else {
      curContiSubstr += s[i];
      maxLength = Math.max(maxLength, curContiSubstr.length);
    }
  }
  return maxLength;
};

/**
 * 法二： 滑动窗口+Map
 * 优化： 使用 Map 存储字符最后出现的位置，避免了字符串的截取操作，运行效率更高
 */
var lengthOfLongestSubstring2 = function (s) {
  let left = 0;
  let maxLength = 0;
  const map = new Map();
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      // 易错：如果有重复字符，需要判断是否该字符是否在滑动窗口范围内，在的话更新left，不在的话不更新
      left = map.get(s[right]) < left ? left : map.get(s[right]) + 1;
    }
    map.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

// TEST
console.log(lengthOfLongestSubstring2("abcabcbb"));
