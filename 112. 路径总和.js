/*
112. 路径总和
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
*/

/**
 * 2、解题思路：

只需要遍历整棵树

如果当前节点不是叶子节点，递归它的所有子节点，传递的参数就是 sum 减去当前的节点值；
如果当前节点是叶子节点，判断参数 sum 是否等于当前节点值，如果相等就返回 true，否则返回 false。


 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 3、代码实现
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false;
  if (root.left === null && root.right === null) return root.val === sum;
  sum = sum - root.val;
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};
