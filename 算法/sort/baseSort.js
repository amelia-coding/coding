/*
 * @Author: du.j
 * @Date: 2020-05-07 11:07:22
 * @LastEditors: du.j
 * @LastEditTime: 2020-06-30 10:46:54
 * @Description: 基础排序
 */

// 冒泡排序
function bubbleSort(array) {
  for (let outer = 0; outer < array.length; outer++) {
    for (let inner = 0; inner < array.length - outer; inner++) {
      if (array[inner] > array[inner + 1]) {
        swap(array, inner, inner + 1);
      }
    }
  }
  return array;
}

// 冒泡排序（优化）
const bubbleSort2 = (arr) => {
  const length = arr.length;
  if (length <= 1) return;
  for (let i = 0; i < length - 1; i++) {
    let hasChange = false;
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        hasChange = true;
      }
    }

    if (!hasChange) break; // 如果 false
  }
};

// 选择排序
function selectSort(array) {
  for (let outer = 0; outer < array.length - 1; outer++) {
    let min = array[outer];
    for (let inner = outer + 1; inner < array.length; inner++) {
      if (array[inner] < min) {
        min = array[inner];
        swap(array, inner, outer);
      }
    }
  }
  return array;
}

// 插入排序
function insertSort(array) {
  for (let outer = 1; outer < array.length; outer++) {
    for (
      let inner = outer;
      inner > 0 && array[inner] < array[inner - 1];
      inner--
    ) {
      swap(array, inner, inner - 1);
    }
  }
  return array;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
