/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const { buildTree } = require("../utils/buildTree.js");

/**
 * 深度优先遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return [];
  let res = [];
  dfs(root, 0, res);
  return res;
};

function dfs(root, step, res) {
  if (root) {
    if (!res[step]) res[step] = [];
    res[step].push(root.val);
    dfs(root.left, step + 1, res);
    dfs(root.right, step + 1, res);
  }
}

/**
 * 广度优先遍历
 * @param {*} root
 */
const levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length > 0) {
    let len = queue.length;
    let arr = [];
    while (len) {
      let node = queue.shift();
      arr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len--;
    }
    res.push(arr);
  }
  return res;
};


function bfs(root, key = 'name') {
  if (root === null) return []
  const q = [root]
  const res = []
  while (q.length > 0) {
    let cnt = q.length
    const temp = []
    while (cnt-- > 0) {
      const node = q.shift()
      console.log(node)
      temp.push(node[key])
      if (node.children && node.children.length > 0) q.push(...node.children)
    }
    res.push(temp)
  }
  return res
}

const mockdata = [
  {
    name: 1,
    children: [
      {
        name: 3,
        children: [
          {
            name: 6,
          },
        ],
      },
    ],
  },
  {
    name: 2,
    children: [
      {
        name: 4,
      },
      {
        name: 5,
      },
    ],
  },
]
// 构造出[[1,2],[3,4,5],[6]]
//构造一个虚拟节点，层序遍历
const root = {
  name: -1,
  children: mockdata
}

bfs(root)