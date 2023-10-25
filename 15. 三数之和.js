/**
 * 注意：
 * 数组元素可能重复
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  return findItem(nums, 0)
}

function findItem(nums, sum) {
  let ans = []
  const len = nums.length
  if (nums == null || len < 3) return ans
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    if (nums[i] > sum) break
    if (i > 0 && nums[i] === nums[i - 1]) continue //去重
    let right = len - 1,
      left = i + 1
    while (left < right) {
      const total = nums[i] + nums[left] + nums[right]
      if (total < sum) {
        left++
      } else if (total > sum) {
        right--
      } else {
        ans.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) left++ //去重
        while (left < right && nums[right] === nums[right - 1]) right-- //去重
        console.log(left, right)
        left++
        right--
      }
    }
  }
  return ans
}

console.log(findItem([1, 1, 2, 3, 4, 5], 4))
