/*
316. 去除重复字母
给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

注意：该题与 1081 https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters 相同

 

示例 1：

输入：s = "bcabc"
输出："abc"
示例 2：

输入：s = "cbacdcbc"
输出："acdb"

字典序：按照字母在字典中出现的顺序进行比较，只要当前字母小就返回成为最小的字典序，“abc” < "adbc"

map：记录字母出现的次数
stack：维护当前的一个最小字典序
*/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  // 创建一个 map 来存储每个字符出现的个数
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1)
  }
  // 维护一个栈 stack 来按顺序存储字典序最小的字符
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    map.set(char, map.get(char) - 1) // map 计数减 1
    // 如果当前栈中没有包含此字符，则需要把 char 加入 satack 中
    // 但是加入之前需要判断是否栈中存在比 char 字典序更大的元素，存在则需要判断是否要删除（弹出）
    // 怎么判断是否要删除栈中的元素 stack[j] 呢？
    // 除了满足比 char 字典序大之外，还要判断后续 s 中还能再遍历到与 stack[j] 相同的字符，不然删了就没了...
    if (stack.includes(char) === false) {
      let j = stack.length
      // 遍历栈，判断栈中是否有比 char 更大的字母，并且字符串 s 中还有此相同字符（stack[j]）
      // 有则弹出（删除），保证字典序
      while (j-- && stack[j] > char && map.get(stack[j])) {
        stack.pop()
      }
      stack.push(char) // 将 char 入栈
    }
  }
  return stack.join('')
}
