/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let x = text1.length;
  let y = text2.length;
  let dp = Array.from(new Array(x + 1), () => new Array(y + 1).fill(0));
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[x][y];
};
