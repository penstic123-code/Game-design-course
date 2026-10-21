/* 第26章 原型与迭代：插图包（火柴人风，viewBox 200×140） */
(function () {
  const { person, ground, T, E, eye, SK, INK } = window.illusKit;
  const bub = (x, y, w, h, f) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="9" fill="' + (f || "#fff") + '"/>';
  const plane = (x, y, f) => '<ellipse cx="' + x + '" cy="' + y + '" rx="14" ry="5" fill="' + f + '"/><path d="M' + (x - 3) + " " + y + " l-7 -13 h9 l8 13z\" fill=\"" + f + '"/><path d="M' + (x - 12) + " " + y + ' l-4 -9 l9 4z" fill="' + f + '"/>';
  const cyc = (cx, cy, r) =>
    '<path d="M' + cx + " " + (cy - r) + " A" + r + " " + r + " 0 0 1 " + (cx + r) + " " + cy + " A" + r + " " + r + " 0 0 1 " + cx + " " + (cy + r) + " A" + r + " " + r + " 0 0 1 " + (cx - r) + " " + cy + " A" + r + " " + r + " 0 0 1 " + cx + " " + (cy - r) + '" fill="none"/>' +
    '<path d="M' + (cx + r) + " " + cy + " l-5 -6 M" + (cx + r) + " " + cy + " l5 -6 M" + cx + " " + (cy + r) + " l6 -5 M" + cx + " " + (cy + r) + " l6 5 M" + (cx - r) + " " + cy + " l-5 6 M" + (cx - r) + " " + cy + " l5 6 M" + cx + " " + (cy - r) + " l-6 -5 M" + cx + " " + (cy - r) + ' l-6 5" fill="none"/>';

  /* ---------- 时间线 ---------- */
  illusAdd("c26_shewhart", "一个人指着一圈循环箭头：计划、执行、检查、行动，转完一圈再转下一圈",
    person(34, 62, { arms: "point", face: "grin" }) + cyc(138, 70, 28),
    T(138, 28, 12, "计划", "middle") + T(184, 74, 12, "执行", "middle") + T(138, 118, 12, "检查", "middle") + T(92, 74, 12, "行动", "middle") + T(100, 133, 11, "短周期，一圈接一圈", "middle"));

  illusAdd("c26_x15", "三架飞机一架比一架飞得高，地上的人挥手看着：一小步一小步地试飞、改进",
    person(30, 62, { arms: "wave", face: "smile" }) + plane(86, 104, "#a8dcf0") + plane(126, 82, "#ffe58a") + plane(166, 58, "#ffb3c6") +
    '<path d="M96 100 Q110 92 114 86 M136 78 Q150 70 154 62" fill="none" stroke-dasharray="3 5" stroke-width="2.5"/>',
    T(100, 133, 12, "一小步一小步试飞", "middle"));

  illusAdd("c26_royce", "四级台阶依次往下：需求、设计、编码、测试；旁边的人喊“这样做风险很大”",
    ground + person(34, 62, { arms: "up", face: "shout" }) +
    '<rect x="88" y="30" width="36" height="18" fill="#ffe58a"/><rect x="112" y="52" width="36" height="18" fill="#a8dcf0"/><rect x="136" y="74" width="36" height="18" fill="#ffb3c6"/><rect x="160" y="96" width="36" height="18" fill="#b6e8a8"/>' +
    '<path d="M126 38 q14 -2 12 12 M150 60 q14 -2 12 12 M174 82 q14 -2 12 12" fill="none" stroke-width="2.5"/>',
    T(106, 43, 11, "需求", "middle") + T(130, 65, 11, "设计", "middle") + T(154, 87, 11, "编码", "middle") + T(178, 109, 11, "测试", "middle") + T(50, 26, 12, "风险很大！", "middle"));

  illusAdd("c26_spiral", "一圈圈向外的螺旋，人站在中心，每转一圈先试最大的风险",
    person(30, 62, { arms: "point", face: "smile" }) +
    '<path d="M130 70 a6 6 0 0 1 12 0 a12 12 0 0 1 -24 0 a18 18 0 0 1 36 0 a24 24 0 0 1 -48 0 a30 30 0 0 1 60 0" fill="none" stroke-width="3.5"/>' +
    '<circle cx="130" cy="70" r="4" fill="#e5484d"/>',
    T(40, 24, 12, "每一圈先试", "middle") + T(40, 38, 12, "最大的风险", "middle") + T(100, 133, 11, "按风险一圈圈推进", "middle"));

  illusAdd("c26_agile", "雪山前三个小人，山顶竖着旗帜：响应变化胜过遵循计划",
    '<path d="M26 126 L100 58 L174 126Z" fill="#e8f6fc"/><path d="M100 58 L86 71 L96 68 L104 72 L114 70Z" fill="#fff"/>' +
    '<path d="M100 58 V40" stroke-width="3"/>' + bub(46, 4, 108, 38, "#ffe58a") +
    person(56, 91, { s: 0.55, arms: "wave" }) + person(100, 91, { s: 0.55, arms: "up", face: "grin" }) + person(144, 91, { s: 0.55, arms: "wave" }),
    T(100, 20, 13, "响应变化", "middle") + T(100, 36, 13, "胜过遵循计划", "middle"));

  illusAdd("c26_zim", "一个人举着一块能玩的小棋盘原型，另一个人立刻上手玩，气泡写着“先玩起来再说”",
    ground + person(34, 63, { arms: "point", face: "grin" }) + person(168, 63, { arms: "hold", face: "smile" }) +
    '<rect x="78" y="76" width="60" height="30" fill="#fffdf3"/><path d="M98 76 V106 M118 76 V106 M78 86 H138 M78 96 H138" stroke-width="2"/><circle cx="88" cy="81" r="4" fill="#ffb3c6"/><circle cx="128" cy="101" r="4" fill="#a8dcf0"/><rect x="72" y="106" width="72" height="6" fill="#c58b4e"/><path d="M78 112 V126 M138 112 V126" stroke-width="3" fill="none"/>' + bub(54, 14, 100, 28, "#fff7cf"),
    T(104, 33, 13, "先玩起来再说", "middle"));

  /* ---------- 例子：原型与迭代 ---------- */
  illusAdd("c26_magic", "两个人面对面，中间一摞随机洗好的牌，直接分发开玩，是个很糙的原型",
    person(30, 62, { arms: "hold", face: "smile" }) + person(170, 62, { arms: "hold", face: "smile" }) +
    '<rect x="84" y="68" width="32" height="42" fill="#ffe58a" transform="rotate(-6 100 90)"/><rect x="84" y="68" width="32" height="42" fill="#a8dcf0" transform="rotate(4 100 90)"/><rect x="84" y="68" width="32" height="42" fill="#ffb3c6"/>' +
    '<rect x="66" y="110" width="68" height="6" fill="#c58b4e"/><path d="M72 116 V126 M128 116 V126" stroke-width="3" fill="none"/>' +
    '<path d="M80 90 H62 M120 90 H138" stroke-width="2.5"/><path d="M62 90 l6 -5 M62 90 l6 5 M138 90 l-6 -5 M138 90 l-6 5" stroke-width="2.5" fill="none"/>',
    T(100, 54, 13, "120 张牌", "middle") + T(100, 24, 12, "糙：随机发牌直接玩", "middle"));

  illusAdd("c26_armello", "屏风后面两个主持人探出头、用手摆放隐藏的棋子，屏风前两个玩家在玩，等于人在模拟电脑",
    person(32, 62, { arms: "hold", face: "smile" }) + person(170, 62, { arms: "hold", face: "smile" }) +
    '<rect x="78" y="52" width="44" height="74" fill="#cfd3dc"/><path d="M78 74 H122 M78 96 H122" stroke-width="2"/>' +
    '<circle cx="90" cy="42" r="9" fill="' + SK + '"/><circle cx="110" cy="42" r="9" fill="' + SK + '"/>' + eye(87, 40) + eye(93, 40) + eye(107, 40) + eye(113, 40) +
    '<path d="M86 46 q4 3 8 0 M106 46 q4 3 8 0" fill="none" stroke-width="2"/><path d="M80 38 L66 30 M120 38 L134 30" stroke-width="3" fill="none"/><circle cx="64" cy="29" r="4" fill="#ffb3c6"/><circle cx="136" cy="29" r="4" fill="#a8dcf0"/>',
    T(100, 20, 12, "幕后：人手代替电脑", "middle"));

  illusAdd("c26_taste", "一个人拿勺子尝锅里的汤，旁边说“先放一点，尝一口再加”",
    ground + person(46, 62, { arms: "point", face: "grin" }) +
    '<path d="M94 88 H152 L146 126 H100Z" fill="#ffe58a"/><path d="M94 96 H84 M152 96 H162" stroke-width="3.5"/>' +
    '<path d="M110 80 q-6 -8 0 -14 M124 80 q-6 -8 0 -14 M138 80 q-6 -8 0 -14" fill="none" stroke-width="2.5"/>' +
    '<path d="M70 80 L96 86" stroke-width="3"/><circle cx="68" cy="80" r="4" fill="#c58b4e"/>',
    T(150, 24, 13, "先放一点", "middle") + T(150, 42, 13, "尝一口再加", "middle"));

  illusAdd("c26_year", "左边是闭门做了十二个月的房子，右边的玩家在第一关的墙前卡住了，两边之间是一条长长的发布箭头",
    ground + '<rect x="8" y="46" width="70" height="80" fill="#cfd3dc"/><rect x="32" y="86" width="22" height="40" fill="#c58b4e"/><path d="M8 46 L43 24 L78 46" fill="#ffb3c6"/>' +
    '<path d="M84 100 H118 M118 100 l-6 -5 M118 100 l-6 5" fill="none"/>' +
    person(140, 62, { arms: "cover", face: "sad" }) + '<rect x="170" y="62" width="22" height="64" fill="#ffb3c6"/><path d="M170 80 H192 M170 100 H192" stroke-width="2"/>',
    T(43, 60, 12, "闭门", "middle") + T(43, 76, 12, "12 个月", "middle") + T(101, 92, 11, "发布", "middle") + T(160, 36, 12, "第一关就卡住", "middle"));

  /* ---------- 例子：局部最优 ---------- */
  illusAdd("c26_tower", "塔防地图只有一条笔直的路，三座塔的伤害数字不断加一，旁边的设计师挠头",
    '<path d="M10 102 H54" stroke-dasharray="6 6" stroke-width="3" fill="none"/>' +
    '<rect x="58" y="98" width="134" height="12" rx="3" fill="#e9dcc0" stroke-width="2.5"/><path d="M70 104 l6 0 M100 104 l6 0 M130 104 l6 0 M160 104 l6 0 M176 104 l8 0 M180 100 l5 4 l-5 4" stroke-width="2.5" fill="none"/>' +
    person(24, 48, { s: 0.8, arms: "chin", face: "flat" }) +
    '<circle cx="86" cy="76" r="11" fill="#a8dcf0"/><circle cx="122" cy="76" r="11" fill="#a8dcf0"/><circle cx="158" cy="76" r="11" fill="#a8dcf0"/>' +
    '<path d="M86 87 V98 M122 87 V98 M158 87 V98" stroke-width="2.5" fill="none"/>',
    T(86, 80, 11, "+1", "middle") + T(122, 80, 11, "+1", "middle") + T(158, 80, 11, "+1", "middle") + T(110, 22, 12, "连调十版伤害数值", "middle") + T(100, 129, 12, "问题是：地图只有一条路", "middle"));

  illusAdd("c26_diner", "家附近一圈三家餐厅都去过了，圈外一团云里写着问号，是从没去过的那家",
    '<circle cx="100" cy="72" r="48" fill="none" stroke-dasharray="5 5" stroke-width="2.5"/>' +
    '<rect x="56" y="44" width="30" height="20" fill="#ffe58a"/><rect x="114" y="44" width="30" height="20" fill="#ffe58a"/><rect x="85" y="98" width="30" height="20" fill="#ffe58a"/>' +
    '<path d="M92 76 L100 66 L108 76 V84 H92Z" fill="#b6e8a8"/><ellipse cx="170" cy="104" rx="22" ry="14" fill="#fff" stroke-dasharray="4 4"/>' +
    '<path d="M86 60 L96 68 M114 60 L104 68 M100 94 V86" stroke-dasharray="3 4" stroke-width="2.5" fill="none"/>',
    T(100, 12, 12, "总在这个圈里挑", "middle") + T(71, 58, 11, "A 店", "middle") + T(129, 58, 11, "B 店", "middle") + T(100, 112, 11, "C 店", "middle") + T(170, 110, 18, "?", "middle") + T(170, 132, 11, "没去过", "middle"));

  illusAdd("c26_resume", "桌上一叠改了十版的简历，只是换了措辞；人头上的云里是真正的问题：投的方向对吗",
    '<rect x="14" y="36" width="52" height="78" fill="#fff" transform="rotate(-6 40 75)"/><rect x="20" y="34" width="52" height="78" fill="#fff"/><path d="M28 48 H62 M28 60 H62 M28 72 H54 M28 84 H62 M28 96 H48" stroke-width="2.5"/>' +
    person(140, 62, { arms: "chin", face: "flat", look: -1 }) + '<ellipse cx="144" cy="24" rx="42" ry="16" fill="#fff" stroke-dasharray="4 4"/><circle cx="112" cy="46" r="3" fill="#fff"/>',
    T(46, 22, 12, "改了 10 版措辞", "middle") + T(144, 29, 12, "方向对吗？", "middle"));

  illusAdd("c26_flip", "三座刚搭了一半的积木塔都被红叉划掉，一个人举着锤子要继续砸，永远在推倒重来",
    '<rect x="14" y="98" width="26" height="28" fill="#a8dcf0"/><rect x="14" y="70" width="26" height="28" fill="#ffe58a"/>' +
    '<rect x="56" y="98" width="26" height="28" fill="#ffb3c6"/><rect x="98" y="98" width="26" height="28" fill="#b6e8a8"/><rect x="98" y="70" width="26" height="28" fill="#a8dcf0"/>' +
    '<path d="M12 40 L42 64 M42 40 L12 64 M54 40 L84 64 M84 40 L54 64 M96 40 L126 64 M126 40 L96 64" stroke="#e5484d" stroke-width="4" fill="none"/>' +
    person(168, 62, { arms: "throw", face: "shout" }),
    T(100, 22, 12, "推倒重来，没有一版磨到能玩", "middle"));

  /* ---------- 例子：反馈速度 ---------- */
  illusAdd("c26_slider", "左边拖动滑块立刻看到难度条变化，右边一个打包盒加一只钟，要等一整天才能看到结果",
    '<path d="M100 14 V126" stroke-dasharray="4 5" stroke-width="2.5" fill="none"/>' +
    '<path d="M12 70 H84" stroke-width="4" fill="none"/><circle cx="58" cy="70" r="8" fill="#ffb3c6"/><rect x="12" y="92" width="72" height="14" fill="#fff"/><rect x="12" y="92" width="46" height="14" fill="#b6e8a8"/>' +
    '<rect x="118" y="74" width="52" height="40" fill="#ffd9a0"/><path d="M118 88 H170 M144 74 V88" stroke-width="2.5"/><circle cx="180" cy="46" r="13" fill="#fff"/><path d="M180 46 V37 M180 46 L187 50" fill="none"/>',
    T(48, 28, 12, "拖一下", "middle") + T(48, 46, 12, "立刻看到", "middle") + T(142, 24, 12, "重新打包", "middle") + T(146, 132, 12, "等一整天", "middle"));

  illusAdd("c26_hoop", "投篮的人刚出手，教练立刻喊“偏左一点”，球划出一道虚线飞向篮筐",
    ground + person(34, 62, { arms: "throw", face: "smile" }) + person(100, 75, { s: 0.8, arms: "point", face: "shout", look: -1 }) +
    '<path d="M58 40 Q110 18 166 52" fill="none" stroke-dasharray="4 5" stroke-width="2.5"/><circle cx="120" cy="28" r="7" fill="#ffc078"/>' +
    '<rect x="178" y="30" width="6" height="40" fill="#fff"/><path d="M166 62 H178 M181 70 V126" stroke-width="3" fill="none"/>' + bub(112, 92, 68, 26, "#fff7cf"),
    T(146, 110, 12, "偏左一点！", "middle"));

  illusAdd("c26_samepeople", "三个做游戏的同事围着试玩，旁边一个虚线画的新玩家被漏掉了",
    person(34, 76, { s: 0.75, arms: "hold", face: "smile" }) + person(76, 76, { s: 0.75, arms: "hold", face: "smile" }) + person(118, 76, { s: 0.75, arms: "hold", face: "grin" }) +
    '<g stroke-dasharray="3 4" fill="none"><circle cx="170" cy="84" r="9"/><path d="M170 93 V112 M170 98 L162 108 M170 98 L178 108 M170 112 L164 126 M170 112 L176 126"/></g>',
    T(76, 24, 12, "自己人试玩：快但不准", "middle") + T(170, 62, 12, "新手呢？", "middle"));

  /* ---------- 随文插图 ---------- */
  illusAdd("c26_second", "设计者把几张规则卡递出去，玩家拿到后沿着弯弯曲曲的虚线脚印跑向没人料到的方向",
    person(30, 62, { arms: "hold", face: "smile" }) + '<rect x="58" y="70" width="14" height="18" fill="#ffe58a"/><rect x="62" y="74" width="14" height="18" fill="#ffb3c6"/>' +
    person(150, 62, { arms: "up", legs: "run", face: "wide" }) + '<path d="M84 116 q10 -14 20 0 t20 0 t20 0 t20 0" fill="none" stroke-dasharray="3 5" stroke-width="2.5"/>',
    T(30, 32, 12, "写规则", "middle") + T(150, 32, 12, "玩出体验", "middle") + T(100, 14, 11, "没想到他会这么玩", "middle"));

  illusAdd("c26_bandit", "三台老虎机，每台的赔率都藏在问号后面；一个人想：A 还行，B 和 C 呢",
    ground + '<rect x="10" y="58" width="40" height="56" fill="#ffb3c6"/><rect x="58" y="58" width="40" height="56" fill="#a8dcf0"/><rect x="106" y="58" width="40" height="56" fill="#b6e8a8"/>' +
    '<rect x="16" y="66" width="28" height="18" fill="#fff"/><rect x="64" y="66" width="28" height="18" fill="#fff"/><rect x="112" y="66" width="28" height="18" fill="#fff"/><path d="M52 70 V88 M100 70 V88 M148 70 V88" stroke-width="3"/>' +
    person(172, 62, { arms: "chin", face: "flat", look: -1 }),
    T(30, 80, 12, "?", "middle") + T(78, 80, 12, "?", "middle") + T(126, 80, 12, "?", "middle") + T(30, 104, 13, "A", "middle") + T(78, 104, 13, "B", "middle") + T(126, 104, 13, "C", "middle") + T(164, 26, 11, "A 还行", "middle") + T(164, 40, 11, "B、C 呢？", "middle"));

  illusAdd("c26_gamma", "一张牌单看很强，能把对手的怪物拎走；但它放进整副牌里，和另外几张牌连出一圈红色的警告",
    '<rect x="14" y="40" width="40" height="56" fill="#ffe58a"/><path d="M24 80 L44 56 M44 56 l-9 1 M44 56 l-1 9" stroke-width="3" fill="none"/>' +
    '<rect x="96" y="20" width="30" height="42" fill="#a8dcf0"/><rect x="146" y="20" width="30" height="42" fill="#ffb3c6"/><rect x="120" y="84" width="30" height="42" fill="#b6e8a8"/>' +
    '<path d="M64 68 L94 44 M128 44 H144 M158 66 L142 86 M104 66 L120 90 M64 76 L118 104" stroke="#e5484d" stroke-width="2.5" fill="none"/>',
    T(34, 116, 12, "单看很酷", "middle") + T(100, 14, 12, "放进整副牌", "start") + T(34, 30, 12, "抢怪牌", "middle"));

  illusAdd("c26_oneway", "路口一条单行道的箭头，旁边的小街被汽车堵成一长串",
    '<rect x="10" y="40" width="180" height="22" fill="#cfd3dc"/><rect x="84" y="62" width="22" height="64" fill="#cfd3dc"/>' +
    '<path d="M24 51 H70 M70 51 l-7 -5 M70 51 l-7 5" stroke-width="3" fill="none"/>' +
    '<rect x="86" y="70" width="18" height="12" fill="#e5484d"/><rect x="86" y="86" width="18" height="12" fill="#ffc078"/><rect x="86" y="102" width="18" height="12" fill="#a8dcf0"/>',
    T(150, 36, 12, "新增单行道", "middle") + T(160, 94, 12, "隔壁小街", "middle") + T(160, 110, 12, "堵死了", "middle"));

  illusAdd("c26_doc", "一个人抱着厚厚一摞设计文档满脸自信，旁边玩家沿着文档里没写的方向跑掉了",
    ground + person(40, 62, { arms: "hold", face: "grin" }) + '<rect x="62" y="82" width="34" height="42" fill="#fff"/><rect x="66" y="78" width="34" height="42" fill="#fff"/><path d="M72 90 H92 M72 100 H92 M72 110 H86" stroke-width="2"/>' +
    person(168, 62, { arms: "up", legs: "run", face: "wide" }) + '<path d="M130 112 q10 -12 18 0" fill="none" stroke-dasharray="3 5" stroke-width="2.5"/>',
    T(84, 70, 12, "50 页", "middle") + T(160, 28, 12, "文档没写到", "middle"));
})();
