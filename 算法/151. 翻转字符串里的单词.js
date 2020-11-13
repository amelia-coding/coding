/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let right = s.length - 1;
  let left = 0;
  let queue = [];
  let word = "";
  while (/\s+/g.test(s[left])) left++;
  while (/\s+/g.test(s[left])) right--;
  while (left <= right) {
    let char = s.charAt(left);
    if (char === " " && word) {
      queue.unshift(word);
      word = "";
    } else if (char !== " ") {
      word += char;
    }
    left++;
  }
  queue.unshift(word);
  console.log("1" + word + "1");
  return queue.join(" ");
};

console.log(reverseWords("a good    example"));
