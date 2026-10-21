#!/bin/bash
cd "$(dirname "$0")"; export PYTHONIOENCODING=utf-8
./run.sh $1 || exit 1
(cd /c/Users/彭诗迪/Desktop/game-design-course-web && QA_LAYOUT_MAX=40 node tools/qa.mjs C:/Users/彭诗迪/Desktop/game-design-course-web/en ch$1 2>&1 | tail -60)
python gal.py $1
