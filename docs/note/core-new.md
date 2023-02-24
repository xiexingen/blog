---
title: new
nav:
  title: 笔记
group:
  title: 核心方法
---

# 实现原理

1. 创建一个空对象
2. 为步骤 1 创建的空对象的**proto**指向函数
3. 指向函数修改 this 指向
4. 返回对象

## 代码演示

### 简单使用

<code src="./_demos/core/new/demo/demo.tsx"></code>
