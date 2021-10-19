---
title: js工具方法
nav:
  title: 笔记
  path: /note
group:
  title: 技巧
  path: /skill
  order: 1
---

# js 的奇淫异技

一些常用的 js 工具方法集合

## 代码演示

### 金额格式化

<code src="./demo/money-format.tsx" />

### 随机 Id

<code src="./demo/random-id.tsx" />

### 星级评分

<code src="./demo/rate.tsx" />

### URL 查询参数

```js
const params = new URLSearchParams(location.search.replace(/\?/gi, '')); // location.search = "?name=xxg&sex=male"
params.has('name'); // true
params.get('sex'); // "male"
```

### 精确小数位

<code src="./demo/round-number.tsx" />

### 范围内随机

<code src="./demo/range-random.tsx" />

### 数据类型判断

<code src="./demo/type.tsx" />
