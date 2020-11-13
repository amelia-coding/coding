/**
 * 同向双指针
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let left = 0,
    right = 0;
  let maxLen = 0;
  let len = s.length;
  while (right < len) {
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      left = map.get(s[right]) + 1;
    }
    maxLen = Math.max(maxLen, right - left + 1);
    map.set(s[right], right);
    right++;
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
