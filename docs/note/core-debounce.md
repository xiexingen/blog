---
title: 防抖&节流
nav:
  title: 笔记
group:
  title: 核心方法
---

# debounce 防抖

在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时

## 代码演示

### 基础使用

<code src="./_demos/core/debounce/demo/demo1.tsx"></code>

# throttle 节流

事件频繁触发不会执行，最多不会超过 n 秒执行一次

## 代码演示

### 基础使用

<code src="./_demos/core/debounce/demo/demo2.tsx"></code>
