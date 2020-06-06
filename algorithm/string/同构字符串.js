//同种结构的字符串
function isomorphicString(s, t) {
  if (s.length != t.length) return false;
  let map = new Map();
  for (let i in s) {
    let mapStr = map.get(s[i]);
    if (mapStr && t[i] !== mapStr) {
      return false;
    } else {
      map.set(s[i], t[i]);
    }
  }
  map = new Map();
  for (let i in t) {
    let mapStr = map.get(t[i]);
    if (mapStr && s[i] !== mapStr) {
      return false;
    } else {
      map.set(t[i], s[i]);
    }
  }
  return true;
}

console.log(isomorphicString("ega", "add"));
console.log(isomorphicString("paper", "title"));
console.log(isomorphicString("ab", "cc"));
console.log(isomorphicString("foo", "bar"));
