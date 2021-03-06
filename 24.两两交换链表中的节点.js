/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let self = new ListNode(0, head)
    let pre = self;

    while (pre.next && pre.next.next) {
        a = pre.next;
        b = a.next;
        pre.next = b;

        a.next = b.next;
        pre = b.next = a;
    }
    return self.next
};



/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function (head) {
//     if (!head || !head.next) {
//         return head;
//     }
//     let tempHead = head.next;
//     head.next = swapPairs(head.next.next);
//     tempHead.next = head;
//     return tempHead;
// };
// @lc code=end

