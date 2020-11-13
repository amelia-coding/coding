/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;
  let visited = Array.from(new Array(m), () => new Array(n).fill(false));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, board, word, 0, m, n, visited)) {
        console.log(visited);
        return true;
      }
    }
  }
  return false;
};

let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];

function dfs(x, y, board, word, index, m, n, visited) {
  if (index >= word.length) return true;
  if (
    x < 0 ||
    y < 0 ||
    x >= m ||
    y >= n ||
    visited[x][y] ||
    word[index] !== board[x][y]
  ) {
    return false;
  }

  visited[x][y] = true;
  let res = false;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i],
      ny = y + dy[i];
    res = res || dfs(nx, ny, board, word, index + 1, m, n, visited);
  }
  if (res) {
    return true;
  }

  visited[x][y] = false;
  return false;
}
