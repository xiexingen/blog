---
title: 安装redis
order: 60
nav:
  title: Docker
  path: /docker/basic
group:
  title: Docker 基础
---

# 安装 redis

将 docker 容器中的实例中的文件跟物理文件链接起来 即使删掉容器 数据还在 再创建容器的时候 任然可以对应上之前的数据

## 安装

1. 创建网络

```bash
docker network create net_redis
```

2. 创建 redis 配置文件(/docker/redis/config/redis.conf)

```bash
#redis的databases数量
databases 32
#redis密码
requirepass 123
```

3. 通过 docker-compose 安装

```bash
docker-compose -f redis-compose.yml up -d
```

redis-compose.yml

```bash
version: '3'
services:
  redis:
    image: redis
    container_name: redis
    restart: always
    ports:
      - 6379:6379
    networks:
      - net_redis
    volumes:
      - /docker/redis/data:/data
    command: redis-server /docker/config/redis.conf
networks:
  net_redis:
    external: true
```
