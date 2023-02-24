---
title: bfc
order: 110
nav:
  title: 笔记
group:
  title: 样式
---

# bfc

bfc 是指 margin 塌陷，父子嵌套元素在垂直方向上会取最大的 margin 值

触发 bfc 条件

1. float 属性为 left|right
2. overflow 为 hidden|scroll|auto
3. position 为 absolute|fix
4. display 为 inline-block|tabel-cell|table-caption

## 案例

### 滚动盒子

<code src="./_demos/style/bfc/demo1.tsx"></code>
