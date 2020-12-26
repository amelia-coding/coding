/*
54. 螺旋矩阵
给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]

*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length == 0) return []
  const res = []
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1
  const size = matrix.length * matrix[0].length
  while (res.length !== size) {
    // 仍未遍历结束
    for (let i = left; i <= right; i++) res.push(matrix[top][i])
    top++
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right])
    right--
    if (res.length === size) break // 遍历结束
    for (let i = right; i >= left; i--) res.push(matrix[bottom][i])
    bottom--
    for (let i = bottom; i >= top; i--) res.push(matrix[i][left])
    left++
  }
  return res
}
