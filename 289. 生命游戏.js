/*
289. 生命游戏
根据 百度百科 ，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。给你 m x n 网格面板 board 的当前状态，返回下一个状态。
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let m = board.length
  let n = board[0].length
  // 遍历
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 拿到当前位置周围活细胞数量
      let cnt = countAlive(i, j)
      // 1. 活细胞周围八个位置有两个或三个活细胞，下一轮继续活
      if (board[i][j] == 1 && (cnt == 2 || cnt == 3)) board[i][j] = 3
      // 2. 死细胞周围有三个活细胞，下一轮复活了
      if (board[i][j] == 0 && cnt == 3) board[i][j] = 2
    }
  }

  // 更新结果
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] >>= 1
    }
  }

  function countAlive(x, y) {
    let dx = [-1, 1, 0, 0, -1, -1, 1, 1]
    let dy = [0, 0, -1, 1, -1, 1, -1, 1]
    let cnt = 0
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k]
      let ny = y + dy[k]
      if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue
      // 如果这个位置为 0，代表当前轮是死的，不需要算进去
      // 如果这个位置为 1，代表当前轮是活得，需要算进去
      // 如果这个位置为 2，代表当前轮是死的（状态10，下一轮是活的），不需要算进去
      // 如果这个位置为 3，代表是当前轮是活的（状态11，下一轮也是活的），需要算进去
      cnt += board[nx][ny] & 1
    }
    return cnt
  }
}
