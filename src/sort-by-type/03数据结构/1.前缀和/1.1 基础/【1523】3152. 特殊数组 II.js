/**
 * @description 3152. 特殊数组 II 
 * @link https://leetcode.cn/problems/special-array-ii/description/
 * 如果数组的每一对相邻元素都是两个奇偶性不同的数字，则该数组被认为是一个 特殊数组 。
 * 你有一个整数数组 nums 和一个二维整数矩阵 queries，对于 queries[i] = [fromi, toi]，请你帮助你检查 子数组 nums[fromi..toi] 是不是一个 特殊数组 。
 * 返回布尔数组 answer，如果 nums[fromi..toi] 是特殊数组，则 answer[i] 为 true ，否则，answer[i] 为 false 。
 */
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
// 前缀和：记录当前元素和前一个元素的奇偶性是否相同，同则不符合为1，不同符合为0；前缀和记录[0,i]元素奇偶性不同的个数 => s[r+1] - s[l] == 0, true
var isArraySpecial = function (nums, queries) {
    const s = new Array(nums.length)
    s[0] = 0
    for (let i = 1; i < nums.length; i++) {
        s[i] = s[i - 1] + (nums[i] % 2 === nums[i - 1] % 2 ? 1 : 0)
    }
    const ans = []
    for (const [from, to] of queries) {
        ans.push(s[to] === s[from])
    }
    return ans
};