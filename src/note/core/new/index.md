---
title: new
nav:
  title: 笔记
  path: /note
group:
  title: 核心方法
  path: /core
  order: 1
---

# 实现原理

1. 创建一个空对象
2. 为步骤 1 创建的空对象的**proto**指向函数
3. 指向函数修改 this 指向
4. 返回对象

## 代码演示

### 简单使用

<code src="./demo/demo.tsx" />
