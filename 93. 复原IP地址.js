/*
93. 复原IP地址
给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

有效的 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效的 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效的 IP 地址。

 

示例 1：

输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
示例 2：

输入：s = "0000"
输出：["0.0.0.0"]
示例 3：

输入：s = "1111"
输出：["1.1.1.1"]
示例 4：

输入：s = "010010"
输出：["0.10.0.10","0.100.1.0"]
*/

const restoreIpAddresses = (s) => {
  const res = []
  // 复原从start开始的子串
  const dfs = (subRes, start) => {
    if (subRes.length == 4 && start == s.length) {
      // 片段满4段，且耗尽所有字符
      res.push(subRes.join('.')) // 拼成字符串，加入解集
      return // 返不返回都行，指针已经到头了，严谨的说还是返回
    }
    if (subRes.length == 4 && start < s.length) {
      // 满4段，字符未耗尽，不用往下选了
      return
    }
    for (let len = 1; len <= 3; len++) {
      // 枚举出选择，三种切割长度
      if (start + len - 1 >= s.length) return // 加上要切的长度就越界，不能切这个长度
      if (len != 1 && s[start] == '0') return // 不能切出'0x'、'0xx'

      const str = s.substring(start, start + len) // 当前选择切出的片段
      if (len == 3 && +str > 255) return // 不能超过255

      subRes.push(str) // 作出选择，将片段加入subRes
      dfs(subRes, start + len) // 基于当前选择，继续选择，注意更新指针
      subRes.pop() // 上面一句的递归分支结束，撤销最后的选择，进入下一轮迭代，考察下一个切割长度
    }
  }

  dfs([], 0) // dfs入口
  return res
}
