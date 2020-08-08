/*
111. 二叉树的最小深度
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。

示例:

给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回它的最小深度  2.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 很多人写出的代码都不符合 1,2 这个测试用例，是因为没搞清楚题意
 * 叶子节点的定义是左孩子和右孩子都为 null 时叫做叶子节点，1 不是叶子节点
 *
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  if (root.left == null || root.right == null) return left + right + 1; //这个时候左右必然有一个空结点，直接返回非空子树的深度
  return 1 + Math.min(left, right);
};

/**
 * BFS
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  let queue = [root];
  let deph = 1;
  while (queue.length) {
    let len = queue.length;
    while (len) {
      let node = queue.shift();
      if (!node.left && !node.right) return deph;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len--;
    }
    deph++;
  }
  return deph;
};
