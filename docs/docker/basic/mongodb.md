---
title: 安装mongodb
order: 40
nav:
  title: Docker
  path: /docker/basic
group:
  title: Docker 基础
---

# 安装 mongodb

个人喜欢使用 docker-compose，所以仅介绍使用 docker-compose 安装

1. 配置好 docker 的加速镜像[参考 Docker 安装]
2. docker pull mongo 拉去 mongo 镜像
3. 启动 docker 实例

## 直接使用

```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

## 自定义挂载目录

首先创建文件夹 /docker/mongo/config 以及/docker/mongo/data 用于与 docker 中 mongo 实例链接 然后运行命令

```bash
docker run -d -p 27017:27017 --name mongo01 -v /docker/mongo/config:/data/configdb -v=/docker/mongo/data:/data/db mongo
```
