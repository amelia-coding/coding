function findTarget(aticle) {
  const arr = aticle.match(/[A-Za-z]+/g) || []
  let countMap = {}
  let maxCount = 0
  let target = null
  for(let item of arr) {
    countMap[item] = (countMap[item] || 0) + 1
    if(countMap[item] > maxCount) {
      maxCount = countMap[item] 
      target  = item
    }
  }
  console.log([maxCount, target])
  return [maxCount, target]
}

const aticle = '语文ss word list 你s好 hello world list list'
// aticle.match(/[A-Za-z]+/g)
findTarget(aticle)