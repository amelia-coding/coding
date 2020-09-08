/*
deepFlat
[].reduce(fn,iniVal)
*/
Array.prototype.deepFlat = function () {
  return this.reduce(
    (pre, curr) =>
      Array.isArray(curr) ? pre.concat(curr.deepFlat()) : pre.concat(curr),
    []
  );
};

console.log([1, 2, [3, [4]]].deepFlat());

Array.prototype.dephFlat = function (deph) {
  deph--;
  console.log(deph);
  return this.reduce(
    (pre, curr) =>
      Array.isArray(curr) && deph > 0
        ? pre.concat(curr.dephFlat(deph))
        : pre.concat(curr),
    []
  );
};

console.log([1, 2, [3, [4, [5]]], [6, [7, [8, [9]]]]].dephFlat(2));
