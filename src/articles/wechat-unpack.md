---
title: 微信小程序反编译
nav:
  title: 随笔
  path: /articles
---

# 微信小程序反编译

## 环境准备

1. node 环境
2. 解密工具

小程序包是加密的，需要https://github.com/BlackTrace/pc_wxapkg_decrypt 3. 反编译工具

## 实操

1. 电脑端获取小程序文件
   一般在`【微信安装目录】\WeChat Files\WeChat Files\Applet` 下面会有多个文件，找这里面的第一个(时间倒序)如果实在拿捏不准 可以先把这个文件夹清空 然后 pc 端再打开小程序这个时候会自动产生一个文件夹，就是这货，里面有**APP**.wxapkg 文件 这个就是主包(可能有分包的情况)

2. 解密微信包

由于微信的包是经过加密处理的，所以第一步就是先解密包

解密工具可以搜索 PC 微信小程序一键解密 下载一个

附上我的下载链接: https://pan.baidu.com/s/1amyzRCIvhXu8yJtyGM1PYg 提取码: f1vs

也可以使用 github 上的 https://github.com/BlackTrace/pc_wxapkg_decrypt 这个去解密

3. 反编译

github 上 clone https://github.com/xuedingmiaojun/wxappUnpacker 这个仓库

然后执行 `node wuWxapkg.js 【解密后的微信包】`

如果有分包的情况，在执行反编译分包 `node wuWxapkg.js -s=【分包目录】`

就可以得到反编译后端小程序了，可以再微信小程序开发工具中打开使用
