/**
 * 1. set/get
 */
var person = {
  _name: "",
  get name() {
    return this._name;
  },
  set name(n) {
    this._name = n;
  },
};

// 测试
person.name; // ''
person.name = "john"; // 'john', 此时 person._name 也变成了 'john'

/**
 * 2. Object.defineProperty
 */
var person = {};
var name = "";
Object.defineProperty(person, "name", {
  configurable: true,
  enumerable: true,
  get: function () {
    return name;
  },
  set: function (n) {
    name = n;
  },
});

// 测试
person.name; // undefind
person.name = "john"; // 'john'，此时全局的 name 也变成了 'john'

/**
 * 当然，通常用 setter 和 getter 来实现私有变量
 */
var person = (function () {
  var _name = "";
  var _age = 0;
  var obj = {};
  Object.defineProperty(obj, "name", {
    configurable: true,
    enumerable: true,
    get: function () {
      return _name;
    },
    set: function (n) {
      _name = n;
    },
  });
  Object.defineProperty(obj, "age", {
    configurable: true,
    enumerable: true,
    get: function () {
      return _age;
    },
    set: function (a) {
      _age = a;
    },
  });
  return obj;
})();
