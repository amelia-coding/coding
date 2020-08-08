/*
给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。

注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1:

输入: [2,4,1], k = 2
输出: 2
解释: 在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
示例 2:

输入: [3,2,6,5,0,3], k = 2
输出: 7
解释: 在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
     随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。

*/

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  let n = prices.length;
  if (k > n / 2) {
    k = Math.floor(n / 2); //这样也可以，但其实增加了时间复杂度和内存消耗
    // return maxProfit_k_infinity(prices); //也可以
  }
  let profit = new Array(k);
  //初始化买入卖出时的利润,不管当前最多交易几次，初始第一天的买入和卖出利润都是-prices[0]和0
  for (let j = 0; j <= k; j++) {
    profit[j] = {
      profit_in: -prices[0],
      profit_out: 0,
    };
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      profit[j] = {
        profit_out: Math.max(
          profit[j].profit_out,
          profit[j].profit_in + prices[i]
        ),
        profit_in: Math.max(
          profit[j].profit_in,
          profit[j - 1].profit_out - prices[i]
        ),
      };
    }
  }
  return profit[k].profit_out;
};
