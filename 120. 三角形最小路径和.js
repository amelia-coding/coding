/*
120. 三角形最小路径和
给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。

 

例如，给定三角形：

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
*/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const h = triangle.length
  // 初始化dp数组
  const dp = Array.from(new Array(h), (item, i) => new Array(triangle[i].length))

  for (let i = h - 1; i >= 0; i--) {
    // 自底而上遍历
    for (let j = 0; j < triangle[i].length; j++) {
      // 同一层的
      if (i == h - 1) {
        // base case 最底层
        dp[i][j] = triangle[i][j]
      } else {
        // 状态转移方程，上一层由它下面一层计算出
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
      }
    }
  }
  return dp[0][0]
}


//降维度

const minimumTotal = (triangle) => {
  const bottom = triangle[triangle.length - 1];
  const dp = [...bottom];

  // 从倒数第二列开始迭代
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
};