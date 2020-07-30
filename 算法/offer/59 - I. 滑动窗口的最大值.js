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
    this.data = []; //单调队列
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
