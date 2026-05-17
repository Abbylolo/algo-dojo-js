/**
 * @description 1441. 用栈操作构建数组 
 * @link https://leetcode.cn/problems/build-an-array-with-stack-operations/description/
 */
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
// 小于就push+pop，等于就push
var buildArray = function (target, n) {
    const mx = target[target.length - 1], ans = []
    for (let num = 1, i = 0; num <= mx; num++) {
        ans.push('Push') // 先入栈
        if (num < target[i]) { // num 不是我们要的数，出栈
            ans.push('Pop')
        } else { // num 是我们要的数，把 i 加一，指向 target 的下一个数
            i++
        }
    }
    return ans
};

// TEST
console.log(buildArray([1, 3], 3)) // ["Push","Push","Pop","Push"]