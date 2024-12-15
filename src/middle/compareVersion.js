/**
 * @description 165. 比较版本号
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 *
 * 给你两个版本号字符串 version1 和 version2，比较它们。
 * 版本号由点号分隔的修订号组成，修订号需转为整数并忽略前导零。
 * 从左到右比较修订号，缺失的修订号视为0。
 *
 * 返回：
 * - version1 < version2 返回 -1
 * - version1 > version2 返回 1
 * - 相等返回 0
 *
 * 示例：
 * 输入：version1 = "1.2", version2 = "1.10"
 * 输出：-1
 * 解释：version1 第二个修订号"2"小于 version2 的"10"
 */

/**
 * 法一：暴力解法
 * 时间复杂度：O(max(n,m)) 空间复杂度：O(n+m)
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split("."),
    v2 = version2.split(".");
  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    if (Number(v1[i]) > Number(v2[i])) {
      return 1;
    } else if (Number(v1[i]) < Number(v2[i])) {
      return -1;
    }
  }
  if (v1.length > v2.length) {
    v1.splice(0, v2.length);
    return v1.filter((a) => a != 0).length ? 1 : 0;
  } else if (v1.length < v2.length) {
    v2.splice(0, v1.length);
    return v2.filter((a) => a != 0).length ? -1 : 0;
  } else {
    return 0;
  }
};

/**
 * 法二：双指针
 * 时间复杂度：O(max(n,m)) 空间复杂度：O(1)
 */
var compareVersion = function (version1, version2) {
  let i = 0,
    j = 0;
  // 两个版本号双指针
  while (i < version1.length || j < version2.length) {
    let nums1 = 0,
      nums2 = 0;
    // 计算每个修订号的数值
    while (version1[i] !== "." && i < version1.length) {
      nums1 = nums1 * 10 + (version1[i] - "0");
      i++;
    }
    // 跳过点号
    i++;
    while (version2[j] !== "." && j < version2.length) {
      nums2 = nums2 * 10 + (version2[j] - "0");
      j++;
    }
    // 跳过点号
    j++;
    if (nums1 > nums2) {
      return 1;
    } else if (nums1 < nums2) {
      return -1;
    }
  }
  return 0;
};

// 测试
console.log(compareVersion("1.2", "1.10")); // -1
console.log(compareVersion("1.10", "1.2")); // 1
console.log(compareVersion("1.01", "1.001")); // 0
console.log(compareVersion("1.0", "1")); // 0
