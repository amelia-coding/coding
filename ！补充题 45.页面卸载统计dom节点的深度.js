/*
DOM 的体积过大会影响页面性能，
假如你想在用户关闭页面时统计（计算并反馈给服务器）
当前页面中元素节点的数量总和、元素节点的最大嵌套深度以及最大子元素个数，
请用 JS 配合原生 DOM API 实现该需求（不用考虑陈旧浏览器以及在现代浏览器中的兼容性，
可以使用任意浏览器的最新特性；不用考虑 shadow DOM）。
比如在如下页面中运行后,

<html>
  <head></head>
  <body>
    <div>
        <span>f</span>
        <span>o</span>
        <span>o</span>
    </div>
  </body>
</html>

解题思路：unload/beforeUnload事件 + navigator.sendBeacon  + 树节点的层序遍历
如某些统计系统，在页面unload时，如果要上报当前数据，采用xhr的同步上报方式，会阻塞当前页面的跳转；使用new Image有可能遇到aborted，导致无法成功发送。
navigator.sendBeacon() 方法可用于通过HTTP将少量数据异步传输到Web服务器。
1、不拖延卸载流程
*/
window.addEventListener('unload', logData, false);
function logData() {
  navigator.sendBeacon("/log", analyticsData);
}

(function(){
  const root  = document.documentElement
  let queue = [root]
  let maxDeep = 0,maxChildNum = 0
  let totalNode = 0
  while(queue.length) {
    let len = queue.length
    totalNode += len
    while(len) {
      const node = queue.shift()
      const children = node.children
      if(children.length > 0) {
        queue.push(...children)
        maxChildNum = Math.max(maxChildNum,children.length)
      }
      len--
    }
    maxDeep++
  }
  console.log(maxDeep,maxChildNum,totalNode)
})()

