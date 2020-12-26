/*
实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须 原地 修改，只允许使用额外常数空间。

 

示例 1：

输入：nums = [1,2,3]
输出：[1,3,2]
示例 2：

输入：nums = [3,2,1]
输出：[1,2,3]
示例 3：

输入：nums = [1,1,5]
输出：[1,5,1]
示例 4：

输入：nums = [1]
输出：[1]

题解：https://leetcode-cn.com/problems/next-permutation/solution/xia-yi-ge-pai-lie-suan-fa-xiang-jie-si-lu-tui-dao-/
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2 // 向左遍历，i从倒数第二开始是为了nums[i+1]要存在
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    // 寻找第一个小于右邻居的数
    i--
  }
  if (i >= 0) {
    // 这个数在数组中存在，从它身后挑一个数，和它换
    let j = nums.length - 1 // 从最后一项，向左遍历
    while (j >= 0 && nums[j] <= nums[i]) {
      // 寻找第一个大于 nums[i] 的数
      j--
    }
    ;[nums[i], nums[j]] = [nums[j], nums[i]] // 两数交换，实现变大
  }
  // 如果 i = -1，说明是递减排列，如 3 2 1，没有下一排列，直接翻转为最小排列：1 2 3
  let l = i + 1
  let r = nums.length - 1
  while (l < r) {
    // i 右边的数进行翻转，使得变大的幅度小一些
    ;[nums[l], nums[r]] = [nums[r], nums[l]]
    l++
    r--
  }
}
