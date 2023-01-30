---
title: debounce & throttle
nav:
  title: 笔记
  path: /note
group:
  title:
  path: /core
  order: 1000
---

# debounce 防抖

在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时

## 代码演示

### 基础使用

<code src="./demo/demo1.tsx" />

# throttle 节流

事件频繁触发不会执行，最多不会超过 n 秒执行一次

## 代码演示

### 基础使用

<code src="./demo/demo2.tsx" />
