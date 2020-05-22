// 和为S的两个数字
// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S。输出任意一对即可
function twoSumInSortedArr(nums, sum) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] === sum) {
      return [nums[left], nums[right]];
    } else if (nums[left] + nums[right] > sum) {
      right--;
    } else if (nums[left] + nums[right] < sum) {
      left++;
    }
  }
  return [];
}

console.log(twoSumInSortedArr([2, 3, 3, 4, 7, 7, 8, 9], 10));
