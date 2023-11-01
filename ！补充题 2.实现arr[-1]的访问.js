/**
 * 使用proxy生成一个代理对象
 * Reflect来操作对象
 * @param {*} els
 * @returns
 */
const negativeArray = (els) => {
  return new Proxy(els, {
    get: (target, propKey, receiver) => {
      console.log(target, propKey, receiver)
      return Reflect.get(target, +propKey < 0 ? String(target.length + +propKey) : propKey, receiver)
    },
  })
}

const arr = negativeArray(['京', '程', '一', '灯'])
console.log(arr[-1])
