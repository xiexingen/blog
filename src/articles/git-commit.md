---
title: git提交规范
nav:
  title: 随笔
  path: /articles
  order: 2
---

# git 提交规范

## Commit Message 格式

```bash
<type>(<scope>): <subject>
<空一行>
<body>
<空一行>
<footer>
```

- `<type>`

  - feat: 新功能（feature）
  - fix: 修补 bug
  - docs: 文档（documentation）
  - style: 格式（不影响代码运行的变动）
  - refactor: 重构（即不是新增功能，也不是修改 bug 的代码变动）
  - perf: 更改代码以提高性能
  - test: 添加测试
  - chore: 构建过程或辅助工具的变动

- `<scope>` 选填项，用来说明本次提交的影响的范围，如 $location, $browser。当更改影响的范围不止一个时，可以使用 \*

- `<subject>`: 用来简要描述本次改动，尽量遵循:

  - 以动词开头，使用第一人称现在时，比如 change，而不是 changed 或 changes
  - 首字母不要大写
  - 结尾不用句号 .

- `<body>` : 对 `<subject>` 的描述

- `<footer>`: 主要放置不兼容变更和关闭 Issue 的信息
  - 不兼容变更: 以 BREAKING CHANGE: 开头，描述变动、变动理由和迁移方法。
  - 关闭 Issue: 如 close #666

### 特殊格式

- Revert: 此外如果需要撤销之前的 Commit，那么本次 Commit Message 中必须以 revert： 开头，后面紧跟前面描述的 Header 部分，格式不变。并且，<body>部分的格式也是固定的，必须要记录撤销前 Commit 的 SHA 值。

### 案例

- feat

  ```bash
  feat($browser): onUrlChange event (popstate/hashchange/polling)

  Added new event to $browser:
  - forward popstate event if available
  - forward hashchange event if popstate not available
  - do polling when neither popstate nor hashchange available

  Breaks $browser.onHashChange, which was removed (use onUrlChange instead)
  ```

  ```bash
  feat(directive): ng:disabled, ng:checked, ng:multiple, ng:readonly, ng:selected

  New directives for proper binding these attributes in older browsers (IE).
  Added coresponding description, live examples and e2e tests.

  Closes #351
  ```

- fix

  ```bash
  fix($compile): couple of unit tests for IE9

  Older IEs serialize html uppercased, but IE9 does not...
  Would be better to expect case insensitive, unfortunately jasmine does
  not allow to user regexps for throw expectations.

  Closes #392
  Breaks foo.bar api, foo.baz should be used instead
  ```

* docs

  ```bash
  docs(guide): updated fixed docs from Google Docs

  Couple of typos fixed:
  - indentation
  - batchLogbatchLog -> batchLog
  - start periodic checking
  - missing brace
  ```

  ```bash
  docs: fix grammar
  docs: corrections and further clarifications
  docs: update broken link
  docs(README): update version number
  docs(README): place badge
  docs(inputs): remove redundant defaults
  ```

* style

  ```bash
  style: fix table indentation
  style($location): add couple of missing semi colons
  ```

* refactor

  ```bash
  refactor: remove unnecessary object destructuring
  refactor: use `Object.entries` rather than `Object.keys`
  ```

* perf

  ```bash
  perf(*): Update network configuration
  ```

* test

  ```bash
  test: clarify variables name
  test(testRelease): set schedule test
  ```

* chore

  ```bash
  chore(package): update xo to version 0.25.0
  chore(package): remove commitizen from our dependencies
  chore(*): transfer repo to cycjimmy
  ```

* revert

  ```bash
  revert: "fix: do not convert ssh `repositoryUrl` to https"

  This reverts commit b895231.
  ```
