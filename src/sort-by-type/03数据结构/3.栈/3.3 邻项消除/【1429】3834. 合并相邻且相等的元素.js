/**
 * @description 3834. 合并相邻且相等的元素
 * @link https://leetcode.cn/problems/merge-adjacent-equal-elements/description/
 * 给你一个整数数组 nums。
 * 你需要 重复 执行以下合并操作，直到无法再进行任何更改：
 *      如果数组中存在 两个相邻且相等的元素，选择当前数组中 最左侧 的这对相邻元素，并用它们的 和 替换它们。
 * 每次合并操作后，数组的大小 减少 1。对更新后的数组重复此过程，直到无法再进行任何操作。
 * 返回完成所有可能的合并操作后的最终数组。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var mergeAdjacent = function (nums) {
    const res = []
    nums.forEach(num => {
        res.push(num)
        while (res.length > 1 && res[res.length - 1] === res[res.length - 2]) {
            res.pop()
            res[res.length - 1] = res[res.length - 1] * 2
        }
    })
    return res
};

// 测试
console.log(mergeAdjacent([3, 1, 1, 2]))