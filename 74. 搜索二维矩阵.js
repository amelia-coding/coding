/*
74. 搜索二维矩阵
编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。
 

示例 1：


输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
输出：true
示例 2：


输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
输出：false
示例 3：

输入：matrix = [], target = 0
输出：false
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length,
    n = matrix[0].length
  let left = 0,
    right = m * n - 1
  while (left <= right) {
    let mid = (left + (right - left) / 2) | 0
    let cur = matrix[(mid / n) | 0][mid % n]//关键是找到元素对应的行和列
    if (cur === target) {
      return true
    } else if (cur > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
}

var searchMatrix = function (matrix, target) {
  return matrix.flat().includes(target)
}
