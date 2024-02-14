/**
 * 给出一个类型二维数组，每个数组中是一个类目（如[["红色", "绿色"], ["大号", "小号"]])，
 * 返回所有类型的组合结果（[["红色", "大号"], ["红色", "小号"], ["绿色", "大号"], ["绿色", "小号"]])
 */
const a = [
  ['红色', '绿色'],
  ['大号', '小号'],
]

const gen = (a) => {
  const result = []
  dfs(a, 0, [], result)
  console.log(result)
  return result
}

const dfs = (a, index, solution, result) => {
  if (solution.length === a.length) {
    result.push([...solution])
    return
  }
  const arr = a[index]
  for (let i = 0; i < arr.length; i++) {
    solution.push(arr[i])
    dfs(a, index + 1, solution, result)
    solution.pop()
  }
}

gen(a)
