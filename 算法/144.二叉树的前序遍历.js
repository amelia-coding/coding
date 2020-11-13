const { buildTree } = require("../utils/buildTree.js");

/**
 * 前序遍历，递归
 * @param {*} root
 */
function preOrderTraversal(root) {
  let result = [];
  loop(root, result);
  return result;
}

function loop(root, result) {
  if (root === null) return;
  result.push(root.val);
  loop(root.left, result);
  loop(root.right, result);
}

/**
 * 前序遍历，栈结构
 * @param {} root
 */
function preOrderTraversalWithStack(root) {
  let stack = [],
    result = [];
  while (root != null || stack.length > 0) {
    while (root) {
      stack.push(root);
      result.push(root.val);
      root = root.left;
    }
    if (stack.length > 0) {
      root = stack.pop();
      root = root.right;
    }
  }
  console.log(result);
  return result;
}

let root = buildTree(1, 2, 3, 4, 5, 6);
preOrderTraversal(root);
preOrderTraversalWithStack(root);
