/**
 * JS 在存放整数的时候是有一个安全范围的，一旦数字超过这个范围便会损失精度
 * 所以，我们要用字符串来表示数据！
 * @param {*} str1 
 * @param {*} str2 
 */
function bigNumberSum(str1, str2) {
  let len = Math.max(str1.length, str2.length)
  //用0去补齐长度
  let _str1 = str1.padStart(len, "0")
  let _str2 = str2.padStart(len, "0")
  let arr1 = str1.split("").reverse().map(item => +item)
  let arr2 = str2.split("").reverse().map(item => +item)
  let arr = new Array(len).fill(0) //比两数最长+1
  let pr = 0
  for (let i = 0; i < arr.length; i++) {
    const sum = +(arr1[i] + arr2[i])
    let t = sum % 10 //余数
    arr[i] = pr + t
    pr = parseInt(sum / 10)//进位，方便下一次判断
  }
  if (pr === 1) arr[len] = 1
  console.log(arr.reverse().join(""))
}

bigNumberSum("4329", "8222")