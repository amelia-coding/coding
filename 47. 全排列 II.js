/*
给定一个可包含重复数字的序列，返回所有不重复的全排列。

示例:

输入: [1,1,2]
输出:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/

/**
 * 使用visted来标识当前元素是否已经被选择了
 * 如果被选择了，就跳过
 * 排序
 * 如果当前元素和之前的元素相同且都没被访问过，也跳过。从第一个没重复的元素开始
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];
  nums = nums.sort((a, b) => {
    return a - b;
  });
  dfs(nums, [], res, []);
  return res;
};

function dfs(nums, solution, res, visted) {
  if (solution.length === nums.length) {
    res.push([...solution]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (visted[i] || (!visted[i - 1] && nums[i - 1] == nums[i])) continue;
    solution.push(nums[i]);
    visted[i] = true;
    dfs(nums, solution, res, visted);
    solution.pop();
    visted[i] = false;
  }
}

console.log(permuteUnique([1,1,2]))