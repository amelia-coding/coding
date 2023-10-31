/**
 * 
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

思路：
什么叫祖先呢？由于是二叉搜索树，有下面几种情况：

p就是q的祖先
pq一个大于根节点，一个小于根节点，那么公共祖先就是root，否则就是左子树或者右子树上

 * @param {*} root 
 * @param {*} p1 
 * @param {*} p2 
 * @returns 
 */
function lowestCommonAncestor(root, p1, p2) {
  while(root != null) {
      if(root.val < p.val && root.val < q.val) // p,q 都在 root 的右子树中
          root = root.right; // 遍历至右子节点
      else if(root.val > p.val && root.val > q.val) // p,q 都在 root 的左子树中
          root = root.left; // 遍历至左子节点
      else break;
  }
  return root;
}
