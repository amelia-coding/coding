/*
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

 

示例 1:

输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

*/

/**
 *
 * 题解：我们需要考虑到紧跟谷的每一个峰值以最大化利润
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let low = prices[0];
  let high = prices[0];
  let profit = 0;
  let len = prices.length;
  for (let i = 0; i < len; i++) {
    while (i < len && prices[i] >= prices[i + 1]) i++;
    low = prices[i];
    while (i < len && prices[i] < prices[i + 1]) i++;
    high = prices[i];
    profit += high - low;
  }
  return profit;
};
