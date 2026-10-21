/* 第8章 有意义的选择：专属插图包（火柴人风，viewBox 200×140）。形状进滤镜组，文字放第四个参数。 */
(function () {
  const { person, ground, T, E, eye, SK, INK } = window.illusKit;
  const R = (x, y, w, h, fill, rx, extra) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx || 0}" fill="${fill || "#fff"}" ${extra || ""}/>`;
  const C = (x, y, r, fill, extra) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill || "#fff"}" ${extra || ""}/>`;
  const P = (d, fill, extra) => `<path d="${d}" fill="${fill || "none"}" ${extra || ""}/>`;
  const coin = (x, y, r) => C(x, y, r || 7, "#ffd34d") + P(`M${x - 2} ${y - 3} v6`, "none", 'stroke-width="2"');
  const bottle = (x, y, rx, ry, fill) => R(x - rx * 0.4, y - ry - 14, rx * 0.8, 14, "#fff", 2) + `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}"/>`;
  const road = d => P(d, "none", 'stroke-width="14"') + P(d, "none", 'stroke="#ecd9a0" stroke-width="8"');
  const add = window.illusAdd;

  add("c08_fork", "岔路口：火柴人站在路标前，两块牌子分别写着“近路·险”和“远路·稳”",
    ground + person(34, 62, { arms: "point", face: "flat", look: 1 }) +
    R(106, 24, 8, 102, "#c99a5a") + P("M114 30 h62 l10 10 l-10 10 h-62z", "#ffe58a") + P("M114 62 h62 l10 10 l-10 10 h-62z", "#b6e8a8"),
    T(120, 45, 12, "近路·险") + T(120, 77, 12, "远路·稳"));

  add("c08_stpete", "抛硬币赌局：火柴人抛出硬币，右边的奖金柱子一根比一根高：2、4、8……",
    ground + person(34, 62, { arms: "throw", face: "smile" }) + P("M64 50 Q80 22 98 52", "none", 'stroke-dasharray="4 5" stroke-width="2.5"') + coin(98, 54, 6) +
    R(108, 112, 22, 12, "#ffe58a") + R(136, 100, 22, 24, "#ffd34d") + R(164, 76, 22, 48, "#ffb870"),
    T(119, 108, 12, "2", "middle") + T(147, 96, 12, "4", "middle") + T(175, 72, 12, "8", "middle") + T(190, 40, 16, "…", "middle") + T(36, 30, 12, "直到正面", "middle"));

  add("c08_letter", "1713年：火柴人在桌前写信，旁边的信封里写着奖金2的n次方",
    R(14, 86, 96, 8, "#c99a5a") + R(22, 94, 6, 32, "#c99a5a") + R(96, 94, 6, 32, "#c99a5a") + person(58, 46, { arms: "desk", face: "smile", glasses: true }) +
    R(126, 62, 62, 40, "#fffdf3") + P("M126 62 L157 84 L188 62", "none"),
    T(120, 30, 13, "致 Montmort", "middle") + T(157, 96, 13, "2ⁿ 元", "middle"));

  add("c08_cramer", "1728年：火柴人指着一条弯曲上升、越来越平的曲线，写着根号",
    person(36, 62, { arms: "point", face: "smile", glasses: true }) +
    P("M104 114 H188 M104 114 V24", "none") + P("M106 114 C112 74 140 50 186 42", "none", 'stroke="#7a5af8" stroke-width="5"'),
    T(106, 18, 12, "满足感") + T(150, 134, 12, "钱", "middle") + T(150, 100, 24, "√", "middle"));

  add("c08_richpoor", "同样一元钱：穷人拿到笑得很开心，富人拿到没什么感觉",
    ground + person(46, 62, { arms: "up", face: "grin" }) + coin(46, 30, 7) +
    person(150, 62, { arms: "stand", face: "flat", hat: "crown" }) + coin(150, 30, 7) + coin(176, 118, 7) + coin(168, 118, 7) + coin(172, 108, 7) + coin(182, 108, 7),
    T(46, 14, 12, "穷人 +1 元", "middle") + T(150, 14, 12, "富人 +1 元", "middle"));

  add("c08_axioms", "1944年：两个火柴人围着一本写着“期望效用”的大书",
    ground + person(36, 62, { arms: "point", face: "smile" }) + person(164, 62, { arms: "point", face: "smile", glasses: true, look: -1 }) +
    R(72, 70, 56, 56, "#a8dcf0", 3) + P("M100 70 V126", "none"),
    T(86, 94, 11, "期望", "middle") + T(114, 94, 11, "效用", "middle") + T(100, 60, 12, "公理化", "middle"));

  add("c08_prospect", "1979年：一架天平，丢100的一边重重压下去，赚100的一边轻轻翘起",
    P("M36 76 L164 48", "none", 'stroke-width="6"') + P("M90 124 L110 124 L100 62 Z", "#ffe58a") +
    P("M36 76 L24 100 M36 76 L48 100 M164 48 L152 70 M164 48 L176 70", "none", 'stroke-width="2.5"') +
    R(20, 100, 32, 7, "#d8c8ff") + R(148, 70, 32, 7, "#d8c8ff") + R(26, 80, 20, 20, "#ffb3c6", 3) + R(158, 62, 12, 8, "#b6e8a8", 2),
    T(36, 126, 12, "丢 100", "middle") + T(164, 96, 12, "赚 100", "middle") + T(100, 22, 12, "同样的数，分量不同", "middle"));

  /* ---------- 第1节 例子 ---------- */
  add("c08_road", "两条路通向城堡：近路上站着守卫，守卫身后是宝箱；远路绕一大圈，安全但绕开了宝箱",
    road("M12 92 H152") + road("M34 80 C34 18 120 8 160 52") +
    R(156, 48, 34, 44, "#d8c8ff") + R(150, 38, 12, 12, "#d8c8ff") + R(184, 38, 12, 12, "#d8c8ff") + R(126, 76, 20, 14, "#ffd34d", 2) +
    person(24, 44, { s: 0.75, face: "smile" }) + person(104, 44, { s: 0.75, face: "shout", arms: "club" }),
    T(100, 112, 12, "近路：守卫和宝箱", "middle") + T(152, 20, 12, "远路：安全", "middle"));

  add("c08_cards", "两张卡牌：左边一张便宜但弱，右边一张昂贵但强",
    R(14, 16, 70, 100, "#e8f6fc", 6) + C(28, 32, 9, "#ffb3c6") + P("M40 90 L56 54", "none", 'stroke-width="4"') +
    R(116, 16, 70, 100, "#fff7cf", 6) + C(130, 32, 9, "#ffb3c6") + P("M132 94 L168 44 M150 70 l-8 -8", "none", 'stroke-width="7"'),
    T(28, 36, 12, "1", "middle") + T(49, 106, 11, "便宜但弱", "middle") + T(130, 36, 12, "4", "middle") + T(151, 106, 11, "昂贵但强", "middle"));

  add("c08_rent", "租房：离公司近的房子贵，远的便宜但通勤很长",
    R(4, 60, 26, 66, "#a8dcf0") + R(40, 92, 36, 34, "#ffe58a") + P("M36 92 L58 70 L80 92 Z", "#ffb3c6") +
    R(150, 92, 36, 34, "#ffe58a") + P("M146 92 L168 70 L190 92 Z", "#ffb3c6") + P("M82 120 H146", "none", 'stroke-dasharray="3 6" stroke-width="3"') +
    person(114, 80, { s: 0.6, face: "sad", legs: "walk" }),
    T(17, 54, 11, "公司", "middle") + T(58, 62, 12, "近·贵", "middle") + T(168, 62, 12, "远·便宜", "middle") + T(114, 58, 12, "通勤长", "middle"));

  add("c08_potions", "两瓶药水，颜色不同，都回血50、都卖10币，火柴人耸肩：选哪瓶都一样",
    ground + person(100, 63, { arms: "up", face: "flat" }) +
    bottle(36, 110, 17, 15, "#ff9aa8") + bottle(164, 110, 17, 15, "#8fd0f0"),
    T(36, 54, 12, "+50", "middle") + T(164, 54, 12, "+50", "middle") + T(36, 69, 12, "10币", "middle") + T(164, 69, 12, "10币", "middle") + T(100, 22, 12, "都一样……", "middle"));

  add("c08_flasks", "三瓶药水由小到大，回血越多价格也越高：这是正常的权衡",
    ground + bottle(34, 114, 14, 11, "#ff9aa8") + bottle(100, 109, 20, 16, "#ff9aa8") + bottle(166, 103, 27, 22, "#ff9aa8"),
    T(34, 62, 12, "+30", "middle") + T(100, 52, 12, "+60", "middle") + T(166, 44, 12, "+100", "middle") +
    T(34, 77, 12, "10币", "middle") + T(100, 67, 12, "15币", "middle") + T(166, 59, 12, "20币", "middle") + T(100, 16, 12, "越大越贵，各有所用", "middle"));

  /* ---------- 第3节 边际效用 / 机会成本 ---------- */
  add("c08_pile", "背包里已经有八瓶血药，火柴人面无表情地接过第九瓶",
    ground + person(36, 62, { arms: "hold", face: "flat" }) +
    [0, 1, 2].map(r => [0, 1, 2].map(c => bottle(94 + c * 30, 52 + r * 30, 8, 6, "#ff9aa8")).join("")).join(""),
    T(36, 28, 12, "又一瓶？", "middle") + T(178, 76, 16, "×9", "middle"));

  add("c08_choice100", "100金币只够买一样：买了剑，盾牌被打上虚线，那就是机会成本",
    ground + person(34, 62, { arms: "point", face: "flat" }) + C(34, 30, 8, "#ffd34d") +
    P("M104 100 L124 54 M114 78 l-12 -6", "none", 'stroke-width="7"') +
    `<circle cx="168" cy="82" r="22" fill="none" stroke-dasharray="5 5"/>` + P("M168 62 V102 M150 82 H186", "none", 'stroke-dasharray="3 5" stroke-width="2"') +
    R(92, 104, 100, 6, "#c99a5a") + P("M96 110 V126 M188 110 V126", "none", 'stroke="#c99a5a" stroke-width="4"'),
    T(34, 14, 12, "100币", "middle") + T(114, 44, 12, "买剑", "middle") + T(168, 44, 12, "没买盾", "middle"));

  add("c08_burgers", "连吃四个汉堡：第一个笑逐颜开，第四个已经吃不下",
    ground + person(34, 62, { arms: "stand", face: "sad" }) +
    [86, 118, 150, 182].map(x => P(`M${x - 12} 112 a12 10 0 0 1 24 0z`, "#ffc078") + R(x - 13, 113, 26, 6, "#a0693a", 3) + R(x - 12, 119, 24, 6, "#ffc078", 2)).join(""),
    E(86, 92, 18, "😋") + E(118, 92, 18, "🙂") + E(150, 92, 18, "😐") + E(182, 92, 18, "🤢") + T(134, 62, 12, "越吃越没味", "middle"));

  add("c08_setbonus", "集换式卡牌套装：集齐的张数越多，整套越值钱，柱子越来越高",
    ground + [0, 1, 2, 3, 4].map(i => R(22 + i * 34, 122 - (12 + i * i * 4 + i * 6), 24, 12 + i * i * 4 + i * 6, ["#ffe9ef", "#ffd6dc", "#ffc078", "#ffb870", "#ffd34d"][i], 3)).join(""),
    T(100, 14, 12, "凑得越多越值钱", "middle") + [1, 2, 3, 4, 5].map((n, i) => T(34 + i * 34, 122 - (12 + i * i * 4 + i * 6) - 5, 12, "第" + n, "middle")).join(""));

  /* ---------- 第4节 损失厌恶 ---------- */
  add("c08_pig", "冒险骰子：掷出一点，攒了18分的金币四散飞走，火柴人大叫",
    ground + person(34, 62, { arms: "up", face: "shout" }) + R(90, 88, 38, 38, "#fff", 8) + C(109, 107, 4.5, INK, 'stroke="none"') +
    C(158, 36, 6, "#ffd34d") + C(178, 58, 6, "#ffd34d") + C(160, 82, 6, "#ffd34d") + P("M130 92 L150 46 M132 98 L170 62 M132 106 L152 88", "none", 'stroke-dasharray="3 4" stroke-width="2.5"'),
    T(109, 80, 12, "掷出 1", "middle") + T(166, 108, 12, "18 分", "middle") + T(166, 122, 11, "全丢了", "middle"));

  add("c08_permadeath", "Roguelike的永久死亡：火柴人攒了一身装备，旁边的墓碑写着清零",
    ground + person(34, 62, { arms: "stand", face: "wide" }) +
    P("M70 112 L92 84 M81 98 l-10 -4", "none", 'stroke-width="6"') + C(92, 114, 12, "#a8dcf0") +
    P("M128 126 V84 Q128 58 152 58 Q176 58 176 84 V126 Z", "#e5e5ee"),
    T(34, 26, 12, "一身好装备", "middle") + T(152, 88, 14, "RIP", "middle") + T(152, 108, 12, "清零", "middle"));

  add("c08_streak", "连登日历：前六天点着火苗，第七天空着，火柴人急得咬指甲",
    ground + [0, 1, 2, 3, 4, 5].map(i => R(14 + i * 26, 22, 22, 22, "#ffc078", 3)).join("") + R(170, 22, 22, 22, "#fff", 3, 'stroke-dasharray="4 3"') +
    person(40, 62, { arms: "cover", face: "sad" }),
    [0, 1, 2, 3, 4, 5].map(i => E(25 + i * 26, 40, 14, "🔥")).join("") + E(181, 40, 15, "✖") + T(80, 100, 12, "今晚不登就清零", "start") + T(100, 14, 11, "连续 6 天", "middle"));

  add("c08_tag", "两张价签：左边原价500划掉、现价400，右边只写400，同样的钱感觉不同",
    P("M12 42 L26 18 H90 V66 H26 Z", "#ffe58a") + P("M110 42 L124 18 H188 V66 H124 Z", "#fffdf3") + P("M38 36 H72", "none", 'stroke="#e5484d" stroke-width="3"') +
    person(100, 80, { s: 0.8, face: "grin" }),
    T(55, 36, 14, "500", "middle") + T(58, 56, 12, "现价 400", "middle") + T(158, 48, 16, "400", "middle") + T(40, 98, 12, "赚到！", "middle") + T(160, 98, 12, "平平", "middle"));

  add("c08_penalty", "设计过度惩罚：每个小失误都清零，红色的减一分纸条把火柴人埋住",
    ground + person(100, 62, { arms: "cover", face: "sad" }) +
    [[16, 16], [50, 30], [140, 12], [160, 44], [10, 62], [168, 88]].map(p => R(p[0], p[1], 26, 17, "#ffb3c6", 2)).join(""),
    [[16, 16], [50, 30], [140, 12], [160, 44], [10, 62], [168, 88]].map(p => T(p[0] + 13, p[1] + 13, 11, "−1", "middle")).join("") + T(46, 100, 12, "错一步，", "middle") + T(46, 114, 12, "清零重来", "middle"));

  /* ---------- 第5节 选择过载 ---------- */
  add("c08_jam", "果酱摊对比：左边二十四种果酱，大家都停下来看，却很少有人买；右边六种，买的人反而更多",
    R(8, 74, 84, 8, "#c99a5a") + R(108, 74, 84, 8, "#c99a5a") +
    [0, 1, 2].map(r => [0, 1, 2, 3, 4, 5, 6, 7].map(c => C(18 + c * 9.6, 70 - r * 10, 4, ["#ff9aa8", "#c7a4ff", "#ffb870", "#8fd0f0"][(r + c) % 4])).join("")).join("") +
    [0, 1, 2].map(c => C(128 + c * 22, 68, 8, ["#ff9aa8", "#c7a4ff", "#ffb870"][c])).join(""),
    T(50, 30, 12, "24 种", "middle") + T(150, 30, 12, "6 种", "middle") + T(50, 100, 12, "60% 停下", "middle") + T(50, 116, 12, "仅 3% 买", "middle") + T(150, 100, 12, "40% 停下", "middle") + T(150, 116, 12, "约 30% 买", "middle"));

  add("c08_skills40", "开局弹出四十个技能图标，火柴人举起双手不知所措",
    ground + person(40, 62, { arms: "up", face: "wide" }) +
    [0, 1, 2, 3, 4].map(r => [0, 1, 2, 3, 4, 5, 6, 7].map(c => R(100 + c * 12, 28 + r * 12, 9, 9, ["#ffb3c6", "#a8dcf0", "#ffe58a", "#b6e8a8", "#d8c8ff"][(r * 3 + c) % 5], 2)).join("")).join(""),
    T(40, 28, 12, "从哪开始？", "middle") + T(146, 106, 12, "40 个技能！", "middle"));

  add("c08_recommend", "视频网站只给六个推荐：火柴人指着屏幕，一下就选好了",
    ground + person(36, 62, { arms: "point", face: "smile" }) + R(82, 20, 108, 86, "#fffdf3", 4) +
    [0, 1].map(r => [0, 1, 2].map(c => R(90 + c * 34, 46 + r * 28, 30, 22, ["#ffb3c6", "#a8dcf0", "#ffe58a", "#b6e8a8", "#d8c8ff", "#ffc078"][r * 3 + c], 2)).join("")).join(""),
    T(136, 38, 12, "为你推荐", "middle"));

  add("c08_swords10", "兵器架上十把几乎一模一样的剑，火柴人挠头：到底选哪把",
    ground + person(36, 62, { arms: "chin", face: "flat", look: 1 }) + R(78, 28, 112, 98, "#ecd9a0", 3) +
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => P(`M${88 + i * 10.4} 38 V112 M${84 + i * 10.4} 54 h8`, "none", 'stroke-width="3"')).join(""),
    T(36, 28, 13, "……？", "middle") + T(134, 18, 12, "几乎一模一样", "middle"));

  /* ---------- 第6节 信息量 ---------- */
  add("c08_coin", "两根概率条：五五开的悬念最大，九十九比一几乎没有悬念",
    R(30, 36, 70, 18, "#ffb3c6", 2) + R(100, 36, 70, 18, "#a8dcf0", 2) + R(30, 92, 133, 18, "#ffb3c6", 2) + R(168, 92, 3, 18, "#a8dcf0"),
    T(100, 28, 12, "五五开：1 bit", "middle") + T(100, 84, 12, "99 比 1：约 0.08 bit", "middle") + T(100, 130, 12, "越难猜，信息量越大", "middle"));

  add("c08_top97", "统计图：九成七的玩家买了同一把武器，别的选项几乎没人要",
    ground + person(32, 62, { arms: "point", face: "flat", glasses: true, look: 1 }) + R(78, 46, 96, 16, "#ffd34d", 2) + R(78, 82, 4, 16, "#a8dcf0"),
    T(78, 40, 12, "同一把武器 97%") + T(78, 76, 12, "其余全部 3%") + T(32, 28, 12, "没选择", "middle"));

  add("c08_whodunit", "看悬疑片：火柴人十分钟就猜中了凶手，屏幕上写着“凶手：他”，火柴人打哈欠",
    ground + person(36, 62, { arms: "chin", face: "o" }) + R(86, 26, 100, 70, "#a8dcf0", 5) + C(106, 54, 8, SK) + P("M106 62 V82 M106 82 L99 92 M106 82 L113 92 M106 68 L97 77 M106 68 L115 77", "none"),
    T(154, 58, 13, "凶手：他", "middle") + T(36, 28, 12, "早猜到了", "middle") + T(136, 118, 12, "还有 90 分钟……", "middle"));

  add("c08_dice", "三颗骰子的箭头指向空白的问号框，中间断开：随机很多，却没有后果",
    R(10, 30, 28, 28, "#fff", 5) + R(52, 58, 28, 28, "#fff", 5) + R(94, 30, 28, 28, "#fff", 5) +
    C(24, 44, 3, INK, 'stroke="none"') + C(66, 72, 3, INK, 'stroke="none"') + C(108, 44, 3, INK, 'stroke="none"') +
    P("M124 50 Q140 46 150 62", "none", 'stroke-dasharray="4 5" stroke-width="2.5"') + R(154, 64, 32, 32, "#fffdf3", 4, 'stroke-dasharray="4 4"'),
    T(170, 86, 20, "?", "middle") + T(100, 116, 12, "熵再高，没有后果也只是掷骰子", "middle"));
})();
