/*
生成6位验证码
|0 代表取整
*/
function getCode(num) {
  return Array.from({ length: num }, () =>
    // 六位数范围0～999999，Math.random()随机选取大于等于 0.0 且小于 1.0 的伪随机 double 值，
    ((Math.random() * 1e6) | 0).toString().padStart(6, '0')
  )
}

console.log(getCode(1000))
