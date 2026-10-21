/* 第20章 类型设计套路：专属插图包（火柴人风，viewBox 200×140）。形状进滤镜组，文字放第四个参数。 */
(function () {
  const { person, ground, T, E, SK, INK } = window.illusKit;
  const R = (x, y, w, h, fill, rx, extra) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx || 0}" fill="${fill || "#fff"}" ${extra || ""}/>`;
  const C = (x, y, r, fill, extra) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill || "#fff"}" ${extra || ""}/>`;
  const P = (d, fill, extra) => `<path d="${d}" fill="${fill || "none"}" ${extra || ""}/>`;
  const TW = (x, y, size, txt, anchor) => `<text x="${x}" y="${y}" font-size="${size}" fill="#b6e8a8" stroke="none"${anchor ? ` text-anchor="${anchor}"` : ""}>${txt}</text>`;
  const plane = (x, y, s, fill, extra) => `<g transform="translate(${x} ${y}) scale(${s})">${R(-5, -22, 10, 44, fill, 5, extra)}${R(-26, -4, 52, 10, fill, 3, extra)}${R(-11, 15, 22, 6, fill, 2, extra)}</g>`;
  const dot = (x, y) => C(x, y, 3, "#e5484d", 'stroke="none"');
  const add = window.illusAdd;

  /* ---------- 第1节：类型是一份合同 ---------- */
  add("c20_coyote", "平台跳跃的土狼时间：火柴人刚走出平台边缘，仍然来得及起跳",
    R(6, 92, 92, 34, "#b6e8a8") + P("M100 92 V126", "none") + person(116, 44, { arms: "up", legs: "run", face: "grin" }) +
    P("M92 88 q-6 -4 -12 0 M72 88 q-4 -3 -8 0", "none", 'stroke-dasharray="2 4" stroke-width="2.5"') + R(166, 92, 28, 34, "#b6e8a8"),
    T(130, 22, 12, "刚走出边缘，", "middle") + T(132, 124, 12, "仍可起跳", "middle"));

  add("c20_aha", "解谜的顿悟：火柴人头顶亮起灯泡，旁边最后一块拼图正好落进缺口",
    ground + person(50, 62, { arms: "up", face: "wide", look: 1 }) + C(50, 22, 9, "#ffe58a") + R(46, 30, 8, 5, "#ddd") +
    R(110, 66, 30, 30, "#a8dcf0", 3) + R(144, 66, 30, 30, "#ffb3c6", 3) + R(110, 100, 30, 24, "#b6e8a8", 3) + R(144, 100, 30, 24, "#fff", 3, 'stroke-dasharray="4 3"'),
    T(100, 24, 14, "啊哈！"));

  add("c20_chili", "川菜馆的默契：墙上挂着川菜馆招牌，桌上端来红辣椒的菜，火柴人早就料到会辣",
    R(10, 8, 62, 22, "#ffd6dc", 4) + R(14, 94, 172, 8, "#c99a5a") + R(20, 102, 6, 24, "#c99a5a") + R(172, 102, 6, 24, "#c99a5a") + person(148, 60, { arms: "hold", legs: "sit", face: "smile", look: -1 }) + `<ellipse cx="96" cy="90" rx="26" ry="5" fill="#fff"/>`,
    T(41, 24, 12, "川菜馆", "middle") + E(96, 86, 20, "🌶️") + T(140, 28, 12, "默认有辣", "middle"));

  add("c20_hitbox", "违背承诺：火柴人明明踩在平台边上，红色虚线框（判定框）却在平台外，人掉了下去",
    R(6, 88, 90, 38, "#b6e8a8") + person(80, 24, { arms: "up", legs: "wide", face: "shout" }) + R(92, 14, 30, 74, "none", 0, 'stroke="#e5484d" stroke-dasharray="4 3"'),
    T(160, 50, 12, "明明踩到了！", "middle") + T(160, 68, 11, "判定框偏了", "middle"));

  /* ---------- 第2节：五个类型 ---------- */
  add("c20_gplat", "平台跳跃的关卡就是教程：先在安全处学动作，再加尖刺，最后组合",
    R(4, 96, 50, 22, "#b6e8a8") + R(70, 96, 50, 22, "#b6e8a8") + R(136, 96, 50, 22, "#b6e8a8") +
    P("M84 96 l7 -14 l7 14 M100 96 l7 -14 l7 14", "#ffb3c6") + P("M152 96 l7 -14 l7 14", "#ffb3c6") + person(28, 52, { s: 0.7, legs: "walk", face: "smile" }),
    T(32, 136, 11, "①安全练习", "middle") + T(95, 136, 11, "②加危险", "middle") + T(161, 136, 11, "③组合", "middle"));

  add("c20_grogue", "肉鸽每一局的地图都不一样：两张房间连通方式完全不同的地牢图",
    R(8, 26, 84, 80, "#fffdf3", 3) + R(104, 26, 88, 80, "#fffdf3", 3) +
    R(14, 32, 26, 20, "#ffe58a") + R(54, 56, 26, 20, "#ffe58a") + R(20, 82, 26, 18, "#ffe58a") + P("M40 42 H66 V56 M54 66 H33 V82", "none", 'stroke-width="3"') +
    R(112, 80, 26, 20, "#b6e8a8") + R(150, 32, 26, 20, "#b6e8a8") + R(150, 76, 26, 24, "#b6e8a8") + P("M138 90 H150 M163 52 V76", "none", 'stroke-width="3"'),
    T(50, 20, 12, "第 1 局", "middle") + T(148, 20, 12, "第 2 局", "middle") + T(100, 128, 12, "每局都是新地图", "middle"));

  add("c20_gdeck", "卡牌构筑的协同：护甲牌加上伤害牌，合成一张远比两张之和更强的组合",
    R(8, 38, 38, 56, "#e8f6fc", 4) + R(62, 38, 38, 56, "#ffe9ef", 4) + R(130, 28, 60, 76, "#fff7cf", 5) + P("M160 38 l4 9 l9 1 l-7 6 l2 9 l-8 -5 l-8 5 l2 -9 l-7 -6 l9 -1z", "#ffd34d"),
    T(27, 70, 12, "护甲", "middle") + T(81, 70, 12, "伤害", "middle") + T(54, 70, 16, "+", "middle").replace('x="54"', 'x="54"') + T(115, 70, 16, "→", "middle") + T(160, 92, 12, "更强！", "middle") + T(100, 128, 12, "1 + 1 > 2", "middle"));

  add("c20_g4x", "策略游戏的三角：经济、扩张、军事三个圆圈互相牵制",
    P("M100 40 L50 94 M100 40 L150 94 M62 108 H138", "none", 'stroke-dasharray="6 5" stroke-width="3"') +
    C(100, 28, 18, "#ffe58a") + C(44, 108, 18, "#ffb3c6") + C(156, 108, 18, "#a8dcf0"),
    T(100, 33, 12, "经济", "middle") + T(44, 113, 12, "军事", "middle") + T(156, 113, 12, "扩张", "middle") + T(100, 82, 12, "互相牵制", "middle"));

  add("c20_gpuzzle", "滑块解谜：火柴人托着下巴盯着缺了一块的方格，线索都在眼前",
    ground + person(36, 62, { arms: "chin", face: "flat", look: 1 }) +
    [0, 1, 2].map(r => [0, 1, 2].map(c => (r === 2 && c === 2) ? R(104 + c * 28, 22 + r * 28, 26, 26, "#fff", 3, 'stroke-dasharray="4 3"') : R(104 + c * 28, 22 + r * 28, 26, 26, ["#ffb3c6", "#a8dcf0", "#ffe58a", "#b6e8a8", "#d8c8ff"][(r * 3 + c) % 5], 3)).join("")).join(""),
    T(36, 24, 12, "再想想……", "middle") + T(140, 120, 11, "线索够，不给答案", "middle"));

  /* ---------- 第3节：局内局外成长 ---------- */
  add("c20_vamp", "被一圈敌人围住的英雄，脚边却攒着一小堆金币：死了也能带走",
    ground + person(100, 56, { arms: "up", face: "shout" }) +
    [[44, 42], [156, 42], [30, 82], [170, 82], [56, 112], [144, 112]].map(p => C(p[0], p[1], 7, "#ffb3c6")).join("") + C(102, 118, 5, "#ffd34d") + C(112, 118, 5, "#ffd34d") + C(107, 110, 5, "#ffd34d"),
    T(100, 16, 12, "死了也能带走金币", "middle"));

  add("c20_hades", "死后回到起点：火柴人从水池里爬出来，面前是一扇每次都不一样的门",
    `<ellipse cx="40" cy="112" rx="34" ry="8" fill="#a8dcf0"/>` + person(40, 40, { arms: "up", face: "grin" }) +
    P("M146 126 V70 Q146 46 168 46 Q190 46 190 70 V126 Z", "#ffe9ef") + P("M168 54 V126", "none", 'stroke-dasharray="3 5" stroke-width="2.5"'),
    T(40, 136, 12, "死后回到起点", "middle") + T(148, 30, 12, "每次不同的房间", "middle"));

  add("c20_gym", "健身：今天这次练得一般，但几个月下来，体能一点一点留了下来",
    ground + person(100, 60, { arms: "none", legs: "wide", face: "grin" }) + P("M92 76 L80 40 M108 76 L120 40", "none") + P("M72 40 H128", "none", 'stroke-width="5"') + R(64, 30, 8, 20, "#8a8aa0", 2) + R(128, 30, 8, 20, "#8a8aa0", 2),
    T(40, 100, 12, "今天一般", "middle") + T(160, 100, 12, "月月留着", "middle") + T(160, 116, 12, "体能", "middle"));

  add("c20_op", "反例：局外强化给得太猛，巨大的英雄一刀把小小的头目砍飞，不需要动脑",
    ground + person(56, 30, { s: 1.3, arms: "throw", face: "smile" }) + P("M96 26 L146 66", "none", 'stroke-width="6"') +
    `<ellipse cx="158" cy="108" rx="22" ry="12" fill="#d8c8ff" transform="rotate(-18 158 108)"/>` + P("M150 80 l6 -12 M164 78 l4 -12 M174 90 l10 -6", "none", 'stroke-width="2.5"'),
    T(142, 16, 12, "刷够了，不用动脑", "middle"));

  /* ---------- 第4节 故事一：Rogue → roguelike ---------- */
  add("c20_rogue", "1980年的《Rogue》：黑色终端上，用字符画出地牢和一个@符号代表的冒险者",
    R(12, 14, 176, 104, "#2b2b3a", 4),
    TW(26, 40, 15, "###########") + TW(26, 62, 15, "#..@....$.#") + TW(26, 84, 15, "#...D.....#") + TW(26, 106, 15, "###########"));

  add("c20_bsd", "BSD系统里的《Rogue》：玩家只能玩，源代码锁在带挂锁的盒子里，想做类似游戏的人只能干看着",
    R(56, 44, 90, 70, "#e8f6fc", 4) + R(88, 86, 26, 20, "#ffd34d", 3) + P("M94 86 v-8 a7 7 0 0 1 14 0 v8", "none", 'stroke-width="3"') + person(22, 56, { s: 0.7, arms: "point", face: "sad" }),
    T(101, 36, 12, "没有源码", "middle") + T(101, 66, 18, "BSD", "middle"));

  add("c20_usenet", "1993年前后：Hack、Moria、Angband三块各自的讨论牌，箭头汇到同一块写着roguelike的大牌子",
    R(8, 14, 50, 20, "#ffe58a", 3) + R(8, 44, 50, 20, "#ffb3c6", 3) + R(8, 74, 50, 20, "#a8dcf0", 3) +
    P("M60 24 Q88 34 106 38 M60 54 L106 48 M60 84 Q88 62 106 56", "none", 'stroke-dasharray="4 4" stroke-width="2.5"') + R(110, 22, 84, 44, "#b6e8a8", 4) + person(150, 78, { s: 0.8, arms: "point", face: "grin" }),
    T(33, 29, 11, "Hack", "middle") + T(33, 59, 11, "Moria", "middle") + T(33, 89, 10, "Angband", "middle") + T(152, 40, 11, "rec.games", "middle") + T(152, 56, 11, ".roguelike", "middle"));

  add("c20_berlin", "2008年柏林：几个人围着白板上的因素清单讨论，到底多像才算像",
    ground + person(26, 62, { arms: "point", face: "smile" }) + person(176, 62, { arms: "stand", face: "flat", glasses: true }) +
    R(66, 14, 76, 72, "#fffdf3", 4) + P("M76 44 h10 M76 58 h10 M76 72 h10", "none") + P("M92 44 h40 M92 58 h40 M92 72 h40", "none", 'stroke-width="2.5"'),
    T(104, 34, 12, "因素清单", "middle"));

  add("c20_lite", "类型的边界在漂：肉鸽这个大圈只套住了一部分特征，新的类肉鸽游戏一半在圈外",
    `<ellipse cx="68" cy="68" rx="56" ry="38" fill="#ffe9ef"/>` + C(150, 76, 28, "#e8f6fc", 'stroke-dasharray="5 4"'),
    T(62, 74, 14, "肉鸽", "middle") + T(162, 80, 13, "lite", "middle") + T(100, 124, 12, "边界在漂", "middle"));

  /* ---------- 第4节 故事二：瓦尔德的飞机 ---------- */
  add("c20_wald", "1943年：Wald站在画架前，指着返航飞机上的弹孔，发动机处却一个弹孔也没有",
    ground + person(34, 62, { arms: "point", glasses: true, face: "flat" }) + R(108, 30, 80, 90, "#fffdf3", 3) + plane(148, 74, 1.2, "#e6e6ee") +
    dot(138, 70) + dot(128, 80) + dot(166, 78) + dot(150, 96) + dot(158, 62) + dot(142, 56),
    T(148, 24, 12, "返航的飞机", "middle"));

  add("c20_jasa", "1984年：学术期刊的封面和一个翻着读的火柴人，封面写着JASA",
    ground + person(34, 62, { arms: "hold", face: "smile" }) + R(80, 16, 84, 104, "#e8f6fc", 3) + P("M92 90 H152", "none"),
    T(122, 48, 18, "JASA", "middle") + T(122, 74, 15, "1984", "middle") + T(122, 108, 11, "Wald 的工作", "middle"));

  add("c20_ask", "今天的提醒：火柴人举着放大镜问“失败的呢？”，远处一大堆灰色的方块没人看见",
    ground + person(34, 62, { arms: "point", face: "o" }) + C(88, 56, 14, "#fff") + P("M78 66 L66 74", "none", 'stroke-width="5"') +
    [0, 1, 2, 3, 4, 5].map(i => R(124 + (i % 3) * 22, 84 + Math.floor(i / 3) * 20, 18, 16, "#d9d9e0", 2, 'stroke-dasharray="3 3"')).join(""),
    T(60, 24, 13, "失败的呢？", "middle") + T(160, 72, 11, "没被看见的", "middle"));

  add("c20_planeback", "对比图：左边三架返航的飞机上布满弹孔，右边两架虚线轮廓是再也没回来的飞机，弹孔集中在发动机处",
    plane(34, 56, 0.9, "#e6e6ee") + plane(90, 56, 0.9, "#e6e6ee") + plane(50, 106, 0.6, "#e6e6ee") +
    dot(28, 52) + dot(40, 60) + dot(34, 40) + dot(84, 54) + dot(98, 58) + dot(90, 44) + dot(46, 104) + dot(58, 108) +
    plane(152, 56, 0.9, "#fff", 'stroke-dasharray="5 4"') + plane(180, 106, 0.6, "#fff", 'stroke-dasharray="5 4"') +
    dot(139, 57) + dot(165, 57) + dot(172, 107) + dot(188, 107),
    T(62, 18, 12, "飞回来的", "middle") + T(160, 18, 12, "没回来的", "middle") + T(158, 91, 12, "弹孔在发动机", "middle"));

  /* ---------- 第6节：幸存者偏差 ---------- */
  add("c20_hits", "爆款只有二十款，被忽略的失败游戏有一百八十款：成功者的共同点，要拿失败者来对比",
    [0, 1, 2, 3, 4].map(i => R(10 + (i % 3) * 22, 34 + Math.floor(i / 3) * 22, 18, 18, "#ffd34d", 3)).join("") +
    Array.from({ length: 20 }, (_, i) => R(104 + (i % 5) * 18, 24 + Math.floor(i / 5) * 18, 15, 15, "#d9d9e0", 2, 'stroke-dasharray="3 3"')).join(""),
    T(36, 20, 12, "爆款 20 款", "middle") + T(150, 16, 12, "被忽略 180 款", "middle") + T(100, 124, 12, "它们的特征呢？", "middle"));

  add("c20_dropout", "领奖台上站着一位戴皇冠的成功者，身后一大群灰色的小人没有人注意",
    R(14, 98, 56, 28, "#ffd34d", 3) + person(42, 34, { arms: "up", face: "grin", hat: "crown" }) +
    [0, 1, 2, 3].map(i => person(100 + i * 24, 52, { s: 0.35, face: "flat" })).join("") + [0, 1, 2, 3].map(i => person(108 + i * 24, 92, { s: 0.35, face: "flat" })).join(""),
    T(146, 30, 12, "看不见的大多数", "middle") + T(76, 124, 12, "站上台的", "start"));

  add("c20_oldbuild", "一栋结实的老房子还站着，两边虚线勾出的废墟，是早就塌掉、没人记得的老房子",
    ground + R(66, 52, 68, 74, "#ffe58a", 3) + P("M60 52 L100 28 L140 52 Z", "#ffb3c6") + R(86, 90, 28, 36, "#c99a5a", 2) +
    P("M6 126 L22 104 L40 126 M150 126 L172 100 L194 126", "none", 'stroke-dasharray="5 4"'),
    T(100, 18, 12, "还站着的老房子", "middle") + T(24, 92, 11, "早塌了", "middle") + T(172, 88, 11, "早塌了", "middle"));

  add("c20_ab", "做对了：随机分成两组，只有A组加了新功能，再比较两组的结果",
    P("M8 94 H192", "none", 'stroke-dasharray="2 7" stroke-width="3"') + [0, 1, 2].map(i => person(26 + i * 22, 60, { s: 0.5, face: "smile" })).join("") + [0, 1, 2].map(i => person(130 + i * 22, 60, { s: 0.5, face: "smile" })).join("") +
    P("M100 22 L48 40 M100 22 L152 40", "none", 'stroke-dasharray="4 4" stroke-width="2.5"'),
    T(100, 16, 12, "随机分组", "middle") + E(48, 54, 14, "⭐").replace("y=\"54\"", "y=\"50\"") + T(48, 108, 12, "A 组：加功能", "middle") + T(152, 108, 12, "B 组：不加", "middle") + T(100, 130, 12, "只比较这一个差别", "middle"));

  /* ---------- 第7节：图式与预期 ---------- */
  add("c20_grapple", "平台跳跃里意外的惊喜：火柴人甩出钩索，荡向高处的平台，原来跳跃键也能当抓钩",
    R(6, 96, 56, 30, "#b6e8a8") + R(138, 66, 56, 60, "#b6e8a8") + person(34, 32, { arms: "up", face: "grin" }) +
    P("M48 18 Q96 4 142 62", "none", 'stroke-dasharray="5 4" stroke-width="3"') + P("M138 60 l8 4 l-4 -8z", "#ffd34d"),
    T(92, 84, 12, "跳跃键也是抓钩", "middle"));

  add("c20_monster", "恐怖游戏的反转：怪物脸上挂着泪水，被铁链拴着，原来它才是受害者",
    ground + person(30, 62, { s: 0.85, arms: "stand", face: "o" }) + `<ellipse cx="124" cy="82" rx="38" ry="34" fill="#d8c8ff"/>` + C(112, 76, 5, "#fff") + C(136, 76, 5, "#fff") +
    P("M110 98 q14 8 28 0", "none") + P("M112 84 v10 M136 84 v10", "none", 'stroke="#4a9ac4" stroke-width="3"') + P("M90 100 L70 120 M158 100 L180 120", "none", 'stroke-dasharray="4 3" stroke-width="3"'),
    T(116, 28, 12, "它其实是受害者", "middle"));

  add("c20_dessert", "川菜馆里端上来一盘不辣的甜品：主菜都是红辣椒，唯独最后一道是蛋糕",
    ground + person(30, 62, { arms: "stand", face: "grin", look: 1 }) + R(76, 100, 118, 8, "#c99a5a") + R(82, 108, 6, 18, "#c99a5a") + R(182, 108, 6, 18, "#c99a5a"),
    E(100, 98, 22, "🌶️") + E(130, 98, 22, "🌶️") + E(168, 98, 24, "🍰") + T(100, 70, 12, "主菜都辣", "middle") + T(160, 70, 12, "收尾不辣", "middle"));

  add("c20_endless", "反例：三局的地图一模一样，中间用等号连起来，玩家很快就只剩背板",
    R(8, 30, 52, 44, "#fffdf3", 3) + R(74, 30, 52, 44, "#fffdf3", 3) + R(140, 30, 52, 44, "#fffdf3", 3) +
    [8, 74, 140].map(x => P(`M${x + 8} 40 h14 v14 h16 v10 M${x + 8} 62 h8`, "none", 'stroke-width="3"')).join(""),
    T(34, 24, 11, "第 1 局", "middle") + T(100, 24, 11, "第 2 局", "middle") + T(166, 24, 11, "第 3 局", "middle") + T(67, 56, 16, "=", "middle") + T(133, 56, 16, "=", "middle") + T(100, 104, 12, "每局都一样：背板而已", "middle"));

  add("c20_brute", "反例：解谜游戏不惩罚错误，火柴人把六个按钮挨个按一遍就过关了",
    ground + person(36, 62, { arms: "point", face: "flat" }) +
    [0, 1, 2].map(i => C(96 + i * 34, 40, 12, "#b6e8a8")).join("") + [0, 1, 2].map(i => C(96 + i * 34, 76, 12, "#b6e8a8")).join(""),
    [0, 1, 2].map(i => T(96 + i * 34, 45, 13, "✓", "middle")).join("") + [0, 1, 2].map(i => T(96 + i * 34, 81, 13, "✓", "middle")).join("") + T(134, 112, 12, "全试一遍就过关", "middle"));

  /* ---------- 第8节：局部最优 ---------- */
  add("c20_peaks", "两座山：火柴人站在矮山头上，往哪边走都是下坡，真正更高的那座山在山谷的另一边",
    ground + P("M4 126 L40 82 L76 126 Z", "#b6e8a8") + P("M96 126 L150 24 L196 126 Z", "#d8c8ff") + person(40, 50, { s: 0.5, arms: "up", face: "grin" }) +
    P("M52 66 Q100 30 138 40", "none", 'stroke-dasharray="5 5" stroke-width="3"'),
    T(44, 24, 12, "每步都在上坡", "middle") + T(150, 15, 12, "更高的在另一边", "middle"));
})();
