/*
229. 求众数 II
给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。

进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1)的算法解决此问题。

 

示例 1：

输入：[3,2,3]
输出：[3]
示例 2：

输入：nums = [1]
输出：[1]
示例 3：

输入：[1,1,1,3,3,2,2,2]
输出：[1,2]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let len = nums.length,
    times = ((len / 3) | 0) + 1
  let left = 0,
    res = []
  while (left < len) {
    let i = left
    while (i < len && nums[i] === nums[left]) {
      i++
    }
    if (i - left >= times) {
      res.push(nums[left])
    }
    left = i
  }
  return res
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let map = new Map(),
    res = []
  nums.forEach((num) => map.set(num, (map.get(num) || 0) + 1))
  for (let [key, value] of map) {
    if (value > nums.length / 3) {
      res.push(key)
    }
  }
  return res
}
