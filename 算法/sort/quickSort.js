/*
 * @Author: du.j
 * @Date: 2020-06-30 10:43:08
 * @LastEditors: du.j
 * @LastEditTime: 2020-06-30 11:07:51
 * @Description: 快排
 */

function quickSort(arr, start, end) {
  if (start > end) {
    return;
  }
  let i = start,
    j = end,
    pivot = arr[start]; //存放基准数
  while (i !== j) {
    // 从右边开始，找第一个小于基准的位置
    while (arr[j] >= pivot && i < j) {
      j--;
    }
    // 从左边开始，找第一个大于基准的位置
    while (arr[i] <= pivot && i < j) {
      i++;
    }
    // 交换两个数
    if (i < j) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }

  // 最后把基准数归位
  arr[start] = arr[i];
  arr[i] = pivot;
  // 递归处理左边
  quickSort(arr, start, i - 1);
  // 递归处理右边
  quickSort(arr, i + 1, end);
}

function quickSort(arr) {
  if (arr.length === 0) {
    return [];
  }
  var pivot = arr[0];
  var lesser = [];
  var greater = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return quickSort(lesser).concat(pivot, quickSort(greater));
}
