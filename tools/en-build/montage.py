import sys
from PIL import Image
out=sys.argv[1]; ims=[Image.open(p).convert("RGB") for p in sys.argv[2:]]
cols=2 if len(ims)>1 else 1
W=max(i.width for i in ims); 
rows=[ims[i:i+cols] for i in range(0,len(ims),cols)]
H=sum(max(i.height for i in r)+6 for r in rows)
M=Image.new("RGB",(W*cols+6*(cols-1),H),"white")
y=0
for r in rows:
    x=0
    for i in r: M.paste(i,(x,y)); x+=W+6
    y+=max(i.height for i in r)+6
M.save(out)
