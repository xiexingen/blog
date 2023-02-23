---
title: 跨页面通信
order: 110
nav:
  title: 笔记
  path: /note
group:
  title: 技巧
  path: /skill
  order: 10
---

# 跨页面通信

常用的跨页面通信技巧

## 方式

### Broadcast Channel 形式

Broadcast Channel 叫做`广播频道`,官方文档说，该 API 是用于同源不同页面之间完成通信的功能,它与 postMessage 的区别就是：BroadcastChannel 只能用于同源的页面之间进行通信，而 postMessage 却可以用于任何的页面之间的通信，换句话说，BroadcastChannel 可以认为是 postMessage 的一个实例，它承担了 postMessage 的一个方面的功能.

> 可以通过 addEventListener 监听，可以通过 removeEventListener 取消监听。

### Service Worker 形式

Service Worker 是一个可以长期运行在后台的 Worker，常用于一些大计算会阻塞页面的功能，也能够实现与页面的双向通信。可以将 Service Worker 作为消息的处理中心，可实现广播效果。

### onstorage 形式

相当于监听 localStorage 值的更改

### opener 形式

通过 window.open 打开一个新页面时，window.open 方法会返回一个被打开页面的引用，而被打开页面则可以通过 window.opener 获取到打开它的页面的引用.(当然这是在没有指定 noopener 的情况下)

### SharedWorker 形式

SharedWorker 接口代表一种特定类型的 worker，可以从几个浏览上下文中访问，例如几个窗口、iframe 或其他 worker。它们实现一个不同于普通 worker 的接口，具有不同的全局作用域, SharedWorkerGlobalScope。

## 代码演示

### Broadcase Channel

<code src="./demo/broadcase-channel.tsx" />

### Service Worker

<code src="./demo/service-worker.tsx" />

### Onstorage

<code src="./demo/onstorage.tsx" />
