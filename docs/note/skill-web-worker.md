---
title: Web Worker
toc: content
order: 10
nav:
  title: 笔记
  path: /note
group:
  title: 技巧
---

# Web Worker 的正确姿势

在 HTML5 新规范中，引入了 `Web Worker` 使 js 拥有了`多线程`的能力

## 注意事项

1. 在 `Worker` 线程的运行环境中没有 window 全局对象，也无法访问 DOM 对象

2. Worker 中只能获取到部分浏览器提供的 API，如定时器、navigator、location、XMLHttpRequest 等

3. 由于可以获取 XMLHttpRequest 对象，可以在 Worker 线程中执行 ajax 请求

4. 每个线程运行在完全独立的环境中，需要通过 postMessage、 message 事件机制来实现的线程之间的通信

## 推荐方式

如果你的项目中在使用 webpack5 以及更高版本，那么你很幸运 webpack5 已经内置支持了 Web Worker

```js | pure
// 1. 编写 worker
// 可以导入其他包
import { calcSum } from ".";

// 注意 self
self.onmessage = ({ data }) => {
  const sum = calcSum(data);
  self.postMessage(sum);
};

// 2. 使用
// 新建一个线程,传入相对路径
const calcWorker = new Worker(new URL("../calc-worker", import.meta.url), {
  type: "module",
});
// 线程之间通过 postMessage 进行通信
calcWorker.postMessage(value);
// 监听message事件
calcWorker.onmessage = (e) => {
  // 关闭线程
  calcWorker.terminate();
  message.success(`计算结果:${e.data}`);
};
calcWorker.onerror = (error) => {
  message.error(error.message);
};
```

## 不推荐方式

webpack5 之前，我们需要通过 worker-loader 来使用(当然你比较骚的话可以使用原生形式)

```js | pure
// 1. 安装
yarn add worker-loader

// 2. 编写 worker.js
//约定的写法，通过 onmessage 获取传入的参数
onmessage = function (e) {
  let sum = e.data; // e.data 就是调用的时候传入的值
  // 遍历一千万次(闲的蛋疼，单纯为了测试下)
  for (let i = 0; i < 10000000; i++) {
   sum += Math.random()
  }
  // 通过 postMessage 将结果传回去
  postMessage(sum);
}

// 3.通过行内loader 引入 worker.js并使用
import Worker from "worker-loader!./worker"

// 新建线程，可以建多个
const worker = new Worker();
// 线程之间通过 postMessage 进行通信
worker.postMessage(100);

// 监听 woeker 的 message事件
worker.addEventListener("message", (e) => {
    // 关闭线程
    worker.terminate();
    // worker 中 postMessage 会被监听到，e.data 里面的东东就是传递过来的数据
    console.log('计算结果:', e.data);
});
```

## 代码演示

### 非 Web Worker

<code src="./_demos/skill/web-worker/demo/calc.tsx"></code>

### Web Worker 计算

<code src="./_demos/skill/web-worker/demo/worker-calc.tsx"></code>

### 离线 canvas

<code src="./_demos/skill/web-worker/demo/worker-canvas.tsx"></code>
