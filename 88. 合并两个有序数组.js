/**
 * 88. 合并两个有序数组
 * 
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

*/

const merge0 = (arr1, arr2) => {
  return [...arr1, ...arr2].sort()
}

const merge = function (arr1, arr2) {
  let result = []
  let p1 = 0,
    p2 = 0
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      result.push(arr1[p1])
      p1++
    } else {
      result.push(arr2[p2])
      p2++
    }
  }

  result = result.concat(p1 < arr1.length ? arr1.slice(p1) : p2 < arr2.length ? arr2.slice(p2) : [])

  return result
}

const merge2 = function (arr1, arr2) {
  let result = []
  let p1 = 0,
    p2 = 0
  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1[p1])
      arr1.shift()
    } else {
      result.push(arr2[p2])
      arr2.shift()
    }
  }

  result = arr1.length ? result.concat(arr1) : result.concat(arr2)

  return result
}

console.log(merge0([1, 2, 3], [1, 2, 4, 5]))
