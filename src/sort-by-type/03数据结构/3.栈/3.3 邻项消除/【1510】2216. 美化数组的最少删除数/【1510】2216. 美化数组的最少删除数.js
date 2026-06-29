/**
 * @description 2216. 美化数组的最少删除数
 * @link https://leetcode.cn/problems/minimum-deletions-to-make-array-beautiful/description/
 * 给你一个下标从 0 开始的整数数组 nums ，如果满足下述条件，则认为数组 nums 是一个 美丽数组 ：
 *      nums.length 为偶数
 *      对所有满足 i % 2 == 0 的下标 i ，nums[i] != nums[i + 1] 均成立
 * 注意，空数组同样认为是美丽数组。
 * 你可以从 nums 中删除任意数量的元素。当你删除一个元素时，被删除元素右侧的所有元素将会向左移动一个单位以填补空缺，而左侧的元素将会保持 不变 。
 * 返回使 nums 变为美丽数组所需删除的 最少 元素数目。
 * */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function (nums) {
    let cnt = 0
    const tmp = []
    for (let i = 0; i < nums.length; i++) {
        tmp.push(nums[i])
        if (tmp.length > 1 && tmp.length % 2 === 0 && nums[i] == tmp[tmp.length - 2]) {
            tmp.pop()
            cnt++
        }
    }
    return tmp.length % 2 === 0 ? cnt : cnt + 1
};

// 测试
console.log(minDeletion([1, 1, 2, 3, 5])) // 1