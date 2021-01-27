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
var maxSearch = function (s) {
  const length = s.length,
    map = new Map()
  let i = 0,
    j = 0,
    maxLen = 0
  let [start, end] = [0, 0]
  while (i < length && j < length) {
    if (map.has(s[j]) && map.get(s[j]) >= i) {
      i = map.get(s[j]) + 1
    }
    if (j - i + 1 > maxLen) {
      [start, end] = [i, j] //更新区间
      maxLen = j - i + 1
    }
    map.set(s[j], j)
    ++j
  }
  return s.slice(start, end + 1)
}

console.log(maxSearch('abdcdddefghmg'))
