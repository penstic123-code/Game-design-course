#!/bin/bash
# isvg.sh NN [width]  -> 截该章所有 svg[width='100%'] 内联图，拼成 shots/isvg-NN.png
cd "$(dirname "$0")"
N=$(grep -c "svg viewBox" /c/Users/彭诗迪/Desktop/game-design-course-web/ch$1-*.html)
rm -f shots/is_*.png
n=0
for i in $(seq 0 12); do ./shot.sh $1 "svg[width='100%']@$i" ${2:-1000} is_$i >/dev/null 2>&1 || break; done
python - <<PY
import glob,sys
from PIL import Image
fs=sorted(glob.glob("shots/is_*.png"), key=lambda p:int(p.split("_")[-1][:-4]))
ims=[Image.open(f).convert("RGB") for f in fs]
W=max(i.width for i in ims); H=sum(i.height+8 for i in ims)
M=Image.new("RGB",(W,H),"white"); y=0
for i in ims: M.paste(i,(0,y)); y+=i.height+8
M.save("shots/isvg-$1.png"); print(len(ims), M.size)
PY
