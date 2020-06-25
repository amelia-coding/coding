/**
剑指 Offer 53 - I. 在排序数组中查找数字 I
1、直接遍历数组，找到元素开始和结束位置，时间复杂度O(n) 
2、二分查找找到目标值，再向前向后遍历，略优化，时间复杂度O(n) 
3、使用二分查找分步找到左边界和右边界，时间复杂度O(logn)
**/

//O(n)
var numberOfK = function (nums, target) {
  if (nums.length === 0) return 0;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    if (nums[left] < target) {
      left++;
    }
    if (nums[right] > target) {
      right--;
    }
    if (nums[left] === nums[right]) {
      break;
    }
  }
  return nums[left] === target ? right - left + 1 : 0;
};

//O(nlogn)
var numberOfK = function (nums, target) {
  const left = finLeftBound(nums, target);
  const right = findRightBound(nums, target);
  console.log(left, right);
  return left === -1 && right === -1 ? 0 : right - left + 1;
};

function finLeftBound(nums, target) {
  let len = nums.length;
  let left = 0,
    right = len - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] === target) {
      right = mid - 1;
    }
  }

  if (left < len && nums[left] === target) {
    return left;
  }

  return -1;
}

function findRightBound(nums, target) {
  let len = nums.length;
  let left = 0,
    right = len - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] === target) {
      left = mid + 1;
    }
  }

  if (right < len && nums[right] === target) {
    return right;
  }

  return -1;
}
