/*
 * @Author: your name
 * @Date: 2020-06-29 10:41:47
 * @LastEditTime: 2020-06-29 10:41:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coding\工具类\util.js
 */
export const randStr = () => {
  return Math.random().toString(36).substr(2);
};
