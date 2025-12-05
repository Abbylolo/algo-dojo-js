/**
 * @description 2379. 得到 K 个黑块的最少涂色次数
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 * @link https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
 * 
 * 给你一个长度为 n 的字符串 blocks ，blocks[i] 为 'W' 或 'B' ，表示第 i 块的颜色。字符 'W' 和 'B' 分别表示白色和黑色。
 * 给你一个整数 k ，表示想要 连续 黑色块的数目。
 * 每一次操作中，你可以选择一个白色块将它 涂成 黑色块。
 * 请你返回至少出现 一次 连续 k 个黑色块的 最少 操作次数。
 * 
 * 示例 1：
 * 输入：blocks = "WBBWWBBWBW", k = 7
 * 输出：3
 * 解释：一种得到 7 个连续黑色块的方法是把第 0 ，3 和 4 个块涂成黑色。得到 blocks = "BBBBBBBWBW" 。可以证明无法用少于 3 次操作得到 7 个连续的黑块。所以我们返回 3 。
 */

var minimumRecolors = function (blocks, k) {
    // 题目求解转换为 =》 固定长度k的子串中包含的w元素个数最小值
    let min = k, nums = 0
    for(let right = 0; right < blocks.length; right++) {
        // 1.进入窗口
        if(blocks[right].includes('W')) nums++
        // 窗口未形成
        let left = right - k + 1
        if(left < 0) continue
        // 2.窗口形成更新值
        min = Math.min(min, nums)
        // 3.出窗口
        if(blocks[left].includes('W')) nums--
    }
    return min
}

console.log(minimumRecolors("WBBWWBBWBW", 7));