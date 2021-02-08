/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rows = new Set(),
    cols = new Set()
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        rows.add(row)
        cols.add(col)
      }
    }
  }
  //行清零
  for (let row of rows) {
    for (let col = 0; col < matrix[row].length; col++) {
      matrix[row][col] = 0
    }
  }
  //列清零
  for (let col of cols) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][col] = 0
    }
  }
  return matrix
}
