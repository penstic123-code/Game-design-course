#!/bin/bash
# 用法: ./run.sh NN   —— apply + check + illus build + qa
cd "$(dirname "$0")"
export PYTHONIOENCODING=utf-8
python entool.py apply $1 && python entool.py check $1 && { [ -f work/illus-ch$1.zh.txt ] && python illusprep.py build $1 || true; }
