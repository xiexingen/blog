---
title: 泛型&特性
order: 18
nav:
  title: Rust
  path: /backend/rust
group:
  title: Rust
---

# 泛型&特性

## 特性

在 rust 中 特性 通过 trait 定义

特性可以有默认实现，也可以只有定义

## 实现

实现某个特性使用 impl

特性约束，类似 C# 中的泛型

```bash
// T: Summary 被称为特征约束
pub fn notify<T: Summary>(item: &T) {
  // ...
}
```

## 多重约束

```bash
// item 参数需要同时满足 Summary 和 Display 的约束
pub fn notify(item: &(impl Summary + Display)) {}

//或者更简介的方式
pub fn notify<T: Summary + Display>(item: &T) {}
```

## where 约束

类似 C# 中的泛型约束

```bash
fn some_function<T, U>(t: &T, u: &U) -> i32
    where T: Display + Clone,
          U: Clone + Debug
{}
```
