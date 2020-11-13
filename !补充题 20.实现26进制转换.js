/*
// 完成一个转换函数，将数字转成对应的大写字母，满足下面的对应关系
// 1 => A
// 2 => B
// 3 => C
// ...
// 26 => Z
// 27 => AA
// 28 => AB
// 29 => AC
// ...
// 52 => AZ
// 53 => BA
// 54 => BB
// 26*26 + 26 => ZZ
// 1*26*26 + 1 * 26 + 1 => AAA
// // 实现下方函数
// function convert() {
//   // TODO
// }

// // 测试代码：
// const output1 = convert(1);
// console.log(output1); // A

// const output2 = convert(26);
// console.log(output2); // Z

// const output3 = convert(53);
// console.log(output3); // BA
*/

var convertToTitle = function (n) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let res = [];
  while (n) {
    n--; //重点先减一，26进制代表0-25
    res.unshift(letters[n % 26]);//取余数
    n = (n / 26) | 0;//计算下一位
  }
  return res.toString();
};

convertToTitle(1 * 26 * 26 + 2 * 26 + 2);
convertToTitle(1 * 26 + 1);
convertToTitle(52);
