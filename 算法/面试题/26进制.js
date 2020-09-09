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

function convert(num) {
  let chars = "@ABCDEFGHIJKLMNOPQRSTUVWSY";
  let str = "";
  if (num % 26 === 0) {
    while (num) {
      str = num % 26 === 0 ? "Z" : chars[(num % 26) - 1] + str;
      num = Math.floor(num / 26);
    }
  } else {
    while (num) {
      str = chars[num % 26] + str;
      num = Math.floor(num / 26);
    }
  }
  console.log(str.replace("@", ""));
}
convert(1);
convert(26);
convert(52);
convert(54);
convert(54);
