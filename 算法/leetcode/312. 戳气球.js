/*

312. 戳气球
有 n 个气球，编号为0 到 n-1，每个气球上都标有一个数字，这些数字存在数组 nums 中。

现在要求你戳破所有的气球。如果你戳破气球 i ，就可以获得 nums[left] * nums[i] * nums[right] 个硬币。 这里的 left 和 right 代表和 i 相邻的两个气球的序号。注意当你戳破了气球 i 后，气球 left 和气球 right 就变成了相邻的气球。

求所能获得硬币的最大数量。

说明:

你可以假设 nums[-1] = nums[n] = 1，但注意它们不是真实存在的所以并不能被戳破。
0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
示例:

输入: [3,1,5,8]
输出: 167 
解释: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
     coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
*/

/**
 * 1、构建虚拟气球
 * 2、构建（n+2）（n+2）的DP表，问题变成在一排气球 points 中，请你戳破气球 0 和气球 n+1 之间的所有气球（不包括 0 和 n+1），
 * 使得最终只剩下气球 0 和气球 n+1 两个气球，最多能够得到多少分？
 * 3、dp[i][j] = x 表示，戳破气球 i 和气球 j 之间（开区间，不包括 i 和 j）的所有气球，可以获得的最高分数为 x。
 * dp[i][j] = dp[i][k] + points[i]*points[k]*points[j] + dp[k][j]
 * 那么，对于一组给定的 i 和 j，我们只要穷举 i < k < j 的所有气球 k
 * 最终dp[0][n+1]
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  let n = nums.length;

  // 添加两侧的虚拟气球
  let points = [1, ...nums, 1];

  let dp = Array.from(Array(n + 2), () => Array(n + 2).fill(0));

  // 开始状态转移
  // i 应该从下往上
  for (let i = n; i >= 0; i--) {
    // j 应该从左往右
    for (let j = i + 1; j < n + 2; j++) {
      // 最后戳破的气球是哪个？
      for (let k = i + 1; k < j; k++) {
        // 择优做选择
        dp[i][j] = Math.max(
          dp[i][j],
          points[i] * points[k] * points[j] + dp[i][k] + dp[k][j]
        );
      }
    }
  }
  return dp[0][n + 1];
};
