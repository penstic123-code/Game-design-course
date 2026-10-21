import re,sys
n=sys.argv[1]
def load(p,zh):
    s=open(p,encoding="utf-8").read(); d={}
    parts=re.split(r'(?m)^@@(\d+)[^\n]*\n',s)
    for i in range(1,len(parts),2):
        ls=[l for l in parts[i+1].strip().split("\n") if not (zh and l.startswith("# "))]
        d[int(parts[i])]=" ".join(ls)
    return d
zh=load(f"work/ch{n}.zh.txt",1); en=load(f"work/ch{n}.en.txt",0)
for k in sorted(zh):
    z=zh[k]; e=en.get(k,"<MISSING>")
    # heuristic: html tag start or digit/punct signature mismatch
    zt=re.findall(r"<[a-z]+",z)[:2]; et=re.findall(r"<[a-z]+",e)[:2]
    if zt!=et: print(k,z[:30],"||",e[:50])
print(len(zh),len(en))
