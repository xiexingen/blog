---
title: 安装 Harbor 私有镜像仓库
order: 31
nav:
  title: Docker
  path: /docker/k8s
group:
  title: K8S
---

再克隆一个虚拟机，我们叫做 k8s-service 192.168.203.110

安装好 docker 环境，并配置好 daemon.json

## 安装 Docker Compose

```bash
curl -L "https://github.com/docker/compose/releases/download/1.25.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
docker-compose version   # 查看版本信息

```

## 安装 Harbor

```bash
# 下载离线安装包
wget https://github.com/goharbor/harbor/releases/download/v2.11.0-rc1/harbor-offline-installer-v2.11.0-rc1.tgz

# 解压
tar -zxvf harbor-offline-installer-v2.11.0-rc1.tgz

# 移动到个人目录下并修改配置
mv harbor /usr/local/
cd /usr/local/harbor
cp harbor.yml.tmpl harbor.yml
vi harbor.yml

# 修改 harbor.yml 文件
hostname: 192.168.203.110
ui_url_protocol: https
db_password: [密码]
certificate: /data/cert/server.crt
private_key: /data/cert/server.key

# 创建证书
# 创建证书目录
mkdir -p /data/cert
cd /data/cert

# 生成证书
# 生成私钥(需要输入密码)
openssl genrsa -des3 -out server.key 2048
# 创建证书请求(需要输入上面的密码，省、市、组织、单位、域名、管理员邮箱，后面都空)
openssl req -new -key server.key -out server.csr
# 备份秘钥
cp server.key server.key.org
# 去除密码
openssl rsa -in server.key.org -out server.key
# 签名
openssl x509 -req -days 3650 -in server.csr -signkey server.key -out server.crt
# 给证书赋权限
chmod a+x *

# 回到 之前的 harbor目录

cd /usr/local/harbor/

# 启动

./install.sh

# 访问
https://192.168.203.110

# 登录
admin/


```

## 给其他要访问的系统追加 host

```bash
echo "192.168.203.110  hub.xxgtalk.cn" >> /etc/hosts

# 在 k8s-master|k8s-node 上执行登录(输入admin/Harbor12345)
docker login hub.xxgtalk.cn

# 在 k8s-master 上测试(创建3个副本)
kubectl run nginx-deploy  --image=hub.xxgtalk.cn/library/myapp:v1 -port=80 --replicas=3

# 对外暴露端口
kubectl expose deployment nginx-deploy --port=3000 --target-port=80 --type=NodePort

# 查看

kubectl getsvc

# 查看
kubectl get deployment

# 查看更详细的信息
kubectl get pod -o wide

# 在运行的机器上查看
docker ps -a | grep nginx
```
