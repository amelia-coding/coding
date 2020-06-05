//同种结构的字符串
function isomorphicString(str1, str2) {
  let map = new Map();
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  for (let i = 0; i < arr1.length; i++) {
    let mapStr = map.get(arr1[i]);
    if (mapStr) {
      if (arr2[i] !== mapStr) {
        return false;
      }
    } else {
      map.set(arr1[i], arr2[i]);
    }
  }
  return true;
}

console.log(isomorphicString("egg", "add"));
console.log(isomorphicString("paper", "title"));
console.log(isomorphicString("paper", "tikle"));
console.log(isomorphicString("foo", "bar"));
