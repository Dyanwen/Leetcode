/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
let reverseList = function (headtemp) {

    let head = headtemp;
    let pre = null;
    let post = null;

    while (head !== null) {
        post = head.next;
        head.next = pre;
        pre = head;
        head = post;
    }
}
let getEndNode = function (head, k) {
    for (let i = 0; i < k - 1; i++) {
        if (head == null) {
            return false
        }
        head = head.next
    }
    return head;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let first = null;
    let pre = null;
    while (head != null) {
        let start = head;
        let end = getEndNode(head, k)
        // end 为false 或则 null,说明剩下的不足k
        if (end === false || end === null) {
            return first;
        } else {
            head = end.next;
        }
        end.next = null;
        reverseList(start)
        start.next = head;

        if (pre != null) {
            pre.next = end
        } else {
            first = end;
        }
        pre = start
    }
    return first;
};
// @lc code=end

