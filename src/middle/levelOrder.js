/**
 * reviewRecord：[✅]2025-01-26 []2025-01-28 []2025-02-01 []2025-02-09
 * 
 * 102. 二叉树的层序遍历
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 * 
 * 示例 1：
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[[3],[9,20],[15,7]]
 */

/**
 * 法一：广度优先搜索BFS
 * 时间复杂度：O(n) 空间复杂度：O(n)
 * 思路：使用队列进行广度优先搜索，将每一层的节点值存储到结果数组中。即BFS+分层遍历，使用队列
 */
var levelOrder = function (root) {
    const res = []
    if (!root) return res
    const queue = [root]
    // 遍历节点，直到队列为空
    while (queue.length) {
        const curLevelSize = queue.length /// 当前层级的节点数
        // 遍历当前层的所有节点：根节点出队列加入结果集，该根节点下的子节点入队列
        res.push([]) /// 当前层级结果集
        for (let i = 0; i < curLevelSize; i++) {
            const curNode = queue.shift();
            res[res.length - 1].push(curNode.val)
            if (curNode.left) {
                queue.push(curNode.left)
            }
            if (curNode.right) {
                queue.push(curNode.right)
            }
        }
    }
    return res
};

// 测试
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 测试用例1
const root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode(15);
root1.right.right = new TreeNode(7);
console.log('输入:', root1);
console.log('输出:', levelOrder(root1));

// 测试用例2
const root2 = new TreeNode(1);
console.log('输入:', root2);
console.log('输出:', levelOrder(root2));

// 测试用例3
const root3 = null;
console.log('输入:', root3);
console.log('输出:', levelOrder(root3));

// 测试用例4
const root4 = new TreeNode(1);
root4.left = new TreeNode(2);
root4.right = new TreeNode(3);
root4.left.left = new TreeNode(4);
root4.right.right = new TreeNode(5);
console.log('输入:', root4);
console.log('输出:', levelOrder(root4));
