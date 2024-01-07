---
title: 安装gitlab
order: 70
nav:
  title: Docker
  path: /docker/basic
group:
  title: Docker 基础
---

# 安装 gitlab

## 安装

docker 运行 gitlab(由于 22 端口被 ssh 占用 改用 23)

- 在/docker/gitlab 目录下分别创建 data、config、logs 三个文件夹
- 执行命令

```bash
sudo docker run --detach --hostname gitlab.xxgtalk.cn --publish 443:443 --publish 8090:80 --publish 23:22 --name gitlab --restart always -v /docker/gitlab/config:/etc/gitlab -v /docker/gitlab/logs:/var/log/gitlab -v /docker/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce
* * * * * * 介绍 * * * * * *
sudo docker run --detach \
--hostname gitlab.xxgtalk.cn \
--publish 443:443 --publish 8090:80 --publish 23:22 \
--name gitlab \
--restart always \
-v /docker/gitlab/config:/etc/gitlab \ 配置文件映射到config文件夹
-v /docker/gitlab/logs:/var/log/gitlab \
-v /docker/gitlab/data:/var/opt/gitlab \
gitlab/gitlab-ce
```

> 注意
> 因为配置的 ssh 端口是 23 所以需要修改/docker/gitlab/config/gitlab.rb 文件中修改或增加
> gitlab_rails['gitlab_shell_ssh_port'] = 23
> 查看日志
> docker logs --follow gitlab

## gitlab runner

### 安装 gitlab runner

```bash
sudo docker run -d --name gitlab-runner --restart always -v /srv/gitlab-runner/config:/docker/gitlab-runner/config -v /var/run/docker.sock:/docker/gitlab-runner/run/docker.sock gitlab/gitlab-runner:latest
* * * * * * 介绍 * * * * * *
sudo docker run -d --name gitlab-runner --restart always \
v /srv/gitlab-runner/config:/docker/gitlab-runner/config \
-v /var/run/docker.sock:/docker/gitlab-runner/run/docker.sock \
gitlab/gitlab-runner:latest
```

### 注册 gitlab runner

注册 gitlab runner(官方建议跟 gitlab 不要放在同一个服务器上)参考地址:https://docs.gitlab.com.cn/runner/register/index.html

- 运行下面命令启动注册程序
  sudo docker exec -it gitlab-runner gitlab-ci-multi-runner register
- 输入 GitLab 实例 URL
  gitlab 的域名
- 输入获取到的用于注册 Runner 的 token:
  y8R7nLY4x3mdBiZt9AQV
- 输入该 Runner 的描述，稍后也可通过 GitLab's UI 修改:
- 给该 Runner 指派 tags, 稍后也可以在 GitLab's UI 修改:
- 选择 Runner 是否接收未指定 tags 的任务（默认值：false）， 稍后可以在 GitLab's UI 修改： true
- 选择是否为当前项目锁定该 Runner， 之后也可以在 GitLab's UI 修改。 该功能通常用于被指定为某个项目的 Runner （默认值：true）：
- 选择 Runner executor:
  我们使用 docker
- 如果你选择 Docker 作为你的 executor，注册程序会让你设置一个默认的镜像， 作用于.gitlab-ci.yml 中未指定镜像的项目
  输入: microsoft/dotnet

---

## 搭建私有仓库

1. 在 docker 中创建文件夹 registry 用来存放仓库镜像，然后运行命令

```docker
docker run -d -v /docker/registry:/var/lib/registry -p 8091:5000 --restart=always --name registry registry
```

## 使用 docker-compose 安装

gitlab-compose.yml

```bash
version: '2.2'
services:
  gitlab:
    image: 'gitlab/gitlab-ce'
    container_name: gitlab
    restart: always
    hostname: 'gitlab.xxgtalk.cn'
    environment:
      TZ: 'Asia/Shanghai'
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'gitlab.xxgtalk.cn'
        gitlab_rails['time_zone'] = 'Asia/Shanghai'
        gitlab_rails['gitlab_shell_ssh_port'] = 23
    ports:
      - '8090:80'
      - '443:443'
      - '23:22'
    volumes:
      - /docker/gitlab/config:/etc/gitlab
      - /docker/gitlab/data:/var/opt/gitlab
      - /docker/gitlab/logs:/var/log/gitlab

```
