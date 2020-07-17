/**
 101. 对称二叉树
给定一个二叉树，检查它是否是镜像对称的。

 

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
 

进阶：

你可以运用递归和迭代两种方法解决这个问题吗？
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  return dfs(root.left, root.right);
};

function dfs(left, right) {
  if (!left && !right) return true;
  if (!left || !right) return false;
  return (
    left.val === right.val &&
    dfs(left.left, right.right) &&
    dfs(left.right, right.left)
  );
}

//广度优先遍历
var isSymmetric = function (root) {
  if (!root) return true;
  return bfs(root.left, root.right);
};

function bfs(left, right) {
  let queue = [left, right];
  while (queue.length) {
    let left = queue.shift();
    let right = queue.shift();
    if (left && right) {
      if (left.val !== right.val) return false;
      queue.push(left.left, right.right);
      queue.push(left.right, right.left);
    } else if (left || right) {
      return false;
    }
  }
  return true;
}
