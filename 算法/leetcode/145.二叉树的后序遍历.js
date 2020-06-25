/**
 * 二叉树的后序遍历
 * @param {*} root
 */
var postorderTraversal = function (root) {
  let result = [];
  loop(root, result);
  return result;
};

function loop(root, result) {
  if (root === null) return;
  loop(root.left, result);
  loop(root.right, result);
  result.push(root.val);
}
