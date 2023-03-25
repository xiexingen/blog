---
title: js工具方法
order: 50
nav:
  title: 笔记
group:
  title: 技巧
---

# js 的奇淫异技

一些常用的 js 工具方法集合

## 代码演示

### 时间分片

<code src="./_demos/skill/tool/demo/date-step.tsx"></code>

### 金额格式化

<code src="./_demos/skill/tool/demo/money-format.tsx"></code>

### 手机号码格式化

<code src="./_demos/skill/tool/demo/phone-format.tsx"></code>

### 随机 Id

<code src="./_demos/skill/tool/demo/random-id.tsx"></code>

### 星级评分

<code src="./_demos/skill/tool/demo/rate.tsx"></code>

### URL 查询参数

```js
const params = new URLSearchParams(location.search.replace(/\?/gi, '')); // location.search = "?name=xxg&sex=male"
params.has('name'); // true
params.get('sex'); // "male"
```

### 精确小数位

<code src="./_demos/skill/tool/demo/round-number.tsx"></code>

### 范围内随机

<code src="./_demos/skill/tool/demo/range-random.tsx"></code>

### 数据类型判断

<code src="./_demos/skill/tool/demo/type.tsx"></code>

### 数组转对象

<code src="./_demos/skill/tool/demo/array-object.tsx"></code>

### 树转数组

<code src="./_demos/skill/tool/demo/tree-object.tsx"></code>

### 数组转树

<code src="./_demos/skill/tool/demo/array-tree.tsx"></code>
