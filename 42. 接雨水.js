/*

42. 接雨水
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

示例:

输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
*/

/**
 * 双指针
 * 位置 i 能达到的水柱高度和其左边的最高柱子、右边的最高柱子有关，
 * 我们分别称这两个柱子高度为 l_max 和 r_max；
 * 位置 i 最大的水柱高度就是 min(l_max, r_max)。
 * l_max 是 height[0..left] 中最高柱子的高度，r_max 是 height[right..end] 的最高柱子的高度。
 * ans += min(l_max[i], r_max[i]) - height[i];
 * ，我们只在乎 min(l_max, r_max)
 * 我们已经知道 l_max < r_max 了，至于这个 r_max 是不是右边最大的，不重要，重要的是 height[i] 能够装的水只和 l_max 有关。
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0,
    right = height.length - 1;
  let l_max = 0,
    r_max = 0;
  let ans = 0;
  while (left < right) {
    l_max = Math.max(l_max, height[left]);
    r_max = Math.max(r_max, height[right]);
    console.log(ans);
    if (l_max < r_max) {
      //我们已经知道 l_max < r_max 了，至于这个 r_max 是不是右边最大的，不重要
      ans += l_max - height[left];
      left++;
    } else {
      ans += r_max - height[right];
      right--;
    }
    console.log("--", ans);
  }
  return ans;
};
