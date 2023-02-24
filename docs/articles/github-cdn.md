---
title: github cdn
order: 80
nav:
  title: 随笔
  path: /articles
group:
  title: 通用
---

# github cdn

## cnpmjs.org

原访问地址： https://github.com/xiexingen

cdn 地址：https://github.com.cnpmjs.org/xiexingen

## hub.fastgit.org

原访问地址： https://github.com/xiexingen

cdn 地址：https://hub.fastgit.org/xiexingen

## jsdelivr

- GitHub 上存储的图片、视频资源，由于某种因素会出现访问受限的情况，导致图片、视频显示异常
- 为了图片、视频显示正常可以使用 CDN 进行加速，从而使资源得以正确加载并显示的目的
- jsDelivr 是一个免费开源的 CDN 解决方案，用于帮助开发者和站长。包含 JavaScript 库、jQuery 插件、CSS 框架、字体等等 Web 上常用的静态资源

### 用途

- 托管自己的 js 库，比如我们的 nomui
- 托管自己的博客，加速国内访问

### 使用方式

地址 https://www.jsdelivr.com/

jsDeliver 可以给 npm、GitHub、WordPress 平台资源加速，我们以 GitHub 为例进行说明

https://cdn.jsdelivr.net/gh/:user/:repo@:branch/:path.html

- https://cdn.jsdelivr.net：jsdelivr的URL
- gh：GitHub 的缩写(表示加速 GitHub 资源)
- :user：GitHub 上注册的用户名比如(xiexingen)
- :repo：仓库名称
- :branch: 分支名,可以没有，默认为 master
- :path 文件路径

> jsDeliver 强制刷新缓存，可以尝试使用 purge 子域名形式访问一下，比如当前博客站点
> https://purge.jsdelivr.net/gh/xiexingen/blog@gh-pages/umi.js

### 案例

https://github.com/xiexingen/blog/blob/gh-pages/index.html
https://cdn.jsdelivr.net/gh/xiexingen/blog@gh-pages/index.html

### 扩展(cdn) 自己类推

https://cdn.staticaly.com/gh/:user/:repo/:tag/:file
https://cdn.staticaly.com/gh/xiexingen/blog/master/README.md
