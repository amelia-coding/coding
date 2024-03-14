//给定一些二维坐标点的数组，例如[[1,2], [1,4], [3,5], [6,2]]，返回3条线能覆盖到所有的点，(3条线可以是x坐标线也可以是y坐标线)，例如 x:1, x: 6, y: 5
/**
 * [
 *  [0,0,0,0,0,0,0]
 *  [0,0,0,0,0,0,0]
 *  [0,1,0,0,0,0,1]
 *  [0,0,0,0,0,0,0]
 *  [0,1,0,0,0,0,0]
 *  [0,0,0,1,0,0,0]
 * ]
 */

/**
 * 为了返回能覆盖所有点的三条线（可以是 x 坐标线也可以是 y 坐标线），
 * 我们需要找到数组中 x 坐标的最小值、最大值以及 y 坐标的最大值。
 * 这样，我们就可以构建两条垂直于 x 轴的线段和一条水平于 y 轴的线段，使其覆盖所有的点。
 */

function findCoverLines(points) {
  let minX = Number.POSITIVE_INFINITY
  let maxX = Number.NEGATIVE_INFINITY
  let maxY = Number.NEGATIVE_INFINITY

  for (const point of points) {
    const [x, y] = point
    minX = Math.min(minX, x)
    maxX = Math.max(maxX, x)
    maxY = Math.max(maxY, y)
  }

  const lines = []
  lines.push(`x: ${minX}`) // 添加最小 x 坐标线
  lines.push(`x: ${maxX}`) // 添加最大 x 坐标线
  lines.push(`y: ${maxY}`) // 添加最大 y 坐标线

  return lines
}

// 测试
const points = [
  [1, 2],
  [1, 4],
  [3, 5],
  [6, 2],
]
const coveredLines = findCoverLines(points)
console.log(coveredLines)
