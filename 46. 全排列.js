/*
给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * 前提：数组中没有重复
 * 通过solution.includes(nums[i])剪纸
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = []
  dfs(nums, [], res)
  return res
}

function dfs(nums, solution, res) {
  if (solution.length === nums.length) {
    res.push([...solution]) //必须进行数组的拷贝，solution的值是变化的，不会保留当时的数组
    return
  }
  for (let i = 0; i < nums.length; i++) {
    if (solution.includes(nums[i])) continue
    solution.push(nums[i])
    dfs(nums, solution, res)
    solution.pop()
  }
}
