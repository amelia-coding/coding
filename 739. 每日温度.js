/*
739. 每日温度
请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
*/

/**
 * 思路：从后往前，找到第一个比当前元素大的值
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let stack = [],
    ans = [];
  for (let i = T.length - 1; i >= 0; i--) {
    while (stack.length > 0 && T[i] >= stack[stack.length - 1][0]) {
      stack.pop();
    }
    ans.push(stack[stack.length - 1] ? stack[stack.length - 1][1] - i : 0);
    stack.push([T[i], i]); //保留元素和元素下标，下标用于计算间隔的天数
  }
  return ans.reverse();
};
