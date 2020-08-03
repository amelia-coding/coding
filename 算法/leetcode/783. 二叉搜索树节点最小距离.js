/*
783. 二叉搜索树节点最小距离
给定一个二叉搜索树的根节点 root，返回树中任意两节点的差的最小值。

 

示例：

输入: root = [4,2,6,1,3,null,null]
输出: 1
解释:
注意，root是树节点对象(TreeNode object)，而不是数组。

给定的树 [4,2,6,1,3,null,null] 可表示为下图:

          4
        /   \
      2      6
     / \    
    1   3  

最小的差值是 1, 它是节点1和节点2的差值, 也是节点3和节点2的差值。

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
 * @return {number}
 */
var minDiffInBST = function (root) {
  if (!root) return 0;
  let min = Infinity,
    prev = null;
  function traverse(root) {
    if (!root) return;
    const { val, left, right } = root;
    //中序遍历
    traverse(left);
    if (prev) {
      min = Math.min(min, val - prev.val);
    }
    //将prev指向当前结点
    prev = root;
    traverse(right);
  }
  traverse(root);
  return min;
};
