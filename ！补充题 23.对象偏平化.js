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

console.log(b.flatten())
