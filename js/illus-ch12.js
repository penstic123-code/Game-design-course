/* 第 12 章插图包：声音与视觉（火柴人风） */
(function () {
  const { person, ground, SK, INK } = window.illusKit;
  const Y = "#ffe58a", PK = "#ffb3c6", BL = "#a8dcf0", GR = "#b6e8a8", PU = "#d8c8ff", OR = "#ffc078", WH = "#fff", RD = "#ff9b9b", GY = "#cfd3dc";
  const rect = (x, y, w, h, fill, ex) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (fill || WH) + '" ' + (ex || "") + "/>";
  const circ = (x, y, r, fill, ex) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (fill || WH) + '" ' + (ex || "") + "/>";
  const ell = (x, y, rx, ry, fill, ex) => '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry + '" fill="' + (fill || WH) + '" ' + (ex || "") + "/>";
  const path = (d, fill, ex) => '<path d="' + d + '" fill="' + (fill || "none") + '" ' + (ex || "") + "/>";
  const poly = (pts, fill, ex) => '<polygon points="' + pts + '" fill="' + (fill || WH) + '" ' + (ex || "") + "/>";
  const dot = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="1.8" fill="' + INK + '" stroke="none"/>';
  let TX = [];
  const tx = (x, y, s, t, a) => { TX.push('<text x="' + x + '" y="' + y + '" font-size="' + s + '" text-anchor="' + (a || "middle") + '" fill="' + INK + '" stroke="none">' + t + "</text>"); return ""; };
  /* 气泡：宽度按字数自动留足余量；文字放在滤镜组之外 */
  const bub = (x, y, t, s) => { s = s || 13; const n = Array.from(t).reduce((a, c) => a + (c.charCodeAt(0) > 255 ? 1 : 0.55), 0); const rx = n * s / 2 + 11, ry = s / 2 + 10; tx(x, y + s * 0.36, s, t); return ell(x, y, rx, ry, WH); };
  const fin = () => { const r = TX.join(""); TX = []; return r; };
  const add = (n, alt, body) => illusAdd(n, alt, body, fin());
  const wave = (x, y, k) => path("M" + x + " " + (y - 8 * k) + " q" + (7 * k) + " " + (8 * k) + " 0 " + (16 * k) + " M" + (x + 8 * k) + " " + (y - 14 * k) + " q" + (12 * k) + " " + (14 * k) + " 0 " + (28 * k), "none", 'stroke-width="2.6"');
  const spk = (x, y) => poly((x) + "," + (y + 6) + " " + (x + 8) + "," + (y + 6) + " " + (x + 18) + "," + y + " " + (x + 18) + "," + (y + 28) + " " + (x + 8) + "," + (y + 22) + " " + x + "," + (y + 22), Y);

  // 捂住耳朵：头两侧各一只手（person 的 cover 手臂是捂眼睛）
  const ears = (x, y, s) => { s = s || 1; const sy = y + 11 * s + 4 * s, ey = y + 2 * s, d = 12.5 * s; return path("M" + x + " " + sy + " L" + (x - 15 * s) + " " + (sy - 6 * s) + " L" + (x - d) + " " + ey + " M" + x + " " + sy + " L" + (x + 15 * s) + " " + (sy - 6 * s) + " L" + (x + d) + " " + ey, "none", 'stroke-width="2.4"') + circ(x - d, ey, 3.2 * s, SK) + circ(x + d, ey, 3.2 * s, SK); };
  /* ===== 第 1 节 ===== */
  add("c12_mute", "火柴人关掉了游戏声音，扬声器被划掉，他一脸茫然地问：吃到了吗？",
    ground + person(50, 63, { arms: "hold", face: "flat" }) + rect(76, 76, 22, 30, BL) + spk(112, 14) + path("M106 52 L140 14", "none", 'stroke="#e5484d" stroke-width="4"') + bub(148, 100, "吃到了吗？", 13));
  add("c12_coin", "火柴人跳起来碰到金币，金币旁边冒出“叮”的声音气泡：短促清脆的反馈",
    ground + person(66, 64, { arms: "up", face: "grin", legs: "run" }) + circ(98, 50, 12, Y) + path("M98 43 v14", "none", 'stroke-width="2.5"') + path("M116 36 l7 -6 M120 50 l9 0 M116 64 l8 6", "none", 'stroke-width="2.5"') + bub(166, 30, "叮！", 15));
  add("c12_foot", "戴耳机的火柴人背后的墙另一侧，传来来自左后方的脚步声，他听见了敌人在哪个方向",
    ground + rect(52, 34, 14, 92, GY) + person(30, 90, { s: 0.55, face: "flat", arms: "stand", legs: "walk" }).replace(/<g /, '<g stroke="#555" ') + wave(76, 70, 1) + wave(96, 70, 1) +
    person(150, 63, { face: "wide", look: 1 }) + path("M137 56 q13 -20 26 0", "none", 'stroke-width="4"') + circ(137, 62, 4, PK) + circ(163, 62, 4, PK) + bub(130, 20, "左后方有人！", 13));
  add("c12_daily", "四个日常声音：微波炉的叮是反馈，警笛是信息，颤音是情绪，从左边传来是空间",
    rect(6, 6, 88, 58, "#fff7cf") + rect(106, 6, 88, 58, "#e8f6fc") + rect(6, 72, 88, 56, "#ffe9ef") + rect(106, 72, 88, 56, "#eaf9e4") +
    rect(30, 14, 40, 24, GY) + rect(34, 18, 20, 16, WH) + circ(62, 26, 3, RD) + tx(50, 55, 13, "叮·反馈") +
    circ(150, 26, 10, RD) + path("M132 26 h-6 M168 26 h6 M150 8 v-4 M137 13 l-4 -4 M163 13 l4 -4", "none", 'stroke-width="2.5"') + tx(150, 55, 13, "警笛·信息") +
    circ(34, 100, 5, PK) + path("M39 100 V82 l10 -4 M60 98 q4 -14 8 0 q4 14 8 0", "none", 'stroke-width="2.5"') + tx(50, 121, 13, "颤音·情绪") +
    ell(138, 92, 10, 12, WH) + path("M164 92 H180 M172 86 L180 92 L172 98", "none", 'stroke-width="2.5"') + tx(150, 121, 13, "左边·空间"));
  add("c12_loud", "反例：每次点击都有一大堆音效同时爆响，火柴人痛苦地捂住耳朵",
    ground + person(100, 66, { s: 0.9, arms: "none", face: "shout" }) + ears(100, 66, 0.9) + bub(38, 32, "砰！", 14) + bub(164, 30, "哗啦！", 14) + bub(36, 98, "咚咚", 14) + bub(166, 98, "叮叮叮", 14));

  /* ===== 第 3 节 ===== */
  add("c12_quiet", "火柴人一路只听见风声，直到打开宝箱，音乐才响起来：音乐成了发现的奖励",
    ground + path("M10 40 q12 -8 24 0 t24 0 M6 60 q12 -8 24 0 t24 0", "none", 'stroke-width="2.5"') + tx(34, 26, 13, "只有风声") +
    person(84, 63, { legs: "walk", arms: "point" }) + rect(130, 98, 44, 28, OR) + path("M130 98 Q152 78 174 98", "#e6a35a") + tx(152, 70, 24, "♪") + bub(152, 30, "音乐进来了", 13));
  add("c12_horror", "恐怖片里音乐突然停了，沙发上的火柴人捂住眼睛，电视上的音符被划掉",
    ground + rect(14, 88, 84, 38, PU) + rect(14, 66, 18, 30, PU) + person(60, 60, { arms: "cover", legs: "none", face: "o", look: 1 }) +
    rect(132, 82, 46, 44, "#e6d3b3") + rect(124, 38, 62, 44, "#ddd") + tx(155, 70, 24, "♪") + path("M134 76 L176 44", "none", 'stroke="#e5484d" stroke-width="4"') + bub(150, 18, "音乐停了…", 13));
  add("c12_loop", "反例：同一段九十秒的音乐在一个关卡里循环了四十分钟，火柴人一脸厌烦",
    ground + path("M50 34 a28 28 0 1 1 -27 21", "none", 'stroke-dasharray="4 4"') + path("M16 52 l8 8 l8 -10", "none") + tx(50, 66, 13, "循环") + tx(50, 112, 13, "40 分钟") +
    person(150, 63, { face: "sad", arms: "stand" }) + bub(150, 22, "又来了……", 13));

  /* ===== 第 4 节 ===== */
  add("c12_enemy", "圆滚滚、带笑脸的主角和浑身尖刺的敌人并排：形状在说“友好”和“威胁”",
    ground + circ(46, 100, 24, BL) + circ(38, 96, 2.5, INK) + circ(54, 96, 2.5, INK) + path("M38 106 q8 7 16 0", "none", 'stroke-width="2.4"') +
    '<g transform="translate(0 10)">' + poly("150,52 158,70 178,66 164,82 176,100 156,96 150,114 142,96 122,100 134,82 120,66 142,70", RD) + path("M138 82 l8 4 M162 82 l-8 4", "none", 'stroke-width="2.6"') + path("M142 98 l8 -5 l8 5", "none", 'stroke-width="2.4"') + "</g>" + tx(46, 32, 13, "圆：亲和") + tx(150, 32, 13, "尖：威胁"));
  add("c12_signs", "三块路牌：三角形表示警告，圆形表示禁止，方形表示提示：形状本身就是一种编码",
    ground + path("M34 62 V126 M100 62 V126 M166 62 V126", "none", 'stroke-width="3"') + poly("34,24 54,60 14,60", Y) + circ(100, 42, 19, WH, 'stroke="#e5484d" stroke-width="5"') + rect(148, 24, 36, 36, BL) +
    tx(34, 16, 13, "警告") + tx(100, 16, 13, "禁止") + tx(166, 16, 13, "提示"));
  add("c12_redclash", "反例：金币是红色，敌人的攻击范围也是红色，火柴人困惑地想：到底哪个能碰？",
    ground + circ(34, 112, 14, RD) + tx(34, 84, 13, "拾取物") + ell(164, 106, 30, 14, RD, 'stroke-dasharray="4 4"') + tx(164, 82, 13, "伤害范围") +
    person(100, 66, { face: "flat", arms: "chin", s: 0.9 }) + bub(100, 18, "都是红的？", 13));

  /* ===== 第 5 节 ===== */
  add("c12_landing", "角色起跳时被拉长，落地时被压扁并扬起灰尘，体积保持不变，所以看起来有分量",
    ground + ell(40, 66, 12, 28, BL) + path("M40 94 V104 M34 100 L40 106 L46 100", "none", 'stroke-width="2.5"') + tx(40, 28, 13, "起跳拉长") +
    ell(150, 108, 32, 12, BL) + circ(108, 116, 5, WH) + circ(98, 120, 4, WH) + circ(192, 116, 5, WH) + tx(150, 82, 13, "落地压扁") + tx(100, 18, 13, "体积不变", "middle").replace("", ""));
  add("c12_popup", "手机上的弹窗先快后慢地弹出来，电梯门起步缓、中间快、停时缓：都是缓动",
    rect(18, 24, 56, 92, BL) + rect(26, 52, 40, 30, WH) + path("M30 92 h32", "none", 'stroke-width="2.5"') + path("M46 44 v-8 M40 40 l6 -6 l6 6", "none", 'stroke-width="2.5"') +
    rect(112, 24, 72, 92, GY) + rect(116, 28, 30, 84, WH) + rect(150, 28, 30, 84, WH) + path("M146 70 H130 M136 64 L130 70 L136 76 M150 70 H166 M160 64 L166 70 L160 76", "none", 'stroke-width="2.5"') +
    tx(46, 16, 13, "弹窗") + tx(148, 16, 13, "电梯门") + tx(46, 134, 13, "先快后慢") + tx(148, 134, 13, "缓入缓出"));
  add("c12_hpbar", "反例：血条匀速一格一格掉到零，像表格里的数字在递减，火柴人看得打哈欠",
    ground + rect(14, 40, 120, 20, WH) + rect(14, 40, 52, 20, RD) + path("M14 80 L134 110", "none", 'stroke-width="3" stroke-dasharray="5 5"') + path("M126 100 l10 11 l-14 2", "none", 'stroke-width="3"') + tx(74, 30, 13, "血条匀速掉") + tx(60, 114, 13, "毫无节奏") +
    person(166, 66, { s: 0.8, face: "o", arms: "stand" }));

  /* ===== 时间线 ===== */
  add("c12_tl_disney", "动画师画的弹跳小球：下落时被拉长，落地时被压扁，再弹起，一格一格排开",
    ground + path("M14 40 Q60 140 100 40", "none", 'stroke-dasharray="3 6" stroke-width="2.4"') + ell(24, 50, 8, 11, Y) + ell(60, 96, 12, 8, Y) + ell(86, 112, 15, 7, Y) + ell(116, 60, 8, 12, Y) + circ(140, 36, 9, Y) +
    person(170, 66, { arms: "point", face: "smile", s: 0.85, look: -1 }));
  add("c12_tl_book", "火柴人指着一本厚书，书上写着动画十二原则，旁边标着 1981",
    ground + person(34, 63, { arms: "point", face: "smile" }) + rect(78, 20, 92, 106, Y) + rect(78, 20, 12, 106, OR) + tx(134, 62, 15, "动画") + tx(134, 82, 15, "十二原则") + tx(134, 108, 14, "1981"));
  add("c12_tl_sid", "一块灰色的声音芯片，上面标着 SID 6581，三个声部的声波从它头上冒出来",
    ground + rect(56, 62, 88, 50, GY) + path("M70 112 v10 M90 112 v10 M110 112 v10 M130 112 v10 M70 62 v-8 M90 62 v-8 M110 62 v-8 M130 62 v-8", "none", 'stroke-width="3"') + tx(100, 92, 14, "SID 6581") +
    path("M60 30 q8 -14 16 0 t16 0", "none", 'stroke-width="2.6"') + tx(100, 18, 13, "3 个声部"));
  add("c12_tl_nes", "红白机的五个声道排成一排：两个脉冲波、一个三角波、一个噪声和一个采样通道",
    rect(7, 38, 34, 62, "#fff7cf") + rect(45, 38, 34, 62, "#fff7cf") + rect(83, 38, 34, 62, "#e8f6fc") + rect(121, 38, 34, 62, "#ffe9ef") + rect(159, 38, 34, 62, "#eaf9e4") +
    path("M12 60 v-10 h8 v10 h8 v-10 h8 M50 60 v-10 h6 v10 h6 v-10 h8 M88 60 l10 -12 l10 12 M126 60 l4 -8 l4 14 l4 -10 l6 6 M164 60 q6 -14 12 0 t12 0", "none", 'stroke-width="2.5"') +
    tx(24, 88, 13, "脉冲") + tx(62, 88, 13, "脉冲") + tx(100, 88, 13, "三角") + tx(138, 88, 13, "噪声") + tx(176, 88, 13, "采样") + tx(100, 24, 15, "只有 5 个“嘴巴”"));
  add("c12_tl_imuse", "音乐从“探索”乐段平滑地过渡到“战斗”乐段，旁边的火柴人操作着游戏",
    ground + person(34, 63, { arms: "hold", face: "grin" }) + rect(78, 24, 44, 28, BL) + rect(146, 82, 44, 28, PK) + path("M122 38 C150 38 100 96 142 96", "none", 'stroke-width="3"') + path("M134 88 L144 96 L132 102", "none", 'stroke-width="3"') +
    tx(100, 44, 13, "探索") + tx(168, 102, 13, "战斗") + tx(100, 116, 13, "无缝过渡"));
  add("c12_tl_mw", "混音台上三根推子，分别对应游戏里的速度、血量和敌人数量，推子一动，音乐跟着变",
    ground + rect(22, 28, 156, 90, GY) + path("M56 44 V94 M100 44 V94 M144 44 V94", "none", 'stroke-width="3"') + rect(46, 78, 20, 10, WH) + rect(90, 52, 20, 10, WH) + rect(134, 66, 20, 10, WH) +
    tx(56, 110, 13, "速度") + tx(100, 110, 13, "血量") + tx(144, 110, 13, "敌人") + tx(100, 18, 13, "游戏参数 → 音乐"));

  /* ===== 第 7 节：原理配图 ===== */
  add("c12_gull", "海鸥雏鸟更爱啄一根带三道白环的红色长棒，而不是真正的海鸥嘴：夸张过头的刺激反而更有吸引力",
    ground + circ(34, 108, 16, WH) + poly("50,108 70,102 70,114", Y) + circ(30, 104, 2.2, INK) + bub(34, 56, "啄！", 14) +
    rect(78, 54, 104, 9, RD) + rect(144, 54, 5, 9, WH) + rect(156, 54, 5, 9, WH) + rect(168, 54, 5, 9, WH) + tx(130, 40, 13, "红棒：啄得更多") +
    circ(150, 108, 12, WH) + poly("156,110 178,106 178,116", Y) + circ(172, 114, 2.6, RD) + tx(150, 84, 13, "真鸥嘴"));
  add("c12_gestalt", "一堆圆点，靠得近的自然被看成一组，火柴人指着它们说：左边一组、右边一组",
    ground + circ(18, 40, 4, INK) + circ(30, 40, 4, INK) + circ(42, 40, 4, INK) + circ(18, 52, 4, INK) + circ(30, 52, 4, INK) + circ(42, 52, 4, INK) + circ(18, 64, 4, INK) + circ(30, 64, 4, INK) + circ(42, 64, 4, INK) +
    circ(70, 40, 4, INK) + circ(82, 40, 4, INK) + circ(94, 40, 4, INK) + circ(70, 52, 4, INK) + circ(82, 52, 4, INK) + circ(94, 52, 4, INK) + circ(70, 64, 4, INK) + circ(82, 64, 4, INK) + circ(94, 64, 4, INK) +
    tx(30, 90, 13, "一组") + tx(82, 90, 13, "一组") + person(154, 63, { arms: "point", face: "smile", look: -1 }) + bub(138, 20, "靠得近＝一伙", 13));
  const mage = (cx, robe, head, hat) => poly(cx + ",50 " + (cx - 22) + ",112 " + (cx + 22) + ",112", robe) + circ(cx, 44, 9, head) + poly(cx + ",8 " + (cx - 14) + ",38 " + (cx + 14) + ",38", hat) + rect(cx + 28, 24, 4, 88, robe) + circ(cx + 30, 22, 7, hat);
  add("c12_sil", "同一个法师，左边是彩色的，右边涂成纯黑剪影，轮廓依然一眼能认出来",
    mage(40, PU, SK, BL) + mage(140, "#222", "#222", "#222") + tx(46, 132, 13, "彩色") + tx(146, 132, 13, "剪影") + path("M92 70 H112 M104 62 L112 70 L104 78", "none", 'stroke-width="3"'));
})();
