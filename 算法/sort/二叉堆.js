function downAdjust(arr, parentIndex, length) {
  // temp 保存父节点的值，用于最后的赋值
  let temp = arr[parentIndex];
  let childIndex = parentIndex * 2 + 1;
  while (childIndex < length) {
    // 如果有右孩子，且右孩子的值小于左孩子，则定位到右孩子
    if (childIndex + 1 < length && arr[childIndex + 1] < arr[childIndex]) {
      childIndex++;
    }
    //如果父节点的值小于任何一个孩子，直接跳过
    if (temp <= arr[childIndex]) break;
    arr[parentIndex] = arr[childIndex];
    parentIndex = childIndex;
    childIndex = 2 * childIndex + 1;
  }
  arr[parentIndex] = temp;
}

function buildHeap(arr) {
  let start = Math.floor((arr.length - 2) / 2);
  for (let i = start; i >= 0; i--) {
    downAdjust(arr, i, arr.length);
  }
}
