// 编写一个简单的事件监听处理器
// 1. 具备 on 方法绑定事件
// 2. 具备 off 方法解绑事件
// 3. 注意函数的调用方式
class EventEmitter {
  constructor() {
    this.event = {}
  }

  on(type, fn) {
    let types = [type]
    if (type === '*') {
      types = Object.keys(this.event)
    }
    types.forEach((type) => {
      if (this.event[type]) {
        this.event[type].push(fn)
      } else {
        this.event[type] = [fn]
      }
    })
  }

  off(type, fn) {
    this.event[type] = this.event[type].filter((_fn) => _fn !== fn)
  }

  emit(type, ...args) {
    this.event[type] && this.event[type].forEach((fn) => fn.call(this, ...args))
  }
}

var emitter = new EventEmitter()

emitter.on('foo', function (e) {
  console.log('foo event: ', e)
})

emitter.on('*', function (e, type) {
  console.log('some event: ', e, type)
})

function onBar(e) {
  console.log('bar event: ', e)
}

emitter.emit('foo', { name: 'John' })
