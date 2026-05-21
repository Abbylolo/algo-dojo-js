/**
 * @description 946. 验证栈序列
 * @link https://leetcode.cn/problems/validate-stack-sequences/description/
 * 给定 pushed 和 popped 两个序列，每个序列中的 值都不重复，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true；否则，返回 false 。
 */
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    const stack = []
    for (let i = 0, j = 0; i < pushed.length; i++) {
        stack.push(pushed[i]) // 入栈
        while (stack.length && stack[stack.length - 1] === popped[j]) { // 出栈
            j++
            stack.pop()
        }
    }
    return stack.length === 0
};

// TEST
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])) // true