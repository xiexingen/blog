---
title: 正则
nav:
  title: 笔记
group:
  title: 核心方法
---

# 正则

# 位置符

- `^` 匹配行的开头

  ```jsx | pure
  "hello".replace(/^/, "😁");
  // 上面代码输出 '😁hello'
  ```

- `$` 匹配行的结尾

  ```jsx | pure
  "hello".replace(/$/, "😁");
  // 上面代码输出 'hello😁’‘
  ```

- `\b` 单词边界

  1. `\w` 与`\W` 之间的位置
  2. `^`与`\w`之间的位置
  3. `\w`与`$`之间的位置

  ```jsx | pure
  "front_end_1.pdf".replace(/\b/g, "-");
  // 上面代码输出 '-front_end_1-.-pdf-'
  ```

- `\B` 非单词边界，与`\b`相反

  1. `\w` 与`\w` 之间的位置
  2. `\W` 与`\W` 之间的位置
  3. `^`与`\W`之间的位置
  4. `\W`与`$`之间的位置

  ```jsx | pure
  "[front_end_1.pdf]".replace(/\B/g, "-");
  // 上面代码输出 '-[f-r-o-n-t-_-e-n-d-_-1.p-d-f]-'
  ```

- `?=p` 正向先行断言(符合 p 子模式前面的那个位置)

  ```jsx | pure
  // 给所有的xxx前面加一个⭐️
  "xxx-2021-xxx-10".replace(/(?=xxx)/g, "⭐️");
  //上面代码输出 '⭐️xxx-2021-⭐️xxx-10'
  ```

- `(?!p)` 负向先行断言(跟正向先行断言相反)

  ```jsx | pure
  // 给所有的xxx前面加一个⭐️
  "xxx-2021-xxx-10".replace(/(?!xxx)/g, "⭐️");
  //上面代码输出 ''x⭐️x⭐️x⭐️-⭐️2⭐️0⭐️2⭐️1⭐️-x⭐️x⭐️x⭐️-⭐️1⭐️0⭐️''
  ```

- `(?<=p)` 符合 p 子模式后面的那个位置

  ```jsx | pure
  // 给所有的xxx后面加一个⭐️
  "xxx-2021-xxx-10".replace(/(?<=xxx)/g, "⭐️");
  //上面代码输出 'xxx⭐️-2021-xxx⭐️-10'
  ```

- `(?<!p)` 与上面相反

  ```jsx | pure
  // 给所有的xxx后面加一个⭐️
  "xxx-2021-xxx-10".replace(/(?<!xxx)/g, "⭐️");
  //上面代码输出 '⭐️x⭐️x⭐️x-⭐️2⭐️0⭐️2⭐️1⭐️-⭐️x⭐️x⭐️x-⭐️1⭐️0⭐️''
  ```

- 范围表示法

  ```jsx | pure
  [123456789abcdefGHIJKLM] // 这种形式就可以写成[1-9a-fG-M]
  [-az] [az-] [a\-z] // 当想匹配az-这三个里面的时候
  ```

- 简写

  - \d 就是[0-9] 表示一位数字
  - \D 就是[^0-9] 表示除数字外的任意字符
  - \w 就是[0-9a-zA-z_] 表示数字、大写字母、小写字母、下划线
  - \W 就是[^0-9a-za-z_] 表示除\w 外的
  - \s 就是[\t\v\n\r\f] 表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页符
  - \S 就是[^\t\v\n\r\f] 跟\s 相反
  - . 就是[^\n\r\u2028\u2029] 表示通配符，表示几乎任意字符，换行符、回车符、行分隔符和段分隔符除外

> 如果想匹配任意字符怎么办？
> 可以试试 `[\d\D]`、`[\w\W]`、`[\s\S]`和`[^]`中的任意一个

- 量词

  - {m} 刚好出现 m 次
  - {m,} 最少出现 m 次
  - {m,n} 最少出现 m 次最多出现 n 次
  - ? 等于{0,1} 表示 0 次或者 1 次
  - - 等于{1,} 表示 1 次或者多次
  - - 等于{0,} 表示 0 次或者多次

## 代码演示

### 案例

<code src="./_demos/core/regex/demo/demo1.tsx"></code>

### trim

<code src="./_demos/core/regex/demo/trim.tsx"></code>

### 手机号码

<code src="./_demos/core/regex/demo/phone.tsx"></code>

### 手机号码 3-4-4 格式

<code src="./_demos/core/regex/demo/phone-split.tsx"></code>

### 身份证

<code src="./_demos/core/regex/demo/idcard.tsx"></code>

### email

<code src="./_demos/core/regex/demo/email.tsx"></code>

### url

<code src="./_demos/core/regex/demo/url.tsx"></code>

### ip

<code src="./_demos/core/regex/demo/ipv4.tsx"></code>

### 16 进制颜色

<code src="./_demos/core/regex/demo/color16.tsx"></code>

### YYYY-MM-DD

<code src="./_demos/core/regex/demo/date-ymd.tsx"></code>

### YYYY-MM-DD HH:mm:ss

<code src="./_demos/core/regex/demo/date-ymdhms.tsx"></code>

### 整数

<code src="./_demos/core/regex/demo/integer.tsx"></code>

### 小数

<code src="./_demos/core/regex/demo/float.tsx"></code>

### 特定小数位

<code src="./_demos/core/regex/demo/limit-precision.tsx"></code>

### 数字千分位

<code src="./_demos/core/regex/demo/price-split.tsx"></code>

### 邮编

<code src="./_demos/core/regex/demo/postal-no.tsx"></code>

### qq

<code src="./_demos/core/regex/demo/qq.tsx"></code>

### 微信

<code src="./_demos/core/regex/demo/wx.tsx"></code>

### 车牌号

<code src="./_demos/core/regex/demo/car-no.tsx"></code>

### 全字母

<code src="./_demos/core/regex/demo/letter.tsx"></code>

### 中文&字母&特殊字符

<code src="./_demos/core/regex/demo/chinese.tsx"></code>

### 密码强度

<code src="./_demos/core/regex/demo/password.tsx"></code>

### 文件扩展名

<code src="./_demos/core/regex/demo/file-extens.tsx"></code>

### 重复片段

<code src="./_demos/core/regex/demo/repeat-fragment.tsx"></code>
