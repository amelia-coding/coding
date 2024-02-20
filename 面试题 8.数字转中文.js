//12045转换一万二千零四十五

const chineseUint = ['', '十', '百', '千', '万', '十万']

const chinestNum = ['零', '一', '二', '三', '四', '五']

const tran2Chines = (num) => {
  const nums = String(num).split('').reverse()
  let result = []
  let flag = false
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    if (cur == '0') flag = !flag
    if (flag) continue
    result.unshift(cur == '0' ? '' : chineseUint[i])
    result.unshift(chinestNum[cur])
  }
  return result.join('')
}

console.log(tran2Chines(120045))
