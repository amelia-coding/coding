/*
在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
*/

/**
 * 构建K个元素的小顶堆
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (arr, k) {
  let kHeap = arr.slice(0, k)
  buildHeap(kHeap)
  for (let i = k; i < arr.length; i++) {
    if (arr[i] > kHeap[0]) {
      kHeap[0] = arr[i]
      downAdjust(kHeap, 0, kHeap.length)
    }
  }
  return kHeap[0]
}

//下沉调整
function downAdjust(arr, parentIndex, length) {
  // temp 保存父节点的值，用于最后的赋值
  let temp = arr[parentIndex]
  let childIndex = parentIndex * 2 + 1
  while (childIndex < length) {
    // 如果有右孩子，且右孩子的值小于左孩子，则定位到右孩子
    if (childIndex + 1 < length && arr[childIndex + 1] < arr[childIndex]) {
      childIndex++
    }
    //如果父节点的值小于任何一个孩子，直接跳过
    if (temp <= arr[childIndex]) break
    arr[parentIndex] = arr[childIndex]
    parentIndex = childIndex
    childIndex = 2 * childIndex + 1
  }
  arr[parentIndex] = temp
}

function buildHeap(arr) {
  let start = Math.floor((arr.length - 2) / 2)
  for (let i = start; i >= 0; i--) {
    downAdjust(arr, i, arr.length)
  }
}

/**
 * 排序或者快排
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (arr, k) {
  arr.sort((a, b) => b - a).slice(0, k)
  return arr[k - 1]
}

//快排
var findKthLargest = function (arr, k) {
  quick(arr, 0, arr.length - 1)
  console.log(arr)
  return arr[k - 1]
}

var partition = function (array, left, right) {
  var pivot = array[Math.floor((right + left) / 2)],
    i = left,
    j = right

  while (i <= j) {
    // 从左边开始，找第一个大于等于基准的位置
    while (array[i] > pivot) i++
    // 从右边开始，找第一个小于等于基准的位置
    while (array[j] < pivot) j--
    //console.log(array, i, j);
    if (i <= j) {
      //console.log("swap " + array[i] + " with " + array[j]);
      ;[array[i], array[j]] = [array[j], array[i]]
      i++
      j--
    }
  }

  return i
}

var quick = function (array, left, right) {
  if (array.length > 1) {
    var index = partition(array, left, right)
    if (left < index - 1) {
      quick(array, left, index - 1)
    }
    if (index < right) {
      quick(array, index, right) //将index塞进去，说明index不代表一趟快排之后正确的位置
    }
  }
  return array
}

const prilot = (arr, left, right) => {
  const mid = ((left + right) / 2) | 0
  let i = left,
    j = right
  while (i <= j) {
    while (arr[i] < arr[mid]) i++
    while (arr[j] > arr[mid]) j--
    if (i < j) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
  }

  return i
}

const quickSort = (arr, left, right) => {
  const index = prilot(arr, left, right)
  if (left < index) {
    quickSort(arr, left, index)
  }

  if (index < right) {
    quickSort(arr, index, right)
  }
}

const arr = [7, 9, 3, 5, 6, 2]
quickSort(arr, 0, arr.length - 1)
console.log(arr)