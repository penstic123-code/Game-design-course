/* 第 11 章插图包：关卡与教学（火柴人风） */
(function () {
  const { person, ground, T, E, eye, SK, INK } = window.illusKit;
  const Y = "#ffe58a", PK = "#ffb3c6", BL = "#a8dcf0", GR = "#b6e8a8", PU = "#d8c8ff", OR = "#ffc078", WH = "#fff", RD = "#e5484d", BR = "#c98f5a";
  const rect = (x, y, w, h, fill, extra) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (fill || WH) + '" ' + (extra || "") + "/>";
  const circ = (x, y, r, fill, extra) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (fill || WH) + '" ' + (extra || "") + "/>";
  const path = (d, fill, extra) => '<path d="' + d + '" fill="' + (fill || "none") + '" ' + (extra || "") + "/>";
  const ell = (x, y, rx, ry, fill, extra) => '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry + '" fill="' + (fill || WH) + '" ' + (extra || "") + "/>";
  const star = (x, y, r, fill, n) => {
    n = n || 8; let d = "";
    for (let i = 0; i < n * 2; i++) { const a = Math.PI * i / n, rr = i % 2 ? r * 0.5 : r; d += (i ? "L" : "M") + (x + Math.cos(a) * rr).toFixed(1) + " " + (y + Math.sin(a) * rr).toFixed(1); }
    return path(d + "Z", fill || Y, 'stroke-width="2.5"');
  };
  // 小蘑菇怪：底边中心 (x, y)，宽约 2*r
  const goomba = (x, y, r) => path("M" + (x - r) + " " + y + " q0 " + (-r * 1.5) + " " + r + " " + (-r * 1.5) + " q" + r + " 0 " + r + " " + (r * 1.5) + "z", BR) +
    circ(x - r * 0.35, y - r * 0.7, r * 0.15, INK, 'stroke="none"') + circ(x + r * 0.35, y - r * 0.7, r * 0.15, INK, 'stroke="none"');
  const spike = (x, y, w) => path("M" + x + " " + y + " l" + w / 2 + " " + (-w * 0.8) + " l" + w / 2 + " " + (w * 0.8) + "z", PK, 'stroke="' + RD + '" stroke-width="2.5"');
  const add = illusAdd;
  const DASH = 'stroke-dasharray="3 5" stroke-width="2.5"';

  /* ===== 1 三步法 ===== */
  add("c11_world11", "第一屏什么字也没有：火柴人站在平地上，右边远处慢慢走来一只小蘑菇怪，头顶有一个问号砖和一根水管",
    ground + person(30, 63, { arms: "stand", face: "smile" }) +
    rect(84, 50, 22, 22, Y) + rect(158, 84, 28, 42, GR) + rect(154, 78, 36, 12, GR) + goomba(128, 126, 12) +
    path("M60 100 H72 M66 94 l6 6 -6 6", "none", 'stroke-width="2.5"'),
    T(95, 66, 16, "?", "middle") + T(100, 22, 13, "没有一个字说明", "middle"));

  add("c11_stomp", "三格小画面：先是一只慢怪孤零零地走，再是一排三只怪，最后怪出现在跳跃的落点下面还有移动平台",
    path("M68 12 V122 M134 12 V122", "none", DASH) +
    goomba(34, 108, 9) + path("M10 108 H58", "none", 'stroke-width="2"') +
    goomba(82, 108, 7) + goomba(100, 108, 7) + goomba(118, 108, 7) + path("M72 108 H128", "none", 'stroke-width="2"') +
    path("M142 108 H190", "none", 'stroke-width="2"') + goomba(176, 108, 7) + rect(146, 60, 28, 6, BL) +
    path("M150 52 q10 -14 20 0 q4 10 4 24", "none", DASH),
    T(34, 30, 13, "引入", "middle") + T(100, 30, 13, "练习", "middle") + T(166, 30, 13, "变化", "middle"));

  add("c11_bike", "三个小画面：孩子骑带两个辅助轮的车，再换成一个辅助轮，最后什么都不要",
    ground + path("M68 14 V122 M134 14 V122", "none", DASH) +
    circ(24, 100, 12) + circ(52, 100, 12) + path("M24 100 L38 80 L52 100 M38 80 H30", "none", 'stroke-width="2.5"') + circ(14, 110, 4, GR) + circ(62, 110, 4, GR) +
    circ(90, 100, 12) + circ(118, 100, 12) + path("M90 100 L104 80 L118 100 M104 80 H96", "none", 'stroke-width="2.5"') + circ(128, 110, 4, GR) +
    circ(156, 100, 12) + circ(184, 100, 12) + path("M156 100 L170 80 L184 100 M170 80 H162", "none", 'stroke-width="2.5"'),
    T(34, 40, 13, "两个轮", "middle") + T(100, 40, 13, "一个轮", "middle") + T(166, 40, 13, "不用轮", "middle"));

  add("c11_allatonce", "新机制第一次出现，就和怪、移动平台、尖刺、倒计时挤在一起，火柴人抱着头不知道自己死在哪样东西上",
    ground + person(34, 63, { arms: "cover", face: "wide" }) +
    goomba(96, 126, 10) + spike(116, 126, 14) + spike(132, 126, 14) + rect(84, 84, 34, 6, BL) +
    circ(170, 90, 16, WH) + path("M170 90 V79 M170 90 L178 94", "none"),
    T(100, 24, 13, "到底是什么害死我的？", "middle") + T(170, 118, 13, "限时", "middle"));

  /* ===== 2 节奏与风险 ===== */
  add("c11_cointrap", "一枚金币放在一排尖刺旁边，火柴人站在边上犹豫：拿还是不拿",
    ground + person(36, 63, { arms: "chin", face: "flat", look: 1 }) +
    spike(90, 126, 14) + spike(106, 126, 14) + circ(146, 116, 9, Y) + path("M146 111 v10", "none", 'stroke-width="2"') +
    path("M62 96 q42 -50 84 6", "none", DASH),
    T(120, 24, 13, "值得冒险吗？", "middle"));

  add("c11_intervals", "间歇训练：高低交替的柱条，冲刺一段、慢走一段，火柴人跑着，没有人一路冲到底",
    path("M14 118 H186", "none", 'stroke-width="3"') +
    rect(24, 40, 22, 78, PK) + rect(46, 86, 22, 32, GR) + rect(68, 40, 22, 78, PK) + rect(90, 86, 22, 32, GR) + rect(112, 40, 22, 78, PK) + rect(134, 86, 22, 32, GR) +
    person(172, 73, { s: 0.7, arms: "up", legs: "run", face: "grin" }),
    T(35, 28, 13, "冲", "middle") + T(57, 28, 13, "歇", "middle") + T(79, 28, 13, "冲", "middle") + T(101, 28, 13, "歇", "middle") + T(123, 28, 13, "冲", "middle") + T(145, 28, 13, "歇", "middle"));

  add("c11_norest", "从头到尾高压的关卡：紧张度一直顶在红线上，火柴人累得瘫在地上",
    path("M20 30 V104 H150", "none", 'stroke-width="3"') + path("M20 32 H150", "none", 'stroke="' + RD + '" stroke-width="4"') +
    path("M156 126 H194", "none", 'stroke-dasharray="2 7" stroke-width="3"') + person(172, 82, { s: 0.7, arms: "stand", legs: "sit", face: "sad", chair: false }),
    T(24, 18, 13, "紧张度") + T(84, 56, 13, "一直这么高", "middle") + T(84, 122, 13, "关卡进程 →", "middle"));

  /* ===== 3 发明故事一 ===== */
  add("c11_manual", "街机和家用机时代：一个孩子把说明书扔在一边，直接按着手柄玩，说明书落在地上",
    ground + person(60, 63, { arms: "hold", face: "grin" }) + rect(78, 70, 24, 14, "#444") + circ(84, 77, 2.5, RD) + circ(94, 77, 2.5, GR) +
    rect(130, 100, 36, 22, WH, 'transform="rotate(-8 148 111)"') + path("M138 108 h20 M138 114 h14", "none", 'stroke-width="2"'),
    T(148, 90, 13, "没人看", "middle"));

  add("c11_mario85", "一块小游戏屏幕，里面只有起点的平地、问号砖、小蘑菇怪和水管，屏幕上没有文字",
    rect(24, 12, 152, 100, "#bfe3ff") + rect(24, 92, 152, 20, "#d9a35f") + rect(60, 54, 18, 18, Y) + rect(138, 74, 22, 18, GR) + rect(134, 68, 30, 8, GR) +
    goomba(112, 92, 9) + person(44, 60, { s: 0.55, arms: "stand", legs: "stand", face: "smile" }),
    T(69, 68, 14, "?", "middle") + T(100, 130, 13, "1985 的第一关", "middle"));

  add("c11_gee", "一本书立在台子上，书的封面画着一级一级向上的台阶，旁边的火柴人读着书",
    ground + rect(70, 28, 56, 72, BL) + rect(70, 28, 8, 72, "#6aaed0") + path("M88 90 H100 V80 H110 V70 H120 V60", "none", 'stroke-width="3"') +
    person(162, 63, { arms: "hold", face: "smile", glasses: true, look: -1 }),
    T(98, 20, 13, "好游戏会教人", "middle"));

  add("c11_miyamoto", "设计者拿着一张方格纸，上面画着关卡草图，边画边跟旁边的人讲",
    ground + person(34, 63, { arms: "point", face: "smile", hair: true }) +
    rect(84, 24, 100, 72, WH) + path("M84 48 H184 M84 72 H184 M108 24 V96 M134 24 V96 M160 24 V96", "none", 'stroke-width="1.5" stroke="#cfcfcf"') +
    path("M90 88 H120 V76 H140 V88 H178", "none", 'stroke-width="3"') + rect(100, 54, 8, 8, Y),
    T(134, 112, 13, "方格纸上的草图", "middle"));

  /* ===== 3 发明故事二 ===== */
  add("c11_leak", "一只装着“学会的本事”的桶，侧面漏水，水位越掉越低，开头漏得最快",
    '<g transform="translate(0 12)">' + path("M62 30 L72 110 H128 L138 30", "#eaf6ff") + path("M66 58 H134", "none", 'stroke="#2f8fd0" stroke-width="3"') +
    path("M64 70 q-14 2 -16 26 M68 90 q-8 2 -10 14", "none", 'stroke="#2f8fd0" stroke-width="3"') + circ(66, 70, 2.5, "#2f8fd0", 'stroke="none"') + circ(70, 90, 2.5, "#2f8fd0", 'stroke="none"') + "</g>" +
    circ(48, 118, 3.5, BL) + circ(56, 120, 3, BL) +
    person(172, 63, { arms: "stand", face: "o", look: -1 }),
    T(100, 24, 13, "学会的本事", "middle"));

  add("c11_ebbing", "一个人坐在桌前背一张写满无意义音节的纸，旁边有一座钟",
    ground + path("M46 102 H128 M52 102 V126 M122 102 V126", "none", 'stroke-width="4"') +
    person(30, 63, { arms: "desk", legs: "sit", face: "flat", look: 1 }) + rect(70, 88, 30, 14, WH) + path("M75 93 h8 M87 93 h8 M75 98 h6 M85 98 h10", "none", 'stroke-width="2"') +
    circ(162, 40, 18, WH) + path("M162 40 V27 M162 40 L172 46", "none"),
    T(162, 76, 13, "自己当被试", "middle") + T(90, 28, 13, "无意义音节", "middle"));

  add("c11_cepeda", "一摞论文堆成小山，旁边两条柱子：分散复习的柱子比集中复习的更高",
    rect(18, 80, 56, 12, WH) + rect(22, 68, 54, 12, "#fff6c9") + rect(16, 56, 56, 12, WH) + rect(24, 44, 52, 12, "#fff6c9") +
    path("M92 118 H188", "none", 'stroke-width="3"') + rect(106, 80, 28, 38, GR) + rect(148, 52, 28, 66, PU),
    T(46, 34, 13, "184 篇", "middle") + T(120, 74, 13, "集中", "middle") + T(162, 46, 13, "分散", "middle"));

  add("c11_murre", "同一个实验再做一遍：新的人坐在老桌子前，两条遗忘曲线几乎重叠",
    path("M24 20 V104 H186", "none", 'stroke-width="3"') +
    path("M28 28 Q50 70 84 84 T182 98", "none", 'stroke="#2f8fd0" stroke-width="4"') + path("M28 31 Q52 72 86 87 T182 100", "none", 'stroke="' + RD + '" stroke-width="3" stroke-dasharray="5 4"'),
    T(100, 126, 13, "时间 →", "middle") + T(120, 56, 13, "1885 与 2015", "middle") + T(120, 72, 13, "两条几乎重合", "middle"));

  /* ===== 4 安全地失败 ===== */
  add("c11_padded", "体操垫铺满地面，一个小火柴人尝试跳跃摔在垫子上，笑着爬起来",
    ground + rect(14, 112, 172, 12, PK) + person(70, 48, { arms: "up", legs: "wide", face: "grin" }) +
    path("M100 50 q18 -26 36 0 q14 32 14 48", "none", DASH),
    T(150, 22, 13, "摔了也不疼", "middle"));

  add("c11_firstpit", "两个坑：第一个坑浅，底下有地面，火柴人正从里面爬出来；第二个坑无底，用虚线圈出提醒要小心",
    rect(51, 116, 40, 6, "#d9a35f", 'stroke="none"') + path("M8 100 H50 V122 H92 V100 H116 V126 M148 126 V100 H192", "none", 'stroke-width="3.5"') +
    person(70, 82, { s: 0.6, arms: "up", legs: "stand", face: "grin" }) +
    ell(132, 112, 24, 20, "none", 'stroke="' + RD + '" stroke-width="2.5" stroke-dasharray="3 3"'),
    T(70, 28, 13, "有底，爬得出", "middle") + T(150, 28, 13, "无底，要躲", "middle"));

  add("c11_simulator", "飞行员坐在模拟舱里，窗外的画面是屏幕，飞机失误也只是屏幕一黑，不会真的出事",
    ground + rect(40, 62, 100, 56, "#e8e8f0") + rect(48, 28, 84, 38, "#bfe3ff") + path("M56 52 q20 -14 40 0 t36 -4", "none", 'stroke-width="2.5"') +
    person(92, 76, { s: 0.55, arms: "hold", legs: "none", face: "wide" }) + path("M140 112 l22 -30 M162 82 l12 -8", "none", 'stroke-width="3"'),
    T(160, 52, 13, "练习中", "middle") + T(92, 18, 13, "失误也没事", "middle"));

  add("c11_onehit", "第一次碰新机关就一击必死，要看三十秒的复活动画，火柴人对着时钟发呆",
    ground + person(40, 63, { arms: "stand", face: "sad", legs: "stand" }) + spike(80, 126, 18) +
    circ(140, 54, 22, WH) + path("M140 54 V38 M140 54 L152 60", "none"),
    T(140, 96, 13, "复活动画 30 秒", "middle") + T(96, 28, 13, "第一次就死", "middle"));

  /* ===== 5 最近发展区与脚手架 ===== */
  add("c11_rungs", "一架梯子，火柴人站在中间一格，旁边搭着脚手架，手刚好够到上一格",
    path("M70 12 V126 M130 12 V126", "none", 'stroke-width="4"') + path("M70 112 H130 M70 88 H130 M70 64 H130 M70 40 H130", "none", 'stroke-width="3"') +
    path("M140 126 V70 M184 126 V70 M140 98 H184 M140 70 H184", "none", 'stroke-width="3" stroke="#8a6d3b"') +
    person(100, 64, { s: 0.6, arms: "up", legs: "walk", face: "grin" }),
    T(34, 56, 13, "够得着", "middle") + T(162, 60, 13, "脚手架", "middle"));

  add("c11_adaptive", "屏幕上的提示箭头：玩家连着失败几次，箭头变大变亮；玩家连着成功，箭头变小直到消失",
    rect(14, 20, 172, 72, "#fffdf3") +
    path("M30 80 l8 -20 l8 20z M70 80 l8 -16 l8 16z M110 80 l6 -10 l6 10z M150 80 l3 -4 l3 4z", Y, 'stroke-width="2.5"') +
    path("M22 106 H182 M174 100 l8 6 -8 6", "none", 'stroke-width="3"'),
    T(38, 50, 13, "连败", "middle") + T(150, 50, 13, "连胜", "middle") + T(100, 128, 13, "提示越来越少 →", "middle"));

  add("c11_floatboard", "游泳课：先抱浮板，再系漂浮腰带，最后什么都不要，三个小火柴人在水里一格一格地更自由",
    rect(0, 70, 200, 56, "#dff1ff", 'stroke="none"') + path("M8 70 H192", "none", 'stroke="#2f8fd0" stroke-width="3"') + path("M68 14 V122 M134 14 V122", "none", DASH) +
    person(34, 50, { s: 0.45, arms: "hold", legs: "none", face: "smile" }) + rect(16, 64, 36, 8, OR) +
    person(100, 50, { s: 0.45, arms: "stand", legs: "none", face: "smile" }) + circ(100, 70, 10, PK, 'fill-opacity="0.9"') +
    person(166, 50, { s: 0.45, arms: "up", legs: "none", face: "grin" }),
    T(34, 100, 13, "浮板", "middle") + T(100, 100, 13, "腰带", "middle") + T(166, 100, 13, "自己来", "middle"));

  add("c11_forever", "地上永远亮着一个“跳！”的大箭头，火柴人看着箭头，不敢自己判断，箭头一关掉他就慌了",
    ground + person(50, 63, { arms: "point", face: "o", look: 1 }) +
    path("M120 126 V76 M104 90 L120 74 L136 90", Y, 'stroke-width="4"') + path("M158 126 V90", "none", DASH),
    T(150, 56, 20, "跳！", "middle") + T(50, 28, 13, "没箭头不会了", "middle"));

  /* ===== 6 认知负荷 ===== */
  add("c11_juggle", "火柴人同时抛着球，三个在空中，另有两个已经掉在地上",
    ground + person(100, 58, { arms: "up", legs: "wide", face: "wide" }) +
    circ(66, 22, 7, PK) + circ(100, 10, 7, BL) + circ(134, 22, 7, GR) + circ(40, 116, 7, PU) + circ(160, 118, 7, Y) +
    "",
    T(160, 104, 13, "掉了", "middle") + T(40, 102, 13, "掉了", "middle"));

  add("c11_portal", "三个房间排成一排，每个房间只摆了一件新东西：第一间一扇门，第二间一个按钮，第三间一个箱子",
    rect(10, 30, 54, 70) + rect(73, 30, 54, 70) + rect(136, 30, 54, 70) +
    rect(24, 56, 26, 44, BL) + circ(100, 84, 8, RD) + rect(158, 76, 22, 24, OR) +
    path("M64 70 h9 M127 70 h9", "none", 'stroke-width="3"'),
    T(37, 22, 13, "只学门", "middle") + T(100, 22, 13, "只学按钮", "middle") + T(163, 22, 13, "只学箱子", "middle") + T(100, 124, 13, "一间一件", "middle"));

  add("c11_grandma", "孙辈耐心地指着手机屏幕，只教奶奶一件事：打电话；奶奶点点头",
    ground + person(72, 63, { arms: "point", face: "smile", look: 1 }) + person(146, 63, { arms: "hold", face: "smile", hair: true, look: -1 }) +
    rect(112, 72, 16, 28, BL) + path("M116 80 q4 -4 8 0", "none", 'stroke-width="2"'),
    T(100, 40, 13, "今天只学打电话", "middle"));

  add("c11_expert", "老手一眼就把“移动加跳”打包成一个整体，脑袋里的格子只占一格；新手的格子被拆成两格",
    ground + person(40, 63, { arms: "stand", face: "grin", hair: true }) + person(150, 63, { arms: "stand", face: "o" }) +
    rect(16, 24, 50, 18, Y) + rect(116, 24, 34, 18, PK) + rect(152, 24, 34, 18, BL),
    T(41, 38, 13, "移动+跳", "middle") + T(133, 38, 13, "移动", "middle") + T(169, 38, 13, "跳", "middle") + T(41, 15, 13, "老手", "middle") + T(151, 15, 13, "新手", "middle"));

  /* ===== 7 间隔 ===== */
  add("c11_rusty", "火柴人第十一关再用冲刺跳，手生了：工具上落满灰，他摸着头",
    ground + person(50, 63, { arms: "chin", face: "flat", look: 1 }) + rect(110, 90, 56, 36, "#cfcfcf") + path("M116 90 V82 H160 V90", "none", 'stroke-width="3"') +
    path("M120 108 h10 M144 114 h14 M126 100 h6", "none", 'stroke-width="2.5"'),
    T(138, 70, 13, "冲刺跳？", "middle") + E(178, 100, 14, "🕸️"));

  add("c11_dashagain", "四个关卡牌排成一排，第 2、4、8、15 关各有一个冲刺跳图标，间隔越来越远",
    path("M14 84 H186", "none", 'stroke-width="3"') +
    rect(14, 40, 30, 30, PK) + rect(54, 40, 30, 30, BL) + rect(94, 40, 30, 30, GR) + rect(150, 40, 30, 30, OR),
    T(29, 60, 16, "»", "middle") + T(69, 60, 16, "»", "middle") + T(109, 60, 16, "»", "middle") + T(165, 60, 16, "»", "middle") +
    T(29, 108, 13, "2", "middle") + T(69, 108, 13, "4", "middle") + T(109, 108, 13, "8", "middle") + T(165, 108, 13, "15", "middle") + T(49, 108, 12, "+2", "middle") + T(89, 108, 12, "+4", "middle") + T(137, 108, 12, "+7", "middle") + T(100, 24, 13, "间隔越来越长：+2、+4、+7", "middle"));

  add("c11_vocab", "背单词的 App 把一张卡片推给火柴人：这张词隔了很久，快忘了，现在来复习",
    ground + person(38, 63, { arms: "hold", face: "smile" }) +
    rect(94, 30, 80, 58, WH) + path("M104 54 H164 M104 68 H140", "none", 'stroke-width="2.5"') + circ(168, 36, 6, PK),
    T(134, 46, 13, "快忘了", "middle") + T(134, 112, 13, "隔几天再来", "middle"));

  add("c11_massed", "同一个机制在一关里连着出现十次：十个一模一样的小牌排成一长串，火柴人打着哈欠",
    ground + rect(14, 24, 14, 20, PK) + rect(32, 24, 14, 20, PK) + rect(50, 24, 14, 20, PK) + rect(68, 24, 14, 20, PK) + rect(86, 24, 14, 20, PK) +
    rect(104, 24, 14, 20, PK) + rect(122, 24, 14, 20, PK) + rect(140, 24, 14, 20, PK) + rect(158, 24, 14, 20, PK) + rect(176, 24, 14, 20, PK) +
    person(100, 74, { s: 0.8, arms: "stand", face: "o" }),
    T(100, 18, 13, "连考十次", "middle") + T(160, 80, 16, "Z z z", "middle"));
})();
