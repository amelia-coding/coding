/*
算法题：Semantic Versioning 是一个前端通用的版本规范。格式为“{MAJOR}.{MINOR}.{PATCH}-{alpha|beta|rc}.{number}”，
要求实现 compare(a, b) 方法，比较 a, b 两个版本大小，
  1. 当 a > b 是返回 1；
  2. 当 a = b 是返回 0；
  3. 当 a < b 是返回 -1；
  4. 其中，rc > beta > alpha，major > minor > patch；
  5. 例子，1.2.3 < 1.2.4 < 1.3.0-alpha.1 < 1.3.0-alpha.2 < 1.3.0-beta.1 < 1.3.0-rc.1 < 1.3.0
*/

