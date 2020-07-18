/*
剑指 Offer 34. 二叉树中和为某一值的路径
输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

 

示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]
*/

/**
 * 递归和回溯
 * 可以套用模板
 *
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let paths = [];
  getPath(root, sum, [], paths);
  return paths;
};

function getPath(root, sum, path, paths) {
  if (!root) return;
  path.push(root.val);
  if (root.right === null && root.left === null && root.val === sum) {
    paths.push([...path]);
  }
  getPath(root.left, sum - root.val, path, paths);
  getPath(root.right, sum - root.val, path, paths);
  path.pop();
}
