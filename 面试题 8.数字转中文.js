//12045转换一万二千零四十五

const unit = ['', '万', '亿']
const unit4 = ['', '十', '百', '千']
const chinestNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八']

function insertUnit(str) {
  let result = []
  const strs = str.split('').reverse()

  for (let i = 0; i < strs.length; i++) {
    let num = +strs[i]
    if (num === 0) {
      result.push(chinestNum[num])
    } else {
      result.push(chinestNum[num] + unit4[i])
    }
  }

  console.log(result)

  return result.reverse().join('')
}

//1200,0048

const tran2Chines = (num) => {
  //从后往前4位分割，4位代表万，然后4位数字内从千、百、十
  let str = num + ''
  let i = str.length
  let span = []
  while (i > 0) {
    span.push(str.substring(i - 4, i))
    i = i - 4
  }
  console.log(span)
  let result = []
  for (let i = 0; i < span.length; i++) {
    result.push(insertUnit(span[i]) + unit[i])
  }

  return result.reverse().join('')
}

//出现连词单位有问题
console.log(tran2Chines(12000485))
