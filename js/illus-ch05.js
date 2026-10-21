/* 第 5 章插图包：涌现与系统思考（火柴人风）。名字前缀 c05_ */
(function () {
  const { person, ground, T, E, eye, SK, INK } = window.illusKit;
  const G = (x, s, o) => person(x, 126 - 64 * s, Object.assign({ s }, o || {}));
  const R = (x, y, w, h, fill, ex) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (fill || "#fff") + '"' + (ex || "") + "/>";
  const C = (x, y, r, fill) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (fill || "#fff") + '"/>';
  const P = (d, fill, ex) => '<path d="' + d + '" fill="' + (fill || "none") + '"' + (ex || "") + "/>";
  const EL = (x, y, rx, ry, fill) => '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry + '" fill="' + (fill || "#fff") + '"/>';
  const RED = "#e5484d", BLUE = "#3b82f6";
  const bird = (x, y, ex) => P("M" + (x - 6) + " " + y + " q3 -6 6 0 q3 -6 6 0", "none", ex || ' stroke-width="2.5"');
  const sq = (x, y, s, fill) => R(x, y, s, s, fill || INK, ' stroke-width="1.5"');
  const hare = (x, y) => EL(x, y, 9, 6, "#e8e8f0") + P("M" + (x + 3) + " " + (y - 5) + " l-1 -12 M" + (x + 8) + " " + (y - 4) + " l2 -11", "none", ' stroke-width="3"') + eye(x + 5, y - 1);
  const lynx = (x, y) => C(x, y, 8, "#ffd9a8") + P("M" + (x - 7) + " " + (y - 4) + " l1 -10 l7 6 M" + (x + 7) + " " + (y - 4) + " l-1 -10 l-7 6", "#ffd9a8", ' stroke-width="2.5"') + eye(x - 3, y) + eye(x + 3, y);

  illusAdd("c05_starlings", "黄昏的椋鸟群排成一条流动的S形，其中一只鸟只盯着身边三只邻居",
    Array.from({ length: 26 }, (_, i) => bird(12 + i * 7, Math.round(78 + 26 * Math.sin(i * 0.45) + ((i * 37) % 11) - 5))).join("") +
    '<circle cx="' + (12 + 13 * 7) + '" cy="' + Math.round(78 + 26 * Math.sin(13 * 0.45) + 2) + '" r="17" fill="none" stroke="' + RED + '" stroke-dasharray="4 4" stroke-width="2.5"/>',
    T(100, 22, 13, "没有指挥，只看身边几只", "middle"));

  illusAdd("c05_chess", "一页纸的象棋规则，旁边却堆着厚厚几摞开局、残局和流派的书",
    R(14, 54, 38, 52, "#fff") + P("M20 66 h26 M20 76 h26" , "none", ' stroke-width="2"') +
    P("M60 80 h24 M76 72 l8 8 l-8 8", "none", ' stroke-width="3.5"') +
    R(98, 84, 84, 22, "#ffb3c6") + R(106, 62, 76, 22, "#a8dcf0") + R(114, 40, 66, 22, "#ffe58a") + R(122, 18, 56, 22, "#b6e8a8"),
    T(33, 130, 12, "规则一页", "middle") + T(140, 130, 12, "开局·残局·流派", "middle"));

  illusAdd("c05_redstone", "红石：一根拉杆通过红色的粉线和一个逻辑门，点亮远处的灯",
    G(24, 0.6, { arms: "point", face: "grin" }) + R(46, 82, 10, 24, "#c98f5a") + P("M51 82 l8 -14", "none", ' stroke-width="4"') +
    P("M56 100 H84 V86 H112 V100 H140", "none", ' stroke="' + RED + '" stroke-width="4"') + R(84, 66, 28, 20, "#e8e8f0") +
    C(158, 96, 14, "#ffe58a") + P("M158 70 v8 M178 80 l-6 6 M138 80 l6 6", "none", ' stroke-width="3"') + R(150, 108, 16, 10, "#cfd3dc"),
    T(98, 22, 13, "拉杆 → 逻辑门 → 灯", "middle") + T(98, 60, 11, "与", "middle"));

  illusAdd("c05_combo", "格斗游戏：一个火柴人连续打出三下，对手被一连串命中标记打得后仰",
    G(48, 0.8, { arms: "point", face: "grin", legs: "wide" }) + G(150, 0.8, { arms: "up", face: "o", look: -1 }) +
    P("M96 62 l10 -6 M100 74 l14 0 M96 86 l10 6", "none", ' stroke="' + RED + '" stroke-width="3.5"') + P("M122 60 l-8 -6 M126 52 l-4 -8", "none", ' stroke-width="2.5"'),
    T(100, 22, 14, "多接上了一击！", "middle") + T(112, 112, 12, "1 · 2 · 3", "middle"));

  illusAdd("c05_boids3", "鸟群三条规则：别靠太近、跟邻居同方向、往邻居中间靠",
    R(6, 30, 58, 70, "#fffdf3") + R(70, 30, 58, 70, "#fffdf3") + R(134, 30, 58, 70, "#fffdf3") +
    C(26, 66, 6, "#ffb3c6") + C(44, 66, 6, "#ffb3c6") + P("M20 66 h-8 M50 66 h8", "none", ' stroke="' + RED + '" stroke-width="3"') +
    C(88, 52, 6, "#a8dcf0") + C(88, 80, 6, "#a8dcf0") + C(112, 66, 6, "#a8dcf0") + P("M96 52 h14 M96 80 h14 M120 66 h4", "none", ' stroke-width="3"') +
    C(152, 48, 6, "#b6e8a8") + C(180, 52, 6, "#b6e8a8") + C(166, 86, 6, "#b6e8a8") + C(166, 66, 3, INK) + P("M156 54 l6 8 M176 56 l-6 6 M166 80 v-8", "none", ' stroke-width="2.5"'),
    T(35, 22, 12, "别太近", "middle") + T(99, 22, 12, "同方向", "middle") + T(163, 22, 12, "往中间靠", "middle") + T(100, 124, 12, "三条局部规则，没有领队", "middle"));

  (function () {
    const cars = [];
    const angs = [160, 170, 180, 190, 200, 230, 270, 310, 350, 20, 55, 90, 125];
    angs.forEach((a, i) => { const r = a * Math.PI / 180; cars.push(R(Math.round(100 + 66 * Math.cos(r)) - 5, Math.round(78 + 38 * Math.sin(r)) - 4, 10, 8, a >= 160 && a <= 200 ? RED : "#a8dcf0", ' stroke-width="2"')); });
    illusAdd("c05_jam", "环形公路上匀速行驶的车，没有任何障碍，左侧却自己挤成一团红色的堵车区",
      '<ellipse cx="100" cy="78" rx="66" ry="38" fill="none" stroke-width="12" stroke="#e0e0e8"/><ellipse cx="100" cy="78" rx="66" ry="38" fill="none" stroke-width="2.5" stroke-dasharray="5 7"/>' + cars.join("") +
      P("M60 120 h-22 M46 112 l-8 8 l8 8", "none", ' stroke="' + RED + '" stroke-width="3"'),
      T(100, 22, 13, "没有事故，也会堵", "middle") + T(100, 82, 12, "堵车波倒着走", "middle"));
  })();

  illusAdd("c05_monsters", "关卡里摆满怪物，每只各走各的巡逻线，彼此毫无联系",
    Array.from({ length: 18 }, (_, i) => { const x = 22 + (i % 6) * 32, y = 44 + Math.floor(i / 6) * 32; return C(x, y, 6, "#ffb3c6") + P("M" + (x - 11) + " " + (y + 11) + " h22", "none", ' stroke-width="2" stroke-dasharray="3 3"'); }).join(""),
    T(100, 22, 13, "50 个怪（只画一部分）", "middle") + T(100, 136, 12, "只是数量多，不是涌现", "middle"));

  illusAdd("c05_dicevslife", "左边是随机撒的一堆点，乱成一团；右边是完全确定的规则，却让五个格子拼成的滑翔机一格格走下去",
    '<path d="M100 28 V120" stroke-dasharray="4 6" stroke-width="2.5"/>' +
    [[16, 54], [32, 98], [52, 40], [70, 76], [28, 76], [80, 104], [60, 60], [44, 110], [84, 50], [20, 110]].map(p => C(p[0], p[1], 4, INK)).join("") +
    sq(130, 52, 12, "#ffe58a") + sq(142, 64, 12, "#ffe58a") + sq(118, 76, 12, "#ffe58a") + sq(130, 76, 12, "#ffe58a") + sq(142, 76, 12, "#ffe58a") + P("M160 92 l22 20 M172 112 h10 v-10", "none", ' stroke-width="3"'),
    T(50, 20, 12, "随机：只是乱", "middle") + T(150, 20, 12, "规则确定却会走", "middle"));

  (function () {
    const balls = [[0.1, 5], [0.34, 9], [0.58, 15], [0.84, 24]].map(([t, r]) => C(Math.round(14 + t * 172), Math.round(40 + t * 80 - r * 0.9), r, "#fff")).join("");
    illusAdd("c05_snowball", "雪球滚下山坡越滚越大：击杀换金币，金币换装备，装备再换更多击杀",
      '<path d="M8 38 L192 124" fill="none" stroke-width="4"/>' + balls + P("M150 40 q10 -10 22 -4 M168 30 l6 6 l-9 2", "none", ' stroke-width="2.5"'),
      T(100, 20, 13, "领先 → 更领先", "middle"));
  })();

  illusAdd("c05_video", "一个视频的播放量越来越高，平台因此推荐给更多人，又带来更高的播放量",
    R(52, 22, 52, 90, "#fff") + R(60, 86, 8, 18, "#ffb3c6") + R(72, 74, 8, 30, "#ffb3c6") + R(84, 58, 8, 46, "#ffb3c6") + P("M60 44 l14 -12 l6 8", "none", ' stroke-width="2.5"') +
    P("M112 50 Q150 30 160 62 Q164 96 120 100 M126 90 l-10 10 l14 4", "none", ' stroke-width="3"'),
    T(164, 40, 12, "越热门", "middle") + T(160, 126, 12, "越被推荐", "middle"));

  illusAdd("c05_thermo", "恒温器：房间太热就关暖气，太冷就开，温度被一次次拉回设定值",
    R(14, 36, 36, 46, "#e8e8f0") + C(32, 56, 9, "#fff") + P("M32 56 l6 -5", "none", ' stroke-width="2.5"') +
    R(150, 28, 14, 70, "#fff") + C(157, 106, 10, RED) + R(153, 62, 8, 36, RED, ' stroke-width="1.5"') +
    P("M56 50 Q100 28 142 50 M134 42 l10 8 l-12 4", "none", ' stroke-width="3"') + P("M144 90 Q100 114 56 74 M64 74 l-10 2 l6 -10", "none", ' stroke-width="3" stroke-dasharray="3 5"'),
    T(100, 18, 13, "太热就关，太冷就开", "middle") + T(32, 100, 12, "恒温器", "middle") + T(100, 132, 12, "拉回设定值", "middle"));

  illusAdd("c05_kart", "赛车游戏：落后的粉色车拿到发光的强力道具箱，正在追上前面的蓝色车",
    ground + R(20, 92, 40, 16, "#ffb3c6") + C(28, 112, 6, "#6b6b7d") + C(52, 112, 6, "#6b6b7d") + C(40, 84, 7, SK) +
    R(130, 100, 30, 12, "#a8dcf0") + C(136, 116, 5, "#6b6b7d") + C(154, 116, 5, "#6b6b7d") + C(145, 94, 5, SK) +
    R(78, 52, 26, 26, "#ffe58a") + P("M91 60 v8 M91 72 v1", "none", ' stroke-width="3"') + P("M14 98 h-8 M14 106 h-10", "none", ' stroke-width="2.5"') + P("M70 40 l-6 -8 M110 40 l6 -8 M91 40 v-10", "none", ' stroke-width="2.5"') +
    P("M80 78 Q64 80 54 88", "none", ' stroke-width="2.5" stroke-dasharray="4 4"') + P("M61 85 L53 89 L57 81", "none", ' stroke-width="2.5"'),
    T(100, 22, 13, "落后 → 强道具", "middle") + T(91, 72, 15, "？", "middle") + T(40, 74, 12, "落后", "middle") + T(145, 82, 12, "领先", "middle"));

  illusAdd("c05_rubber", "领先的火柴人使劲往前跑，身后被一根越拉越紧的橡皮筋拽着",
    ground + G(150, 0.8, { arms: "stand", face: "sad", legs: "run", look: 1 }) + G(36, 0.8, { arms: "up", face: "grin", legs: "run" }) +
    P("M52 100 Q70 84 88 100 T124 100 T146 96", "none", ' stroke="' + RED + '" stroke-width="3.5"'),
    T(100, 22, 13, "领先的努力被拉回来", "middle"));

  illusAdd("c05_shower", "洗澡拧水龙头：水太凉就拧热，热水还没到又拧，结果一下子烫手，再拧回去又变凉",
    P("M16 22 h34 l-8 12 h-18z", "#e8e8f0") + P("M22 40 v10 M32 40 v14 M42 40 v10", "none", ' stroke="' + BLUE + '" stroke-width="2.5"') +
    G(70, 0.8, { arms: "point", face: "o" }) + P("M130 100 V126", "none", ' stroke-width="5"') + C(130, 86, 14, "#fff") + P("M130 86 l8 -8", "none", ' stroke-width="3"') +
    P("M150 66 q14 -10 28 0 M168 56 l10 10 l-14 2", "none", ' stroke-width="2.5"') + P("M12 112 q18 -22 36 0 t36 0 t36 0 t36 0", "none", ' stroke="' + RED + '" stroke-width="3"'),
    T(100, 135, 12, "凉 → 烫 → 凉", "middle") + T(100, 20, 13, "来回摆动", "middle"));

  illusAdd("c05_tide", "副本里怪物数量和玩家数量像两条错开的潮汐，一个涨时另一个落",
    P("M12 112 H190 M12 112 V30", "none", ' stroke-width="3"') +
    P("M14 80 q16 -48 32 0 t32 0 t32 0 t32 0", "none", ' stroke="' + RED + '" stroke-width="4"') + P("M30 80 q16 -48 32 0 t32 0 t32 0 t32 0", "none", ' stroke="' + BLUE + '" stroke-width="4" stroke-dasharray="6 4"'),
    T(100, 22, 13, "怪物 · 玩家：此起彼伏", "middle") + T(180, 128, 12, "时间 →", "end") + T(60, 128, 12, "红：怪物  蓝：玩家", "middle"));

  illusAdd("c05_beer", "啤酒游戏：从零售、批发、分销到工厂四站，订单的波动一站比一站夸张",
    [[12, 18, "零售"], [58, 34, "批发"], [104, 56, "分销"], [150, 84, "工厂"]].map(([x, h]) => R(x, 118 - h, 36, h, "#ffe58a")).join(""),
    T(100, 20, 13, "订单越往上游越夸张", "middle") + T(30, 136, 12, "零售", "middle") + T(76, 136, 12, "批发", "middle") + T(122, 136, 12, "分销", "middle") + T(168, 136, 12, "工厂", "middle"));

  illusAdd("c05_instant", "水龙头一拧水温立刻变化，没有延迟，所以水温稳稳停在想要的位置，不来回摆",
    ground + P("M20 40 h40 v16 M60 56 v8", "none", ' stroke-width="5"') + C(60, 70, 3, BLUE) + C(60, 80, 3, BLUE) +
    G(78, 0.6, { arms: "point", face: "grin" }) + P("M110 60 H190", "none", ' stroke="' + RED + '" stroke-width="4"') + P("M110 100 H190 M110 100 V48", "none", ' stroke-width="2.5"'),
    T(152, 38, 12, "水温稳稳不动", "middle") + T(100, 22, 13, "没有延迟 → 不摆动", "middle"));

  illusAdd("c05_bank", "存钱罐：工资像水龙头流进来，开销像排水口流出去，罐里的钱是存量",
    EL(100, 86, 42, 28, "#ffb3c6") + P("M62 80 q-16 -2 -18 12", "none", ' stroke-width="3"') + EL(144, 90, 8, 10, "#ff8fab") + P("M78 112 v12 M120 112 v12", "none") + R(84, 58, 28, 4, INK) + eye(130, 78) +
    P("M20 26 H60 V50 M52 42 l8 10 l8 -10", "none", ' stroke-width="3"') + P("M146 118 H186 V98", "none", ' stroke-width="3"'),
    T(40, 20, 12, "工资", "middle") + T(166, 132, 12, "开销", "middle") + T(100, 100, 12, "存量", "middle"));

  illusAdd("c05_vn", "冯·诺依曼的设想：一台机器能造出另一台和自己一模一样的机器",
    G(30, 0.8, { arms: "chin", face: "flat", glasses: true, look: 1 }) +
    R(78, 62, 28, 32, "#e8e8f0") + R(82, 44, 20, 16, "#e8e8f0") + C(88, 51, 2, INK) + C(96, 51, 2, INK) +
    R(142, 72, 20, 24, "#d8c8ff") + R(145, 56, 14, 14, "#d8c8ff") + C(149, 62, 1.8, INK) + C(155, 62, 1.8, INK) +
    P("M108 80 H138 M130 72 l8 8 l-8 8", "none", ' stroke-width="3"'),
    T(100, 22, 13, "机器能造出自己吗？", "middle"));

  illusAdd("c05_conway", "康威戴着眼镜伏在桌前，在方格纸上用笔一格格试规则",
    R(60, 106, 126, 6, "#c98f5a") + P("M66 112 v14 M180 112 v14", "none", ' stroke-width="4"') + R(96, 30, 78, 76, "#fff") + P("M96 56 h78 M96 82 h78 M122 30 v76 M148 30 v76", "none", ' stroke-width="1.5"') + sq(122, 56, 26, "#ffe58a") + sq(148, 82, 26, "#ffe58a") + sq(96, 82, 26, "#ffe58a") +
    G(46, 0.85, { arms: "desk", legs: "sit", face: "smile", glasses: true, hair: true }) + P("M60 100 L90 96", "none", ' stroke-width="4"'),
    T(135, 22, 12, "纸笔试规则", "middle"));

  illusAdd("c05_gardner", "杂志专栏的版面上画着一只滑翔机，几位读者拿着信涌来",
    R(30, 18, 66, 90, "#fff") + R(30, 18, 66, 18, "#ffb3c6") + sq(54, 56, 10, "#ffe58a") + sq(64, 66, 10, "#ffe58a") + sq(44, 76, 10, "#ffe58a") + sq(54, 76, 10, "#ffe58a") + sq(64, 76, 10, "#ffe58a") +
    G(130, 0.55, { arms: "up", face: "grin" }) + G(168, 0.55, { arms: "wave", face: "o" }) + R(124, 56, 14, 10, "#fff") + R(162, 52, 14, 10, "#fff"),
    T(63, 32, 12, "数学游戏", "middle") + T(150, 28, 12, "读者来信", "middle"));

  illusAdd("c05_gun", "滑翔机枪：一个固定的图案每隔一阵就向外射出一只滑翔机，旁边的人举着五十美元",
    R(14, 54, 46, 40, "#d8c8ff") + P("M62 74 H84", "none", ' stroke-width="2.5" stroke-dasharray="3 4"') +
    sq(90, 64, 8, "#ffe58a") + sq(98, 72, 8, "#ffe58a") + sq(82, 80, 8, "#ffe58a") + sq(90, 80, 8, "#ffe58a") + sq(98, 80, 8, "#ffe58a") +
    G(168, 0.7, { arms: "up", face: "grin" }) + R(150, 36, 32, 16, "#b6e8a8"),
    T(100, 20, 13, "每隔一阵吐一只", "middle") + T(166, 48, 12, "$50", "middle") + T(37, 112, 12, "滑翔机枪", "middle"));

  illusAdd("c05_computer", "格子里的滑翔机一路走到一台计算器旁：同样的规则也能搭出能算数的机器",
    sq(16, 54, 12, "#ffe58a") + sq(28, 66, 12, "#ffe58a") + sq(4, 78, 12, "#ffe58a") + sq(16, 78, 12, "#ffe58a") + sq(28, 78, 12, "#ffe58a") +
    P("M50 80 H100 M92 72 l8 8 l-8 8", "none", ' stroke-width="3.5"') +
    R(112, 30, 70, 90, "#e8e8f0") + R(120, 38, 54, 20, "#fff") + [0, 1, 2].map(i => [0, 1, 2].map(j => R(122 + j * 18, 68 + i * 16, 14, 10, "#fff", ' stroke-width="2"')).join("")).join(""),
    T(147, 53, 13, "1+1", "middle") + T(100, 20, 13, "格子也能当计算机", "middle"));

  illusAdd("c05_lotka", "洛特卡拿着自己的书，书页上画着两条错开的波浪",
    G(40, 0.9, { arms: "hold", face: "smile", glasses: true }) + R(92, 28, 80, 80, "#fff") + P("M100 80 q10 -34 20 0 t20 0 t20 0", "none", ' stroke="' + RED + '" stroke-width="3"') + P("M108 80 q10 -34 20 0 t20 0 t20 0", "none", ' stroke="' + BLUE + '" stroke-width="3"'),
    T(132, 22, 13, "1925", "middle") + T(132, 124, 12, "两个种群的方程", "middle"));

  illusAdd("c05_volterra", "沃尔泰拉在黑板上写下兔子与狐狸的方程",
    G(34, 0.9, { arms: "point", face: "smile", beard: true, glasses: true }) + R(84, 20, 104, 64, "#2f6f58") +
    '<g stroke="#fff" fill="none"><path d="M96 66 q12 -22 24 0 t24 0 t24 0" stroke-width="2.5"/></g>',
    '<text x="136" y="42" font-size="13" text-anchor="middle" fill="#fff" stroke="none">兔子 × 狐狸</text>' + T(136, 108, 12, "1926 年的方程", "middle"));

  illusAdd("c05_adriatic", "战时海上渔船很少，捕食性的大鱼占的比例反而变高",
    R(0, 62, 200, 70, "#a8dcf0", ' stroke="none"') + P("M0 62 q12 -6 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0", "none", ' stroke-width="3"') +
    P("M150 56 h30 l-5 10 h-20z", "#c98f5a") + P("M165 56 V36 l12 12z", "#fff") +
    EL(50, 100, 22, 10, "#ffc078") + P("M72 100 l10 -8 v16z", "#ffc078") + eye(38, 98) + EL(100, 112, 22, 10, "#ffc078") + P("M122 112 l10 -8 v16z", "#ffc078") + eye(88, 110) +
    EL(150, 100, 9, 5, "#fff") + P("M159 100 l6 -4 v8z", "#fff"),
    T(100, 22, 13, "战时少捕捞，捕食者占比变高", "middle"));

  illusAdd("c05_lynx", "毛皮收购记录里，猞猁数量的高峰总比雪兔晚一两年",
    P("M12 112 H190 M12 112 V30", "none", ' stroke-width="3"') + P("M14 84 q16 -52 32 0 t32 0 t32 0 t32 0", "none", ' stroke="' + BLUE + '" stroke-width="4"') +
    P("M30 84 q16 -52 32 0 t32 0 t32 0 t32 0", "none", ' stroke="' + RED + '" stroke-width="4"') + hare(30, 36) + lynx(64, 36),
    T(100, 20, 13, "猞猁总晚兔子一步", "middle") + T(100, 130, 12, "蓝：雪兔  红：猞猁", "middle"));

  illusAdd("c05_kluane", "野外实验：围起一块地、给雪兔加食物，研究员在栅栏外记录",
    R(80, 40, 106, 66, "none", ' stroke-dasharray="6 5" stroke-width="3"') + hare(120, 82) + hare(160, 70) + C(104, 96, 3, "#9bdc8f") + C(138, 98, 3, "#9bdc8f") + C(172, 96, 3, "#9bdc8f") +
    ground + G(40, 0.8, { arms: "hold", face: "flat", look: 1 }) + R(54, 76, 16, 20, "#fff"),
    T(100, 22, 13, "围起来、加食物、再观察", "middle"));

  illusAdd("c05_go", "棋盘上只有寥寥几颗黑白子，旁边冒出一朵写着“变化无穷”的思考云",
    R(18, 30, 90, 90, "#ffe9a8") + P("M36 30 v90 M54 30 v90 M72 30 v90 M90 30 v90 M18 48 h90 M18 66 h90 M18 84 h90 M18 102 h90", "none", ' stroke-width="1.5"') +
    C(54, 66, 7, INK) + C(72, 66, 7, "#fff") + C(72, 84, 7, INK) + C(90, 48, 7, "#fff") + EL(152, 52, 40, 22, "#fff"),
    T(152, 57, 13, "变化无穷", "middle"));

  illusAdd("c05_lego", "三种不同形状的积木，用同样的凸点接口，搭成了一座小城堡",
    R(40, 90, 120, 30, "#ffb3c6") + R(54, 60, 40, 30, "#a8dcf0") + R(106, 60, 40, 30, "#a8dcf0") + R(40, 36, 28, 24, "#ffe58a") + R(132, 36, 28, 24, "#ffe58a") + R(80, 36, 40, 24, "#b6e8a8") +
    [48, 62, 140, 154, 88, 102, 112].map(x => C(x, 32, 3, "#fff")).join(""),
    T(100, 20, 13, "几种砖 + 统一接口", "middle"));

  illusAdd("c05_words", "两个火柴人聊天，各自说出一句从来没人说过的新句子",
    ground + G(40, 0.8, { arms: "wave", face: "smile" }) + G(160, 0.8, { arms: "point", face: "o" }) + EL(62, 30, 36, 15, "#fff") + EL(138, 30, 36, 15, "#fff"),
    T(62, 35, 12, "猫在睡觉！", "middle") + T(138, 35, 12, "猫在做梦？", "middle") + T(100, 84, 12, "有限的字", "middle") + T(100, 104, 12, "无限的句子", "middle"));

  illusAdd("c05_chem", "金属剑引来闪电，电又传到敌人身上；右边的火把把草地点着了：系统之间会互相作用",
    G(40, 0.8, { arms: "up", face: "o" }) + P("M54 72 L62 34", "none", ' stroke-width="4"') + P("M74 4 l-8 14 h10 l-8 16", "none", ' stroke="#f5b800" stroke-width="4"') + P("M64 38 L108 72", "none", ' stroke="#f5b800" stroke-width="3" stroke-dasharray="4 4"') +
    G(116, 0.55, { arms: "up", face: "shout" }) + P("M140 98 q4 -14 10 0 q4 -16 10 0 q4 -12 8 0", "#ff9f40", ' stroke-width="2.5"') + P("M134 126 H190", "none", ' stroke="#3aa655" stroke-width="5"'),
    T(146, 20, 12, "金属导电，火烧草", "middle"));

  illusAdd("c05_isolated", "三十种道具各自关在自己的小格子里，用不到别的格子里的东西",
    Array.from({ length: 6 }, (_, i) => { const x = 14 + (i % 3) * 62, y = 34 + Math.floor(i / 3) * 52; return R(x, y, 52, 42, "#fff7cf") + C(x + 26, y + 21, 8, ["#ffb3c6", "#a8dcf0", "#b6e8a8", "#d8c8ff", "#ffc078", "#ffe58a"][i]); }).join(""),
    T(100, 14, 12, "30 种道具，互不相识", "middle") + T(100, 28, 11.5, "（示意：只画了 6 种）", "middle"));

  illusAdd("c05_fog", "大雾里的登山者只能看脚下，顺着往高处走，爬上了身边的小山头，远处真正的高峰被雾遮住了",
    P("M0 126 Q40 76 84 126 Z", "#b6e8a8") + P("M96 126 Q150 8 200 126 Z", "#a8dcf0") +
    EL(100, 84, 36, 10, "#fff", ' stroke="none"') + person(42, 75, { s: 0.4, arms: "wave", face: "smile" }),
    T(100, 20, 13, "只看脚下，往高处走", "middle") + T(156, 54, 12, "更高的山？", "middle"));

  illusAdd("c05_meta", "五个火柴人举着同一把剑：当最强配置人人皆知，所有人就收敛到了同一套",
    ground + [22, 58, 100, 142, 178].map((x, i) => G(x, 0.5, { arms: "up", face: i === 2 ? "grin" : "flat" }) + P("M" + (x + 8) + " 92 v-28", "none", ' stroke-width="3"') + P("M" + (x + 3) + " 84 h10", "none", ' stroke-width="3"')).join(""),
    T(100, 22, 13, "人人都用同一套", "middle"));

  illusAdd("c05_restaurant", "一个人又站在常去的餐馆门口，旁边两扇没进过的门上都挂着问号",
    ground + G(20, 0.55, { arms: "point", face: "smile" }) + R(44, 50, 46, 76, "#ffb3c6") + R(98, 50, 46, 76, "#e8e8f0") + R(152, 50, 46, 76, "#e8e8f0") + R(58, 78, 18, 48, "#c98f5a") + R(112, 78, 18, 48, "#cfd3dc") + R(166, 78, 18, 48, "#cfd3dc"),
    T(100, 22, 13, "总去同一家？", "middle") + T(121, 70, 20, "？", "middle") + T(175, 70, 20, "？", "middle") + T(67, 70, 12, "常去", "middle"));

  illusAdd("c05_good", "小山头上的人铺着格子布野餐，笑得很满足：远处的高山没去，也并不遗憾",
    P("M0 126 Q60 60 120 126 Z", "#b6e8a8") + P("M130 126 Q170 40 200 126 Z", "#a8dcf0") + R(40, 90, 34, 6, "#ffb3c6") + C(24, 56, 10, "#ffe58a") +
    person(56, 69, { s: 0.4, arms: "wave", face: "grin" }) + R(78, 88, 10, 8, "#c98f5a"),
    T(100, 20, 13, "够好了，不必再爬", "middle"));

  illusAdd("c05_zoo", "生命游戏的小动物园：稳定的方块、来回翻转的闪烁器、会走路的滑翔机",
    R(8, 34, 56, 56, "#fffdf3") + R(72, 34, 56, 56, "#fffdf3") + R(136, 34, 56, 56, "#fffdf3") +
    sq(26, 52, 9) + sq(35, 52, 9) + sq(26, 61, 9) + sq(35, 61, 9) +
    sq(82, 58, 9) + sq(91, 58, 9) + sq(100, 58, 9) + P("M112 44 v-2 M112 78 v2", "none") +
    sq(156, 42, 9) + sq(165, 51, 9) + sq(147, 60, 9) + sq(156, 60, 9) + sq(165, 60, 9) + P("M178 74 l8 8 M180 82 h6 v-6", "none", ' stroke-width="2.5"'),
    T(36, 108, 13, "稳定", "middle") + T(100, 108, 13, "振荡", "middle") + T(164, 108, 13, "会走", "middle") + T(100, 24, 13, "同样 4 条规则", "middle"));

  illusAdd("c05_garden", "园丁提着水壶给一排长得各不相同的植物浇水，旁边没有任何建筑图纸",
    ground + G(40, 0.9, { arms: "hold", face: "smile", hat: "cap" }) + P("M70 70 l22 -4 l-2 12 l-22 2z", "#a8dcf0") + P("M92 66 q10 6 6 26", "none", ' stroke="' + BLUE + '" stroke-width="2.5" stroke-dasharray="3 4"') +
    P("M110 126 v-26 M110 108 q-12 -2 -14 -12 M110 112 q12 -2 14 -10", "none", ' stroke="#3aa655" stroke-width="3"') + P("M142 126 v-44 M142 100 q-14 -2 -16 -16 M142 94 q14 -2 16 -18", "none", ' stroke="#3aa655" stroke-width="3"') + C(142, 78, 7, "#ff8fab") + P("M174 126 v-18 M174 118 q-8 -2 -8 -8", "none", ' stroke="#3aa655" stroke-width="3"'),
    T(110, 22, 13, "园丁，不是建筑师", "middle"));
  illusAdd("c05_vn2", "两位数学家站在画着方格的黑板前，讨论每个格子怎样根据邻居改变自己",
    R(14, 16, 98, 70, "#2f6f58") + P("M14 40 h98 M14 62 h98 M46 16 v70 M80 16 v70", "none", ' stroke="#fff" stroke-width="1.5"') + sq(48, 42, 20, "#ffe58a") + sq(82, 64, 20, "#ffe58a") +
    G(138, 0.7, { arms: "point", face: "smile", glasses: true, look: -1 }) + G(180, 0.6, { arms: "chin", face: "flat", look: -1 }),
    T(63, 106, 12, "方格世界", "middle"));
})();
