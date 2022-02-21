---
title: script标签的defer和async
nav:
  title: 随笔
  path: /articles
---

# script 标签的 defer 和 async

## script

script 会阻塞 HTML 的解析，只有下载好并执行完脚本才会继续解析 HTML

## script async

解析 HTML 的过程中同时进行脚本的下载，下载完成会立马执行，执行过程会阻塞 HTML 的解析

## script defer

完全不会阻塞 HTML 的解析，遇到 script 会异步下载，在 HTML 解析完成在按顺序执行脚本

## 图解

附上一张来自互联网上的图：

![script loader](./assets/script-loader.jpg)
