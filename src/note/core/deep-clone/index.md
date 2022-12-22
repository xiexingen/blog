---
title: 深度拷贝
nav:
  title: 笔记
  path: /note
group:
  title: 核心方法
  path: /core
---

# 深度拷贝

实现深度拷贝

## 思路

遍历对象的属性，判断是否是对象，如果是对象则递归处理否则赋值(特殊处理下循环引用的，通过 Map 存储一个映射关系，如果有则直接返回 Map 中的)

## 代码演示

### 简单使用

<code src="./demo/demo1.tsx" />
