function findSubArr(nums, target) {
  let res = [];
  loop(nums, target, 0, 0, 0, res);
  console.log(res);
}

function loop(nums, target, left, right, sum, res) {
  while (left <= right && right <= nums.length) {
    if (sum === target) {
      res.push(nums.slice(left, right));
      sum += nums[right];
      right++;
      loop(nums, left, right, sum, res);
    } else if (sum > target) {
      sum -= nums[left];
      left++;
    } else if (sum < target) {
      sum += nums[right];
      right++;
    }
  }
}

findSubArr([1, 2, 3, 5, 6, 8], 11);
