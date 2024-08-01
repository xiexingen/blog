---
title: Ollama
order: 15
nav:
  title: LLM
group:
  title: 基础
---

Ollama 是一个开源框架，专门设计用于在本地运行大型语言模型。它的主要特点是将模型权重、配置和数据捆绑到一个包中，从而优化了设置和配置细节，包括GPU使用情况，简化了在本地运行大型模型的过程。

Ollama 还提供了对模型量化的支持，这可以显著降低显存要求。例如，4-bit量化可以将FP16精度的权重参数压缩为4位整数精度，从而大幅减小模型权重体积和推理所需显存。这使得在普通家用计算机上运行大型模型成为可能。

此外，Ollama 框架还支持多种不同的硬件加速选项，包括纯CPU推理和各类底层计算架构，如 Apple Silicon。这使得 Ollama 能够更好地利用不同类型的硬件资源，提高模型的运行效率。

Ollama可 以在命令行中直接进行使用，也可以作为服务通过 api 的形式进行访问


# 安装

打开官网 https://ollama.com/ 下载

默认安装位置：C:\Users\Admin\AppData\Local\Programs\Ollama

默认模型下载保存位置(可修改) C:\Users\Admin\.ollama\models


# 使用

运行 7B 模型至少要有 8G 的内存，运行 13B 模型至少要有 16G 的内存；运行 33B 模型至少要有 32G 的内存

这些是在你没有显存只有内存的情况下，如果你有显存，那么 Ollama 会将模型放在显存中，当显存中放不下时会将模型同时放在内存中

# 支持的模型

可以在https://ollama.com/library进行查看

# 支持命令

可以通过  ollama help 查看

## 下载模型

``` bash
ollama pull []
# ollama pull gemma2:9b 下载gemma2 9b的这个模型
```

## 运行模型

> 注意: 如果运行的模型不存在，会先下载

``` bash
ollama run []
# ollama run gemma2:9b 运行这个模型
```

## 运行模型带详细信息

``` bash
# 带上 --verbose 参数，当每次交互的时候会带上运行情况
ollama run gemma2:9b --verbose

# 如下面的信息
# total duration:       37.9282063s
# load duration:        11.5633658s
# prompt eval count:    10 token(s)
# prompt eval duration: 1.563577s
# prompt eval rate:     6.40 tokens/s
# eval count:           101 token(s)
# eval duration:        24.795598s
# eval rate:            4.07 tokens/s
```

## 删除模型

``` bash
ollama rm []
# ollama rm gemma2:9b 删除这个模型
```

## 查看下载的模型

``` bash
ollama list
```

## 查看模型信息

``` bash
ollama show []
# ollama show gemma2:9b 查看这个模型的信息
```

## 查看当前运行的模型

``` bash
ollama ps
```

# 交互模式

## 在命令行中进行对话

启动模型后会进入命令行交互模型，在命令行中直接对话；

> /bye 会退出模型，但是注意: 它没有真的退出，会驻留5分钟左右，如果没有任何交互才会退出

## API 形式调用

只要是启动了 ollama,在本地就会默认建立一个ollama服务，可以通过API的形式来进行访问

同时 ollama 适配了 OpenAI 的接口的访问和返回形式，可以很容易地使用 ollama 的 API 替换 OpenAI 的接口


### curl 访问

``` bash
curl --request POST "http://localhost:11434/api/chat" -d "{\"model\": \"gemma2:9b\", \"messages\": [ { \"role\": \"user\", \"content\": \"王者荣耀典韦怎么样\" } ], \"stream\": false}"
```

### js 调用

``` js
const res = await fetch("http://localhost:11434/api/generate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "gemma2:9b",
    "prompt":"介绍下王者荣耀中的典韦这个英雄",
    "context":[]
  }),
});
const responseText = await res.json();
```

### nodejs 调用

```js
// 先安装 @langchain/community
import { Ollama } from "@langchain/community/llms/ollama";

const ollama = new Ollama({
  baseUrl: "http://localhost:11434",
  model: "gemma2:9b",
});

const answer = await ollama.invoke(`请介绍王者荣耀中的典韦与凯?`);

console.log(answer);
```

# 多模态模型

``` bash
ollama pull llava:7b
ollama run llava:7b
# 启动后，输入 prompt:使用中文描述下这张图片 ./test.png
```

# 定制自己的模型

与 docker 类似，就是在使用某个模型作为base模型，然后在该模型上进行定制，下面我们就以 qwen2:7b 作为基础模型进行定制

1. 编写定制规则，即 Modelfile 文件,内容如下(此处 Modelfile):

``` bash
FROM qwen2:7b

# set the temperature to 1 [higher is more creative, lower is more coherent]
PARAMETER temperature 1

# set the system message
SYSTEM """
XXG Test
"""
```

2. 使用 Modelfile 来创建定制模型，执行命令

``` bash
ollama create xxg -f ./Modelfile

```

3. 查看已有的模型，ollama list

可以看到一个名称为 xxg 的模型已经存在


# 修改

## 如何指定上下文窗口大小

Ollama 默认上下文窗口大小为 2048 tokens，可以通过命令 /set parameter num_ctx 4096 将上下文窗口长度调整为4096 token
``` bash
# 先运行 gemma:2b模型，然后将上下文窗口长度改为4096
ollama run gemma:2b

/set parameter num_ctx 4096
```

> 更多请查看: https://github.com/ollama/ollama/blob/main/docs/modelfile.md

## 查看是运行在GPU上还是CPU上

``` bash
# 查看 PROCESSOR 列的值
ollama ps
```

## 修改运行的端口 & 模型存放目录

windows 下通过环境变量的形式修改 `OLLAMA_HOST` `OLLAMA_MODELS`


> https://github.com/ollama/ollama/blob/main/docs/faq.md#how-do-i-configure-ollama-server
