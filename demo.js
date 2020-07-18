/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let arr = new Array(board.length).fill([]);
  let m = board.length;
  let n = board[0].length;
  return dp(board, word, m - 1, n - 1, arr);
};

function dp(board, word, i, j, visited) {
  if (
    i < 0 ||
    j < 0 ||
    j > board[0].length - 1 ||
    i > board.length - 1 ||
    visited[i][j]
  ) {
    return false;
  }
  visited[i][j] = true;
  if (word.indexOf(board[i][j]) > 0) {
    return true;
  } else {
    return false;
  }
  return (
    dp(board, word, i - 1, j, visited) ||
    dp(board, word, i + 1, j, visited) ||
    dp(board, word, i, j - 1, visited) ||
    dp(board, word, i, j + 1, visited)
  );
}
