/*
arr.map(fn,this)
*/

Array.prototype.myMap = function (fn, thisArg) {
  let arr = this;
  let res = [];
  for (let i in arr) {
    if (this.hasOwnProperty(i)) {
      res.push(fn.call(thisArg, arr[i], i, arr));
    }
  }
  return res;
};

console.log([1, 2, 3].myMap((a) => a * a));

Array.prototype.myMap2 = function (fn, thisArg) {
  if (typeof fn !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  let res = [];
  this.reduce((before, current, index, arr) => {
    res.push(fn.call(thisArg, current, index, arr));
  }, null);
  return res; //返回新数组
};
console.log([1, 2, 3].myMap2((a) => a * a));
