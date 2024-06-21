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

# 附上一个其他的
# "registry-mirrors": [
#       "https://docker.m.daocloud.io",
#       "https://dockerproxy.com",
#       "https://docker.mirrors.ustc.edu.cn",
#       "https://docker.nju.edu.cn"
# ]
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


# Debian 系统

## 安装源更新

```bash
# 更新  /etc/apt/sources.list 中的内容为阿里源
deb http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb http://mirrors.aliyun.com/debian-security buster/updates main
deb-src http://mirrors.aliyun.com/debian-security buster/updates main
deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib

# 更新
sudo apt update
sudo apt upgrade
```

## 安装

``` bash
# 安装所需的库和工具
sudo apt install apt-transport-https ca-certificates curl gnupg lsb-release
#添加Docker官方GPT秘钥
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
# 设置稳定存储库
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
# 安装Docker引擎
sudo apt install docker-ce docker-ce-cli containerd.io
# 添加当前用户到docker组
sudo usermod -aG docker $USER

```

## 验证

``` bash
docker version #查看版本
```
