//实现一个函数add(1)(2, 3)(4).getValue()

// function add(...args) {
//   let sum = args.reduce((a, b) => a + b, 0)
//   console.log(args, sum)
//   function inner(..._args) {
//     sum += _args.reduce((a, b) => a + b, 0)
//     console.log(_args, sum)
//     // inner.getValue = function () {
//     //   return sum
//     // }
//     return inner
//   }
//   // inner.getValue = function () {
//   //   return sum
//   // }
//   return inner
// }

// console.log(add(1)(2).getValue())
function curry(sum = 0, ...args) {
  function back(..._args) {
    _args.unshift(...args)
    console.log(_args)
    sum = _args.reduce((a, b) => a + b, 0)
    return curry(sum, ..._args)
  }
  back.getValue = function () {
    return sum
  }
  return back
}
const add = curry()
console.log(add(1, 3)(2).getValue())
