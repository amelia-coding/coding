/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 前序+中序=>二叉树
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  const val = preorder[0];
  const len = preorder.length;
  const index = inorder.indexOf(val);
  const subleftInorder = inorder.slice(0, index);
  const subrightInorder = inorder.slice(index + 1, len);
  const subleftPreorder = preorder.slice(1, index + 1);
  const subrightPreorder = preorder.slice(index + 1, len);
  const root = new TreeNode(val);
  root.left = buildTree(subleftPreorder, subleftInorder);
  root.right = buildTree(subrightPreorder, subrightInorder);
  return root;
};
