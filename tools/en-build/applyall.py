# applyall.py NN... : apply；遇到失效的 fix 块，若只是空格差异（autosp 已取代）则自动删除，其余报告
import sys, re, subprocess, os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
env = dict(os.environ, PYTHONIOENCODING="utf-8")
for n in [x.zfill(2) for x in sys.argv[1:]]:
    for _ in range(60):
        r = subprocess.run([sys.executable, "entool.py", "apply", n], env=env, capture_output=True, text=True, encoding="utf-8")
        out = r.stdout.strip()
        m = re.match(r"fix 匹配次数 (\d+)：(.*)", out)
        if not m:
            print(n, out.splitlines()[-1] if out else r.stderr[-200:]); break
        p = "work/ch%s.fix.txt" % n
        t = open(p, encoding="utf-8").read()
        bl = re.findall(r'<<<\n(.*?)\n===\n(.*?)\n>>>\n?', t, re.S)
        bad = None
        for a, b in bl:
            if repr(a[:60]) == m.group(2) or a.startswith(eval(m.group(2))[:40]):
                bad = (a, b); break
        if not bad: print(n, "无法定位", out); break
        sp = lambda s: re.sub(r'\s+', '', s)
        if sp(bad[0]) == sp(bad[1]) or sp(bad[1]).replace("\u3000", "") == sp(bad[0]):
            bl.remove(bad); open(p, "w", encoding="utf-8").write("".join("<<<\n%s\n===\n%s\n>>>\n" % b for b in bl))
            print(n, "dropped spacing fix:", repr(bad[0][:50]))
        else:
            print(n, "STALE FIX (需人工):", repr(bad[0][:80])); break
