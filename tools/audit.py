"""按 CLAUDE.md 的"单页验收清单"对每章做静态体检（数 svg/例子/术语/互动/分节等）。
import io, sys as _s
_s.stdout = io.TextIOWrapper(_s.stdout.buffer, encoding="utf-8")
用法：python tools/audit.py <课程文件夹>"""
import re, sys, os
root = sys.argv[1]
rows = []
for f in sorted(os.listdir(root)):
    m = re.match(r'ch(\d+)-.*\.html$', f)
    if not m: continue
    s = open(os.path.join(root, f), encoding='utf-8').read()
    main = s.split('</main>')[0]
    body = re.sub(r'<script.*?</script>', '', main, flags=re.S)
    q = lambda p: len(re.findall(p, body))
    svgs = q(r'<svg\b') - q(r'<svg[^>]*aria-hidden')            # 不算 hero 装饰图
    eg = q(r'class="[^"]*\beg\b'); bad = q(r'class="[^"]*\beg bad\b|class="eg bad')
    terms = q(r'class="term"')
    secs = q(r'class="sec"')
    why = q(r'class="why-box"'); story = q(r'class="story"') + q(r'class="timeline"')
    origin = 'tag origin' in body or 'class="paper"' in body or len(re.findall(r'(1[6-9]\d\d|20[0-2]\d)\s*年', body)) >= 3  # 硬核版不加 tag：有文献卡或多处年份即算有发明故事
    inter = 0
    inter += len(re.findall(r'<input[^>]*type="range"', body))
    inter += len(re.findall(r'<canvas', body))
    btn = q(r'<button'); chips = q(r'class="chip')
    quiz_items = len(re.findall(r'\bq:\s*["\']', s))
    goals = 'class="goals"' in body; misc = 'class="misc"' in body; reflect = 'class="reflect"' in body; tldr = 'class="tldr"' in body; key = 'class="key"' in body
    xref = len(re.findall(r'第\s*\d+\s*[章关]', body))  # 硬核版回指写"第 N 关"
    gaps = []
    if svgs < 3: gaps.append(f'图{svgs}<3')
    if eg < 3: gaps.append(f'例{eg}<3')
    if bad < 1: gaps.append('无反例')
    if terms < 6: gaps.append(f'术语{terms}<6')
    if not origin: gaps.append('无发明故事')
    if why < 1: gaps.append('无why-box')
    if quiz_items < 4: gaps.append(f'练习{quiz_items}<4')
    if xref < 2: gaps.append(f'互引{xref}<2')
    for n, ok in [('goals', goals), ('misc', misc), ('reflect', reflect), ('tldr', tldr), ('key', key)]:
        if not ok: gaps.append('缺' + n)
    rows.append((int(m.group(1)), f, svgs, eg, bad, terms, secs, why, story, quiz_items, xref, inter, btn, gaps))
print(f'{"章":>3} {"文件":<34}{"图":>3}{"例":>3}{"反":>3}{"术":>3}{"节":>3}{"why":>4}{"故事":>5}{"题":>3}{"引":>3}{"滑块/画布":>9}{"按钮":>5}  缺口')
for r in rows:
    print(f'{r[0]:>3} {r[1]:<34}{r[2]:>3}{r[3]:>3}{r[4]:>3}{r[5]:>3}{r[6]:>3}{r[7]:>4}{r[8]:>5}{r[9]:>3}{r[10]:>3}{r[11]:>9}{r[12]:>5}  {"; ".join(r[13]) or "✓"}')
ok = sum(1 for r in rows if not r[13])
print(f'\n达标 {ok}/{len(rows)} 章')
