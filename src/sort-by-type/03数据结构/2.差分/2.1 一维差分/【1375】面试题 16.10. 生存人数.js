/**
 * @description 16.10. 生存人数
 * @link https://leetcode.cn/problems/living-people-lcci/description/
 * 给定 N 个人的出生年份和死亡年份，第 i 个人的出生年份为 birth[i]，死亡年份为 death[i]，实现一个方法以计算生存人数最多的年份。
 * 你可以假设所有人都出生于 1900 年至 2000 年（含 1900 和 2000 ）之间。如果一个人在某一年的任意时期处于生存状态，那么他应该被纳入那一年的统计中。例如，生于 1908 年、死于 1909 年的人应当被列入 1908 年和 1909 年的计数。
 * 如果有多个年份生存人数相同且均为最大值，输出其中最小的年份。
 * 
 * 示例：
 * 输入：birth = [1900, 1901, 1950], death = [1948, 1951, 2000]
 * 输出： 1901  
 */
/**
 * @param {number[]} birth
 * @param {number[]} death
 * @return {number}
 */
var maxAliveYear = function (birth, death) {
    // 1、计算差分
    const d = new Map()
    for (let i = 0; i < birth.length; i++) {
        const from = birth[i], to = death[i]
        d.set(from, (d.get(from) ?? 0) + 1)
        d.set(to + 1, (d.get(to + 1) ?? 0) - 1)
    }
    // 2、还原数组
    let s = 0, max = 0, year = 0
    for (const v of [...d.keys()].sort((a, b) => a - b)) {
        s += d.get(v)
        if (s > max) {
            max = s
            year = v
        }
    }
    return year
};
// TEST
console.log(maxAliveYear([1900, 1901, 1950], [1948, 1951, 2000])) // 1901
