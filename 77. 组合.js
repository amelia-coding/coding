/*
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:

输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

/**
 * 回溯模板
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  dfs(n, k, 1, [], res);
  return res;
};

function dfs(n, k, start, solution, res) {
  if (solution.length === k) {
    res.push(solution.slice(0)); //采用slice返回一个数组的拷贝
    return;
  }
  for (let i = start; i <= n; i++) {
    solution.push(i);
    dfs(n, k, i + 1, solution, res);
    solution.pop();
  }
}
