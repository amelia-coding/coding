/*
503. 下一个更大元素 II
给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。

示例 1:

输入: [1,2,1]
输出: [2,-1,2]
解释: 第一个 1 的下一个更大的数是 2；
数字 2 找不到下一个更大的数； 
第二个 1 的下一个最大的数需要循环搜索，结果也是 2。
注意: 输入数组的长度不会超过 10000。
*/

/**
 * 将原始数组 “翻倍”，就是在后面再接一个原始数组，
 * 这样的话，按照之前“比身高”的流程，
 * 每个元素不仅可以比较自己右边的元素，而且也可以和左边的元素比较了。
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let m = nums.length; //m代表原始的数组长度
  nums = nums.concat(nums.slice(0, m - 1));
  let stack = [],
    ans = [];
  for (let i = 2 * m - 2; i >= 0; i--) {
    while (stack.length > 0 && nums[i] >= stack[stack.length - 1]) {
      stack.pop();
    }
    ans.unshift(stack.length > 0 ? stack[stack.length - 1] : -1);
    stack.push(nums[i]);
  }
  return ans.slice(0, m);
};
