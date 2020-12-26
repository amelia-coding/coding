/*
59. 螺旋矩阵 II
给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:

输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let matrix = Array.from(new Array(n), () => new Array(n).fill(0))
  let t = 0,
    l = 0,
    r = n - 1,
    b = n - 1
  let num = 1,
    tar = n * n
  while (num <= tar) {
    for (let i = l; i <= r; i++) matrix[t][i] = num++ // left to right.
    t++
    for (let i = t; i <= b; i++) matrix[i][r] = num++ // top to bottom.
    r--
    for (let i = r; i >= l; i--) matrix[b][i] = num++ // right to left.
    b--
    for (let i = b; i >= t; i--) matrix[i][l] = num++ // bottom to top.
    l++
  }

  return matrix
}
