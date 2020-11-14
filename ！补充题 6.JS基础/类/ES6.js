/*
 * @Author: du.j
 * @Date: 2020-06-30 15:25:33
 * @LastEditors: du.j
 * @LastEditTime: 2020-06-30 16:15:49
 * @Description: file content
 */
class A {
  age = 18; //实例属性新写法, 等同于 this.age = 18
  static book = "我是类的static属性";
  static f() {
    console.log("我是类的static方法");
  }
  constructor() {
    this.name = "dj"; //我是公有变量
    this.f1 = function () {
      console.log("我是实例上的f1方法");
    };
  }
  f2() {
    console.log("我是原型上的f2方法");
  }
  f1() {
    console.log("我是原型上的f1方法");
  }
  //对实例属性设置取值函数（getter）和存值函数（setter）
  get name() {
    console.log("getter");
    return this._name;
  }
  set name(name) {
    console.log("setter");
    this._name = name;
  }
}

// A.prototype.f2();
// new A().f1();
// console.log(A.book);
// console.log(A.f());
const a = new A();
console.log(a.name);
// a.name = "dd";
// console.log(a.name);
