/**
53. 最大子数组和(动态规划) 中等
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组 是数组中的一个连续部分

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  //dp[i] 以i为结尾的数组对大和的
  //dp[i-1] + nums[i]: dp[i-1] > 0 ? dp[i-1] + nums[i]:nums[i]
  const len = nums.length
  const dp = new Array(len).fill(null)
  dp[0] = nums[0]
  let res = nums[0]
  for(let i = 1; i < len; i++) {
    if(dp[i - 1] < 0) {
      dp[i] = nums[i]
    }else{
      dp[i] = dp[i - 1] + nums[i]
    }
    res = Math.max(res, dp[i])
  }
  console.log(res)
  return res
  };