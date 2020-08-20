function getSum() {
  let res = 0;
  let root = buildTree(1, 2, 3, 4, 5);
  function traverse(root, path) {
    if (!root.left && !root.right) {
      path.push(root.val);
      res += path.reduce((a, b) => a * 10 + b, 0);
      path.pop();
      return;
    }
    path.push(root.val);
    traverse(root.left, path);
    traverse(root.right, path);
    path.pop();
  }
  traverse(root, []);
  console.log(res);
  return res;
}

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

getSum();
