/*
123. 买卖股票的最佳时机 III
给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1:

输入: [3,3,5,0,0,3,1,4]
输出: 6
解释: 在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
     随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
示例 2:

输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。   
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。   
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。

*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //第一次 买入， 卖出的利润
  let profit_1_in = -prices[0],
    profit_1_out = 0;
  //继第一次之后，第二次买入卖出的利润
  let profit_2_in = -prices[0],
    profit_2_out = 0;
  let n = prices.length;
  for (let i = 1; i < n; i++) {
    profit_2_out = Math.max(profit_2_out, profit_2_in + prices[i]);
    //第二次买入后的利润， 第一次卖出的利润 - prices[i]
    profit_2_in = Math.max(profit_2_in, profit_1_out - prices[i]);
    profit_1_out = Math.max(profit_1_out, profit_1_in + prices[i]);
    //第一次买入后，利润为 -prices[i]
    profit_1_in = Math.max(profit_1_in, -prices[i]);
  }
  return profit_2_out;
};
