# python patch.py NN  "id=新文本" ...   覆盖译文文件中某些 id（追加到 chNN.en9.txt，后读后覆盖）
import sys
nn=sys.argv[1].zfill(2)
p="work/ch%s.en9.txt"%nn
import os
old=open(p,encoding='utf-8').read() if os.path.exists(p) else ""
d={}
import re
cur=None
for line in old.split("\n"):
    m=re.match(r'@@(\d+)$',line)
    if m: cur=int(m.group(1)); d[cur]=[]
    elif cur is not None: d[cur].append(line)
d={k:"\n".join(v).strip("\n") for k,v in d.items()}
for a in sys.argv[2:]:
    k,v=a.split("=",1); d[int(k)]=v
open(p,"w",encoding='utf-8').write("".join("@@%d\n%s\n"%(k,v) for k,v in sorted(d.items())))
