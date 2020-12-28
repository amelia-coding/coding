/*
63. 不同路径 II
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
*/

/**
每次只能向下或者向右移动一步:第一行和第一列只能直线过来
dp[0][0]=1 ，出发点就是终点，什么都不用做，方式数 1
第一行其余的：当前点走不了，要么是它本身是“障碍”，要么是它左边的点走不了，否则，路径数是 1，走一条直线过来
第一列其余的：当前点走不了，要么是它本身是“障碍”，要么是它上边的点走不了，否则，路径数是 1，走一条竖线过来
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0] == 1) return 0; // 出发点就被障碍堵住
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  // dp数组初始化
  const dp = Array.from(new Array(m), () => new Array(n));
  // base case
  dp[0][0] = 1; // 终点就是出发点
  for (let i = 1; i < m; i++) {
    // 第一列其余的case
    dp[i][0] = obstacleGrid[i][0] == 1 || dp[i - 1][0] == 0 ? 0 : 1;
  }
  for (let i = 1; i < n; i++) {
    // 第一行其余的case
    dp[0][i] = obstacleGrid[0][i] == 1 || dp[0][i - 1] == 0 ? 0 : 1;
  }
  // 迭代
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      //障碍点，是无法抵达的点，是到达方式为 0 的点，是无法从它这里走到别的点的点，即无法提供给别的点方式数的点
      dp[i][j] = obstacleGrid[i][j] == 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1]; // 到达(m-1,n-1)的路径数
};
