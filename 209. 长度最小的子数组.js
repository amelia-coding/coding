/*
209. 长度最小的子数组
给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

 

示例：

输入：s = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
*/

/**
扩张窗口：为了找到一个可行解，找到了就不再扩张
收缩窗口：在长度上优化该可行解，直到条件被破坏
寻找下一个可行解，然后再优化到不能优化……
 * 
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let minLen = Infinity
  let i = 0,j = 0,sum = 0
  while (j < nums.length) {
    // 主旋律是扩张，找可行解
    sum += nums[j]
    while (sum >= s) {
      // 间歇性收缩，优化可行解
      minLen = Math.min(minLen, j - i + 1)
      sum -= nums[i++]
    }
    j++
  }
  return minLen === Infinity ? 0 : minLen // 从未找到可行解，返回0
}
