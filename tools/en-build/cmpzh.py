import re, glob, os
R = "C:/Users/彭诗迪/Desktop/game-design-course-web"
bad = 0
for f in sorted(glob.glob(R + "/ch*.html")):
    b = os.path.basename(f)
    z = open(f, encoding="utf-8").read()
    e = open(R + "/en/" + b, encoding="utf-8").read()
    def ids(s): return sorted(re.findall(r'\bid="([^"]+)"', s))
    def ds(s): return sorted(re.findall(r'data-save="([^"]+)"', s))
    def cnt(s, pat): return len(re.findall(pat, s))
    res = []
    if ids(z) != ids(e):
        res.append("ids zh-only=%s en-only=%s" % (sorted(set(ids(z)) - set(ids(e)))[:5], sorted(set(ids(e)) - set(ids(z)))[:5]))
    if ds(z) != ds(e): res.append("data-save differ")
    for name, pat in (("sec", r'class="sec"'), ("term", r'class="term"'), ("illus", r'data-illus="'), ("q:", r'\{ q: '), ("svg", r'<svg'), ("button", r'<button'), ("input", r'<input'), ("canvas", r'<canvas'), ("data-ch", r'data-ch="')):
        a, c = cnt(z, pat), cnt(e, pat)
        if a != c: res.append("%s zh %d en %d" % (name, a, c))
    m1 = re.search(r'data-ch="(\d+)"', z); m2 = re.search(r'data-ch="(\d+)"', e)
    if (m1 and m1.group(1)) != (m2 and m2.group(1)): res.append("data-ch differ")
    if '<html lang="en">' not in e: res.append("lang")
    if res:
        bad += 1
        print(b, "; ".join(res))
print("chapters with differences:", bad)
