---
title: Cargo
order: 1
nav:
  title: Rust
  order: 25
group:
  title: 前置准备
  order: 1
---

# cargo

## 命令

### 创建项目

```bash
cargo new [项目名]
```

### 运行

> 如果代码没有改变的情况，会直接运行上一次编译的文件

```bash
-- 编译+运行
cargo run  -- 也可以快捷方式 cargo r
```

### 检查代码

```bash
cargo check -- 也可以快捷方式 cargo c
```

### 发布构建

```bash
cargo build --release -- 也可以快捷方式 cargo b
```

### 其他

```bash
cargo -h -- 查看帮助文档
```
