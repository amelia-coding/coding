/**
 * 构建二叉树
 * @param  {...any} arr 数组序列
 */
function buildTree(...arr) {
  let root = build(arr, 0);
  return root;
}

function build(arr, index) {
  if (index > arr.length - 1 || !arr[index]) return null;
  let root = new TreeNode(arr[index]);
  root.left = build(arr, 2 * index + 1);
  root.right = build(arr, 2 * index + 2);
  return root;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

module.exports = { buildTree, TreeNode };
