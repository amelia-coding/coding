var mergeTwoLists = function (l1, l2) {
  var curr1 = l1;
  var curr2 = l2;
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
};
