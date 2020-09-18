function unRepeat(arr) {
  let map = new Map();
  return arr.reduce((a, b) => {
    if (!map.get(b)) {
      map.set(b, 1);
      a.push(b);
    }
    return a;
  }, []);
}

function unRepeat(arr) {
  return [...new Set(arr)];
}

unRepeat([1, 2, 3, 3, 4, 5, 6, 5, 4]);
