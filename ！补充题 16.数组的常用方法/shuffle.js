/*
将52张牌随机均等的分给四个人，如输入[0,1,2,..,51],输出[[1,2,16...],[4,3,6...],[...],[...]]
*/

const shuffle = ([...arr]) => {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    ;[arr[m], arr[i]] = [arr[i], arr[m]]
  }

  return arr
}

shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
