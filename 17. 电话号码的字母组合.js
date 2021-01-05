/*
17. 电话号码的字母组合
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}
var letterCombinations = function (digits) {
  let res = []
  dfs(digits, 0, [], res)
  return res
}

function dfs(digits, level, solution, res) {
  if (level === digits.length) {
    solution.length > 0 && res.push(solution.join(''))
    return
  }
  for (let i = 0; i < map[digits[level]].length; i++) {
    solution.push(map[digits[level]][i])
    dfs(digits, level + 1, solution, res)
    solution.pop()
  }
}
