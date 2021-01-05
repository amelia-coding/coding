/*
5. 最长回文子串
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"

*/

/**
 * 
状态定义
dp[i,j]：字符串s从索引i到j的子串是否是回文串
true： s[i,j] 是回文串
false：s[i,j] 不是回文串
转移方程
dp[i][j] = dp[i+1][j-1] && s[i] == s[j]
s[i] == s[j]：说明当前中心可以继续扩张，进而有可能扩大回文串的长度
dp[i+1][j-1]：true
说明s[i,j]的**子串s[i+1][j-1]**也是回文串
说明，i是从最大值开始遍历的，j是从最小值开始遍历的
特殊情况
j - i < 2：意即子串是一个长度为0或1的回文串
总结
dp[i][j] = s[i] == s[j] && ( dp[i+1][j-1] || j - i < 2)

 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let n = s.length
  let res = ''
  let dp = Array.from(new Array(n), () => new Array(n).fill(0))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1])
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1)
      }
    }
  }
  return res
}
