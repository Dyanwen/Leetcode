/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let fast = slow = head;
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true
        }
    }
    return false
};

// var hasCycle = function (head) {
//     var arr = new Set(), cur = head;

//     while (cur && cur.next) {
//         if (arr.has(cur)) {
//             return true;
//         }
//         arr.add(cur)
//         cur = cur.next
//     }
//     return false;
// }
// @lc code=end

