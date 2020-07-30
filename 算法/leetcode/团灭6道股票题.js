/*

https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/yi-ge-fang-fa-tuan-mie-6-dao-gu-piao-wen-ti-by-l-3/

for 状态1 in 状态1的所有取值：
    for 状态2 in 状态2的所有取值：
        for ...
            dp[状态1][状态2][...] = 择优(选择1，选择2...)

dp[i][k][0 or 1]
0 <= i <= n-1, 1 <= k <= K
n 为天数，大 K 为最多交易数,1代表持有股票
此问题共 n × K × 2 种状态，全部穷举就能搞定。

for 0 <= i < n:
    for 1 <= k <= K:
        for s in {0, 1}:
            dp[i][k][s] = max(buy, sell, rest)

dp[2][3][0] 的含义：今天是第二天，我现在手上没有持有股票，至今最多进行 3 次交易

dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
              max(   选择 rest  ,             选择 sell      )

解释：今天我没有持有股票，有两种可能：
要么是我昨天就没有持有，然后今天选择 rest，所以我今天还是没有持有；
要么是我昨天持有股票，但是今天我 sell 了，所以我今天没有持有股票了。

dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
              max(   选择 rest  ,           选择 buy         )

解释：今天我持有着股票，有两种可能：
要么我昨天就持有着股票，然后今天选择 rest，所以我今天还持有着股票；
要么我昨天本没有持有，但今天我选择 buy，所以今天我就持有股票了。

base case：
dp[-1][k][0] = dp[i][0][0] = 0
dp[-1][k][1] = dp[i][0][1] = -infinity

状态转移方程：
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])

*/

/*

解题思想也是看了一个方法团灭 6 道股票问题后得到的；js相对来说代码更简洁

核心代码
    for (let i = 1; i < n; i++){
        //卖出时利润：求最大值（上次交易卖出时利润，本次交易卖出时利润）
        profit_out = Math.max(profit_out, profit_in + prices[i]);
        //买入时利润：求最大值（上次买入时利润，本次买入时利润）
        profit_in = Math.max(profit_in,  - prices[i]);
    }
解释下：

n 即为 n天的股票价格中的n；
Math.max(profit_out, profit_in + prices[i])本句中 profit_out:上一次卖出时的利润；
 profit_in + prices[i]：本次卖出时的利润，上次买入时的利润+当天的股票价格即为本次卖出时的利润
Math.max(profit_in, - prices[i])中 profit_in: 上次买入时的利润；-prices[i]: 本次买入时利润，和初始值一样，该示例是一次交易，
如果是多次交易的话，应该是：profit_out - prices[i]即本次买入时的利润=上次卖出时的利润-当前价格；

买卖股票的最佳时机 I

var maxProfit = function(prices) {
    let n = prices.length;
    let profit_out = 0;
    let profit_in = -prices[0];
    for (let i = 1; i < n; i++){
        profit_out = Math.max(profit_out, profit_in + prices[i]);
        //k=1时，及交易次数为1时， 买入时的利润都是 -prices[i]
        profit_in = Math.max(profit_in,  - prices[i]);
    }
    return profit_out;
};
买卖股票的最佳时机 II


var maxProfit = function(prices) {
    let profit_out = 0, profit_in = 0 -prices[0];
    let n = prices.length;
    for (let i = 1; i < n; i++){
        profit_out = Math.max(profit_out, profit_in + prices[i]);
        profit_in = Math.max(profit_in, profit_out - prices[i]);
    }
    return profit_out;
};
买卖股票的最佳时机 III


var maxProfit = function(prices) {
    //第一次 买入， 卖出的利润
    let profit_1_in = -prices[0], profit_1_out = 0;
    //继第一次之后，第二次买入卖出的利润
    let profit_2_in = -prices[0], profit_2_out = 0;
    let n = prices.length;
    for (let i = 1; i < n; i++){
        profit_2_out = Math.max(profit_2_out, profit_2_in + prices[i]);
        //第二次买入后的利润， 第一次卖出的利润 - prices[i]
        profit_2_in = Math.max(profit_2_in, profit_1_out - prices[i]);
        profit_1_out = Math.max(profit_1_out, profit_1_in + prices[i]);
        //第一次买入后，利润为 -prices[i]
        profit_1_in = Math.max(profit_1_in, -prices[i]);
    }
    return profit_2_out;
};
最佳买卖股票时机含冷冻期


var maxProfit = function(prices) {
    let n = prices.length;
    let profit_in = 0 - prices[0];
    let profit_out = 0;
    //冻结时的利润
    let profit_freeze = 0;
    for (let i = 1; i < n; i++){
        let temp = profit_out;
        profit_out = Math.max(profit_out, profit_in + prices[i]);
        //买入时的利润= 上次冻结时的利润 - 当天价格
        profit_in = Math.max(profit_in, profit_freeze - prices[i]);
        //冻结时的利润 = 上次卖出时的利润
        profit_freeze = temp;
    }
    return profit_out;
};
买卖股票的最佳时机 IV
本题代码可以说是比较简洁易读了，第一个for循环，初始化k次交易买入和卖出时的利润，我把每次交易买入，卖出时的利润放在一个对象中，这样就把三维变成一维了；让我有这种思路是来自于k=2的那道题；也可以阅读一个方法团灭 6 道股票问题中k=2那道题的解释；


var maxProfit = function(k, prices) {
    let n = prices.length;
    if (k > n / 2) {
        k = Math.floor(n/2);  //这样也可以，但其实增加了时间复杂度和内存消耗
        // return maxProfit_k_infinity(prices); //也可以
    }
    let profit = new Array(k);
    //初始化买入卖出时的利润
    for (let j = 0; j <= k; j++){
        profit[j] = {
            profit_in: -prices[0],
            profit_out: 0
        };
    }
    for (let i = 0; i < n; i++){
        for (let j = 1; j <= k; j++){
            profit[j] = {
                profit_out: Math.max(profit[j].profit_out, profit[j].profit_in + prices[i]), 
                profit_in: Math.max(profit[j].profit_in, profit[j-1].profit_out - prices[i])
            }
        }
    }
    return profit[k].profit_out;
};
买卖股票的最佳时机含手续费


var maxProfit = function(prices, fee) {
    //初始利润
    var profit_in = 0 - prices[0];
    var profit_out = 0;
    for (let i = 1; i < prices.length; i++){
        ////卖出： 当前买入状态时的利润 + 卖出的股票 - 手续费
        profit_out = Math.max(profit_out ,profit_in + prices[i] - fee); 
        //买入： 当前卖出时的利润 - 买进的股票
        profit_in = Math.max(profit_in ,profit_out - prices[i]);     
    }
    return profit_out;
};
*/
