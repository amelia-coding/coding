/**
 * 
- 1.如何设计一个通过组件曝光的sdk（计算路由跳转层级、停留时间等）
// 曝光实现 https://blog.csdn.net/Ed7zgeE9X/article/details/131928782
- 2. 手写给个xiaotuofeng-mingming-shezhi改成驼峰式xiaotuofengMingmingShezhi
- 3. 秒数转换为（时分秒hh:mm:ss）格式、不能使用js API
- 4. Semantic Versioning 是一个前端通用的版本规范。格式为“{MAJOR}.{MINOR}.{PATCH}-{alpha|beta|rc}.{number}”，要求实现 compare(a, b) 方法，比较 a, b 两个版本大小
- 5. 实现 getValue 函数来获取path对应的值, 如 const object = { 'a': [{ 'b': { 'c': 3 } }] } ； console.log(getValue(object, 'a[0].b.c', 0));  // 输出3
*/

function camelize(str) {
  return str.replace(/[-\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : ''
  })
}

function formatSecondToHour(value) {
  var secondTime = parseInt(value) // 秒
  var minuteTime = 0 // 分
  var hourTime = 0 // 小时
  if (secondTime > 60) {
    // 如果秒数大于60，将秒数转换成整数
    // 获取分钟，除以60取整数，得到整数分钟
    minuteTime = parseInt(secondTime / 60)
    // 获取秒数，秒数取佘，得到整数秒数
    secondTime = parseInt(secondTime % 60)
    // 如果分钟大于60，将分钟转换成小时
    if (minuteTime > 60) {
      // 获取小时，获取分钟除以60，得到整数小时
      hourTime = parseInt(minuteTime / 60)
      // 获取小时后取佘的分，获取分钟除以60取佘的分
      minuteTime = parseInt(minuteTime % 60)
    }
  }
  var time = '' + parseInt(secondTime) + '秒'
  if (minuteTime > 0) {
    time = '' + parseInt(minuteTime) + '分' + time
  }
  if (hourTime > 0) {
    time = '' + parseInt(hourTime) + '小时' + time
  }
  return time
}

function compare(a, b) {
  const Mapping = {
    alpha: 1,
    beta: 2,
    rc: 3,
    undefined: 4,
  }
  let regExp = new RegExp(
    '(?<major>([0-9])+).(?<minor>([0-9])+).(?<patch>([0-9])+)(-(?<miniPatch>alpha|beta|rc))?(.(?<number>([0-9])+))*'
  )
  try {
    let xGroup = regExp.exec(a).groups
    let yGroup = regExp.exec(b).groups
    return (
      xGroup.major - yGroup.major ||
      xGroup.minor - yGroup.minor ||
      xGroup.patch - yGroup.patch ||
      Mapping[xGroup.miniPatch] - Mapping[yGroup.miniPatch] ||
      (xGroup.number || 0) - (yGroup.number || 0)
    )
  } catch (e) {
    throw new Error('错误的正则表达式' + e)
  }
}

function getValue(obj, path) {
  let arr = path.split('.')
  for (let i = 0; i < arr.length; i++) {
    var reg = /([a-zA-Z]+)\[([0-9]+)\]/g
    reg.test(arr[i])
    console.log(reg.$1)
    console.log(reg.$2)
  }
}

const object = { a: [{ b: { c: 3 } }] } // path: 'a[0].b.c'
const array = [{ a: { b: [1] } }] // path: '[0].a.b[0]'

// 输出
console.log(getValue(object, 'a[0].b.c', 0)) // 输出3
// console.log(getValue(array, '[0].a.b[0]', 12)) // 输出 1
// console.log(getValue(array, '[0].a.b[0].c', 12)) // 输出 12

/**
 
实现一个setter
setter(obj,'a.b.c.d',3)
console.log(obj.a.b.c.d) - 3
 */

let setter = function (content, key, value) {
  const keys = key.split('.')
  let len = keys.length
  var obj = content[keys[0]]
  for (let i = 1; i < len - 1; i++) {
    if (typeof obj[keys[i]] === 'object') {
      obj = obj[keys[i]]
    }
  }
  obj[keys[len - 1]] = value
}

let obj = {
  a: {
    b: {
      c: {
        d: 1,
      },
      bx: {
        y: 1,
      },
    },
  },
}
setter(obj, 'a.b.c.d', 3)
console.log(obj.a.b.c)
setter(obj, 'a.b.bx', 4)
console.log(obj.a.b)
