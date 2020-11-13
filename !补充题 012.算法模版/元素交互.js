// /**
// 交换元素
// **/

// /**
// 借助中间变量
// **/
// function swap(array, i, j) {
//   const temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }

// /**
// 加减法,只能是数字
// **/
function swapForNum(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}

function swapForNum(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = b ^ a;
  return [a, b];
}

console.log(swapForNum(4, 10));
