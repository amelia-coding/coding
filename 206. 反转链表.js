/*
206. 反转链表
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
*/

/**
 * 迭代
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
var reverseList = function (head) {
  let pre = null,
    curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }
  return pre;
};

var reverseList = function (head) {
  let [prev, curr] = [null, head];
  while (curr) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  return prev;
};

/*递归*/
var reverseList = function (head) {
  return reverse(null, head);
};

function reverse(prev, curr) {
  if (!curr) return prev;
  let tmp = curr.next;
  curr.next = prev;
  return reverse(curr, tmp);
}
