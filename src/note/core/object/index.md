---
title: Object
nav:
  title: 笔记
  path: /note
group:
  title: 核心方法
  path: /core
  order: 1
---

# Object 总结

## js 遍历总结

| 方法                         | 含有原型属性 | 含不可枚举属性       | 含 Symbol 属性 | 返回值               |
| ---------------------------- | ------------ | -------------------- | -------------- | -------------------- |
| for...in                     | 是           | 否                   | 否             | `key`                |
| Object.keys                  | 否           | 否                   | 否             | `Array<key>`         |
| Object.getOwnPropertyNames   | 否           | 是                   | 否             | `Array<key>`         |
| Object.getOwnPropertySymbols | 否           | 是（只有 symbol 的） | 是             | `Array<key> `        |
| Reflect.ownKeys              | 否           | 是                   | 是             | `Array<key>`         |
| Object.values                | 否           | 否                   | 否             | `Array<key>`         |
| Object.entries               | 否           | 否                   | 否             | `Array<[key,value]>` |

总结

1. for in 包含自身以及原型上所有可枚举的属性，【不包括 Symbol 属性】
2. 由于 for in 可以便利原型上的属性，一般使用的时候会通过 hasOwnProperty 来过滤掉原型上的属性
3. Object.keys 返回所有自身可枚举的属性(不含 Symbol 属性)，不包含原型上的任何属性
4. Object.getOwnPropertyNames 所有自身的属性（包含不可枚举属性但不包含 Symbol 属性），不包含原型上的任何属性
5. Object.getOwnPropertySymblos 返回自身所有 Symbol 属性(包含不可枚举的)，但不含原型上的任何属性
6. Reflect.ownKeys 返回自身所有属性(包含不可枚举的以及所有 Symbol 属性)，不包含原型上的任何属性

## 代码演示

### 案例

<code src="./demo/demo1.tsx" />

## Object.create

Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的**proto**

### 案例

<code src="./demo/demo2.tsx" />
