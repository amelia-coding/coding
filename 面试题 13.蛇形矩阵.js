/* 给出一个m * n的矩阵，输出它的蛇形矩阵
1  2  6  7
3  5  8  13
4  9  12 14
10 11 15 16
*/

let m = 4
let n = 4

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

function fn() {
  let res = Array.from(new Array(m), () => new Array(n).fill(null))
  let x = 0,
    y = 0
  const arrow = ['right', 'leftDown', 'down', 'upRight']
  let arrowIdx = 0
  let i = 2
  res[0][0] = 1

  while (i <= m * n) {
    // 1.获取方向
    const crtFunc = arrow[arrowIdx]
    // 2.获取坐标
    const point = funcMap[crtFunc](x, y)
    x = point._x
    y = point._y
    console.log('crtFunc', crtFunc, 'x', x, 'y', y)
    res[y][x] = i

    // 3.判断是否触碰边界，转向
    if (x == 0 || y == 0 || x == n - 1 || y == m - 1) {
      arrowIdx++
      arrowIdx = arrowIdx % 4
    }
    i++
  }

  console.log('res', res)
}

fn()
