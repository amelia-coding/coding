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

var arr = [3, 5, 4, 2, 9, 8, 7, 10];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
