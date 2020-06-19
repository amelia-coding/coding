/**
剑指offer：020-包含min函数的栈
定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
**/


var stack = [];
var minStack = [];
let tmp = null;

function push(node) {
  if (!tmp || node < tmp) tmp = node;
  minStack.push(tmp);
  stack.push(node);
}

function pop() {
  stack.pop();
  minStack.pop();
}

function top() {
  return stack[stack.length - 1]
}

function min() {
  return minStack[minStack.length - 1]
}

