//www.webhek.com/post/javascript-bind.html

//再举个栗子。每隔一秒在控制台打印 1-5，看起来是道考察闭包的经典题目。

for (var i = 1; i <= 5; i++) {
  ;(function (i) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  })(i)
}
//ES6 下能用 let ：

for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, i * 1000)
}
//也可以用 bind，瞬间逼格提升：

for (var i = 1; i <= 5; i++) {
  setTimeout(console.log.bind(console, i), i * 1000)
}
