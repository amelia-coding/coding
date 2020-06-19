const threeSum = function (nums, sum) {
  let ans = [];
  const len = nums.length;
  if (nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (nums[i] > sum) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let right = len - 1,
      left = i + 1;
    debugger;
    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];
      if (total < sum) {
        left++;
      } else if (total > sum) {
        right--;
      } else {
        ans.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  console.log(ans);
};

threeSum([1, 2, 3, 4, 2, 2, 3, 7, 8, 9, 3, 4, 5], 10);
