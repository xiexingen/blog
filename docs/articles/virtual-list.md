---
title: 虚拟列表
order: 20
nav:
  title: 随笔
  path: /articles
group:
  title: 通用
---

百万数据的展示怎么优化

先看个不经过任何处理的情况下展示

<!-- <code src="./demos/virtual-list/normal.tsx"></code> -->

虚拟列表是啥?

本来需要渲染一百万条数据,但是容器盒子可视范围内只能显示二十条。虚拟列表就是在一百万条数据中,截取可视区域中最多容纳的二十条,即页面中只存在二十个真实的 dom 列表元素。然后监听容器的滚动,实时去更新该二十条数据

# 单项高度固定

一个 ListContainer 盒子,包含一个 ListBox 盒子,在 ListBox 盒子里面渲染每一个列表项。

ListBox 高度 = 每一项的高度 \* 列表项的总条数。使得撑开 ListContainer 盒子,产生滚动条;初始化的时候计算可视区需要显示的条数,以及开始索引,结束索引等。

计算条数时,注意要使用 Math.ceil(),而不是 floor()

监听 ListContainer 盒子的滚动事件,滚动时计算开始索引和结束索引

这就实现了列表的无缝衔接(根据实际情况可以调整下 buffer)

<code src="./demos/virtual-list/fixed-height-item.tsx"></code>

# 单项高度不固定

列表项高度不固定的情况下,怎么计算当前可视区域应该显示多少条呢,如何在滚动的时候修改首位索引,达到无缝衔接呢?
