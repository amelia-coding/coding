/*
34. 在排序数组中查找元素的第一个和最后一个位置
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：

你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]

*/

/**
 * 二分查找左右边界
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let lIndex = findLeft(nums, target)
  let rIndex = findRight(nums, target)
  return [lIndex, rIndex]
}

function findLeft(nums, target) {
  let l = 0,
    r = nums.length - 1
  while (l <= r) {
    let mid = (l + (r - l) / 2) | 0
    if (nums[mid] > target) {
      r = mid - 1
    } else if (nums[mid] < target) {
      l = mid + 1
    } else if (nums[mid] === target) {
      r = mid - 1
    }
  }
  if (l < nums.length && nums[l] === target) {
    return l
  }
  return -1
}

function findRight(nums, target) {
  let l = 0,
    r = nums.length - 1
  while (l <= r) {
    let mid = (l + (r - l) / 2) | 0
    if (nums[mid] > target) {
      r = mid - 1
    } else if (nums[mid] < target) {
      l = mid + 1
    } else if (nums[mid] === target) {
      l = mid + 1
    }
  }
  if (r >= 0 && nums[r] === target) {
    return r
  }
  return -1
}

//左边界+右扩散

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let lIndex = findLeft(nums, target)
  let rIndex = lIndex
  while (lIndex !== -1 && nums[rIndex] === target) rIndex++ //注意特殊情况-1
  return [lIndex, rIndex === -1 ? -1 : rIndex - 1]
}

function findLeft(nums, target) {
  let l = 0,
    r = nums.length - 1
  while (l <= r) {
    let mid = (l + (r - l) / 2) | 0
    if (nums[mid] > target) {
      r = mid - 1
    } else if (nums[mid] < target) {
      l = mid + 1
    } else if (nums[mid] === target) {
      r = mid - 1
    }
  }
  if (l < nums.length && nums[l] === target) {
    return l
  }
  return -1
}
