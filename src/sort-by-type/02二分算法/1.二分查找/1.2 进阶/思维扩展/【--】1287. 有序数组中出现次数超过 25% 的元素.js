/**
 * @description: 1281. 有序数组中出现次数超过 25% 的元素
 * @param {number[]} arr
 * @return {number}
 * 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。
 * 请你找到并返回这个整数
 * 
 * 示例 1：
 * 输入：arr = [1,2,2,6,6,6,6,7,10]
 * 输出：6
 */
/**
 * 法一：二分查找-四次二分（漏网之鱼）
 * 思路：漏网之鱼。如果一个数出现次数大于1/4，那么1/4大小的网兜一定能兜住
 *    =>> 只需要排查每个（网兜大小+1）节点上的数x是否满足：个数大于m
 *    =>> 求个数：lb(x+1) - lb(x)
 * 
 */
var findSpecialInteger = function (arr) {
    const m = Math.floor(arr.length / 4) // 网兜大小
    // 计算的index节点：m【第m+1个，对应索引值m】、(m)+m+1、(2m+1)+m+1 => m、2m+1、3m+2
    for (const i of [m, 2 * m + 1]) {
        const x = arr[i]
        const count = lowerBound(arr, x + 1) - lowerBound(arr, x)
        if (count > m) return arr[i]
    }
    // 因为这个数一定存在，所以如果不是m或2m+1的话，一定是3m+2
    return arr[3 * m + 2]
};

function lowerBound(nums, target) {
    let left = -1, right = nums.length
    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] < target) {
            left = mid
        } else {
            right = mid
        }
    }
    return right
}

/**
 * 法二：二分查找-两次二分（优化版）
 * 思路：
 *    =>> 上面的做法是，直接求出恰好等于 x=arr[i] 的元素个数。
 *    =>> 但本题只要求判断元素个数是否大于 m，可以先求出最左边的 x 的下标 j，然后判断 arr[j+m] 是否等于 x。这样又可以少跑两次二分。
 * 时间复杂度：O(logn)
 * 空间复杂度：O(1)
 */
var findSpecialInteger = function (arr) {
    const m = Math.floor(arr.length / 4) 
    for (const i of [m, 2 * m + 1]) {
        const x = arr[i]
        // 优化点
        const start = lowerBound(arr, x)
        if(arr[start + m] === arr[start]) return arr[start]
    }
    return arr[3 * m + 2]
};

// TEST CASE
console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10])) // 6