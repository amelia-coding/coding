/*
 * @Author: your name
 * @Date: 2020-06-22 16:58:47
 * @LastEditTime: 2020-06-22 16:58:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coding\手写类\手写一个redux\utils\symbol-observable.ts
 */
declare global {
  interface SymbolConstructor {
    readonly observable: symbol;
  }
}

const $$observable = /* #__PURE__ */ (() =>
  (typeof Symbol === "function" && Symbol.observable) || "@@observable")();

export default $$observable;
