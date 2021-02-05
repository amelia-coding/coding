/*
678. 有效的括号字符串
给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：

任何左括号 ( 必须有相应的右括号 )。
任何右括号 ) 必须有相应的左括号 ( 。
左括号 ( 必须在对应的右括号之前 )。
* 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
一个空字符串也被视为有效字符串。
示例 1:

输入: "()"
输出: True
示例 2:

输入: "(*)"
输出: True
示例 3:

输入: "(*))"
输出: True
*/

/**
用两个栈。一个记录" ( "的索引,一个记录" * "的索引
当遇到" ) "时,先用左括号栈抵消，左栈为空则用" * "栈抵消，两者都为空返回false
最后遍历两个栈，如果" ( "的索引大于" * "号的，则不可能组成" () " 返回false
最后如果左括号栈为空，返回true

有效的括号问题一般都可以用栈来解决，遇到左括号就push进栈，遇到右括号就pop出栈。若pop出来的括号，和右括号不匹配，那就false。如果最后栈里面还有元素，那也false

该题可以使用两个栈来解决
stark栈用于存放左括号
star栈用于存放星号

遇到一个左括号'('，就push字符串中元素的下标进stark
遇到一个右括号'*'，就push字符串中元素的下标进star

当遇到右括号')'时:

若stark里面有括号，就pop出来抵消右括号
若stark里面莫得，就从star里面pop抵消右括号
若star也莫得，直接GG，输出false
右括号处理完毕，如果此时还有剩余的左括号或者星号呢?
考虑如下例子:
'(**('
虽然第1个'('可以被'*'抵消，但第2个'('是没法被抵消的！
此时将stark和star中的下标pop出来进行对比
如果star的下标 < stark的下标
那么无论如何是无法抵消的，输出false

 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  const stark = [],
    star = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stark.push(i)
    } else if (s[i] === '*') {
      star.push(i)
    } else if (s[i] === ')') {
      if (stark.length) {
        stark.pop()
      } else if (star.length) {
        star.pop()
      } else {
        return false
      }
    }
  }
  while (stark.length && star.length) {
    let index1 = stark.pop()
    let index2 = star.pop()
    if (index1 > index2) {
      return false
    }
  }
  return stark.length === 0 ? true : false
}
