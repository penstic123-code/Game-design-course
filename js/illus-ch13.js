/* 第 13 章插图包：可访问性（火柴人风） */
(function () {
  const { person, ground, SK, INK } = window.illusKit;
  const Y = "#ffe58a", PK = "#ffb3c6", BL = "#a8dcf0", GR = "#b6e8a8", PU = "#d8c8ff", OR = "#ffc078", WH = "#fff", RD = "#ff9b9b", GY = "#cfd3dc";
  const rect = (x, y, w, h, fill, ex) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (fill || WH) + '" ' + (ex || "") + "/>";
  const circ = (x, y, r, fill, ex) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (fill || WH) + '" ' + (ex || "") + "/>";
  const ell = (x, y, rx, ry, fill, ex) => '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry + '" fill="' + (fill || WH) + '" ' + (ex || "") + "/>";
  const path = (d, fill, ex) => '<path d="' + d + '" fill="' + (fill || "none") + '" ' + (ex || "") + "/>";
  const poly = (pts, fill, ex) => '<polygon points="' + pts + '" fill="' + (fill || WH) + '" ' + (ex || "") + "/>";
  let TX = [];
  const tx = (x, y, s, t, a) => { TX.push('<text x="' + x + '" y="' + y + '" font-size="' + s + '" text-anchor="' + (a || "middle") + '" fill="' + INK + '" stroke="none">' + t + "</text>"); return ""; };
  const bub = (x, y, t, s) => { s = s || 13; const n = Array.from(t).reduce((a, c) => a + (c.charCodeAt(0) > 255 ? 1 : 0.55), 0); const rx = n * s / 2 + 11, ry = s / 2 + 10; tx(x, y + s * 0.36, s, t); return ell(x, y, rx, ry, WH); };
  const fin = () => { const r = TX.join(""); TX = []; return r; };
  const add = (n, alt, body) => illusAdd(n, alt, body, fin());
  const wave = (x, y, k) => path("M" + x + " " + (y - 8 * k) + " q" + (7 * k) + " " + (8 * k) + " 0 " + (16 * k) + " M" + (x + 8 * k) + " " + (y - 14 * k) + " q" + (12 * k) + " " + (14 * k) + " 0 " + (28 * k), "none", 'stroke-width="2.6"');
  const spk = (x, y) => poly(x + "," + (y + 6) + " " + (x + 8) + "," + (y + 6) + " " + (x + 18) + "," + y + " " + (x + 18) + "," + (y + 28) + " " + (x + 8) + "," + (y + 22) + " " + x + "," + (y + 22), Y);
  /* 坐轮椅的人：x 为人头中心，yb 为地面/路面 y */
  const chair = (x, yb, o) => { const d = o && o.look < 0 ? -1 : 1, hip = yb - 30; return person(x, yb - 67, Object.assign({ legs: "none", look: 1 }, o || {})) +
    path("M" + (x - 14 * d) + " " + (hip - 26) + " V" + (hip + 2) + " H" + (x + 14 * d) + " M" + x + " " + (hip + 2) + " L" + (x + 15 * d) + " " + (hip + 2) + " L" + (x + 15 * d) + " " + (hip + 15) + " L" + (x + 20 * d) + " " + (hip + 15), "none", 'stroke-width="3"') + circ(x, yb - 12, 12, WH, 'fill-opacity="0.35"'); };
  const ears = (x, y, s) => { s = s || 1; const sy = y + 11 * s + 4 * s, ey = y + 2 * s, d = 12.5 * s; return path("M" + x + " " + sy + " L" + (x - 15 * s) + " " + (sy - 6 * s) + " L" + (x - d) + " " + ey + " M" + x + " " + sy + " L" + (x + 15 * s) + " " + (sy - 6 * s) + " L" + (x + d) + " " + ey, "none", 'stroke-width="2.4"') + circ(x - d, ey, 3.2 * s, SK) + circ(x + d, ey, 3.2 * s, SK); };

  /* ===== 配图 ===== */
  add("c13_stairs", "左边：轮椅使用者被一段楼梯挡在门外；右边：同一个地方换成了缓坡，他可以直接上去。障碍在环境里，不在人身上",
    ground + path("M100 14 V126", "none", 'stroke-dasharray="4 5" stroke-width="2.5"') +
    chair(36, 126) + poly("66,126 66,108 78,108 78,92 90,92 90,76 98,76 98,126", GY) +
    poly("116,126 190,96 190,126", GY) + chair(142, 114) +
    tx(50, 24, 13, "楼梯：上不去") + tx(150, 24, 13, "坡道：上得去"));
  add("c13_veil", "设计师站在一块幕布前：幕布后面站着三个看不清脸的人，每个人头上都是问号，其中一个就是将来的他自己",
    ground + person(34, 63, { arms: "chin", face: "flat" }) + bub(62, 20, "我不知道我是谁", 13) +
    rect(104, 42, 88, 70, PU) + circ(124, 64, 9, WH) + circ(148, 64, 9, WH) + circ(172, 64, 9, WH) +
    path("M124 73 V98 M148 73 V98 M172 73 V98", "none") + tx(124, 69, 13, "?") + tx(148, 69, 13, "?") + tx(172, 69, 13, "?"));
  add("c13_load", "火柴人头顶同时飞来地图、血条、敌人、提示四个球，他举起双手手忙脚乱：同时要处理的东西太多了",
    ground + person(100, 63, { arms: "up", face: "wide" }) +
    circ(32, 30, 20, BL) + circ(78, 22, 20, RD) + circ(124, 22, 20, Y) + circ(170, 30, 20, GR) +
    tx(32, 35, 13, "地图") + tx(78, 27, 13, "血条") + tx(124, 27, 13, "敌人") + tx(170, 35, 13, "提示"));

  /* ===== 第 1 节：例子 ===== */
  add("c13_onehand", "永久障碍：一位只有一只手的玩家面对一堵墙，游戏要求同时按住四个键，他怎么也够不着",
    ground + person(50, 63, { arms: "none", face: "flat" }) + path("M50 78 L68 90 L74 84", "none") + rect(100, 52, 14, 74, GY) +
    rect(126, 112, 14, 14, WH) + rect(144, 112, 14, 14, WH) + rect(162, 112, 14, 14, WH) + rect(180, 112, 14, 14, WH) + bub(146, 28, "要按 4 个键", 13));
  add("c13_cast", "暂时障碍：右臂打着石膏的火柴人面对只能用键盘加鼠标的游戏，键盘在桌上，他只能单手笨拙地够",
    ground + person(62, 63, { face: "sad", arms: "desk" }) + path("M71 91 L84 100", "none", 'stroke-width="10"') + path("M71 91 L84 100", "none", 'stroke="#fff" stroke-width="5"') +
    path("M90 102 H190 M96 102 V126 M184 102 V126", "none", 'stroke-width="4"') + rect(112, 92, 60, 10, WH) +
    '<path d="M118 97 h6 M128 97 h6 M138 97 h6 M148 97 h6 M158 97 h6" fill="none" stroke-width="3"/>' + bub(142, 32, "石膏三周", 13));
  add("c13_night", "情境障碍：深夜的卧室里孩子睡着了，火柴人不敢开声音玩游戏，扬声器被划掉了",
    ground + rect(112, 88, 80, 38, PU) + circ(132, 82, 9, WH) + tx(160, 74, 14, "Zzz") +
    person(54, 63, { arms: "hold", face: "flat" }) + rect(76, 76, 20, 28, BL) + spk(104, 22) + path("M98 56 L134 20", "none", 'stroke="#e5484d" stroke-width="4"') + bub(48, 22, "声音不能开", 13));
  add("c13_cbmode", "反例：所谓的“色盲模式”只是把原来的红和绿换成更鲜艳的红和绿，信息还是只靠红绿两种颜色",
    rect(8, 34, 84, 62, "#fff7cf") + rect(108, 34, 84, 62, "#fff7cf") + circ(34, 66, 12, RD) + circ(66, 66, 12, GR) + circ(134, 66, 12, "#ff3b3b") + circ(166, 66, 12, "#2ecc40") +
    path("M95 66 H105 M100 62 L105 66 L100 70", "none", 'stroke-width="2.5"') + tx(50, 24, 13, "原来") + tx(150, 24, 13, "“色盲模式”") + tx(100, 124, 13, "还是只靠红和绿"));

  /* ===== 第 2 节：多通道冗余 ===== */
  add("c13_redundant", "敌人从左后方接近时，屏幕左边缘出现箭头、扬声器传出脚步声、手柄左侧震动，三条通道同时报信",
    rect(10, 16, 88, 60, "#e8f6fc") + poly("20,46 36,36 36,56", OR) + tx(54, 96, 13, "边缘箭头") +
    spk(126, 12) + wave(150, 28, 1) + tx(140, 62, 13, "脚步声") +
    rect(112, 76, 64, 28, GR) + path("M104 84 v12 M98 88 v4", "none", 'stroke-width="2.6"') + tx(144, 124, 13, "左侧震动"));
  add("c13_signal", "过马路的人行信号灯同时亮绿灯小人并发出滴滴声，看不见的人听得到，听不见的人看得到",
    ground + person(36, 63, { arms: "wave", face: "smile", look: 1 }) + rect(120, 22, 42, 104, GY) + rect(128, 30, 26, 38, "#444") +
    circ(141, 42, 6, GR) + path("M141 48 V58 M135 52 H147 M141 58 L136 64 M141 58 L146 64", "none", 'stroke="#b6e8a8" stroke-width="2.5"') + wave(170, 52, 1) + bub(70, 22, "灯和声音同时有", 13));
  add("c13_hponly", "反例：低血量只靠屏幕边缘闪红光提示，火柴人色觉不同，什么也看不出来，一脸茫然",
    ground + person(38, 70, { s: 0.85, face: "flat", arms: "chin" }) + bub(46, 22, "看不出来？", 13) +
    rect(88, 34, 104, 74, "#f4f4ee", 'stroke="#e5484d" stroke-width="7"') + tx(140, 76, 13, "只有红光"));

  /* ===== 第 4 节：路缘石效应 ===== */
  add("c13_curb", "为轮椅做的路缘石坡道，同时让推婴儿车的、拖行李箱的人也顺利地从人行道走到马路上",
    path("M6 100 H80 L116 118 H194", "none", 'stroke-width="4"') +
    rect(12, 66, 26, 16, BL) + circ(20, 93, 6, WH) + circ(34, 93, 6, WH) + path("M12 66 l-6 -10", "none") +
    rect(54, 72, 22, 28, OR) + path("M60 72 v-8 h10 v8", "none") + chair(150, 118) +
    tx(24, 48, 13, "婴儿车") + tx(66, 56, 13, "行李箱") + tx(150, 30, 13, "轮椅"));
  add("c13_caption", "嘈杂的酒吧里，火柴人听不清电视声音，只能靠电视下方的字幕看懂节目",
    ground + person(46, 63, { arms: "none", face: "o", look: 1 }) + ears(46, 63) + bub(56, 20, "太吵了！", 13) +
    rect(100, 100, 92, 26, OR) + rect(106, 38, 80, 62, WH) + rect(112, 72, 68, 20, Y) + tx(146, 87, 13, "字幕"));
  add("c13_tactile", "差一点就对：坡道把路缘抹平了，拿盲杖的人摸不到路边在哪，需要再加一块触感地砖补上",
    ground + person(50, 63, { face: "flat", arms: "point", look: 1 }) + path("M80 74 L96 122", "none", 'stroke-width="3"') + poly("92,126 120,100 120,126", GY) + rect(120, 100, 72, 26, GY) +
    rect(130, 106, 36, 12, Y) + circ(138, 112, 2, INK) + circ(148, 112, 2, INK) + circ(158, 112, 2, INK) + tx(160, 92, 13, "触感地砖") + bub(100, 22, "边缘被抹平了", 13));

  /* ===== 第 7 节 ===== */
  add("c13_braille", "电梯按键上有凸起的盲文点，黑暗中伸手去摸的人也能找到楼层",
    ground + person(84, 63, { arms: "point", face: "smile", look: 1 }) + rect(116, 16, 58, 104, GY) +
    circ(145, 38, 11, WH) + circ(145, 68, 11, WH) + circ(145, 98, 11, WH) +
    circ(141, 36, 1.8, INK) + circ(149, 36, 1.8, INK) + circ(141, 66, 1.8, INK) + circ(149, 70, 1.8, INK) + circ(141, 96, 1.8, INK) + circ(149, 100, 1.8, INK) + bub(64, 20, "盲文也摸得到", 13));
  add("c13_locked", "反例：打开“辅助模式”后，成就奖杯被一把锁锁住了，选项虽然有，用了却被惩罚",
    rect(8, 22, 88, 60, "#e8f6fc") + tx(52, 44, 13, "辅助模式") + rect(26, 54, 52, 18, GR) + circ(66, 63, 6, WH) +
    path("M100 52 H118 M112 46 L118 52 L112 58", "none", 'stroke-width="2.5"') +
    poly("128,26 184,26 176,62 136,62", Y) + path("M128 34 q-12 2 -6 14 q4 4 12 4 M184 34 q12 2 6 14 q-4 4 -12 4", "none") + rect(146, 52, 24, 20, GY) + path("M151 52 v-6 q7 -8 14 0 v6", "none") +
    tx(156, 98, 13, "成就锁定"));

  /* ===== 时间线 ===== */
  add("c13_tl_kala", "一位坐轮椅的人来到路口，人行道的边被切出了一个缓坡",
    path("M6 104 H100 L130 122 H194", "none", 'stroke-width="4"') + chair(46, 104, { hat: "cap" }) + tx(150, 78, 13, "路口切个坡"));
  add("c13_tl_ed", "一位躺在铁肺里的人，头露在圆筒外面，旁边写着加州大学伯克利",
    ground + rect(44, 60, 108, 46, GY, 'rx="14"') + circ(32, 84, 12, WH) + circ(30, 82, 1.8, INK) + circ(38, 82, 1.8, INK) + path("M28 89 q4 3 8 0", "none", 'stroke-width="2"') + tx(100, 88, 15, "铁肺") + path("M60 106 v20 M136 106 v20", "none") + tx(100, 34, 14, "加州大学伯克利"));
  add("c13_tl_berk", "一张城市地图上，十字路口的四个角都标了橙色小点，表示这些街角被改成了缓坡",
    rect(14, 12, 172, 92, "#fff7cf") + path("M14 58 H186 M64 12 V104 M136 12 V104", "none", 'stroke-width="3"') +
    circ(52, 46, 4, OR) + circ(76, 46, 4, OR) + circ(52, 70, 4, OR) + circ(76, 70, 4, OR) + circ(124, 46, 4, OR) + circ(148, 46, 4, OR) + circ(124, 70, 4, OR) + circ(148, 70, 4, OR) + tx(100, 126, 14, "街角切坡"));
  add("c13_tl_ada", "一群人举着标语走上街头，要求公共场所和交通对所有人开放",
    ground + rect(8, 10, 54, 26, WH) + rect(72, 10, 56, 26, Y) + rect(138, 10, 54, 26, WH) +
    tx(35, 28, 13, "平等") + tx(100, 28, 13, "无障碍") + tx(165, 28, 13, "ADA") +
    path("M35 36 V86 M100 36 V86 M165 36 V86", "none") + person(35, 88, { s: 0.6, arms: "up", face: "grin" }) + person(100, 88, { s: 0.6, arms: "up", face: "shout" }) + person(165, 88, { s: 0.6, arms: "up", face: "grin" }));
  add("c13_tl_blackwell", "一篇文章居中，箭头指向四周的婴儿车、行李箱、轮椅、自行车：为一类人做的设计惠及所有人",
    rect(70, 16, 60, 90, WH) + tx(100, 54, 14, "路缘石") + tx(100, 76, 14, "效应") + tx(26, 58, 12, "婴儿车") + tx(26, 114, 12, "行李箱") + tx(174, 58, 12, "轮椅") + tx(174, 114, 12, "自行车") +
    circ(26, 36, 11, BL) + circ(26, 92, 11, OR) + circ(174, 36, 11, GR) + circ(174, 92, 11, PK) +
    path("M38 40 L68 52 M38 88 L68 72 M162 40 L132 52 M162 88 L132 72", "none", 'stroke-width="2.6"'));
  add("c13_tl_french", "电视上正在播做菜节目，画面下方烧着一行永远显示的字幕",
    rect(36, 14, 128, 86, WH) + circ(88, 40, 10, WH) + circ(100, 32, 11, WH) + circ(112, 40, 10, WH) + rect(88, 46, 24, 12, WH) +
    rect(46, 68, 108, 20, Y) + tx(100, 83, 13, "烧进画面") + rect(70, 100, 60, 8, GY) + tx(100, 128, 13, "所有人都看得到"));
  add("c13_tl_nci", "一个火柴人拿着喇叭向几家电视台喊话，请他们一起做字幕",
    ground + person(36, 63, { arms: "throw", face: "grin" }) + poly("66,56 92,46 92,70", Y) + bub(60, 20, "一起做字幕", 13) +
    rect(120, 34, 30, 24, WH) + rect(158, 34, 30, 24, WH) + rect(120, 68, 30, 24, WH) + rect(158, 68, 30, 24, WH) + tx(154, 112, 13, "电视台"));
  add("c13_tl_cc", "遥控器上有一个字幕键，按一下，电视画面下方才显示字幕",
    rect(16, 20, 108, 74, WH) + rect(24, 62, 92, 20, Y) + tx(70, 77, 13, "字幕") + rect(50, 94, 40, 8, GY) +
    rect(142, 36, 44, 34, GR) + tx(164, 58, 13, "CC") + path("M138 53 H128 M134 48 L128 53 L134 58", "none", 'stroke-width="2.5"') + tx(164, 94, 13, "开关"));
  add("c13_tl_decoder", "电视机里面装上了一块小小的解码芯片，旁边写着十三英寸",
    rect(20, 28, 106, 74, WH) + rect(30, 70, 86, 18, Y) + tx(73, 84, 13, "字幕") + rect(50, 102, 46, 8, GY) + tx(73, 20, 13, "13 英寸以上") +
    rect(148, 40, 36, 36, GY) + path("M156 40 v-8 M166 40 v-8 M176 40 v-8 M156 76 v8 M166 76 v8 M176 76 v8", "none", 'stroke-width="3"') + path("M146 58 H130 M136 52 L130 58 L136 64", "none", 'stroke-width="2.5"') + tx(166, 108, 13, "内置"));
  add("c13_tl_able", "一位朋友的手颤抖着握不稳鼠标，火柴人为他准备了一个大按钮",
    ground + person(46, 63, { arms: "desk", face: "sad", look: 1 }) + rect(16, 96, 100, 8, OR) + path("M24 104 V126 M108 104 V126", "none", 'stroke-width="4"') + ell(78, 92, 8, 5, WH) + path("M68 74 l3 -5 l3 5 l3 -5 l3 5", "none", 'stroke-width="2"') +
    rect(138, 102, 48, 24, PK) + circ(162, 114, 9, RD) + tx(162, 92, 13, "大按钮"));
  add("c13_tl_gag", "一张清单分成三档：基础、中级、高级，让开发者知道先做哪些",
    rect(14, 12, 172, 32, "#eaf9e4") + rect(14, 50, 172, 32, "#fff7cf") + rect(14, 88, 172, 32, "#ffe9ef") +
    tx(100, 33, 14, "基础：最该先做") + tx(100, 71, 14, "中级：再往深走") + tx(100, 109, 14, "高级：锦上添花"));
  add("c13_tl_xac", "一块大大的手柄，只有两个特别大的按钮，四周有很多插孔，可以接上各种外设",
    rect(26, 40, 148, 64, GY, 'rx="10"') + circ(70, 78, 20, RD) + circ(130, 78, 20, BL) + circ(48, 52, 3, INK) + circ(80, 50, 3, INK) + circ(112, 50, 3, INK) + circ(152, 50, 3, INK) + tx(100, 24, 13, "接口多，按键大"));
  add("c13_tl_tlou", "一个戴耳机的火柴人面对一页长长的设置菜单，里面有六十多项无障碍选项",
    path("M6 126 H72", "none", 'stroke-dasharray="2 7" stroke-width="3"') + person(40, 63, { face: "smile", look: 1 }) + path("M26 59 q14 -22 28 0", "none", 'stroke-width="3.5"') + rect(22, 55, 8, 14, PK) + rect(50, 55, 8, 14, PK) +
    rect(86, 12, 104, 100, "#e8f6fc") + rect(98, 24, 44, 14, GR) + circ(134, 31, 5, WH) + rect(98, 54, 44, 14, GR) + circ(134, 61, 5, WH) + rect(98, 84, 44, 14, "#ddd") + circ(106, 91, 5, WH) +
    rect(150, 26, 30, 10, "#ddd") + rect(150, 56, 30, 10, "#ddd") + rect(150, 86, 30, 10, "#ddd") + tx(138, 130, 13, "60 多项设置"));
})();
