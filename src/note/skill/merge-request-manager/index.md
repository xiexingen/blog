---
title: 请求合并管理
nav:
  title: 笔记
  path: /note
group:
  title: 技巧
  path: /skill
  order: 10
---

# 请求合并管理

某些场景下，比如列表里面渲染的时候需要根据原本的值进行一次请求去对内容进行富华，然后再展示。这种场景下可能就会产生比较多次的请求，请求合并管理就是为解决这个问题而诞生的.

## 代码演示

### 简单使用

<code src="./demo/simple.tsx" />
