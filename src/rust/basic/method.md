---
title: 方法
order: 14
nav:
  title: Rust
  path: /rust
group:
  title: 基础知识
  path: /basic
  order: 5
---

# 方法

与其他面向对象语言不同，如: 在 C# 中 方法与属性定义在一个 class 中，在 rust 中 通过 impl 去定义方法

```C#
public class Person {
 String _name;

 public Person(String name){
  this._name=name;
 }

 public void Say(){
  Console.WriteLine($"name is {this._name}")
 }
}
```

而在 rust 中，你应该这样

```bash
struct  Person{
  name:String
}

impl Person {
  // 可以理解为构造函数
  fn new(name:String)->Person{
    Person { name: name }
  }
  // 实例方法
  fn say(&self){
    println!("{}",self.name);
  }
}

fn main() {
  let person= Person::new(String::from("XXG"));
  person.say();
}

```
