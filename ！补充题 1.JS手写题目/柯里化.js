const curing = (fn, pre = []) => {
  const argsLen = fn.length
  return function (...args) {
    pre = pre.concat(args)
    if (pre.length === argsLen) {
      return fn.call(this, ...pre)
    } else {
      return curing(fn, pre)
    }
  }
}

function add(x, y, z) {
  return x + y + z
}

const ff = curing(add)
console.log(ff(1)(2)(5))