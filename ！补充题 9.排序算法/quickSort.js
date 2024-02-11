/*
 * @Author: du.j
 * @Date: 2020-06-30 10:43:08
 * @LastEditors: du.j
 * @LastEditTime: 2020-07-01 10:37:10
 * @Description: 快排
 * 
(1)选择基准：在待排序列中，按照某种方式挑出一个元素，作为 "基准"（pivot）
(2)分割操作：以该基准在序列中的实际位置，把序列分成两个子序列。此时，在基准左边的元素都比该基准小，在基准右边的元素都比基准大
(3)递归地对两个序列进行快速排序，直到序列为空或者只有一个元素。
 */

//简单
const quickSort = (array) => {
  if (array.length < 2) return array
  const priot = array.pop()
  const left = array.filter((num) => num < priot) //left, right可以用reduce实现
  const right = array.filter((num) => num >= priot)
  return [...quickSort(left), priot, ...quickSort(right)]
}

//1.分割操作
const partition = function (array, left, right) {
  const pivot = ((left + right) / 2) | 0
  let i = left,
    j = right

  while (i <= j) {
    // 从左边开始，找第一个大于等于基准的位置
    while (array[i] < pivot) i++
    // 从右边开始，找第一个小于等于基准的位置
    while (array[j] > pivot) j--
    if (i <= j) {
      ;[array[i], array[j]] = [array[j], array[i]]
      i++
      j--
    }
  }

  return i
}

//2. 递归对两个序列进行快排
const quick = function (array, left, right) {
  var index = partition(array, left, right)
  if (left < index - 1) {
    quick(array, left, index - 1)
  }
  if (index < right) {
    quick(array, index, right) //将index塞进去，说明index不代表一趟快排之后正确的位置
  }

  return array
}

//quick([7, 8, 3, 4, 5, 10], 0, 5)
