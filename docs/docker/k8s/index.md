---
title: 基础
order: 10
nav:
  title: Docker
  path: /docker/k8s
  order: 40
group:
  title: K8S
---

# 基础组件

## API Server

所有组件访问的统一入口

## 控制器

维持副本期望数目

## Scheduler

负责接受任务，选择合适的节点进行分配任务

## ETCD

键值对数据库，存储 K8S 集群所有重要信息(持久化)

## Kubelet

直接跟容器引擎交互实现容器的生命周期管理

## Kube-Proxy

负责写入规则至 IPTABLES, IPVS 实现服务的映射访问

## COREDNS

为集群中的 SVC 创建一个域名 IP 的关系解析

## DASHBOARD

给 K8S 集群提供一个 B/S 界面

## INGRESS CONTROLLER

为服务提供外网入口

## FEDERATION

提供一个可以跨越多个 K8S 集群的统一入口

## PROMETHEUS

提供 K8S 集群的监控能力

## ELK

提供 K8S 集群日志统一分析入口
