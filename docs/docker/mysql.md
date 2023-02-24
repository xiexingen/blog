---
title: 安装mysql
order: 50
nav:
  title: Docker
---

# 安装 mysql

将 docker 容器中的实例中的文件跟物理文件链接起来 即使删掉容器 数据还在 再创建容器的时候 任然可以对应上之前的数据

## 安装

### 使用 docker-compose 安装

- [1.1] 在目录/docker/data/mysql/mysql-init 下创建 init-user.sql 文件 内容如下

```bash
use mysql;
CREATE USER 'sa'@'%' IDENTIFIED BY 'Abcd1234';
GRANT ALL PRIVILEGES ON *.* TO 'sa'@'%';
```

- [1.2]
  docker-compose -f mysql-compose.yml up -d
  对应的 mysql-compose.yml 文件

mysql-compose.yml 内容如下

```yml
version: "2.3"

services:
  db:
    image: mysql/mysql-server
    container_name: mysql01
    restart: always
    command: mysqld --character-set-server=utf8 --collation-server=utf8_general_ci
    ports:
      - 3306:3306
    # networks:
    #   - net_mysql
    environment:
      MYSQL_ROOT_PASSWORD: Abcd1234
    volumes:
      - /docker/data/mysql/mysql-init:/docker-entrypoint-initdb.d
      - /docker/data/mysql/data:/var/lib/mysql
# volumes:
#   mysql-data:
#     external: true
# networks:
#   net_mysql:
#     external: true
```

### mount【推荐使用】

```bash
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=Abcd1234 --name mysql01 --restart always --mount type=bind,src=/docker/mysql/config/my.cnf,dst=/etc/my.cnf --mount type=bind,src=/docker/mysql/data,dst=/var/lib/mysql mysql
```

> /docker/mysql/config/my.cnf &nbsp;&nbsp;对应物理磁盘位置 需要新建 my.cnf 内容如下

```bash
[mysqld]
user=root
character-set-server=utf8
[client]
default-character-set=utf8
[mysql]
default-character-set=utf8
```

> /etc/my.cnf --docker 创建 mysql 后该 mysql 容器对应的配置文件
> /docker/mysql/data --对应物理磁盘位置 表示 docker 中数据映射到的物理文件位置
> /var/lib/mysql mysql/mysql-server &nbsp;&nbsp;对应 docker 中 mysql 实例容器的文件位置
> -e MYSQL_ROOT_PASSWORD=Abcd1234 &nbsp;设置初始密码

### volume(后期废用) 推荐使用 mount 形式

```bash
docker run -d -p 3306:3306 --name mysql01 -v=/docker/mysql/config/my.cnf:/etc/my.cnf -v=/docker/mysql/data:/var/lib/mysql mysql/mysql-server
```

## 使用篇

docker 操作 mysql

### 连接 mysql

```bash
docker exec -it mysql01 bash
mysql -u root -p [密码] --密码可以待 mysql 容器启动后
//通过 docker logs mysql01 找到生成的随机密码 密码在一段类型：
```

### 设置 mysql 密码

```bash
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('Abcd1234'); --用户名为 root 密码为 Abcd1234
```

### 实验一下 【--exit 退出当前】

```bash
use mysql; --使用数据库查询
 select user,host from user; --查询用户信息
 show variables like ‘%char%’; --查看当前使用的字符集
 在 mysql 中创建网络用户 这样可以非本机访问
 mysql> CREATE USER 'sa'@'%' IDENTIFIED BY 'Abcd1234';
 mysql> GRANT ALL PRIVILEGES ON _._ TO 'sa'@'%';
```

> docker run -d -p 3306:3306 -e"MYSQL_USER=Zarc" -e"MYSQL_PASSWORD=pwd123456" -e"MYSQL_ROOT_PASSWORD=password123" -e"MYSQL_RANDOM_ROOT_PASSWORD=true" --name mysql01 mysql/mysql-server --character-set-server=utf8 --collation-server=utf8_general_ci
> 备注： : When this is true (which is its default state, unless MYSQL_ROOT_PASSWORD is set or MYSQL_ALLOW_EMPTY_PASSWORD is set to true), a random password for the server's root user is generated when the Docker container is started 当这个 MYSQL_RANDOM_ROOT_PASSWORD 为 true 时 为 root 用户设置密码是没有作用的还是会生成随机的密码，设置为 false 或者不加这个环境变量
