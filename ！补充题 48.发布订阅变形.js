class Event {
  constructor() {
    this._event = {}
    this.index = 0
    this.map = new Map() //保存订阅的对象
  }
  subcribe(type, fn) {
    if (this._event[type]) {
      this._event[type].push(fn)
    } else {
      this._event[type] = [fn]
    }
    let that = this //用于保存event对象
    let sub = {
      release() {
        let _index = that.map.get(this) //当前this指向sub
        that._event[type].splice(_index, 1) //用于删除
      },
    }
    this.map.set(sub, this.index)
    this.index++
    return sub
  }
  emit(type, ...args) {
    if (this._event[type]) {
      this._event[type].forEach((fn) => fn.apply(this, ...args))
    }
  }
}

let myEvent = new Event()
let sub1 = myEvent.subcribe('click', () => console.log('i am sub1'))
let sub2 = myEvent.subcribe('click', () => console.log('i am sub2'))

myEvent.emit('click')
sub1.release()
myEvent.emit('click')
