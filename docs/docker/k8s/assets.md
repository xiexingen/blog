---
title: 资源清单
order: 40
nav:
  title: Docker
  path: /docker/k8s
group:
  title: K8S
---

# K8s 中的资源

## 集群资源分类

- 名称空间级别

```bash
# 取 default 命名空间下
kubectl get pods -n=default

# 创建
kubectl create -f xxx.yml

# 查看 pod 帮助文档
kubectl explain pod
# kubectl explain pod.description

# 查看pod的详细信息
kubectl get pod -o wide
```

- 集群级别

- 元数据型

## 资源清单

```bash
apiVersion: v1
kind: pod
metadata:
  name: myapp-pod
  labels:
    app: myapp
    version: v1
spec:
  containers:
  - name: app
    image: hub.xxgtalk.cn/library/myapp:v1
```
