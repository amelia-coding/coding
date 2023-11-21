//实现一个函数add(1)(2, 3)(4).getValue()

function add(...args0) {
  let _args = args0
  function inner(...args1) {
    _args.unshift(...args1)//插入
    console.log(_args)
    return inner
  }
  inner.getValue = function () {
    return _args.reduce((a, b) => a + b, 0)
  }
  return inner
}

console.log(add(1, 3)(2).getValue())
