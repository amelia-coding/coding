/*
你尽管触发事件，但是我一定在事件触发 n 秒后才执行，
如果你在一个事件触发的 n 秒内又触发了这个事件，
那我就以新的事件的时间为准，n 秒后才执行，
总之，就是要等你触发完事件 n 秒内不再触发事件，
我才执行，真是任性呐!
*/
function debounce(fn,delay,immediate) {
  const timer;
  const bouned = function (...args) {
    if (timer) clearTimeout(timer);
    if (immediate) {
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      if (!timer) result = fn.apply(this, args);
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
    return result;
  };

  //立即执行版本可以取消
  bouned.cancel = function() {
    clearTimeout(timer)
    timer = null
  }
  return bouned
}

























function debounce(fn, delay, immediate) {
  let timer, result;
  // 这里不能使用箭头函数，不然 this 依然会指向 Windows对象
  // 使用rest参数，获取函数的多余参数
  const debounced = function(...args) {
    if (timer) clearTimeout(timer);
    if (immediate) {
      const callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      if (callNow) result = fn.apply(this, args);
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
    return result;
  };

  debounced.cancel = () => {
    clearTimeout(timer);
    timer = null;
  };

  return debounced;
}