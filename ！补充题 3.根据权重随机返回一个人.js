/*
字节面试题目
写一个函数随机返回一个人，每个人的中奖权重不同
var peoples = [{
  n:"p1",
  w:100
},{
   n:"p2",
  w:9009
}]
*/

/*
根据权重划分区间，0-100，100-100+9009
*/
function getOnePeople(peoples) {
  let sum = peoples.reduce((a, b) => a.w + b.w)
  let randVal = sum * Math.random()
  let startSpan = 0 //用于定义每段区间的开始位置
  for (let i = 0; i < peoples.length; i++) {
    //动态生成不同的区间
    let endSpan = startSpan + peoples[i].w
    if (randVal > startSpan && randVal < endSpan) {
      return peoples[i]
    }
    startSpan += peoples[i].w
  }
}

console.log(
  getOnePeople([
    {
      n: 'p1',
      w: 100,
    },
    {
      n: 'p1',
      w: 9009,
    },
  ])
)
