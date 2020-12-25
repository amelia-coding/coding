/*
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

示例：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。


解题思路

解题思路
标签：排序和双指针
本题目因为要计算三个数，如果靠暴力枚举的话时间复杂度会到 O(n^3)O(n3)，需要降低时间复杂度
首先进行数组排序，时间复杂度 O(nlogn)O(nlogn)
在数组 nums 中，进行遍历，每遍历一个值利用其下标i，形成一个固定值 nums[i]
再使用前指针指向 start = i + 1 处，后指针指向 end = nums.length - 1 处，也就是结尾处
根据 sum = nums[i] + nums[start] + nums[end] 的结果，判断 sum 与目标 target 的距离，如果更近则更新结果 ans
同时判断 sum 与 target 的大小关系，因为数组有序，如果 sum > target 则 end--，如果 sum < target 则 start++，如果 sum == target 则说明距离为 0 直接返回结果
整个遍历过程，固定值为 n 次，双指针为 n 次，时间复杂度为 O(n^2)O(n2)
总时间复杂度：O(nlogn) + O(n^2) = O(n^2)O(nlogn)+O(n2)=O(n2)

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b)
  let ans = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum
      }
      if (sum > target) {
        right--
      } else if (sum < target) {
        left++
      } else {
        return ans
      }
    }
  }
  return ans
}
