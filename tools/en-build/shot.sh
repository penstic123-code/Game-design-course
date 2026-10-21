#!/bin/bash
# shot.sh NN selector width outname
S="C:/Users/彭诗迪/AppData/Local/Temp/claude/c--Users-----Desktop-Vibelearning/b7569954-2747-44e7-8eb2-236c85328539/scratchpad/en/shots"
F=$(ls /c/Users/彭诗迪/Desktop/game-design-course-web/en/ch$1-*.html | head -1)
cd /c/Users/彭诗迪/Desktop/game-design-course-web
node tools/shot.mjs "C:/Users/彭诗迪/Desktop/game-design-course-web/en/$(basename $F)" "$S/$4.png" "$2" "${3:-1000}" >/dev/null && echo "$S/$4.png"
