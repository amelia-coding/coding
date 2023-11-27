/**
199. 二叉树的右视图
返回每一层的最右边的节点值
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return []
  const que = [root]
  const res = []
  while (que.length > 0) {
    let len = que.length
    while (len) {
      const node = que.shift()
      if (len == 1) res.push(node.val)
      if (node.left) que.push(node.left)
      if (node.right) que.push(node.right)
      len--
    }
  }
  return res
}
