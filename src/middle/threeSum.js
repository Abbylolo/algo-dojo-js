/**
 * @description 15. 三数之和
 * @param {number[]} nums - 一个整数数组
 * @return {number[][]} - 所有满足条件的唯一三元组列表
 *
 * 问题描述:
 * 给定一个整数数组 nums，返回所有满足以下条件的三元组 [nums[i], nums[j], nums[k]]：
 * - i、j 和 k 是不同的索引。
 * - nums[i] + nums[j] + nums[k] == 0。
 * 
 * 示例 1:
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 
 * 注意: 结果集中不能包含重复的三元组。
 */

/**
 * 双指针法
 * 时间复杂度: O(n^2) 空间复杂度: O(1)
 * 思路: 
 * 1. 首先对数组进行排序（去重的关键）
 * 2. 使用双指针遍历数组，固定一个数，然后使用两个指针分别从数组两端向中间移动，寻找满足条件的两个数
 * 3. 如果找到满足条件的三元组，则将其加入结果集
 * 4. 注意去重，跳过重复的元素
 */
var threeSum = function (nums) {
  const result = []
  nums.sort((a, b) => a - b)
  const n = nums.length
  for (let i = 0; i < n - 2; i++) {
    if(i > 0 && nums[i] === nums[i - 1]) continue
    let left = i + 1, right = n - 1
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        result.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else { 
        right--;
      }
    }
  }
  return result
}


// 测试
const nums1 = [-1, 0, 1, 2, -1, -4];
console.log('输入:', nums1);
console.log('输出:', threeSum(nums1));
const nums2 = [2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10];
console.log('输入:', nums2);
console.log('输出:', threeSum(nums2)); // [[-10,5,5],[-5,0,5],[-4,2,2],[-3,-2,5],[-3,1,2],[-2,0,2]]