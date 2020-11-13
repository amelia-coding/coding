/*
面试题 04.12. 求和路径
给定一棵二叉树，其中每个节点都含有一个整数数值(该值或正或负)。设计一个算法，打印节点数值总和等于某个给定值的所有路径的数量。注意，路径不一定非得从二叉树的根节点或叶节点开始或结束，但是其方向必须向下(只能从父节点指向子节点方向)。

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

3
解释：和为 22 的路径有：[5,4,11,2], [5,8,4,5], [4,11,7]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 拆解：先求以某个节点为根节点满足当前sum和的路径数
 * 再以前序遍历的方式，计算每个节点能产生的路径数
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  if (!root) return 0;
  let paths = helper(root, sum);
  let leftPaths = pathSum(root.left, sum);
  let rightPaths = pathSum(root.right, sum);
  return paths + leftPaths + rightPaths;
};

//以root为节点，满足和为sum的路径数
function helper(root, sum) {
  if (!root) return 0;
  let left = helper(root.left, sum - root.val);
  let right = helper(root.right, sum - root.val);
  return (root.val === sum ? 1 : 0) + left + right;
}
