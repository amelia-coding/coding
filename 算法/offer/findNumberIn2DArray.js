/*
在一个二维数组中（每个一维数组的长度相同），
每一行都按照从左到右递增的顺序排序，
每一列都按照从上到下递增的顺序排序。
请完成一个函数，输入这样的一个二维数组和一个整数，
判断数组中是否含有该整数。
*/


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  if (matrix.length === 0) return false;
  let x = 0,
    y = matrix.length - 1;
  while (x < matrix[0].length && y >= 0) {
    if (target > matrix[y][x]) {
      x++;
    } else if (target < matrix[y][x]) {
      y--;
    } else {
      return true;
    }
  };
  return false
};