---
title: 流程控制
order: 10
nav:
  title: Rust
group:
  title: 基础知识
---

# 流程控制

## if else

跟其他类型类似，不过多介绍，附一个骚写法

```bash
fn main() {
  let v=10;
  let number= if v <10 {
    100
  } else {
    1000
  };
  println!("{}",number); // 1000
}

```

## for

```bash
for i in 1..5{
 println!("{}",i);
}
```

## where

```bash
fn main() {
  let mut sum=1;
  while sum<10 {
    print!("{}",sum);
    sum=sum+1;
  }
}
```
