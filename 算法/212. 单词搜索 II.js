/*
212. 单词搜索 II
给定一个二维网格 board 和一个字典中的单词列表 words，找出所有同时在二维网格和字典中出现的单词。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

示例:

输入: 
words = ["oath","pea","eat","rain"] and board =
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]

输出: ["eat","oath"]
*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let trie = {};
  let wordSet = new Set();
  let x_range = board[0].length;
  let y_range = board.length;
  // 构建字典树{a:{b:{c:{d:{#:true}}}}}
  for (let word of words) {
    let node = trie;
    for (let c of word) {
      if (node[c] === void 0) node[c] = {};
      node = node[c];
    }
    node["#"] = true;
  }

  let dfs = function (word, x, y, board, trie_node) {
    if (trie_node["#"]) wordSet.add(word);
    if (
      x < 0 ||
      x >= x_range ||
      y < 0 ||
      y >= y_range ||
      !trie_node[board[y][x]]
    )
      return;
    let tmp = board[y][x];
    word += board[y][x];
    board[y][x] = "@";
    for (let s of [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ])
      dfs(word, x + s[0], y + s[1], board, trie_node[tmp]);
    // dfs完状态回溯
    board[y][x] = tmp;
  };
  for (let i = 0; i < y_range; i++) {
    for (let j = 0; j < x_range; j++) {
      dfs("", j, i, board, trie);
    }
  }
  return Array.from(wordSet);
};
