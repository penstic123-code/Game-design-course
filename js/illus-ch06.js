/* 第 6 章插图包：心流 / 最近发展区与脚手架 / 峰终定律（火柴人风） */
(function () {
  const { person, ground, T, E, eye, SK, INK } = window.illusKit;
  const Y = "#ffe58a", PK = "#ffb3c6", BL = "#a8dcf0", GR = "#b6e8a8", PU = "#d8c8ff", OR = "#ffc078", WH = "#fff";
  const rect = (x, y, w, h, fill, extra) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (fill || WH) + '" ' + (extra || "") + "/>";
  const circ = (x, y, r, fill) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (fill || WH) + '"/>';
  const path = (d, fill, extra) => '<path d="' + d + '" fill="' + (fill || "none") + '" ' + (extra || "") + "/>";
  // 小脸：kind = smile / sad / flat
  const face = (x, y, r, kind, fill) => {
    const m = kind === "smile" ? "M" + (x - 3) + " " + (y + 2) + " q3 3.5 6 0" : kind === "sad" ? "M" + (x - 3) + " " + (y + 5) + " q3 -3.5 6 0" : "M" + (x - 3) + " " + (y + 3) + " h6";
    return circ(x, y, r, fill || SK) + '<circle cx="' + (x - 2.5) + '" cy="' + (y - 2) + '" r="1.1" fill="' + INK + '" stroke="none"/><circle cx="' + (x + 2.5) + '" cy="' + (y - 2) + '" r="1.1" fill="' + INK + '" stroke="none"/>' + path(m, "none", 'stroke-width="1.8"');
  };
  const add = illusAdd;

  /* ===== 心流：例子 ===== */
  add("c06_tetrisflow", "俄罗斯方块玩得正投入：方块下落的速度刚好跟得上手，火柴人咧嘴笑",
    ground + person(36, 63, { arms: "hold", face: "grin" }) +
    rect(104, 10, 60, 116, "#fffdf3") +
    rect(104, 112, 15, 14, PK) + rect(119, 112, 15, 14, PK) + rect(134, 112, 15, 14, BL) + rect(149, 112, 15, 14, BL) +
    rect(104, 98, 15, 14, GR) + rect(134, 98, 15, 14, PU) +
    rect(119, 38, 15, 14, OR) + rect(134, 38, 15, 14, OR) + rect(149, 38, 15, 14, OR) + rect(134, 52, 15, 14, OR) +
    path("M176 30 v26 M170 50 l6 8 6 -8", "none", 'stroke-width="3"'),
    T(8, 20, 13, "速度刚好，") + T(8, 36, 13, "手正好跟得上"));

  add("c06_climb", "攀岩：岩壁上的下一个把手刚好够得着，攀岩者抓着两个把手向上伸手",
    rect(104, 6, 90, 120, "#efe3cd") +
    circ(125, 118, 4, OR) + circ(155, 118, 4, OR) + circ(125, 58, 4, OR) + circ(155, 58, 4, OR) + circ(172, 90, 4, OR) +
    circ(145, 30, 5, WH) +
    person(140, 62, { s: 0.9, arms: "up", legs: "wide", face: "grin" }) +
    path("M120 36 q10 -14 20 -8", "none", 'stroke-dasharray="3 4" stroke-width="2.5"'),
    T(6, 38, 13, "下一个把手") + T(6, 54, 13, "踮脚刚好够到"));

  add("c06_bored", "高手玩新手村：戴王冠的火柴人打着哈欠站在只有两块积木的第一关前",
    ground + person(50, 63, { hat: "crown", face: "o", arms: "stand" }) +
    rect(108, 100, 22, 26, BL) + rect(108, 76, 22, 24, BL) +
    path("M160 126 V66", "none", 'stroke-width="4"') + rect(142, 56, 48, 22, Y),
    T(166, 72, 13, "Lv.1", "middle") + T(86, 34, 16, "Z z z") + T(8, 18, 13, "第 1 关……又是第 1 关"));

  add("c06_lost", "开放世界里没有目标：火柴人站在空旷的原野上，头顶一个大问号，四周的路都一样",
    ground + path("M14 126 L40 100 L66 126 M130 126 L158 92 L186 126", "#e8dcc8") +
    person(100, 70, { face: "flat" }) +
    path("M90 124 L44 110 M110 124 L156 110", "none", 'stroke-width="3" stroke-dasharray="4 5"'),
    T(100, 44, 26, "?", "middle") + T(8, 16, 13, "难度刚好，却不知道要去哪"));

  /* ===== 心流：时间线 ===== */
  add("c06_artist", "画家忘我作画：窗外天色已晚，盘子里的三明治一口没动，火柴人还在画布前",
    ground + rect(112, 30, 54, 58, WH) + path("M124 88 L112 126 M154 88 L166 126 M139 88 V126", "none") +
    path("M122 70 q12 -26 24 -4", "none", 'stroke-width="3"') + circ(150, 48, 5, PK) +
    person(76, 63, { arms: "point", face: "smile" }) +
    '<ellipse cx="30" cy="120" rx="18" ry="5" fill="#fff"/><path d="M18 116 l12 -8 12 8z" fill="' + Y + '"/>' +
    circ(30, 30, 14, WH) + path("M30 30 V21 M30 30 L38 34"),
    T(8, 66, 13, "饭凉了") + T(48, 15, 13, "天都黑了"));

  add("c06_interviews", "研究者拿着记录板访谈，被访者回答说像被水流推着走",
    ground + person(34, 63, { arms: "hold", face: "smile" }) + rect(48, 74, 16, 22, WH) + path("M52 80 h8 M52 86 h8") +
    person(154, 63, { arms: "wave", face: "grin" }) +
    '<ellipse cx="108" cy="26" rx="62" ry="17" fill="#fff"/><circle cx="140" cy="46" r="3" fill="#fff"/><circle cx="146" cy="54" r="2.4" fill="#fff"/>' +
    path("M70 122 q8 -8 16 0 t16 0 t16 0 t16 0", "none", 'stroke-width="3"'),
    T(108, 31, 13, "像被水流推着走", "middle"));

  add("c06_book", "一本写着 Flow 的书立在书架台上，书页边涌出波浪，旁边一个火柴人翻着书",
    ground + rect(66, 52, 60, 74, BL) + rect(66, 52, 8, 74, "#6aaed0") +
    path("M86 108 q8 -8 16 0 t16 0", "none") + path("M54 112 q6 -6 12 0 M126 112 q6 -6 12 0", "none") +
    person(166, 63, { arms: "hold", face: "smile", look: -1 }),
    T(98, 80, 18, "Flow", "middle") + T(98, 24, 13, "越来越多人读到它", "middle"));

  add("c06_designer", "游戏设计师在白板上画出一条斜向上的绿色通道，并指给别人看",
    ground + person(34, 63, { arms: "point", face: "smile" }) +
    rect(80, 14, 112, 74, WH) + path("M92 78 L180 24 L180 44 L92 88z", GR, 'stroke-width="2"') +
    path("M94 82 Q120 74 136 56 T178 32", "none", 'stroke-width="3.5"') + circ(136, 56, 5, Y),
    T(136, 108, 13, "让玩家待在通道里", "middle"));

  /* ===== 心流：怎么用 ===== */
  add("c06_rapt", "火柴人盯着屏幕玩得入神，旁边的钟显示已经过了很久",
    ground + person(50, 63, { arms: "hold", face: "o" }) +
    rect(92, 60, 46, 34, "#d6f1ff") + path("M104 126 h22 M115 94 v32", "none") +
    circ(166, 40, 18, WH) + path("M166 40 V28 M166 40 L174 44"),
    T(8, 20, 13, "再玩一关就睡……") + T(166, 74, 13, "3 小时了", "middle"));

  /* ===== 最近发展区：例子 ===== */
  add("c06_bike", "教孩子骑车：大人在后面扶着车座，手只轻轻搭着，孩子骑得摇摇晃晃却很开心",
    ground + circ(90, 112, 14, WH) + circ(138, 112, 14, WH) +
    path("M90 112 L104 84 L138 112 M104 84 L124 84 L122 98", "none") + path("M96 84 h16", "none", 'stroke-width="5"') +
    person(112, 54, { s: 0.75, arms: "hold", legs: "none", face: "grin" }) +
    person(64, 63, { arms: "hold", face: "smile" }),
    T(6, 20, 13, "手一点点松开"));

  add("c06_tutorial", "教学关里的三块屏幕：先是粗大的箭头，然后只剩小图标，最后什么提示都没有",
    rect(6, 30, 56, 50, "#fffdf3") + rect(72, 30, 56, 50, "#fffdf3") + rect(138, 30, 56, 50, "#fffdf3") +
    path("M18 56 h30 M38 44 l12 12 -12 12", "none", 'stroke-width="7"') +
    circ(100, 58, 6, Y) + path("M92 50 l4 -4", "none", 'stroke-width="2"') +
    circ(166, 64, 7, GR) +
    path("M64 56 h6 M130 56 h6", "none", 'stroke-width="3"'),
    T(34, 100, 13, "大箭头", "middle") + T(100, 100, 13, "小图标", "middle") + T(166, 100, 13, "自己来", "middle") +
    T(100, 20, 13, "提示一格格撤掉", "middle"));

  add("c06_fullhint", "反例：从第 1 关到第 30 关，每一屏都有同样粗大的提示箭头，火柴人昏昏欲睡",
    ground + person(34, 63, { face: "flat", arms: "stand" }) +
    rect(76, 44, 34, 40, "#fffdf3") + rect(116, 44, 34, 40, "#fffdf3") + rect(156, 44, 34, 40, "#fffdf3") +
    path("M82 64 h20 M94 54 l8 10 -8 10 M122 64 h20 M134 54 l8 10 -8 10 M162 64 h20 M174 54 l8 10 -8 10", "none", 'stroke-width="4"'),
    T(93, 100, 12, "1 关", "middle") + T(133, 100, 12, "15 关", "middle") + T(173, 100, 12, "30 关", "middle") + T(72, 22, 13, "提示永远满格", "middle") + T(40, 40, 15, "z z"));

  add("c06_hintdial", "旋钮写着提示强度，火柴人伸手把旋钮从满格慢慢往零拧",
    ground + person(48, 63, { arms: "point", face: "smile" }) +
    circ(116, 64, 30, "#fffdf3") + path("M116 64 L100 86", "none", 'stroke-width="5"') +
    path("M88 86 A30 30 0 1 1 144 86", "none", 'stroke-width="2.5" stroke-dasharray="3 4"') +
    path("M90 44 l6 3 M116 32 v7 M142 44 l-6 3", "none", 'stroke-width="2.5"'),
    T(116, 22, 13, "提示强度", "middle") + T(84, 104, 13, "满", "middle") + T(148, 104, 13, "无", "middle") + T(116, 118, 13, "慢慢拧", "middle"));

  /* ===== 最近发展区：时间线 / 配图 ===== */
  add("c06_twokids", "两个孩子独自答题的水平一样，都是八岁；有人从旁点拨后，一个能到十二岁的水平，另一个只到九岁",
    ground + rect(76, 76, 30, 50, BL) + rect(76, 38, 30, 38, "#e8f6fc", 'stroke-dasharray="4 3"') +
    rect(150, 76, 30, 50, BL) + rect(150, 66, 30, 10, "#e8f6fc", 'stroke-dasharray="4 3"') +
    person(54, 88, { s: 0.6, face: "smile", arms: "stand" }) + person(132, 88, { s: 0.6, face: "smile", arms: "stand" }) +
    path("M60 76 H196", "none", 'stroke-dasharray="3 4" stroke-width="2"'),
    T(91, 32, 13, "有人帮：12 岁", "middle") + T(152, 58, 13, "有人帮：9 岁", "middle") + T(100, 17, 13, "两人独自答题，水平都是 8 岁", "middle"));

  add("c06_pyramid", "大人站在一旁看着，孩子在搭积木金字塔，大人只在孩子卡住时伸手指点",
    ground + person(34, 63, { arms: "point", face: "smile" }) + person(96, 78, { s: 0.75, arms: "hold", face: "o" }) +
    rect(126, 112, 20, 14, PK) + rect(146, 112, 20, 14, BL) + rect(166, 112, 20, 14, Y) +
    rect(136, 98, 20, 14, GR) + rect(156, 98, 20, 14, OR) + rect(146, 84, 20, 14, PU),
    T(100, 20, 13, "只在孩子卡住时出手", "middle"));

  /* ===== 峰终：例子 ===== */
  add("c06_boss", "通关最终头目：头目瘫倒、眼睛变成叉，火柴人双手高举欢呼，彩带飘落",
    ground + person(56, 63, { arms: "up", face: "shout", legs: "run" }) +
    '<ellipse cx="150" cy="98" rx="32" ry="28" fill="' + PU + '"/>' + path("M138 92 l8 8 m0 -8 l-8 8 M158 92 l8 8 m0 -8 l-8 8 M142 112 q8 -6 16 0", "none", 'stroke-width="2.5"') +
    '<rect x="30" y="22" width="7" height="4" fill="' + PK + '" transform="rotate(30 33 24)"/><rect x="84" y="50" width="7" height="4" fill="' + Y + '" transform="rotate(-20 87 52)"/><rect x="128" y="44" width="7" height="4" fill="' + GR + '" transform="rotate(50 131 46)"/><rect x="170" y="34" width="7" height="4" fill="' + BL + '" transform="rotate(10 173 36)"/>',
    T(100, 22, 18, "KO!", "middle"));

  add("c06_dessert", "一顿饭里前面的菜都一般，最后端上来的蛋糕插着小蜡烛，火柴人眼睛放光",
    ground + rect(8, 94, 118, 7, OR) + path("M18 101 V126 M116 101 V126", "none", 'stroke-width="4"') +
    '<ellipse cx="34" cy="90" rx="16" ry="4" fill="#eee"/><ellipse cx="68" cy="90" rx="16" ry="4" fill="#eee"/>' +
    rect(88, 74, 30, 18, PK) + rect(94, 66, 18, 8, WH) + path("M103 66 v-8", "none", 'stroke-width="2.5"') +
    path("M103 50 l2 5 5 1 -4 3 1 5 -4 -3 -4 3 1 -5 -4 -3 5 -1z", Y, 'stroke-width="2"') +
    person(160, 63, { arms: "up", face: "grin" }),
    T(34, 80, 13, "前菜", "middle") + T(68, 80, 13, "主菜", "middle") + T(66, 120, 13, "最后上了蛋糕", "middle") + T(6, 30, 13, "整顿饭都记成好吃"));

  add("c06_oneshot", "反例：关卡一路精彩，折线一路向上，最后一秒被一击秒杀，折线直线跌落，火柴人垂头丧气",
    ground + path("M14 104 V28 M14 104 H112", "none", 'stroke-width="2.5"') +
    path("M16 92 L38 62 L58 46 L80 40 L96 42 L104 98", "none", 'stroke-width="4"') + circ(104, 98, 5, PK) +
    person(158, 63, { face: "sad", arms: "cover" }),
    T(58, 24, 13, "一路很好玩", "middle") + T(104, 118, 13, "秒杀", "middle") + T(158, 28, 13, "我记住的", "middle") + T(158, 43, 13, "只有这个", "middle"));

  /* ===== 峰终：时间线 / 配图 ===== */
  add("c06_coldwater", "两盆冷水：左边泡六十秒，右边先泡六十秒再多泡三十秒，最后一段水略暖",
    ground + path("M8 82 H78 L72 126 H14z", BL) + path("M112 82 H188 L182 126 H118z", BL) +
    person(95, 91, { s: 0.55, arms: "up", legs: "stand", face: "o" }),
    T(43, 108, 13, "60 秒", "middle") + T(150, 108, 12, "60 + 30 秒", "middle") + T(190, 70, 12, "最后 30 秒略暖", "end") + T(92, 76, 13, "冷！", "middle"));

  add("c06_clinic", "两次检查的疼痛柱状图：A 较短，B 多拖了一会儿但最后几下很轻；右边的火柴人觉得 B 没那么难受",
    ground + rect(10, 76, 8, 24, PK) + rect(20, 76, 8, 24, PK) + rect(30, 66, 8, 34, PK) + rect(40, 62, 8, 38, PK) +
    rect(70, 76, 8, 24, PK) + rect(80, 76, 8, 24, PK) + rect(90, 66, 8, 34, PK) + rect(100, 62, 8, 38, PK) + rect(110, 88, 8, 12, Y) + rect(120, 94, 8, 6, Y) +
    path("M6 100 H132", "none", 'stroke-width="2.5"') + person(186, 88, { s: 0.6, face: "smile", arms: "stand" }),
    T(29, 118, 13, "A 较短", "middle") + T(122, 118, 13, "B 多拖，结尾轻", "middle") + T(100, 30, 13, "最难受的一刻，两边一样", "middle") + T(176, 74, 12, "B 好些", "middle"));

  add("c06_designerend", "设计师指着关卡体验折线：最高的一刻打上星标，结尾处插着一面旗",
    ground + person(34, 63, { arms: "point", face: "smile" }) +
    path("M82 84 L100 64 L118 74 L135 34 L152 64 L170 56 L188 40", "none", 'stroke-width="3.5"') +
    path("M135 28 l2 5 5 1 -4 3 1 5 -4 -3 -4 3 1 -5 -4 -3 5 -1z", Y, 'stroke-width="2"') +
    path("M188 40 V20", "none", 'stroke-width="2.5"') + path("M188 20 l12 4 -12 4z", PK, 'stroke-width="2"'),
    T(135, 100, 13, "最强的一刻要出彩", "middle") + T(150, 118, 13, "收尾要漂亮", "middle"));

  add("c06_remember", "火柴人抱怨“整个关卡都烂”，可他的回忆胶片里前四格都是笑脸，只有最后一格是哭脸",
    ground + person(22, 63, { arms: "wave", face: "sad" }) +
    rect(46, 62, 26, 30, "#fff") + rect(76, 62, 26, 30, "#fff") + rect(106, 62, 26, 30, "#fff") + rect(136, 62, 26, 30, "#fff") + rect(166, 62, 26, 30, "#ffe9ef") +
    face(59, 77, 7, "smile") + face(89, 77, 7, "smile") + face(119, 77, 7, "smile") + face(149, 77, 7, "smile") + face(179, 77, 7, "sad"),
    T(118, 38, 13, "“整个关卡都烂透了”", "middle") + T(119, 112, 13, "前面都在笑，只记得最后", "middle"));

  add("c06_zpdband", "孩子踩在小凳子上才够得到中间那层架子；最高一层依然够不着，最低一层不用帮忙",
    ground + rect(150, 14, 46, 112, "#f6ead2") + path("M150 50 H196 M150 86 H196", "none") +
    circ(164, 40, 6, PK) + circ(182, 40, 6, PK) + circ(164, 76, 6, Y) + circ(182, 76, 6, Y) + circ(164, 112, 6, BL) + circ(182, 112, 6, BL) +
    rect(120, 108, 28, 18, OR) + person(134, 58, { s: 0.75, arms: "up", legs: "stand", face: "grin" }),
    T(110, 36, 13, "够不着", "end") + T(110, 72, 13, "有人帮才够到", "end") + T(110, 100, 13, "自己够得到", "end") + T(116, 122, 12, "脚手架 →", "end"));
})();
