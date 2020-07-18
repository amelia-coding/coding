/*
剑指 Offer 54. 二叉搜索树的第k大节点
给定一棵二叉搜索树，请找出其中第k大的节点。

示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
示例 2:

输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4
 

限制：

1 ≤ k ≤ 二叉搜索树元素个数
*/

/**
 * 二叉搜索树的中序遍历
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let res = [];
  traverse(root, k, res);
  return res[res.length - 1];
};

function traverse(root, k, res) {
  if (!root) return;
  traverse(root.right, k, res);
  if (res.length === k) {
    return;
  } else {
    res.push(root.val);
  }
  traverse(root.left, k, res);
}
