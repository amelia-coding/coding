/*
713. 乘积小于K的子数组
给定一个正整数数组 nums。

找出该数组内乘积小于 k 的连续的子数组的个数。

示例 1:

输入: nums = [10,5,2,6], k = 100
输出: 8
解释: 8个乘积小于100的子数组分别为: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]。
需要注意的是 [10,5,2] 并不是乘积小于100的子数组。
说明:

0 < nums.length <= 50000
0 < nums[i] < 1000
0 <= k < 10^6

*/

/**
 * 双指针
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0
  let count = 0
  let L = (R = 0),
    mul = 1
  while (R < nums.length) {
    mul = mul * nums[R]
    while (mul >= k) {
      mul = mul / nums[L++]
    }
    //当 nums[left] * nums[left + 1] ..nums[right-1] * nums[right] 都满足 < k 时，
    //那么 nums[left + 1] ..nums[right-1] * nums[right]
    //和 nums[left+2] ..nums[right-1] * nums[right] ...... 都满足。
    //其个数一共 right - left + 1个
    count += R - L + 1
    console.log(count)
    R++
  }
  return count
}
