const data = {
  name: 'dujuan',
  score: 100,
}
const str = 'hello, {{ name }} , you have got the {{ score }}!'

/*
1.正则匹配
*/

function template(str, data) {
  return str.replace(/\{\{(.*?)\}\}/g, (match, key) => {
    return data[key.trim()]
  })
}

console.log(template(str, data))
