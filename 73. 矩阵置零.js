/*
73. 矩阵置零
给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

示例 1:

输入: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
示例 2:

输入: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
*/

/**
 * O（1）空间
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rowLen = matrix.length
  let colLen = matrix[0].length
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (matrix[i][j] == 0) {
        for (let rowI = 0; rowI < rowLen; rowI++) {
          if (matrix[rowI][j] != 0) {
            matrix[rowI][j] = true
          }
        }
        for (let colI = 0; colI < colLen; colI++) {
          if (matrix[i][colI] != 0) {
            matrix[i][colI] = true
          }
        }
      }
    }
  }
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (typeof matrix[i][j] == 'boolean') {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}

/**
 * O(M+N)空间
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rowLen = matrix.length
  let colLen = matrix[0].length
  let rowSet = new Set()
  let colSet = new Set()
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (matrix[i][j] == 0) {
        rowSet.add(i)
        colSet.add(j)
      }
    }
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (rowSet.has(i) || colSet.has(j)) matrix[i][j] = 0
    }
  }

  return matrix
}
