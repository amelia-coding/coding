/*
49. 字母异位词分组
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/

/**
 * 哈希+排序
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const wordMap = new Map()
  let res = []
  for (let i = 0; i < strs.length; i++) {
    const tempStr = strs[i].split('').sort().join('')
    wordMap.set(tempStr, wordMap.has(tempStr) ? wordMap.get(tempStr).concat(strs[i]) : [strs[i]])
  }
  for (let key of wordMap.keys()) {
    res.push(wordMap.get(key))
  }
  return res
}
