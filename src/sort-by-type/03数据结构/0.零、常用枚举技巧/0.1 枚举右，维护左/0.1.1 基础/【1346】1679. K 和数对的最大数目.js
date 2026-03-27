/**
 * @description 1679. K 和数对的最大数目
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode.cn/discuss/post/3583665/fen-xiang-gun-ti-dan-chang-yong-shu-ju-j-bvmv/
 * 给你一个整数数组 nums 和一个整数 k 。
 * 每一步操作中，你需要从数组中选出和为 k 的两个整数，并将它们移出数组。
 * 返回你可以对数组执行的最大操作数。
 * 
 * 输入：nums = [1,2,3,4], k = 5
 * 输出：2
 *  解释：开始时 nums = [1,2,3,4]：
 *  - 移出 1 和 4 ，之后 nums = [2,3]
 *  - 移出 2 和 3 ，之后 nums = []
 *  不再有和为 5 的数对，因此最多执行 2 次操作。
 */
var maxOperations = function (nums, k) {
    // 维护左边队列元素及出现次数
    const iMap = new Map()
    let cnt = 0
    for (const num of nums) {
        const remain = k - num
        if (iMap.get(remain)) {
            cnt++
            iMap.set(remain, iMap.get(remain) - 1)
        } else if (remain > 0) {
            iMap.set(num, (iMap.get(num) ?? 0) + 1)
        }
    }
    return cnt
};

// TEST
console.log(maxOperations([1, 2, 3, 4, 3, 2], 5)) // 2
