---
title: content-visibility
order: 90
nav:
  title: 笔记
group:
  title: 样式
---

# content-visibility 浏览器支持的"虚拟渲染"

开发中肯定都遇到过数据量比较大的长列表，页面中 dom 元素过多浏览器渲染会变慢，甚至让页面停止响应，因此我们大部分会采用 虚拟滚动、分页展示等方式来优化，但是这些大部分都需要写很多 js 代码，通过 content-visibility 只需要一行 css 便可实现让网页之家在可见区域内容

> 注意:实际组件还是初始化了的，只是浏览器渲染性能会好一些

## 代码演示

### 基础使用

<code src="./_demos/style/content-visibility/demo1.tsx"></code>
