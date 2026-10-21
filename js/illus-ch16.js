/* 第 16 章插图包：进度与成长（火柴人风） */
(function () {
  const { person, ground, T, SK, INK } = window.illusKit;
  const Y = "#ffe58a", PK = "#ffb3c6", BL = "#a8dcf0", GR = "#b6e8a8", PU = "#d8c8ff", OR = "#ffc078", WH = "#fff", RD = "#ff9b9b", GD = "#ffd34d";
  const rect = (x, y, w, h, fill, ex) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (fill || WH) + '" ' + (ex || "") + "/>";
  const circ = (x, y, r, fill) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (fill || WH) + '"/>';
  const path = (d, fill, ex) => '<path d="' + d + '" fill="' + (fill || "none") + '" ' + (ex || "") + "/>";
  const dot = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="1.8" fill="' + INK + '" stroke="none"/>';
  const head = (d) => path(d, INK, 'stroke="none"');
  const star = (x, y, c) => path("M" + x + " " + (y - 8) + " l2.4 5.6 6 .6 -4.6 4 1.4 6 -5.2 -3.2 -5.2 3.2 1.4 -6 -4.6 -4 6 -.6z", c || GD);
  const add = illusAdd;

  /* ===== 五种成长：例子 ===== */
  add("c16_loot", "火柴人打开宝箱，里面飞出紫色、橙色、绿色的装备，亮光向四周散开",
    ground + rect(70, 96, 60, 30, OR) + path("M70 96 Q100 70 130 96 Z", "#e6a35a") + rect(94, 100, 12, 12, Y) +
    person(32, 63, { arms: "up", face: "shout" }) +
    path("M84 80 L58 40 M100 76 V30 M116 80 L146 40", "none", 'stroke-width="2.5" stroke-dasharray="5 5"') +
    path("M54 40 h12 l-2 -8 h-8z", PU) + rect(94, 22, 12, 10, OR) + circ(150, 38, 7, GR),
    T(164, 100, 13, "掉了！", "middle"));

  add("c16_ability", "一道断崖挡在前面，火柴人拿到钩爪后一钩就荡到对面的高台",
    ground + path("M6 126 V84 H60 V126", GR) + path("M130 126 V54 H194 V126", GR) +
    person(36, 22, { s: 0.7, arms: "throw", face: "grin", legs: "stand" }) +
    path("M52 40 Q96 18 140 50", "none", 'stroke-width="2.5" stroke-dasharray="5 4"') + circ(140, 50, 4, GD),
    T(95, 112, 13, "新能力", "middle"));

  add("c16_bike", "孩子第一次骑上自行车，身后的地上用粉笔画着一条一百米的线",
    ground + circ(60, 106, 16, WH) + circ(112, 106, 16, WH) + path("M60 106 L82 80 L112 106 M82 80 H100 L112 106 M72 74 H84", "none", 'stroke-width="3.5"') +
    person(86, 48, { s: 0.7, arms: "none", legs: "none", face: "grin" }) + path("M86 61 L102 70 L104 78 M104 78 L108 72 h8 M86 74 L98 90 L90 104 M86 74 L78 92 L84 106", "none", 'stroke-width="2.2"') + path("M170 100 V126", "none", 'stroke-width="3"'),
    T(168, 90, 13, "100 米", "middle") + T(100, 20, 13, "自己变熟练了", "middle"));

  add("c16_numbers", "反例：一级时打一只怪要十下，五十级时数字大了一万倍，却还是要打十下",
    ground + path("M100 50 V126", "none", 'stroke-dasharray="4 5" stroke-width="2.5"') +
    person(40, 74, { s: 0.8, arms: "throw", face: "flat" }) + '<ellipse cx="80" cy="114" rx="14" ry="10" fill="' + GR + '"/>' +
    person(140, 74, { s: 0.8, arms: "throw", face: "flat" }) + '<ellipse cx="180" cy="114" rx="14" ry="10" fill="' + GR + '"/>',
    T(50, 20, 13, "1 级：10 下", "middle") + T(150, 20, 13, "50 级：10 下", "middle") + T(100, 40, 13, "数字变了，玩法没变", "middle"));

  /* ===== 经验曲线：例子 ===== */
  add("c16_stairs", "台阶一级比一级高，火柴人爬前几级很轻快，越往上越要抬腿使劲",
    ground + path("M20 126 V108 H50 V90 H80 V70 H110 V46 H140 V16 H170 V126", GR) +
    person(124, 11, { s: 0.55, legs: "walk", face: "smile" }),
    T(46, 44, 13, "越往上越高", "middle"));

  add("c16_streak", "语言学习软件的打卡等级：第一级三天，第二级七天，第三级十四天，间隔越来越长",
    circ(30, 80, 15, Y) + circ(90, 80, 15, OR) + circ(150, 80, 15, PK) +
    path("M45 80 H75 M105 80 H135", "none", 'stroke-width="3"') + star(30, 80) + star(90, 80) + star(150, 80),
    T(30, 118, 13, "3 天", "middle") + T(90, 118, 13, "7 天", "middle") + T(150, 118, 13, "14 天", "middle") + T(100, 36, 13, "新手快，老手稳", "middle"));

  add("c16_scaling", "反例：火柴人升到二十级，面前的史莱姆也跟着长大，体型和以前一样让人头疼",
    ground + person(34, 74, { s: 0.8, arms: "throw", face: "sad" }) + '<ellipse cx="136" cy="94" rx="46" ry="30" fill="' + GR + '"/>' + dot(122, 88) + dot(150, 88) + path("M128 100 q8 5 16 0", "none", 'stroke-width="2.4"'),
    T(34, 56, 13, "我 20 级", "middle") + T(136, 44, 13, "它也 20 级", "middle"));

  /* ===== 重置与元进度 ===== */
  add("c16_prestige", "火柴人爬到山顶后选择归零，带着一个永久加成的徽章回到山脚，第二次爬得更快",
    ground + path("M20 126 L100 30 L180 126", GR) + path("M100 30 l8 -2 -4 -10 -8 6", RD) +
    person(52, 59, { s: 0.45, legs: "walk", face: "smile" }) + circ(30, 44, 10, GD) +
    path("M96 30 Q60 14 42 38", "none", 'stroke-width="2.5" stroke-dasharray="5 4"'),
    T(100, 14, 13, "归零", "middle") + T(30, 24, 13, "永久 ×2", "middle"));

  add("c16_meta", "一局失败后墓碑前飘出一把钥匙，钥匙指向一扇写着新角色的门",
    ground + path("M30 126 V80 Q30 60 50 60 Q70 60 70 80 V126", "#cfd3dc") + path("M44 84 h12 M50 78 v14", "none", 'stroke-width="3"') +
    circ(92, 70, 6, GD) + path("M98 70 H116 M110 70 V78 M116 70 V76", "none", 'stroke-width="3"') +
    rect(136, 56, 46, 70, PK) + circ(170, 94, 3, GD) + person(158, 74, { s: 0.3, face: "smile", legs: "stand" }),
    T(50, 46, 13, "这局输了", "middle") + T(159, 44, 13, "新角色", "middle"));

  add("c16_slower", "反例：归零之后火柴人背着一个小得几乎看不见的加成徽章，爬得比上一轮还慢",
    ground + path("M16 126 L100 36 L184 126", GR) + person(60, 50, { s: 0.45, legs: "walk", face: "sad" }) + circ(30, 44, 5, GD) +
    path("M30 104 q10 -6 22 -4", "none", 'stroke-width="2" stroke-dasharray="3 3"'),
    T(100, 22, 13, "白打了……", "middle") + T(30, 24, 13, "永久 +1%", "middle"));

  /* ===== 技能树 ===== */
  add("c16_goodtree", "火柴人站在三叉路口犹豫：近战、远程、辅助三条路上都有闪光的东西",
    person(100, 60, { s: 0.8, arms: "chin", face: "flat" }) +
    path("M93 48 L42 40 M107 48 L158 40", "none", 'stroke-width="3" stroke-dasharray="4 4"') +
    star(34, 38, PK) + star(100, 38, BL) + star(166, 38, GR),
    T(34, 20, 13, "近战", "middle") + T(100, 20, 13, "远程", "middle") + T(166, 20, 13, "辅助", "middle") + T(100, 134, 13, "每条路都值得走", "middle"));

  add("c16_badtree", "反例：一条宽阔发光的大路通向终点，旁边几条小路都长满了草，没人会选",
    ground + path("M20 112 L180 112 L180 78 L20 78 Z", GD) + path("M30 78 L22 40 M64 78 L56 36 M150 78 L158 40 M180 78 L186 40", "none", 'stroke-width="3" stroke="#7a7f8c"'),
    T(100, 100, 13, "大家都点这条", "middle") + T(100, 24, 13, "旁边的路没人走", "middle"));

  add("c16_prereq", "选课的先修关系：先学高数，才能学线性代数和概率，两门都学完才能选机器学习",
    circ(30, 70, 14, Y) + circ(100, 36, 14, BL) + circ(100, 104, 14, GR) + circ(172, 70, 14, PK) +
    path("M43 63 L88 42 M43 77 L88 98 M113 42 L160 63 M113 98 L160 77", "none", 'stroke-width="3"'),
    T(30, 104, 13, "高数", "middle") + T(100, 16, 13, "线代", "middle") + T(100, 132, 13, "概率", "middle") + T(172, 104, 13, "机器学习", "middle"));

  /* ===== 发明故事时间线 ===== */
  add("c16_chainmail", "桌上摆着一排排小兵人，两个爱好者隔着桌子推着小兵人对战，一场打完就收",
    ground + path("M44 100 H156 M52 100 V126 M148 100 V126", "none", 'stroke-width="4"') +
    circ(50, 92, 5, GR) + circ(66, 92, 5, GR) + circ(82, 92, 5, GR) + circ(118, 92, 5, RD) + circ(134, 92, 5, RD) + circ(150, 92, 5, RD) +
    person(22, 75, { s: 0.8, arms: "point", face: "grin" }) + person(178, 75, { s: 0.8, arms: "point", face: "grin", look: -1 }),
    T(100, 24, 13, "战棋：打完就收", "middle"));

  add("c16_blackmoor", "裁判坐在挡板后面，随口告诉玩家“你升级了”，玩家们高举双手",
    ground + rect(60, 62, 70, 64, OR) + person(95, 40, { s: 0.7, arms: "desk", legs: "none", face: "smile", glasses: true }) +
    person(26, 81, { s: 0.7, arms: "up", face: "shout" }) + person(172, 81, { s: 0.7, arms: "up", face: "shout" }),
    T(100, 24, 13, "“你升级了！”", "middle") + T(95, 112, 13, "杀怪记点数", "middle"));

  add("c16_dnd", "一本厚厚的规则书，旁边立着一架梯子，梯子的横档越往上间隔越大",
    rect(22, 28, 60, 84, PK) + path("M22 28 V112", "none", 'stroke-width="5"') +
    path("M132 112 V20 M168 112 V20", "none", 'stroke-width="4"') + path("M132 100 H168 M132 84 H168 M132 64 H168 M132 40 H168", "none", 'stroke-width="3.5"'),
    T(52, 74, 16, "D&D", "middle") + T(150, 130, 13, "越往上越难", "middle"));

  add("c16_plato", "老式大型机终端的屏幕上滚动着文字，火柴人坐在前面敲键盘",
    rect(92, 18, 86, 54, "#3b3f4f") + rect(99, 25, 72, 40, "#d9f5d0") + rect(88, 72, 94, 8, "#9aa0ad") +
    path("M106 36 H150 M106 46 H160 M106 56 H140", "none", 'stroke-width="2.5"') +
    path("M58 82 H194 M64 82 V126 M188 82 V126", "none", 'stroke-width="3.5"') + person(36, 56, { s: 0.8, arms: "none", legs: "sit", face: "smile" }) + path("M36 70 L52 74 L66 80 M36 72 L50 80", "none", 'stroke-width="2.2"'),
    T(46, 24, 13, "大型主机", "middle") + T(126, 112, 13, "屏幕上的经验值", "middle"));

  add("c16_techtree", "左边是策略游戏的科技树：先研究甲才能研究乙；右边是角色的技能树，节点只多不少",
    path("M100 14 V100", "none", 'stroke-dasharray="4 5" stroke-width="2.5"') +
    rect(36, 36, 28, 16, Y) + rect(14, 76, 28, 16, BL) + rect(58, 76, 28, 16, BL) + path("M50 52 L28 76 M50 52 L72 76", "none", 'stroke-width="3"') +
    rect(136, 36, 28, 16, PK) + rect(112, 76, 22, 16, GR) + rect(140, 76, 22, 16, GR) + rect(168, 76, 22, 16, GR) +
    path("M150 52 L123 76 M150 52 L151 76 M150 52 L179 76", "none", 'stroke-width="3"'),
    T(50, 22, 13, "科技树", "middle") + T(150, 22, 13, "技能树", "middle") + T(100, 122, 13, "前置关系", "middle"));

  /* ===== 为什么成立 ===== */
  add("c16_coffee", "两张洗车店集点卡：一张八格空白，一张十格但已经盖了两个章，后者更快集满",
    rect(10, 34, 82, 50, WH) + rect(108, 34, 82, 50, WH) +
    circ(24, 48, 5, WH) + circ(40, 48, 5, WH) + circ(56, 48, 5, WH) + circ(72, 48, 5, WH) + circ(24, 68, 5, WH) + circ(40, 68, 5, WH) + circ(56, 68, 5, WH) + circ(72, 68, 5, WH) +
    [0, 1, 2, 3, 4].map(function (k) { return circ(121 + k * 15, 48, 4.5, k < 2 ? GD : WH) + circ(121 + k * 15, 68, 4.5, WH); }).join(""),
    T(51, 24, 13, "全是空格", "middle") + T(149, 24, 13, "先送两个章", "middle") + T(100, 112, 13, "看得见的进度，推你一把", "middle"));

  add("c16_monkey", "实验里的猴子：灯亮后果汁如期而至，它很平静；果汁突然多给了一份，它最兴奋",
    path("M100 14 V104", "none", 'stroke-dasharray="4 5" stroke-width="2.5"') +
    circ(46, 84, 18, OR) + circ(28, 70, 6, OR) + circ(64, 70, 6, OR) + dot(40, 82) + dot(52, 82) + path("M40 92 h12", "none", 'stroke-width="2.4"') +
    circ(150, 84, 18, OR) + circ(132, 70, 6, OR) + circ(168, 70, 6, OR) + dot(144, 82) + dot(156, 82) + '<ellipse cx="150" cy="93" rx="4" ry="5" fill="' + INK + '" stroke="none"/>' +
    path("M118 46 l-4 -10 M182 46 l4 -10 M150 52 v-12", "none", 'stroke-width="2.5"'),
    T(46, 32, 13, "早就预料到", "middle") + T(150, 28, 13, "意外加量！", "middle") + T(100, 130, 13, "惊喜才有劲", "middle"));

  add("c16_farm", "火柴人在洞里反复砍同一只老鼠，头顶的经验数字一路飙升，身后的宝箱和路标完全没看见",
    ground + person(40, 60, { arms: "throw", face: "flat" }) + '<ellipse cx="80" cy="116" rx="14" ry="8" fill="#cfd3dc"/>' +
    rect(150, 92, 34, 28, OR) + path("M150 92 Q167 74 184 92 Z", "#e6a35a"),
    T(60, 22, 13, "经验 +1 +1 +1……", "middle") + T(167, 80, 13, "没看见", "middle"));
})();
