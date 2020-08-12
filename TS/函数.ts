/*
函数中使用类型
*/
function fun(a: string, b: string): string {
  return a + b;
}
/*
接口定义函数类型
*/
interface Fun {
  (a: string, b: number): string;
}

let fn: Fun = (a, b) => a + b;

/*
获取函数参数类型
*/
type Fn = (a: string, b: number) => void;
type FnParams = Parameters<Fn>;

/*
获取函数返回值类型
*/
type Type = ReturnType<() => string>;
