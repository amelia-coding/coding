<!--
 * @Author: your name
 * @Date: 2020-06-19 15:25:29
 * @LastEditTime: 2020-06-19 15:25:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coding\手写类\手写一个promise\stemp.md
-->

# 手写 Promise

## Promise 自身的状态

1、state 存放当前的状态。

2、value 存放当前状态的值。

3、then 方法，返回值也是一个 Promise。

4、catch 方法。

5、finally 方法。

5、静态方法，如 Promise.all、Promise.resolve

## 实战案例

1、实现一个 promise ，在 setTimeout 中去 resolve。 ok

2、实现一个 promise，直接同步 resolve。 ok

3、实现一个 promise，防止 resolve 多次。 ok

4、实现一个 promise，可以让 then 方法链式调用。 ok

5、实现一个 promise，支持空 then 函数。 ok

6、实现一个 promise，支持 then 传递 thenable 对象。 ok

7、实现一个 promise，支持 then 传递 promise 对象。 ok

8、实现一个 promise，支持 resolve 传递 promise 对象。 ok

9、实现一个 promise，处理 then 中的循环 promise。 ok

10、实现一个 promise，支持静态方法 Promise.all。 ok

11、实现一个 promise，支持 reject 和 catch。 ok

12、实现一个 promise，支持处理完成态或失败态的 then。 ok
