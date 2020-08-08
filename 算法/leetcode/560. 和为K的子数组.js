/*
给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

示例 1 :

输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
说明 :

数组的长度为 [1, 20,000]。
数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
*/

/**
 * 一般子数组问题会涉及双指针、前缀和等
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  let preSum = [0];
  for (let i = 0; i < nums.length; i++) {
    preSum[i + 1] = preSum[i] + nums[i];
  }

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (preSum[i] - preSum[j] === k) {
        count++;
      }
    }
  }

  return count;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  let preSum = 0;
  let map = new Map();
  map.set(0, 1); //前缀和为0出现1次
  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];
    let target = preSum - k;
    if (map.has(target)) count += map.get(target);
    map.set(preSum, (map.get(preSum) || 0) + 1);
  }
  return count;
};
