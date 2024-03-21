/* 给出一个m*n的矩阵，输出它的蛇形矩阵
1  2  3  4
12 13 14  5
11 16 15 6
10 9  8 7
*/

let m = 5,
  n = 5

const funcMap = {
  //➡️向右
  right: (x, y) => {
    if (x === n - 1) {
      y++
    } else {
      x++
    }
    return { _x: x, _y: y }
  },
  //↙️左下
  leftDown: (x, y) => {
    x--
    y++
    return { _x: x, _y: y }
  },
  //⬇向下
  down: (x, y) => {
    if (y === m - 1) {
      // 特殊情况
      x++
    } else {
      y++
    }
    return { _x: x, _y: y }
  },
  //↗右上
  upRight: (x, y) => {
    x++
    y--
    return { _x: x, _y: y }
  },
}

//top bottom left right

function fn() {
  let res = Array.from(new Array(m), () => new Array(n).fill(null))
  let top = 0,
    bottom = m - 1,
    left = 0,
    right = n - 1
  let i = 1
  res[0][0] = 1

  while (i <= m * n) {
    let m = left
    while (m <= right) {
      res[top][m] = i++
      m++
    }

    top++

    let n = top
    while (n <= bottom) {
      res[n][right] = i++
      n++
    }
    right--

    let j = right
    while (j >= left) {
      res[bottom][j] = i++
      j--
    }

    bottom--

    let k = bottom
    while (k >= top) {
      res[k][left] = i++
      k--
    }

    left++
  }

  console.log('res', res)
}

fn()
