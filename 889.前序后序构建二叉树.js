const { TreeNode } = require("../utils/buildTree.js");
/**
 * 前序后序构建二叉树
 * @param {*} pre
 * @param {*} post
 * 输入：pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
 * 输出：[1,2,3,4,5,6,7]
 */
var constructFromPrePost = function (pre, post) {
  if (pre.length === 0 || post.length === 0) return null;
  const len = pre.length;
  const root = new TreeNode(pre[0]);
  const index = post.indexOf(pre[1]);
  const subleftpre = pre.slice(1, index + 2);
  const subrightpre = pre.slice(index + 2, len);
  const subleftpost = post.slice(0, index + 1);
  const subrightpost = post.slice(index + 1, len);
  root.left = dfs(subleftpre, subleftpost);
  root.right = dfs(subrightpre, subrightpost);
  return root;
};

let pre = [1, 2, 4, 5, 3, 6, 7],
  post = [4, 5, 2, 6, 7, 3, 1];
console.log(constructFromPrePost(pre, post));
