/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function FindFirstCommonNode(pHead1, pHead2) {

  let h1 = pHead1
  let h2 = pHead2

  while (h1 != h2) {
    h1 = h1 ? h1.next : pHead2
    h2 = h2 ? h2.next : pHead1
  }
  return h1
}