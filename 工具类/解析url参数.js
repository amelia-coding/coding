/*
 * @Author: your name
 * @Date: 2020-06-29 10:37:08
 * @LastEditTime: 2020-06-29 10:37:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coding\工具类\querystring.js
 */
const parseQueryString = (url) => {
  if (typeof url === "string") {
    let obj = {};
    const paramPart = url.replace(/#\S*/, "").match(/\?[^#]+/);
    if (paramPart === null) {
      return {};
    }
    const paramGroup = paramPart[0].substr(1).split("&");
    for (let i = 0, length = paramGroup.length; i < length; i++) {
      let name = paramGroup[i].split("=")[0];
      let value = paramGroup[i].match(/[=].*/)
        ? paramGroup[i].match(/[=].*/)[0].substr(1)
        : null;
      obj[name] = value;
    }

    return obj;
  } else {
    throw new Error("请传入字符串");
  }
};
