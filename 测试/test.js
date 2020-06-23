function preOrderTraversal(root) {
  let result = [];
  loop(root, result);
  console.log(result);
}

function loop(root, result) {
  if (root === null) return;
  result.push(root.val);
  loop(root.left, result);
  loop(root.right, result);
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function buildTree(...arr) {
  let root = build(arr, 0);
  return root;
}

function build(arr, index) {
  if (index > arr.length - 1) return null;
  let root = new TreeNode(arr[index]);
  root.left = build(arr, 2 * index + 1);
  root.right = build(arr, 2 * index + 2);
  return root;
}

let root = buildTree(1, 2, 3, 4, 5, 6);
preOrderTraversal(root);
