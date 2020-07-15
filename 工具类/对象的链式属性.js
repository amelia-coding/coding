var result = "a.b.c?.x".replace(new RegExp(/([\$_\w\.]+\?\.)/, "g"), function (
  res
) {
  let str = res.replace(/\?\./, "");
  let arrs = str.split(".");
  let strArr = [];
  for (let i = 1; i <= arrs.length; i++) {
    strArr.push(arrs.slice(0, i).join("."));
  }
  let compile = strArr.join("&&");
  const done = compile + "&&" + str + ".";
  return done;
});

console.log(result); //a&&a.b&&a.b.c&&a.b.c.x
