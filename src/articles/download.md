---
title: 前端下载
nav:
  title: 随笔
  path: /articles
  order: 105
---

# 前端下载

整理一下前端涉及文件下载常用的访视

## window.open

一般是通过 js 调用，得到文件地址后直接通过浏览器访问来达到下载的目的

优点: 利用了浏览器的下载，对于大文件可以自行管理、取消等
缺点: 如果是 token 形式访问，这种形式得自行处理 token 问题

```js
window.open('文件地址', '_target');
```

## a 标签

通过将 a 标签的 href 指向文件地址，利用浏览器来达到下载目的, 跟 window.open 类似

## ajax

主要就是利用 ajax 得到响应体后把它转换成 blob 对象，然后通过 URL.createObjectURL 来创建一个 url，最后模拟一个 a 标签触发点击来下载文件

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', '文件地址');
xhr.send();

xhr.onload = function () {
  const blob = new Blob([xhr.response], { type: 'text/html' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'xxx.html';
  // 触发模拟点击
  a.dispatchEvent(new MouseEvent('click'));
  // a.click()
};
```

> 付上一个通过 axios 实现的带下载进度的工具方法

https://github.com/wetrial/wetrial-template/blob/master/src/utils/download.tsx
