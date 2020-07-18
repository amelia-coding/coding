/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0) return [];
  let queue = [];
  let res = [];
  for (let i = 0; i < k; i++) {
    while (queue.length > 0 && queue[queue.length - 1] < nums[i]) {
      queue.pop();
    }
    queue.push(nums[i]);
  }
  res.push(queue[0]);

  for (let i = k; i < nums.length; i++) {
    while (queue.length > 0 && queue[queue.length - 1] < nums[i]) {
      queue.pop();
    }
    if (nums[i - k] === queue[0]) queue.shift(); //当前左窗口的值等于队头元素时被踢出
    queue.push(nums[i]);
    res.push(queue[0]);
  }

  console.log(res);
  return res;
};

maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5);
