---
title: 模式匹配
order: 12
nav:
  title: Rust
  path: /backend/rust
group:
  title: Rust
---

# 模式匹配

match 中的 \_ 类似于 js 中的 default，用于处理未匹配的情况

while let

```bash
fn main() {
  let mut stack=Vec::new();
  stack.push(1);
  stack.push(2);
  stack.push(3);

  while let Some(pop)=stack.pop(){
   print!("{}",pop);
  }
}
```
