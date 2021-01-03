/*
565. 数组嵌套
索引从0开始长度为N的数组A，包含0到N - 1的所有整数。找到最大的集合S并返回其大小，其中 S[i] = {A[i], A[A[i]], A[A[A[i]]], ... }且遵守以下的规则。

假设选择索引为i的元素A[i]为S的第一个元素，S的下一个元素应该是A[A[i]]，之后是A[A[A[i]]]... 以此类推，不断添加直到S出现重复的元素。

 

示例 1:

输入: A = [5,4,0,3,1,6,2]
输出: 4
解释: 
A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.

其中一种最长的 S[K]:
S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}
*/

/**
 * 暴力：遍历每个元素，找到环的长度，然后获得最大值
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    let start = nums[i],
      count = 0
    do {
      start = nums[start]
      count++
    } while (start != nums[i])
    res = Math.max(res, count)
  }
  return res
}

/**
 * 暴力题解的缺点：会重复的计算，如：
 * 5-6-2-0-5
 * 0-5-6-2-0
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != Integer.MAX_VALUE) {
      let start = nums[i],
        count = 0
      while (nums[start] != Integer.MAX_VALUE) {
        let temp = start
        start = nums[start]
        count++
        nums[temp] = Integer.MAX_VALUE//遍历过的元素设为最大值
      }
      res = Math.max(res, count)
    }
  }
  return res
}
