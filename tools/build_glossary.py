"""从课程各章的 <span class="term" data-def="..."> 汇总出 js/glossary-data.js（供术语表与闪卡使用）。
英文：同时读取 <课程文件夹>/en/chNN-*.html，按出现顺序与中文版逐个配对，写入 te（英文术语）和 de（英文释义）。
用法：python tools/build_glossary.py <课程文件夹>   （课程完成或章节更新后重新运行）"""
import re, sys, os, html, json
root = sys.argv[1]
terms = {}
SPAN = re.compile(r'<span\s+class="term"[^>]*?data-def="([^"]*)"[^>]*>(.*?)</span>', re.S)
def spans(path):
    s = open(path, encoding='utf-8').read()
    res = []
    for sp in SPAN.finditer(s):
        d = html.unescape(sp.group(1)).strip()
        t = html.unescape(re.sub(r'<[^>]+>', '', sp.group(2))).strip()
        res.append((t, d))
    return res
for f in sorted(os.listdir(root)):
    m = re.match(r'ch(\d+)-.*\.html$', f)
    if not m: continue
    ch = int(m.group(1))
    zs = spans(os.path.join(root, f))
    ep = os.path.join(root, 'en', f)
    es = spans(ep) if os.path.exists(ep) else []
    if es and len(es) != len(zs): print("WARN ch%d: zh %d terms, en %d terms" % (ch, len(zs), len(es)))
    for k, (t, d) in enumerate(zs):
        if not t or not d: continue
        te, de = es[k] if k < len(es) and len(es) == len(zs) else ("", "")
        e = terms.setdefault(t, {"t": t, "d": d, "ch": ch, "chs": [], "te": te, "de": de})
        if ch not in e["chs"]: e["chs"].append(ch)
        if len(d) > len(e["d"]): e["d"] = d; e["de"] = de or e["de"]
        if not e["te"] and te: e["te"] = te; e["de"] = e["de"] or de
out = sorted(terms.values(), key=lambda e: (e["ch"], e["t"]))
open(os.path.join(root, 'js', 'glossary-data.js'), 'w', encoding='utf-8').write(
    '/* 由 tools/build_glossary.py 自动生成，请勿手改 */\nwindow.GLOSSARY = ' + json.dumps(out, ensure_ascii=False, indent=0) + ';\n')
print(len(out), "terms")
