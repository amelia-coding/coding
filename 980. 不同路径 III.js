/*
980. 不同路径 III
在二维网格 grid 上，有 4 种类型的方格：

1 表示起始方格。且只有一个起始方格。
2 表示结束方格，且只有一个结束方格。
0 表示我们可以走过的空方格。
-1 表示我们无法跨越的障碍。
返回在四个方向（上、下、左、右）上行走时，从起始方格到结束方格的不同路径的数目。

每一个无障碍方格都要通过一次，但是一条路径中不能重复通过同一个方格。

 
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  let m = grid.length,
    n = grid[0].length;
  let [start, paths] = helper(grid);
  return dfs(start.X, start.Y, m, n, paths, grid);
};

let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];
function dfs(x, y, m, n, paths, grid) {
  if (
    x < 0 ||
    x >= m ||
    y < 0 ||
    y >= n ||
    grid[x][y] === -1 ||
    grid[x][y] === 3
  )
    return 0;
  if (grid[x][y] === 2) {
    return paths === 0 ? 1 : 0;
  }
  grid[x][y] = 3; //1本身也可以走到这里
  let res = 0;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    res += dfs(nx, ny, m, n, paths - 1, grid);
  }
  grid[x][y] = 0;
  return res;
}

function helper(grid) {
  let paths = 0,
    start; ////开始时的坐标轴（X,Y）及路径长度（初始化时为1，因为1本身也可以走）
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        start = { X: i, Y: j };
        continue;
      }
      if (grid[i][j] === 0) paths++;
    }
  }
  return [start, paths];
}
