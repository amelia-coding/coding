const countSubstrings = (s) => {
  let count = 0;
  const len = s.length;

  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false);
  }

  for (let j = 0; j < len; j++) {
    for (let i = 0; i <= j; i++) {
      if (i == j) {
        // 单个字符
        dp[i][j] = true;
        count++;
      } else if (j - i == 1 && s[i] == s[j]) {
        // 两个字符
        dp[i][j] = true;
        count++;
      } else if (j - i > 1 && s[i] == s[j] && dp[i + 1][j - 1]) {
        // 多于两个字符
        dp[i][j] = true;
        count++;
      }
    }
  }
  return count;
};
