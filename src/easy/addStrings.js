/**
 * @description 415. 字符串相加
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 *
 * 示例 1：
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 */

/**
 * 法一： 模拟加法
 * 时间复杂度：O(max(m,n)) 空间复杂度：O(1)
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    carray = 0,
    res = "";
  while (i >= 0 || j >= 0 || carray > 0) {
    let sum =
      (i >= 0 ? parseInt(num1[i]) : 0) +
      (j >= 0 ? parseInt(num2[j]) : 0) +
      carray;
    res = (sum % 10) + res; // 字符串相加
    carray = Math.floor(sum / 10);
    i--;
    j--;
  }
  return res;
};

// 测试
console.log(addStrings("6611", "123")); // "134"
console.log(addStrings("889333852702227987", "85731737104263")); // "9419584439332250"
console.log(addStrings("1", "9")); // "10"
