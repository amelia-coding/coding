//1. 使用map计算每个字符的次数
//2. 遍历map，找到第一个值为1的key
var firstUniqChar = function (strs) {
  let map = new Map()
  let res = -1
  for (let i = 0; i < strs.length; i++) {
    const count = map.get(strs[i])  || 0 
    map.set(strs[i], [count + 1, i])
  }

  for (let key of map.keys()) {
    if (map.get(key)[0] === 1) {
      return map.get(key)[1]
    }
  }

  return res
}

console.log(firstUniqChar('abacb'))

const a = new Map()
a.set("a", 1)
console.log(typeof a.get("a"))