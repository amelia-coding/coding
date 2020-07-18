/**
 * 思路：
动态规划
下面介绍动态规划的做法，复杂度为 O(n)。
步骤 1：令状态 dp[i] 表示以 A[i] 作为末尾的连续序列的最大和（这里是说 A[i] 必须作为连续序列的末尾）。
若 dp[i−1]≤0 ，说明 dp[i−1] 对 dp[i] 产生负贡献，
即 dp[i-1] + nums[i] 还不如 nums[i]本身大。
当 dp[i - 1] > 0时：执行 dp[i] = dp[i-1] + nums[i]
当 dp[i−1]≤0 时：执行 dp[i] = nums[i]；
 * 
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length <= 0) return 0;
  let max = nums[0];
  let dp = [nums[0]];
  for (let i = 1; i < nums.length; ++i) {
    dp[i] = Math.max(dp[i - 1], 0) + nums[i];
    max = Math.max(max, dp[i]);
  }
  return max;
};
