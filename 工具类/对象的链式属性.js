/*
 * @Author: du.j
 * @Date: 2020-07-02 11:18:41
 * @LastEditors: du.j
 * @LastEditTime: 2020-07-02 11:18:41
 * @Description: file content
 */
console.log(
  "a.b.c?.x".replace(new RegExp(/([\$_\w\.]+\?\.)/, "g"), function (res) {
    let str = res.replace(/\?\./, "");
    let arrs = str.split(".");
    let strArr = [];
    for (let i = 1; i <= arrs.length; i++) {
      strArr.push(arrs.slice(0, i).join("."));
    }
    let compile = strArr.join("&&");
    const done = compile + "&&" + str + ".";
    console.log(done);
    return done;
  })
);
