/*
611. 有效三角形的个数
给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。

示例 1:

输入: [2,2,3,4]
输出: 3
解释:
有效的组合是: 
2,3,4 (使用第一个 2)
2,3,4 (使用第二个 2)
2,2,3
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let res = 0;
  //從后往前
  for (var i = nums.length - 1; i > 1; i--) {
    let left = 0,
      right = i - 1;
    while (left < right) {
      //只需要判斷較小的兩個數的和是否大於第三個數
      if (nums[left] + nums[right] > nums[i]) {
        res += right - left; //默认选中right指针的值,那right之前的数字都满足
        right--;
      } else {
        left++;
      }
    }
  }
  console.log(res);
  return res;
};
