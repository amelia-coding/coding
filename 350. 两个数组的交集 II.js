/*
350. 两个数组的交集 II
给定两个数组，编写一个函数来计算它们的交集。

 

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
示例 2:

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
如果给定的数组已经排好序呢？你将如何优化你的算法？（双指针）
如果 nums1 的大小比 nums2 小很多，哪种方法更优？(外层使用短数组循环)
如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？（只能使用map的方式，不能使用排序的方式）
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  var len1 = nums1.length;
  var len2 = nums2.length;
  var shortArr = len1 < len2 ? nums1 : nums2;
  var longArr = len1 < len2 ? nums2 : nums1;
  var arr = [];
  for (let i = shortArr.length - 1; i >= 0; i--) {
    //外层使用较短的数组进行循环比较
    var num = shortArr[i];
    let index = longArr.indexOf(num); //如果匹配了其中的一个元素，就设置为undefined
    if (index != -1) {
      arr.push(num);
      longArr[index] = undefined;
    }
  }
  return arr;
};

/**
 * 双指针 + 排序
 * 如果元素相等，指针共同前段一步，不相等，较小的元素的指针向前一步
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  let index1 = 0,
    index2 = 0;
  let res = [];
  while (index1 < nums1.length && index2 < nums2.length) {
    if (nums1[index1] === nums2[index2]) {
      res.push(nums1[index1]);
      index1++;
      index2++;
    } else if (nums1[index1] < nums2[index2]) {
      index1++;
    } else if (nums1[index1] > nums2[index2]) {
      index2++;
    }
  }
  return res;
};
