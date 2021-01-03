/*
532. 数组中的 k-diff 数对
给定一个整数数组和一个整数 k，你需要在数组里找到不同的 k-diff 数对，并返回不同的 k-diff 数对 的数目。

这里将 k-diff 数对定义为一个整数对 (nums[i], nums[j])，并满足下述全部条件：

0 <= i, j < nums.length
i != j
|nums[i] - nums[j]| == k
注意，|val| 表示 val 的绝对值。

 

示例 1：

输入：nums = [3, 1, 4, 1, 5], k = 2
输出：2
解释：数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
尽管数组中有两个1，但我们只应返回不同的数对的数量。
示例 2：

输入：nums = [1, 2, 3, 4, 5], k = 1
输出：4
解释：数组中有四个 1-diff 数对, (1, 2), (2, 3), (3, 4) 和 (4, 5)。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (nums.length < 2) return 0
  nums.sort((a, b) => a - b)
  let count = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < nums.length; j++) {
      let diff = nums[j] - nums[i]
      if (diff == k) {
        count++
        break
      } else if (diff > k) {
        break
      }
    }
  }
  return count
}
