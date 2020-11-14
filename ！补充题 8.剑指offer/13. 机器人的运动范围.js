/*

剑指 Offer 13. 机器人的运动范围
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

 

示例 1：

输入：m = 2, n = 3, k = 1
输出：3
示例 2：

输入：m = 3, n = 1, k = 0
输出：1
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let visited = Array.from(new Array(m), () => new Array(n).fill(false));
  return dfs(0, 0, m, n, k, visited);
};

function digitalSum(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

//代表机器人在【i，j】处，是否满足条件，满足就+1继续往四个方向搜索
function dfs(i, j, m, n, k, visited) {
  if (
    i < 0 ||
    j < 0 ||
    i >= m ||
    j >= n ||
    visited[i][j] ||
    digitalSum(i) + digitalSum(j) > k
  ) {
    return 0;
  }
  console.log(i, j, visited[i][j], digitalSum(i), digitalSum(j));
  visited[i][j] = true;
  return (
    1 +
    dfs(i - 1, j, m, n, k, visited) +
    dfs(i + 1, j, m, n, k, visited) +
    dfs(i, j - 1, m, n, k, visited) +
    dfs(i, j + 1, m, n, k, visited)
  );
}
