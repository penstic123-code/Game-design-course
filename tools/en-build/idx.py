import sys,re
s=open(sys.argv[1],encoding='utf-8').read()
a=int(sys.argv[2]); b=int(sys.argv[3])
for m in re.finditer(r'@@(\d+) (\S+)\n((?:# .*\n)?)(.*)',s):
    i=int(m.group(1))
    if a<=i<=b: print(i,m.group(2),m.group(4)[:28].replace("\n"," "))
