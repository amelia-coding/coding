/*
670. 最大交换
给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。

示例 1 :

输入: 2736
输出: 7236
解释: 交换数字2和数字7。
示例 2 :

输入: 9973
输出: 9973
解释: 不需要交换。
*/

/**
 * 
先从低位往高位遍历，保存每一位经过交换能得到的最大值的下标
再从高位往低位遍历，直到某一位小于该位可以取到的最大值，上一步保存了该位置最大值的下标，交换即可
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let nums = num.toString().split('')
  let index_arr = new Array(nums.length)
  let max_index = nums.length - 1
  //低位往高位遍历
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[max_index]) max_index = i
    index_arr[i] = max_index
  }
  //高位往低位遍历
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[index_arr[i]]) {
      ;[nums[i], nums[index_arr[i]]] = [nums[index_arr[i]], nums[i]]
      break
    }
  }

  return nums.join('')
}
