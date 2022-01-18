---
title: dockerfile
nav:
  title: docker
  path: /docker
---

# dockerfile

## 说明

| 关键字     | 说明                                                                                                                           | 例子                                            |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------- |
| FROM       | 以此为基础来构建                                                                                                               | FROM debian:buster-slim                         |
| MAINTAINER | 镜像维护着的项目和邮箱地址                                                                                                     | MAINTAINER The CentOS Project <xxxx@centos.org> |
| RUN        | 容器构建时运行的命令                                                                                                           |
| EXPOSE     | 当前容器对外暴露的端口                                                                                                         |
| WORKDIR    | 指定容器创建后，终端默认进来的工作目录                                                                                         |
| ENV        | 用来在构建镜像过程中设置环境变量                                                                                               |
| ADD        | 将宿主机目录下的文件拷贝到镜像且 ADD 命令会自动处理 URL 和解压 tar 压缩包                                                      | ADD c48-docker.tar.xz /                         |
| COPY       | 跟 ADD 类似，但是不会解压                                                                                                      | copy src desc、copy ["src","desc"]              |
| VOLUME     | 容器数据卷，用于数据保存和持久化工作                                                                                           | VOLUME ["/xxg-data1","/xxg-data2"]              |
| CMD        | 指定一个容器启动时要运行的命令，Dockerfile 中可以有多个 CMD 指令，**_但只有最后一个生效_**，CMD 会被 docker run 之后的参数替换 | CMD /bin/bash                                   |
| ENTRYPOINT | 指定一个容器启动时要运行的命令，和 CMD 一样，都是指定容器启动程序及参数                                                        | ENTRYPOINT netcore.dll                          |
| ONBUILD    | 当构建一个被继承的 Dockerfile 时运行命令，父镜像在被子继承后父镜像的 onbuild 被触发                                            |

## 案例

```yml
# 案例一  构建一个自己的centos系统

FROM centos

ENV mypath /tmp
WORKDIR $mypath

RUN yum -y install vim
RUN yum -y install net-tools

EXPORT 80

CMD /bin/bash
```
