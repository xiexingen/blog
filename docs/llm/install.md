---
title: 环境安装
order: 10
nav:
  title: LLM
group:
  title: 基础
---


## 安装 Minionda

由于 Minionda 可以很好地处理复杂的依赖关系和环境管理，它通常是首选工具。但是，如果只需要安装纯 Python 包，使用 pip 可能会更加简单直接

https://docs.anaconda.com/miniconda/

```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm -rf ~/miniconda3/miniconda.sh
# 执行安装
~/miniconda3/bin/conda init bash
~/miniconda3/bin/conda init zsh
# 查看信息
conda info

# 更新
# conda update conda
# 通过 conda 安装包
## 通过首选渠道安装
# conda install numpy
## 通过指定渠道安装
# conda install conda-forge::numpy

# 安装虚拟python环境(创建一个名称为Python 3.12的虚拟环境，使用 Python 版本为3.12.3)
conda create --name PY3.12 python=3.12.3

# 查看虚拟环境列表
conda info --envs

# 切换python版本
conda activate PY3.12
# 取消切换到这个版本
#conda deactivate
# 创建一个新的虚拟环境(名称为 venv)
python -m venv example-llama

# 激活这个虚拟环境(激活虚拟环境后,您就可以在这个隔离的环境中安装所需的依赖包,而不会影响到系统级的 Python 环境)
source ./example-llama/bin/activate
```

## 安装 OLLAMA

``` bash
curl -fsSL https://ollama.com/install.sh | sh

# 拉取 gemma2 模型
ollama pull gemma2
```
