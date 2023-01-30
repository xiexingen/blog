---
title: Promise
nav:
  title: 笔记
  path: /note
group:
  title: 核心方法
  path: /core
  order: 1000
---

# Promise

仿 Promise 实现功能

## 实现原理

- 构造函数中执行传入的函数，并把内部定义的 resolve|reject 方法传递过去(setTimeout 调用)，会遍历执行队列中的函数
- then 里面其实又是一个新 Promise，在 then 里面会往当前的队列中传递要执行的函数

## Promise.all

Promise.all() 方法接收一个 promise 的 iterable 类型（注：Array，Map，Set 都属于 ES6 的 iterable 类型）的输入，并且只返回一个 Promise 实例，  那个输入的所有 promise 的 resolve 回调的结果是一个数组。这个 Promise 的 resolve 回调执行是在所有输入的 promise 的 resolve 回调都结束，或者输入的 iterable 里没有 promise 了的时候。它的 reject 回调执行是，只要任何一个输入的 promise 的 reject 回调执行或者输入不合法的 promise 就会立即抛出错误，并且 reject 的是第一个抛出的错误信息

## Promise.race

Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个 promise 解决或拒绝，返回的 promise 就会解决或拒绝

## 代码演示

### 简单使用

<code src="./demo/demo1.tsx" />

### Promise.all

<code src="./demo/demo2.tsx" />

### Promise.race

<code src="./demo/demo3.tsx" />

### 调度器【番外篇】

<code src="./demo/scheduler.tsx" />
