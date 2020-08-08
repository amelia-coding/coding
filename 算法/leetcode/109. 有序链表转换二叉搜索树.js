/*
109. 有序链表转换二叉搜索树
给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定的有序链表： [-10, -3, 0, 5, 9],

一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
*/

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  let curr = head,
    arr = [];
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  return build(arr); //使用数组构建
};

function build(arr) {
  let n = arr.length;
  if (n <= 0) return null;
  let mid = Math.floor(n / 2);
  let root = new TreeNode(arr[mid]);
  root.left = build(arr.slice(0, mid));
  root.right = build(arr.slice(mid + 1, n));
  return root;
}

//双指针
var sortedListToBST = function (head) {
  var makeTree = function (head, tail) {
    if (head === tail) return null;
    var p1 = head,
      p2 = head;
    // 快慢指针
    while (p2 !== tail) {
      p2 = p2.next;
      if (p2 !== tail) {
        p1 = p1.next;
        p2 = p2.next;
      }
    }
    var treeNode = new TreeNode(p1.val);
    treeNode.left = makeTree(head, p1);
    treeNode.right = makeTree(p1.next, tail);
    return treeNode;
  };
  return makeTree(head, null);
};
