//抹平数组
// var arr = [1, 2, [3], [4, 5, [6]]];

// function foo(arr) {
//   return arr.reduce((target, current) => {
//     return target.concat(Array.isArray(current) ? foo(current) : current);
//   }, []);
// }
// console.log(foo(arr));

var obj = {
  a: {
    b: {
      c: {
        d: 1,
      },
    },
  },
  b: {},
  nn: 2,
  arr: [1, 2, 3],
};

Object.flatten = function (obj) {
  var result = {};
  function recurse(src, prop) {
    var toString = Object.prototype.toString;
    if (toString.call(src) == "[object Object]") {
      var isEmpty = true;
      for (var p in src) {
        isEmpty = false;
        recurse(src[p], prop ? prop + "." + p : p);
      }
      if (isEmpty && prop) {
        result[prop] = {};
      }
    } else if (toString.call(src) == "[object Array]") {
      var len = src.length;
      if (len > 0) {
        src.forEach(function (item, index) {
          recurse(item, prop ? prop + "[" + index + "]" : index);
        });
      } else {
        result[prop] = [];
      }
    } else {
      result[prop] = src;
    }
  }
  recurse(obj, "");
  console.log(result);
  return result;
};

Object.unflatten = function (data) {
  if (Object(data) !== data || Array.isArray(data)) return data;
  var regex = /\.?([^.\[\]]+)|\[(\d+)\]/g,
    resultholder = {};
  for (var p in data) {
    var cur = resultholder,
      prop = "",
      m;
    while ((m = regex.exec(p))) {
      cur = cur[prop] || (cur[prop] = m[2] ? [] : {});
      prop = m[2] || m[1];
    }
    cur[prop] = data[p];
  }
  return resultholder[""] || resultholder;
};

Object.unflatten2 = function (data) {
  if (Object(data) !== data || Array.isArray(data)) return data;
  var result = {},
    cur,
    prop,
    idx,
    last,
    temp;
  for (var p in data) {
    (cur = result), (prop = ""), (last = 0);
    do {
      idx = p.indexOf(".", last);
      temp = p.substring(last, idx !== -1 ? idx : undefined);
      cur = cur[prop] || (cur[prop] = !isNaN(parseInt(temp)) ? [] : {});
      prop = temp;
      last = idx + 1;
    } while (idx >= 0);
    cur[prop] = data[p];
  }
  return result[""];
};

Object.flatten(obj);
