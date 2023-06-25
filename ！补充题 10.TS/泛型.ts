/**
 * 泛型可以修饰类，函数
 */

//1. 使用泛型创建对象
class Person {
  firstName = "John";
  lastName = "Doe";
}

class Factory {
  create<T>(type: new () => T): T {
    return new type();
  }
}
let factory = new Factory();

