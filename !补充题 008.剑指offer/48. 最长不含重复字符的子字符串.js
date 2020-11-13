/*
剑指 Offer 48. 最长不含重复字符的子字符串
示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

*/

/**
 * 同向快慢指针
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const length = s.length;
  const map = new Map();
  let i = 0,
    j = 0;
  let ans = 0;
  while (i < length && j < length) {
    // 容易理解：检查s[j]是否出现过，并且s[j]重复的字符是否在当前的滑动窗口中
    if (map.has(s[j]) && map.get(s[j]) >= i) {
      //使用has判断不用get，因为0也会被认为false
      i = map.get(s[j]) + 1;
    }
    ans = Math.max(j - i + 1, ans);
    map.set(s[j], j);
    ++j;
  }
  return ans;
};
