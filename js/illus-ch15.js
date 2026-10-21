/* 第 15 章插图包：平衡与经济（火柴人风） */
(function () {
  const { person, ground, T, SK, INK } = window.illusKit;
  const Y = "#ffe58a", PK = "#ffb3c6", BL = "#a8dcf0", GR = "#b6e8a8", PU = "#d8c8ff", OR = "#ffc078", WH = "#fff", RD = "#ff9b9b", GD = "#ffd34d";
  const rect = (x, y, w, h, fill, ex) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (fill || WH) + '" ' + (ex || "") + "/>";
  const circ = (x, y, r, fill) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (fill || WH) + '"/>';
  const path = (d, fill, ex) => '<path d="' + d + '" fill="' + (fill || "none") + '" ' + (ex || "") + "/>";
  const dot = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="1.8" fill="' + INK + '" stroke="none"/>';
  const coin = (x, y, r) => circ(x, y, r || 5, GD);
  const face = (x, y, r, k) => circ(x, y, r, SK) + dot(x - r * 0.4, y - r * 0.2) + dot(x + r * 0.4, y - r * 0.2) +
    (k === "smile" ? path("M" + (x - r * 0.45) + " " + (y + r * 0.35) + " q" + r * 0.45 + " " + r * 0.5 + " " + r * 0.9 + " 0", "none", 'stroke-width="2"') :
      k === "sad" ? path("M" + (x - r * 0.45) + " " + (y + r * 0.7) + " q" + r * 0.45 + " " + -r * 0.5 + " " + r * 0.9 + " 0", "none", 'stroke-width="2"') :
        path("M" + (x - r * 0.4) + " " + (y + r * 0.5) + " h" + r * 0.8, "none", 'stroke-width="2"'));
  const add = illusAdd;

  /* ===== 第 1 节：平衡 ===== */
  add("c15_scale", "一个火柴人看着天平：一边放剑，一边放盾，天平是平的，说明两样东西不一样但同样有价值",
    ground + person(34, 63, { arms: "point", face: "smile" }) +
    path("M120 50 V112 M100 112 H140", "none", 'stroke-width="4"') + path("M70 50 H170", "none", 'stroke-width="4"') +
    path("M74 50 L62 84 M74 50 L86 84 M58 84 H90 M166 50 L154 84 M166 50 L178 84 M150 84 H182", "none", 'stroke-width="2.5"') +
    path("M60 78 H82 M82 72 V84 M82 78 H90", "none", 'stroke-width="3"') + path("M158 62 h16 v10 q0 10 -8 12 q-8 -2 -8 -12 z", PK, 'stroke-width="2.5"'),
    T(120, 28, 13, "不一样，但等价", "middle"));

  add("c15_rps", "两个火柴人猜拳：一个出石头，一个出布，中间画着石头克剪刀、剪刀克布、布克石头的三角循环",
    person(34, 63, { arms: "hold", face: "grin", look: 1 }) + person(166, 63, { arms: "hold", face: "grin", look: -1 }) +
    circ(68, 84, 8, SK) + rect(124, 74, 16, 20, SK) + path("M132 74 v-6 M127 74 v-5 M137 74 v-5", "none", 'stroke-width="2.5"') +
    path("M100 84 L90 102 H110 Z", "none", 'stroke-width="2.5"') + path("M104 100 l6 4 -2 -7z", INK, 'stroke="none"'),
    T(68, 62, 13, "石头", "middle") + T(132, 56, 13, "布", "middle") + T(100, 132, 13, "谁也不是最强", "middle"));

  add("c15_triangle", "骑兵克弓手，弓手克长枪兵，长枪兵克骑兵：三个兵种用箭头连成一个圈，没有哪个兵种永远最强",
    circ(100, 34, 13, Y) + circ(38, 98, 13, GR) + circ(162, 98, 13, PK) +
    path("M92 46 L50 87", "none", 'stroke-width="3"') + path("M47 90 L56.6 86.9 L50.2 80.5 Z", INK, 'stroke="none"') +
    path("M54 104 H140", "none", 'stroke-width="3"') + path("M148 104 l-9 -4 v8z", INK, 'stroke="none"') +
    path("M154 88 L110 46", "none", 'stroke-width="3"') + path("M109 43.5 L118.4 47 L111.8 53.2 Z", INK, 'stroke="none"'),
    T(120, 38, 13, "骑兵") + T(38, 128, 13, "弓手", "middle") + T(162, 128, 13, "长枪兵", "middle") + T(100, 82, 13, "没有最强", "middle"));

  add("c15_elements", "火克草、草克水、水克火：三张属性卡牌首尾相接，最后一个箭头从下方绕回来",
    rect(14, 40, 44, 52, PK) + rect(78, 40, 44, 52, BL) + rect(142, 40, 44, 52, GR) +
    path("M36 52 q-10 14 -2 24 q6 8 14 0 q6 -10 -4 -20 q-2 6 -6 4 q2 -4 -2 -8z", OR) +
    path("M100 52 q-12 18 -8 26 q8 10 16 0 q4 -8 -8 -26z", WH) + path("M158 78 q0 -22 18 -24 q2 20 -18 24z", "#7ed36d") +
    path("M76 66 H62", "none", 'stroke-width="3"') + path("M60 66 l8 -4 v8z", INK, 'stroke="none"') +
    path("M140 66 H126", "none", 'stroke-width="3"') + path("M124 66 l8 -4 v8z", INK, 'stroke="none"') +
    path("M36 96 Q100 126 164 96", "none", 'stroke-width="3"') + path("M164 95 l-7 8 10 1z", INK, 'stroke="none"'),
    T(36, 30, 14, "火", "middle") + T(100, 30, 14, "水", "middle") + T(164, 30, 14, "草", "middle") + T(100, 132, 13, "水克火 草克水 火克草", "middle"));

  add("c15_clones", "反例：左边四个一模一样的角色，选谁都一样；右边一个戴王冠的巨人，其他人都排队选他",
    path("M100 14 V126", "none", 'stroke-dasharray="4 5" stroke-width="2.5"') +
    person(20, 94, { s: 0.5, face: "flat" }) + person(46, 94, { s: 0.5, face: "flat" }) + person(72, 94, { s: 0.5, face: "flat" }) +
    person(112, 100, { s: 0.4, face: "smile", arms: "up", look: 1 }) + person(130, 100, { s: 0.4, face: "smile", arms: "up", look: 1 }) +
    person(172, 62, { face: "grin", look: -1 }) + path("M162 52 l4 -10 5 6 5 -8 5 8 5 -6 4 10z", Y),
    T(50, 18, 13, "全员一样", "middle") + T(150, 18, 13, "一个最强", "middle") + T(46, 76, 13, "选谁都行", "middle") + T(122, 84, 13, "都选它", "middle"));

  /* ===== 第 2 节：水龙头水桶水槽 ===== */
  add("c15_salary", "工资像水龙头流进存款的水桶，房租和吃饭像右下角的出水口把水放走",
    rect(8, 22, 56, 12, "#cfd3dc") + rect(56, 34, 14, 10, "#cfd3dc") + circ(63, 54, 3, BL) + circ(63, 68, 3, BL) +
    path("M72 80 V124 H132 V80", "none", 'stroke-width="4"') + rect(74, 100, 56, 22, BL, 'stroke="none"') +
    rect(132, 106, 40, 10, "#cfd3dc") + circ(178, 124, 3, BL),
    T(10, 16, 13, "工资") + T(102, 74, 13, "存款", "middle") + T(160, 98, 13, "房租", "middle"));

  add("c15_gold", "火柴人打怪得到金币装进钱袋，再拿去铁砧那里付修理费",
    ground + '<ellipse cx="28" cy="108" rx="22" ry="16" fill="' + GR + '"/>' + dot(20, 104) + dot(34, 104) +
    coin(54, 84, 4) + coin(64, 74, 4) + person(98, 56, { arms: "hold", face: "grin" }) + circ(120, 92, 9, "#c98f5a") +
    coin(138, 82, 4) + coin(150, 76, 4) + path("M156 112 h34 l-6 -10 h-22 z", "#9aa0ad") + rect(164, 112, 18, 12, "#9aa0ad"),
    T(28, 80, 13, "打怪", "middle") + T(172, 92, 13, "修理", "middle"));

  add("c15_stamina", "火柴人冲刺时头顶的体力条在变短，站着休息时体力条又慢慢变长",
    ground + rect(30, 12, 100, 14, WH) + rect(32, 14, 56, 10, GR, 'stroke="none"') + person(70, 71, { s: 0.85, legs: "run", arms: "up", face: "o" }),
    T(146, 24, 13, "体力") + T(124, 70, 13, "冲刺：消耗") + T(124, 100, 13, "站定：恢复"));

  add("c15_flood", "反例：钱袋满得溢出来，火柴人站在金币堆里，药水标价却高到离谱",
    ground + person(42, 62, { arms: "up", face: "o" }) + coin(16, 120, 6) + coin(28, 120, 6) + coin(40, 120, 6) + coin(52, 120, 6) + coin(64, 120, 6) + coin(22, 110, 6) + coin(34, 110, 6) + coin(46, 110, 6) + coin(58, 110, 6) + coin(28, 100, 6) + coin(40, 100, 6) + coin(52, 100, 6) +
    rect(116, 16, 76, 30, WH) + rect(142, 98, 18, 28, PK) + rect(146, 92, 10, 8, WH),
    T(154, 36, 13, "药水 99999", "middle") + T(154, 72, 13, "钱多得没意义", "middle"));

  /* ===== 第 3 节：发明故事（经济） ===== */
  add("c15_d2", "金币在两个火柴人之间被推开，他们改用一枚戒指来交易",
    ground + person(44, 68, { s: 0.9, arms: "hold", face: "flat", look: 1 }) + person(156, 68, { s: 0.9, arms: "hold", face: "smile", look: -1 }) +
    coin(30, 40, 5) + coin(44, 40, 5) + coin(58, 40, 5) + circ(156, 46, 9, Y) + circ(156, 35, 4, PK) +
    path("M76 92 H124", "none", 'stroke-width="3"') + path("M126 92 l-9 -4 v8z", INK, 'stroke="none"'),
    T(100, 18, 13, "金币不值钱，戒指当通货", "middle"));

  add("c15_castronova", "戴眼镜的学者指着柱状图，把游戏世界当成一个真正的经济体来计算",
    person(40, 63, { arms: "point", glasses: true, face: "smile" }) +
    rect(96, 30, 94, 74, WH) + rect(108, 68, 14, 30, BL) + rect(130, 52, 14, 46, GR) + rect(152, 42, 14, 56, Y) + rect(170, 78, 10, 20, PK),
    T(143, 122, 13, "人均产出", "middle") + T(100, 18, 13, "把游戏世界当真经济来算", "middle"));

  add("c15_sinks", "修理费、拍卖行手续费、消耗品三个出水口，把多余的金币都引到下水道里",
    path("M20 90 H180 L124 110 H76 Z", BL) + rect(92, 110, 16, 16, "#9aa0ad") +
    path("M18 56 h34 l-6 -10 h-22 z", "#9aa0ad") + rect(26, 56, 18, 10, "#9aa0ad") +
    rect(84, 40, 32, 22, Y) + path("M150 42 h20 v8 q8 4 4 14 h-28 q-4 -10 4 -14 z", PK) + coin(106, 76, 3) + coin(35, 76, 3) + coin(160, 76, 3),
    T(35, 36, 13, "修理费", "middle") + T(100, 32, 13, "手续费", "middle") + T(160, 34, 13, "消耗品", "middle"));

  /* ===== 第 4 节：反馈循环、损失厌恶 ===== */
  add("c15_loops", "左边一个雪球滚下坡越滚越大，右边温度计偏高就自动调低：一个是强化循环，一个是平衡循环",
    path("M6 54 L96 108", "none", 'stroke-width="3"') + circ(24, 56, 6, WH) + circ(50, 74, 10, WH) + circ(84, 92, 16, WH) +
    rect(144, 30, 12, 56, WH) + rect(146, 54, 8, 32, RD, 'stroke="none"') + circ(150, 94, 10, RD) +
    path("M172 50 q14 6 0 18", "none", 'stroke-width="3"') + path("M172 70 l-8 -3 5 -6z", INK, 'stroke="none"'),
    T(48, 22, 13, "越滚越大", "middle") + T(150, 22, 13, "自动稳住", "middle") + T(50, 132, 13, "强化循环", "middle") + T(150, 132, 13, "平衡循环", "middle"));

  add("c15_taxed", "左边的火柴人看着一枚金币被拿走，难过得皱眉；右边的火柴人得到同样的一枚金币，只是点点头",
    ground + person(50, 60, { face: "sad", arms: "hold", look: 1 }) + coin(88, 52, 6) + path("M88 44 V30", "none", 'stroke-width="2.5"') + path("M88 28 l-4 7 8 0z", INK, 'stroke="none"') +
    person(150, 60, { face: "flat", arms: "hold", look: -1 }) + coin(118, 46, 6) + path("M118 54 V68", "none", 'stroke-width="2.5"') + path("M118 70 l-4 -7 8 0z", INK, 'stroke="none"'),
    T(50, 20, 14, "-100 好痛", "middle") + T(150, 20, 14, "+100 嗯", "middle"));

  /* ===== 第 5 节：享乐适应 ===== */
  add("c15_treadmill", "火柴人在跑步机上拼命地跑，前面的星星始终和他保持同样的距离",
    ground + person(76, 52, { legs: "run", arms: "up", face: "smile", s: 0.9, look: 1 }) + path("M34 112 H132 L140 120 H26 Z", "#9aa0ad") + path("M30 112 V90 H34", "none", 'stroke-width="3"') +
    path("M168 40 l4 10 11 1 -8 7 3 11 -10 -6 -10 6 3 -11 -8 -7 11 -1z", GD),
    T(150, 98, 13, "永远差一点", "middle"));

  add("c15_meal", "同一盘菜：第一天火柴人吃得眼睛发亮，第七天只是面无表情地吃",
    path("M100 14 V126", "none", 'stroke-dasharray="4 5" stroke-width="2.5"') + ground +
    person(40, 72, { s: 0.85, arms: "hold", face: "grin", look: 1 }) + circ(72, 98, 8, WH) + circ(72, 96, 3, OR) +
    person(144, 72, { s: 0.85, arms: "hold", face: "flat", look: 1 }) + circ(176, 98, 8, WH) + circ(176, 96, 3, OR) +
    path("M18 44 l3 7 7 1 -5 5 2 7 -7 -4 -7 4 2 -7 -5 -5 7 -1z", GD),
    T(50, 18, 13, "第 1 天：哇", "middle") + T(150, 18, 13, "第 7 天：嗯", "middle"));

  add("c15_daily", "日历上三十天都打了勾，火柴人面无表情地点着“领取”，奖励始终是同一份 100 金币",
    rect(10, 26, 100, 80, WH) + path("M10 46 H110", "none") +
    path("M22 58 l4 5 8 -9 M44 58 l4 5 8 -9 M66 58 l4 5 8 -9 M88 58 l4 5 8 -9 M22 78 l4 5 8 -9 M44 78 l4 5 8 -9 M66 78 l4 5 8 -9 M88 78 l4 5 8 -9", "none", 'stroke-width="2.5"') +
    person(160, 75, { s: 0.8, face: "flat", arms: "point", look: -1 }) + coin(138, 108, 6),
    T(60, 20, 13, "第 30 天", "middle") + T(158, 24, 13, "又是 100 金币", "middle"));

  add("c15_purple", "新手举着紫装欢呼，老手随手把同样品质的紫装扔进分解炉",
    path("M100 14 V126", "none", 'stroke-dasharray="4 5" stroke-width="2.5"') + ground +
    person(46, 75, { s: 0.8, arms: "up", face: "shout" }) + path("M44 14 l3 -3 M52 20 l4 -2", "none", 'stroke-width="2.5"') +
    person(144, 75, { s: 0.8, arms: "throw", face: "flat" }) + path("M172 72 L182 98", "none", 'stroke-width="5"') + rect(170, 100, 22, 24, "#9aa0ad"),
    T(50, 18, 13, "新手：紫装！", "middle") + T(150, 18, 13, "老手：拆了", "middle"));

  add("c15_more", "反例：奖励一次比一次翻倍，一堆越来越高的金币柱子，旁边的火柴人表情始终没变",
    ground + rect(18, 110, 20, 10, GD) + rect(48, 100, 20, 20, GD) + rect(78, 80, 20, 40, GD) + rect(108, 40, 20, 80, GD) +
    person(168, 62, { face: "flat", arms: "stand" }),
    T(70, 24, 13, "奖励翻倍再翻倍", "middle") + T(168, 38, 13, "没感觉", "middle"));

  /* ===== 第 6 节：韦伯—费希纳、指数 ===== */
  add("c15_candle", "黑屋子里点一支蜡烛就亮了；大白天点十支蜡烛，几乎看不出区别",
    rect(10, 26, 84, 90, "#6b6f9a") + rect(48, 84, 8, 22, WH) + path("M52 66 q-8 10 0 16 q8 -6 0 -16z", GD) +
    rect(106, 26, 84, 90, "#bfe6ff") + rect(114, 92, 4, 14, WH) + rect(126, 92, 4, 14, WH) + rect(138, 92, 4, 14, WH) + rect(150, 92, 4, 14, WH) + rect(162, 92, 4, 14, WH) +
    path("M116 84 l2 6 -4 0z M128 84 l2 6 -4 0z M140 84 l2 6 -4 0z M152 84 l2 6 -4 0z M164 84 l2 6 -4 0z", GD),
    T(52, 20, 13, "一支就亮", "middle") + T(148, 20, 13, "十支也没差", "middle") + T(100, 132, 13, "感受看的是比例", "middle"));

  add("c15_lily", "池塘里的睡莲每天翻一倍：第二十八天占四分之一，第二十九天占一半，第三十天铺满",
    circ(34, 70, 26, BL) + path("M34 70 L34 44 A26 26 0 0 1 60 70 Z", GR) +
    circ(100, 70, 26, BL) + path("M100 44 A26 26 0 0 1 100 96 Z", GR) +
    circ(166, 70, 26, GR) + path("M154 62 q6 -6 12 0 M170 78 q6 -6 12 0", "none", 'stroke-width="2"'),
    T(100, 18, 13, "每天翻一倍", "middle") + T(34, 120, 13, "第 28 天", "middle") + T(100, 120, 13, "第 29 天", "middle") + T(166, 120, 13, "第 30 天", "middle"));

  /* ===== 第 7 节：幂律 ===== */
  add("c15_bar", "酒吧里六个普通人和一位身边堆着金币的亿万富翁：平均财富很高，却没有一个普通人是平均",
    person(20, 94, { s: 0.4, face: "flat" }) + person(40, 94, { s: 0.4, face: "flat" }) + person(60, 94, { s: 0.4, face: "flat" }) +
    person(80, 94, { s: 0.4, face: "flat" }) + person(100, 94, { s: 0.4, face: "flat" }) +
    person(164, 56, { face: "grin", cape: true }) + coin(130, 106, 6) + coin(142, 106, 6) + coin(136, 95, 6) + coin(188, 106, 6),
    T(60, 76, 13, "99 个普通人", "middle") + T(164, 30, 13, "亿万富翁", "middle") + T(100, 135, 12, "平均财富很高，没人是平均", "middle"));

  add("c15_pareto", "帕累托先生指着墙上一条先陡后平的曲线：高收入的人很少",
    person(40, 58, { arms: "point", beard: true, face: "flat" }) +
    rect(96, 16, 92, 70, WH) + path("M104 24 Q112 74 130 78 T182 82", "none", 'stroke-width="3.5"'),
    T(142, 104, 13, "高收入者很少", "middle") + T(40, 26, 13, "1896", "middle"));

  add("c15_juran", "戴安全帽的质量管理员拿着清单，面前的柱状图只有最高的几根值得先修",
    rect(14, 40, 18, 80, RD) + rect(36, 80, 18, 40, OR) + rect(58, 100, 14, 20, Y) + rect(76, 108, 12, 12, GR) + rect(92, 114, 10, 6, GR) +
    person(152, 63, { arms: "hold", hat: "cap", face: "smile", look: -1 }),
    T(52, 26, 13, "关键的少数", "middle") + T(150, 26, 13, "有用的多数", "middle"));

  add("c15_tail", "书店的销量柱状图：左边只有三本热门书很高，右边是一条几乎拖不完的细长冷门书",
    rect(12, 50, 20, 70, PK) + rect(34, 76, 20, 44, BL) + rect(56, 90, 18, 30, Y) +
    rect(78, 108, 8, 12, GR) + rect(88, 110, 8, 10, GR) + rect(98, 111, 8, 9, GR) + rect(108, 112, 8, 8, GR) + rect(118, 113, 8, 7, GR) + rect(128, 114, 8, 6, GR) + rect(138, 115, 8, 5, GR) + rect(148, 116, 8, 4, GR) + rect(158, 116, 8, 4, GR) + rect(168, 117, 8, 3, GR) + rect(178, 117, 8, 3, GR),
    T(50, 28, 13, "热门很少", "middle") + T(140, 96, 13, "冷门极多", "middle"));

  /* ===== 第 8 节：边际效用 ===== */
  add("c15_buffet", "自助餐的三盘菜：第一盘吃得开心，第二盘还行，第四盘只是不想浪费",
    circ(34, 84, 24, WH) + circ(26, 80, 5, OR) + circ(40, 78, 5, GR) + circ(34, 94, 5, PK) +
    circ(100, 84, 24, WH) + circ(94, 84, 5, OR) + circ(108, 90, 5, GR) +
    circ(166, 84, 24, WH) + circ(166, 86, 4, OR) +
    face(34, 36, 11, "smile") + face(100, 36, 11, "flat") + face(166, 36, 11, "sad"),
    T(34, 130, 13, "第 1 盘", "middle") + T(100, 130, 13, "第 2 盘", "middle") + T(166, 130, 13, "第 4 盘", "middle"));
})();
