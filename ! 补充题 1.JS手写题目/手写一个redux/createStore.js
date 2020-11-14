/*
 * @Author: your name
 * @Date: 2020-06-19 15:24:26
 * @LastEditTime: 2020-06-23 14:56:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coding\手写类\手写一个redux\createStore.js
 */

const combindReducer = require("./combindReducer");

function createStore(reducer, preloadedState, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer, preloadedState);
  }
  let currentState = preloadedState;
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

  function replaceReducer(nextReducer) {
    reducer = nextReducer;
    dispatch({ type: "@@REDUX_REPLACE" });
  }

  dispatch({ type: "@@REDUX_INIT" }); //初始化store数据

  return {
    dispatch,
    getState,
    subscribe,
    replaceReducer,
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
const preloadedState = {
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
  //preloadedState
);
console.log(store.getState());
