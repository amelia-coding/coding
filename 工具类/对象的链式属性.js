function format(orgin) {
  return orgin.replace(new RegExp(/([\$_\w\.]+\?\.)/, "g"), function (res) {
    let str = res.replace(/\?\./, "");
    let arrs = str.split(".");
    console.log(str, arrs);
    let strArr = [];
    for (let i = 1; i <= arrs.length; i++) {
      strArr.push(arrs.slice(0, i).join("."));
      console.log(strArr);
    }
    let compile = strArr.join("&&");
    const done = compile + "&&" + str + ".";
    return done;
  });
}

console.log(format("a.b.c?.x")); //a&&a.b&&a.b.c&&a.b.c.x
