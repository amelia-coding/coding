/**
 * 
1. 在单个promise中对失败的promise请求进行catch处理
2. 把reject操作替换成resolve(new Error(''))
3. 引入promise.allSettled会正确返回每个promise的结果
4. 引入第三方库promise-transaction
 */

//方案一：将reject操作变成resovle
function getData(api) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var ok = Math.random() > 0.5 // 模拟请求成功或失败
      if (ok) {
        resolve('get ' + api + ' data')
      } else {
        // reject(api + ' fail')   // 如果调用reject就会使Promise.all()进行失败回调
        resolve('error') // Promise all的时候做判断  如果是error则说明这条请求失败
      }
    }, 2000)
  })
}

//方案二：对每个promise做catch处理
function getData2(api) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var ok = Math.random() > 0.5 // 模拟请求成功或失败
      if (ok) {
        resolve('get ' + api + ' data')
      } else {
        // reject(api + ' fail')   // 如果调用reject就会使Promise.all()进行失败回调
        reject('error') // Promise all的时候做判断  如果是error则说明这条请求失败
      }
    }, 2000)
  }).catch((err) => err)
}

function getDatas(arr) {
  var promises = arr.map((item) => getData2(item))
  return Promise.all(promises)
    .then((values) => {
      console.log('values', values)
    })
    .catch((error) => {
      console.log(error)
    })
}


getDatas(['./api1', './api2', './api3', './api4']).then(() => '请求结束')
