---
title: IME问题
order: 40
nav:
  title: 笔记
  path: /note
group:
  title: 技巧
  path: /skill
  order: 10
---

# IME 问题

IME 问题就是指在一些输入法下(比如中文)录入文字的时候会先是拼音，某些情况下会把拼音当做文字直接录入进去了

## 常见场景

1. autocomplete 远程搜索(监听了 input 输入中文的时候还没按空格确定文字使用了录入的拼音)
2. 密码框(有些系统需要对密码框进行加密显示，会监听输入然后吧内容转成加密串)
3. 富文本里面某些内容进行高亮

## 代码演示

### composition 方案

> 注意此方案日语下会有问题，日语下触发的机制不一样，实验结果 日语输入法下内容多的时候会自动触发 compositioned

<code src="./demo/composition.tsx" />

### composition + 防抖 方案

<code src="./demo/composition-debounce.tsx" />

> 参考资料

https://github.com/w3c/uievents/issues/202

https://github.com/facebook/react/issues/3926
