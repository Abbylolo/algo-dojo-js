/**
 * @description 2748. 美丽下标对的数目
 * @link https://leetcode.cn/problems/number-of-beautiful-pairs/
 * 给你一个下标从 0 开始的整数数组 nums 。如果下标对 i、j 满足 0 ≤ i < j < nums.length ，如果 nums[i] 的 第一个数字 和 nums[j] 的 最后一个数字 互质 ，则认为 nums[i] 和 nums[j] 是一组 美丽下标对 。
 * 返回 nums 中 美丽下标对 的总数目。
 * 对于两个整数 x 和 y ，如果不存在大于 1 的整数可以整除它们，则认为 x 和 y 互质 。换而言之，如果 gcd(x, y) == 1 ，则认为 x 和 y 互质，其中 gcd(x, y) 是 x 和 y 的 最大公因数 。
 * 示例 1：
 * 输入：nums = [2,5,1,4]
 * 输出：5
 * 解释：nums 中共有 5 组美丽下标对：
 * i = 0 和 j = 1 ：nums[0] 的第一个数字是 2 ，nums[1] 的最后一个数字是 5 。2 和 5 互质，因此 gcd(2,5) == 1 。
 * i = 0 和 j = 2 ：nums[0] 的第一个数字是 2 ，nums[2] 的最后一个数字是 1 。2 和 1 互质，因此 gcd(2,1) == 1 。
 * i = 1 和 j = 2 ：nums[1] 的第一个数字是 5 ，nums[2] 的最后一个数字是 1 。5 和 1 互质，因此 gcd(5,1) == 1 。
 * i = 1 和 j = 3 ：nums[1] 的第一个数字是 5 ，nums[3] 的最后一个数字是 4 。5 和 4 互质，因此 gcd(5,4) == 1 。
 * i = 2 和 j = 3 ：nums[2] 的第一个数字是 1 ，nums[3] 的最后一个数字是 4 。1 和 4 互质，因此 gcd(1,4) == 1 。
 * 因此，返回 5 。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 时间复杂度：O(n⋅(k+logU))，其中 n 为 nums 的长度，k=10，U=max(nums)。计算 GCD 的时间视作 O(1)。
 * 空间复杂度：O(k)。
 * 也可以预处理 9 以内所有数对的 GCD 到一个数组中，从而加速 GCD 的计算。
 */
var countBeautifulPairs = function (nums) {
    // 维护左队列的第一个数.枚举右边队列时，需遍历数组已有元素匹配
    const cnt = new Array(10).fill(0)
    let count = 0
    let m = 1
    for (const [i, num] of nums.entries()) {
        const n = num % 10
        i > 0 && cnt.forEach((v, index) => {
            if (v > 0 && gcd(index, n) === 1) {
                count += v
            }
        })
        m = Number((num).toString().charAt(0))
        cnt[m]++
    }
    return count
};

// 辗转相除法（欧几里德算法）求最大公因数：用较大数除以较小数得余数；再用较小数除以上一步的余数；重复直到余数为0，此时的除数就是最大公因数
function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b)
}

// TEST
console.log(countBeautifulPairs([2, 5, 1, 4])) // 5
console.log(countBeautifulPairs([31, 25, 72, 79, 74])) // 7
