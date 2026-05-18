/**
 * @description 682. 棒球比赛
 * @link https://leetcode.cn/problems/baseball-game/description/
 * 你现在是一场采用特殊赛制棒球比赛的记录员。这场比赛由若干回合组成，过去几回合的得分可能会影响以后几回合的得分。
 * 
 * 比赛开始时，记录是空白的。你会得到一个记录操作的字符串列表 ops，其中 ops[i] 是你需要记录的第 i 项操作，ops 遵循下述规则：
 * 1. 整数 x - 表示本回合新获得分数 x
 * 2. "+" - 表示本回合新获得的得分是前两次得分的总和。题目数据保证记录此操作时前面总是存在两个有效的分数。
 * 3. "D" - 表示本回合新获得的得分是前一次得分的两倍。题目数据保证记录此操作时前面总是存在一个有效的分数。
 * 4. "C" - 表示前一次得分无效，将其从记录中移除。题目数据保证记录此操作时前面总是存在一个有效的分数。
 * 请你返回记录中所有得分的总和。
 *
 * 示例 1：
 * 输入：ops = ["5","2","C","D","+"]
 * 输出：30
 * 解释：
 * "5" - 记录加 5 ，记录现在是 [5]
 * "2" - 记录加 2 ，记录现在是 [5, 2]
 * "C" - 使前一次得分的记录无效并将其移除，记录现在是 [5].
 * "D" - 记录加 2 * 5 = 10 ，记录现在是 [5, 10].
 * "+" - 记录加 5 + 10 = 15 ，记录现在是 [5, 10, 15].
 * 所有得分的总和 5 + 10 + 15 = 30
 */
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    const ans = []
    for (let i = 0; i < operations.length; i++) {
        const len = ans.length
        switch (operations[i]) {
            case '+':
                ans.push(Number(ans[len - 2]) + Number(ans[len - 1]))
                break
            case 'D':
                ans.push(Number(ans[len - 1]) * 2)
                break
            case 'C':
                ans.length > 0 && ans.pop()
                break
            default:
                ans.push(Number(operations[i]))
        }
    }
    return ans.reduce((sum, n) => sum + n, 0)
};

// TEST
console.log(calPoints(["5", "2", "C", "D", "+"])) // 30