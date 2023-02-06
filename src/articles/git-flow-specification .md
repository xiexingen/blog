---
title: git-flow 规范
nav:
  title: 随笔
  path: /articles
  order: 105
---

# git-flow 规范

## 前言

Vincent Driessen 曾经写过一篇博文，题为“[A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)”（一个成功的 Git 分支模型）。git-flow 工作流程就是从这篇文章里来的。

git-flow 工作流程围绕项目发布定义了严格的分支模型。尽管它比 Feature Branch Workflow 更复杂一些，但它也为管理更大规模的项目提供了坚实的框架。

与 Feature Branch Workflow 比起来，git-flow 流程并没有增加任何新的概念或命令。其特色在于，它为不同的分支分配了非常明确的角色，并且定义了使用场景和用法。除了用于功能开发的分支，它还使用独立的分支进行发布前的准备、记录以及后期维护

## 它是怎么工作的

git-flow 流程仍然使用一个中央代码仓库，它是所有开发者的信息交流中心。跟其他的工作流程一样，开发者在本地完成开发，然后再将分支代码推送到中央仓库。

### 长期分支

git-flow 使用两个长期分支来记录项目开发的历史，而不是使用单一的 master 分支。

#### master 分支

在 git-flow 流程中，master 只是用于保存官方的发布历史。

- 主分支，产品功能全部实现可用于交付时，最终在 master 分支对外发布
- 该分支为只读唯一分支 , 只能从其他分支(release/hotfix)合并 , 不能在此分支修改
- 另外所有在 master 分支的推送应该打标签做记录,方便追溯
- 例如 release 合并到 master , 或 hotfix 合并到 master

#### develop 分支

- 长期开发分支，为只读唯一分支 , 只能从其他分支合并
- feature 功能分支完成 , 合并到 develop
- release 分支在项目开始时应从 develop 分支拉取
- release/hotfix 分支上线完毕, 合并到 develop 分支

### 短期分支

git-flow 使用几种短期分支来进行项目开发。

#### release 分支：

这个分支的创建意味着一个发布周期的开始，也意味着本次发布不会再增加新的功能。

在项目完成测试并发布后，这个分支会被合并入 master，并且用版本号打上标签。

另外，发布分支上的改动还应该合并入 develop 分支，但需要注意的是，如果 develop 分支在被其他项目使用的时候，合并的时机需要进行人为控制。

使用专门的一个分支来为发布做准备的好处是，在一个团队忙于当前的发布的同时，另一个团队可以继续为接下来的一次发布开发新功能。

#### hotfix 分支

发布后产品出现问题，需要进行的维护工作或者紧急问题的快速修复也需要使用一个独立的分支。

这是唯一一种可以直接基于 master 创建的分支。一旦问题被修复了，所做的改动应该被合并入 master 和 develop 分支（或者用于当前发布的分支）。在这之后，master 上还要使用更新的版本号打好标签。

#### feature 分支

每一个新功能的开发都应该各自使用独立的分支。这样做的好处是不影响他人，便于协同工作。

在创建新的功能开发分支时，应该基于 develop 分支拉取，并在开发完合并到 develop 分支。

新功能开发永远不应该和 master 分支产生关系

## 建议

下图表示了一个遵循 git-flow 的开发流程， `我们提倡所有的项目尽量不要并行`，这样可以使用 develop 作为开发分支，遵循标准的 git-flow。如果出现了并行的时候，可以使用 feature 分支作为开发分支，同时保证能够按照一定的顺序合并回 develop 分支。

![git-flow](./assets/git-flow.png)

> 本文章摘自奇安信开发规范文档
