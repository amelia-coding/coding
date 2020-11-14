type Name = string; // 基本类型
type NameFun = () => string; // 函数
type NameOrRFun = Name | NameFun; // 联合类型

type PartialPoint = { x: number } | { y: number };
type PartialPoint2 = { x: number } & { y: number };

//联合类型不可以被实现
class SomePartialPoint implements PartialPoint {
  x: 1;
  y: 2;
}

// 但可以实现扩展的类型
class SomePartialPoint2 implements PartialPoint2 {
  x: 1;
  y: 2;
}
