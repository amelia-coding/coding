const parseQueryString = (url) => {
  if (typeof url !== 'string') throw new Error('请传入字符串')
  let query = {}
  let param = url.replace(/#\S*/, '').match(/\?[^#]+/)//去除#
  if (param === null) return {}
  param = param[0].substr(1).split('&')
  for (let i = 0, length = param.length; i < length; i++) {
    let [name, value] = param[i].split('=')
    query[name] = value
  }
  return query
}

parseQueryString('com?a=1&b=48')
