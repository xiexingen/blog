---
title: 所有权&借用
order: 6
nav:
  title: Rust
group:
  title: 基础知识
---

# 所有权&借用

在其他语言，如 C# 中，内存安全几乎都是通过 GC 的方式实现，但是 GC 会引来性能、内存占用以及 Stop the world 等问题。而 Rust 采用了`所有权系统`的方式。

## 栈

先进后出、已知且固定大小的内存空间

## 堆

大小未知或者可能变化的数据存储在堆上，并返回一个表示该位置地址的`指针`存储到`栈`上

## 转移所有权

## 克隆(深拷贝)

## 拷贝(浅拷贝)

## 借用

获取变量的引用，称为借用(borrowing)

```bash
fn main() {
  let x=10;
  // 创建一个 i32 值的引用
  let y= &x;

  assert_eq!(10,x);
  // 解引用
  assert_eq!(10,*y);
}
```

## 引用

### 不可变引用

```bash
fn main() {
  let s1= String::from("hello");
  let len=calculate_length(&s1);

  println!("'{}' 的长度是{}.",s1,len);
}

fn calculate_length(s:&String)-> usize{
  // s.push_str("test"); // 不能操作，会报错
  s.len()
}
```

### 可变引用

```bash
fn main() {
  let mut s1= String::from("hello");
  let len=calculate_length(&mut s1);

  println!("'{}' 的长度是{}.",s1,len);
}

fn calculate_length(s:&mut String)-> usize{
  s.push_str(",word");
  s.len()
}
```

- 可变引用同时只能存在一个

它有一个很大的限制： 同一作用域，特定数据只能有一个可变引用

```bash
fn main() {
  let s1= String::from("hello");

  let r1=&mut s1;
  // let r2=&mut s1; // 报错，同一个作用域特定数据只能有一个可变应用
}
```

- 可变引用与不可变引用不能同时存在

```bash
fn main() {
  let mut s= String::from("hello");

  let r1 = &s;
  let r2=&s;

  let r3= &mut s; // 报错，cannot borrow `s` as mutable because it is also borrowed as immutable

  print!("{},{},and {}",r1,r2,r3)
}
```
