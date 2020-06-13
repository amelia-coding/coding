function promiseResolutionProducer(promise2, x, resolve, reject) {
  if (promise === x) {
    throw new Error("循環引用");
  }
  if (x instanceof myPromise) {
    if (x.state === PENDING) {
      x.then((value) => {
        resolve(value);
      });
    } else {
      x.state === FULFILLED && resolve(x.value);
      x.state === REJECTED && resolve(x.value);
    }
  }
  if ((typeof x === "object" || typeof x === "function") && x != null) {
    if (typeof x.then === "function") {
      x.then(
        (y) => promiseResolutionProducer(promise2, y, resolve, reject),
        reject
      );
    }
  } else {
    resolve(x);
  }
}

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class myPromise {
  constructor(exector) {
    this.state = "pending";
    this.value = undefined;
    this.onFullfilledFn = [];
    this.onRejectedFn = [];

    // 成功
    let resolve = (value) => {
      if (typeof value === "object" || typeof value === "funtion") {
        //resovle了一個promise
        promiseResolutionProducer(this, value, resolve, reject);
        return;
      }
      setTimeout(() => {
        if (this.state === "pending") {
          this.state = "fulfilled";
          this.value = value;
          this.onFullfilledFn.forEach((fn) => fn());
        }
      });
    };
    // 失败
    let reject = (value) => {
      this.state = "rejected";
      this.value = value;
    };

    try {
      exector(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFullfilledFn = (val) => val) {
    let promise2 = null;
    if (this.state == "fulfilled") {
      promise2 = new myPromise((resolve, reject) => {
        const x = onFullfilledFn(this.value); //比较x和promise2
        promiseResolutionProducer(promise2, x, resolve, reject);
      });
      return promise2;
    }
    if (this.state == "rejected") {
      promise2 = new myPromise((resolve, reject) => {
        const x = onRejectedFn(this.value); //比较x和promise2
        promiseResolutionProducer(promise2, x, resolve, reject);
      });
      return promise2;
    }
    if (this.state === "pending") {
      promise2 = new myPromise((resolve, reject) => {
        this.onFullfilledFn.push(() => {
          const x = onFullfilledFn(this.value); //比较x和promise2
          promiseResolutionProducer(promise2, x, resolve, reject);
        });
      });
      return promise2;
    }
  }
}

new myPromise((resolve, reject) => {
  resolve(1);
  resolve(
    new Promise((r, j) => {
      r();
    })
  );
})
  .then((value) => {
    console.log(value);
    return 2;
  })
  .then()
  .then((data) => {
    return {
      then(r, j) {
        r("thenable"); //thenable对象
      },
    };
  })
  .then((data) => {
    return new myPromise((resolve) => {
      resolve("my promise");
    });
  })
  .then((value) => {
    console.log(value);
  });

const promise = new Promise((r, j) => {
  r();
});

promise.then(() => {
  return promise; //循環引用
});
