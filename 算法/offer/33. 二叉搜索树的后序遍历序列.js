/*
剑指 Offer 33. 二叉搜索树的后序遍历序列
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

 

参考以下这颗二叉搜索树：

     5
    / \
   2   6
  / \
 1   3
示例 1：

输入: [1,6,3,2,5]
输出: false
示例 2：

输入: [1,3,2,6,5]
输出: true

*/

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  let len = postorder.length;
  // 若为叶子节点，则返回 true
  if (len < 2) return true;
  // 后序遍历的最后一个元素为根节点
  let root = postorder[len - 1];
  let i = 0;
  // 划分左/右子树
  for (; i < len - 1; i++) {
    if (postorder[i] > root) break;
  }
  // 判断右子树中的元素是否都大于 root，此处用到 every (数组 API，数组的每个元素都返回 true 则整体返回 true)
  let result = postorder.slice(i, len - 1).every((x) => x > root);
  if (result) {
    // 对左右子树进行递归调用,左右子树通过 i 进行分割
    return (
      verifyPostorder(postorder.slice(0, i)) &&
      verifyPostorder(postorder.slice(i, len - 1))
    );
  } else {
    return false;
  }
};
