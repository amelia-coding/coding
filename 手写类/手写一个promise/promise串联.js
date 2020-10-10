var createPromise = (time) => () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("timein" + time);
      resolve();
    }, time * 1000);
  });

function serpromise(arr) {
  arr.reduce((pre, next) => {
    return pre.then(next).catch(next); //本质就是不停地调用then
  }, Promise.resolve());
}

var arr = [
  createPromise(2),
  createPromise(1),
  createPromise(3),
  createPromise(4),
  createPromise(5),
];
// Promise.resolve().then(createPromise(2)).then(createPromise(1))
serpromise(arr);

//async
var fn = async function (arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    var result = await arr[i];
    console.log(result);
  }
};
fn(arr);
