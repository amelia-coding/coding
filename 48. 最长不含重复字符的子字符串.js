/*
剑指 Offer 48. 最长不含重复字符的子字符串
请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

 

示例 1:

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
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/

/**
 * 同向快慢指针
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  const map = new Map()
  let right = 0,
    left = 0
  let maxLen = 0
  while (right < str.length) {
    // 容易理解：检查s[j]是否出现过，并且s[j]重复的字符是否在当前的滑动窗口中
    // Map的方法: set、get、delete、clear、has、values、entries
    if (map.has(str[right]) && map.get(str[right]) >= left) {
      //注意更新left要使用map.get(str[right]) + 1
      left = map.get(str[right]) + 1
    }
    maxLen = Math.max(maxLen, right - left + 1)
    map.set(str[right], right)
    right++
  }

  return maxLen
}

console.log(lengthOfLongestSubstring('aab'))
console.log(lengthOfLongestSubstring('abcda'))
