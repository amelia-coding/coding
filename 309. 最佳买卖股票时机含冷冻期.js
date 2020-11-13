/*
给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
示例:

输入: [1,2,3,0,2]
输出: 3 
解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length;
  let profit_in = 0 - prices[0];
  let profit_out = 0;
  //冻结时的利润
  let profit_freeze = 0;
  for (let i = 1; i < n; i++) {
    let temp = profit_out;
    profit_out = Math.max(profit_out, profit_in + prices[i]);
    //买入时的利润= 上次冻结时的利润 - 当天价格
    profit_in = Math.max(profit_in, profit_freeze - prices[i]);
    //冻结时的利润 = 上次卖出时的利润
    profit_freeze = temp;
  }
  return profit_out;
};
