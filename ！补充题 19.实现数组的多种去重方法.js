// 1.数组去重

/**
 * reduce
 * @param {*} arrArgs
 * @returns
 */
function unique1(arrArgs) {
  const arr = arrArgs.sort((a, b) => a - b)
  return arr.reduce((a, b, index) => {
    if (b !== arr[index - 1] || index === 0) a.push(b)
    return a
  }, [])
}

/**
 * Set对象
 * @param {*} arr
 * @returns
 */
function unique2(arr) {
  return [...new Set(arr)]
}

/**
 * includes
 * @param {*} arr
 * @returns
 */
function unique3(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

// console.log(unique3([1, 2, 3, 3, 4, 5, 6, 5, 4]))

/**
 * 2. 数组对象去重
 * [{ key: 1}, {key: 2}, {key: 1}]
 */

const uniqueO = (arrArgs) => {
  const arr = arrArgs.sort((a, b) => a.key - b.key)
  return arr.reduce((tar, cur, index) => {
    if (index === 0 || cur.key !== arr[index - 1].key) {
      tar.push(cur)
    }
    return tar
  }, [])
}

console.log(uniqueO([{ key: 1 }, { key: 2 }, { key: 1 }]))
