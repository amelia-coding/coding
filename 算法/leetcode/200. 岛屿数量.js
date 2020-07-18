/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围。
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let m = grid.length;
  let n = grid[0] ? grid[0].length : 0;
  let nums = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        nums++;
        dfs(i, j, grid, m, n);
      }
    }
  }
  return nums;
};
let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];
function dfs(x, y, grid, m, n) {
  if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === "0") {
    return;
  }
  grid[x][y] = "0";
  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];
    dfs(nx, ny, grid, m, n);
  }
}
