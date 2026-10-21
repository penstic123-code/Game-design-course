import re,sys,glob
n=sys.argv[1]
def load(p,zh):
    s=open(p,encoding="utf-8").read(); d={}
    parts=re.split(r'(?m)^@@(\d+)[^\n]*\n',s)
    for i in range(1,len(parts),2):
        ls=[l for l in parts[i+1].strip().split("\n") if not (zh and l.startswith("# "))]
        d[int(parts[i])]=" ".join(ls)
    return d
z=load(f"work/ch{n}.zh.txt",1);e={}
for f in sorted(glob.glob(f"work/ch{n}.en*.txt")): e.update(load(f,0))
miss=[k for k in z if k not in e]
if miss: print("MISSING",miss)
for k in z:
    for pat in (r"<b[ >]",r"<span",r"<br"):
        a=len(re.findall(pat,z[k]));b=len(re.findall(pat,e.get(k,"")))
        if a!=b: print(k,pat,a,b,z[k][:30])
