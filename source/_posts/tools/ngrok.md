---
title: 利用ngrok来做内网穿透
categories:
  - 工具
tags:
  - 工具
abbrlink: 44373
date: 2018-12-17 19:10:12
---

我有很多自己的个人代码是跑在家里的服务器中的.一般来说都是自动化的处理我的一些生活问题,与数据收集等相关活动. 所以一般没有客户端访问家里服务器的需求. 但是很多时候脑子突发奇想.有一些小点子,一些小的bug或者小的优化,代码修改完成之后,有一个部署到需求. 因为家里服务器没有一个稳定的外网IP的,外网不能直接连接服务器. 所以我们需要 内网穿透.
<!-- more -->



### 用法
1. 首先你需要去官网注册一个账号
2. 下载ngrok,并且解压到一个你喜欢的目录下面
3. 去官网复制你的授权码
4. 授权ngrok
``` bash
ngrok authtoken 授权码
```
### http
``` bash
ngrok http 8080
```

### tcp
``` bash
ngrok tcp 22
```

![20191217094149.png](https://cdn.jsdelivr.net/gh/xiexingen/blog/assets/images/20191217094149.png)

最终你会得到,一个外网可以访问的地址. 用这个地址就可以直接访问到你本机的端口了.  

当我们拥有这样一个公网地址之后,我们就可以ssh来控制家里的机器 或者使用github的webhook来做一切你想要做的事情.