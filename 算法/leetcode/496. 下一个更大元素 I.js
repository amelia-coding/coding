/*
496. 下一个更大元素 I
给定两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。

nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。

 

示例 1:

输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
输出: [-1,3,-1]
解释:
    对于num1中的数字4，你无法在第二个数组中找到下一个更大的数字，因此输出 -1。
    对于num1中的数字1，第二个数组中数字1右边的下一个较大数字是 3。
    对于num1中的数字2，第二个数组中没有下一个更大的数字，因此输出 -1。
示例 2:

输入: nums1 = [2,4], nums2 = [1,2,3,4].
输出: [3,-1]
解释:
    对于 num1 中的数字 2 ，第二个数组中的下一个较大数字是 3 。
    对于 num1 中的数字 4 ，第二个数组中没有下一个更大的数字，因此输出 -1 。
*/

/**
 * 思路：单调栈，每次入队前判断当前栈的元素，剔除小于当前元素的，直到第一个大的
 * 首先在nums2中找到每个元素对应的下一个最大值，比如[1,3,4,2]分别求出每个元素对应的下一个最大元素[3,4,-1,-1]
 * 使用栈，每次判断时栈保存的是当前元素之后的队列。栈顶保存当前元素的下一个最大元素
 * 当判断nums[i]时，如果元素大于栈顶就弹出，一直到栈中没有比当前元素小的元素，比如判断元素与4，在[3,2,5]中第一个大于4的元素，4》3pop，4>2pop,4 <5保留
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = new Map();
  let stack = [];
  let ans = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length > 0 && nums2[i] >= stack[stack.length - 1]) {
      stack.pop();
    }
    map.set(nums2[i], stack[stack.length - 1] || -1);
    stack.push(nums2[i]);
  }
  for (let i = 0; i < nums1.length; i++) {
    ans.push(map.has(nums1[i]) ? map.get(nums1[i]) : -1);
  }
  return ans;
};
