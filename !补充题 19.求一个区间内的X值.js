/*
给定一个正整数数列a, 对于其每个区间, 我们都可以计算一个X值;
X值的定义如下: 对于任意区间, 其X值等于区间内最小的那个数乘上区间内所有数和;
现在需要你找出数列a的所有区间中, X值最大的那个区间;
如数列a为: 3 1 6 4 5 2; 则X值最大的区间为6, 4, 5, X = 4 * (6+4+5) = 60;
*/
const arr = [200, 3, 1, 6, 4, 5, 2];

//区间[i,j]的值仅取决于[i,j-1]的值。
//preVal可以保存一个当前遍历[i,j]所在区间的值,maxVal保存计算的最大值
//复杂度O(N2)
function findX(arr) {
  let n = arr.length;
  let maxVal = 0;
  for (let i = 0; i < n; i++) {
    let min = arr[i];
    let preVal = 0; //用于保存i-j区间的值,区间[i,j]的值仅取决于[i,j-1]的值
    for (let j = i; j < n; j++) {
      const preSum = preVal / min;
      preVal = Math.min(min, arr[j]) * (preSum + arr[j]); //不断更新preVal的值为当前i-j区间的值，用于下次计算求和
      if (preVal > maxVal) {
        span = [i, j];
        maxVal = preVal;
      }
    }
  }
  console.log("最大值", maxVal, "区间", span);
  return span;
}

findX(arr)