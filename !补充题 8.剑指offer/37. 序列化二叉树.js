/**
 剑指 Offer 37. 序列化二叉树
请实现两个函数，分别用来序列化和反序列化二叉树。

示例: 

你可以将以下二叉树：

    1
   / \
  2   3
     / \
    4   5

序列化为 "[1,2,3,null,null,4,5]"
 */

/**
 * DFS
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = [];
  traverse(root, res);
  return res.join(",");
};

function traverse(root, res) {
  if (!root) {
    res.push("null");
    return;
  }
  res.push(root.val);
  traverse(root.left, res);
  traverse(root.right, res);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let nodes = data.split(",");
  let root = buildTree(nodes);
  return root;
};

function buildTree(nodes) {
  if (nodes.length === 0) return;
  let node = nodes.shift();
  if (node === "null") return null;
  let root = new TreeNode(node);
  root.left = buildTree(nodes);
  root.right = buildTree(nodes);
  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * BFS
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = [];
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (node === null) {
      res.push("X");
    } else {
      res.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data == "X") return null; // 就一个'X'，只有一个null
  const list = data.split(","); // 序列化字符串转成list数组
  const root = new TreeNode(list[0]); //首项是根节点值，为它创建节点
  const queue = [root]; // 队列初始放入root
  let cursor = 1; // 从list第二项开始遍历
  while (cursor < list.length) {
    // 指针越界就退出
    const node = queue.shift(); // 父节点出列考察
    const leftVal = list[cursor]; // 获取左子节点值
    const rightVal = list[cursor + 1]; // 获取右子节点值
    if (leftVal !== "X") {
      // 左子节点值是有效值
      const leftNode = new TreeNode(leftVal); // 创建节点
      node.left = leftNode; // 成为当前出列节点的左子节点
      queue.push(leftNode); // 它是未来的爸爸，入列等待考察
    }
    if (rightVal !== "X") {
      // 右子节点值是有效值
      const rightNode = new TreeNode(rightVal); // 创建节点
      node.right = rightNode; // 成为当前出列节点的右子节点
      queue.push(rightNode); // 它是未来的爸爸，入列等待考察
    }
    cursor += 2; // 指针前进2位
  }
  return root; // 返回根节点
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
