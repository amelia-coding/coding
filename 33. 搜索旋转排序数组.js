/**
 * 33. 搜索旋转排序数组
升序排列的整数数组 nums 在预先未知的某个点上进行了旋转（例如， [0,1,2,4,5,6,7] 经旋转后可能变为 [4,5,6,7,0,1,2] ）。

请你在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。


示例 1：

输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
示例 2：

输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
示例 3：

输入：nums = [1], target = 0
输出：-1

 * 分段+二分
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let lo = 0,
    hi = nums.length - 1
  while (lo <= hi) {
    let mid = (lo + (hi - lo) / 2) | 0
    if (nums[mid] === target) return mid
    if (nums[mid] >= nums[lo]) {
      if (target >= nums[lo] && target < nums[mid]) {
        hi = mid - 1
      } else {
        lo = mid + 1
      }
    } else {
      if (target > nums[mid] && target <= nums[hi]) {
        lo = mid + 1
      } else {
        hi = mid - 1
      }
    }
  }
  return -1
}
