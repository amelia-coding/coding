/*
234. 回文链表
请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
*/

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
var isPalindrome = function (head) {
  if (!head || !head.next) return true;
  let slow = head,
    fast = head;
  let values = [];
  while (fast && fast.next) {
    values.push(slow.val);
    fast = fast.next.next;
    slow = slow.next;
  }
  console.log(slow, fast);
  if (fast) {
    //处理奇偶链表,奇数时，slow为中间的结点，fast为null,偶数时，slow为中间后面的节点，fast为最后一个节点
    slow = slow.next;
  }
  while (slow) {
    let val = values.pop();
    if (slow.val !== val) {
      return false;
    }
    slow = slow.next;
  }
  return true;
};
