/*
给定一个正整数数列a, 对于其每个区间, 我们都可以计算一个X值;
X值的定义如下: 对于任意区间, 其X值等于区间内最小的那个数乘上区间内所有数和;
现在需要你找出数列a的所有区间中, X值最大的那个区间;
如数列a为: 3 1 6 4 5 2; 则X值最大的区间为6, 4, 5, X = 4 * (6+4+5) = 60;
*/
const arr = [200, 3, 1, 6, 4, 5, 2];

function findX(arr) {
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
findX(arr);

//优化，因为dp只和前一个值有关，区间[i,j]的值仅取决于[i,j-1]的值。
//而且本题只需要求最大值，所以preVal可以保存一个当前遍历[i,j]所在区间的值,maxVal保存计算的最大值
//复杂度O(N2)
function findX(arr) {
  let n = arr.length;
  let maxVal = 0;
  for (let i = 0; i < n; i++) {
    let min = arr[i];
    let preVal = 0; //用于保存i-j区间的值,区间[i,j]的值仅取决于[i,j-1]的值
    for (let j = i; j < n; j++) {
      const preSum = preVal / min;
      min = Math.min(min, arr[j]);
      preVal = min * (preSum + arr[j]); //不断更新preVal的值为当前i-j区间的值，用于下次计算求和
      if (preVal > maxVal) {
        span = [i, j];
        maxVal = preVal;
      }
    }
  }
  console.log("最大值", maxVal, "区间", span);
  return span;
}
