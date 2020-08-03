/*

372. 超级次方
你的任务是计算 ab 对 1337 取模，a 是一个正整数，b 是一个非常大的正整数且会以数组形式给出。

示例 1:

输入: a = 2, b = [3]
输出: 8
示例 2:

输入: a = 2, b = [1,0]
输出: 1024
*/

/**
 * a[1,2,3,4] = a[4] * a[1,2,3,0] = a[4] * (a[1,2,3])[10]
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
  if (b.length === 0) return 1;
  let last = b.splice(-1);
  let part1 = myPow(a, last[0]);
  let part2 = myPow(superPow(a, b), 10);
  return (part1 * part2) % base;
};

let base = 1337;
const myPow = function (a, b) {
  if (!b || b === 0) return 1;
  a = a % base;
  if (b % 2 == 1) {
    return (a * myPow(a, b - 1)) % base;
  } else {
    return (myPow(a, b / 2) * myPow(a, b / 2)) % base;
  }
};
