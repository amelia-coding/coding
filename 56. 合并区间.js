/*
56. 合并区间
给出一个区间的集合，请合并所有重叠的区间。


示例 1:

输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:

输入: intervals = [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
注意：输入类型已于2019年4月15日更改。 请重置默认代码定义以获取新方法签名。
*/

/** 区间题目
 * @param {number[][]} intervals
 * @return {number[][]}
 */
let merge = (intervals) => {
  const len = intervals.length
  if (len === 0) return []
  // 排序
  intervals.sort((s1, s2) => s1[0] - s2[0])
  let arr = [intervals[0]]
  for (let i = 1; i < len; i++) {
    const arrLen = arr.length
    
    if (intervals[i][0] <= arr[arrLen - 1][1]) {//如果当前选择区间 < 结果中最后一个区间的end，则有重叠
      arr[arrLen - 1][1] = Math.max(intervals[i][1], arr[arrLen - 1][1])
    } else {
      arr.push(intervals[i])
    }
  }
  return arr
}
