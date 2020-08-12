interface D {
  a: string;
  b?: string; // 可选属性
  readonly c: number; // 只读属性
  [key: number]: string; // 索引类型
  new (...args: [number]): number; //定义构造函数类型
  (a: number, b: string): string; //定义函数类型
}
