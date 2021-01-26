function reverse (head, k) {
  let [pre, cur] = [null, head]
  // 判断是否
  let p = head
  for (let i = 0; i < k; i++) {
    if (p === null) return head
    p = p.next
  }
  // 反转
  for (let i = 0; i < k; i++) {
    const temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  head.next = reverse(cur, k)
  return pre
}

function ListNode (val) {
  this.val = val
  this.next = null
}
function ger (arr) {
  let head = new ListNode(arr[0])
  const p = head
  for (let i = 1; i < arr.length; i++) {
    head.next = new ListNode(arr[i])
    head = head.next
  }
  return p
}

const lsit = ger([1, 2, 3, 4, 5])
console.log(JSON.stringify(lsit))
console.log(JSON.stringify(reverse(lsit, 2)))
