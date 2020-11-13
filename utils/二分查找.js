/**
二分查找
扩展：
左右边界
**/

//1、查找target
function binarySearch(array, target) {
  let left = 0,
    right = array.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (array[mid] === target) {
      return mid; //return
    } else if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
}

//2、查找target的左边界
function leftBound(array, target) {
  let left = 0,
    right = array.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (array[mid] > target) {
      right = mid - 1;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] === target) {
      right = mid - 1;
    }
  }
  if (left < array.length && array[left] === target) {
    return left;
  }

  return -1;
}

// 3、查找target的右边界
function rightBound(array, target) {
  let left = 0,
    right = array.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else if (array[mid] === target) {
      left = mid + 1; //收紧左边界
    }
  }
  if (right >= 0 && array[right] === target) {
    return right;
  }

  return -1;
}
