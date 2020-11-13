/*
90. 子集 II
给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

输入: [1,2,2]
输出:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

*/

/**
 * 因为不能重复，所以先排序
 * 元素只能选择一次，所以下一次递归从i+1开始
 * 判断元素nums[i] === nums[i - 1] && i > start，
 * 翻译：当前行的选择是从start开始进行选择，可以选择的值是[nums[start],nums[start+1],..]，选择时只需要选择第一位即可，
 * 通过和之前i-1位置上的元素对比，排除相同且但不是队头的第一个元素
 * []
 * [1]， [2] ，[2] 逗号分隔选择
 * [1,2] [1,2剪] ， [2,2] [2,2剪] ，
 * [1,2,2]
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [];
  nums = nums.sort((a, b) => a - b);
  dfs(nums, 0, [], res);
  return res;
};

function dfs(nums, start, solution, res) {
  res.push(solution.slice(0));
  if (start === nums.length) {
    return;
  }
  for (let i = start; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] && i > start) continue;
    solution.push(nums[i]);
    dfs(nums, i + 1, solution, res);
    solution.pop();
  }
}
