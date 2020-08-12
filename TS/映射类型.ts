/*
ReadOnly<T>，将 T 中的类型都变为只读。
Partial<T>，将 T 中的类型都变为可选。
Exclude<T, U>，从 T 中剔除可以赋值给 U 的类型。
Extract<T, U>，提取 T 中可以赋值给 U 的类型。
NonNullable<T>，从 T 中剔除 null 和 undefined。
ReturnType<T>，获取函数返回值类型。
InstanceType<T>，获取构造函数类型的实例类型。
*/

// 实例类型,和构造函数关联
// 构造函数要有new (...args:any) => void的签名
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
const a: T0 = new C();

type T4 = InstanceType<typeof Function>;
