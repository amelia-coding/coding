/*
固定函数执行的速率
如果持续触发事件，每隔一段时间，执行一次函数
*/

//当触发事件的时候，
//我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，
//如果大于设置的时间周期，就执行函数，
//然后更新时间戳为当前的时间戳，如果小于，就不执行。
const throttle = function (fn, delay) {
  let pre = 0;
  return function (...args) {
    let now = +new Date();
    if (now - pre > delay) {
      fn.apply(this, args);
      pre = now;
    }
  };
};

//当触发事件的时候，我们设置一个定时器，
//再触发事件的时候，如果定时器存在，就不执行，
//直到定时器执行，然后执行函数，清空定时器，这样就可以设置下个定时器。
const throttle = function (fn, delay) {
  let timer;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null; // 执行后释放定时器变量，用于设置下个定时器
        fn.apply(this, args);
      }, delay);
    }
  };
};

/*
时间戳 + 定时器
*/
function throttle(fn, wait) {
  var timer;
  var previous = 0;
  return function (...args) {
    var now = +new Date();
    var remaining = wait - (now - previous);
    if (remaining <= 0) {
      previous = now;
      fn.apply(this, args);
      // 如果存在延时执行定时器,将其取消掉,用于设置下一个定时器
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    } else if (!timer) {
      // 设置延时执行
      timer = setTimeout(() => {
        previous = +new Date();
        timer = null;
        fn.apply(this, args);
      }, remaining);
    }
  };
}
