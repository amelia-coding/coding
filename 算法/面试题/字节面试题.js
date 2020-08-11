/*
给定一个正整数数列a, 对于其每个区间, 我们都可以计算一个X值;
X值的定义如下: 对于任意区间, 其X值等于区间内最小的那个数乘上区间内所有数和;
现在需要你找出数列a的所有区间中, X值最大的那个区间;
如数列a为: 3 1 6 4 5 2; 则X值最大的区间为6, 4, 5, X = 4 * (6+4+5) = 60;
*/
const arr = [200, 3, 1, 6, 4, 5, 2];

function find(arr) {
  let n = arr.length;
  let dp = Array.from(new Array(n), () => new Array(n).fill(0));
  let min = new Array(n).fill(0); //用于记录每行的最小值
  let maxVal = 0;
  let span = [];
  for (let i = 0; i < n; i++) {
    min[i] = arr[i];
    for (let j = i; j < n; j++) {
      const preSum = j >= 1 ? dp[i][j - 1] / min[i] : 0;
      if (arr[j] < min[i]) min[i] = arr[j];
      dp[i][j] = min[i] * (preSum + arr[j]);
      if (dp[i][j] > maxVal) {
        span = [i, j];
        maxVal = dp[i][j];
      }
    }
  }
  console.log("dp:", dp, "最大值", maxVal, "区间", span);
  return span;
}

//console.log(sum(arr, 3, 4));
find(arr);
