---
title: 介绍
order: 5
nav:
  title: 随笔
group:
  title: 模块化
  order: 10
---

# 模块化的介绍

## 前言

记得我刚接触前端的时候，那个时候单页应还没普及(我也不知道那个时候有没有),基本上用的就是 Razor+jquery 插件形式(razor .net 栈的一种模板引擎)，那个时候也没有模块化的概念，基本上不同的插件就往全局 window 下挂在(jquery 就是这么干的)，那么大家都往全局 window 上挂载就遇到了全局污染的问题

## 全局污染

```bash
<script src="../format-number"></script>
<script src="../format-datetime"></script>
<script>
  format(10000); // 会发现与期望的不同
</script>
```

假如有两个 js 文件，张三开发的 `format-number.js` 李四开发的 `format-datetime.js`

`format-number.js` 代码如下

```bash
// 数字千分位格式化
function format(value){
  return new String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
```

`format-datetime.js` 代码如下

```bash
// 日期格式化
function format(value){
  return new Date(value).toLocaleDateString()
}
```

运行后会发现，format 始终是 datetime 的实现。这就是全局污染带来的问题。

## AMD、CMD、CommonJS、ESModule

为了解决 `全局污染` 和 `依赖管理混乱` 的问题，引入了 CommonJS 的概念，这个最先应用于 nodejs 中，后来前端借鉴引入了 `AMD/CMD` 再后来有了 ESModule

### CommonJS

目前基本上就是后端使用，如 nodejs

CommonJS 规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。

所有代码都运行在模块作用域，不会污染全局作用域。

模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。

模块加载的顺序，按照其在代码中出现的顺序

```js
// 在 format-number.js 中导出变量
function format(){....}
module.exports = { format };
// 或者：
exports.format = format;

//在其他地方引用导出的方法
const { format } = require("./format-number.js");
console.log(format(10000))
```

### AMD

AMD 规范，全称是 Asynchronous Module Definition，即异步模块加载机制。完整描述了模块的定义，依赖关系，引用关系以及加载机制。

AMD 的核心是预加载，先对依赖的全部文件进行加载，加载完了再进行处理。

实际上 AMD 是 RequireJS 在推广过程中对模块定义的规范化的产出

优点：

适合在浏览器环境中异步加载模块。可以并行加载多个模块。 并可以按需加载。

RequireJS 主要解决了两个问题：

多个 js 文件可能有依赖关系，被依赖的文件需要早于依赖它的文件加载到浏览器

js 加载的时候浏览器会停止页面渲染，加载文件越多，页面失去响应时间越长

附上一个使用了 requireJS 的框架案例 https://github.com/nomui/nomui

附上一个简单案例

```js
// script 引入 requireJS 后，需要对 requireJs 进行配置
requirejs.config({
  baseUrl: '/assets/js', // 配置基础路径
  waitSeconds: 8, // 设置超时为6秒
  // 配置映射路径，会跟上面的 baseUrl 进行合并
  paths: {
    jquery: 'jquery-1.11.3',
    jqueryui: 'jquery-ui',
    slimscroll: 'jquery.slimscroll.min',
    mock: 'mock',
  },
  // 配置依赖
  shim: {
    slimscroll: ['jquery'],
  },
  urlArgs: 'v=2.1.2', // 版本，用来解决浏览器缓存问题
});

// 使用，由于上面已经定义了 jquery 在要用的地方直接通过 require 来加载
require(['jquery', 'mock', 'jqueryui'], function ($, Mock) {
  // 这里面通过 $ 就可以拿到 jquery 实例, Mock 就可以拿到 mock 实例
});
```

### CMD

CMD 规范：全称是 Common Module Definition，即通用模块定义。按需加载。在 CMD 规范中，一个模块就是一个文件，使用 define 来进行模块，define 是一个全局函数。

AMD 和 CMD 最大的区别是对依赖模块的执行时机处理不同，而不是加载的时机或者方式不同，二者皆为异步加载模块。

异步加载：不阻碍后面代码加载执行

AMD 依赖前置，js 可以方便知道依赖模块是谁，立即加载；而 CMD 就近依赖，需要使用把模块变为字符串解析一遍才知道依赖了哪些模块，这也是很多人诟病 CMD 的一点，牺牲性能来带来开发的便利性，实际上解析模块用的时间短到可以忽略。

典型的代表 SeaJs

由于 SeaJs 没使用过，可自行去扒拉官方文档

### ESModule

从 ES6 开始，JavaScript 才有自己真正意义上的模块化规范

ESModule 有很多优势，如:

- tree shaking

- 代码分割

导案例代码如:

```js
export default ()=>{}; // 导出一个 default 函数
// 导出一个对象
export {
 format:()=>{}
}
export * from 'module'; // 重定向导出 不包括 default
export { name1 as a, ... } from 'module'; // 重定向重命名导出
export let name = 'name'; // 声明命名导出
```

导入案例代码如:

```js
import module1 from 'module'; // 默认导入，注意自定义名称
import { m1, p1 } from 'module'; // 解构导入
import * as module from 'module';
const promise = import('module'); // 动态导入(异步导入)
```

## webpack 基础

说到模块化，webpack 肯定听过，webpack 用来构建各种模块化的包，最常用的可能就是 CommonJS 和 ESModule

## CommonJS 模块化原理

可以查看 [案例代码](https://github.com/xiexingen/module-study/tree/main/commonjs)

## ESModule 模块化原理

可以查看 [案例代码](https://github.com/xiexingen/module-study/tree/main/esmodule)

## CommonJS 加载 ESModule 原理

可以查看 [案例代码](https://github.com/xiexingen/module-study/tree/main/commonjs-load-esmodule)

## ESModule 加载 CommonJS 原理

可以查看 [案例代码](https://github.com/xiexingen/module-study/tree/main/esmodule-load-commonjs)
