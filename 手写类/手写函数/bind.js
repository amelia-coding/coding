// fbound = fn.bind(this,args)
Function.prototype.myBind = function (thisArg) {
  if (typeof this !== "function") {
    return;
  }
  var _self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var fnBound = function () {
    // 检测 New,如果当前函数的this指向的是构造函数中的this 则判定为new 操作
    var _this = this instanceof _self ? this : thisArg;
    return _self.apply(
      _this,
      args.concat(Array.prototype.slice.call(arguments))
    );
  };
  // 为了完成 new 操作
  // 还需要做一件事情 执行原型 链接 （思考题，为什么？
  //fnBound.prototype = this.prototype; 不推荐，会更改原来的原型,推荐原型式继承
  var fNOP = function () {};
  if (this.prototype) {
    // 当执行Function.prototype.bind()时, this为Function.prototype
    // this.prototype(即Function.prototype.prototype)为undefined
    fNOP.prototype = this.prototype;
  }
  // 下行的代码使fBound.prototype是fNOP的实例,因此
  // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,
  // 新对象的__proto__就是fNOP的实例
  fnBound.prototype = new fNOP();
  return fnBound;
};
