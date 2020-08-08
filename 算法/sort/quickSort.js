/*
 * @Author: du.j
 * @Date: 2020-06-30 10:43:08
 * @LastEditors: du.j
 * @LastEditTime: 2020-07-01 10:37:10
 * @Description: 快排
 */

/**
 * 方案一
 * @param {} arr
 */
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

/**
 * 面试版本
 */
function ArrayList() {
  var array = [];

  this.insert = function (...item) {
    array = array.concat(item);
  };

  this.toString = function () {
    return array.join();
  };

  this.quickSort = function () {
    quick(array, 0, array.length - 1);
    return array;
  };

  // var swapQuickStort = function (array, index1, index2) {
  //   var aux = array[index1];
  //   array[index1] = array[index2];
  //   array[index2] = aux;
  // };

  var partition = function (array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)],
      i = left,
      j = right;

    while (i <= j) {
      // 从左边开始，找第一个大于等于基准的位置
      while (array[i] < pivot) i++;
      // 从右边开始，找第一个小于等于基准的位置
      while (array[j] > pivot) j--;
      if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]];
        i++;
        j--;
      }
    }

    return i;
  };

  var quick = function (array, left, right) {
    if (array.length > 1) {
      var index = partition(array, left, right);
      if (left < index - 1) {
        quick(array, left, index - 1);
      }
      if (index < right) {
        quick(array, index, right); //将index塞进去，说明index不代表一趟快排之后正确的位置
      }
    }
    return array;
  };
}

var arr = new ArrayList();
arr.insert(10, 4, 5, 2, 7, 8, 6, 10);
console.log(arr.quickSort());
