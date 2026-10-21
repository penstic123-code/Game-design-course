/* English layer for the stick-figure illustrations.
   The shapes come from the Chinese packs (js/illus.js, js/illus-chNN.js). Those packs are not changed.
   Here we wrap window.illusSvg so that, for a given illustration name, the alt text and every <text> node
   that contains Chinese is replaced by English from window.ILLUS_EN (filled by js/en/illus-lib.js and js/en/illus-chNN.js).

   ILLUS_EN[name] = { a: "alt text", t: ["text for 1st Chinese <text>", "text for 2nd", ...] }

   Text entries may start with a directive block, e.g. "{s=.8,y=-3,x=2}Hello":
     s  = font-size multiplier   y / x = shift in SVG units   lh = line height multiplier (default 1.12)
   A "|" splits a text into several lines. Without a directive, the font size is shrunk automatically
   (down to 62%) when the English would be wider than the Chinese it replaces. */
(function () {
  const EN = (window.ILLUS_EN = window.ILLUS_EN || {});
  window.ILLUS_EN_ADD = o => Object.assign(EN, o);
  const orig = window.illusSvg;
  if (!orig) return;
  const CJK = /[㐀-鿿＀-￯　-〿]/;
  const isWide = ch => CJK.test(ch) || ch.codePointAt(0) > 0x2e00;           // CJK, fullwidth and emoji count as 1em
  const wZh = s => { let w = 0; for (const ch of s) w += isWide(ch) ? 1 : 0.55; return w; };
  const wEn = s => { let w = 0; for (const ch of s) w += isWide(ch) ? 1 : (/[A-Z]/.test(ch) ? 0.62 : /[ilIjtf.,:;!'’|1]/.test(ch) ? 0.3 : 0.52); return w; };
  const num = (attrs, k, d) => { const m = new RegExp("\\b" + k + '="([-\\d.]+)"').exec(attrs); return m ? parseFloat(m[1]) : d; };
  const f1 = n => Math.round(n * 10) / 10;
  const esc = s => s.replace(/&(?!(?:[a-zA-Z]+|#\d+);)/g, "&amp;");

  function fit(attrs, zh, t) {
    let dir = {}, lines;
    const m = /^\{([^}]*)\}/.exec(t);
    if (m) { m[1].split(",").forEach(p => { const kv = p.split("="); dir[kv[0].trim()] = parseFloat(kv[1]); }); t = t.slice(m[0].length); }
    lines = t.split("|");
    const size = num(attrs, "font-size", 16), x = num(attrs, "x", 0), y = num(attrs, "y", 0);
    let k = dir.s;
    if (k === undefined) {
      const budget = Math.max(wZh(zh), 2.2) * 1.12;
      const widest = Math.max.apply(null, lines.map(wEn));
      k = widest > budget ? Math.max(0.62, budget / widest) : 1;
    }
    const fs = f1(size * k), lh = fs * (dir.lh || 1.12);
    let a = attrs.replace(/font-size="[^"]*"/, "").replace(/\sx="[^"]*"/, "").replace(/\sy="[^"]*"/, "");
    a += ' font-size="' + fs + '"';
    const xx = f1(x + (dir.x || 0));
    if (lines.length === 1) return "<text" + a + ' x="' + xx + '" y="' + f1(y + (dir.y || 0)) + '">' + esc(lines[0]) + "</text>";
    const first = y + (dir.y !== undefined ? dir.y : -(lines.length - 1) * lh / 2);
    return "<text" + a + ' x="' + xx + '" y="' + f1(first) + '">' + lines.map((l, i) => '<tspan x="' + xx + '" dy="' + (i ? f1(lh) : 0) + '">' + esc(l) + "</tspan>").join("") + "</text>";
  }

  window.illusSvg = function (name) {
    const svg = orig(name), tr = EN[name];
    if (!svg || !tr) return svg;
    let k = 0;
    let out = svg.replace(/<text\b([^>]*)>([\s\S]*?)<\/text>/g, (mm, attrs, inner) => {
      if (!CJK.test(inner)) return mm;
      const t = tr.t && tr.t[k++];
      return t == null ? mm : fit(attrs, inner.replace(/<[^>]+>/g, ""), t);
    });
    if (tr.a) out = out.replace(/aria-label="[^"]*"/, 'aria-label="' + tr.a.replace(/"/g, "&quot;") + '"');
    return out;
  };
})();
