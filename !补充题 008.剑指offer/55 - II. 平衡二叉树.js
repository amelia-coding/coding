/**
剑指 Offer 55 - II. 平衡二叉树
输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

 

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return deph(root) !== -1;
};

function deph(root) {
  if (!root) return 0;
  let left = deph(root.left);
  let right = deph(root.right);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return 1 + Math.max(left, right);
}
