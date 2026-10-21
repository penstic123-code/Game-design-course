import sys,re
s=open(sys.argv[1],encoding="utf-8").read()
for part in re.split(r'(?m)^#### (\d+)\n',s)[1:] and zip(*[iter(re.split(r'(?m)^#### (\d+)\n',s)[1:])]*2):
    n,body=part
    open("work/ch%s.enS.txt"%n.zfill(2),"w",encoding="utf-8").write(body)
    print("wrote",n)
