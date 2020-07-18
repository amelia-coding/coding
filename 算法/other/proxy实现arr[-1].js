const negativeArray = (els) =>
  new Proxy(els, {
    get: (target, propKey, receiver) => {
      console.log(target, propKey, receiver);
      return Reflect.get(
        target,
        +propKey < 0 ? String(target.length + +propKey) : propKey,
        receiver
      );
    },
  });
const unicorn = negativeArray(["京", "程", "一", "灯"]);
console.log(unicorn[-1]);
