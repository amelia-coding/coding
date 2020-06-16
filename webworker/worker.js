/*
 * @Author: your name
 * @Date: 2020-06-16 14:54:13
 * @LastEditTime: 2020-06-16 14:59:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coding\webwoker\worker.js
 */
onmessage = function (e) {
  console.log("e", e);
  postMessage("workerResult");
  // 记得关闭
  self.close();
};
