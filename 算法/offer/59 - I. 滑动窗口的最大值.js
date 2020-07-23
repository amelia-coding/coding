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

/*优雅*/

var maxSlidingWindow = function (nums, k) {
  let n = nums.length;
  let res = [];
  let windows = new slideWindow();
  for (let i = 0; i < n; i++) {
    if (i < k - 1) {
      windows.push(nums[i]);
    } else {
      windows.push(nums[i]);
      res.push(windows.max());
      windows.pop(nums[i - k + 1]);
    }
  }
  return res;
};

class slideWindow {
  constructor() {
    this.data = [];
  }
  push(val) {
    let data = this.data;
    while (data.length > 0 && data[data.length - 1] < val) {
      data.pop();
    }
    data.push(val);
  }
  pop(val) {
    let data = this.data;
    if (data.length > 0 && data[0] === val) {
      data.shift();
    }
  }
  max() {
    return this.data[0];
  }
}
