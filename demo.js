const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    console.log(i, m);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffle(arr));
console.log(arr);
