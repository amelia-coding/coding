/*
给定数组a, 里面的元素先严格递增后严格递减, 求最大值元素的下标
输入:[1,4,7,8,9,5,6]
输出:最大值9
*/

/*
最大值处于驼峰处，且严格意味着不会元素不会重复
满足:a[i] > a[i-1],a[i] > a[i+1]
二分查找
*/

function getMax(arr) {
  let left = 0;
  right = arr.length - 1;
  while (left <= right) {
    let mid = (left + right) >>> 1;
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return arr[mid];
    } else if (arr[mid] > arr[mid + 1]) {
      //处于下坡
      right = mid - 1;
    } else if (arr[mid] > arr[mid - 1]) {
      //处于上坡
      left = mid + 1;
    }
  }
}

console.log(getMax([1, 4, 7, 8, 9, 5, 3]));
