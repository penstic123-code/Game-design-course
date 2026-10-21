# python gal.py NN  -> work/gal-NN.html + shots/gal-NN-k.png 切片
import sys, subprocess, os, re
nn = sys.argv[1].zfill(2)
R = "file:///C:/Users/彭诗迪/Desktop/game-design-course-web"
HERE = os.path.dirname(os.path.abspath(__file__)).replace("\\", "/")
pack = "" if nn == "00" else '<script src="%s/js/illus-ch%s.js"></script>' % (R, nn)
html = '''<!doctype html><html lang="en"><head><meta charset="utf-8"><link rel="stylesheet" href="%s/css/style.css">
<style>body{padding:10px;width:1320px;background:#fff}.g{display:grid;grid-template-columns:repeat(3,420px);gap:10px}.c{border:2px solid #ccc;padding:4px}.c svg{width:100%%;height:auto;display:block}.n{font:12px monospace;color:#1d4ed8}</style></head><body><div class="g" id="g"></div>
<script src="%s/js/illus.js"></script><script>window.__base=new Set(Object.keys(window.ILLUS));</script>%s
<script src="%s/js/en/illus.js"></script><script src="%s/js/en/illus-lib.js"></script><script src="%s/js/en/illus-ch%s.js"></script>
<script>
const only = "%s"==="00" ? null : null;
const names = Object.keys(window.ILLUS).filter(n=>%s||!window.__base.has(n));
document.getElementById("g").innerHTML = names.map(n=>'<div class="c"><div class="n">'+n+'</div>'+window.illusSvg(n)+'</div>').join("");
</script></body></html>''' % (R, R, pack, R, R, R, nn, nn, 'true' if nn == '00' else 'false')
if nn == "00": html = html.replace('<script src="%s/js/en/illus-ch00.js"></script>' % R, "")
html = html.replace('<script src="%s/js/illus.js"></script>' % R, '<script src="%s/js/illus.js"></script>' % R)
out = HERE + "/work/gal-%s.html" % nn
open(out, "w", encoding="utf-8").write(html)
png = HERE + "/shots/gal-%s.png" % nn
subprocess.run(["node", "C:/Users/彭诗迪/Desktop/game-design-course-web/tools/shot.mjs", out, png, "page", "1340", "1500"], capture_output=True)
from PIL import Image
im = Image.open(png); h = im.height; k = 0
if nn != "00":
    pass
step = 1000
for y in range(0, h, step):
    im.crop((0, y, im.width, min(h, y + step))).save(HERE + "/shots/gal-%s-%d.png" % (nn, k)); k += 1
print(k, "slices", im.size)
