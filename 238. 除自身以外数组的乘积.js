/*
238. 除自身以外数组的乘积
给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

 

示例:

输入: [1,2,3,4]
输出: [24,12,8,6]
 

提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。

说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

进阶：
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let length = nums.length
  //当前元素i的乘积 = 前缀之积L * 后缀之积R
  //L[i]代表i元素右边元素，即0～i-1的乘积
  let L = new Array(length).fill(0)
  let R = new Array(length).fill(0)
  let answer = []
  L[0] = 1
  for (let i = 1; i < length; i++) {
    L[i] = nums[i - 1] * L[i - 1]
  }
  // R[i] 为索引 i 右侧所有元素的乘积
  // 对于索引为 'length-1' 的元素，因为右侧没有元素，所以 R[length-1] = 1
  R[length - 1] = 1
  for (let i = length - 2; i >= 0; i--) {
    R[i] = nums[i + 1] * R[i + 1]
  }

  // 对于索引 i，除 nums[i] 之外其余各元素的乘积就是左侧所有元素的乘积乘以右侧所有元素的乘积
  for (let i = 0; i < length; i++) {
    answer[i] = L[i] * R[i]
  }

  return answer
}
