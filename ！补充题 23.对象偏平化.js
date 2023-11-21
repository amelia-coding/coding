var toString = Object.prototype.toString

Object.prototype.flatten = function () {
  const obj = this
  var result = {}
  function recurse(src, prop) {
    if (toString.call(src) == '[object Object]') {
      for (var p in src) {
        if (src.hasOwnProperty(p)) {
          recurse(src[p], prop ? prop + '.' + p : p)
        }
      }
    } else if (toString.call(src) == '[object Array]') {
      src.forEach(function (item, index) {
        recurse(item, prop ? prop + '[' + index + ']' : index)
      })
    } else {
      result[prop] = src
    }
  }
  recurse(obj, '')
  return result
}

Object.prototype.unflatten = function () {
  const data = this
  if (Object(data) !== data || Array.isArray(data)) return data
  var regex = /\.?([^.\[\]]+)|\[(\d+)\]/g,
    resultholder = {}
  for (var p in data) {
    var cur = resultholder,
      prop = '',
      m
    while ((m = regex.exec(p))) {
      cur = cur[prop] || (cur[prop] = m[2] ? [] : {})
      prop = m[2] || m[1]
    }
    cur[prop] = data[p]
  }
  return resultholder[''] || resultholder
}

Object.prototype.unflatten2 = function (data) {
  if (Object(data) !== data || Array.isArray(data)) return data
  var result = {},
    cur,
    prop,
    idx,
    last,
    temp
  for (var p in data) {
    ;(cur = result), (prop = ''), (last = 0)
    do {
      idx = p.indexOf('.', last)
      temp = p.substring(last, idx !== -1 ? idx : undefined)
      cur = cur[prop] || (cur[prop] = !isNaN(parseInt(temp)) ? [] : {})
      prop = temp
      last = idx + 1
    } while (idx >= 0)
    cur[prop] = data[p]
  }
  return result['']
}

const a = {
  'a.b.c.d': 1,
  'a.e.a': 1,
  nn: null,
  'arr[0]': 1,
  'arr[1]': 2,
  'arr[2]': 3,
}

const b = {
  a: {
    b: {
      c: {
        d: 1,
      },
    },
    e: {
      a: 1,
    },
  },

  nn: null,
  arr: [1, 2, [4, 5]],
}

console.log(a.unflatten())
console.log(b.flatten())
