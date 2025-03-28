---
title: MQTT
order: 5
nav:
  title: 后端
  order: 30
  path: /backend/net
group:
  title: .NET
  order: 1
---

# MQTT

## 服务

[mosquitto](https://mosquitto.org/download/)

### 配置

> 进入安装目录下

找到 mosquitto.conf 文件，这个是配置文件，修改一些信息

```bash
# 监听端口 listener port-number [ip address/host name/unix socket path]
listener 1883

# 配置是否允许匿名登录
allow_anonymous false

# 配置用户名密码
# password_file

password_file pwfile.example

# 创键用户名密码(输入两次密码)
mosquitto_passwd -c pwfile.example admin
# 追加用户
# mosquitto_passwd pwfile.example admin

```

### 启动服务

```bash
mosquitto.exe -c mosquitto.conf -d -v

# -c 指定配置文件
# -d 将服务放在后台执行
# -v 显示详细日志
# -p 监听指定端口的代理，不建议与-c选项一起使用
```

## 客户端

QTT Explorer 是一个常用的测试 MQTT 的工具，操作便捷

[mqtt-explorer](https://mqtt-explorer.com/)
