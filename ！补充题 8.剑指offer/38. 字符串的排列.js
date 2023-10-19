/*
输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  let queue = s.split(''), res = []
  dfs(queue, '', res)
  res = [...new Set(res)]
  return res
}

function dfs(queue, visited, res) {
  if (queue.length === 0) {
    res.push(visited)
    return
  }
  for (let i = 0; i < queue.length; i++) {
    let curr = queue.shift()
    dfs(queue, visited + curr, res)
    queue.push(curr)
  }
}

console.log(permutation('abc'))
