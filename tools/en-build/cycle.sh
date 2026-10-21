#!/bin/bash
# cycle.sh : 中文可能还在变——重新同步编号、应用、检查全部章节，列出问题
cd "$(dirname "$0")"; export PYTHONIOENCODING=utf-8
python resync.py $(seq 1 29) | grep -v unchanged
for n in $(seq -w 1 29); do python applyall.py $n | grep -v 'д��\|写出'; python entool.py check $n | grep -v '^OK'; done
echo cycle-done
