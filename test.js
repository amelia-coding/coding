var getArrX = function (arr, left, right, initX) {
  // 辅助函数, 计算arr数组left到right区间的X;
  if (left === undefined) {
    left = 0;
  }
  if (right === undefined) {
    right = arr.length - 1;
  }
  if (initX === undefined) {
    initX = 0;
  }
  if (left > right) {
    return 0;
  }
  if (left === right) {
    // 长度为1的数组, 唯一值的平方 vs initX
    return Math.max(arr[left] * arr[left], initX);
  } else if (right - left === 1) {
    // 长度为2的数组, 小值 * 和 vs initX;
    return Math.max(
      Math.min(arr[left], arr[right]) * (arr[left] + arr[right]),
      initX,
      arr[left] * arr[left],
      arr[right] * arr[right]
    );
  }
  // left => right区间中, arr的最大x值, 只可能产生于3种情况(假定区间内最小值为minNum)
  // 1. 从left => right的全部区间x; 2. 从left => minNum的区间; 3. 从minNum => right的区间
  var minNum = arr[left],
    minIndex = left,
    maxNum = arr[right],
    rangeSum = 0,
    rangeX;
  for (var i = left; i <= right; i++) {
    // 找到minNum及索引
    rangeSum += arr[i];
    if (arr[i] < minNum) {
      minNum = arr[i];
      minIndex = i;
    }
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  rangeX = rangeSum * minNum; // left => right区间的X;

  if (rangeX > initX) {
    initX = rangeX;
  }
  if (rangeX <= initX && initX >= maxNum * (right - left) * maxNum) {
    // 区间内除了最小值外的极限最大值都小于initX, 该区间不可能再有大于initX的X;
    return initX;
  }
  return Math.max(
    initX,
    getArrX(arr, left, minIndex - 1, initX),
    getArrX(arr, minIndex + 1, right, initX)
  );
};

getArrX([200, 3, 1, 6, 4, 5, 2]);
