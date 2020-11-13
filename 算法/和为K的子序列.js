function findSubArr(nums, target) {
  let res = [];
  let left = 0,
    right = 0,
    sum = 0;
  while (left <= right && right <= nums.length) {
    if (sum === target) {
      res.push(nums.slice(left, right));
      sum += nums[right];
      right++;
    } else if (sum > target) {
      sum -= nums[left];
      left++;
    } else if (sum < target) {
      sum += nums[right];
      right++;
    }
  }
  console.log(res);
}

findSubArr([3, 3, 5, 5, 6, 7, 8, 8], 11);
