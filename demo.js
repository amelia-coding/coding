// const shuffle = ([...arr]) => {
//   let m = arr.length;
//   while (m) {
//     const i = Math.floor(Math.random() * m--);
//     [arr[m], arr[i]] = [arr[i], arr[m]];
//   }
//   return arr;
// };

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
