/*
153. 寻找旋转排序数组中的最小值
假设按照升序排序的数组在预先未知的某个点上进行了旋转。例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] 。

请找出其中最小的元素。

 

示例 1：

输入：nums = [3,4,5,1,2]
输出：1
示例 2：

输入：nums = [4,5,6,7,0,1,2]
输出：0
示例 3：

输入：nums = [1]
输出：1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let len = nums.length
  let left = 0,
    right = len - 1
  while (left < right) {
    //小于不使用等于，可能会造成死循环
    let mid = (left + (right - left) / 2) | 0
    if (nums[mid] > nums[right]) {
      //上升阶段
      left = mid + 1
    } else {
      right = mid
    }
  }
  return nums[left]
}
