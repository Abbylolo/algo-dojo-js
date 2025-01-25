/**
 * @description 20. 有效的括号
 * @param {string} s
 * @return {boolean}
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 *
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 *
 * 示例 1：
 * 输入：s = "()"
 * 输出：true
 */

/**
 * 法一：栈
 * 时间复杂度：O(n) 空间复杂度：O(n)
 */
var isValid = function (s) {
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stack = [s[0]];
  for (let index = 1; index < s.length; index++) {
    if (stack.length && map[s[index]] === stack[stack.length - 1]) {
      stack.pop();
      continue;
    }
    stack[stack.length] = s[index];
  }

  return !stack.length;
};

/**
 * 法二：栈
 * 时间复杂度：O(n) 空间复杂度：O(n)
 */
isValid = function (s) {
  const map = new Map([
      [")", "("],
      ["]", "["],
      ["}", "{"],
    ]),
    stack = [];
  for (let char of s) {
    if (!map.has(char)) {
      // 左括号
      stack.push(char);
    } else if (stack.pop() !== map.get(char)) {
      return false;
    }
  }
  return !stack.length;
};

/**
 * 法三: 栈
 * 时间复杂度：O(n) 空间复杂度：O(n)
 */
isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (const char of s) {
    if (pairs[char]) {
      stack.push(char);
    } else if (pairs[stack.pop()] !== char) {
      return false;
    }
  }
  return !stack.length;
};
// 测试
console.log(isValid("()[]")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
