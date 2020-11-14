function flat(arr) {
  return arr.reduce((item, curr) => {
    if (Array.isArray(curr)) {
      return item.concat(flat(curr));
    } else {
      return item.concat(curr);
    }
  }, []);
}

console.log(flat([1, 2, [3, 4], [5, [6, [7]]]]));
