---
title: Symbol
order: 1
nav:
  title: 笔记
group:
  title: 核心方法
---

# Symbol 总结

## toString

我们都知道通过 Object.prototype.toString.call 去判断数据类型

```jsx | pure
Object.prototype.toString.call(100);            // "[object Number]"
Object.prototype.toString.call(true);           // "[object Boolean]"
Object.prototype.toString.call('Hello World');  // "[object String]"
Object.prototype.toString.call([]]);            // "[object Array]"
Object.prototype.toString.call(undefined);      // "[object Undefined]"
Object.prototype.toString.call(null);           // "[object Null]"
Object.prototype.toString.call(function() {})    // [object Function]
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
Object.prototype.toString.call(Symbol())        // [object Symbol]
Object.prototype.toString.call(new Map());       // "[object Map]"
// ...
```

那么问题来了，如果我们想自定义一个数据类型的标签，应该怎么办?

引用官方的话: `Symbol.toStringTag`  是一个内置 `symbol`，通常作为对象的属性键使用，对应的属性值应该为字符串类型，这个字符串用来表示该对象的自定义类型标签，通常只有内置的  `Object.prototype.toString()`  方法会去读取这个标签并把它包含在自己的返回值里

## 代码演示

### 案例

<code src="./_demos/core/symbol/demo/demo1.tsx"></code>
