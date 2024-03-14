/**
给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：

对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
如果 s 中存在这样的子串，我们保证它是唯一的答案。
 

示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
示例 2：

输入：s = "a", t = "a"
输出："a"
解释：整个字符串 s 是最小覆盖子串。
示例 3:

输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，
因此没有符合条件的子字符串，返回空字符串。
 */

const minWindow = function (s, t) {
  let needsMap = {}; //该容器存放所需的字符 对应的值 正数:还缺多少个 0:刚好不缺字符 负数:目标字符太过多
  for (const ch of t) {
    needsMap[ch] = (needsMap[ch] || 0) + 1;
  }
  let typeCnt = Object.keys(needsMap).length; //目标字符种类数
  let left = 0; //滑动窗口左边界
  let right = 0; //滑动窗口右边界
 
  let minLen = Infinity; //表示最小字符串的长度
  let minSubStr = ""; //表示符合的最小子串

 
  // 右指针向右移动，扩展窗口
  while (right < s.length) {
    const charRight = s[right];
    if (charRight in needsMap) {
      needsMap[charRight]--; //右指针找到了目标字符  即目标需求要减1
      if (needsMap[charRight] === 0) typeCnt--; //如果目标字符变成0，说明我们就不需要这个种类的字符了,于是目标字符就减掉1种
    }

    right++;
    // 窗口包含了所有目标字符，尝试缩小窗口
    while (typeCnt === 0) {
      if (right - left < minLen) {
        // 更新最小覆盖子串信息
        minLen = right - left;
        minSubStr = s.slice(left, right);
      }
      const charLeft = s[left];
      if (charLeft in needsMap) {
        needsMap[charLeft]++; //左指针找到了目标字符，但由于这是缩小窗口的过程，此时即将丢失目标字符，目标字符需求要自增1
        if (needsMap[charLeft] > 0) typeCnt++; //如果目标所需字符大于0，说明此时目标字符种类数需要自增1
      }
      left++;
    }
  }
  return minSubStr;
 };



 console.log(minWindow("ADOBECODEBANC","ABCA"))