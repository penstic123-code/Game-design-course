/* 第 7 章插图包：反馈与手感（火柴人风） */
(function () {
  const { person, ground, T, E, eye, SK, INK } = window.illusKit;
  const Y = "#ffe58a", PK = "#ffb3c6", BL = "#a8dcf0", GR = "#b6e8a8", PU = "#d8c8ff", OR = "#ffc078", WH = "#fff", RD = "#e5484d";
  const rect = (x, y, w, h, fill, extra) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (fill || WH) + '" ' + (extra || "") + "/>";
  const circ = (x, y, r, fill, extra) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (fill || WH) + '" ' + (extra || "") + "/>";
  const path = (d, fill, extra) => '<path d="' + d + '" fill="' + (fill || "none") + '" ' + (extra || "") + "/>";
  const ell = (x, y, rx, ry, fill, extra) => '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry + '" fill="' + (fill || WH) + '" ' + (extra || "") + "/>";
  // n 角星
  const star = (x, y, r, fill, n) => {
    n = n || 8; let d = "";
    for (let i = 0; i < n * 2; i++) { const a = Math.PI * i / n, rr = i % 2 ? r * 0.5 : r; d += (i ? "L" : "M") + (x + Math.cos(a) * rr).toFixed(1) + " " + (y + Math.sin(a) * rr).toFixed(1); }
    return path(d + "Z", fill || Y, 'stroke-width="2.5"');
  };
  const add = illusAdd;
  const DASH = 'stroke-dasharray="3 5" stroke-width="2.5"';

  /* ===== 是什么：例子 ===== */
  add("c07_coinchain", "连续吃金币：每吃一枚，音符就往上升一格，火柴人越来越高兴",
    ground + person(34, 63, { arms: "up", legs: "run", face: "grin" }) +
    circ(84, 108, 8, Y) + circ(112, 92, 8, Y) + circ(140, 76, 8, Y) + circ(168, 60, 8, Y) +
    path("M84 108 L112 92 L140 76 L168 60", "none", DASH),
    E(84, 96, 16, "♪") + E(112, 80, 18, "♪") + E(140, 64, 20, "♪") + E(168, 46, 22, "♪") + T(8, 20, 13, "一枚比一枚高"));

  add("c07_elevator", "左边：电梯按钮按下去没亮，人又按了一次；右边：按钮亮了，人放心地等着",
    ground + path("M100 14 V122", "none", DASH) +
    rect(68, 50, 22, 44) + circ(79, 72, 6, "#ddd") + person(34, 63, { arms: "point", face: "sad" }) +
    rect(168, 50, 22, 44) + circ(179, 72, 6, Y) + path("M179 58 v-5 M169 72 h-5 M189 72 h5 M172 65 l-4 -4 M186 65 l4 -4", "none", 'stroke-width="2.5"') +
    person(134, 63, { arms: "point", face: "smile" }),
    T(50, 28, 13, "没亮？再按", "middle") + T(150, 28, 13, "亮了=收到", "middle"));

  add("c07_latefire", "按下开火键后，漂亮的大爆炸过了半秒才出现，火柴人皱着眉等",
    ground + person(26, 63, { arms: "point", face: "sad", look: 1 }) +
    path("M56 98 H182", "none", 'stroke-width="3"') + path("M64 90 v16 M158 90 v16", "none") +
    star(160, 44, 24, OR, 10) + star(160, 44, 12, Y, 8) +
    path("M70 80 H150 M142 74 l8 6 -8 6", "none", DASH),
    T(64, 118, 13, "按下", "middle") + T(158, 118, 13, "才炸", "middle") + T(108, 70, 13, "半秒", "middle"));

  /* ===== 是什么：一击的时间线 ===== */
  add("c07_anatomy", "火柴人一拳打在木桩上：木桩被压扁、火花四溅，画面上写着“啪”",
    ground + person(38, 63, { arms: "point", legs: "wide", face: "shout", look: 1 }) +
    ell(138, 104, 30, 18, "#d9b88a", 'transform="rotate(-6 138 104)"') + path("M122 100 q10 -6 22 0 M126 110 q12 4 24 -2", "none", 'stroke-width="2"') +
    path("M92 82 l-12 -10 M98 74 l-4 -14 M104 70 l4 -12 M110 74 l12 -10", "none", 'stroke-width="3"') +
    path("M170 80 l12 -8 M174 96 l16 -2 M168 70 l4 -14", "none", 'stroke-width="3"'),
    T(130, 52, 20, "啪！", "middle"));

  /* ===== 发明故事 ===== */
  add("c07_twobreak", "两台屏幕里规则一样的打砖块：左边灰扑扑，右边五彩闪光；火柴人挠头问哪里不一样",
    rect(12, 8, 84, 58, "#eeeeee") + rect(104, 8, 84, 58, "#fffdf3") +
    rect(20, 14, 16, 8, "#ccc") + rect(40, 14, 16, 8, "#ccc") + rect(60, 14, 16, 8, "#ccc") +
    rect(112, 14, 16, 8, PK) + rect(132, 14, 16, 8, Y) + rect(152, 14, 16, 8, BL) +
    circ(54, 44, 3.5, "#bbb") + circ(146, 44, 3.5, RD) + rect(36, 56, 28, 5, "#bbb") + rect(128, 56, 36, 5, PU) +
    ground + person(100, 78, { s: 0.75, arms: "chin", face: "flat", legs: "walk" }) + ell(160, 98, 28, 15),
    E(172, 46, 14, "✨") + E(120, 46, 14, "✨") + T(160, 103, 13, "更爽？", "middle"));

  add("c07_disney", "动画纸上画着一颗弹跳的球：下落时被拉长，落地时被压扁，弹起时又被拉长",
    rect(78, 10, 114, 106) + path("M84 106 H186", "none", 'stroke-width="2.5"') +
    ell(98, 30, 6, 10, PK) + ell(124, 62, 7, 12, PK) + ell(148, 100, 15, 6, PK) + ell(168, 64, 7, 12, PK) + ell(184, 34, 6, 9, PK) +
    path("M98 40 Q112 80 148 94 Q178 84 184 44", "none", DASH) +
    ground + person(34, 63, { arms: "point", face: "smile", hair: true }),
    T(6, 22, 13, "挤压与拉伸"));

  add("c07_response", "一块大秒表，旁边三行：0.1 秒觉得即时，1 秒能等，10 秒就走神了",
    circ(50, 68, 30, WH) + path("M50 38 v-8 M44 28 h12 M50 68 L50 48 M50 68 L66 76", "none", 'stroke-width="3"') + circ(50, 68, 3, INK) +
    path("M98 46 H190 M98 78 H190 M98 110 H190", "none", DASH),
    T(98, 40, 13, "0.1 秒：即时") + T(98, 72, 13, "1 秒：还能等") + T(98, 104, 13, "10 秒：走神了") + T(50, 118, 13, "响应时间", "middle"));

  add("c07_swinkbook", "一本写着 Game Feel 的书，周围六个标签：输入、响应、情境、润色、隐喻、规则",
    rect(70, 20, 60, 86, BL) + rect(70, 20, 9, 86, "#6aaed0") +
    rect(10, 22, 40, 22, Y) + rect(10, 56, 40, 22, Y) + rect(10, 90, 40, 22, Y) +
    rect(150, 22, 40, 22, PK) + rect(150, 56, 40, 22, PK) + rect(150, 90, 40, 22, PK) +
    path("M50 33 H70 M50 67 H70 M50 101 H70 M130 33 H150 M130 67 H150 M130 101 H150", "none", 'stroke-width="2.5"'),
    T(105, 58, 15, "Game", "middle") + T(105, 78, 15, "Feel", "middle") +
    T(30, 38, 13, "输入", "middle") + T(30, 72, 13, "响应", "middle") + T(30, 106, 13, "情境", "middle") +
    T(170, 38, 13, "润色", "middle") + T(170, 72, 13, "隐喻", "middle") + T(170, 106, 13, "规则", "middle"));

  add("c07_juiceit", "台上的人指着大屏幕：同一个打砖块，一项一项往上加效果",
    ground + person(34, 56, { arms: "point", face: "grin" }) +
    rect(84, 12, 106, 72, "#fffdf3") + rect(92, 18, 20, 9, PK) + rect(116, 18, 20, 9, Y) + rect(140, 18, 20, 9, BL) + rect(164, 18, 20, 9, GR) +
    circ(120, 54, 4, RD) + path("M120 54 L106 66", "none", 'stroke-width="2"') + ell(138, 76, 20, 4, PU) +
    path("M137 84 v20 M116 104 H158", "none", 'stroke-width="3"'),
    E(160, 50, 14, "✨") + E(98, 46, 12, "✨") + T(138, 118, 13, "一项一项往上加", "middle"));

  add("c07_shake", "一块游戏屏幕在抖：虚线画出它来回晃动的位置，火柴人指着它",
    ground + person(30, 63, { arms: "point", face: "grin" }) +
    rect(84, 22, 90, 66, "none", 'stroke-dasharray="3 4" stroke-width="2" transform="translate(-6 3)"') +
    rect(84, 22, 90, 66, "none", 'stroke-dasharray="3 4" stroke-width="2" transform="translate(6 -3)"') +
    rect(88, 22, 90, 66, "#fffdf3") + ell(118, 66, 12, 8, GR) + path("M130 66 H160", "none", 'stroke-width="3"') + star(168, 60, 9, OR, 6) +
    path("M72 40 l-8 -4 M72 70 l-8 4 M190 40 l8 -4 M190 70 l8 4", "none", 'stroke-width="2.5"'),
    T(133, 112, 13, "屏幕震动", "middle"));

  /* ===== 为什么：反馈要快 ===== */
  add("c07_lightswitch", "火柴人按下墙上的开关，灯马上亮了，光芒四射",
    ground + person(34, 63, { arms: "point", face: "smile" }) + rect(68, 56, 18, 34) + path("M77 64 v10", "none", 'stroke-width="4"') +
    path("M150 8 V34", "none") + path("M134 54 L142 34 H158 L166 54 Z", Y) + circ(150, 58, 5, "#fff6c9") +
    path("M130 66 l-10 8 M150 72 v12 M170 66 l10 8 M122 52 h-10 M178 52 h10", "none", 'stroke-width="2.5"') +
    path("M90 72 H130", "none", DASH),
    T(110, 112, 13, "按下 → 马上亮", "middle"));

  add("c07_rhythm", "节奏游戏：音符落到判定线，火柴人按了，可是声音慢半拍才从喇叭里出来，他怀疑自己按歪了",
    rect(18, 8, 54, 118) + path("M18 92 H72", "none", 'stroke-width="4"') +
    circ(36, 28, 6, PK) + circ(54, 60, 6, BL) + circ(36, 90, 6, Y) +
    ground + person(110, 63, { arms: "point", face: "wide", look: -1 }) + ell(122, 24, 42, 14) +
    rect(164, 96, 22, 30, PU) + circ(175, 111, 6, WH) + path("M158 100 q-6 9 0 18 M151 94 q-11 15 0 30", "none", DASH),
    T(122, 29, 13, "我按歪了？", "middle") + T(160, 80, 13, "声音慢了", "middle"));

    add("c07_triplesubmit", "网页的提交按钮点了没反应，火柴人连点三次，右边冒出三张订单",
    ground + person(30, 63, { arms: "point", face: "wide" }) +
    rect(64, 62, 40, 22, GR) + path("M70 50 l4 8 M84 46 v10 M98 50 l-4 8", "none", 'stroke-width="2.5"') +
    rect(134, 96, 40, 24, "#fff") + rect(140, 74, 40, 24, "#fff") + rect(146, 52, 40, 24, "#fff") +
    path("M152 62 h22 M146 84 h22 M140 106 h22", "none", 'stroke-width="2"'),
    T(84, 77, 13, "提交", "middle") + T(166, 40, 13, "3 张订单", "middle") + T(84, 112, 13, "没反应？", "middle"));

  add("c07_batched", "三次命中的反馈被攒着，到最后才一起放出一个大爆炸；火柴人疑惑地问打中了吗",
    path("M14 52 H186", "none", 'stroke-width="3"') +
    path("M24 42 l12 20 M36 42 l-12 20 M44 42 l12 20 M56 42 l-12 20 M64 42 l12 20 M76 42 l-12 20", "none", 'stroke="' + RD + '" stroke-width="2.5"') +
    star(158, 52, 24, OR, 10) + star(158, 52, 11, Y, 8) +
    ground + person(60, 92, { s: 0.6, arms: "chin", face: "flat", legs: "walk" }),
    T(100, 22, 13, "都攒到最后才一起放", "middle") + T(150, 112, 13, "打中了吗？", "middle"));

  /* ===== 为什么：预测与缓动 ===== */
  add("c07_cup", "火柴人以为杯子装满了水，用力一抬，杯子是空的，手一下甩得老高",
    ground + person(60, 63, { arms: "up", face: "o" }) +
    path("M80 58 L98 58 L95 78 L83 78 Z", "#fff") +
    path("M96 108 L114 108 L111 126 L99 126 Z", "none", DASH) + path("M70 72 q34 -4 34 36", "none", DASH),
    T(150, 40, 13, "咦？比想的轻", "middle") + T(150, 70, 13, "手甩过头了", "middle"));

  add("c07_menu", "菜单面板从左边滑进来：一开始每帧挪得远，快到位时挪得越来越短",
    path("M10 100 H190", "none", DASH) +
    rect(10, 20, 34, 56, "#fffdf3", 'stroke-opacity=".4" fill-opacity=".5"') + rect(44, 20, 34, 56, "#fffdf3", 'stroke-opacity=".5" fill-opacity=".6"') +
    rect(74, 20, 34, 56, "#fffdf3", 'stroke-opacity=".6" fill-opacity=".7"') + rect(98, 20, 34, 56, "#fffdf3", 'stroke-opacity=".8" fill-opacity=".8"') +
    rect(124, 20, 54, 56, Y) + path("M132 34 h38 M132 48 h38 M132 62 h28", "none", 'stroke-width="3"') +
    circ(26, 100, 4, RD) + circ(60, 100, 4, RD) + circ(90, 100, 4, RD) + circ(114, 100, 4, RD) + circ(150, 100, 4, RD),
    T(100, 122, 13, "先快后慢，稳稳停住", "middle"));

  add("c07_cabinet", "带缓冲器的柜门：从上面看，门先快后慢地合上，每一格转过的角度越来越小",
    path("M60 100 H180", "none", 'stroke-width="4"') + circ(150, 100, 5, INK) +
    path("M150 100 L133 57 M150 100 L115 65 M150 100 L105 79 M150 100 L101 91 M150 100 L100 100", "none", 'stroke-width="2.5"') +
    path("M133 57 Q104 62 100 100", "none", DASH) +
    person(34, 63, { arms: "point", face: "smile" }),
    T(120, 36, 13, "先快后慢，轻轻合上", "middle") + T(125, 120, 13, "缓冲器", "middle"));

  add("c07_progressbar", "进度条冲过了 100% 的刻度才退回来，火柴人以为出了错",
    rect(18, 64, 120, 20) + rect(18, 64, 150, 20, GR) + rect(138, 64, 30, 20, PK, 'stroke="' + RD + '"') + path("M138 50 V96", "none", DASH) +
    ground + person(184, 91, { s: 0.55, arms: "stand", face: "o", legs: "stand" }),
    T(138, 44, 13, "100%", "middle") + T(100, 112, 13, "冲过头了？出错了吧", "middle"));

  /* ===== 为什么：比例 ===== */
  add("c07_candle", "左边：黑屋子里点一支蜡烛，立刻照亮；右边：大太阳底下再点一支，几乎看不出",
    rect(8, 10, 88, 94, "#4a4a68") + circ(52, 80, 24, "#fff1b8", 'fill-opacity=".6" stroke="none"') + rect(48, 82, 8, 20, WH) + path("M52 76 q-5 -5 0 -12 q5 7 0 12", Y, 'stroke-width="2"') +
    rect(104, 10, 88, 94, "#d7f0ff") + circ(150, 30, 12, Y) + path("M150 8 v6 M128 30 h6 M166 30 h6 M134 14 l4 4 M166 14 l-4 4", "none", 'stroke-width="2.5"') +
    rect(146, 82, 8, 20, WH) + path("M150 78 q-2 -2 0 -5 q2 3 0 5", Y, 'stroke-width="1.5"'),
    T(52, 122, 13, "黑屋里 +1 支", "middle") + T(148, 122, 13, "正午 +1 支", "middle"));

  add("c07_shake3", "三个方块分别在小、中、大三档震动：晃动幅度成倍增长，一眼分得清",
    rect(14, 38, 30, 34, PK, 'transform="translate(-2 0)" fill-opacity=".35" stroke-dasharray="3 3" stroke-width="2"') + rect(14, 38, 30, 34, PK, 'transform="translate(2 0)"') +
    rect(88, 38, 30, 34, BL, 'transform="translate(-8 0)" fill-opacity=".35" stroke-dasharray="3 3" stroke-width="2"') + rect(88, 38, 30, 34, BL, 'transform="translate(8 0)"') +
    rect(150, 38, 30, 34, GR, 'transform="translate(-14 0)" fill-opacity=".35" stroke-dasharray="3 3" stroke-width="2"') + rect(150, 38, 30, 34, GR, 'transform="translate(14 0)"') +
    path("M12 104 H188", "none", 'stroke-width="3"'),
    T(31, 22, 13, "普攻 2", "middle") + T(103, 22, 13, "重击 8", "middle") + T(165, 22, 13, "暴击 16", "middle") + T(100, 124, 13, "每一档是上一档的几倍", "middle"));

  add("c07_brightness", "手机亮度滑块：5% 调到 10% 屏幕明显变亮，85% 调到 90% 几乎看不出",
    path("M14 44 H110", "none", 'stroke-width="3"') + circ(18, 44, 5, Y) + circ(28, 44, 5, OR) +
    rect(130, 30, 22, 28, "#555") + rect(160, 30, 22, 28, "#9a9a9a") + path("M155 44 h4", "none") +
    path("M14 100 H110", "none", 'stroke-width="3"') + circ(94, 100, 5, Y) + circ(100, 100, 5, OR) +
    rect(130, 84, 22, 26, "#efefef") + rect(160, 84, 22, 26, "#f6f6f6") + path("M155 97 h4", "none"),
    T(14, 26, 13, "5% → 10%") + T(14, 82, 13, "85% → 90%") + T(156, 128, 13, "差不多", "middle"));

  add("c07_fontgrow", "伤害数字按“每档大两号”放大：普攻、重击、大招看起来差不多大，火柴人眯着眼分不出",
    ground + path("M16 66 H184", "none", DASH) +
    person(100, 81, { s: 0.7, arms: "stand", face: "flat", legs: "stand" }),
    '<g font-size="20" fill="' + INK + '" stroke="none"><text x="36" y="56" text-anchor="middle">20</text></g><g font-size="23" fill="' + INK + '" stroke="none"><text x="100" y="56" text-anchor="middle">22</text></g><g font-size="26" fill="' + INK + '" stroke="none"><text x="164" y="56" text-anchor="middle">24</text></g>' +
    T(36, 28, 13, "普攻", "middle") + T(100, 28, 13, "重击", "middle") + T(164, 28, 13, "大招", "middle") + T(160, 108, 13, "一样大嘛", "middle"));

  /* ===== 为什么：享乐适应 ===== */
  add("c07_fadecoin", "同一枚金币反复捡：第一次火花四射，之后火花越缩越小，最后火柴人打了个哈欠",
    ground + circ(22, 112, 8, Y) + circ(52, 112, 8, Y) + circ(82, 112, 8, Y) + circ(112, 112, 8, Y) +
    star(22, 80, 20, OR, 10) + star(52, 86, 14, OR, 8) + star(82, 92, 9, OR, 6) + star(112, 98, 5, OR, 5) +
    person(166, 63, { arms: "stand", face: "o", legs: "stand" }),
    T(22, 38, 13, "第 1 枚", "middle") + T(112, 38, 13, "第 100 枚", "middle") + T(166, 38, 16, "Z z z", "middle"));

  add("c07_newphone", "新手机第一天，火柴人兴奋地捧着；第一百天，同一只手机，他漫不经心地划着",
    ground + path("M100 14 V122", "none", DASH) +
    person(50, 63, { arms: "hold", face: "grin" }) + rect(72, 72, 14, 24, BL) +
    person(150, 63, { arms: "hold", face: "flat" }) + rect(172, 72, 14, 24, BL),
    T(50, 28, 13, "第 1 天", "middle") + T(150, 28, 13, "第 100 天", "middle") + E(74, 56, 16, "✨") + E(34, 44, 14, "✨"));

  add("c07_varied", "每次捡金币，声音的高低和火花的样子都不太一样，火柴人一直挺开心",
    ground + person(30, 63, { arms: "up", legs: "run", face: "grin" }) +
    circ(84, 108, 8, Y) + circ(118, 108, 8, Y) + circ(152, 108, 8, Y) + circ(184, 108, 8, Y) +
    star(84, 74, 9, PK, 6) + star(118, 60, 12, BL, 8) + star(152, 82, 8, GR, 5) + star(184, 66, 11, PU, 7),
    E(84, 52, 16, "♪") + E(118, 40, 20, "♪") + E(152, 58, 14, "♪") + E(184, 46, 18, "♪"));

  add("c07_samefx", "每一下命中都放同一个超大号特效，屏幕被爆炸和火花淹没，真正的重击看不出来；火柴人在角落发愣",
    rect(10, 8, 128, 96, "#fffdf3") +
    star(40, 40, 28, OR, 10) + star(88, 36, 30, PK, 10) + star(60, 76, 30, Y, 12) + star(110, 80, 24, BL, 10) + star(120, 52, 18, PU, 8) +
    ground + person(172, 63, { arms: "stand", face: "o", legs: "stand" }),
    T(172, 20, 13, "哪下是", "middle") + T(172, 36, 13, "重击？", "middle") + T(74, 121, 13, "每一下都是大招", "middle"));
})();
