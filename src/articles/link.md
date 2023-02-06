---
title: link & yalc
nav:
  title: 随笔
  path: /articles
  order: 105
---

# 本地联调 npm 包

## yalc 【推荐】

1. 全局安装 yalc

```bash
#更多信息 https://github.com/wclr/yalc
yarn global add yalc
```

2. 注册 npm 包到全局

```bash
# 在要发布的包下，执行
yalc publish --push
```

3. 安装包

```bash
yalc add <package>
```

### 案例

假设项目 web-app 中需要使用 my-ui 组件库，本地联调为例。

```bash
## 首次联调
# 1. 在 my-ui 根目录下执行
yalc publish --push
# 2. 在 web-app 根目录下执行
yalc add my-ui

## 后续修改
# 1. 只需要在 my-ui 根目录下执行，会自动更新到 web-app 中去
yalc publish --push
```

## npm link

1. 注册 npm 包

```bash
# 在要发布的 npm 包下执行
yarn link
```

2. 在要使用的仓库中安装

```bash
# link 到 上面发布的包
yarn link <package>
# 使用完，记得 unlink
```
