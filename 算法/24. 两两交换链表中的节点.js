/*
24. 两两交换链表中的节点
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.
*/

/**
 *
 * 交换链表的节点，使用三个指针
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let k = 2;
  let curr = head,
    pre = null;
  while (k--) {
    console.log(k, curr);
    let next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }
  head.next = swapPairs(curr);
  return pre;
};
