/*
437. 路径总和 III
给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

示例：

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

返回 3。和等于 8 的路径有:

1.  5 -> 3
2.  5 -> 2 -> 1
3.  -3 -> 11
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  if (!root) return 0;
  let rootPaths = countHandle(root, sum);
  let leftPaths = pathSum(root.left, sum);
  let rightPaths = pathSum(root.right, sum);
  return rootPaths + leftPaths + rightPaths;
};

function countHandle(root, sum) {
  let paths = [];
  dfs(root, sum, [], paths);
  return paths.length;
}

function dfs(root, sum, solution, paths) {
  if (!root) return;
  solution.push(root.val);
  if (root.val === sum) {
    paths.push([...solution]);
  }
  dfs(root.left, sum - root.val, solution, paths);
  dfs(root.right, sum - root.val, solution, paths);
  solution.pop();
}

/**
 *
 * 简化
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  //root为根节点， sum为规定的路径权值和
  if (!root) return 0; //若节点为空，返回0
  let page = findDown(root, sum); //从根节点开始有多少满足条件的路径数，findDown函数是求从单个节点开始满足条件的路径数
  let sum1 = pathSum(root.left, sum); //遍历左子树求符合条件的路径数，
  let sum2 = pathSum(root.right, sum); //遍历右子树求符合条件的路径数
  return page + sum1 + sum2; //得出总路径数
};

function findDown(tNode, sum) {
  // 求从单个节点开始满足条件的路径数，tNode为当前节点，sum为规定的路径权值和
  if (!tNode) return 0; //若节点为空，返回0
  let flag = tNode.val === sum ? 1 : 0; // 当前节点权值刚好等于sum则算为1，否则为0
  let leftSum = findDown(tNode.left, sum - tNode.val); //剩下的权值要子树来凑，先看左子树能不能凑出来
  let rightSum = findDown(tNode.right, sum - tNode.val); //再看右子树是否能凑出来
  return flag + leftSum + rightSum; // 返回符合条件的路径数
}
