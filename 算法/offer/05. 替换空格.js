/*
剑指 Offer 05. 替换空格
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

 

示例 1：

输入：s = "We are happy."
输出："We%20are%20happy."
*/

var replaceSpace = function (s) {
  return s.replace(/\s{1}/g, "%20");
};

var replaceSpace = function (s) {
  if (!s || !s.length) {
    return "";
  }

  let emptyNum = 0,
    chNum = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === " ") {
      ++emptyNum;
    } else {
      ++chNum;
    }
  }

  const length = emptyNum * 2 + chNum;
  const chs = new Array(length);
  // i 是新字符串的下标
  // j 是原字符串的下标
  for (let i = 0, j = 0; j < s.length; ++j) {
    if (s[j] === " ") {
      chs[i++] = "%";
      chs[i++] = "2";
      chs[i++] = "0";
    } else {
      chs[i++] = s[j];
    }
  }

  return chs.join("");
};
