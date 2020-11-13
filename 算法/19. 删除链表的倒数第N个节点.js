/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let preHead = new ListNode(0);
  preHead.next = head;
  let p1 = preHead,
    p2 = preHead;
  while (n) {
    p1 = p1.next;
    n--;
  }
  while (p1 && p1.next) {
    p1 = p1.next;
    p2 = p2.next;
  }
  p2.next = p2.next.next;
  return preHead.next;
};
