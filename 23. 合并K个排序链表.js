/*
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let len = lists.length;
  if (len === 0) return null;
  if (len === 1) return lists[0];
  let left = 0,
    right = len;
  let mid = len >>> 1; // 除以2
  let leftLists = lists.slice(left, mid);
  let rightLists = lists.slice(mid, right);
  return merge(mergeKLists(leftLists), mergeKLists(rightLists));
};

function merge(pHead1, pHead2) {
  if (!pHead1) {
    return pHead2 ? pHead2 : null;
  } else if (!pHead2) {
    return pHead1;
  }
  // debugger;
  var curr1 = pHead1;
  var curr2 = pHead2;
  var result = new ListNode(-1);
  var curr = result;
  while (curr1 && curr2) {
    if (curr1.val < curr2.val) {
      curr.next = curr1;
      curr1 = curr1.next;
    } else {
      curr.next = curr2;
      curr2 = curr2.next;
    }
    curr = curr.next;
  }
  curr.next = curr1 || curr2;
  //防止内存泄露
  curr = curr1 = curr2 = null;
  return result.next;
}
