/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let m = 0,
    n = 0;
  let l1 = headA,
    l2 = headB;
  while (l1) {
    m++;
    l1 = l1.next;
  }
  while (l2) {
    n++;
    l2 = l2.next;
  }
  let k = Math.abs(m - n);
  let p1 = m > n ? headA : headB;
  let p2 = m > n ? headB : headA;
  while (k) {
    p1 = p1.next;
    k--;
  }
  while (p1 && p2 && p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};
