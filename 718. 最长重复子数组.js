/*
718. 最长重复子数组
给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

 

示例：

输入：
A: [1,2,3,2,1]
B: [3,2,1,4,7]
输出：3
解释：
长度最长的公共子数组是 [3, 2, 1] 。
*/

/**
 * 滑动窗口
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const findLength = (A, B) => {
  let aLength = A.length,
    bLength = B.length
  //total是总共运行的次数
  let total = aLength + bLength - 1
  let max = 0
  for (let i = 0; i < total; i++) {
    //下面一大坨主要判断数组A和数组B比较的起始位置和比较的长度
    let aStart = 0
    let bStart = 0
    let len = 0
    if (i < aLength) {
      aStart = aLength - i - 1
      bStart = 0
      len = i + 1
    } else {
      aStart = 0
      bStart = i - aLength + 1
      len = Math.min(bLength - bStart, aLength)
    }
    let maxlen = maxLen(A, B, aStart, bStart, len)
    max = Math.max(max, maxlen)
  }
  return max
}

function maxLen(A, B, aStart, bStart, len) {
  let max = 0,
    count = 0
  for (let i = 0; i < len; i++) {
    if (A[aStart + i] == B[bStart + i]) {
      count++
      max = Math.max(max, count)
    } else {
      count = 0
    }
  }
  return max
}

/**
 * 动态规划
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

const findLength = (A, B) => {
  const m = A.length
  const n = B.length
  const dp = new Array(m + 1)
  for (let i = 0; i <= m; i++) {
    // 初始化整个dp矩阵，每个值为0
    dp[i] = new Array(n + 1).fill(0)
  }
  let res = 0
  // i=0或j=0的base case，初始化时已经包括
  for (let i = 1; i <= m; i++) {
    // 从1开始遍历
    for (let j = 1; j <= n; j++) {
      // 从1开始遍历
      if (A[i - 1] == B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } // A[i-1]!=B[j-1]的情况，初始化时已包括了
      res = Math.max(dp[i][j], res)
    }
  }
  return res
}

//降维
const findLength = (A, B) => {
  const m = A.length
  const n = B.length
  const dp = new Array(n + 1).fill(0)
  let res = 0
  for (let i = 1; i <= m; i++) {
    for (let j = n; j >= 1; j--) {
      if (A[i - 1] == B[j - 1]) {
        dp[j] = dp[j - 1] + 1
      } else {
        dp[j] = 0
      }
      res = Math.max(dp[j], res)
    }
    console.log(dp)
  }
  return res
}