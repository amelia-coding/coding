/*
 * @Description: js面向对象设计之function类
 * @Author: du.j
 * @Date: 2020-06-30 15:20:40
 * @LastEditors: du.j
 * @LastEditTime: 2020-06-30 16:01:09
 */
function A() {
  var _name = 1; //我是私有属性，实例无法直接读写的属性
  this.name = 2; //我是实例公有属性
  this.f1 = function () {
    console.log("我是公有方法");
    console.log(_name, this.name); //1，2
    f2();
  };
  function f2() {
    console.log("我是私有方法");
    console.log(_name, this.name); //1，undefined
  }
}

A.staticValue = 3; //我是归属类的静态属性
A.f3 = function () {
  console.log("我是归属类的静态方法");
};
A.prototype.f4 = function () {
  console.log("我是原型上的方法");
};

new A().f1();

var Class = (function () {
  var pValue = ""; /*实例无法直接读写的属性*/
  function hello() {
    console.log("欢迎来到nDos的博客");
  }
  function Class(val, pVal) {
    if (this.constructor.name !== "Class") {
      throw new Error("类只能被实例化");
    }
    if (!new.target || new.target.name !== "Class") {
      throw new Error("类只能被实例化");
    }
    this.val = val; /*实例可直接读写的属性*/
    pValue = pVal;
  }
  Class.prototype.printVal = function () {
    var _this = this;
    /*尽管此处并不会出现this丢失的情况，但推荐总是这么做*/
    console.log(_this.val);
  };
  Class.prototype.getpVal = function () {
    console.log(pValue);
    return pValue;
  };
  Class.prototype.setpVal = function (v) {
    pValue = v;
    return this;
  };
  Class.prototype.sayHello = function () {
    hello();
    return this;
  };
  Class.prototype.nDos = {
    name: "nDos",
    sayHello: hello,
  };
  Class.prototype.noChangeVal = "实例拿我没办法";
  Class.staticVal = "Class的静态属性";
  Class.staticMethod = function () {
    console.log("Class的静态方法");
  };
  return Class;
})();
