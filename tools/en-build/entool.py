#!/usr/bin/env python
# 用法：
#   python entool.py extract NN      -> work/chNN.zh.txt  （待翻译片段）
#   python entool.py apply NN        -> 读 work/chNN.en*.txt，生成 <repo>/en/chNN-xxx.html
#   python entool.py check NN        -> 结构/脚本/残留中文检查
import re, sys, os, glob, json, subprocess, html

REPO = "C:/Users/彭诗迪/Desktop/game-design-course-web"
WORK = os.path.dirname(os.path.abspath(__file__)).replace("\\", "/") + "/work"
os.makedirs(WORK, exist_ok=True)

CJK = re.compile(r'[\u3400-\u9fff\uff00-\uffef\u3000-\u303f]')
INLINE = set("b i em strong small span a code br u s sub sup mark kbd abbr tspan wbr label input img cite q".split())
VOID = set("br img input meta link hr wbr area base col embed source track".split())
TAG = re.compile(r'<!--.*?-->|<(/?)([a-zA-Z][\w:-]*)((?:"[^"]*"|\'[^\']*\'|[^>"\'])*)>', re.S)
ATTR = re.compile(r'([\w:-]+)\s*=\s*(?:"([^"]*)"|\'([^\']*)\')')


class El:
    def __init__(s, name, ts, te):
        s.name = name; s.ts = ts; s.te = te      # start tag span
        s.cs = te; s.ce = te                       # content span
        s.children = []; s.parent = None; s.text_runs = []; s.attrs_src = ""
        s.end = te


def parse(src):
    root = El("#root", 0, 0); root.ce = len(src)
    stack = [root]; pos = 0; comments = []
    for m in TAG.finditer(src):
        if m.start() < pos: continue
        if m.group(0).startswith("<!--"):
            if CJK.search(m.group(0)): comments.append((m.start(), m.end(), "html"))
            continue
        close, name, attrs = m.group(1), m.group(2).lower(), m.group(3)
        if not close:
            el = El(name, m.start(), m.end()); el.attrs_src = attrs; el.attrs_off = m.start(3)
            el.parent = stack[-1]; stack[-1].children.append(el)
            selfclose = attrs.rstrip().endswith("/")
            if name in VOID or selfclose:
                el.cs = el.ce = m.end(); el.end = m.end()
            elif name in ("script", "style"):
                e2 = src.lower().find("</" + name, m.end())
                el.cs = m.end(); el.ce = e2
                gt = src.find(">", e2)
                el.end = gt + 1
                pos = gt + 1
                continue
            else:
                stack.append(el)
        else:
            # 找最近同名
            for k in range(len(stack) - 1, 0, -1):
                if stack[k].name == name:
                    el = stack[k]; el.ce = m.start(); el.end = m.end()
                    del stack[k:]
                    break
    return root, comments


def all_els(el):
    for c in el.children:
        yield c
        yield from all_els(c)


def inline_only(el):
    return all(d.name in INLINE for d in all_els(el))


def has_cjk(src, a, b): return bool(CJK.search(src[a:b]))


# ---------------- JS 扫描 ----------------
def skip_str(code, i, q):
    j = i + 1
    while j < len(code) and code[j] != q:
        j += 2 if code[j] == "\\" else 1
    return j


def skip_expr(code, i):
    """从 ${ 之后开始，返回匹配的 } 的下标"""
    depth = 1; j = i
    while j < len(code):
        c = code[j]
        if c in "\"'": j = skip_str(code, j, c) + 1; continue
        if c == "`": j = skip_tpl(code, j + 1) + 1; continue
        if c == "{": depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0: return j
        j += 1
    return j


def skip_tpl(code, i):
    j = i
    while j < len(code):
        c = code[j]
        if c == "\\": j += 2; continue
        if c == "`": return j
        if c == "$" and code[j + 1:j + 2] == "{": j = skip_expr(code, j + 2) + 1; continue
        j += 1
    return j


def scan_js(code):
    segs = []; warns = []; comments = []
    i = 0; n = len(code); prev = ""
    while i < n:
        c = code[i]
        if code.startswith("//", i):
            j = code.find("\n", i); j = n if j < 0 else j
            if CJK.search(code[i:j]): comments.append((i, j, "js"))
            i = j; continue
        if code.startswith("/*", i):
            j = code.find("*/", i + 2); j = n if j < 0 else j + 2
            if CJK.search(code[i:j]): comments.append((i, j, "jsb"))
            i = j; continue
        if c in "\"'":
            j = skip_str(code, i, c)
            if CJK.search(code[i + 1:j]): segs.append((i + 1, j, "js" + c))
            i = j + 1; prev = c; continue
        if c == "`":
            j = skip_tpl(code, i + 1)
            if CJK.search(code[i + 1:j]): segs.append((i + 1, j, "js`"))
            i = j + 1; prev = c; continue
        if c == "/" and (prev == "" or prev in "(,=:[!&|?{};+-*%<>~^"):
            j = i + 1; incls = False
            while j < n:
                if code[j] == "\\": j += 2; continue
                if code[j] == "[": incls = True
                elif code[j] == "]": incls = False
                elif code[j] == "/" and not incls: break
                elif code[j] == "\n": break
                j += 1
            if CJK.search(code[i:j]): warns.append("正则含中文：" + code[i:j + 1][:60])
            i = j + 1; prev = "x"; continue
        if not c.isspace():
            prev = c
            if CJK.search(c): warns.append("代码中直接出现中文：" + code[max(0, i - 20):i + 20].replace("\n", " "))
        i += 1
    return segs, warns, comments


def line_ctx(src, a):
    s = src.rfind("\n", 0, a) + 1; e = src.find("\n", a); e = len(src) if e < 0 else e
    return src[s:e].strip()[:220]


# ---------------- 提取 ----------------
class Seg:
    def __init__(s, a, b, kind, desc, delim=None, ctx=None):
        s.a = a; s.b = b; s.kind = kind; s.desc = desc; s.delim = delim; s.ctx = ctx


def collect(src):
    root, hcomments = parse(src)
    segs = []; warns = []; comments = list(hcomments)
    srcm = src
    for a, b, t in hcomments: srcm = srcm[:a] + " " * (b - a) + srcm[b:]
    def has_cjk(_s, a, b): return bool(CJK.search(srcm[a:b]))

    def attr_segs(el):
        for m in ATTR.finditer(el.attrs_src):
            v = m.group(2) if m.group(2) is not None else m.group(3)
            vs = el.attrs_off + (m.start(2) if m.group(2) is not None else m.start(3))
            if CJK.search(v):
                segs.append(Seg(vs, vs + len(v), "attr", "attr:" + m.group(1) + "@" + el.name))

    def desc(el):
        m = re.search(r'class="([^"\s]+)', el.attrs_src)
        return el.name + ("." + m.group(1) if m else "")

    def visit(el):
        if el.name in ("script", "style"):
            attr_segs(el)
            code = src[el.cs:el.ce]
            if el.name == "style":
                if CJK.search(code): warns.append("style 中有中文：" + code[:80])
                return
            if re.search(r'\bsrc\s*=', el.attrs_src): return
            ss, ws, cm = scan_js(code)
            for a, b, d in ss:
                segs.append(Seg(el.cs + a, el.cs + b, "js", "js", delim=d[2:] or None, ctx=line_ctx(src, el.cs + a)))
            warns.extend(ws)
            for a, b, t in cm: comments.append((el.cs + a, el.cs + b, t))
            return
        attr_segs(el)
        if el.name != "#root" and has_cjk(src, el.cs, el.ce) and inline_only(el) and el.cs < el.ce:
            kind = "svgtext" if el.name in ("text", "tspan") or el.parent and el.parent.name == "text" else "html"
            segs.append(Seg(el.cs, el.ce, kind, desc(el)))
            return
        # 混合内容：文本节点 + 子元素
        pos = el.cs
        kids = sorted(el.children, key=lambda k: k.ts)
        for k in kids + [None]:
            end = k.ts if k else el.ce
            if end > pos and has_cjk(src, pos, end):
                # 去掉其中的注释片段（已单独处理）
                segs.append(Seg(pos, end, "html", "text-in-" + desc(el)))
            if k:
                visit(k); pos = k.end

    visit(root)
    segs.sort(key=lambda s: s.a)
    return src, segs, warns, comments


def trim_bounds(text):
    a = len(text) - len(text.lstrip()); b = len(text.rstrip())
    return a, b


def extract(nn):
    f = find_ch(nn)
    src = open(f, encoding="utf-8").read()
    src, segs, warns, comments = collect(src)
    # 注释区间内的中文不算
    out = []; ids = {}; n = 0; mapping = []
    for s in segs:
        raw = src[s.a:s.b]
        a, b = trim_bounds(raw)
        text = raw[a:b]
        if not text: continue
        dedupe = s.kind == "js" or len(text) <= 12
        key = (s.kind, text) if dedupe else None
        if key is not None and key in ids:
            mapping.append((s, ids[key], a, b)); continue
        n += 1
        if key is not None: ids[key] = n
        mapping.append((s, n, a, b))
        c = ""
        if s.ctx and s.ctx != getattr(extract, "_last", None): c = "# " + s.ctx[:130] + "\n"
        if s.ctx: extract._last = s.ctx
        out.append("@@%d %s\n%s%s\n" % (n, s.desc, c, text))
    open("%s/ch%s.zh.txt" % (WORK, nn), "w", encoding="utf-8").write("\n".join(out))
    json.dump([(s.a + a, s.a + b, i, s.kind, s.delim) for s, i, a, b in mapping], open("%s/ch%s.map.json" % (WORK, nn), "w"))
    # 覆盖检查
    covered = [(s.a, s.b) for s in segs] + [(a, b) for a, b, t in comments]
    miss = []
    for m in CJK.finditer(src):
        p = m.start()
        if not any(a <= p < b for a, b in covered): miss.append(p)
    print("片段 %d（唯一 %d），文件 %s，字符数 %d" % (len(mapping), n, os.path.basename(f), len(src)))
    for w in warns: print("警告：", w)
    if miss: print("未覆盖的中文字符：", len(miss), [src[p - 15:p + 15] for p in miss[:5]])


def find_ch(nn):
    g = glob.glob("%s/ch%s-*.html" % (REPO, nn))
    if not g: raise SystemExit("找不到 ch" + nn)
    return g[0].replace("\\", "/")


def read_en(nn):
    d = {}; cur = None; buf = []
    files = sorted(glob.glob("%s/ch%s.en*.txt" % (WORK, nn)))
    if not files: raise SystemExit("没有英文文件")
    for fn in files:
        for line in open(fn, encoding="utf-8").read().split("\n"):
            m = re.match(r'@@(\d+)\b', line)
            if m:
                if cur is not None: d[cur] = "\n".join(buf).strip("\n")
                cur = int(m.group(1)); buf = []
            elif line.startswith("# ") and not buf and cur is not None:
                continue
            elif cur is not None:
                buf.append(line)
        if cur is not None: d[cur] = "\n".join(buf).strip("\n")
        cur = None; buf = []
    return d


AMP = re.compile(r'&(?!(?:[a-zA-Z]+|#\d+|#x[0-9a-fA-F]+);)')


def esc_js(t, delim):
    if delim == "`":
        t = re.sub(r'(?<!\\)`', r'\\`', t)
        return t
    out = []; i = 0
    while i < len(t):
        c = t[i]
        if c == "\\": out.append(t[i:i + 2]); i += 2; continue
        if c == delim: out.append("\\" + c)
        elif c == "\n": out.append("\\n")
        else: out.append(c)
        i += 1
    return "".join(out)


def autosp(src, a, b, t, q):
    """JS 字符串与变量拼接处，中文没有空格而英文需要：按上下文自动补一个空格。"""
    left = src[:a]; right = src[b:]
    if right.startswith(q + "]") or re.match(re.escape(q) + r"\s*\]", right): return t   # 作为下标/键的拼接，不动
    if left.endswith(q) and re.search(r'[A-Za-z0-9_)\]]\s*\+\s*' + re.escape(q) + r'$', left):
        if t and t[0] not in ' ).,;:%]\'"!?”’—' and not (len(t) <= 2 and t.isalpha()) and not t.startswith("<"):
            t = " " + t
    m = re.match(re.escape(q) + r'\s*\+\s*([A-Za-z_$(\[])', right)
    if m and t and t[-1] not in " ([{“‘\"'\\" and not t.endswith(("<", "&")):
        if re.search(r'[A-Za-z:;,)”’.!?%]$', t) and not (len(t) <= 2):
            t = t + " "
    return t


def apply(nn):
    f = find_ch(nn)
    src = open(f, encoding="utf-8").read()
    _, segs, warns, comments = collect(src)
    mp = json.load(open("%s/ch%s.map.json" % (WORK, nn)))
    en = read_en(nn)
    missing = sorted({i for _, _, i, _, _ in mp if i not in en or not en[i].strip()})
    if missing:
        print("缺少译文 id：", missing[:40], "共", len(missing)); sys.exit(1)
    edits = []
    # 与 collect 对齐：用 extract 时存的 map
    for a, b, i, kind, delim in mp:
        t = en[i].replace('　', ' ')
        if kind == "js":
            t = esc_js(t, delim)
            if delim in ('"', "'") and os.environ.get("NOAUTOSP") is None:
                t = autosp(src, a, b, t, delim)
        else:
            t = AMP.sub("&amp;", t)
            if kind == "attr":
                t = re.sub(r'(?<!&)"', "&quot;", t) if True else t
        edits.append((a, b, t))
    cm = {}
    cmf = "%s/ch%s.cm.txt" % (WORK, nn)
    if os.path.exists(cmf):
        for m in re.finditer(r'(?m)^@@(\d+)\n(.*?)(?=^@@\d+\n|\Z)', open(cmf, encoding='utf-8').read(), re.S):
            cm[int(m.group(1))] = m.group(2).rstrip('\n')
    for ci, (a, b, t) in enumerate(sorted(comments)):
        edits.append((a, b, cm.get(ci, "")))
    edits.sort(key=lambda e: e[0], reverse=True)
    out = src
    for a, b, t in edits: out = out[:a] + t + out[b:]
    fx = "%s/ch%s.fix.txt" % (WORK, nn)
    if os.path.exists(fx):
        for blk in re.findall(r'<<<\n(.*?)\n===\n(.*?)\n>>>', open(fx, encoding="utf-8").read(), re.S):
            if out.count(blk[0]) != 1:
                print("fix 匹配次数 %d：%r" % (out.count(blk[0]), blk[0][:60])); sys.exit(1)
            out = out.replace(blk[0], blk[1])
    out = post(out, nn, src)
    dst = REPO + "/en/" + os.path.basename(f)
    os.makedirs(REPO + "/en", exist_ok=True)
    open(dst, "w", encoding="utf-8", newline="\n").write(out)
    print("写出", dst, len(out))


def post(out, nn, src):
    out = out.replace('　', ' ')
    out = re.sub(r'/\*(?:(?!\*/).)*?[㐀-鿿＀-￯](?:(?!\*/).)*?\*/', '', out, flags=re.S)
    out = out.replace('<html lang="zh-CN">', '<html lang="en">')
    out = out.replace('href="css/', 'href="../css/').replace('src="js/', 'src="../js/').replace("src='js/", "src='../js/")
    packs = re.findall(r'<script src="js/(illus[\w-]*\.js)"></script>\s*', src)
    out = re.sub(r'<script src="\.\./js/illus[\w-]*\.js"></script>\s*', "", out)
    tags = ['<script src="../js/illus.js"></script>']
    for p in packs:
        if p != "illus.js": tags.append('<script src="../js/%s"></script>' % p)
    tags.append('<script src="../js/en/illus.js"></script>')
    tags.append('<script src="../js/en/illus-lib.js"></script>')
    for p in packs:
        if p != "illus.js": tags.append('<script src="../js/en/%s"></script>' % p)
    out = out.replace('<script src="../js/common.js"></script>', "\n".join(tags) + '\n<script src="../js/common.js"></script>', 1)
    out = re.sub(r'\n{3,}', "\n\n", out)
    return out


# ---------------- 检查 ----------------
def skeleton(src):
    root, _ = parse(src)
    res = []
    for el in all_els(root):
        if el.name in ('tspan', 'i', 'em'): continue
        if el.name == 'script' and 'illus' in el.attrs_src: continue
        attrs = {}
        for m in ATTR.finditer(el.attrs_src):
            attrs[m.group(1)] = m.group(2) if m.group(2) is not None else m.group(3)
        res.append((el.name, attrs))
    return res


def check(nn):
    f = find_ch(nn)
    zh = open(f, encoding="utf-8").read()
    ep = REPO + "/en/" + os.path.basename(f)
    en = open(ep, encoding="utf-8").read()
    ok = True
    a, b = skeleton(zh), skeleton(en)
    if len(a) != len(b):
        print("标签数不同：zh", len(a), "en", len(b)); ok = False
        # 定位第一个分歧
        import difflib
        sm = difflib.SequenceMatcher(None, [x[0] for x in a], [y[0] for y in b], autojunk=False)
        for tag, i1, i2, j1, j2 in sm.get_opcodes():
            if tag != "equal":
                print("  ", tag, "zh", [(x[0], x[1].get("class") or x[1].get("id")) for x in a[i1:i2]][:6], "en", [(y[0], y[1].get("class") or y[1].get("id")) for y in b[j1:j2]][:6], "@", i1)
    else:
        bad = 0
        for i, (x, y) in enumerate(zip(a, b)):
            if x[0] != y[0] or set(x[1]) != set(y[1]):
                print("  标签/属性名不同 #%d" % i, x, y); bad += 1; ok = False
                if bad > 5: break
                continue
            for k, v in x[1].items():
                if CJK.search(v): continue
                v2 = y[1][k]
                if k in ("href", "src") and v2 == "../" + v: continue
                if k == "lang" or k in ("viewBox", "x", "y", "dy", "font-size", "width", "height", "transform", "style"): continue
                if v != v2:
                    print("  属性值不同 #%d %s.%s: %r vs %r" % (i, x[0], k, v[:50], v2[:50])); bad += 1; ok = False
    # 脚本
    root, _ = parse(en)
    js_ok = True
    for el in all_els(root):
        if el.name == "script" and "src=" not in el.attrs_src:
            code = en[el.cs:el.ce]
            r = subprocess.run(["node", "-e", "new Function(require('fs').readFileSync(0,'utf8'))"], input=code.encode("utf-8"), capture_output=True)
            if r.returncode != 0:
                print("脚本语法错误：", r.stderr.decode("utf-8", "replace")[:400]); js_ok = False
    ok &= js_ok
    left = [en[m.start() - 12:m.start() + 12].replace("\n", " ") for m in CJK.finditer(en)]
    if left:
        print("残留中文 %d 处：" % len(left), left[:6]); ok = False
    # 计数对照
    for nm, pat in [("sec", r'class="sec"'), ("term", r'class="term"'), ("eg", r'class="eg\b'), ("data-illus", r'data-illus='), ("id", r'\sid="')]:
        c1, c2 = len(re.findall(pat, zh)), len(re.findall(pat, en))
        if c1 != c2: print("计数不同", nm, c1, c2); ok = False
    q1 = len(re.findall(r'\bq:\s*["\'`]', zh)); q2 = len(re.findall(r'\bq:\s*["\'`]', en))
    if q1 != q2: print("题目数不同", q1, q2); ok = False
    print("OK" if ok else "有问题", "ch" + nn, "terms", len(re.findall(r'class="term"', en)), "quiz", q2)


def comments_cmd(nn):
    f = find_ch(nn)
    src = open(f, encoding="utf-8").read()
    _, segs, warns, comments = collect(src)
    for ci, (a, b, t) in enumerate(sorted(comments)):
        print("@@%d %s\n%s\n" % (ci, t, src[a:b]))


if __name__ == "__main__":
    cmd, nn = sys.argv[1], sys.argv[2].zfill(2)
    {"extract": extract, "apply": apply, "check": check, "comments": comments_cmd}[cmd](nn)
