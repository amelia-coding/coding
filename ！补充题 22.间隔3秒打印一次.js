/*
补充代码 
//实现打印4次，每次间隔 3000ms 
function repeat(func, times, wait) {

} 
const repeatFun = repeat(console.log, 4, 3000)  {

} 
repeatFun('Hello World')
*/

const sleep = (timeout = 0) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

function repeat(func, times, wait) {
  return async function (...args) {
    while (times--) {
      await sleep(wait);
      func(...args);
    }
  };
}

const repeatFun = repeat(console.log, 4, 3000);
repeatFun("Hello World");
