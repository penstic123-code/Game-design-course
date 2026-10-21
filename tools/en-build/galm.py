import sys,glob
from PIL import Image
nn=sys.argv[1].zfill(2); sc=float(sys.argv[2]) if len(sys.argv)>2 else 0.62
fs=sorted(glob.glob("shots/gal-%s-*.png"%nn), key=lambda p:int(p.split("-")[-1][:-4]))
ims=[Image.open(f).convert("RGB") for f in fs]
H=sum(i.height for i in ims); W=ims[0].width
M=Image.new("RGB",(W,H),"white"); y=0
for i in ims: M.paste(i,(0,y)); y+=i.height
M=M.resize((int(W*sc),int(H*sc)))
# 拆成两半横向并排以保证单张不太长
h=M.height//2
A=M.crop((0,0,M.width,h)); B=M.crop((0,h,M.width,M.height))
O=Image.new("RGB",(M.width*2+8,h+4),"white"); O.paste(A,(0,0)); O.paste(B,(M.width+8,0))
O.save("shots/galm-%s.png"%nn); print(O.size)
