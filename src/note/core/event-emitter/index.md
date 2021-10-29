---
title: 发布订阅
nav:
  title: 笔记
  path: /note
group:
  title:
  path: /core
  order: 1
---

# 发布订阅

跨组件通信，如:Vue 里面的$on、$emit

## 代码演示

### 基础使用

<code src="./demo/demo1.tsx" />

```jsx |pure
const eventBus = new EventEmitter();
// 监听事件
eventBus.on('【事件名称】', () => {});
// 监听一次事件(触发完成会从监听列表中移除)
eventBus.once('【事件名称】', data);

// 触发事件
eventBus.emit('【事件名称】', data);

// 解绑所有事件
eventBus.off();
// 解绑特定名称的所有事件
eventBus.off('【事件名称】');
// 解绑特定事假
eventBus.off('【事件名称】', handle);
```
