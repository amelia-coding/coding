/*
给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

说明：

所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。 
示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
*/
/**
 * 数字只能选择一次，所以向下传递的是i+1
 * 结果不能重复，所以需要排序，并且判断i > start && candidates[i - 1] == candidates[i]
 * i = start是第一次选择，i > start之后的选择要去掉
 *
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates = candidates.sort((a, b) => a - b);
  dfs(candidates, target, 0, [], res);
  return res;
};

function dfs(candidates, target, start, solution, res) {
  if (target < 0) return;
  if (target === 0) res.push(solution.slice(0));
  for (let i = start; i < candidates.length; i++) {
    if (candidates[i] > target) continue;
    if (i > start && candidates[i] == candidates[i - 1]) continue;
    solution.push(candidates[i]);
    dfs(candidates, target - candidates[i], i + 1, solution, res);
    solution.pop();
  }
}
