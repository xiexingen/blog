---
title: 基础知识
order: 1
nav:
  title: LLM
  order: 50
group:
  title: 基础
  order: 1
---

# 基础知识

## 机器学习场景

- 判别式(Discriminative AI)

分类/回归/识别/定位,传统机器学习应用场景，适合决策分析场景

- 生成式(Generative AI)

LLM 兴起,多模态，泛化性，具有创造力，有智能涌现现象

## 机器学习类型

- 无监督学习（机器根据一定规则自己构造 label）

- 监督学习（人为标注 label）

- 强化学习（基于环境反馈）

## 基础模型

- bert 模型

完形填空 创造性不好

- gpt 模型

文字接龙 创造性好

## 模型

可以将模型理解为知识和能力的混合体，经过微调的模型包含了学到的知识，逻辑，也包含执行具体某个任务的能力。但它有个缺点就是比较重量级，训练和更新需要大量的时间和成本，这也就导致模型知识不够及时，变更困难，黑盒难控制，能力扩展难度高等问题

## 提示词(prompt)

可以将其理解为知识和指令的混合体，类比于 AI 1.0 的判别模型，提示词相当于特征输入，因此 AI2.0 将特征工程（feature enginering）晋级为提示词工程（prompt enginnering），特征工程决定了模型的上限，从这个角度侧面可见用好提示词的重要性。prompt 可以给大模型直接表达需求（zero-shot），也可以给它示例（few-shot）解释需求，也可以一步步教它思考（chain of thought）一起完成需求，还可以给它一些背景信息（context），帮助它理解问题和回顾历史。因此，prompt 有很好的灵活性和透明性，能够轻量级地完成一些看似神奇的工作。但 prompt 也有它的约束，受限于大模型性能和成本考虑，prompt 的大小有限，加之每次请求都需要携带大量信息来维持状态，在性能上也有一定缺陷
