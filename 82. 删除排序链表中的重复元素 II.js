/*
82. 删除排序链表中的重复元素 II
给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

示例 1:

输入: 1->2->3->3->4->4->5
输出: 1->2->5
示例 2:

输入: 1->1->1->2->3
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 快慢指针
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let priot = new TreeNode(-1);
  priot.next = head;
  let slow = priot,
    fast = head;
  while (fast && fast.next) {
    if (fast.val === fast.next.val) {
      let sameVal = fast.val;
      while (fast && fast.val === sameVal) {
        fast = fast.next;
      }
      slow.next = fast;
    } else {
      slow = slow.next;
      fast = fast.next;
    }
  }
  return priot.next;
};
