function unique(arr) {
  arr = arr.sort((a, b) => a - b);
  return arr.reduce((a, b, index) => {
    if (b !== arr[index - 1] || index === 0) {
      a.push(b);
    }
    return a;
  }, []);
}

function unique(arr) {
  return [...new Set(arr)];
}

function unique(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(unique([1, 2, 3, 3, 4, 5, 6, 5, 4]));
