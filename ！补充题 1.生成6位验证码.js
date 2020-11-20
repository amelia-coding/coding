/*
生成6位验证码
*/

function getCode(num) {
  return Array.from({ length: num }, () =>
    ((Math.random() * 1e6) | 0).toString().padStart(6, "0")
  );
}

console.log(getCode(1000));
