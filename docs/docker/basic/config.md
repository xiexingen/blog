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
# https://dockerproxy.com 当拉取dockerhub镜像拉不下来的情况下可以用 https://dockerproxy.com
{
  "registry-mirrors": ["https://noe4mlw6.mirror.aliyuncs.com","https://dockerproxy.com"]
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

# centos 8.5 LLM 环境

## 安装

``` bash
# 系统安装源
http: mirrors.aliyun.com/centos/8/BaseOS/x86_64/os/

# 更换阿里源
cd /etc/yum.repos.d/
sudo sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
sudo sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*
sudo yum update -y
```
## 安装 docker

``` bash
# 移除老的
sudo yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
# 安装依赖
sudo yum install -y yum-utils
# 配置docker镜像，国内需要切换为阿里云
# sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 安装最后一个版本(会提示包有版本冲突，我们添加  --allowerasing 来无视)
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin  --allowerasing
# 设置开机自启
sudo systemctl enable docker
sudo systemctl start docker
# 配置个人加速
vi /etc/docker/daemon.json
{
  "registry-mirrors": ["https://noe4mlw6.mirror.aliyuncs.com"]
}
```

## 安装 docker-compose
```bash
# 下载指定版本(可自行去github查看版本号)
sudo curl -L https://github.com/docker/compose/releases/download/1.20.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

# 授予权限安装
sudo chmod a+x /usr/local/bin/docker-compose
```

## 安装 vscode

```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" | sudo tee /etc/yum.repos.d/vscode.repo > /dev/null

yum check-update
sudo yum install code # or code-insiders

# root打开vscode无响应
vi ~/.bashrc
# 加入下面的行
alias code='/usr/share/code/code . --no-sandbox --unity-launch'
# 使配置生效
source .bashrc

```

## 安装 Minionda

由于Minionda可以很好地处理复杂的依赖关系和环境管理，它通常是首选工具。但是，如果只需要安装纯 Python 包，使用pip可能会更加简单直接

https://docs.anaconda.com/miniconda/

```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm -rf ~/miniconda3/miniconda.sh
# 执行安装
~/miniconda3/bin/conda init bash
~/miniconda3/bin/conda init zsh
# 查看信息
conda info

# 更新
# conda update conda
# 通过 conda 安装包
## 通过首选渠道安装
# conda install numpy
## 通过指定渠道安装
# conda install conda-forge::numpy

# 安装虚拟python环境(创建一个名称为Python 3.12的虚拟环境，使用 Python 版本为3.12.3)
conda create --name PY3.12 python=3.12.3

# 查看虚拟环境列表
conda info --envs

# 激活虚拟环境
conda activate PY3.12
# 取消
conda deactivate

# 创建一个新的虚拟环境(名称为 venv)
python -m venv example-llama

# 激活这个虚拟环境(激活虚拟环境后,您就可以在这个隔离的环境中安装所需的依赖包,而不会影响到系统级的 Python 环境)
source ./example-llama/bin/activate
```

## 安装 OLLAMA

``` bash
curl -fsSL https://ollama.com/install.sh | sh

# 拉取 gemma2 模型
ollama pull gemma2
```
