/*
给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。

示例 1:

输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
示例 2:

输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
*/

//运行超时了，74/75测试用例

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  return find(nums, 0, [])
}

function find(nums, index, solution, res) {
  if (index === nums.length - 1) return true
  if (index > nums.length - 1) return false
  for (let step = 1; step <= nums[index]; step++) {
    solution.push(step)
    if (find(nums, index + step, solution, res)) return true
    solution.pop()
  }
  return false
}



/**
如果某一个作为 起跳点 的格子可以跳跃的距离是 3，那么表示后面 3 个格子都可以作为 起跳点。
可以对每一个能作为 起跳点 的格子都尝试跳一次，把 能跳到最远的距离 不断更新。
如果可以一直跳到最后，就成功了。、
 * 方案二
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (k === nums.length - 1) return true
    k = Math.max(k, i + nums[i]) //如果i可以作为起跳点
  }
  return false
}

/**方案三
换句话说，对于每一个可以到达的位置 xx，它使得 x+1, x+2, \cdots, x+\textit{nums}[x]x+1,x+2,⋯,x+nums[x] 这些连续的位置都可以到达。
这样以来，我们依次遍历数组中的每一个位置，并实时维护 最远可以到达的位置。
对于当前遍历到的位置 xx，如果它在 最远可以到达的位置 的范围内，
那么我们就可以从起点通过若干次跳跃到达该位置，
因此我们可以用 x + \textit{nums}[x]x+nums[x] 更新 最远可以到达的位置。
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let n = nums.length
  let rightmost = 0
  for (let i = 0; i < n; ++i) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + nums[i])
      if (rightmost >= n - 1) {
        return true
      }
    }
  }
  return false
}
