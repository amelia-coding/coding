/*
 * @Author: your name
 * @Date: 2020-06-19 15:23:19
 * @LastEditTime: 2020-06-19 17:53:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coding\手写类\手写一个redux\applyMiddleware.js
 */
function applyMiddleware(...middlewares) {
  return (createStore) => (reducer, preloadedState, enhancer) => {
    const store = createStore(reducer, preloadedState, enhancer);
    let dispatch = store.dispatch;
    let chain = [];
    const middlewareAPI = {
      getState: store.getState,
      //我们用applyMiddleware是为了改造dispatch的，所以applyMiddleware执行完后，'
      //dispatch是变化了的，而middlewareAPI是applyMiddleware执行中分发到各个middleware，
      //所以必须用匿名函数包裹dispatch，这样只要dispatch更新了，
      //middlewareAPI中的dispatch应用也会发生变化。
      dispatch: (action) => dispatch(action),
    };
    chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch,
    };
  };
}

// compost(f,g,h) => f(g(h(x)))
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

function add1(x) {
  console.log(111);
  return function (action) {
    console.log(1111);
  };
}

function add2(x) {
  console.log(222);
  return function (action) {
    console.log(2222);
  };
}

function add3(x) {
  console.log(333);
  return function (action) {
    console.log(3333);
  };
}

// console.log(compose(add1, add2, add3)(9));
const fun = compose(add1, add2, add3)(9);
fun({ type: {} });

// (...arg) => add1(add2(...arg));
// (...args) => add1(add2(add3(...args)));
