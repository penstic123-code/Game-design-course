# resync.py NN... : 若中文已变，则把现有译文按 (类型,原文) 迁移到新编号，输出 work/chNN.todo.txt
import sys, os, re, glob, subprocess, shutil
HERE = os.path.dirname(os.path.abspath(__file__)); os.chdir(HERE)
env = dict(os.environ, PYTHONIOENCODING="utf-8")
def run(*a): return subprocess.run([sys.executable, *a], env=env, capture_output=True, text=True, encoding="utf-8").stdout
def read_en(n):
    d = {}
    for f in sorted(glob.glob("work/ch%s.en*.txt" % n)):
        if f.endswith(".todo.txt"): continue
        s = open(f, encoding="utf-8").read()
        parts = re.split(r'(?m)^@@(\d+)[^\n]*\n', s)
        for i in range(1, len(parts), 2): d[int(parts[i])] = parts[i+1].strip("\n").rstrip()
    return d
tot = 0
for n in [x.zfill(2) for x in sys.argv[1:]]:
    old = "work/ch%s.zh.txt" % n
    run("tmpchk/entool.py", "extract", n) if False else None
    # 用 tmpchk 提取最新中文到 tmpchk/work，比较
    subprocess.run([sys.executable, "tmpchk/entool.py", "extract", n], env=env, capture_output=True)
    new = "tmpchk/work/ch%s.zh.txt" % n
    if open(old, encoding="utf-8").read() == open(new, encoding="utf-8").read():
        run("entool.py", "extract", n)   # 文字没变，但位置可能变了：刷新 map.json
        print(n, "unchanged"); continue
    os.makedirs("work/old", exist_ok=True)
    shutil.copy(old, "work/old/ch%s.zh.txt" % n)
    en = read_en(n)
    with open("work/old/ch%s.en.txt" % n, "w", encoding="utf-8") as fo:
        for i in sorted(en): fo.write("@@%d\n%s\n" % (i, en[i]))
    for f in glob.glob("work/old/ch%s.en[0-9a-zA-Z]*.txt" % n): os.remove(f)
    for f in glob.glob("work/ch%s.en*.txt" % n):
        if not f.endswith(".todo.txt"): os.remove(f)
    # 正式提取（写 work/chNN.zh.txt 与 map.json）
    run("entool.py", "extract", n)
    out = run("merge.py", n)
    print(n, out.strip())
