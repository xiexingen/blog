---
title: Docker安装
order: 20
nav:
  title: Docker
  path: /docker/basic
group:
  title: Docker 基础
---

# Docker 安装及配置加速镜像

> 我的个人阿里云加速镜像个人地址&nbsp; https://noe4mlw6.mirror.aliyuncs.com

## 安装

CentOS 7 (使用 yum 进行安装) 如果之前安装过先卸载依赖

```bash
sudo yum remove docker docker-common container-selinux docker-selinux docker-engine docker-engine-selinux
```

1. 直接安装

```bash
curl -sSL https://get.docker.com/ | sh
```

2. 启动 并设置开机启动

```bash
sudo systemctl start docker
sudo systemctl enable docker
```

> 配置 docker 使用国内镜像
> 如何配置镜像加速器
> 您可以通过修改 daemon 配置文件/etc/docker/daemon.json 来使用加速器：

```bash
{
  "registry-mirrors": ["https://noe4mlw6.mirror.aliyuncs.com"]
}
```

重启 docker

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 安装 docker-compose

```bash
sudo curl -L https://github.com/docker/compose/releases/download/1.20.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```

```bash
sudo chmod a+x /usr/local/bin/docker-compose
```

### 卸载

```bash
sudo rm /usr/local/bin/docker-compose
```
