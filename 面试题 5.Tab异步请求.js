/**
 * 两个Tab，两个异步请求的时序问题

- 节流防抖，治标不治本，影响用户体验
- 取消请求，当然了这个取消请求它只是不继续处理接口后续的响应了，并不是真的把请求给取消了。
- 使用ref来保存当前currenttab，当请求返回时判断tab的值是不是等于当前的currenttab

如何取消axios请求和如何取消fetch请求
 */


