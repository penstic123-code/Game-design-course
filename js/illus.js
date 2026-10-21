/* 手绘插图库（火柴人风格）：<span data-illus="名字"></span> 会被 common.js 替换成对应的内联 SVG（viewBox 200×140）。
   人物统一用 person()：圆脑袋 + 黑线躯干四肢 + 两点眼睛 + 弧线嘴。一张图只用一次，同一个主题要换不同构图。
   新增插图请追加到 ILLUS，不要改现有名字。 */
(function () {
  const INK = "#2b2b3a", SK = "#fffbea";
  const f = n => (Math.round(n * 10) / 10);

  /* ---------- 火柴人 ----------
     x,y 为头部中心；s 比例；arms/legs 为姿势名；face 为表情；附件：hat、glasses、beard、tie、cape、hair */
  const ARMS = {
    stand: [[[-12, 8], [-15, 21]], [[12, 8], [15, 21]]],
    none: [],
    up: [[[-12, -4], [-17, -19]], [[12, -4], [17, -19]]],
    cover: [[[-14, -2], [-4, -16]], [[14, -2], [4, -16]]],
    point: [[[-12, 8], [-15, 21]], [[14, 0], [31, -5]]],
    hold: [[[-9, 10], [8, 12]], [[9, 10], [24, 10]]],
    wave: [[[-12, 8], [-15, 21]], [[13, -2], [19, -17]]],
    chin: [[[-12, 8], [-15, 21]], [[10, 6], [3, -7]]],
    throw: [[[-12, 8], [-15, 21]], [[12, -6], [28, -20]]],
    club: [[[-3, 10], [6, 21]], [[4, 10], [12, 19]]],
    desk: [[[-8, 12], [14, 24]], [[8, 12], [26, 24]]],
  };
  const LEGS = {
    stand: [[[-8, 27]], [[8, 27]]],
    run: [[[-13, 12], [-21, 25]], [[11, 11], [9, 27]]],
    walk: [[[-6, 13], [-10, 27]], [[8, 13], [14, 24]]],
    sit: [[[17, 1], [17, 22]], [[12, 6], [12, 26]]],
    wide: [[[-15, 27]], [[15, 27]]],
    none: [],
  };
  /* 服装：同一幅图里第 k 个火柴人自动配不同的帽子/发型/眼镜，方便区分人物（不再画上衣色块）。
     已显式指定 hat/hair/glasses/beard/cape/tie 的人保持原样（只补上衣颜色）；传 outfit:false 可关闭。 */
  const STYLES = [
    {},
    { hat: "cap" },
    { hair: true },
    { hat: "beanie" },
    { hat: "tophat" },
  ];
  let personK = 0;
  function person(x, y, o) {
    o = Object.assign({}, o || {});
    if (o.outfit !== false) {
      const st = STYLES[personK % STYLES.length]; personK++;
      const marked = o.hat || o.hair || o.glasses || o.beard || o.cape || o.tie;
      if (!marked) ["hat", "hair", "glasses"].forEach(k => { if (st[k] !== undefined) o[k] = st[k]; });
    }
    const s = o.s || 1, hr = 11 * s, look = (o.look || 0) * 2 * s;
    const sy = y + hr + 4 * s, hip = y + hr + 26 * s;
    const fl = (o.flip !== undefined ? o.flip : (o.look || 0) < 0) ? -1 : 1;
    const poly = (ox, oy, pts) => "M" + f(ox) + " " + f(oy) + pts.map(p => " L" + f(ox + p[0] * s * fl) + " " + f(oy + p[1] * s)).join("");
    let g = '<g fill="none">';
    if (o.shirt) g += '<path fill="' + o.shirt + '" stroke-width="2.2" stroke-linejoin="round" d="M' + f(x - 8 * s) + " " + f(sy - 1 * s) + " L" + f(x + 8 * s) + " " + f(sy - 1 * s) + " L" + f(x + 7 * s) + " " + f(sy + 16 * s) + " L" + f(x - 7 * s) + " " + f(sy + 16 * s) + ' Z"/>';
    if (o.legs === "sit" && o.chair !== false) {   // 坐姿自带一把椅子（座面、靠背、椅腿），避免人悬在半空
      const seat = hip + 3 * s, back = x - 13 * s * fl, front = x + 9 * s * fl;
      g += '<path stroke-width="3" d="M' + f(front) + " " + f(seat) + " H" + f(back) + " V" + f(seat - 24 * s) + '"/>';
      if (seat < 120) g += '<path stroke-width="3" d="M' + f(back + 2 * s * fl) + " " + f(seat) + " V126 M" + f(front - 2 * s * fl) + " " + f(seat) + ' V126"/>';
    }
    g += '<path d="M' + f(x) + " " + f(y + hr) + " L" + f(x) + " " + f(hip) + '"/>';
    (ARMS[o.arms || "stand"] || []).forEach(a => (g += '<path d="' + poly(x, sy, a) + '"/>'));
    (LEGS[o.legs || "stand"] || []).forEach(l => (g += '<path d="' + poly(x, hip, l) + '"/>'));
    g += "</g>";
    if (o.cape) g += '<path fill="#e5484d" stroke-width="2.5" d="M' + f(x - 2 * s) + " " + f(sy) + " q" + f(-18 * s) + " " + f(16 * s) + " " + f(-12 * s) + " " + f(40 * s) + " l" + f(18 * s) + " " + f(-6 * s) + 'z"/>';
    g += '<circle cx="' + f(x) + '" cy="' + f(y) + '" r="' + f(hr) + '" fill="' + (o.skin || SK) + '"/>';
    const ex = 4 * s, ey = y - 2 * s, fc = o.face || "smile";
    if (fc === "closed") g += '<path fill="none" stroke-width="2.4" d="M' + f(x - ex - 2 * s + look) + " " + f(ey) + " h" + f(4 * s) + " M" + f(x + ex - 2 * s + look) + " " + f(ey) + " h" + f(4 * s) + '"/>';
    else { const r = (fc === "shout" || fc === "wide" ? 2.4 : 1.8) * s; g += '<circle cx="' + f(x - ex + look) + '" cy="' + f(ey) + '" r="' + f(r) + '" fill="' + INK + '" stroke="none"/><circle cx="' + f(x + ex + look) + '" cy="' + f(ey) + '" r="' + f(r) + '" fill="' + INK + '" stroke="none"/>'; }
    const mx = x + look, my = y + 4.5 * s;
    if (fc === "smile") g += '<path fill="none" stroke-width="2.4" d="M' + f(mx - 4 * s) + " " + f(my) + " q" + f(4 * s) + " " + f(4.5 * s) + " " + f(8 * s) + ' 0"/>';
    else if (fc === "grin") g += '<path fill="#fff" stroke-width="2.2" d="M' + f(mx - 5 * s) + " " + f(my) + " q" + f(5 * s) + " " + f(7 * s) + " " + f(10 * s) + ' 0z"/>';
    else if (fc === "sad") g += '<path fill="none" stroke-width="2.4" d="M' + f(mx - 4 * s) + " " + f(my + 3 * s) + " q" + f(4 * s) + " " + f(-4.5 * s) + " " + f(8 * s) + ' 0"/>';
    else if (fc === "flat") g += '<path fill="none" stroke-width="2.4" d="M' + f(mx - 3.5 * s) + " " + f(my + 1.5 * s) + " h" + f(7 * s) + '"/>';
    else if (fc === "shout" || fc === "o" || fc === "wide") g += '<ellipse cx="' + f(mx) + '" cy="' + f(my + 2.5 * s) + '" rx="' + f(3 * s) + '" ry="' + f(fc === "shout" ? 4 * s : 3 * s) + '" fill="' + INK + '" stroke="none"/>';
    if (o.glasses) g += '<g fill="none" stroke-width="1.5"><circle cx="' + f(x - ex + look) + '" cy="' + f(ey) + '" r="' + f(3.6 * s) + '"/><circle cx="' + f(x + ex + look) + '" cy="' + f(ey) + '" r="' + f(3.6 * s) + '"/><path d="M' + f(x - ex + 4 * s + look) + " " + f(ey) + " h" + f(2 * s) + '"/></g>';
    if (o.beard) g += '<path fill="' + INK + '" stroke="none" d="M' + f(x - 9 * s) + " " + f(y + 7 * s) + " q" + f(9 * s) + " " + f(18 * s) + " " + f(18 * s) + ' 0 q' + f(-9 * s) + " " + f(-6 * s) + " " + f(-18 * s) + ' 0z"/>';
    if (o.hair) g += '<path fill="' + INK + '" stroke="none" d="M' + f(x - hr) + " " + f(y - 2 * s) + " q" + f(hr) + " " + f(-hr * 1.9) + " " + f(2 * hr) + ' 0 q' + f(-hr) + " " + f(-hr * 0.7) + " " + f(-2 * hr) + ' 0z"/>';
    if (o.hat === "cap") g += '<path fill="#ff8fab" d="M' + f(x - hr) + " " + f(y - 6 * s) + " q" + f(hr) + " " + f(-hr * 1.7) + " " + f(2 * hr) + ' 0z"/><path fill="none" d="M' + f(x) + " " + f(y - 6 * s) + " h" + f(hr + 8 * s) + '"/>';
    if (o.hat === "crown") g += '<path fill="#ffd34d" d="M' + f(x - 9 * s) + " " + f(y - 9 * s) + " l" + f(2 * s) + " " + f(-12 * s) + " l" + f(5 * s) + " " + f(7 * s) + " l" + f(2 * s) + " " + f(-10 * s) + " l" + f(2 * s) + " " + f(10 * s) + " l" + f(5 * s) + " " + f(-7 * s) + " l" + f(2 * s) + " " + f(12 * s) + 'z"/>';
    if (o.hat === "beanie") g += '<path fill="#5b8def" d="M' + f(x - hr) + " " + f(y - 6 * s) + " q" + f(hr) + " " + f(-hr * 1.7) + " " + f(2 * hr) + ' 0z"/><circle cx="' + f(x) + '" cy="' + f(y - 6 * s - hr * 0.85 - 3 * s) + '" r="' + f(3.2 * s) + '" fill="#fff" stroke-width="2"/><path fill="none" stroke-width="2" d="M' + f(x - hr) + " " + f(y - 6 * s) + " h" + f(2 * hr) + '"/>';
    if (o.hat === "tophat") g += '<path fill="#3b3f4f" stroke-width="2.4" d="M' + f(x - 7 * s) + " " + f(y - hr + 1 * s) + " V" + f(y - hr - 14 * s) + " H" + f(x + 7 * s) + " V" + f(y - hr + 1 * s) + ' Z"/><path fill="none" stroke-width="3" d="M' + f(x - 11 * s) + " " + f(y - hr + 1 * s) + " H" + f(x + 11 * s) + '"/>';
    if (o.hat === "wizard") g += '<path fill="#8f6cf5" d="M' + f(x - 11 * s) + " " + f(y - 7 * s) + " L" + f(x + 2 * s) + " " + f(y - 34 * s) + " L" + f(x + 11 * s) + " " + f(y - 7 * s) + 'z"/><path d="M' + f(x - 14 * s) + " " + f(y - 7 * s) + " h" + f(28 * s) + '"/>';
    if (o.tie) g += '<path fill="#ff6b6b" stroke-width="2" d="M' + f(x) + " " + f(y + hr + 1 * s) + " l" + f(-3 * s) + " " + f(6 * s) + " l" + f(3 * s) + " " + f(10 * s) + " l" + f(3 * s) + " " + f(-10 * s) + 'z"/>';
    return g;
  }

  const ILLUS = {};
  const add = (name, alt, body, extra) => { personK = 0; return (ILLUS[name] = { alt, body, extra: extra || "" }); };
  const ground = '<path d="M6 126 H194" stroke-dasharray="2 7" stroke-width="3"/>';
  const T = (x, y, size, txt, anchor) => '<text x="' + x + '" y="' + y + '" font-size="' + size + '"' + (anchor ? ' text-anchor="' + anchor + '"' : "") + ' fill="' + INK + '" stroke="none">' + txt + "</text>";
  const E = (x, y, size, txt) => '<text x="' + x + '" y="' + y + '" font-size="' + size + '" text-anchor="middle" stroke="none">' + txt + "</text>";
  const eye = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="1.8" fill="' + INK + '" stroke="none"/>';

  /* ---------- 第1章 ---------- */
  add("hideseek", "捉迷藏：一个人用手捂住眼睛数数，另一个人蹲在石头后面，只露出眼睛偷看", ground +
    person(40, 63, { arms: "none", face: "flat" }) +
    '<path d="M40 78 L25 71 L35 61 M40 78 L55 71 L45 61" fill="none"/>' +
    '<rect x="29" y="56" width="11" height="9" rx="4" fill="' + SK + '"/><rect x="40" y="56" width="11" height="9" rx="4" fill="' + SK + '"/>' +
    '<circle cx="142" cy="80" r="11" fill="' + SK + '"/>' + eye(136, 77) + eye(145, 77) + '<path d="M138 83 q4 2 8 0" fill="none" stroke-width="2.2"/>' +
    '<path d="M104 126 Q108 90 140 88 Q176 88 182 126 Z" fill="#cfd3dc"/>' +
    '<path d="M121 96 q1 -9 8 -8 M163 96 q-1 -9 -8 -8" fill="none" stroke-width="3"/>' +
    '<path d="M116 108 q4 -4 8 0 M150 112 q4 -4 8 0" fill="none" stroke-width="2.2"/>',
    T(14, 30, 16, "1……2……3……"));
  add("found", "捉迷藏被发现：一个人指着另一个人大喊“找到啦”", ground +
    person(46, 63, { arms: "point", face: "grin" }) + person(150, 63, { arms: "up", face: "shout", legs: "run" }) +
    '<path d="M168 98 l8 -8 M174 106 l12 -2" stroke-width="2.5"/>', T(30, 30, 17, "找到啦！"));
  add("tidy", "整理房间：火柴人把积木放进篮子，旁边有一颗星和一个钟", ground +
    person(50, 63, { arms: "hold", face: "grin" }) + '<rect x="80" y="70" width="12" height="12" fill="#ffb3c6"/>' +
    '<path d="M112 92 L118 126 H160 L166 92 Z" fill="#ffe58a"/><rect x="124" y="82" width="14" height="14" fill="#b6e8a8" transform="rotate(8 131 89)"/><rect x="143" y="86" width="12" height="12" fill="#a8dcf0" transform="rotate(-10 149 92)"/>' +
    '<rect x="16" y="108" width="14" height="14" fill="#a8dcf0" transform="rotate(-14 23 115)"/><rect x="36" y="112" width="11" height="11" fill="#b6e8a8" transform="rotate(12 41 117)"/>' +
    '<path d="M139 36 l5 11 12 1 -9 8 3 12 -11 -6 -11 6 3 -12 -9 -8 12 -1z" fill="#ffd34d" transform="translate(-4 -6)"/>' +
    '<circle cx="176" cy="34" r="16" fill="#fff"/><path d="M176 34 V23 M176 34 L184 38"/>');
  add("tetris", "俄罗斯方块：几行方块已经堆好，一个 T 形方块正在下落",
    '<rect x="60" y="8" width="80" height="124" fill="#fffdf3"/><g stroke-width="3">' +
    '<rect x="60" y="112" width="20" height="20" fill="#ffb3c6"/><rect x="80" y="112" width="20" height="20" fill="#ffb3c6"/><rect x="100" y="112" width="20" height="20" fill="#a8dcf0"/><rect x="120" y="112" width="20" height="20" fill="#a8dcf0"/>' +
    '<rect x="60" y="92" width="20" height="20" fill="#b6e8a8"/><rect x="80" y="92" width="20" height="20" fill="#ffe58a"/><rect x="120" y="92" width="20" height="20" fill="#d8c8ff"/>' +
    '<rect x="80" y="28" width="20" height="20" fill="#ffc078"/><rect x="100" y="28" width="20" height="20" fill="#ffc078"/><rect x="120" y="28" width="20" height="20" fill="#ffc078"/><rect x="100" y="48" width="20" height="20" fill="#ffc078"/></g>' +
    '<path d="M160 40 v22 M154 56 l6 8 6 -8" fill="none"/>');
  add("blocks", "随便玩积木：一个火柴人把积木搭成一座歪歪的塔", ground +
    person(76, 63, { arms: "hold", face: "smile" }) +
    '<rect x="108" y="98" width="38" height="28" fill="#ffb3c6"/><rect x="146" y="98" width="30" height="28" fill="#a8dcf0"/><rect x="118" y="70" width="36" height="28" fill="#ffe58a"/><rect x="124" y="44" width="34" height="26" fill="#b6e8a8" transform="rotate(10 141 57)"/>' +
    '<path d="M168 56 l8 -8 M170 70 h12" stroke-width="3"/>');
  add("homework", "被要求的作业：一个火柴人愁眉苦脸地对着一堆试卷", ground +
    '<path d="M30 100 H150 M42 100 V126 M138 100 V126" stroke-width="4"/>' +
    person(68, 64, { arms: "desk", legs: "sit", face: "sad", look: 1 }) +
    '<rect x="96" y="86" width="40" height="14" fill="#fff" transform="rotate(-3 116 93)"/><rect x="100" y="76" width="38" height="12" fill="#ffe9ef" transform="rotate(4 119 82)"/><path d="M104 92 h24" stroke-width="2"/>' +
    '<circle cx="172" cy="34" r="16" fill="#fff"/><path d="M172 34 V23 M172 34 L180 38"/>');
  add("movie", "看电影：两个火柴人抱着爆米花，看着大银幕", '<path d="M6 130 H194" stroke-dasharray="2 7" stroke-width="3"/>' +
    '<rect x="26" y="8" width="148" height="58" rx="6" fill="#d8c8ff"/><path d="M92 22 L116 37 L92 52 Z" fill="#fff"/>' +
    person(78, 94, { s: 0.55, arms: "hold", face: "smile" }) + person(124, 94, { s: 0.55, arms: "hold", face: "grin", look: -1 }) + '<path d="M40 66 V128 M160 66 V128" stroke-width="3"/>' +
    '<path d="M92 108 L95 126 H108 L111 108 Z" fill="#ff8fab" stroke-width="2.5"/><circle cx="96" cy="105" r="4" fill="#fff6c9" stroke-width="2"/><circle cx="104" cy="104" r="4" fill="#fff6c9" stroke-width="2"/>');
  add("kitten", "小猫对着毛线球", ground +
    '<path d="M44 56 L50 28 L66 46 Z M96 46 L112 28 L118 56 Z" fill="#ffd9a8"/><circle cx="80" cy="76" r="36" fill="#ffd9a8"/>' +
    eye(68, 72) + eye(92, 72) + '<path d="M76 84 l4 4 4 -4 M80 88 v4 M70 94 q10 6 20 0" fill="none"/><path d="M40 82 l16 3 M40 92 l16 -3 M120 82 l-16 3 M120 92 l-16 -3" stroke-width="2.5"/>' +
    '<circle cx="152" cy="100" r="22" fill="#ff8fab"/><path d="M136 88 q16 10 30 -4 M132 102 q20 10 38 -2 M140 116 q14 4 24 -6" fill="none" stroke-width="2.5"/>');
  add("kittenpounce", "小猫扑向毛线球：身体伸展，前爪向前", ground +
    '<ellipse cx="82" cy="84" rx="40" ry="20" fill="#ffd9a8" transform="rotate(-14 82 84)"/><circle cx="122" cy="68" r="20" fill="#ffd9a8"/><path d="M110 52 l-2 -16 l14 10 M126 50 l10 -12 l4 16" fill="#ffd9a8"/>' +
    eye(116, 66) + eye(130, 66) + '<path d="M120 74 q3 3 6 0" fill="none" stroke-width="2.2"/>' +
    '<path d="M136 80 L158 92 M130 88 L150 104"/><path d="M46 78 q-24 -10 -22 -34" fill="none"/><path d="M60 100 L54 124 M92 102 L96 124"/>' +
    '<circle cx="172" cy="108" r="14" fill="#ff8fab"/><path d="M162 100 q10 6 18 -2 M160 110 q12 6 24 -2" fill="none" stroke-width="2.2"/><path d="M150 40 l-10 -8 M158 46 l-12 -2" stroke-width="2.5"/>');
  add("cubs", "两只幼狮互相摔打，咬得很轻", ground +
    '<path d="M22 98 q-16 -4 -10 -24" fill="none"/><circle cx="12" cy="72" r="4" fill="#e8a45c" stroke-width="2.5"/>' +
    '<ellipse cx="52" cy="102" rx="32" ry="16" fill="#ffc078"/><path d="M38 114 V126 M66 114 V126" fill="none"/>' +
    '<circle cx="72" cy="74" r="20" fill="#ffc078"/><circle cx="60" cy="56" r="7" fill="#ffc078"/><circle cx="84" cy="56" r="7" fill="#ffc078"/>' + eye(66, 72) + eye(78, 72) + '<path d="M67 82 q5 5 10 0" fill="none" stroke-width="2.2"/>' +
    '<path d="M86 94 L104 84" fill="none"/>' +
    '<path d="M178 100 q16 -4 12 -22" fill="none"/><circle cx="190" cy="76" r="4" fill="#e8a45c" stroke-width="2.5"/>' +
    '<ellipse cx="150" cy="102" rx="30" ry="16" fill="#ffd9a8"/><path d="M136 114 V126 M164 114 V126" fill="none"/>' +
    '<circle cx="128" cy="76" r="18" fill="#ffd9a8"/><circle cx="117" cy="60" r="6.5" fill="#ffd9a8"/><circle cx="139" cy="60" r="6.5" fill="#ffd9a8"/>' + eye(123, 74) + eye(134, 74) + '<path d="M123 82 q5 5 10 0" fill="none" stroke-width="2.2"/>' +
    '<path d="M114 94 L98 86" fill="none"/>' +
    '<path d="M94 58 l2 -10 M102 52 l8 -6 M92 112 l-2 8" stroke-width="2.5"/>');
  add("housekids", "过家家：两个火柴孩子，一个抱着娃娃，旁边是纸盒搭的小房子", ground +
    '<rect x="120" y="80" width="56" height="46" fill="#ffe58a"/><path d="M114 82 L148 54 L182 82 Z" fill="#ff8fab"/><rect x="140" y="100" width="16" height="26" fill="#c98f5a"/>' +
    person(38, 70, { s: 0.85, arms: "hold", face: "smile", hair: true }) + '<circle cx="64" cy="86" r="5" fill="#ffd6a5" stroke-width="2.5"/>' +
    person(92, 70, { s: 0.85, arms: "wave", face: "grin" }));
  add("agon", "竞争：两个火柴人隔着棋盘对弈，桌上放着奖杯", ground +
    '<path d="M56 96 H144 M62 96 V126 M138 96 V126" stroke-width="4"/><rect x="74" y="85" width="36" height="11" fill="#fff" stroke-width="2.5"/><path d="M83 85 v11 M92 85 v11 M101 85 v11" stroke-width="2"/>' +
    person(34, 63, { arms: "hold", face: "flat", look: 1 }) + person(166, 63, { arms: "hold", face: "grin", look: -1, flip: true }) +
    '<path d="M118 66 H136 V76 q0 9 -9 11 q-9 -2 -9 -11 Z" fill="#ffd34d" stroke-width="3"/><path d="M127 87 V92 M120 94 H134" stroke-width="3.5"/>');
  add("alea", "运气：一个火柴人抛出两颗骰子", ground +
    person(40, 63, { arms: "throw", face: "wide", legs: "walk" }) +
    '<g transform="rotate(-16 112 54)"><rect x="92" y="34" width="38" height="38" rx="8" fill="#fff"/><circle cx="103" cy="45" r="3.4" fill="' + INK + '" stroke="none"/><circle cx="120" cy="61" r="3.4" fill="' + INK + '" stroke="none"/><circle cx="111" cy="53" r="3.4" fill="' + INK + '" stroke="none"/></g>' +
    '<g transform="rotate(18 156 98)"><rect x="138" y="80" width="36" height="36" rx="8" fill="#a8dcf0"/><circle cx="150" cy="92" r="3.4" fill="' + INK + '" stroke="none"/><circle cx="162" cy="104" r="3.4" fill="' + INK + '" stroke="none"/></g>' +
    '<path d="M82 40 q20 -22 50 -10" fill="none" stroke-dasharray="3 6" stroke-width="2.5"/>');
  add("mimicry", "模拟：两个火柴孩子假装成国王和巫师", ground +
    person(52, 63, { arms: "hold", face: "grin", hat: "crown", cape: true }) +
    person(146, 63, { arms: "up", face: "o", hat: "wizard" }) + '<path d="M178 38 L192 24" stroke-width="3" fill="none"/><path d="M186 18 l4 -6 M196 30 l6 0" stroke-width="2"/>');
  add("ilinx", "眩晕：两个火柴人坐在冲下轨道的过山车里，举着手尖叫", '<path d="M8 112 Q36 22 66 72 T118 84 Q140 34 162 84 T194 106" fill="none" stroke-width="5"/>' +
    '<g transform="rotate(32 124 62)"><rect x="96" y="56" width="56" height="26" rx="8" fill="#ff8fab"/>' + person(112, 38, { s: 0.6, arms: "up", legs: "none", face: "shout" }) + person(138, 38, { s: 0.6, arms: "up", legs: "none", face: "shout" }) + "</g>" +
    '<path d="M92 24 q10 -10 20 -4 M160 24 q10 6 8 16" fill="none" stroke-width="2.5"/>');
  add("autochess", "云顶之弈：一个火柴人看着手里的牌和棋盘上的棋子", ground +
    person(50, 63, { arms: "hold", face: "flat", look: 1 }) +
    '<g transform="rotate(-18 92 84)"><rect x="76" y="68" width="22" height="30" rx="3" fill="#fff"/></g><rect x="90" y="66" width="22" height="30" rx="3" fill="#ffe9ef"/><g transform="rotate(18 112 84)"><rect x="104" y="68" width="22" height="30" rx="3" fill="#e8f6fc"/></g>' +
    '<path d="M130 112 H190 M136 112 V126 M184 112 V126" stroke-width="4"/><path d="M146 112 l4 -22 h12 l4 22 z" fill="#d8c8ff"/><circle cx="156" cy="84" r="6" fill="#d8c8ff"/><path d="M172 112 l3 -14 h8 l3 14 z" fill="#ffc078" stroke-width="2.5"/>');
  add("trpg", "桌面跑团：三个火柴人围着桌子，桌上有骰子和角色卡", '<path d="M6 130 H194" stroke-dasharray="2 7" stroke-width="3"/>' +
    person(34, 66, { s: 0.8, arms: "up", face: "grin", legs: "none" }) + person(100, 66, { s: 0.8, arms: "hold", face: "o", legs: "none", hat: "wizard" }) + person(166, 66, { s: 0.8, arms: "wave", face: "smile", legs: "none" }) +
    '<path d="M14 96 H186" stroke-width="5"/><path d="M24 96 V128 M176 96 V128" stroke-width="4"/>' +
    '<g transform="rotate(-10 78 85)"><rect x="66" y="74" width="22" height="22" rx="5" fill="#fff"/><circle cx="73" cy="81" r="2.4" fill="' + INK + '" stroke="none"/><circle cx="82" cy="90" r="2.4" fill="' + INK + '" stroke="none"/></g>' +
    '<rect x="112" y="78" width="30" height="18" fill="#fff6c9" transform="rotate(4 127 87)"/><path d="M117 85 h20 M117 91 h14" stroke-width="2"/>');
  add("magiccircle", "魔圈：几个火柴孩子在一圈虚线里玩，圈外是日常的楼房", '<ellipse cx="100" cy="86" rx="76" ry="44" fill="#fff7cf" stroke-dasharray="8 6"/>' +
    person(62, 70, { s: 0.6, arms: "up", legs: "run", face: "grin" }) + person(100, 66, { s: 0.6, arms: "stand", legs: "walk", face: "shout" }) + person(140, 72, { s: 0.6, arms: "wave", legs: "run", face: "smile" }) +
    '<path d="M10 126 V94 M20 126 V80 M180 126 V90 M190 126 V74" stroke="#6b6b7d" stroke-width="5"/>', T(100, 22, 16, "圈里：另一套规矩", "middle"));
  add("thinker", "一个火柴人冥思苦想：象棋、足球、扑克，它们到底哪里一样", ground +
    person(48, 63, { arms: "chin", face: "flat", look: 1, glasses: true, hair: true }) +
    '<circle cx="76" cy="54" r="4" fill="#fff" stroke-width="2.5"/><circle cx="88" cy="44" r="6" fill="#fff" stroke-width="2.5"/>' +
    '<ellipse cx="138" cy="46" rx="58" ry="36" fill="#fff"/>',
    T(138, 36, 12.5, "它们哪里一样？", "middle") + E(112, 62, 20, "♟️") + E(138, 62, 20, "⚽") + E(164, 62, 20, "🃏"));
  add("familytraits", "四个火柴人，各自带着不同的特征：戴眼镜、戴帽子、留胡子、打领带；没有哪个特征是四个人都有的", 
    person(30, 40, { s: 0.8, glasses: true, hat: "cap" }) + person(78, 40, { s: 0.8, glasses: true, beard: true }) +
    person(126, 40, { s: 0.8, beard: true, tie: true }) + person(174, 40, { s: 0.8, tie: true, hat: "cap" }) +
    '<path d="M6 106 H194" stroke-dasharray="2 7" stroke-width="3"/>',
    T(100, 16, 13, "没有哪个特征，是四个人都有的", "middle") +
    E(30, 128, 16, "👓🧢") + E(78, 128, 16, "👓🧔") + E(126, 128, 16, "🧔👔") + E(174, 128, 16, "👔🧢") +
    E(54, 68, 14, "👓") + E(102, 68, 14, "🧔") + E(150, 68, 14, "👔"));
  add("scholar", "一位火柴学者拿着书，旁边是四种乐趣的小图标", ground +
    person(46, 63, { arms: "hold", face: "smile", glasses: true, beard: true }) + '<rect x="56" y="76" width="26" height="20" fill="#ffe58a" transform="rotate(-8 69 86)"/><path d="M69 76 V96" stroke-width="2.5"/>' +
    '<rect x="104" y="22" width="84" height="84" rx="8" fill="#fffdf3"/><path d="M146 22 V106 M104 64 H188" stroke-width="2.5"/>',
    E(125, 52, 24, "♟️") + E(167, 52, 24, "🎲") + E(167, 94, 24, "🎭") + E(125, 94, 24, "🎢"));
  add("grasshopper", "一只蚱蜢", ground +
    '<ellipse cx="96" cy="80" rx="48" ry="18" fill="#9bdc8f" transform="rotate(-8 96 80)"/><circle cx="150" cy="66" r="14" fill="#9bdc8f"/><circle cx="154" cy="62" r="3" fill="' + INK + '" stroke="none"/>' +
    '<path d="M156 54 q12 -22 26 -26 M150 52 q4 -18 14 -26" fill="none"/><path d="M72 84 L40 52 L22 98 M92 94 L90 124 M112 92 L126 124" fill="none"/><path d="M60 72 q30 -22 62 -6" fill="none" stroke-width="2.5"/>');
  add("toolbox", "一只工具箱，里面插着扳手和锤子", ground +
    '<rect x="34" y="72" width="132" height="52" rx="8" fill="#ffc078"/><path d="M76 72 V58 q0 -10 10 -10 h28 q10 0 10 10 V72" fill="none"/><path d="M34 92 H166"/><rect x="90" y="86" width="20" height="14" fill="#ffe58a"/>' +
    '<path d="M52 66 L66 30 M60 24 q-10 4 -4 14 q8 4 14 -4" fill="none"/><path d="M140 66 V32 M130 32 H152 V40 H130 Z" fill="#a8dcf0"/>');
  add("golf", "高尔夫：球离洞很近，却不许直接放进去，必须一杆一杆打", '<path d="M6 122 Q100 108 194 122 V136 H6 Z" fill="#b6e8a8"/>' +
    '<ellipse cx="166" cy="114" rx="14" ry="5" fill="' + INK + '"/><path d="M166 112 V50"/><path d="M166 50 L186 58 L166 66 Z" fill="#ff8fab"/>' +
    '<circle cx="30" cy="112" r="7" fill="#fff"/><path d="M38 108 Q70 60 108 96 T152 110" fill="none" stroke-dasharray="3 7"/><path d="M80 36 l24 24 M104 36 l-24 24" stroke="#e5484d" stroke-width="4"/>',
    T(92, 26, 15, "直接放进去？不行", "middle"));
  add("golfswing", "一个火柴人挥杆击球", '<path d="M6 124 Q100 112 194 124 V136 H6 Z" fill="#b6e8a8"/>' +
    person(62, 54, { arms: "club", face: "grin", look: 1, legs: "wide" }) + '<path d="M66 94 L100 122" stroke-width="3.5"/><rect x="98" y="118" width="12" height="6" fill="#c0c4cf" transform="rotate(30 104 121)"/>' +
    '<circle cx="119" cy="120" r="5" fill="#fff"/><path d="M125 114 Q150 70 178 100" fill="none" stroke-dasharray="3 6" stroke-width="2.5"/><path d="M178 100 V70"/><path d="M178 70 l14 6 -14 6z" fill="#ff8fab"/>');
  add("stairs", "一个火柴人爬楼梯，旁边的电梯被划了叉", '<path d="M10 126 H62 V106 H90 V86 H118 V66 H146 V46 H192" fill="none" stroke-width="4"/>' +
    person(130, 21, { s: 0.7, legs: "walk", face: "grin" }) +
    '<rect x="14" y="26" width="30" height="50" fill="#e8e8f0"/><path d="M14 26 L44 76 M44 26 L14 76" stroke="#e5484d" stroke-width="4"/>', T(29, 94, 13, "电梯", "middle"));
  add("mountain", "一个火柴人徒手爬山，头上是体力环", '<path d="M0 126 L70 28 L102 70 L134 36 L200 126 Z" fill="#a8dcf0"/><path d="M70 28 l-12 18 l12 -4 l10 10 Z" fill="#fff"/>' +
    person(112, 84, { s: 0.6, arms: "up", legs: "run", face: "shout" }) +
    '<circle cx="112" cy="56" r="12" fill="#fff" stroke="#3aa655" stroke-width="5"/><path d="M112 44 A12 12 0 1 1 102 62" fill="none" stroke="#e5484d" stroke-width="5"/>',
    T(112, 36, 12, "体力", "middle"));
  add("chairs", "三种完全不同的椅子：凳子、沙发、秋千", ground +
    '<rect x="18" y="74" width="48" height="10" fill="#c98f5a"/><path d="M26 84 L22 124 M58 84 L62 124 M42 84 V124"/><rect x="76" y="68" width="56" height="40" rx="14" fill="#ff8fab"/><rect x="82" y="46" width="44" height="30" rx="12" fill="#ff8fab"/><path d="M86 108 V124 M122 108 V124"/>' +
    '<path d="M146 20 L140 126 M190 20 L196 126" stroke-width="3"/><path d="M152 20 L158 76 M184 20 L176 76"/><rect x="152" y="76" width="30" height="8" fill="#c98f5a"/><path d="M146 20 H190"/>');
  add("quadrants", "四个象限，代表四种乐趣来源", '<rect x="40" y="16" width="60" height="54" fill="#ffc078"/><rect x="100" y="16" width="60" height="54" fill="#a8dcf0"/><rect x="100" y="70" width="60" height="54" fill="#ffb3c6"/><rect x="40" y="70" width="60" height="54" fill="#b6e8a8"/>',
    E(70, 52, 24, "♟️") + E(130, 52, 24, "🎲") + E(130, 106, 24, "🎭") + E(70, 106, 24, "🎢"));

  add("forced", "公司审批流程：三个垂头丧气的火柴人排着队，等着一叠要盖章的文件",
    ground +
    person(22, 72, { s: 0.85, arms: "stand", face: "sad", look: 1, legs: "walk" }) +
    person(58, 72, { s: 0.85, arms: "stand", face: "sad", look: 1, legs: "walk" }) +
    person(94, 72, { s: 0.85, arms: "stand", face: "sad", look: 1, legs: "walk" }) +
    '<rect x="146" y="64" width="34" height="10" fill="#fff"/><rect x="144" y="74" width="34" height="10" fill="#fff"/><rect x="147" y="84" width="34" height="10" fill="#fff"/><rect x="145" y="94" width="34" height="10" fill="#fff"/>' +
    '<circle cx="168" cy="69" r="3.5" fill="#ffd0d0" stroke="#e5484d" stroke-width="2"/>' +
    '<rect x="132" y="104" width="58" height="9" fill="#c98f5a"/><path d="M138 113 V126 M184 113 V126" fill="none"/>' +
    '<circle cx="160" cy="79" r="3.5" fill="#ffd0d0" stroke="#e5484d" stroke-width="2"/>',
    T(96, 30, 15, "必须！没得选", "middle"));
  add("simcity", "模拟经营：火柴人看着自己建的小城，头上冒出两个互相矛盾的想法",
    ground +
    person(36, 66, { arms: "chin", face: "flat", look: 1 }) +
    '<rect x="96" y="92" width="22" height="34" fill="#a8dcf0"/><rect x="120" y="76" width="22" height="50" fill="#ffe58a"/><rect x="144" y="100" width="22" height="26" fill="#ffb3c6"/><rect x="168" y="86" width="20" height="40" fill="#b6e8a8"/>' +
    '<path d="M104 100 h6 M104 108 h6 M128 86 h6 M128 96 h6 M128 106 h6" stroke-width="2.5"/>' +
    '<ellipse cx="58" cy="24" rx="40" ry="21" fill="#fff"/><ellipse cx="148" cy="24" rx="42" ry="21" fill="#fff"/><circle cx="44" cy="50" r="3" fill="#fff" stroke-width="2.5"/>',
    T(58, 22, 13, "假装当", "middle") + T(58, 37, 13, "市长？", "middle") + T(148, 22, 13, "和自己", "middle") + T(148, 37, 13, "较劲？", "middle"));
  add("oddplay", "成年人窝在沙发上刷手机，头上冒出一个问号：这是在练什么技能？",
    ground +
    '<rect x="26" y="88" width="90" height="38" rx="10" fill="#d8c8ff"/><rect x="26" y="68" width="20" height="30" rx="8" fill="#d8c8ff"/>' +
    person(76, 60, { arms: "hold", legs: "none", face: "flat", look: 1 }) + '<path d="M76 97 H104 V124 M76 100 H92 V124" fill="none"/>' + '<rect x="96" y="80" width="14" height="22" rx="3" fill="#a8dcf0" stroke-width="3"/>' +
    '<ellipse cx="148" cy="46" rx="42" ry="26" fill="#fff"/><circle cx="116" cy="74" r="4" fill="#fff" stroke-width="2.5"/><circle cx="126" cy="64" r="5" fill="#fff" stroke-width="2.5"/>',
    T(148, 42, 13, "这是在", "middle") + T(148, 58, 13, "练什么？", "middle"));

  window.ILLUS = ILLUS;
  window.illusSvg = function (name) {
    const it = ILLUS[name]; if (!it) return "";
    return '<svg viewBox="0 0 200 140" class="illus-svg" role="img" aria-label="' + it.alt.replace(/"/g, "&quot;") + '">' +
      '<g class="rough" stroke="' + INK + '" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round">' + it.body + "</g>" + it.extra + "</svg>";
  };
  window.illusPerson = person;
  /* 各章自己的插图包（js/illus-chNN.js）用 illusAdd 注册新插图；kit 提供 person/ground/T/E/eye/SK/INK */
  window.illusAdd = add;
  window.illusKit = { person, ground, T, E, eye, SK, INK };
})();
