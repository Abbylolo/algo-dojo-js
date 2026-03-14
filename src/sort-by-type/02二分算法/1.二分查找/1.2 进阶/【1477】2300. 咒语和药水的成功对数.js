/**
 * @description 2300. 咒语和药水的成功对数
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 * @link https://leetcode.cn/problems/successful-pairs-of-spells-and-potions/description/
 * 
 * 给你两个正整数数组 spells 和 potions ，长度分别为 n 和 m ，其中 spells[i] 表示第 i 个咒语的能量强度，potions[j] 表示第 j 瓶药水的能量强度。
 * 同时给你一个整数 success 。一个咒语和药水的能量强度 相乘 如果 大于等于 success ，那么它们视为一对 成功 的组合。
 * 请你返回一个长度为 n 的整数数组 pairs，其中 pairs[i] 是能跟第 i 个咒语成功组合的 药水 数目。
 * 
 * 示例 1：
 * 输入：spells = [5,1,3], potions = [1,2,3,4,5], success = 7
 * 输出：[4,0,3]
 * 解释：
 * - 第 0 个咒语：5 * [1,2,3,4,5] = [5,10,15,20,25] 。总共 4 个成功组合。
 * - 第 1 个咒语：1 * [1,2,3,4,5] = [1,2,3,4,5] 。总共 0 个成功组合。
 * - 第 2 个咒语：3 * [1,2,3,4,5] = [3,6,9,12,15] 。总共 3 个成功组合。
 * 所以返回 [4,0,3] 
 */
/**
 * 法一：排序 + 二分查找
 * 时间复杂度：O(nlogn + mlogn)
 * 空间复杂度：O(1)
 */
var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b)
    // 遍历spells，找到potions中第一个乘积 >= success的索引值计算个数
    spells.forEach((item, index) => {
        const i = lowerBound(potions, success, item)
        if (i === potions.length) {
            spells[index] = 0
        } else {
            spells[index] = potions.length - i
        }
    })
    return spells
};
// 二分查找：找到nums中第一个和mul乘积 >= target的索引值
function lowerBound(nums, target, mul) {
    let left = -1, right = nums.length
    while (left + 1 < right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] * mul < target) {
            left = mid
        } else {
            right = mid
        }
    }
    return right
}

var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b)
    // 遍历spells，找到potions中第一个 >= success/x的索引值计算个数
    spells.forEach((item, index) => {
        const target = success / item
        spells[index] = potions.length - _.sortedIndex(potions, target)
    })
    return spells
};


/**
 * 法二：计数 + 值域后缀和
 * 时间复杂度：O(n + m + max)。其中 n 为 spells 的长度，m 为 potions 的长度，max=max(potions)。
 * 空间复杂度：O(max)
 */
var successfulPairs = function (spells, potions, success) {
    // 计数：cnt[j] => 记录值=j的个数
    const max = Math.max(...potions)
    const cnt = Array(max + 1).fill(0)
    potions.forEach(item => cnt[item]++)
    // 后缀和：cnt[j] => 记录值>=j的个数
    for (let i = cnt.length - 2; i > 0; i--) {
        cnt[i] += cnt[i + 1]
    }
    // 遍历spells, 求值>= ceil(success/x)的个数
    spells.forEach((x, index) => {
        const target = Math.ceil(success / x)
        spells[index] = target > max ? 0 : cnt[target]
    })
    return spells
};

// TEST
console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7)); // [4,0,3]