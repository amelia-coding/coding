/**
1、请把俩个数组 [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, ...

考：codePointAt和sort,codePointAt能够正确处理 4 个字节储存的字符，返回一个字符的码点
JavaScript 内部，
字符以 UTF-16 的格式储存，
每个字符固定为2个字节。
对于那些需要4个字节储存的字符（Unicode 码点大于0xFFFF的字符），
JavaScript 会认为它们是两个字符

**/


let arr1 = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"];
let arr2 = ["A", "B", "C", "D"];
console.log(
  [...arr1, ...arr2]
  .sort(
    (v2, v1) => (
      v2.codePointAt(0) - v1.codePointAt(0) ||
      v1.length - v2.length ||
      v2.codePointAt(1) - v1.codePointAt(1)
    )
  )
);