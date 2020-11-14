const isComplexDataType = (obj) =>
  (typeof obj === "object" || typeof obj === "function") && obj !== null;
const deepClone = function (obj, hash = new WeakMap()) {
  if (hash.has(obj)) return hash.get(obj);
  let type = [Date, RegExp, Set, Map, WeakMap, WeakSet];
  if (type.includes(obj.constructor)) return new obj.constructor(obj);
  //如果成环了,参数obj = obj.loop = 最初的obj 会在WeakMap中找到第一次放入的obj提前返回第一次放入WeakMap的cloneObj
  let allDesc = Object.getOwnPropertyDescriptors(obj); //遍历传入参数所有键的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc); //继承原型
  hash.set(obj, cloneObj);
  for (let key of Reflect.ownKeys(obj)) {
    //Reflect.ownKeys(obj)可以拷贝不可枚举属性和符号类型
    // 如果值是引用类型(非函数)则递归调用deepClone
    cloneObj[key] =
      isComplexDataType(obj[key]) && typeof obj[key] !== "function"
        ? deepClone(obj[key], hash)
        : obj[key];
  }
  return cloneObj;
};

let obj = {
  bigInt: BigInt(12312),
  set: new Set([2]),
  map: new Map([
    ["a", 22],
    ["b", 33],
  ]),
  num: 0,
  str: "",
  boolean: true,
  unf: undefined,
  nul: null,
  obj: {
    name: "我是一个对象",
    id: 1,
  },
  arr: [0, 1, 2],
  func: function () {
    console.log("我是一个函数");
  },
  date: new Date(0),
  reg: new RegExp("/我是一个正则/ig"),
  [Symbol("1")]: 1,
};

Object.defineProperty(obj, "innumerable", {
  enumerable: false,
  value: "不可枚举属性",
});

obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj));
obj.loop = obj;
let cloneObj = deepClone(obj);
console.log("obj", obj);
console.log("cloneObj", cloneObj);

for (let key of Object.keys(cloneObj)) {
  if (
    typeof cloneObj[key] === "object" ||
    typeof cloneObj[key] === "function"
  ) {
    console.log(`${key}相同吗？ `, cloneObj[key] === obj[key]);
  }
}
