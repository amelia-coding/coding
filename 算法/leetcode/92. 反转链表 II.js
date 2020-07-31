/*
92. 反转链表 II
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  const dump = new ListNode(0);
  dump.next = head;

  let first = dump; //分组的前一个结点

  for (let i = 0; i < m - 1; i++) {
    first = first.next;
  }

  let [prev, cur] = [null, first.next];

  for (let i = 0; i < n - m + 1; i++) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
    //  [cur.next, prev, cur] = [prev, cur, cur.next];
  }

  // 将 m 的 next 指向 n 指针的 next, 同时将排在 m 前面一位的指针的 next 指向 n
  first.next.next = cur;
  first.next = prev;
  return dump.next;
};
