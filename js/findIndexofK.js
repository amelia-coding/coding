// 输出链表的倒数第K个结点
var head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null,
        },
      },
    },
  },
};

function findIndexofK(head, k) {
  if (!head) return null;
  let p1 = head;
  let p2 = head;
  while (k) {
    p1 = p1.next;
    k--;
  }
  while (p1) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
}

console.log(findIndexofK(head, 1));
