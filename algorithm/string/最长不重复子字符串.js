function longestSubstringWithoutRepeat(str) {
  let left = 0,
    right = 0;
  let res = [];
  let longestString = "";
  let map = new Map();
  while (right < str.length) {
    if (map.has(str[right])) {
      const substring = str.slice(left, right);
      res.push(substring);
      left = map.get(str[right]) + 1;
    }
    longestString =
      right - left + 1 > longestString.length
        ? str.slice(left, right + 1)
        : longestString;
    map.set(str[right], right);
    right++;
  }
  res.push(str.slice(left, right));
  console.log(res, longestString);
  return res;
}

longestSubstringWithoutRepeat("abcdefcgwxyzqmnopc");
