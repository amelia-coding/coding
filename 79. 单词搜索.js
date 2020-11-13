/*
79. 单词搜索
给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

示例:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true
给定 word = "SEE", 返回 true
给定 word = "ABCB", 返回 false
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;
  let visited = Array.from(new Array(m), () => new Array(n));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, m, n, board, word, 0, visited)) return true;
    }
  }
  return false;
};

let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];
function dfs(i, j, m, n, board, word, index, visited) {
  if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) {
    return false;
  }
  if (board[i][j] !== word[index]) {
    return false;
  }
  if (index === word.length - 1) {
    return true;
  }
  visited[i][j] = true;
  let res = false;
  for (let k = 0; k < 4; k++) {
    let ni = i + dx[k];
    let nj = j + dy[k];
    res = res || dfs(ni, nj, m, n, board, word, index + 1, visited);
  }
  visited[i][j] = false;
  return res;
}

/**
 * 不使用visited
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, m, n, board, word, 0)) return true;
    }
  }
  return false;
};

let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];
function dfs(i, j, m, n, board, word, index) {
  if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] === null) {
    return false;
  }
  if (board[i][j] !== word[index]) {
    return false;
  }
  if (index === word.length - 1) {
    return true;
  }
  let now = board[i][j];
  board[i][j] = null;
  let res = false;
  for (let k = 0; k < 4; k++) {
    let ni = i + dx[k];
    let nj = j + dy[k];
    res = res || dfs(ni, nj, m, n, board, word, index + 1);
  }
  board[i][j] = now; //还原
  return res;
}
