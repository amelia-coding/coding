/**
 * @params list {Array} - 要迭代的数组
 * @params limit {Number} - 并发数量控制数
 * @params asyncHandle {Function} - 对`list`的每一个项的处理函数，参数为当前处理项，必须 return 一个Promise来确定是否继续进行迭代
 * @return {Promise} - 返回一个 Promise 值来确认所有数据是否迭代完成
 */
let mapLimit = (urls, limit, asyncHandle) => {
  let recursion = (urls) => {
    return asyncHandle(urls.shift()).then((val) => {
      // 数组还未迭代完，递归继续进行迭代
      if (urls.length !== 0) return recursion(urls);
      else return "finish";
    });
  };

  let asyncList = []; // 正在进行的所有并发异步操作
  while (limit--) {
    asyncList.push(recursion(urls));
  }
  return Promise.all(asyncList); // 所有并发异步操作都完成后，本次并发控制迭代完成
};

function asyncHandle(url) {
  return fetch(url);
}

mapLimit(urls, limit, asyncHandle);
