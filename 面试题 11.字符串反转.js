//iam dj, hello?
//mai jd, olleh?

const str = 'mai jd, olleh'

const revert = (s) => {}
str.replace(/[a-zA-Z]+/g, (s) => {
  return s.split('').reverse()
})

console.log(str)




function findCoverLines(points) {
  let minX = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;

  for (const point of points) {
    const [x, y] = point;
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }

  const lines = [];
  lines.push(`x: ${minX}`); // 添加最小 x 坐标线
  lines.push(`x: ${maxX}`); // 添加最大 x 坐标线
  lines.push(`y: ${maxY}`); // 添加最大 y 坐标线

  return lines;
}

// 测试
const points = [[1, 2], [1, 4], [3, 5], [6, 2]];
const coveredLines = findCoverLines(points);
console.log(coveredLines);