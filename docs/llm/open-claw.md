---
title: Ollama
order: 100
nav:
  title: LLM
group:
  title: 基础
---

真正能做事的 AI 智能体：清理收件箱、发送邮件、管理日历。支持企业微信、飞书、钉钉与微信生态对话接入。

# 安装

自行查看官网，https://openclaw.cc/start/getting-started.html

# 推荐技能

```bash
# 注意要往当前用户目录下的 .bashrc 文件写入，GITHUB_TOKEN="[你的github token]" 否则会报限制请求次数
npx clawhub install [你的skill]
# 让小龙虾帮你安装
帮我安装这些 SKILL: self-improving、tavily-search、markdown-converter、memory-setup、find-skills、summarize、openai-whisper、nano-pdf、nano-banana-pro、github、humanizer、proactive-agent、obsidian、memory-setup、skill-vetter
```

- self-improving ｜ AI 自我进化

AI 做错了或者被你纠正之后，自动把这次的经验记下来，建立分层记忆库。下次同类问题不再犯同样的错。越用越聪明，不只是靠你反复教。

clawhub.ai/ivangdavila/self-improving

- nano-pdf ｜用说话的方式改 PDF

跟 AI 说"把第三页的标题改成 XX"、"在第二页末尾加一段"，它真的帮你改。
PDF 从此不是只读文件了，不需要 Adobe，不需要记操作路径。
clawhub.ai/steipete/nano-pdf

- tavily-search

拒绝「井底之蛙]，随时查阅全网最新实时信息。

- web-content-fetcher ｜读取任意网页内容

专门解决网页内容抓取的问题。

Jina Reader 读不到的页面、需要登录的网站、微信公众号文章——用这个都能读到，支持三级降级策略自动兜底，返回干净的 Markdown 格式正文。

- find-skills | 帮你找插件

你不知道有什么插件可以用的时候，跟 AI 说"我想订阅日历"、"帮我搜 Reddit"，它会主动去 ClawHub 找合适的 SKILL，推荐给你安装。
装了这个，以后不用自己翻，AI 替你主动发现新能力。
clawhub.ai/JimLiuxinghai/find-skills

- gog| 读邮件、加日程、写文档，一个指令搞定办公软件

- summarize | 一键总结一切

扔给它一个链接或文件——网页、PDF、图片、音频、YouTube 视频——直接输出摘要。
碰到一篇长文或者视频不想看完，先扔给它过一遍，值得细看再细看。
clawhub.ai/steipete/summarize

- nano-banana-pro ｜ AI 直接出图

描述你想要的图，AI 直接生成，支持 1K/2K/4K 分辨率。也支持把现有图片当输入再编辑——换背景、加文字、改风格都行。

不用单独订阅 Midjourney，对话框里就能出图。

clawhub.ai/steipete/nano-banana-pro

- github ｜在对话框里管代码

搜索 GitHub 开源项目、提 Issue、看 PR、查 CI——全在聊天框里完成。

程序员不用来回切窗口了。

clawhub.ai/steipete/github

- humanizer ｜去掉 AI 味

把文章里"值得注意的是"、"不仅……而且……"、"总而言之"这类套话揪出来换掉，让内容读起来更像人写的。

AI 写完用这个过一遍，基本能解决 AI 腔问题。

clawhub.ai/biostartechnology/humanizer

- obsidian ｜打通本地知识库

如果你用 Obsidian 做笔记，这个 SKILL 让 AI 直接读写你的 Vault——搜笔记、新建文档、更新内容。

说"找一下我去年记的关于 XX 的笔记"，它真的能找到。

clawhub.ai/steipete/obsidian

- memory-setup ｜给 AI 配持久记忆

默认的 AI 每次对话都是全新的，没有记忆。这个 SKILL 给它配置持久记忆系统，从"金鱼脑"变"大象脑"——你的偏好、工作习惯、历史决策，它都记得。

clawhub.ai/jrbobbyhansen-pixel/memory-setup

- markdown-converter ｜万能格式转换

PDF、Word、PPT、Excel、HTML、图片、音频——各种格式一键转成 Markdown，方便 AI 处理和分析。接到什么格式的文件都能直接喂给 AI。

clawhub.ai/steipete/markdown-converter

- agent browser

- weather

- polymarketodds

- proactive agent

- sonoscli

- notion

- nano-banana-pro

- skill-vetter ｜装之前先审查

装陌生 SKILL 之前，先让它帮你过一遍——检查有没有可疑权限、异常行为、潜在安全风险。不知道来路的插件别直接装，先审再说。

clawhub.ai/spclaudehome/skill-vetter

- video-frames ｜提取视频帧

用 ffmpeg 从视频里提取关键帧或短片段，方便内容分析和素材剪辑。做内容的人常用——不用自己一帧一帧截图了。

clawhub.ai/steipete/video-frames
