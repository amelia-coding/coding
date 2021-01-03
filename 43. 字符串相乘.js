/*
43. 字符串相乘（大数相乘）
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。

https://leetcode-cn.com/problems/multiply-strings/solution/gao-pin-mian-shi-xi-lie-zi-fu-chuan-cheng-fa-by-la/
        1 2 3
          4 5
      ----------
          1 5
        1 0
        5
        1 2
        8
      4
      --------
  0 0 5 5    3 5

*/

/**
 * 按位相乘，第i位和第j位相乘的结果正好是res[i+j]和res[i+j+1]
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let m = num1.length;
  let n = num2.length;
  if (num1 === "0" || num2 === "0") return "0";
  let res = new Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let x = (num1[i] - "0") * (num2[j] - "0");
      let sum = x + res[i + j + 1];
      console.log(i, j, x);
      res[i + j + 1] = Math.floor(sum % 10); //取余
      res[i + j] += Math.floor(sum / 10); //进位
    }
  }
  let i = 0;
  while (res[i] === 0) i++;
  return res.slice(i).join("");
};
