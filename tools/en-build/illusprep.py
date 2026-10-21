# python illusprep.py dump NN|00    -> work/illus-chNN.zh.txt   (00 = 通用库 illus.js)
# python illusprep.py build NN|00   -> <repo>/js/en/illus-chNN.js (00 -> js/en/illus-lib.js 的数据部分)
import sys, json, subprocess, re, os
REPO = "C:/Users/彭诗迪/Desktop/game-design-course-web"
HERE = os.path.dirname(os.path.abspath(__file__)).replace("\\", "/")
WORK = HERE + "/work"
cmd, nn = sys.argv[1], sys.argv[2].zfill(2)
src = "illus.js" if nn == "00" else "illus-ch%s.js" % nn
if cmd == "dump":
    r = subprocess.run(["node", HERE + "/illusdump.js", src], capture_output=True)
    d = json.loads(r.stdout.decode("utf-8"))
    out = []
    for n, v in d.items():
        out.append("## " + n)
        out.append("alt: " + v["alt"])
        for t in v["texts"]: out.append("t: " + t)
        out.append("")
    open("%s/illus-ch%s.zh.txt" % (WORK, nn), "w", encoding="utf-8").write("\n".join(out))
    print(len(d), "张，文字", sum(len(v["texts"]) for v in d.values()))
else:
    r = subprocess.run(["node", HERE + "/illusdump.js", src], capture_output=True)
    zh = json.loads(r.stdout.decode("utf-8"))
    en = {}; cur = None
    for fn in sorted(f for f in os.listdir(WORK) if re.match(r'illus-ch%s\.en\d*\.txt' % nn, f)):
        for line in open(WORK + "/" + fn, encoding="utf-8").read().split("\n"):
            if line.startswith("## "): cur = line[3:].strip(); en[cur] = {"a": "", "t": []}
            elif line.startswith("alt: ") and cur: en[cur]["a"] = line[5:].strip()
            elif line.startswith("t: ") and cur: en[cur]["t"].append(line[3:])
    bad = 0
    for n, v in zh.items():
        e = en.get(n)
        if not e or not e["a"]: print("缺少", n); bad += 1; continue
        if len(e["t"]) != len(v["texts"]): print("文字数不符", n, len(v["texts"]), len(e["t"])); bad += 1
    for n in en:
        if n not in zh: print("多余", n); bad += 1
    if bad: sys.exit(1)
    js = "/* English text for %s: only alt and text strings; shapes come from the Chinese pack. Generated from tools notes, edit with care. */\nILLUS_EN_ADD(%s);\n" % (src, json.dumps(en, ensure_ascii=False, indent=0))
    dst = REPO + "/js/en/" + ("illus-lib.js" if nn == "00" else "illus-ch%s.js" % nn)
    open(dst, "w", encoding="utf-8", newline="\n").write(js)
    print("写出", dst, len(en))
