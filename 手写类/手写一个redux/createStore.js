/*
 * @Author: your name
 * @Date: 2020-06-19 15:24:26
 * @LastEditTime: 2020-06-22 11:07:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coding\手写类\手写一个redux\createStore.js
 */

const combindReducer = require("./combindReducer");

function createStore(reducer, initState) {
  let currentState = initState;
  let listeners = [];

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    console.log(action, currentState);
    currentState = reducer(currentState, action);
    listeners.forEach((fn) => fn(currentState));
  }

  function subscribe(fn) {
    listeners.push(fn);
  }

  dispatch({ type: "@@REDUX_INIT" }); //初始化store数据

  return {
    dispatch,
    getState,
    subscribe,
  };
}

const countReducer = function (
  state = {
    count: 0,
  },
  action
) {
  switch (action.type) {
    case "increase":
      return Object.assign({}, state, { count: action.payload.count });
    default:
      return state;
  }
};
const cityReducer = function (
  state = {
    city: "北京",
  },
  action
) {
  switch (action.type) {
    case "city_from":
      return Object.assign({}, state, { city: action.payload.city });
    default:
      return state;
  }
};
const initState = {
  count: {
    count: 1,
  },
  city: {
    city: "beijing",
  },
};
const store = createStore(
  combindReducer({
    count: countReducer,
    city: cityReducer,
  })
);
console.log(store.getState());
