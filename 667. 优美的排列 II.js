/*
667. 优美的排列 II
给定两个整数 n 和 k，你需要实现一个数组，这个数组包含从 1 到 n 的 n 个不同整数，同时满足以下条件：

① 如果这个数组是 [a1, a2, a3, ... , an] ，那么数组 [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|] 中应该有且仅有 k 个不同整数；.

② 如果存在多种答案，你只需实现并返回其中任意一种.

示例 1:

输入: n = 3, k = 1
输出: [1, 2, 3]
解释: [1, 2, 3] 包含 3 个范围在 1-3 的不同整数， 并且 [1, 1] 中有且仅有 1 个不同整数 : 1
 

示例 2:

输入: n = 3, k = 2
输出: [1, 3, 2]
解释: [1, 3, 2] 包含 3 个范围在 1-3 的不同整数， 并且 [2, 1] 中有且仅有 2 个不同整数: 1 和 2
*/

/**
 * 构造
 * 使用k+1个数字，即可组成k个差值，剩余的部分直接使用差值为1顺序填充即可
[1, 1+k, 1+k-(k-1), 1+k-(k-1)+(k-2),...,n]
1,2,3...n k=1
1,3,2,4...n k=2 step=2,1
https://leetcode-cn.com/problems/beautiful-arrangement-ii/solution/shi-yong-qian-k1ge-shu-zu-cheng-kge-chai-zhi-sheng/
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  let i = k
  let result = [1]
  let num = 1
  let flag = true // true为正，false为负
  while (result.length <= k) {
    num = flag ? num + i : num - i
    result.push(num)
    i--
    flag = !flag
  }
  // 基数已经准备好，进行剩余部分的填充
  num = result.length + 1
  while (num <= n) {
    result.push(num++)
  }
  console.log(result)
  return result
}

/*
 * 翻转
 若n=8初始状态
1 2 3 4 5 6 7 8
k=1~~~~~~~~         | 1 2 3 4 5 6 7 8 (不翻转，直接返回)
k=2~~~~~~~~         1 | 8 7 6 5 4 3 2
k=3~~~~~~~~         1 8 | 2 3 4 5 6 7
k=4~~~~~~~~         1 8 2 | 7 6 5 4 3
总结规律：当k>1时,需要翻转的次数为k-1次，每次翻转保留前m(m = 1,2,3...k-1)个数，每次翻转都在原数组进行。
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  let res = Array.from(new Array(n), (item, i) => i + 1) //产生1~n个数
  if (k == 1) return res //k==1直接返回
  //k != 1就要翻转k - 1次，每次翻转保留前m个数
  for (let m = 1; m < k; m++) reverse(res, m, n - 1)
  return res
}

//翻转数组[i,j]之间的数
function reverse(res, i, j) {
  while (i < j) {
    ;[res[i], res[j]] = [res[j], res[i]]
    i++
    j--
  }
}
