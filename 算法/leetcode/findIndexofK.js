function ListNode(x) {
  this.val = x;
  this.next = null;
}

var head = new ListNode(1);
var node1 = new ListNode(2);
var node2 = new ListNode(3);
head.next = node1;
node1.next = node2;

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

console.log(findIndexofK(head, 2));
