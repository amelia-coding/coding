/*
61. 旋转链表
给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL
示例 2:

输入: 0->1->2->NULL, k = 4
输出: 2->0->1->NULL
解释:
向右旋转 1 步: 2->0->1->NULL
向右旋转 2 步: 1->2->0->NULL
向右旋转 3 步: 0->1->2->NULL
向右旋转 4 步: 2->0->1->NULL
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 1 将链表结成环，tail.next = head
 * 2 n为链表的长度，如果链表旋转n个结点刚好还是原来的链表，所以针对k我们只可以取n%k取余数
 * 3 m = n % k
 * 4 计算需要在原链表上移动的步数 step = n - m
 * 5 (因为我们可以从尾结点开始，链表向右移动k，即k个尾结点被搬到头部，所以我们只需要从头部移动n-k步，找到需要断开的点)
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return null;
  let curr = head,
    pre = null;
  n = 1;
  while (curr.next) {
    curr = curr.next;
    pre = curr;
    n++;
  }
  curr.next = head; //链接成环
  let m = k % n;
  let step = n - m;
  while (step--) {
    curr = curr.next;
  }
  let newHead = curr.next;
  curr.next = null;
  return newHead;
};
