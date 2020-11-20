const data = {
  name: 'dujuan',
  score: 100,
  friend: {
    name: 'lily',
    score: 9,
  },
}
const str = 'hello, {{ name }} , you have got the {{ score }} ,your friend got {{friend.score}}'

/*
1.正则匹配
*/

function template(str, data) {
  return str.replace(/\{\{(.*?)\}\}/g, (match, key) => {
    var paths = key.trim().split('.')
    var lookup = data
    while (paths.length > 0) {
      lookup = lookup[paths.shift()]
    }
    return lookup || data[key.trim()]
  })
}

console.log(template(str, data))
