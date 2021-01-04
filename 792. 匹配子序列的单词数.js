/*
792. 匹配子序列的单词数
给定字符串 S 和单词字典 words, 求 words[i] 中是 S 的子序列的单词个数。

示例:
输入: 
S = "abcde"
words = ["a", "bb", "acd", "ace"]
输出: 3
解释: 有三个是 S 的子序列的单词: "a", "acd", "ace"。
注意:

所有在words和 S 里的单词都只由小写字母组成。
S 的长度在 [1, 50000]。
words 的长度在 [1, 5000]。
words[i]的长度在[1, 50]。
*/

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (S, words) {
  let count = 0,
    len = S.length
  for (let i = 0; i < words.length; i++) {
    let k = (j = 0) // j代表words数组中单词的字母的下标,k代表S的滑动指针
    while (k < len && j < words[i].length) {
      if (words[i][j] === S[k]) {
        j++
      }
      k++
    }
    if (j === words[i].length) count++
  }
  return count
}
