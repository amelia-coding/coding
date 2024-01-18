/*

数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例：

输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  //  cur :当前字符  left：当前字符左括号 right:当前字符右括号
  const help = (cur, left, right) => {
   
    if (cur.length === 2 * n) {
      res.push(cur);
      return;
    }
    if (left < n) {
      help(cur + "(", left + 1, right);
    }

    if (right < left) {
      help(cur + ")", left, right + 1);
    }
  };
  help("", 0, 0);
  return res;
};

generateParenthesis(2)

var generateParenthesis = function (n) {
  let res = [];
  const help = (solution, left, right) => {
    if (left < 0 || right < 0) return;
    if (left > right) return;
    console.log(solution)
    if (left === 0 && right === 0) {
      res.push(solution.join(""));
      return;
    }

    solution.push("(");
    help(solution, left - 1, right);
    solution.pop();


    solution.push(")");
    help(solution, left, right - 1);
    solution.pop();
  };
  help([], n, n);
  return res;
};




/*
框架
void backtrack(int n, int i, string& track) {
  // i 代表当前的位置，共 2n 个位置
  // 穷举到最后一个位置了，得到一个长度为 2n 组合
  if (i == 2 * n) {
      print(track);
      return;
  }

  // 对于每个位置可以是左括号或者右括号两种选择
  for choice in ['(', ')'] {
      track.push(choice); // 做选择
      // 穷举下一个位置
      backtrack(n, i + 1, track);
      track.pop(choice); // 撤销选择
  }
}
*/
