const myfetch = (url)=>{
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(url);
    }, 3000);
  });
}

let recursion = (urls) => {
  return myfetch(urls.shift()).then(() => {
    // 数组还未迭代完，递归继续进行迭代
    if (urls.length !== 0) return recursion(urls);
  });
};

let mapLimit = (urls, limit) => {
  let asyncList = []; // 正在进行的所有并发异步操作
  while (limit--) {
    asyncList.push(recursion(urls));
  }
  Promise.all(asyncList); // 所有并发异步操作都完成后，本次并发控制迭代完成
};

mapLimit([1,2,3,4,5,6,7,8,9,10], 2)
