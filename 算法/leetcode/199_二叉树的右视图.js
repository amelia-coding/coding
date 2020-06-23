const { buildTree } = require("../utils/buildTree.js");

/**
 * DFS
 * @param {*} root
 */
const rightSideViewDFS = function (root) {
  let res = [];
  dfs(root, 0, res);
  return res;
};

function dfs(root, step, res) {
  if (root) {
    if (res.length <= step) res.push(root.val);
    dfs(root.right, step + 1, res);
    dfs(root.left, step + 1, res);
  }
}
/**
 * BFS
 * @param {*} root
 */
const rightSideViewBFS = function (root) {
  let res = [];
  if (!root) return res;
  let queue = [root];
  while (queue.length > 0) {
    let len = queue.length;
    while (len) {
      let node = queue.shift();
      if (len === 1) res.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len--;
    }
  }
  return res;
};

let root = buildTree(1, 2, 3, null, 5, null, 4);
console.log(rightSideViewDFS(root));
console.log(rightSideViewBFS(root));
