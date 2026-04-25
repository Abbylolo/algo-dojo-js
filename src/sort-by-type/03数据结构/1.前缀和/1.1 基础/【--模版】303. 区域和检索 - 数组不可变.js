/**
 * @description 303. 区域和检索 - 数组不可变
 * @link https://leetcode.cn/problems/range-sum-query-immutable/description/
 * 给你一个整数数组 nums，求出数组 nums 中索引为 left 和 right （包含 left 和 right）之间的元素的 和 ，其中 left <= right 。
 * 实现 NumArray 类：
 * NumArray(int[] nums) 使用数组 nums 初始化对象
 * int sum(int i, int j) 返回数组 nums 中索引为 i 和 j （包含 i 和 j）之间的元素的 和 ，其中 left <= right
 */
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    // 计算前缀和数组（每个数前i个数的和）=> [l,r]的区间和=s[r+1]-s[l]
    this.s = Array(nums.length + 1)
    this.s[0] = 0
    for (let i = 1; i <= nums.length; i++) {
        this.s[i] = nums[i - 1] + this.s[i - 1]
    }
}

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.s[right + 1] - this.s[left]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// 测试
const numArray = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(numArray.sumRange(0, 2)) // 1
console.log(numArray.sumRange(2, 5)) // -1
console.log(numArray.sumRange(0, 5)) // -3