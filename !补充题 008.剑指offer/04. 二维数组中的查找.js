/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix) return false;
  var i = matrix.length - 1,
    j = 0;
  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] > target) {
      i--;
    } else {
      j++;
    }
  }
  return false;
};
