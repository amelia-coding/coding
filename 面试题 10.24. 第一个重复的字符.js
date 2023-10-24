//使用set添加
const findTaget = (strs) => {
  let tmp = new Set()
  let len = 0
  for (let i = 0; i < strs.length; i++) {
    len++
    tmp.add(strs[i])
    if (tmp.size !== len) {
      return strs[i]
    }
  }

  return ""
}

console.log(findTaget('abccb'))
