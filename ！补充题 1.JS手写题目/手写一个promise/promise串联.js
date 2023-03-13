const fn1 = function (args) {
  console.log('fn1', args)
  return Promise.resolve('111')
}
const fn2 = function (args) {
  console.log('fn2', args)
  return Promise.resolve('222')
}
const fn3 = function (args) {
  console.log('fn3', args)
  return Promise.resolve('333')
}

const serialPromises = function (promises) {
  promises.reduce((prev, next) => prev.then(next), Promise.resolve())
}

serialPromises([fn1, fn2, fn3])
