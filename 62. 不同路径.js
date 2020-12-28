/*
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

示例 1：

输入：m = 3, n = 7
输出：28
示例 2：

输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向右 -> 向下
2. 向右 -> 向下 -> 向右
3. 向下 -> 向右 -> 向右
示例 3：

输入：m = 7, n = 3
输出：28
示例 4：

输入：m = 3, n = 3
输出：6
*/

/**
动态规划
时间复杂度 O(m*n) 空间复杂度 O(m*n)
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

  let dp = Array.from(new Array(m),()=>new Array(n))
  // 第一列的走法只有一种
  for (let i = 0; i < m; i++){
      dp[i][0] = 1;
  }
  // 第一行的走法只有一种
  for (let j = 0; j < n; j++){
      dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++){
      for (let j = 1; j < n; j++){
          // 当前位置是从左边或上边走过来的
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
  }
  return dp[m - 1][n - 1];
};
