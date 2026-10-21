import re,sys,glob,os
n=sys.argv[1]
def segs(p,zh):
    s=open(p,encoding="utf-8").read(); d={}
    parts=re.split(r'(?m)^@@(\d+)([^\n]*)\n',s)
    for i in range(1,len(parts),3):
        body=parts[i+2]
        kind=parts[i+1].strip()
        if zh:
            ls=body.split("\n"); ctx=[l for l in ls if l.startswith("# ")]
            txt="\n".join(l for l in ls if not l.startswith("# ")).strip()
            # context line for js (single # line)
            d[int(parts[i])]=(kind,txt,ctx)
        else:
            d[int(parts[i])]=body.strip("\n").rstrip()
    return d
oz=segs(f"work/old/ch{n}.zh.txt",1)
oe={}
for f in sorted(glob.glob(f"work/old/ch{n}.en*.txt")):
    oe.update(segs(f,0))
key={}
for i,(k,t,c) in oz.items():
    if i in oe: key[(k,t)]=oe[i]
nz=segs(f"work/ch{n}.zh.txt",1)
out=[];todo=[];hit=0
for i in sorted(nz):
    k,t,c=nz[i]
    if (k,t) in key: out.append("@@%d\n%s\n"%(i,key[(k,t)])); hit+=1
    else:
        todo.append("@@%d %s\n%s\n%s\n"%(i,k,"\n".join(c),t))
open(f"work/ch{n}.en.txt","w",encoding="utf-8").write("".join(out))
open(f"work/ch{n}.todo.txt","w",encoding="utf-8").write("\n".join(todo))
print(n,"reused",hit,"todo",len(todo),"chars",sum(len(x) for x in todo))
