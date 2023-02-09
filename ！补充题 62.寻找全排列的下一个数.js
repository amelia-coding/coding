/**
 * 比如12354的下一个最大值是12435
 * 1. 尽可能保持高位不变，调整低位数字
 * 2. 一个数字排列，升序排列最小，降序排列最大。比如12345最小，54321最大
 * 3. 第一步：从左到右，找到开始降序的第一个数字，然后和后面大于当前数字的最小数交换位置（比如123652，应该是3和5交换） 后变成 125632， 5固定后保证后面为升序排列 12435
 */

function findNextNum(num) {
  const arr = num.toString().split("")
  // const len = arr.length
  const index = findFirstDrownNum(arr)
  console.log("第一个降序的数字位置是：", index)
  if (index > 0) {
    const swrapIndex = findFirstMinNum(arr, index)
    console.log("要交换的位置：", swrapIndex)
    swrap(arr, swrapIndex, index)
    return arr.slice(0, index + 1).concat(arr.slice(index + 1).sort((a, b) => b - a)).join("")
  }
  return num
}

//找到第一个降序的数字位置
function findFirstDrownNum(arr) {
  const len = arr.length
  let max = -1
  for (let i = len - 1; i >= 0; i--) {
    if (+arr[i] > max) {
      max = +arr[i]
      continue
    } else {
      // return +str[i]
      return i
    }
  }
  return -1
}

//从后往前判断
function findFirstMinNum(arr, index) {
  const len = arr.length
  let targetIndex = -1
  for (let i = len - 1; i >= 0; i--) {
    if (+arr[i] > +arr[index]) {
      targetIndex = i
      break
    }
  }
  return targetIndex
}

function swrap(arr, index, tagetIndex) {
  const tmp = arr[index]
  arr[index] = arr[tagetIndex]
  arr[tagetIndex] = tmp
  return arr
}

console.log('1', findNextNum(54321))
console.log('2', findNextNum(123652))
