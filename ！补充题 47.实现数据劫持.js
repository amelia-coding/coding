let obj = {
  key_1: 1,
  key_2: 2,
}

function fnc(key, value) {
  console.log('当前操作key值的变化', key, value)
}

bindData(obj, fnc)

function bindData(obj, func) {
  Object.keys(obj).forEach(key=>{
    Object.defineProperty(obj, key, {
      get: function () {
        console.log('get!')
      },
      set: function (value) {
        console.log('set!')
        func(key,value)
      },
    })
  })
}

obj.key_1 = 2
