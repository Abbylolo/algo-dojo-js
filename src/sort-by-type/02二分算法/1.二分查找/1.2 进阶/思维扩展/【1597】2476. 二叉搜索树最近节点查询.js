/**
 * @description 2476. 二叉搜索树最近节点查询
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[][]}
 * @link https://leetcode.cn/problems/closest-nodes-queries-in-a-binary-search-tree/description/
 * 给你一个 二叉搜索树 的根节点 root ，和一个由正整数组成、长度为 n 的数组 queries 。
 * 请你找出一个长度为 n 的 二维 答案数组 answer ，其中 answer[i] = [mini, maxi] ：
 * mini 是树中小于等于 queries[i] 的 最大值 。如果不存在这样的值，则使用 -1 代替。
 * maxi 是树中大于等于 queries[i] 的 最小值 。如果不存在这样的值，则使用 -1 代替。
 * 返回数组 answer 。
 */

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * 法一：中序遍历+二分查找
 * 思路：1、二叉搜索树+中序遍历 =》递增数组 2、二分查找
 * 时间复杂度：O(n+qlogn)，其中 n 为二叉搜索树的节点个数，q 为 queries 的长度。
 * 空间复杂度：O(n)。返回值的空间不计入。
 */
var closestNodes = function (root, queries) {
    // 1、二叉搜索树+中序遍历 =》递增数组
    const nums = dfs(root)
    // 2、二分查找
    const answer = []
    for (const target of queries) {
        let min = -1, max = -1
        const j = lowerBound(nums, target)
        // 如果j为数组长度，表示没找到；否则就有
        if (j !== nums.length) {
            max = nums[j]
        }
        if (nums[j] === target) { // 第一个大于等于的数=target的话，第一个小于等于target的也是该值
            min = nums[j]
        } else if (j !== 0) { // 否则就是前一个索引值，但前提是j不为0，不能是第一个，因为没有j-1
            min = nums[j - 1]
        }
        answer.push([min, max])
    }
    return answer
};
// 二叉树的中序遍历
function dfs(root) {
    const res = []
    const inOrder = (root) => {
        if (!root) return
        inOrder(root.left)
        res.push(root.val)
        inOrder(root.right)
    }
    inOrder(root)
    return res
}
// 找非递减数组nums中，第一个>=target的下标
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

// TEST
// 构造测试用例
function buildTree(arr, i = 0) {
    if (i >= arr.length || arr[i] === null) return null;
    const root = new TreeNode(arr[i]);
    root.left = buildTree(arr, 2 * i + 1);
    root.right = buildTree(arr, 2 * i + 2);
    return root;
}

// 测试用例 1：示例 1
const root1 = buildTree([6, 2, 13, 1, 4, 9, 15, null, null, null, null, null, null, 12, 17]);
const queries1 = [3, 6, 16, 11, 18];
console.log(closestNodes(root1, queries1));
// 期望输出：[[2,4],[6,6],[15,17],[9,12],[-1,17]]

// 测试用例 2：空树
const root2 = buildTree([]);
const queries2 = [5];
console.log(closestNodes(root2, queries2));
// 期望输出：[[-1,-1]]

// 测试用例 3：单节点
const root3 = buildTree([5]);
const queries3 = [5, 3, 7];
console.log(closestNodes(root3, queries3));
// 期望输出：[[5,5],[-1,5],[5,-1]]

// 测试用例 4：完全二叉搜索树
const root4 = buildTree([4, 2, 6, 1, 3, 5, 7]);
const queries4 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(closestNodes(root4, queries4));
// 期望输出：[[-1,1],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[7,-1]]
