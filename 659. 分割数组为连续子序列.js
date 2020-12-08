/*
给你一个按升序排序的整数数组 num（可能包含重复数字），请你将它们分割成一个或多个长度至少为 3 的子序列，其中每个子序列都由连续整数组成。

如果可以完成上述分割，则返回 true ；否则，返回 false 。

 

示例 1：

输入: [1,2,3,3,4,5]
输出: True
解释:
你可以分割出这样两个连续子序列 : 
1, 2, 3
3, 4, 5
示例 2：

输入: [1,2,3,3,4,4,5,5]
输出: True
解释:
你可以分割出这样两个连续子序列 : 
1, 2, 3, 4, 5
3, 4, 5
示例 3：

输入: [1,2,3,4,4,5]
输出: False

参考题解
https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences/solution/tan-xin-suan-fa-jian-cha-shu-zu-neng-fou-bei-fen-w/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  let max = nums[nums.length - 1]
  let arr = new Array(max + 2).fill(0) //nc[i]代表当前数字i出现的次数
  let tail = new Array(max + 2).fill(0) //tail[i]代表数字i为结尾的连续子序列个数
  for (let n of nums) arr[n]++
  for (let n of nums) {
    if (!arr[n]) continue
    if (tail[n - 1] > 0) {
      tail[n - 1]--
      tail[n]++
    } else if (arr[n + 1] > 0 && arr[n + 2] > 0) {
      arr[n + 1]--
      arr[n + 2]--
      tail[n + 2]++
    } else {
      return false
    }
    arr[n]--
  }
  return true
}
