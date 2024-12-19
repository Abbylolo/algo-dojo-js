/**
 * @description 206. 反转链表
 * @param {ListNode} head
 * @return {ListNode}
 *
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 *
 * 示例 1：
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 法一：迭代
 * 时间复杂度：O(n) 空间复杂度：O(1)
 * 思路：遍历链表，将当前节点的next指针改为指向前一个节点，下一个节点的next指向自己，下一个节点指向自己的next
 */
var reverseList = function (head) {
    let prevNode = null, currNode = head
    while (currNode !== null) {
        let currNodeNext = currNode.next
        currNode.next = prevNode
        prevNode = currNode
        currNode = currNodeNext
    }
    return prevNode
};


/**
 * 法二：递归
 * 时间复杂度：O(n) 空间复杂度：O(n)
 * 思路：递归遍历链表，将当前节点的next指针改为指向前一个节点，下一个节点的next指向自己，下一个节点指向自己的next
 */
reverseList = function (head) { 
    
}


// 测试
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// 创建测试用例1: [1,2,3,4,5]
const node5 = new ListNode(5)
const node4 = new ListNode(4, node5)
const node3 = new ListNode(3, node4) 
const node2 = new ListNode(2, node3)
const head1 = new ListNode(1, node2)

console.log('输入:', head1)
console.log('输出:', reverseList(head1))

// 创建测试用例2: [1,2]
const node2_2 = new ListNode(2)
const head2 = new ListNode(1, node2_2)

console.log('输入:', head2)
console.log('输出:', reverseList(head2))

// 创建测试用例3: [1]
const head3 = new ListNode(1)

console.log('输入:', head3)
console.log('输出:', reverseList(head3))
