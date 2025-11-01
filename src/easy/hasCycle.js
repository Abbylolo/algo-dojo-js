/**
 * @description 141. 环形链表
 * @param {ListNode} head
 * @return {boolean}
 *
 * 给你一个链表的头节点 head ，判断链表中是否有环。
 *
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
 * 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 * 注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
 *
 * 如果链表中存在环 ，则返回 true 。 否则，返回 false 。
 */

/**
 * 法一：快慢指针
 * 时间复杂度：O(n) 空间复杂度：O(1)
 * 思路：类似龟兔赛跑，如果能相遇说明跑道一定有环
 */
var hasCycle = function (head) {
    let slow = head, fast = head // 兔子和乌龟同时出发
    while (fast && fast.next) {
        slow = slow.next // 乌龟走一步
        fast = fast.next.next // 兔子走两步
        if(fast === slow) {
            return true
        }
    }
    return false
};

console.log(hasCycle([3, 2, 0, -4])); // true
console.log(hasCycle([1, 2])); // false
console.log(hasCycle([1])); // false
console.log(hasCycle([])); // false
console.log(hasCycle([1, 2, 3, 4, 5])); // false
console.log(hasCycle([1, 2, 3, 4, 5, 6])); // false
console.log(hasCycle([1, 2, 3, 4, 5, 6, 7])); // false
console.log(hasCycle([1, 2, 3, 4, 5, 6, 7, 8])); // false
console.log(hasCycle([1, 2, 3, 4, 5, 6, 7, 8, 9])); // false