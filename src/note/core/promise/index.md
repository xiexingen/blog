---
title: Promise
nav:
  title: 笔记
  path: /note
group:
  title: 核心方法
  path: /core
  order: 1
---

# Promise

仿 Promise 实现功能

# 实现原理

- 构造函数中执行传入的函数，并把内部定义的 resolve|reject 方法传递过去(setTimeout 调用)，会遍历执行队列中的函数
- then 里面其实又是一个新 Promise，在 then 里面会往当前的队列中传递要执行的函数

## 代码演示

### 简单使用

<code src="./demo/demo1.tsx" />
