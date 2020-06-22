/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  let result = [];
  loop(root, result);
  return result;
};

function loop(root, result) {
  if (root === null) return;
  loop(root.left, result);
  result.push(root.val);
  loop(root.right, result);
}
