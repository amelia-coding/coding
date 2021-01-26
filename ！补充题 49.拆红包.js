//m块钱随机分给n个人,要求每人得到的金额大于 0.01

//1.定义一个random()函数，原理是 随机数和最大值减最小值的差相乘 最后再加上最小值。
function random(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2)
}
//2.拆红包
function allocate(m, n) {
  if (m / n < 0.01) return
  let res = []
  for (let i = 0, len = n; i < len; i++) {
    res[i] = random(0.01, (m / n) * 2) //当前分配红包的范围是0.01 - 剩余金额平均值*2
    m = (m - res[i]).toFixed(2)
    n--
    console.log(`第${i + 1}人分配: ${res[i]},剩余金额: ${m}，待分配：${n}人`)
  }
  return res
}

allocate(1, 10)
