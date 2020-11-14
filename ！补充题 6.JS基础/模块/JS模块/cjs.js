// 内部变化就影响不到输出的mod.counter;
// mod.counter是一个原始类型的值，会被缓存，除非写成一个函数，才能得到内部变动后的值。
// 输出的counter属性实际上是一个取值器函数
var mod = require("./cjslib");

console.log(mod.counter); // 3

mod.incCounter();

console.log(mod.counter); // 3
