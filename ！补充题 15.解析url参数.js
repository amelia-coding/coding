const parseQueryString = (url) => {
  if (typeof url !== 'string') throw new Error('请传入字符串')
  let query = {}
  let result = /\?(.*)/.exec(url)
  if (result === null) return {}
  const arr = result[1].split('&')
  const len = arr.length
  for (let i = 0; i < len; i++) {
    let [name, value] = arr[i].split('=')
    query[name] = value
  }
  return query
}
console.log(parseQueryString('.com/#?a=1&b=48'))
