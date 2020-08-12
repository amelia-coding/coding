/*
剑指 Offer 07. 重建二叉树
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

 

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  const val = preorder[0];
  const index = inorder.indexOf(val);
  const leftPre = preorder.slice(1, index + 1);
  const rightPre = preorder.slice(index + 1, preorder.length);
  const leftOrd = inorder.slice(0, index);
  const rightOrd = inorder.slice(index + 1, inorder.length);
  const root = new TreeNode(val);
  root.left = buildTree(leftPre, leftOrd);
  root.right = buildTree(rightPre, rightOrd);
  return root;
};
