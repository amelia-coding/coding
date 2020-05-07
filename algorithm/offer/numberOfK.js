/**
数字在排序数组中出现的次数
1、直接遍历数组，找到元素开始和结束位置，时间复杂度O(n) 
2、二分查找找到目标值，再向前向后遍历，略优化，时间复杂度O(n) 
3、使用二分查找分步找到左边界和右边界，时间复杂度O(logn)
代码:https://codesandbox.io/s/numberofk-98zx9
**/

function numberOfK(nums, target) {
  if (nums.length === 0) return 0;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    if (nums[left] < target) {
      left++;
    }
    if (nums[right] > target) {
      right--;
    }
    if (nums[left] === nums[right]) {
      break;
    }
  }
  return nums[left] === target ? right - left + 1 : 0;
}

console.log(numberOfK([1, 1, 3, 3, 5], 3));
