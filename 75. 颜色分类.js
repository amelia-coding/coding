/*
75. 颜色分类
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

 

进阶：

你可以不使用代码库中的排序函数来解决这道题吗？
你能想出一个仅使用常数空间的一趟扫描算法吗？
 

示例 1：

输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
示例 2：

输入：nums = [2,0,1]
输出：[0,1,2]
示例 3：

输入：nums = [0]
输出：[0]
示例 4：

输入：nums = [1]
输出：[1]

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  // 1. 设置 left 表示左边都是 0
  let left = 0
  // 2. 设置 right 表示右边都是 2
  let right = nums.length - 1
  // 3. 遍历 nums,起始点在 [left, right]，注意 right 是动态的
  for (let i = 0; i <= right; i++) {
    if (nums[i] === 0) {
      ;[nums[left], nums[i]] = [nums[i], nums[left]]
      left++
    } else if (nums[i] === 2) {
      // 3.2 如果是 2，交换到右边
      ;[nums[right], nums[i]] = [nums[i], nums[right]]
      right--
      i--
    }
  }
  return nums
}

// left:0的最右边界，right:2的最左边界，curr当前下标
var sortColors = function (nums) {
  let left = 0,
    right = nums.length - 1,
    curr = 0
  while (curr <= right) {
    if (nums[curr] === 0) {
      ;[nums[curr], nums[left]] = [nums[left], nums[curr]]
      //这里为什么可以自信的直接加1而不检测被调换过来的数字呢？我们可以假设被换过来的数字可能为1，2；
      //但是如果这个数字是2，那么在之前的循环中已经被移动末尾了，所以这个数组只可能是1.
      left++
      curr++
      continue
    }
    if (nums[curr] === 2) {
      ;[nums[curr], nums[right]] = [nums[right], nums[curr]]
      right--
      continue
    }
    if (nums[curr] === 1) {
      curr++
      continue
    }
  }
  return nums
}
