/**
剑指offer：016-合并两个或k个有序链表
输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
**/

// 代码1：循环
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

// 代码2：递归
function merge(pHead1, pHead2) {
  let pMergeHead = null;
  if (pHead1 === null) return pHead2;
  if (pHead2 === null) return pHead1;
  if (pHead1.val < pHead2.val) {
    pMergeHead = pHead1;
    pMergeHead.next = merge(pHead1.next, pHead2);
  } else {
    pMergeHead = pHead2;
    pMergeHead.next = merge(pHead1, pHead2.next);
  }
  return pMergeHead;
}
