/*
字节面试题目
求两个dom节点的公共祖先节点
*/

function getCommonNode(p1, p2) {
  let arr1 = [],
    arr2 = []
  while (p1) {
    arr1.push(p1)
    p1 = p1.parentNode
  }
  while (p2) {
    arr2.push(p2)
    p2 = p2.parentNode
  }

  //判断两个数组是否包含相同的元素，从后往前找，有点像相交的链表
  let m = arr1.length,
    n = arr2.length
  let i = m > n ? m - n : n - m
  if (m > n) {
    while (i--) arr1.shift()
  } else {
    while (i--) arr2.shift()
  }
  i = 0
  while (i < m && i < n) {
    if (arr1[i] != arr2[i]) {
      i++
    } else {
      return arr1[i]
    }
  }
}

function test(arr1, arr2) {
  let m = arr1.length,
    n = arr2.length
  let i = m > n ? m - n : n - m
  if (m > n) {
    while (i--) arr1.shift()
  } else {
    while (i--) arr2.shift()
  }
  i = 0
  while (i < m && i < n) {
    if (arr1[i] != arr2[i]) {
      i++
    } else {
      return arr1[i]
    }
  }
}

console.log(test([3, 4, 5, 1, 2], [0, 3, 4, 5]))
