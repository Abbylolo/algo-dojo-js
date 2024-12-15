/**
 * @description 88. 合并两个有序数组
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 *
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，
 * 其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
 *
 * 示例 1：
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出：[1,2,2,3,5,6]
 * 解释：需要合并 [1,2,3] 和 [2,5,6] 。
 * 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 */

/**
 * 法一： 直接合并后排序
 * 时间复杂度：O(nlogn) 空间复杂度：O(1)
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
};

/**
 * 法二： 双指针
 * 时间复杂度：O(m + n) 空间复杂度：O(1)
 * 思路：从后往前遍历，双指针分别指向 nums1 和 nums2 的末尾，比较大小，将较大的元素放入 nums1 的末尾（利用两数组非递减顺序）
 */
var merge2 = function (nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1,
    p = m + n - 1;
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] >= nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
};

// TEST
let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
merge2(nums1, m, nums2, n);
console.log(nums1);

(nums1 = [1]), (m = 1), (nums2 = []), (n = 0);
merge2(nums1, m, nums2, n);
console.log(nums1);

(nums1 = [0]), (m = 0), (nums2 = [1]), (n = 1);
merge2(nums1, m, nums2, n);
console.log(nums1);
