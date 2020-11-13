/*
给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。 
示例 1：

输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]

*/

/**
 *
 * 回溯
 * 为了不重复，现将待选择的candidates进行排序，下一次选择的开始都从当前的index开始
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  candidates = candidates.sort((a, b) => {
    return a - b;
  });
  dfs(candidates, target, 0, [], res);
  return res;
};

function dfs(candidates, target, start, solution, res) {
  if (target === 0) {
    res.push(solution.slice());
  } else if (target < 0) {
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    if (candidates[i] > target) continue;
    solution.push(candidates[i]);
    dfs(candidates, target - candidates[i], i, solution, res);
    solution.pop();
  }
}
