const PENDING = 'pending'; // 等待
const FULFILLED = 'fulfilled'; // 成功
const REJECTED = 'rejected'; // 失败

class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject)
    } catch (e) {
      this.reject(e);
    }
  }
  // promsie 状态 
  status = PENDING;
  // 成功之后的值
  value = undefined;
  // 失败后的原因
  reason = undefined;
  // 成功回调
  successCallback = [];
  // 失败回调
  failCallback = [];

  resolve = value => {
    // 如果状态不是等待 阻止程序向下执行
    if (this.status !== PENDING) return;
    // 将状态更改为成功
    this.status = FULFILLED;
    // 保存成功之后的值
    this.value = value;
    // 判断成功回调是否存在 如果存在 调用
    // this.successCallback && this.successCallback(this.value);
    while (this.successCallback.length) this.successCallback.shift()()
  }
  reject = reason => {
    // 如果状态不是等待 阻止程序向下执行
    if (this.status !== PENDING) return;
    // 将状态更改为失败
    this.status = REJECTED;
    // 保存失败后的原因
    this.reason = reason;
    // 判断失败回调是否存在 如果存在 调用
    // this.failCallback && this.failCallback(this.reason);
    while (this.failCallback.length) this.failCallback.shift()()
  }
  then(successCallback, failCallback) {
    // 参数可选
    successCallback = successCallback ? successCallback : value => value;
    // 参数可选
    failCallback = failCallback ? failCallback : reason => { throw reason };
    let promsie2 = new MyPromise((resolve, reject) => {
      // 判断状态
      if (this.status === FULFILLED) {
        //这里使用settimeout是因为如果是同步的，是拿不到promsie2的
        setTimeout(() => {
          try {
            let x = successCallback(this.value);
            // 判断 x 的值是普通值还是promise对象
            // 如果是普通值 直接调用resolve 
            // 如果是promise对象 查看promsie对象返回的结果 
            // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
            resolvePromise(promsie2, x, resolve, reject)
          } catch (e) {
            reject(e);
          }
        }, 0)
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = failCallback(this.reason);
            // 判断 x 的值是普通值还是promise对象
            // 如果是普通值 直接调用resolve 
            // 如果是promise对象 查看promsie对象返回的结果 
            // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
            resolvePromise(promsie2, x, resolve, reject)
          } catch (e) {
            reject(e);
          }
        }, 0)
      } else {
        // 等待
        // 将成功回调和失败回调存储起来
        this.successCallback.push(() => {
          setTimeout(() => {
            try {
              let x = successCallback(this.value);
              // 判断 x 的值是普通值还是promise对象
              // 如果是普通值 直接调用resolve 
              // 如果是promise对象 查看promsie对象返回的结果 
              // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
              resolvePromise(promsie2, x, resolve, reject)
            } catch (e) {
              reject(e);
            }
          }, 0)
        });
        this.failCallback.push(() => {
          setTimeout(() => {
            try {
              let x = failCallback(this.reason);
              // 判断 x 的值是普通值还是promise对象
              // 如果是普通值 直接调用resolve 
              // 如果是promise对象 查看promsie对象返回的结果 
              // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
              resolvePromise(promsie2, x, resolve, reject)
            } catch (e) {
              reject(e);
            }
          }, 0)
        });
      }
    });
    return promsie2;
  }
  finally(callback) {
    return this.then(value => {
      return MyPromise.resolve(callback()).then(() => value);
    }, reason => {
      return MyPromise.resolve(callback()).then(() => { throw reason })
    })
  }
  catch(failCallback) {
    return this.then(undefined, failCallback)
  }
  static all(array) {
    let result = [];
    let index = 0;
    return new MyPromise((resolve, reject) => {
      function addData(key, value) {
        result[key] = value;
        index++;
        if (index === array.length) {
          resolve(result);
        }
      }
      for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (current instanceof MyPromise) {
          // promise 对象
          current.then(value => addData(i, value), reason => reject(reason))
        } else {
          // 普通值
          addData(i, array[i]);
        }
      }
    })
  }
  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise(resolve => resolve(value));
  }
}

function resolvePromise(promsie2, x, resolve, reject) {
  if (promsie2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (x instanceof MyPromise) {
    // promise 对象
    // x.then(value => resolve(value), reason => reject(reason));
    x.then(resolve, reject);
  } else {
    // 普通值
    resolve(x);
  }
}

module.exports = MyPromise;