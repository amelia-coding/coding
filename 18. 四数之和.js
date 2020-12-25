/*
给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例：

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b)
  let ans = []
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue
      let m = j + 1,
        n = nums.length - 1
      while (m < n) {
        let sum = nums[i] + nums[j] + nums[m] + nums[n]
        if (sum === target) {
          ans.push([nums[i], nums[j], nums[m++], nums[n--]])
          while (m < n && nums[m] === nums[m - 1]) m++
          while (m < n && nums[n] === nums[n + 1]) n--
        } else if (sum < target) {
          m++
        } else {
          n--
        }
      }
    }
  }
  return ans
}
