"""从课程各章的 <span class="term" data-def="..."> 汇总出 js/glossary-data.js（供术语表与闪卡使用）。
用法：python tools/build_glossary.py <课程文件夹>   （课程完成或章节更新后重新运行）"""
import re, sys, os, html, json
root = sys.argv[1]
terms = {}
for f in sorted(os.listdir(root)):
    m = re.match(r'ch(\d+)-.*\.html$', f)
    if not m: continue
    ch = int(m.group(1))
    s = open(os.path.join(root, f), encoding='utf-8').read()
    for sp in re.finditer(r'<span\s+class="term"[^>]*?data-def="([^"]*)"[^>]*>(.*?)</span>', s, re.S):
        d = html.unescape(sp.group(1)).strip()
        t = html.unescape(re.sub(r'<[^>]+>', '', sp.group(2))).strip()
        if not t or not d: continue
        e = terms.setdefault(t, {"t": t, "d": d, "ch": ch, "chs": []})
        if ch not in e["chs"]: e["chs"].append(ch)
        if len(d) > len(e["d"]): e["d"] = d
out = sorted(terms.values(), key=lambda e: (e["ch"], e["t"]))
open(os.path.join(root, 'js', 'glossary-data.js'), 'w', encoding='utf-8').write(
    '/* 由 tools/build_glossary.py 自动生成，请勿手改 */\nwindow.GLOSSARY = ' + json.dumps(out, ensure_ascii=False, indent=0) + ';\n')
print(len(out), "terms")
