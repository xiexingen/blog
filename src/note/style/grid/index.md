---
title: grid布局
nav:
  title: 笔记
  path: /note
group:
  title: 样式
  path: /style
  order: 20
---

# grid 布局

grid 布局的理念是吧页面分成一个个的网格，通过对网格进行内容填充形成一个网页，经典的案例 九宫格

## API

### Props

| 参数                  | 说明                                                                                                                     | 类型                                | 案例                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | -------------------------------------------- |
| grid-template-columns | 定义 grid 布局的每一列的宽度                                                                                             | `Values`                            | `grid-template-columns:repeat(2,100px 60px)` |
| grid-template-rows    | 定义 grid 布局的每一行的行高                                                                                             | `Values`                            | `grid-template-rows:repeat(2,100px 60px)`    |
| grid-template-areas   | 划分区域                                                                                                                 | -                                   | `grid-template-areas:'a b c' 'd e f`         |
| grid-row-gap          | 行间距                                                                                                                   | -                                   | `grid-row-gap:10px;`                         |
| grid-column-gap       | 列间距                                                                                                                   | -                                   | `grid-column-gap:14px;`                      |
| grid-gap              | 行和列间距                                                                                                               | `行间距 列间距`                     | `grid-gap:10px 14px`                         |
| grid-auto-flow        | 设置 item 放置顺序                                                                                                       | `FlowValues`                        | `grid-auto-flow:row`                         |
| justify-items         | 设置 item 子项水平对齐方式                                                                                               | `PlaceItemsValue`，默认为:`start`   | `justify-items:start`                        |
| align-items           | 设置 item 子项垂直对齐方式                                                                                               | `PlaceItemsValue`,默认为:`stretch`  | `align-items:start`                          |
| place-items           | 设置 item 子项水平和垂直对齐方式                                                                                         | `<align-items> <justify-items>`     | `place-items:start center`                   |
| justify-content       | 设置 grid 容器内容水平对齐方式                                                                                           | `PlaceContentValue`,默认为:`start`  | `place-content:start center`                 |
| align-content         | 设置 grid 容器内容垂直对齐方式                                                                                           | `PlaceContentValue` ,默认为:`start` | `place-content:start center`                 |
| place-content         | 设置 grid 容器内容水平和垂直对齐方式                                                                                     | `<align-content> <justify-content>` | `place-content:start center`                 |
| grid-auto-columns     | 设置多余列的列宽                                                                                                         | -                                   | `grid-auto-columns:100px`                    |
| grid-auto-rows        | 设置多余行的行高                                                                                                         | -                                   | `grid-auto-rows:100px`                       |
| grid-template         | grid-template-columns、grid-template-rows 和 grid-template-area 的简写                                                   | -                                   | `grid-auto-rows:100px`                       |
| grid                  | grid-template-rows、grid-template-columns、grid-template-areas、grid-auto-rows、grid-auto-columns、grid-auto-flow 的简写 | -                                   | `grid-auto-rows:100px`                       |

### Item Props

| 参数              | 说明                                                   | 类型 | 案例                                    |
| ----------------- | ------------------------------------------------------ | ---- | --------------------------------------- |
| grid-column-start | 设置子元素左边框所在的网格线                           | -    | `grid-column-start:1;grid-column-end:3` |
| grid-column-end   | 设置子元素右边框所在的网格线                           | -    | `grid-column-start:1;grid-column-end:3` |
| grid-column       | 设置左边框和右边框所在的网格线，用 / 符号间隔开        | -    | `grid-column:1/3`                       |
| grid-row-start    | 设置子元素上边框所在的网格线                           | -    | `grid-row-start:1;grid-row-end:3`       |
| grid-row-end      | 设置子元素下边框所在的网格线                           | -    | `grid-row-start:1;grid-row-end:3`       |
| grid-row          | 设置上边框和下边框所在的网格线，用 / 符号间隔开        | -    | `grid-row:1/3`                          |
| grid-row          | 设置上边框和下边框所在的网格线，用 / 符号间隔开        | -    | `grid-row:1/3`                          |
| justify-self      | 设置水平方向对齐方式                                   | -    | `justify-self:center`                   |
| align-self        | 设置垂直方向对齐方式                                   | -    | `align-self:center`                     |
| place-self        | 设置垂直和水平方向对齐 `<align-self> <justify-self>`   | -    | `place-self:center`                     |
| grid-area         | 指定子元素放置在哪个区域，配合 grid-template-area 使用 | -    | `grid-area:d`                           |

### Values

| 参数值                    | 说明                                           | 案例                                            |
| ------------------------- | ---------------------------------------------- | ----------------------------------------------- |
| 值                        | 可以直接设置某个值                             | `grid-template-columns:100px,100px`             |
| `repeat(n,100px) `        | 代替上面的写法，可以设置重复的值或者重复的模式 | `grid-template-columns:repeat(2,100px 60px)`    |
| `repeat(auto-fill,100px)` | 每个子元素固定，容器自适应                     | `grid-template-columns:repeat(auto-fill,100px)` |
| `auto`                    | 自适应宽度,如圣杯布局，两边固定中间自适应      | `grid-template-columns:100px auto 100px`        |
| `fr`                      | 百分比布局，比如 左右 20% 中间 60%             | `grid-template-columns:2fr 6fr 2fr`             |

### FlowValues

| 参数值         | 说明                        | 案例                       |
| -------------- | --------------------------- | -------------------------- |
| `row`          | 从左到右(默认值)            | `grid-auto-flow:row`       |
| `column`       | 从上到下                    | `grid-auto-flow:column`    |
| `row dense`    | 从左到右,但是会自动紧凑填充 | `grid-auto-flow:row dense` |
| `column dense` | 从上到下,但是会自动紧凑填充 | `grid-auto-flow:row dense` |

### PlaceItemsValue

| 参数值    | 说明                                            | 案例                        |
| --------- | ----------------------------------------------- | --------------------------- |
| `start`   | 对齐子元素容器的起始边框                        | `place-items:start`         |
| `end`     | 对齐子元素容器的结束边框                        | `place-items:end start`     |
| `center`  | 子元素容器内部居中                              | `place-items:center center` |
| `stretch` | item 子元素大小没有指定时，拉伸占据整个网格容器 | `place-items:stretch`       |

### PlaceContentValue

| 参数值          | 说明                                                               | 案例                          |
| --------------- | ------------------------------------------------------------------ | ----------------------------- |
| `start`         | 对齐 grid 容器的起始边框                                           | `place-content:start`         |
| `end`           | 对齐 grid 容器的结束边框                                           | `place-content:end`           |
| `center`        | grid 容器内部居中                                                  | `place-content:center`        |
| `stretch`       | grid 容器内容大小没有指定时，拉伸占据整个 grid 容器                | `place-content:stretch`       |
| `space-around`  | 每个子元素两侧间隔相等，所以子元素之间间隔比容器边框的间隔大一倍   | `place-content:space-around`  |
| `space-between` | 子元素与子元素之间间隔相等，子元素与容器边框没有间隔               | `place-content:space-between` |
| `space-evenly`  | 子元素与子元素之间间隔相等，子元素与容器边框之间也是同样长度的间隔 | `place-content:space-evenly`  |

### Grid 函数 & 关键字

| 名称      | 说明                                             | 案例                                              | 备注                                               |
| --------- | ------------------------------------------------ | ------------------------------------------------- | -------------------------------------------------- |
| repeat()  | 设置重复的值                                     | `grid-template-columns:repeat(2,100px 60px)`      | 相当于`100px 60px 100px 60px`                      |
| minmax()  | 函数产生一个长度范围，不小于参数 1，不大于参数 2 | `grid-template-columns: 1fr minmax(100px, 1fr);`  | minmax(100px, 1fr)表示列宽不小于 100px，不大于 1fr |
| auto-fill | 自动填充                                         | `grid-template-columns: repeat(auto-fill, 100px)` | 以 100px 的宽度一列填充容器，可自动换行            |
| fr        | 比例属性，根据比例分配宽高                       | `grid-template-columns: 2fr 8fr;`                 | 第一列 20% 第二列 80%                              |
| auto      | 自适应宽度                                       | `grid-template-columns: 100px auto 100px;`        | 左右宽度 100px，中间宽度自适应                     |

## display 取值

<code src="./demo/display.tsx" />

## grid-template-rows/colums 取值

### repeat 简写

<code src="./demo/xy-repeat.tsx" />

### repeat auto-fill 自动排列

<code src="./demo/xy-repeat-auto-fill.tsx" />

### auto 圣杯

<code src="./demo/xy-auto.tsx" />

### fr 百分比

<code src="./demo/xy-fr.tsx" />

## grid-template-areas

<code src="./demo/areas.tsx" />

## gap

<code src="./demo/gap.tsx" />

## item 对齐形式(place-items & justify-items & align-items)

<code src="./demo/place-items.tsx" />

## grid 对齐形式(place-content & justify-content & align-content)

<code src="./demo/place-content.tsx" />

## grid-auto-flow

<code src="./demo/flow.tsx" />

## grid-auto-columns & grid-auto-rows

<code src="./demo/grid-auto.tsx" />

<!-- ## 简写 grid-template & grid -->

<!-- <code src="./demo/short.tsx" /> -->

以下为元素的 demo

## [S] grid-column & grid-row

<code src="./demo/sub-span.tsx" />

## [S] place-self

<code src="./demo/place-self.tsx" />
