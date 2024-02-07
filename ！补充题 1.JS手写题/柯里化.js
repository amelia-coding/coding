const curing = (fn, pre = []) => {
  return function (...args) {
    pre = pre.concat(args)
    if (pre.length ===  fn.length) {
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



