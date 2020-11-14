/*
1. reduce是数组原型上的一个方法
2. 初始值inival的处理，有iniVal时，数组从0开始
*/
Array.prototype.myReduce = function (fn, iniVal) {
  let startIndex = iniVal ? 0 : 1;
  let target = iniVal || this[0];
  for (let i = startIndex; i < this.length; i++) {
    target = fn(target, this[i], i, this);
  }
  return target;
};

//测试
console.log([1, 2, 3, 4].myReduce((a, b) => a + b, 0));
