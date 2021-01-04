/*
795. 区间子数组个数
给定一个元素都是正整数的数组A ，正整数 L 以及 R (L <= R)。

求连续、非空且其中最大元素满足大于等于L 小于等于R的子数组个数。

例如 :
输入: 
A = [2, 1, 4, 3]
L = 2
R = 3
输出: 3
解释: 满足条件的子数组: [2], [2, 1], [3].
*/

/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var numSubarrayBoundedMax = function (A, L, R) {
  return count(A, R) - count(A, L - 1)
}

//返回小于等于limit的子数组的个数
function count(arr, limit) {
  let cur = 0 //代表当前位置的元素为结尾的子元素的个数，比如以3为结尾的子数组3，3 4，3 4 1，3 4 1 2，比以3为结尾的子数组个数多1
  let subArrCount = 0
  for (let i = 0; i < arr.length; i++) {
    cur = arr[i] <= limit ? cur + 1 : 0//当不满足条件时。cur要置0
    subArrCount += cur
  }
  return subArrCount
}
