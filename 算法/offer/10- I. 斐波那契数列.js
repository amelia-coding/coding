/*
斐波那契数列
写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项。斐波那契数列的定义如下：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
*/

/**
 * 动态规划
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0;
  let pre = 0;
  let current = 1;
  while (--n) {
    let next = (current + pre) % (1e9 + 7);
    pre = current;
    current = next;
  }
  return current;
};

//递归
var fib = function (n) {
  if (n <= 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

//尾递归
function Fibonacci(n, ac1 = 1, ac2 = 1) {
  if (n <= 1) {
    return ac2;
  }
  return Fibonacci(n - 1, ac2, ac1 + ac2);
}

//记忆化
function Fibonacci(n, memo = [1, 1]) {
  if (!memo[n]) {
    memo[n] = Fibonacci(n - 1) + Fibonacci(n - 2);
  }
  console.log(memo);
  return memo[n];
}

console.log(Fibonacci(2));
