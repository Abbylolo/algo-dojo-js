/**
 * @description 46. 全排列🌟
 * @param {number[]} nums
 * @return {number[][]}
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 *
 * 示例 1：
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

/**
 * 递归回溯
 * 思路：递归的思想：给你部分记录，全排列就是所有可能出现在第一个位置的记录与剩下的元素的全排列，剩下的元素的全排列又是剩下的可能出现在第一个位置的元素与剩下的元素的全排列，依次重复下去。
 */
var permute = function (nums) {
    const result = [],
        used = new Array(nums.length).fill(false)
    
    const arrange = (path) => {
        if (path.length === nums.length) {
            // 本轮排队完成退出排队
            result.push([...path])
            return
        }

        // 给当前位置安排数字
        for (let i = 0; i < nums.length; i++) {
            // 遍历查找还没排队过的元素
            if (used[i]) {
                continue;
            }
            // 将该元素固定到这个位置并标记已使用
            path.push(nums[i])
            used[i] = true

            // 接着剩下元素的全排列
            arrange(path)

            // 一种可能排列完，开始回溯
            path.pop()
            used[i] = false
        }
    }
    arrange([]);
    return result;
};


// 测试
const nums = [1, 2, 3]
console.log('输入:', nums)
console.log('输出:', permute(nums))

const nums2 = [0, 1]
console.log('输入:', nums2) 
console.log('输出:', permute(nums2))

const nums3 = [1]
console.log('输入:', nums3)
console.log('输出:', permute(nums3))
