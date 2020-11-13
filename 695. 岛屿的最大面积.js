/*
695. 岛屿的最大面积
给定一个包含了一些 0 和 1 的非空二维数组 grid 。

一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)

 

示例 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。

示例 2:

[[0,0,0,0,0,0,0,0]]
对于上面这个给定的矩阵, 返回 0。
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let maxArea = 0;
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (grid[x][y] === 1) {
        maxArea = Math.max(maxArea, dfs(x, y, m, n, grid));
      }
    }
  }
  return maxArea;
};

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

//返回当前以x,y为起点的岛屿面积
function dfs(x, y, m, n, grid) {
  if (x >= m || x < 0 || y >= n || y < 0) {
    return 0;
  }
  if (grid[x][y] !== 1) return 0;

  grid[x][y] = 2; //代表访问过

  let res = 1;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    res += dfs(nx, ny, m, n, grid);
  }
  return res;
}
