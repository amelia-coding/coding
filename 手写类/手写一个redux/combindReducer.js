/*
 * @Author: your name
 * @Date: 2020-06-22 10:45:16
 * @LastEditTime: 2020-06-22 11:01:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coding\手写类\手写一个redux\combindReducer.js
 */
module.exports = function combindReducer(reducers) {
  //过滤掉不是function 的reducer
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  reducerKeys.forEach((key) => {
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  });
  const finalReducersKeys = Object.keys(finalReducers);
  let hasChange = false;
  const nextState = {};
  return function combind(state = {}, action) {
    finalReducersKeys.forEach((key) => {
      const previousValue = state[key];
      const nextValue = reducers[key](previousValue, action);
      nextState[key] = nextValue;
      hasChange = hasChange || previousValue !== nextValue;
    });
    console.log(hasChange, nextState, state);
    return hasChange ? nextState : state;
  };
};
