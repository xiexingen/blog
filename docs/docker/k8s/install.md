---
title: 集群安装
order: 30
nav:
  title: Docker
  path: /docker/k8s
group:
  title: K8S
---

以本地 WMware 为例

安装节点网络信息假设为 192.168.203.200/244

```bash
k8s-master 200
k8s-node1 210
k8s-node2 220
```

## 前置准备

创建 5 个虚拟机分别为: k8s-master、k8s-node1、k8s-node2

配置信息如下:

- 内存

4GB+

- 处理器

2 核+ 2 个+

- 磁盘

60GB+

- 网络

选择 NAT

- 系统环境

centos 7

### 克隆系统

基于配置好的第一个系统，使用 vmware 的克隆功能，快速克隆出 k8s-node1、k8s-node2 两个系统，然后分别配置两个系统的 主机名 和 ip 地址

```bash
# 修改 hostname
hostnamectl --static set-hostname k8s-master # master节点
hostname $hostname # 立刻生效

# 修改 IP

## 查看

nmcli c

# 修改(通过上面的命令可以查看到名称)
vi /etc/sysconfig/network-scripts/ifcfg-ens33

# 内容如下

TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
NAME=ens160
UUID=73b4855f-f28c-4404-b03d-403595760d9d
DEVICE=ens160
ONBOOT=yes
IPADDR=192.168.203.200 # 更换成对应的ip 200 210 220
GATEWAY=192.168.203.2
DNS1=114.114.114.114
DNS2=8.8.8.8
NETMASK=255.255.255.0

# 保存后重启网络
systemctl restart network
```

## 系统初始化配置(所有系统都需要执行)

```bash
# 禁用 selinux(将 SELinux 设置为 permissive 模式（相当于将其禁用）)
setenforce 0
sed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config

# 关闭swap分区
swapoff -a
sed -i 's|^\(/.*swap\)|#\1|' /etc/fstab

# 关闭防火墙
# 查看防火墙(如果有 active(runing)字样说明是开启的)
# systemctl status firewalld
systemctl stop firewalld
systemctl disable firewalld

# 升级操作系统内核

yum -y update kernel*

# 管理节点密钥配置
# 生成密钥
ssh-keygen -t ecdsa -f /root/.ssh/id_rsa -N ''
# 复制密钥到所有服务器
ssh-copy-id 192.168.203.200
ssh-copy-id 192.168.203.210
ssh-copy-id 192.168.203.220

# 往 hosts 文件追加主机解析配置
# 也可以在某台机器上执行，然后通过 scp /etc/hosts 192.168.203.201:/etc/hosts 这样拷贝过去

cat >> /etc/hosts << EOF
192.168.203.200 k8s-master
192.168.203.210 k8s-node1
192.168.203.220 k8s-node2
192.168.203.110 k8s-service
EOF
```

## 安装 docker (所有系统都需要执行)

```bash
# 转发 IPv4 并让 iptables 看到桥接流量
cat << EOF | tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

sudo modprobe overlay
sudo modprobe br_netfilter

# 设置所需的 sysctl 参数，参数在重新启动后保持不变
cat <<EOF | tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF

# 应用 sysctl 参数而不重新启动
sudo sysctl --system

# 检查开启结果
lsmod | grep br_netfilter
lsmod | grep overlay

sysctl net.bridge.bridge-nf-call-iptables net.bridge.bridge-nf-call-ip6tables net.ipv4.ip_forward

# containerd安装
# 移除已经安装的docker版本
yum remove -y docker docker-common docker-selinux docker-engine
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine

# 配置docker-ce软件源
yum-config-manager --add-repo   http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

# 安装 yum 配置管理工具
sudo yum install -y yum-utils \
                    device-mapper-persistent-data \
                    lvm2
# 注意: k8s 使用了 containerd作为容器， 所以可以不安装 docker-ce
## 运行sudo yum install docker-ce 也是可以的，docker-ce依赖了docker-ce-cli, containerd.io, docker-buildx-plugin, docker-compose-plugin。这些依赖会同步install
yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

## 2. 配置docker
cat <<EOF > /etc/docker/daemon.json
{
    "registry-mirrors": [
        "https://registry.hub.docker.com",
        "http://hub-mirror.c.163.com",
        "https://docker.mirrors.ustc.edu.cn",
        "https://registry.docker-cn.com"
    ],
    "insecure-registries": ["https://hub.xxgtalk.cn"]
}
EOF

## 3. 启动docker
systemctl start docker
# 设置开机自启
systemctl enable docker


# 安装containerd
yum install -y containerd

# 备份默认配置文件
mv /etc/containerd/config.toml /etc/containerd/config.toml.default
# 重新生成配置文件
containerd config default > /etc/containerd/config.toml
sed -i 's|registry.k8s.io|registry.aliyuncs.com/google_containers|g' /etc/containerd/config.toml

# 启动containerd
systemctl enable containerd
systemctl restart containerd
# 可以看到 active(runing)字样表示正常
systemctl status containerd

# 安装 circtl 工具
# 可以去 github 上查看最新的版本号，此处为 : v1.30.0
curl -L https://github.com/kubernetes-sigs/cri-tools/releases/download/v1.30.0/crictl-v1.30.0-linux-amd64.tar.gz --output crictl-v1.30.0-linux-amd64.tar.gz
sudo tar zxvf crictl-v1.30.0-linux-amd64.tar.gz -C /usr/local/bin
rm -f crictl-v1.30.0-linux-amd64.tar.gz

# 配置crictl工具运行时接口地址(runtime-endpoint)
crictl config --set runtime-endpoint=unix:///run/containerd/containerd.sock
crictl ps

```

## 安装 kubeadm、kubelet、kubectl (所有系统都需要执行)

- kubeadm：用来初始化集群的指令。
- kubelet：在集群中的每个节点上用来启动 Pod 和容器等。
- kubectl：用来与集群通信的命令行工具。

kubeadm 不能帮你安装或者管理 kubelet 或 kubectl， 所以你需要确保它们与通过 kubeadm 安装的控制平面的版本相匹配。 如果不这样做，则存在发生版本偏差的风险，可能会导致一些预料之外的错误和问题。 然而，控制平面与 kubelet 之间可以存在一个次要版本的偏差，但 kubelet 的版本不可以超过 API 服务器的版本。 例如，1.7.0 版本的 kubelet 可以完全兼容 1.8.0 版本的 API 服务器，反之则不可以

kubeadm 安装文档: https://kubernetes.io/zh-cn/docs/setup/production-environment/tools/kubeadm/install-kubeadm/

```bash
# 配置Yum源
cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF

# 清除缓存
yum clean all

#把服务器的包信息下载到本地电脑缓存起来，makecache建立一个缓存
yum makecache

# 安装kubeadm
yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes
systemctl enable --now kubelet

```

## 使用 kubeadm 创建集群(所有系统都需要执行)

```bash
# 查看容器镜像
#由于官网镜像在国内访问不稳定，会出现访问失败
#使用国内镜像进行替换下载，在此pause使用3.9会导致集群无法初始化，还需要下载pause:3.6
kubeadm config images pull --image-repository registry.aliyuncs.com/google_containers

```

## 控制节点初始化(只需要在 k8s-master 节点上执行)

kubeadm 参数详解，更多信息可以查看 https://kubernetes.io/zh-cn/docs/reference/setup-tools/kubeadm/kubeadm-init/

| 参数名称                     | 默认值          | 描述                                                                                         |
| ---------------------------- | --------------- | -------------------------------------------------------------------------------------------- |
| –apiserver-advertise-address | 默认网络接口    | API 服务器所公布的其正在监听的 IP 地址                                                       |
| –apiserver-bind-port 6443    | 6443            | API 服务器绑定的端口                                                                         |
| –control-plane-endpoint      | -               | 为控制平面指定一个稳定的 IP 地址或 DNS 名称                                                  |
| –service-cidr                | 10.96.0.0/12    | 为服务的虚拟 IP 地址另外指定 IP 地址段                                                       |
| –service-dns-domain          | cluster.local   | 为服务另外指定域名                                                                           |
| –pod-network-cidr            | -               | 指明 Pod 网络可以使用的 IP 地址段。如果设置了这个参数，控制平面将会为每一个节点自动分配 CIDR |
| –image-repository            | registry.k8s.io | 选择用于拉取控制平面镜像的容器仓库                                                           |

```bash

# 使用自定义kubernets镜像仓库进行初始化
kubeadm init \
--apiserver-advertise-address 192.168.203.200 \
--apiserver-bind-port 6443 \
--control-plane-endpoint 192.168.203.200 \
--service-cidr=10.119.0.0/16 \
--service-dns-domain="cluster.local" \
--pod-network-cidr=10.120.0.0/16 \
--image-repository registry.aliyuncs.com/google_containers

# 上面执行成功后会输出
# kubeadm join 192.168.203.200:6443 --token snj1dq.2omsxxuq8p9qp54t --discovery-token-ca-cert-hash sha256:c19555ad2d1fcda799bab5060eac874bfde285f64890ad89ed0bc2ad8e5b69b1

# 设置环境变量，官网建议root用户使用
export KUBECONFIG=/etc/kubernetes/admin.conf
cat <<EOF | tee -a ~/.bash_profile
export KUBECONFIG=/etc/kubernetes/admin.conf
EOF

source  ~/.bash_profile
# 复制控制配置，便于后继使用kubectl
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
# cp /etc/kubernetes/admin.conf ~/.kube/config

```

## 集群节点加入(k8s-node1、k8s-node2)

```bash
# 由于上面的token是有失效期的，如果过期了可以通过下面的命令重新获取
# kubeadm token create --print-join-command
# 查看已经创建的令牌列表
# kubeadm token list

# 复制 k8s-master 上执行 kubeadm init 的提示信息
kubeadm join 192.168.203.200:6443 --token snj1dq.2omsxxuq8p9qp54t --discovery-token-ca-cert-hash sha256:c19555ad2d1fcda799bab5060eac874bfde285f64890ad89ed0bc2ad8e5b69b1

# 在 master 节点上执行命令查看
kubectl get nodes
# 此时就可以查看集群状态，如果出现状态为 notready 就说明成功了

# 其他命令
# 重置集群
# kubeadm reset
# docker ps -qa |xargs docker rm -f

```

## 安装 flannel(master 节点安装)

flannel 如何实现 pod 与 pod 通信? pod 是 k8s 最小单元，容器是 docker 的最小单元，而 pod 中可能存在一个或者多个容器。所以说白了，k8s 通过手段管理的就是容器，而容器与容器怎么通信，如果是同一台机器，是通过 docker0 通信的，也就相当于 docker0 是一个交换机一个网关，一个容器访问另一个容器，通过网关协调。而容器如何跟另一台的物理机的容器通信？首先容器通过 docker0 无法找到另一台容器的，所以 docker0 就把请求往上给，给到了物理机的物理网卡，物理网卡又是怎么去知道另一台的物理机的容器在哪？flannel 起到了作用。假如有 A B 两个物理机器，A 机器通过 ens33 10.4.7.21/24 跟 B 机器通信，于是配置 flannel 绑定 ens33，然后在 A 机器 daemon.json 中配置，当前物理机启动的 pod 网段是 172.7.21/24，也就是说当前物理机启动的 pod 的 IP 是 172.7.21/24 中之一，而 B 物理机的 pod 网段是 172.7.22/24。于是 flannel 就会在 A 物理机生成一个路由规则，172.7.22/24 10.4.7.22 255.255.255.0 ens33 ，代表如果访问的是 172.7.22/24 就把通过 ens33 网卡流量给 10.4.7.22，具体的解释就是，A 中的 pod，访问 172.7.22/24，docker0 发现没有符合的地址，给到了上层网卡 ens33，通过路由发现，去 172.7.22/24 的，直接通过 ens33 发给 10.4.7.22，当 B 机器接收到后，发现是访问 172.7.22/24，直接转给 docker0，在给到 pod。

```bash
# 通过上述，首先需要查看物理网卡的名称(我们可以看到为 ens33)
ipaddr

# 下载
wget https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

# 修改配置文件(文件比较长，在里面找到类似如下的内容)
... ...
  net-conf.json: |
    {
      ### 这里的network和 kubeadm init 的时候指定的 --pod-network-cidr 的值一致
      "Network": "10.120.0.0/16", #
      "Backend": {
        "Type": "vxlan"
      }
    }
... ...

# 拉取镜像(可以查看 kube-flannel.yml 文件中 images 的版本)
docker pull docker.io/flannel/flannel:v0.25.1

# 容器部署 flannel
kubectl apply -f kube-flannel.yml

#验证(可以看到两个 kube-proxy-xxxxx)
kubectl -n kube-system get pod -o wide

```

至此，集群搭建完毕

## 验证集群

通过创建一个 deployment 验证集群是否正常

```bash
## 创建deployment
kubectl create deployment nginx --image=nginx
# deployment.apps/nginx created

## expose 端口到宿主机
kubectl expose deployment nginx --port=80 --type=NodePort

## -o wide参数可以看到nginx调度到了哪个node.
kubectl get all -o wide

## 访问
http://192.168.203.220:32723/
```
