/**
 * @description 1010. 总持续时间可被 60 整除的歌曲
 * @link https://leetcode.cn/problems/pairs-of-songs-with-total-durations-divisible-by-60/description/
 * 在歌曲列表中，第 i 首歌曲的持续时间为 time[i] 秒。
 * 返回其总持续时间（以秒为单位）可被 60 整除的歌曲对的数量。形式上，我们希望下标数字 i 和 j 满足  i < j 且有 (time[i] + time[j]) % 60 == 0。
 * 
 * 示例 1：
 * 输入：time = [30,20,150,100,40]
 * 输出：3
 * 解释：这三对的总持续时间可被 60 整除：
 * (time[0] = 30, time[2] = 150): 总持续时间 180
 * (time[1] = 20, time[3] = 100): 总持续时间 120
 * (time[1] = 20, time[4] = 40): 总持续时间 60
 */
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
    // 维护左队列每个数的除60的余数，找到匹配值
    const rMap = new Map()
    let count = 0
    for (let j = 0; j < time.length; j++) {
        const remain = time[j] % 60, // 余数
            x = (60 - remain) % 60 // 匹配值
        count += rMap.get(x) ?? 0
        rMap.set(remain, (rMap.get(remain) ?? 0) + 1)
    }
    return count
};

// 测试
console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40])) // 3