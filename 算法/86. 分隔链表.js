/*
86. 分隔链表
给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。

你应当保留两个分区中每个节点的初始相对位置。

示例:

输入: head = 1->4->3->2->5->2, x = 3
输出: 1->2->2->4->3->5
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 时间复杂度o(n)
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function (head, x) {
  const before_head = new ListNode(0);
  let before = before_head;
  const after_head = new ListNode(0);
  let after = after_head;
  while (head !== null) {
    if (head.val < x) {
      before.next = head;
      before = before.next; //key step: 确保每次挂载在before的最后一个元素上
    } else {
      after.next = head;
      after = after.next;
    }
    head = head.next; // key step: keep changing head till it fails the condition.
  }
  after.next = null; //key step: make sure there's no link loop
  before.next = after_head.next; // before,after_head to remark the head of before and after.
  return before_head.next;
};
