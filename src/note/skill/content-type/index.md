---
title: Content-Type
nav:
  title: 笔记
  path: /note
group:
  title: 技巧
  path: /skill
  order: 10
---

## query-string

不同后端解析形式不一样，尤其正对数组、对象这种作为 query 的形式

> 注意 query-string parse 不能处理复杂对象，如：{user:{name:'xxg'}} 这种属性值又是一个对象的形式，但是属性值是简单数组类型的是可以的

在跟后端的联调中(或者浏览器 url 上)是不是会遇到一下的格式

- `https://blog.xxgtalk.cn/?choices=0&choices=1&choices=2&name=xxg`

- `https://blog.xxgtalk.cn/?choices[]=0&choices[]=1&choices[]=2&name=xxg`

- `https://blog.xxgtalk.cn/?choices=0,1,2&name=xxg`

- `https://blog.xxgtalk.cn/?choices[]=0,1,2&name=xxg`

再花式一点的

- `https://blog.xxgtalk.cn/?choices=0|1|2&name=xxg`

## content-type

> boundary=xxxxxxx:一般是指数据分界符，有多部分数据实体时，用于封装消息的多个部分的边界；其由 1 到 70 个字符组成；浏览器中会自动生成，该字符集对于通过网关鲁棒性良好，不以空白结尾

```bash
// 以如下数据为例
query
{
  _timespan:1646365988959
}
data
{
  name:'xxg',
  age:30
}
```

### multipart/form-data

```bash
GET /?_timespan=1646365988959 HTTP/1.1
Host: localhost:8000
Content-Length: 210
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

// Body
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="name"

xxg
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="age"

30
----WebKitFormBoundary7MA4YWxkTrZu0gW
```

### application/x-www-form-urlencoded

```bash
GET /?_timespan=1646365988959 HTTP/1.1
Host: localhost:8000
Content-Type: application/x-www-form-urlencoded
Content-Length: 15

// Body
name=xxg&age=30
```

### application/json

```bash
GET /?_timespan=1646365988959 HTTP/1.1
Host: localhost:8000
Content-Type: application/json
Content-Length: 39

// Body
{
  "name": "xxg",
  "age": 30
}
```

### 其他

- 二进制：application/octet-stream、application/pdf、application/json

- 图片：image/gif、image/png、image/jpeg...

- 文本：text/plain、text/html、text/css、text/javascript、text/xml

- 视频：video/webm、video/ogg

- 音频：audio/midi、audio/mpeg、audio/webm、audio/ogg、audio/wav

## 代码演示

### stringify

<code src="./demo/stringify.tsx" />

### parse

<code src="./demo/parse.tsx" />

### 综合案例

<code src="./demo/request.tsx" />
