/*
463. 岛屿的周长
给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。

网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

 

示例 :

输入:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

输出: 16

解释: 它的周长是下面图片中的 16 个黄色的边：
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let m = grid.length;
  let n = grid[0] ? grid[0].length : 0;
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (grid[x][y] === 1) {
        return dfs(x, y, m, n, grid);
      }
    }
  }
};

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];
function dfs(x, y, m, n, grid) {
  if (x >= m || x < 0 || y >= n || y < 0) {
    return 1;
  }
  // 函数因为「当前格子是海洋格子」返回，对应一条蓝色的边
  if (grid[x][y] == 0) {
    return 1;
  }
  // 函数因为「当前格子是已遍历的陆地格子」返回，和周长没关系
  if (grid[x][y] === 2) {
    return 0;
  }
  grid[x][y] = 2;
  let len = 0;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    len += dfs(nx, ny, m, n, grid);
  }
  return len;
}
