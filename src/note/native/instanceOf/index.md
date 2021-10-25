---
title: instanceOf
nav:
  title: 笔记
  path: /note
group:
  title: 原生方法
  path: /native
  order: 1
---

# instanceOf

instanceOf 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

# 实现原理

遍历实例对象的原型链，挨个往上查找看是否有与构造函数的 prototype 相等的原型，直到最顶层 Object 还找不到就返回 false

## 代码演示

### 递归实现

<code src="./demo/recursion.tsx" />

### 遍历实现

<code src="./demo/each.tsx" />
