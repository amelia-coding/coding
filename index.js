function test(arr) {
  let map = new Map();
  return arr.reduce((a, b) => {
    if (!map.get(b)) {
      map.set(b, 1);
      a.push(b);
    }
    return a;
  }, []);
}

test([1, 2, 3, 3, 4, 5, 6, 5, 4]);
