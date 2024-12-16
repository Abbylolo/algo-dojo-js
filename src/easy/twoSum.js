/**
 * @description 1. 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
 * 你可以按任意顺序返回答案。
 *
 * 示例 1：
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]。
 */

/**法一：暴力解法
 * 时间复杂度：O(n^2) 空间复杂度：O(1)
 */
let twoSum = function (nums, target) {
  for (const [index, num] of nums.entries()) {
    const index2 = nums.findIndex(
      (num2, index2) => num2 === target - num && index2 !== index
    );
    if (index2 !== -1) {
      return [index, index2];
    }
  }
};

/**
 * 法二：哈希表
 * 时间复杂度：O(n) 空间复杂度：O(n)
 */
twoSum = function (nums, target) {
  const map = new Map();
  for (const [index, num] of nums.entries()) {
    if (map.has(target - num)) {
      return [index, map.get(target - num)];
    }
    map.set(num, index);
  }
};

// 测试
console.log(twoSum([2, 7, 11, 15], 9));
