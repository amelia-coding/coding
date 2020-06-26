/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let count = strs.length;
  let prefix = strs[0];
  for (let i = 1; i < count; i++) {
    prefix = longestCommonPrefixTwo(prefix, strs[i]);
    if (!prefix) break;
  }
  return prefix || "";
};

function longestCommonPrefixTwo(str1, str2) {
  console.log(str1, str2);
  let minLen = Math.min(str1.length, str2.length);
  let index = 0;
  while (index < minLen && str1[index] === str2[index]) {
    index++;
  }
  return str1.slice(0, index);
}
