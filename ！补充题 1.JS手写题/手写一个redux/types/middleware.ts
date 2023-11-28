/*
 * @Author: your name
 * @Date: 2020-06-22 11:11:52
 * @LastEditTime: 2020-06-22 11:16:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \coding\手写类\手写一个redux\types\middleware.ts
 */

import { Dispatch } from "./store";

export interface MiddlewareAPI<D extends Dispatch = Dispatch, S = any> {
  dispatch: D;
  getState(): S;
}

export interface Middleware<
  _DispatchExt = {}, // TODO: remove unused component (breaking change)
  S = any,
  D extends Dispatch = Dispatch
> {
  (api: MiddlewareAPI<D, S>): (
    next: D
  ) => (action: D extends Dispatch<infer A> ? A : never) => any;
}
