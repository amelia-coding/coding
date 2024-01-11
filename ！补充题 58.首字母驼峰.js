/*
！补充题 58
*/

function camelize (str) {
  return str.replace(/([a-z]+)/g, function (match, group) { 
    return group ? group.charAt(0).toUpperCase() + match.slice(1) : ''
   })
}

console.log(camelize('hello world'))