

class Event {
  constructor() {
    this._event = {}
    this.index = 0
    this.map = new Map()
  }
  subcribe(type, fn) {
    console.log(this._event)
    if(this._event[type]){
      this._event[type].push(fn)
    } else{
      this._event[type]=[fn]
    }
    let that = this
    let sub = {
      release(){
        let _index = that.map.get(this)
        that._event[type].splice(_index,1)
      }
    }
    this.map.set(sub,this.index)
    this.index++
    return sub
  }
  emit(type, ...args) {
   (this._event[type] || []).forEach((fn) => fn.apply(this, ...args))
  }
}

let myEvent = new Event()
let sub1 = myEvent.subcribe('click', () => console.log('i am sub1'))
let sub2 = myEvent.subcribe('click', () => console.log('i am sub2'))

myEvent.emit('click')
sub1.release()
myEvent.emit('click')