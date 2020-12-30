/*
152. 乘积最大子数组
给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

 

示例 1:

输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
*/

/**
对于以 ii 项为末尾项的子数组能产生的最小积，它有 3 种情况：
不和别人乘，就它自己
自己是负数，希望乘上前面的最大积
自己是正数，希望乘上前面的最小积
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let preMin = nums[0]
  let preMax = nums[0]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    //这样写的原因是：保证preMin改变导致preMax改变，两者应该是同时改变
    ;[preMin, preMax] = [
      Math.min(preMin * nums[i], preMax * nums[i], nums[i]),
      Math.max(preMax * nums[i], preMin * nums[i], nums[i]),
    ]
    max = Math.max(preMax, max)
  }
  return max
}
