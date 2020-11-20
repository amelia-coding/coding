/*
输入一组正整数的数组，求出一个子数组，子数组当中的元素能够被两两整除，求出一个最长的子数组
即si%sj == 0
比如:
输入[1,2,3]
输出[1,2]或者[1,3]
*/

function getArr(arr) {
  arr = arr.sort((a, b) => a - b);
  let res = [];
  dfs(arr, 0, [], res);
  console.log(res);
}
function dfs(arr, start, solution, res) {
  if (start >= arr.length) {
    if (res[0] === undefined || solution.length >= res[0].length) {
      res.push(solution.slice());
    }
    return;
  }
  for (let i = start; i < arr.length; i++) {
    if (
      solution.length !== 0 &&
      arr[start] % solution[solution.length - 1] !== 0
    )
      continue;
    solution.push(arr[start]);
    dfs(arr, i + 1, solution, res);
    solution.pop();
  }
}
getArr([1, 2, 3, 6, 7, 9, 12, 15]);
