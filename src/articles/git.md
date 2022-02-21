---
title: git 命令
nav:
  title: 随笔
  path: /articles
---

# git 笔记(常用)

## 命令

### 创建版本库

```bash
mkdir repository    //创建一个文件夹
git init [name]       //把目录编程git可以管理的仓库,[name]可选
```

### 提交

```bash
git add test.txt //添加文件到版本库,此时还没有提交到 git
git commit -m "提交注释" //告诉 Git，把文件提交到仓库
```

### 分支相关

- 查看当前 git 的状态: git status
- 查看修改变的内容: git diff
- 查看历史记录: git log
- 查看修改的 headid： git reflog
- 查看分支： git branch [-a|-r] //-a 所有分支，-r:远程分支
- 查看远程库信息 : git remote
- 查看远程库详细信息: git remote -v
- 查看远程仓库：$ git remote -v
- 添加远程仓库：$ git remote add [name] [url]
- 克隆远程仓库：git checkout [branchName] origin/[branchName] //如果远程分支有 branchName 而本地没
- git checkout -b [branchName] origin/[branchName] //如果远程分支有本地无，克隆并切换到
- 删除本地仓库: git branch -d [branch-name]
- 强制删除本地分支 git branch -D [branch-name]
- 删除远程仓库：$ git push origin :[branch-name] //删除远程分支
- git remote rm [branch-name]
- git push origin --delete [branchName]
- 修改远程仓库：$ git remote set-url --push [name] [newUrl]
- 拉取远程仓库：$ git pull origin [remoteName]:[localBranchName]
- git fetch origin [remoteName]:[localBranchName] //获取到当前分支
- 推送远程仓库：$ git push origin [remoteName]:[localBranchName] //如果有冲突，需要先 pull 或者 fetch 远程的
- git push origin [remoteName]:[localBranchName] -f //强推，使用本地覆盖服务器
- 创建分支：git branch [branch Name]
- 切换分支：git checkout [branch Name]
- 创建+切换分支：git checkout -b [branch Name]
- 合并分支到当前分支：git merge [branch Name]
- 重命名分支： git branch -m [new_branchName] [old_branchName]
- 查看所有分支：git branch -a
- 从指定分支创建并切换到分支:git checkout -b [local-branchName] [origin/branchName]
- 删除分支: git branch [-d|-D] [local-branch] //-d 只能删除已经参与合并的分支,-D:可以删除为合并的分支，然后在 git push origin :master 可以删除远程分支
- git merge 命令用于合并指定分支到当前分支,注意到上面的 Fast-forward 信息，Git 告诉我们，这次合并是“快进模式”，也就是直接把 master 指向 dev 的当前提交
- git merge dev :分两种情况一种是直接指向，另一种是生成另外一个将两个合并
- git merge --no-ff -m'comment' [branch Name] //合并分支时，加上--no-ff 参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而 fast forward 合并就看不出来曾经做过合并
- git merge --abort //取消合并

### 关联远程

1. 在 git 上创建一个 Repository
2. 在本地执行命令：git remote add origin git@github.com:xiexingen/learngit.git //将本地仓库与远程关联
3. 重新关联：git remote set-url origin git://git.coding.net/xxxx/yyyy.git

### clone

```bash
git clone [地址] [文件夹名称] //将远程项目复制到本地之地文件加下
```

### 搁置、取消、删除

```bash
git stash //相当于 tfs 中的搁置
git stash apply //取消搁置到本地
git stash drp //删除搁置集
git stash pop //取消搁置到本地并删除搁置集
git stash list //查看搁置集
git stash apply stash@{0} //恢复指定的搁置集
git -reflog 查看历史版本
git reset --hard HEAD^ //回到上一次改动 (针对历史提交)
git reset -hard 3628164 //3628164 headid 恢复到指定的记录(针对历史提交)
git reset test.js //使用当前历史提交还原工作区
git checkout -- test.js //使用暂存区覆盖改动
git clean -n //将当前非暂存区的文件移除
git clean -f //强制移除
```

7. 多人协作  
   A、git push -u origin [local-branch][:remote-branch] //吧本地库推送到远程库上，-u，不但回吧本地的分支推送到远程新的 master 分支，还会把本地分支和远程分支关联起来，在以后的推送或者拉去时就可以简化命名
   后面如果有修改的话，只需要执行：git push origin [local-branch] //吧本地分支的最新修改推送到服务器
   B、从本地推送分支，使用 git push origin [local_branch]:[remote-branch]，如果推送失败，先用 git pull 抓取远程的新提交；
   在本地创建和远程分支对应的分支，使用 git checkout -b branch-name origin/branch-name，本地和远程分支的名称最好一致；
   c、建立本地分支和远程分支的关联，使用 git branch --set-upstream [local-branch] [origin/remote-branch]
   从远程抓取分支，使用 git pull，如果有冲突，要先处理冲突。
   如果 git pull 提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建，用命令 git branch --set-upstream branch-name origin/branch-name

### 版本相关

- 查看版本：$ git tag
- 创建版本：$ git tag [name]
- 删除版本：$ git tag -d [name]
- 查看远程版本：$ git tag -r
- 创建远程版本(本地版本 push 到远程)：$ git push origin [name]
- 删除远程版本：$ git push origin :refs/tags/[name]
- 合并远程仓库的 tag 到本地：$ git pull origin --tags
- 上传本地 tag 到远程仓库：$ git push origin --tags
- 创建带注释的 tag：$ git tag -a [name] -m 'yourMessage'

### 忽略一些文件、文件夹不提交

git rm -f --cached [path] 移除单个文件，path 表示全路径  
git rm -f --cached [path] -r 移除目录，path 表示目录
git rm --cached [file] //将 file 从暂存区移除

在仓库根目录下创建名称为“.gitignore”的文件，写入不需要的文件夹名或文件，每个元素占一行即可，如

```bash
node_modules
target
bin
\*.db
```

.gitignore 文件无效的解决方法  
git rm -r --cached [指定文件]  
提交

### 生成密钥

- 查看是否已经有了 ssh 密钥：cd ~/.ssh
  > 如果提示：No such file or directory 说明你是第一次使用 git  
  > 如果不是第一次使用，请执行下面的操作,清理原有 ssh 密钥。  
  >  $ mkdir key_backup $ cp id_rsa* key_backup $ rm id_rsa*  
  > 生成新的密钥：  
  > $ ssh-keygen -t rsa -C “1002275364@qq.com”

### tag 相关

- git tag -a v1.0 -m 'version 1.0'
- git tag 列出已有标签
- git tag -l 'v1.0' //列出指定标签
- git checkout -b [branchName] [tagname] //在特定的标签上创建一个新分支
- git tag v0.9 [626262] //给上次提价的 commit id 为 626262 打上标签
- git push origin [v1.0] //将标签 v1.0push 到远程
- git push origin --tags //将本地的所有 tag push 到远程
- git push origin :refs/tags/[v1.0] //删除 v1.0

### git 比对工具

配置 git 使用 BCompare 来比对文件(用户目录\.gitconfig 里面)

```bash
[user]
name = xiexingen
email = 1002275364@qq.com
[diff]
    tool = bc4
[difftool]
    prompt = false
[difftool "bc4"]
    cmd = \"D:/Program Files/Beyond Compare 4/BComp.exe\" \"$LOCAL\" \"$REMOTE\"
[merge]
    tool = bc4
[mergetool]
    prompt = false
    keepBackup = false
[mergetool "bc4"]
    cmd = \"D:/Program Files/Beyond Compare 4/BComp.exe\" \"$LOCAL\" \"$REMOTE\" \"$BASE\" \"$MERGED\"
    trustExitCode = true
[alias]
    dt = difftool
    mt = mergetool
```

使用：  
git difftool '文件 1' '文件 2'  
git mergetool

- 全局配置用户名

```bash
git config --global user.name xiexingen
git config --global user.email 1002275364@qq.com
git config --global alias.co checkout  //用co代替checkout
```

日志

```bash
git log –graph –pretty=format:’%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset’ –abbrev-commit –date=relative **
```

- https 带用户名密码形式迁出代码
  git clone http://用户名:密码@gitlab.xxgtalk.cn/WT/StudyNetCore.git

- github 上游合并问题

```js
首先指定上游地址：git remote add upstream [original repo url]
拉取上游代码:git fetch upstream
合并代码:git merge upstream/master
```

- 查看所有合并到 master 分支的分支

```js
git branch --merged master
```

- 删除所有已经合并到 master 的分支

```js
git branch --merged master |grep -v '^\*' | xargs git branch -d
```
