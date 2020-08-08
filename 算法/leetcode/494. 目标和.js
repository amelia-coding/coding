/*
494. 目标和
给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

 

示例：

输入：nums: [1, 1, 1, 1, 1], S: 3
输出：5
解释：

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。

*/

/**
 * 简化
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  let result = 0;
  function dfs(nums, i, S) {
    if (i == nums.length) {
      if (S === 0) {
        result++;
      }
      return;
    }
    // S += nums[i];
    // dfs(nums, i + 1, S);
    // S -= nums[i];

    // S -= nums[i];
    // dfs(nums, i + 1, S);
    // S += nums[i];
    dfs(nums, i + 1, S + nums[i]);
    dfs(nums, i + 1, S - nums[i]);
  }
  dfs(nums, 0, S, 0);
  return result;
};
