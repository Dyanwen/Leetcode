/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    }

    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }

    // let newHead = new ListNode(0);
    // let tmp = newHead;


    // while(l1 || l2){
    //     if (l1 === null) {
    //         newHead.next = l2;
    //         break;
    //     }
    //     if (l2 === null) {
    //         newHead.next = l1;
    //         break;
    //     }
    //     if (l1.val <= l2.val) {
    //         newHead.next = l1;
    //         newHead = newHead.next;
    //         l1 = l1.next;
    //     }else{
    //         newHead.next = l2;
    //         newHead = newHead.next;
    //         l2 = l2.next;
    //     }
    // }
    // return tmp.next;

};
// @lc code=end

