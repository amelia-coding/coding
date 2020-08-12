/*
剑指 Offer 12. 矩阵中的路径
请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。

[["a","b","c","e"],
["s","f","c","s"],
["a","d","e","e"]]

但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。

 

示例 1：

输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
示例 2：

输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false
*/

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
