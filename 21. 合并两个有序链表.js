
/**
 * 

21. 合并两个有序链表  简单
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let node = new ListNode(-1)
  let cur = node
  let p1 = list1
  let p2 = list2
  while(p1 && p2) {
    if(p1.val < p2.val) {
      cur.next = p1
      p1 = p1.next
    } else {
      cur.next = p2
      p2 = p2.next
    }
    cur = cur.next
  }

  cur.next = p1 || p2

  return node.next
};