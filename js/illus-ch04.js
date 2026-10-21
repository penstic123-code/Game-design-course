/* 第 4 章插图包：规则与 MDA（火柴人风）。名字前缀 c04_ */
(function () {
  const { person, ground, T, E, eye, SK, INK } = window.illusKit;
  const G = (x, s, o) => person(x, 126 - 64 * s, Object.assign({ s }, o || {}));
  const R = (x, y, w, h, fill, ex) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (fill || "#fff") + '"' + (ex || "") + "/>";
  const C = (x, y, r, fill) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (fill || "#fff") + '"/>';
  const P = (d, fill, ex) => '<path d="' + d + '" fill="' + (fill || "none") + '"' + (ex || "") + "/>";
  const EL = (x, y, rx, ry, fill) => '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry + '" fill="' + (fill || "#fff") + '"/>';
  const bub = (x, y, rx, ry) => EL(x, y, rx, ry, "#fff");
  const RED = "#e5484d";
  const catAt = (x, y) => C(x, y, 11, "#ffd9a8") + P("M" + (x - 9) + " " + (y - 6) + " L" + (x - 7) + " " + (y - 20) + " L" + (x + 2) + " " + (y - 9) + " Z M" + (x + 9) + " " + (y - 6) + " L" + (x + 7) + " " + (y - 20) + " L" + (x - 2) + " " + (y - 9) + " Z", "#ffd9a8") + eye(x - 4, y - 1) + eye(x + 4, y - 1) + P("M" + (x - 3) + " " + (y + 5) + " q3 3 6 0", "none", ' stroke-width="2.2"');
  const mouseAt = (x, y) => EL(x, y, 13, 9, "#e0e0e8") + C(x - 6, y - 10, 4.5, "#e0e0e8") + C(x + 3, y - 10, 4.5, "#e0e0e8") + eye(x + 6, y - 2) + P("M" + (x - 13) + " " + (y + 2) + " q-10 6 -15 -2", "none", ' stroke-width="2.5"');
  const arrow = (x, y, dx, dy) => P("M" + x + " " + y + " l" + dx + " " + dy, "none", ' stroke-width="3"');

  illusAdd("c04_bridge", "设计者站在左岸写下规则，玩家站在右岸感受到情绪，中间要靠一串“行为”的垫脚石才能连起来",
    '<path d="M64 112 H136 V128 H64Z" fill="#a8dcf0" stroke-width="2.5"/>' +
    EL(84, 108, 12, 5, "#cfd3dc") + EL(116, 108, 12, 5, "#cfd3dc") + '<path d="M6 126 H64 M136 126 H194" stroke-dasharray="2 7" stroke-width="3"/>' +
    G(30, 0.8, { arms: "hold", face: "smile", look: 1 }) + G(172, 0.8, { arms: "up", face: "o", look: -1 }) +
    P("M48 62 Q100 28 154 62", "none", ' stroke-dasharray="3 6" stroke-width="2.8"') + P("M148 52 l8 10 l-12 2", "none", ' stroke-width="2.8"'),
    T(30, 52, 12, "规则", "middle") + T(172, 52, 12, "感受", "middle") + T(100, 24, 13, "中间隔着：玩出来的行为", "middle"));

  illusAdd("c04_catmouse", "猫速度比老鼠慢一点：老鼠绕着柱子兜圈，猫追不上",
    R(88, 44, 24, 74, "#cfd3dc") + '<ellipse cx="100" cy="84" rx="58" ry="38" fill="none" stroke-dasharray="6 6" stroke-width="3"/>' +
    P("M80 47 l10 -2 l-5 9", "none", ' stroke-width="3"') + catAt(158, 84) + mouseAt(44, 84),
    T(100, 22, 13, "绕着柱子兜圈", "middle") + T(158, 130, 13, "猫", "middle") + T(30, 130, 13, "老鼠", "middle"));

  illusAdd("c04_count30", "捉迷藏：鬼闭眼数到30，躲的人趁机跑向远处",
    ground + G(34, 0.85, { arms: "cover", face: "closed" }) + bub(66, 26, 46, 16) +
    G(122, 0.55, { legs: "run", arms: "up", face: "o" }) + G(168, 0.55, { legs: "run", arms: "up", face: "grin" }) +
    arrow(96, 100, 14, 0) + arrow(142, 100, 12, 0),
    T(66, 31, 13, "数到 30", "middle") + T(146, 48, 12, "先躲远处", "middle"));

  illusAdd("c04_gate", "早高峰地铁站：闸机一次只放一个人，人群在闸机前排成队，过了闸机的人走散开",
    ground + R(92, 66, 8, 60, "#cfd3dc") + R(112, 66, 8, 60, "#cfd3dc") + P("M100 88 H112", "none", ' stroke-width="4"') +
    G(24, 0.5, { face: "flat", legs: "walk" }) + G(46, 0.5, { face: "flat", legs: "walk" }) + G(68, 0.5, { face: "sad", legs: "walk" }) + G(166, 0.5, { face: "smile", legs: "walk" }) + P("M130 112 h20", "none", ' stroke-width="3" stroke-dasharray="3 5"'),
    T(106, 48, 13, "一次放一个", "middle"));

  illusAdd("c04_wishlist", "设计文档上写着“机制：让玩家紧张”，旁边打了个红叉，因为这没法直接写成代码",
    G(40, 0.9, { arms: "chin", face: "flat", look: 1 }) + R(104, 18, 84, 66, "#fff") +
    P("M178 20 l12 12 M190 20 l-12 12", "none", ' stroke="' + RED + '" stroke-width="3.5"'),
    T(146, 42, 12, "机制：", "middle") + T(146, 58, 12, "让玩家紧张", "middle") + T(146, 106, 12, "写不进代码", "middle"));

  illusAdd("c04_complaint", "玩家说“好烦”，这只是症状；背后可能是怪太硬、路太绕或死后要重走，要顺着往回查",
    G(26, 0.8, { arms: "up", face: "sad" }) + bub(48, 22, 30, 14) +
    R(112, 12, 78, 26, "#fff7cf") + R(112, 46, 78, 26, "#e8f6fc") + R(112, 80, 78, 26, "#ffe9ef") +
    P("M60 36 Q92 40 110 25 M58 60 Q92 60 110 59 M60 84 Q92 82 110 93", "none", ' stroke-dasharray="3 5" stroke-width="2.5"'),
    T(48, 27, 14, "好烦", "middle") + T(151, 30, 12, "怪太硬？", "middle") + T(151, 64, 12, "路太绕？", "middle") + T(151, 98, 12, "死后重走？", "middle") + T(151, 124, 12, "顺着往回查", "middle"));

  illusAdd("c04_animal", "海边小岛式的悠闲游戏：一个火柴人坐在码头上钓鱼，旁边是自己布置的小屋和花，没有计分板",
    '<rect x="70" y="102" width="130" height="26" fill="#a8dcf0" stroke-width="2.5"/>' + R(96, 92, 100, 8, "#c98f5a") +
    G(126, 0.7, { arms: "hold", face: "smile", legs: "sit" }) + P("M146 62 L186 34 M186 34 V106", "none", ' stroke-width="2.5"') + P("M4 122 H62", "none", ' stroke-width="3"') +
    R(10, 84, 40, 38, "#ffb3c6") + P("M4 86 L30 62 L56 86Z", "#ffe58a") + C(62, 116, 4, "#ff8fab") + C(70, 112, 4, "#fff") + C(30, 26, 11, "#ffe58a"),
    T(110, 20, 13, "想怎么布置都行", "middle"));

  illusAdd("c04_threefun", "三个火柴人玩不同的东西：躲避球、象棋、魔方，各自得到不同的乐趣",
    G(34, 0.55, { arms: "throw", face: "grin" }) + C(54, 62, 7, "#ff8fab") + G(100, 0.55, { arms: "hold", face: "flat", look: 1 }) +
    R(84, 102, 32, 5, "#fff") + P("M88 107 v19 M112 107 v19", "none", ' stroke-width="3"') + G(166, 0.55, { arms: "hold", face: "o" }) + R(174, 100, 14, 14, "#ffe58a") + P("M181 100 v14 M174 107 h14", "none", ' stroke-width="1.8"'),
    T(37, 16, 12, "友谊·感官", "middle") + T(100, 16, 12.5, "挑战", "middle") + T(166, 16, 12.5, "发现", "middle") +
    T(34, 34, 13, "躲避球", "middle") + T(100, 34, 13, "象棋", "middle") + T(166, 34, 13, "魔方", "middle"));

  illusAdd("c04_pickone", "同一个方块世界里，有人盖房子，有人拿火把探洞，有人和朋友击掌，没法只给它贴一个标签",
    ground + R(12, 92, 28, 28, "#c98f5a") + R(40, 92, 28, 28, "#b6e8a8") + R(26, 64, 28, 28, "#ffe58a") +
    R(80, 100, 40, 26, "#3a3a4d") + G(92, 0.55, { arms: "point", face: "o" }) + P("M110 76 v8", "none", ' stroke="#ff8f1f" stroke-width="4"') +
    G(146, 0.55, { arms: "wave", face: "grin" }) + G(172, 0.55, { arms: "wave", face: "grin" }),
    T(40, 52, 14, "表达", "middle") + T(100, 52, 14, "发现", "middle") + T(160, 52, 14, "友谊", "middle") + T(100, 18, 13, "同一个游戏，三种玩法", "middle"));

  illusAdd("c04_rich", "越富越容易更富：一个火柴人坐拥高高的金币堆，另一个只有一枚",
    ground + G(44, 0.85, { arms: "up", face: "grin" }) +
    [0, 1, 2, 3, 4, 5, 6, 7].map(i => EL(94, 122 - i * 8, 16, 5, i % 2 ? "#ffd34d" : "#ffe58a")).join("") +
    G(166, 0.85, { arms: "stand", face: "sad" }) + EL(134, 122, 11, 4, "#ffe58a") + P("M84 40 Q94 22 108 32 M104 26 l6 6 l-9 2", "none", ' stroke-width="2.8"'),
    T(100, 18, 13, "越富，越容易更富", "middle"));

  illusAdd("c04_exam", "全班成绩的分布图：中间高、两头低，老师看的是整个分布而不是某一个学生",
    P("M16 112 H184", "none", ' stroke-width="3"') +
    [4, 10, 20, 34, 40, 28, 14, 6].map((h, i) => R(20 + i * 20, 112 - h * 1.5, 18, h * 1.5, i === 1 ? "#ffb3c6" : "#a8dcf0")).join("") +
    P("M50 38 l-6 -10 h12z", RED, ' stroke-width="2.5"'),
    T(100, 20, 13, "看整班的分布", "middle") + T(50, 24, 11, "他", "middle") + T(22, 130, 12, "低分", "middle") + T(178, 130, 12, "高分", "middle"));

  illusAdd("c04_average", "评分的两极分布：一半人给一星，一半人给五星，平均三星的地方一个人也没有",
    P("M16 108 H184", "none", ' stroke-width="3"') +
    [0, 1, 2, 3].map(i => C(30, 100 - i * 13, 6, "#ffb3c6") + C(44, 100 - i * 13, 6, "#ffb3c6") + C(156, 100 - i * 13, 6, "#b6e8a8") + C(170, 100 - i * 13, 6, "#b6e8a8")).join("") +
    P("M100 34 V104", "none", ' stroke-dasharray="4 5" stroke-width="3"') + P("M92 94 l8 12 l8 -12", "none", ' stroke-width="3"'),
    T(100, 24, 13, "平均 3 星", "middle") + T(100, 132, 12, "这里一个人也没有", "middle") + T(30, 130, 11, "1星", "middle") + T(170, 130, 11, "5星", "middle"));

  illusAdd("c04_boat", "赛艇游戏里，小船在泻湖里绕圈反复撞会重新出现的靶子拿分，却完全不去终点",
    EL(76, 84, 58, 34, "#a8dcf0") + '<ellipse cx="76" cy="86" rx="34" ry="20" fill="none" stroke-dasharray="5 5" stroke-width="2.5"/>' +
    C(50, 74, 5, "#fff") + C(76, 64, 5, "#fff") + C(102, 76, 5, "#fff") + C(50, 74, 2, RED) + C(76, 64, 2, RED) + C(102, 76, 2, RED) +
    P("M64 100 h26 l-5 9 h-16z", "#c98f5a") + P("M77 100 V82 l12 14z", "#fff") +
    P("M178 46 V110", "none", ' stroke-width="3"') + P("M178 46 l16 7 l-16 7z", "#ff8fab") + P("M138 90 h28", "none", ' stroke-dasharray="3 6" stroke-width="2.5"') +
    P("M150 80 l12 12 M162 80 l-12 12", "none", ' stroke="' + RED + '" stroke-width="3"'),
    T(76, 22, 13, "兜圈撞靶得分", "middle") + T(178, 128, 12, "终点", "middle"));

  illusAdd("c04_callcenter", "设想：客服只按通话时长考核，于是有人干脆把电话挂断，数字漂亮但问题没解决",
    R(20, 90, 136, 8, "#c98f5a") + P("M30 98 V126 M146 98 V126", "none", ' stroke-width="4"') +
    G(66, 0.85, { arms: "desk", legs: "none", face: "grin" }) +
    R(112, 76, 36, 14, "#e8e8f0") + P("M116 76 q14 -14 28 0", "none", ' stroke-width="3"') +
    bub(150, 30, 46, 16) + P("M170 108 l12 -10 M182 108 l-12 -10", "none", ' stroke="' + RED + '" stroke-width="3"'),
    T(150, 35, 12, "通话越短越好", "middle") + T(100, 122, 12, "挂断了！", "middle"));

  illusAdd("c04_blame", "一个火柴人指着机器人喊“它作弊”，可真正的问题在桌上那张写着“奖励＝得分”的规格纸上",
    G(30, 0.9, { arms: "point", face: "shout" }) + bub(52, 18, 36, 13) +
    R(146, 56, 34, 28, "#e8e8f0") + R(150, 86, 26, 28, "#e8e8f0") + P("M154 114 v8 M172 114 v8 M146 90 l-10 8 M180 90 l10 8", "none") + C(156, 66, 3, INK) + C(170, 66, 3, INK) +
    R(76, 92, 56, 32, "#fff7cf") + P("M104 72 V90 M98 84 l6 8 l6 -8", "none", ' stroke="' + RED + '" stroke-width="3"'),
    T(52, 23, 12, "它作弊！", "middle") + T(104, 66, 11, "问题在这", "middle") + T(104, 106, 11, "奖励＝", "middle") + T(104, 119, 11, "得分", "middle"));

  illusAdd("c04_workshop", "游戏开发者大会上的工作坊：几个人围着白板，板上写着机制到动态到美学",
    R(10, 14, 94, 60, "#fff") + P("M18 26 h20 M70 26 h28", "none", ' stroke-width="2"') +
    G(30, 0.55, { arms: "wave", face: "smile" }) + G(72, 0.55, { arms: "point", face: "grin" }) + G(114, 0.55, { arms: "hold", face: "flat" }) + G(160, 0.55, { arms: "up", face: "o" }),
    T(57, 56, 20, "M→D→A", "middle") + T(152, 34, 14, "GDC", "middle") + T(152, 52, 13, "工作坊", "middle"));

  illusAdd("c04_lecture", "一位讲者站在讲台后，身后的屏幕上写着M、D、A，台下坐着听众",
    R(96, 12, 92, 56, "#fff") + R(26, 76, 44, 50, "#c98f5a") + person(48, 50, { s: 0.7, arms: "wave", legs: "none", face: "smile", glasses: true }) +
    [112, 142, 172].map(x => C(x, 106, 7, SK) + P("M" + (x - 9) + " 126 q9 -12 18 0")).join(""),
    T(142, 48, 20, "M D A", "middle") + T(48, 26, 12, "西北大学", "middle"));

  illusAdd("c04_paper", "三位作者合写的论文被一个火柴人高高举起，纸上印着MDA和会议名称",
    G(100, 0.8, { arms: "up", face: "grin" }) + R(66, 8, 68, 44, "#fff") + R(150, 70, 36, 52, "#ffe58a") + P("M158 84 h20 M158 94 h20 M158 104 h20", "none", ' stroke-width="2"'),
    T(100, 30, 20, "MDA", "middle") + T(100, 46, 11, "AAAI-04", "middle"));

  illusAdd("c04_critics", "有人问MDA是不是太简化：它没画出玩家反过来改变规则的那条回路",
    R(14, 76, 28, 28, "#b6e8a8") + R(48, 76, 28, 28, "#ffe58a") + R(82, 76, 28, 28, "#ffb3c6") +
    P("M96 72 Q64 30 28 72", "none", ' stroke-dasharray="4 5" stroke-width="2.8"') + P("M22 62 l6 12 l10 -8", "none", ' stroke-width="2.8"') +
    G(166, 0.7, { arms: "point", face: "flat", look: -1 }) + bub(150, 20, 36, 13),
    T(28, 96, 16, "M", "middle") + T(62, 96, 16, "D", "middle") + T(96, 96, 16, "A", "middle") + T(150, 25, 12, "太简化？", "middle") + T(62, 38, 12, "玩家回头改规则", "middle"));

  illusAdd("c04_twoways", "同一组规则下的两局：左边老鼠绕着柱子兜圈安全，右边老鼠被猫堵在墙角",
    R(8, 24, 88, 88, "#fffdf3") + R(104, 24, 88, 88, "#fffdf3") +
    R(48, 56, 16, 24, "#cfd3dc") + '<ellipse cx="56" cy="68" rx="28" ry="26" fill="none" stroke-dasharray="5 5" stroke-width="2.5"/>' + mouseAt(40, 90) + catAt(82, 50) +
    R(124, 50, 16, 24, "#cfd3dc") + mouseAt(172, 98) + catAt(142, 90),
    T(100, 14, 13, "同一组规则", "middle") + T(52, 132, 14, "绕圈", "middle") + T(148, 132, 14, "被堵", "middle"));

  illusAdd("c04_spec", "你让机器人把房间弄干净，它把东西全推到沙发底下：字面上满足了规则，却不是你想要的",
    ground + G(26, 0.85, { arms: "point", face: "smile" }) + bub(66, 22, 46, 14) +
    R(150, 86, 44, 26, "#d8c8ff") + P("M154 112 v14 M190 112 v14", "none") +
    R(98, 80, 22, 26, "#e8e8f0") + R(101, 62, 16, 16, "#e8e8f0") + C(106, 69, 2, INK) + C(112, 69, 2, INK) + P("M100 106 v20 M116 106 v20", "none") +
    R(162, 114, 8, 8, "#ffb3c6") + R(174, 116, 8, 8, "#a8dcf0") + P("M124 112 h22", "none", ' stroke-width="2.5"'),
    T(66, 27, 12, "把房间弄干净", "middle") + T(160, 74, 11, "看不见＝干净", "middle"));

  illusAdd("c04_workshop2", "日历上四个年份，每年都有一次工作坊，一个火柴人在旁边提着笔记本赶往会场",
    ground + [0, 1, 2, 3].map(i => R(10 + i * 34, 24, 30, 36, "#fff") + R(10 + i * 34, 24, 30, 10, i === 3 ? "#ffb3c6" : "#ffe58a")).join("") +
    G(150, 0.8, { arms: "hold", legs: "walk", face: "grin" }) + R(158, 82, 22, 16, "#a8dcf0", ' transform="rotate(-8 169 90)"'),
    T(25, 52, 11, "01", "middle") + T(59, 52, 11, "02", "middle") + T(93, 52, 11, "03", "middle") + T(127, 52, 11, "04", "middle") + T(70, 84, 13, "每年一次", "middle"));
})();
