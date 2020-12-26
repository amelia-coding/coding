/*
57. 插入区间
给出一个无重叠的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

 

示例 1：

输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]
示例 2：

输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。

*/


/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if(intervals.length === 0 ) return [newInterval]
 let res = []
 let index = 0;
 while(index < intervals.length && intervals[index][1] < newInterval[0]) {//找到开始重叠的区间
     res.push(intervals[index])
     index++
 }

 while(index < intervals.length && intervals[index][0] <= newInterval[1]) {//合并区间
     newInterval[0] = Math.min(intervals[index][0],newInterval[0])
     newInterval[1] = Math.max(intervals[index][1],newInterval[1])
     index++
 }

 res.push(newInterval)

 while(index < intervals.length){
     res.push(intervals[index++])
 }

 return res
};