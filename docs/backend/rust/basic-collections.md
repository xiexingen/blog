---
title: 集合
order: 20
nav:
  title: Rust
  path: /backend/rust
group:
  title: Rust
---

# 集合

## Vec

通过 Vec 提供的 new 可以创建一个动态数组

```bash
let arr: Vec<i32> = Vec::new();
arr.push(10);
```

也可以通过 vec! 宏来创建数组

```bash
let arr = vec![1, 2, 3];
```

出于性能考虑，如果在可以确定数组长度的情况下，建议使用 capacity 来初始化固定长度的数组

```bash
let mut arr:Vec<i32>=Vec::with_capacity(10);
```

## 取值

- 下标
- get

get 方法获取下标值会处理下标越界的情况，同时返回值为 Option 类型

```bash
let arr = vec![1, 2, 3, 4, 5];
//let does_not_exist = &arr[100]; // 会直接报错，程序终止
let does_not_exist = arr.get(100); // 返回的是 None 值
```

## 遍历

```bash
#![allow(unused)]
fn main() {
   let arr = vec![1, 2, 3,4];
   for i in &arr {
     println!("{}", i);
   }
}
```

```bash
#![allow(unused)]
fn main() {
   let mut arr = vec![1, 2, 3,4];
   // 遍历，同时修改值
   for i in &mut arr {
      *i+=10;
     println!("{}", i);
   }
}
```
