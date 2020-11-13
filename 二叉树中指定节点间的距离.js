const lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left || right;
};

function getPath(root, p, paths) {
  if (!root) return false;
  if (root === p) return true;
  paths.push(root);
  let hasFound = false;
  hasFound = getPath(root.left, p);
  if (!hasFound) {
    hasFound = getPath(root.right, p);
  }
  if (!hasFound) {
    paths.pop();
  }
  return hasFound;
}

function shortestDistance(root, p, q) {
  let lowestCA = lowestCommonAncestor(root.p, q);
  let pDis = [],
    qDis = [];
  getPath(lowestCA, p, pDis);
  getPath(lowestCA, q, qDis);
  return pathForp.length + pathForq.length;
}
