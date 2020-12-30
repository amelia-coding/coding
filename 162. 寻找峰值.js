/*
162. 寻找峰值
峰值元素是指其值大于左右相邻值的元素。

给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。

数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。

你可以假设 nums[-1] = nums[n] = -∞。

示例 1:

输入: nums = [1,2,3,1]
输出: 2
解释: 3 是峰值元素，你的函数应该返回其索引 2。
示例 2:

输入: nums = [1,2,1,3,5,6,4]
输出: 1 或 5 
解释: 你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const arr = [-Infinity, ...nums, -Infinity]
  let left = 0,
    right = 1
  while (left < arr.length - 2) {
    if (arr[left] < arr[left + 1] && arr[left + 1] > arr[left + 2]) {
      return left
    } else {
      left++
    }
  }
  return undefined
}

/**
 * https://leetcode-cn.com/problems/find-peak-element/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-39/
 * 因为 nums[-1] 看做负无穷，所以从第 0 个元素开始，它一定是上升的趋势，由于我们要找峰顶，所以当它第一次出现下降，下降前的值就是我们要找的了。
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return i
    }
  }
  return nums.length - 1
}

//如果 nums[mid] < nums[mid + 1]，此时在上升阶段，因为 nums[n] 看做负无穷，
//也就是最终一定会下降，所以 mid + 1 到 end 之间至少会存在一个峰顶，可以把左半部分抛弃。
var findPeakElement = function (nums) {
  let start = 0,
    end = nums.length - 1
  while (start != end) {
    let mid = (start + end) >>> 1
    if (nums[mid] < nums[mid + 1]) {
      start = mid + 1
    } else {
      end = mid
    }
  }
  return start
}
