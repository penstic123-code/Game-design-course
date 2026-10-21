#!/bin/bash
# go.sh NN : bchk + run + qa(brief)
cd "$(dirname "$0")"; export PYTHONIOENCODING=utf-8
python bchk.py $1
./run.sh $1 2>&1 | grep -v "^写出"
(cd /c/Users/彭诗迪/Desktop/game-design-course-web && QA_LAYOUT_MAX=40 node tools/qa.mjs C:/Users/彭诗迪/Desktop/game-design-course-web/en ch$1 2>&1 | grep -v "文字压边框\|文字贴图边缘" | tail -25)
