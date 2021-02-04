let templ = `name is {obj.a}
age is {obj.b.c}
address is {obj.c.d}
phone is {obj2.a}
`

var data = {
  obj: {
    a: 1,
    b: { c: { d: 2 } },
    c: false,
  },
}

function render(templ, data) {
  return templ.replace(/\{(.*?)\}/g, (match, group) => {
    let keys = group.split('.')
    let temp = data,flag = true
    for (let key of keys) {
      temp = temp[key]
      if (temp === undefined) {
        flag = false
        break
      }
    }
    return JSON.stringify(flag && temp !== undefined ? temp : group)
  })
}

console.log(render(templ, data))
