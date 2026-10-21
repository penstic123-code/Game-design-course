/* 第 14 章插图包：随机性与概率（火柴人风） */
(function () {
  const { person, ground, T, SK, INK } = window.illusKit;
  const Y = "#ffe58a", PK = "#ffb3c6", BL = "#a8dcf0", GR = "#b6e8a8", PU = "#d8c8ff", OR = "#ffc078", WH = "#fff", RD = "#ff9b9b";
  const rect = (x, y, w, h, fill, extra) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (fill || WH) + '" ' + (extra || "") + "/>";
  const circ = (x, y, r, fill) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (fill || WH) + '"/>';
  const path = (d, fill, extra) => '<path d="' + d + '" fill="' + (fill || "none") + '" ' + (extra || "") + "/>";
  const dot = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="1.8" fill="' + INK + '" stroke="none"/>';
  const add = illusAdd;

  /* ===== 配图 ===== */
  add("c14_inout", "左边的火柴人先看到随机出现的三张牌再动脑筋；右边的火柴人先挥剑，骰子才滚出来判定结果",
    ground + path("M100 14 V126", "none", 'stroke-dasharray="4 5" stroke-width="2.5"') +
    rect(10, 34, 22, 28, PK) + rect(36, 34, 22, 28, BL) + rect(62, 34, 22, 28, Y) +
    person(46, 78, { s: 0.7, arms: "chin", face: "flat" }) +
    person(132, 63, { arms: "throw", face: "grin" }) + rect(160, 96, 22, 22, WH, 'transform="rotate(14 171 107)"') + dot(166, 102) + dot(176, 112) + dot(171, 107),
    T(50, 20, 13, "先随机出题", "middle") + T(150, 20, 13, "后随机判定", "middle"));

  add("c14_roulette", "轮盘赌桌：计分牌上连续出现很多黑，一个火柴人抱着筹码，认定这回该出红了",
    ground + circ(46, 84, 32, WH) + circ(46, 84, 18, "#555") + path("M46 52 V116 M14 84 H78 M24 62 L68 106 M68 62 L24 106", "none", 'stroke-width="2"') + circ(46, 84, 5, Y) + circ(60, 66, 3.5, WH) +
    rect(98, 4, 98, 52, "#fffdf3") + [16, 30, 44].map(function (y, r) { var o = ""; for (var i = 0; i < (r < 2 ? 9 : 8); i++) o += circ(108 + i * 10, y, 3, "#333"); return o; }).join("") +
    person(150, 90, { s: 0.55, arms: "hold", face: "grin" }) + circ(172, 112, 4, RD) + circ(180, 116, 4, RD),
    T(146, 70, 13, "该出红了吧！", "middle"));

  add("c14_unlucky", "抽卡机旁堆着一地空扭蛋壳，计数牌写着一百抽，火柴人愁眉苦脸地捂着脸",
    ground + rect(120, 24, 58, 84, PK) + circ(149, 46, 20, "#e8f6fc") + circ(140, 42, 5, Y) + circ(155, 38, 5, GR) + circ(150, 52, 5, BL) + rect(136, 80, 26, 14, WH) +
    rect(14, 8, 76, 24, WH) + circ(34, 120, 6, WH) + circ(50, 122, 6, PK) + circ(64, 118, 6, BL) + circ(76, 122, 6, WH) + circ(42, 112, 6, Y) +
    person(100, 81, { s: 0.7, face: "sad", arms: "cover" }),
    T(52, 26, 13, "第 100 抽", "middle"));

  /* ===== 输入/输出随机：例子 ===== */
  add("c14_next", "俄罗斯方块的下一块预览框里是一个 L 形，火柴人看着预览想该把现在这块放到哪儿",
    ground + person(46, 70, { s: 0.85, arms: "chin", face: "smile", look: 1 }) +
    rect(146, 50, 44, 46, "#fffdf3") + rect(154, 58, 10, 10, OR) + rect(154, 68, 10, 10, OR) + rect(154, 78, 10, 10, OR) + rect(164, 78, 10, 10, OR) +
    '<ellipse cx="108" cy="24" rx="76" ry="16" fill="#fff"/><circle cx="84" cy="44" r="3" fill="#fff"/>',
    T(108, 29, 13, "看到下一块，再想办法", "middle") + T(168, 112, 13, "下一块", "middle"));

  add("c14_hit75", "火柴人挥剑砍向史莱姆，脚边的骰子刚滚出来，牌子上写着命中率 75%",
    ground + person(44, 63, { arms: "throw", face: "grin" }) + path("M62 52 L96 84", "none", 'stroke-width="4"') +
    '<ellipse cx="130" cy="108" rx="28" ry="18" fill="' + GR + '"/>' + circ(122, 104, 2.5, INK) + circ(138, 104, 2.5, INK) +
    rect(62, 104, 20, 20, WH, 'transform="rotate(10 72 114)"') + dot(67, 109) + dot(77, 119) + dot(72, 114) +
    rect(110, 12, 84, 24, Y),
    T(152, 30, 13, "命中率 75%", "middle") + T(130, 80, 22, "？", "middle"));

  add("c14_miss95", "反例：屏幕上写着命中率 95%，却跳出红色的 MISS，火柴人气得大喊",
    ground + person(44, 63, { arms: "up", face: "shout" }) +
    rect(92, 14, 98, 30, WH) + rect(104, 62, 78, 34, RD) + path("M96 104 l12 8 m-12 0 l12 -8", "none", 'stroke-width="2.5"'),
    T(141, 34, 13, "命中率 95%", "middle") + T(143, 86, 22, "MISS", "middle") + T(150, 120, 13, "怎么可能！", "middle"));

  /* ===== 期望值：例子 ===== */
  add("c14_chest", "宝箱上方三条箭头：十分之一概率得 50 金币，三成得 10，六成什么也没有，宝箱旁边写着平均 8 金币",
    ground + rect(64, 84, 72, 40, OR) + path("M64 84 Q100 56 136 84 Z", "#e6a35a") + rect(94, 90, 12, 14, Y) +
    path("M34 50 L84 78 M100 50 V74 M166 50 L116 78", "none", 'stroke-width="2.5"') + path("M80 70 l6 8 -10 0 M96 66 l4 8 -8 0", "none", 'stroke-width="2"'),
    T(34, 42, 13, "10%：50", "middle") + T(100, 42, 13, "30%：10", "middle") + T(166, 42, 13, "60%：0", "middle") + T(100, 16, 15, "平均每箱 8 金币", "middle"));

  add("c14_lottery", "火柴人举着彩票做着中大奖的梦，彩票旁边写着：平均下来，返还的钱比花的钱少",
    ground + person(46, 63, { arms: "up", face: "grin" }) +
    rect(104, 46, 44, 62, Y, 'transform="rotate(-5 126 77)"') + rect(160, 78, 28, 30, WH) + circ(170, 96, 4, Y) + circ(180, 96, 4, Y),
    T(126, 82, 15, "彩票", "middle") + T(100, 22, 13, "平均返还的比花的少", "middle") + T(174, 72, 13, "↓", "middle"));

  add("c14_samemean", "反例：两排柱子平均值同样是 8，左边每局都得 8，右边九局空手、一局得 80，感受完全不同",
    ground + path("M10 118 H92 M108 118 H190", "none", 'stroke-width="3"') +
    rect(14, 111, 6, 7, BL) + rect(22, 111, 6, 7, BL) + rect(30, 111, 6, 7, BL) + rect(38, 111, 6, 7, BL) + rect(46, 111, 6, 7, BL) + rect(54, 111, 6, 7, BL) + rect(62, 111, 6, 7, BL) + rect(70, 111, 6, 7, BL) + rect(78, 111, 6, 7, BL) + rect(86, 111, 6, 7, BL) +
    rect(176, 48, 8, 70, PK) + path("M10 111 H92 M108 111 H190", "none", 'stroke-dasharray="3 3" stroke-width="2"'),
    T(52, 20, 13, "每局都得 8", "middle") + T(52, 38, 13, "平均也是 8", "middle") + T(138, 20, 13, "十局只中一次", "middle") + T(138, 38, 13, "平均也是 8", "middle") + T(180, 44, 13, "80", "middle"));

  /* ===== 概率直觉：例子 ===== */
  const grid = () => {
    let s = "";
    for (let r = 0; r < 5; r++) for (let c = 0; c < 20; c++) {
      const x = 16 + c * 9, y = 36 + r * 10, special = r === 1 && c === 3, flagged = (r === 0 && c === 6) || (r === 2 && c === 11) || (r === 3 && c === 2) || (r === 4 && c === 15) || (r === 1 && c === 17);
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (special ? 3.4 : 2.4) + '" fill="' + (special ? "#e5484d" : "#cfd3dc") + '" stroke-width="1.2"/>';
      if (flagged || special) s += '<circle cx="' + x + '" cy="' + y + '" r="5.6" fill="none" stroke="#e5484d" stroke-width="1.8"/>';
    }
    return s;
  };
  add("c14_cheat", "一百个玩家里只有一个作弊者，反作弊系统圈出了六个人，其中真正的作弊者只有红点那一个",
    ground + grid(),
    T(100, 18, 13, "100 人里只有 1 个作弊者", "middle") + T(100, 104, 13, "圈出的 6 人里", "middle") + T(100, 120, 13, "只有红点是真作弊者", "middle"));

  add("c14_forum", "论坛里满屏都是十连双金的晒图，而没抽中的人安静地站在旁边，没人看见他们",
    ground + rect(10, 10, 108, 106, "#fffdf3") + rect(18, 18, 92, 20, Y) + rect(18, 44, 92, 20, Y) + rect(18, 70, 92, 20, Y) +
    person(140, 94, { s: 0.5, face: "sad", arms: "stand" }) + person(170, 94, { s: 0.5, face: "sad", arms: "stand" }),
    T(64, 33, 13, "十连双金！", "middle") + T(64, 59, 13, "又出货啦！", "middle") + T(64, 85, 13, "金光四射！", "middle") + T(156, 62, 13, "没出的人", "middle") + T(156, 78, 13, "不发帖", "middle"));

  add("c14_deckmem", "反例：桌上已经摊开了三张 A，牌堆里剩下的 A 变少了，火柴人托着下巴算剩下的概率",
    ground + rect(14, 46, 24, 34, WH) + rect(42, 46, 24, 34, WH) + rect(70, 46, 24, 34, WH) +
    rect(120, 44, 26, 36, PU) + rect(124, 48, 26, 36, PU) + rect(128, 52, 26, 36, PU) +
    person(176, 70, { s: 0.7, arms: "chin", face: "smile" }),
    T(26, 69, 15, "A", "middle") + T(54, 69, 15, "A", "middle") + T(82, 69, 15, "A", "middle") + T(100, 22, 13, "不放回，牌堆就有记忆", "middle") + T(100, 112, 13, "剩下的牌，概率变了", "middle"));

  /* ===== 保底与洗牌袋：例子 ===== */
  add("c14_deckdeal", "火柴人把一副洗好的牌一张张发到桌上，发完整副牌每张恰好出现一次",
    ground + person(40, 63, { arms: "hold", face: "smile" }) + rect(72, 92, 26, 32, PU) + rect(76, 88, 26, 32, PU) +
    rect(116, 94, 18, 26, WH, 'transform="rotate(-8 125 107)"') + rect(138, 96, 18, 26, WH) + rect(160, 94, 18, 26, WH, 'transform="rotate(8 169 107)"'),
    T(100, 22, 13, "一副牌，每张恰好一次", "middle"));

  add("c14_pity90", "抽卡计数牌显示已抽 89 次、进度条几乎满，火柴人双手合十，旁边的金色扭蛋闪着光",
    ground + rect(26, 8, 148, 48, WH) + rect(36, 40, 128, 10, "#fffdf3") + rect(36, 40, 126, 10, Y) +
    person(52, 90, { s: 0.55, arms: "hold", face: "smile" }) + circ(142, 110, 14, Y) + path("M142 84 V92 M120 92 l5 5 M164 92 l-5 5 M112 110 h8 M164 110 h8", "none", 'stroke-width="2.5"'),
    T(100, 28, 15, "已抽 89 次", "middle") + T(100, 70, 13, "第 90 抽必出！", "middle"));

  add("c14_bagsmall", "反例：袋子里只有两张签，一张写中、一张写空，火柴人拿到中之后得意地断定下一张必是空",
    ground + person(46, 63, { arms: "point", face: "grin" }) +
    path("M110 126 Q104 92 120 78 H160 Q176 92 170 126 Z", "#e6c28a") + rect(124, 66, 14, 20, WH, 'transform="rotate(-8 131 76)"') + rect(146, 66, 14, 20, WH, 'transform="rotate(8 153 76)"') +
    '<ellipse cx="108" cy="26" rx="76" ry="15" fill="#fff"/>',
    T(108, 31, 13, "上一张中了，这张必空", "middle") + T(131, 82, 13, "中", "middle") + T(153, 82, 13, "空", "middle"));

  /* ===== 期望值：发明故事时间线 ===== */
  add("c14_pacioli", "一位戴眼镜的学者拿着书，把赌桌上的钱按两比一分成两堆",
    ground + person(34, 63, { glasses: true, arms: "hold", face: "flat" }) +
    circ(110, 114, 6, Y) + circ(122, 114, 6, Y) + circ(116, 104, 6, Y) + circ(158, 114, 6, Y) + path("M96 124 H136 M146 124 H170", "none"),
    T(116, 92, 13, "A", "middle") + T(158, 100, 13, "B", "middle") + T(110, 20, 13, "按已赢的局数 2:1 分", "middle"));

  add("c14_pascal", "两个人隔着画面互相寄信，一封信在半空中飞过，上面的算式画着分叉的树",
    ground + person(30, 63, { arms: "wave", face: "smile" }) + person(170, 63, { arms: "wave", face: "smile", glasses: true }) +
    rect(78, 40, 44, 30, WH, 'transform="rotate(-6 100 55)"') + path("M80 42 L100 58 L120 40", "none", 'stroke-width="2.5"') + path("M60 36 l-8 0 M140 82 l8 0 M56 46 h-8", "none", 'stroke-width="2.5"'),
    T(100, 20, 13, "一封封来回的信", "middle"));

  add("c14_huygens", "一本写着期望的书立在桌上，火柴人合着手欣赏，书上画着平均的符号",
    ground + rect(70, 40, 62, 76, Y) + rect(70, 40, 8, 76, "#e6c000") + person(160, 63, { arms: "hold", face: "smile", look: -1 }) +
    path("M90 94 h30", "none", 'stroke-width="2.5"'),
    T(104, 72, 18, "期望", "middle") + T(100, 22, 13, "头一本系统的小书", "middle"));

  add("c14_bernoulli", "抛硬币的次数越多，正面比例的折线上下摆动越来越小，逐渐贴近五成的虚线",
    ground + path("M20 112 V16 M20 112 H190", "none", 'stroke-width="2.5"') + path("M20 64 H190", "none", 'stroke-dasharray="4 4" stroke-width="2"') +
    path("M24 24 L40 100 L56 34 L72 90 L88 44 L104 82 L120 52 L136 76 L152 60 L168 70 L186 64", "none", 'stroke-width="3.5"'),
    T(100, 19, 13, "投得越多，越贴近五成", "middle") + T(184, 126, 13, "次数 →", "end"));

  /* ===== 保底：发明故事时间线 ===== */
  add("c14_drought", "俄罗斯方块里一个竖条的空位等了很久，下一块队列里一直没有长条，火柴人垂头丧气",
    ground + person(34, 63, { face: "sad", arms: "cover" }) +
    rect(110, 10, 62, 116, "#fffdf3") + rect(110, 76, 14, 50, PK) + rect(124, 76, 14, 50, BL) + rect(138, 76, 14, 50, GR) + rect(158, 76, 14, 50, Y) +
    path("M148 14 V76", "none", 'stroke-dasharray="3 4" stroke-width="2.5"'),
    T(66, 20, 13, "长条呢？", "middle"));

  add("c14_bag7", "一只布袋里装着七种颜色的方块，火柴人一块一块往外掏，每种颜色恰好掏出一次",
    ground + person(40, 63, { arms: "hold", face: "smile" }) +
    path("M88 126 Q84 90 100 76 H130 Q146 90 142 126 Z", "#e6c28a") +
    rect(92, 62, 10, 10, PK) + rect(104, 58, 10, 10, BL) + rect(116, 62, 10, 10, GR) +
    rect(14, 96, 12, 12, WH) + rect(150, 100, 12, 12, Y) + rect(164, 100, 12, 12, OR) + rect(178, 100, 12, 12, PU),
    T(115, 22, 13, "一袋 7 块，各一次", "middle"));

  add("c14_prd", "火柴人挥拳打向敌人，旁边五根柱子一根比一根高，表示没触发暴击时，下一次触发的概率越来越大",
    ground + person(30, 63, { arms: "throw", face: "grin" }) +
    rect(84, 104, 14, 18, BL) + rect(104, 92, 14, 30, BL) + rect(124, 80, 14, 42, BL) + rect(144, 66, 14, 56, BL) + rect(164, 50, 14, 72, Y) +
    path("M180 38 l4 -8 M170 38 l-4 -8 M174 32 v-8", "none", 'stroke-width="2.5"'),
    T(130, 20, 13, "没触发，下次更容易", "middle"));
})();
