// EventEmitter node的事件驱动

// - EventEmitter
// - addListener/on
// - once
// - removeListener/off
// - emit
// - prependListener

// 实现

//1. Events模块只有一个EventEmitter类，首先定义类的基本结构
class Events {
  constructor() {
    this.events = {};
  }
  /**
   * 事件监听
   * @param {*} type        监听的事件类型
   * @param {*} listener    回调函数
   */
  on(type, listener) {
    if (this.events[type]) {
      this.events[type].push(listener);
    } else {
      this.events[type] = [listener];
    }
  }

  /**
   * 事件监听，但是只执行一次
   * @param {*} type        监听的事件类型
   * @param {*} listener    回调函数
   */
  once(type, listener) {
    const wraper = (...rest) => {
      listener.apply(this, rest);
      this.removeListener(type, wraper);
    };
    this.on(type, wrapper);
  }

  /**
   * 事件触发
   * @param {*} type        要触发的事件类型
   * @param  {...any} args  接收到的若干个参数，这个参数会作为参数被传递到对应事件的回调函数中
   */
  emit(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach((listener) => {
        listener.call(this, ...args);
      });
    }
  }

  /**
   * 删除指定事件中的监听函数
   * @param {*} type      对应的事件
   * @param {*} listener  要删除的监听函数
   */
  removeListener(type, listener) {
    if (this.events[type]) {
      this.events[type] = this.events[type].filter((l) => l !== listener);
    }
  }
}

module.exports = Events;
