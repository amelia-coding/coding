var arr = [
  ["A", "B"],
  ["a", "b"],
  [1, 2],
];

function gen(arr) {
  let res = [];
  dfs(arr, 0, [], res);
  console.log(res);
  return res;
}

function dfs(arr, k, solution, res) {
  if (k === arr.length) {
    res.push(solution.join(""));
    return;
  }
  for (let i = 0; i < arr[k].length; i++) {
    solution.push(arr[k][i]);
    dfs(arr, k + 1, solution, res);
    solution.pop();
  }
}

gen(arr);
