---
title: 常用命令
order: 10
nav:
  title: Docker
  path: /docker/basic
  order: 40
group:
  title: Docker 基础
---

# 常用命令

## 命令

| 命令                                              | 说明                                                              | 参数 |
| :------------------------------------------------ | :---------------------------------------------------------------- | :--- |
| docker --version                                  | 查看当前 docker 版本                                              |
| docker ps                                         | 查看当前正在运行的容器                                            |
| docker images                                     | 查看本地所有镜像                                                  |
| docker pull [镜像名称]                            | 拉取一个镜像到本地                                                |
| docker run [容器名称]                             | 运行一个容器                                                      |
| docker rm [容器名称]                              | 删除本地使用过的容器                                              |
| docker start [Name]                               | 启动指定容器                                                      |
| docker stop [Name]                                | 关闭指定容器                                                      |
| docker kill [Name]                                | 强制关闭指定容器                                                  |
| docker pause [Name]                               | 暂停指定容器                                                      |
| docker unpause [Name]                             | 恢复指定容器                                                      |
| docker rmi -f $(docker images -a -q)              | 移除所有 images                                                   |
| docker rmi $(docker images -f 'dangling=true' -q) | 移除 none 的 images                                               |
| docker inspect [容器名称]                         | 查看容器的信息                                                    |
| docker exec -it [容器名称] bash                   | 在容器内执行 bash 比如执行后可以执行 ls 查看目录 也可以创建文件等 |
| docker rm -fv [容器 Id]                           | 停止、删除容器、清除数据                                          |
| docker images -f [option]                         | 过滤查询                                                          |
| docker logs -f [container-name]                   | 查看日志                                                          |
| docker history [container-name]                   | 查看镜像的构建历史                                                |

## 数据卷

```bash
docker run -it -v /docker/data:/config [--privileged=true] 表示将宿主机中的/docker/data目录跟容器中的/config 目录做一个映射，如果没有将自动创建
// -v 主机目录:容器目录
// 如果遇到数据卷没权限访问，则在后面增加 --privileged=true 即可
```

数据卷容器
--volumns-form containerId|name 表示容器数据卷从 name 容器同步

> docker run -it --name xxg2 --volumns-from xxg1 nginx

warning 温馨提示

- docker run -p 8001:80 --运行 指定端口 8001 外部端口 80 表示内部端口
- docker run -d --detach 还可以继续操作 不会阻塞
- docker run --name --运行的 docker 镜像的名称
- docker run -p 8001:80 --name myapi helloapi:latest
  表示运行 docker 中名为 helloapi 的容器 版本为 latest docker 的端口为 80 本机的端口 8001 名字为 myapi
- docker ps -a --查看所有容器 包括有没运行的
- 过滤查询
  docker images --filter "before=image1" 查询 image1 之后的
  docker images --filter "since=image3" 查询 image3 之前的
  docker images "wechat:v1.3._" 查询 wechat:1.3.x 的
  docker rmi -f $(docker images "wechat:v1.2._" -q) 移除 wechat:v1.2.\*版本的
- docker logs 查看日志
  docker logs -f gitlab 查看 gitlab 容器所有日志
  docker logs --tail 20 -f gitlab 查看 gitlab 最近 20 条的日志
  docker logs --since 30s -f gitlab 查看 gitlab 最近 30s 的日志

- docker inspect 查看日志文件位置

```bash
docker inspect --format='{{.LogPath}}' mysql
```

- 清空 docker 实例的日志内容

```bash
$(docker inspect --format='{{.LogPath}}' <容器ID>)
```

- 退出 -it
  exit 或者 ctrl+p+q
