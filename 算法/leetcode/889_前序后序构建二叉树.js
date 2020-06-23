const { TreeNode } = require("../utils/buildTree.js");
/**
 * 前序后序构建二叉树
 * @param {*} pre
 * @param {*} post
 * 输入：pre = [2,4,5,3,6,7], post = [4,5,2,6,7,3]
 * 输出：[2,3,4,5,6,7]
 */
var constructFromPrePost = function (pre, post) {
  if (pre.length === 0 || post.length === 0) return null;
  const val = pre[0];
  const len = pre.length;
  const root = new TreeNode(val);
  const index = post.indexOf(val);
  const subleftpre = pre.slice(1, index + 1);
  const subrightpre = pre.slice(index + 1, len);
  const subleftpost = post.slice(0, index);
  const subrightpost = post.slice(index + 1, len);
  console.log(subleftpre, subleftpost, subrightpre, subrightpost);
  root.left = constructFromPrePost(subleftpre, subleftpost);
  root.right = constructFromPrePost(subrightpre, subrightpost);
  return root;
};

let pre = [2, 4, 5, 3, 6, 7],
  post = [4, 5, 2, 6, 7, 3];
console.log(constructFromPrePost(pre, post));
