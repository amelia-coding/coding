//JSON.stringify,缺点是key的顺序不一样会导致去重失败{a:1,b:2},{b:2,a:1}

// const removeDuplicate = (arr) => {
//   const map = new Map()
//   arr.forEach((item) => {
//     map.set(JSON.stringify(item), item)
//   })
//   return [...map.values()]
// }

//比较去重，数组类型和对象类型

const getType = (o) => Object.prototype.toString.call(o)

const isEqual = (o1, o2, _path) => {
  const type1 = getType(o1)
  const type2 = getType(o2)

  //类型不一致
  if (type1 !== type2) return false

  //类型一致数组
  if (type1 === '[object Array]') {
    if (o1.length != o2.length) return false
    return o1.every((item, i) => isEqual(item, o2[i]))
  }
  //类型一致对象
  if (type1 === '[object Object]') {
    const keys = Object.keys(o1)
    return keys.every((key) => isEqual(o1[key], o2[key]))
  }

  //基础类型
  return o1 === o2
}

// 使用reduce合并数组
const removeDuplicate = (arr) => {
  return arr.reduce((res, cur) => {
    const index = res.findIndex((item) => {
      return isEqual(item, cur)
    })
    return index === -1 ? res.concat(cur) : res
  }, [])
}

console.log(
  removeDuplicate([
    { a: 1, b: 4 },
    { b: 4, a: 1 },
  ])
)
