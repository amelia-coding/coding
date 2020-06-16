/*
 * @Author: your name
 * @Date: 2020-06-15 15:08:33
 * @LastEditTime: 2020-06-16 13:44:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coding\module\b.js
 */
var counter = 3;

function incCounter() {
  counter++;
}

// 内部变化就影响不到输出的mod.counter;
// mod.counter是一个原始类型的值，会被缓存，除非写成一个函数，才能得到内部变动后的值。
module.exports = {
  counter: counter,
  incCounter: incCounter,
};

//输出的counter属性实际上是一个取值器函数
module.exports = {
  get counter() {
    return counter;
  },

  incCounter: incCounter,
};
