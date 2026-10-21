/* 第2章插图包（火柴人风）。每张图只在第2章用一次。 */
(function () {
  const { person, ground, T, E, eye, SK, INK } = window.illusKit;
  const add = window.illusAdd;
  const addUp = (n, a, b, e) => add(n, a, '<g transform="translate(0 -9)">' + b + '</g>', e);   // 整体上移 9，给底部图注让出位置
  const desk = '<path d="M14 100 H112 M24 100 V126 M102 100 V126" stroke-width="4"/>';
  const clock = (x, y, r, h) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#fff"/><path d="M' + x + " " + y + " V" + (y - r + 4) + " M" + x + " " + y + " l" + (h || 6) + ' 3" stroke-width="2.5"/>';
  const coin = (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 7) + '" fill="#ffd34d" stroke-width="2.5"/>';
  const star = (x, y, k) => '<path d="M' + x + " " + (y - 10 * k) + " l" + 3 * k + " " + 7 * k + " " + 8 * k + " " + 1 * k + " -" + 6 * k + " " + 5 * k + " " + 2 * k + " " + 8 * k + " -" + 7 * k + " -" + 4 * k + " -" + 7 * k + " " + 4 * k + " " + 2 * k + " -" + 8 * k + " -" + 6 * k + " -" + 5 * k + " " + 8 * k + " -" + 1 * k + 'z" fill="#ffd34d" stroke-width="2.5"/>';
  const chest = (x, y, c) => '<rect x="' + x + '" y="' + y + '" width="26" height="18" rx="3" fill="' + c + '" stroke-width="3"/><path d="M' + x + " " + (y + 7) + " h26 M" + (x + 11) + " " + (y + 7) + " v6 h4 v-6" + '" stroke-width="2.5" fill="none"/>';

  /* ---- 钩子 ---- */
  add("c02_onemore", "深夜，一个火柴人坐在屏幕前说再来一局，墙上的钟指向一点", ground + clock(172, 26, 15, 6) +
    person(52, 62, { arms: "hold", legs: "sit", face: "wide", look: 1 }) +
    '<rect x="96" y="66" width="62" height="42" fill="#a8dcf0"/><path d="M120 108 V111 M82 111 H172 M88 111 V126 M166 111 V126" stroke-width="3.5"/><path d="M104 76 h30 M104 86 h20" stroke-width="2.5"/>' +
    '<ellipse cx="62" cy="20" rx="48" ry="14" fill="#fff"/>', T(62, 25, 12.5, "再来一局！", "middle") + T(172, 56, 11, "1:00", "middle"));

  /* ---- 第1节：核心循环的例子 ---- */
  addUp("c02_pvz", "植物大战僵尸式的循环：收阳光、种植物、挡住僵尸，一圈箭头首尾相连", ground +
    '<circle cx="36" cy="34" r="12" fill="#ffd34d"/><path d="M36 15 v-3 M16 34 h-4 M56 34 h4 M22 20 l-3 -3 M50 20 l3 -3" stroke-width="2.5"/>' +
    '<path d="M36 126 V96 M36 108 q-14 -6 -14 -14 M36 112 q14 -6 14 -14" fill="none"/><circle cx="36" cy="86" r="11" fill="#ffe58a"/><circle cx="36" cy="86" r="5" fill="#c98f5a" stroke-width="2"/>' +
    '<path d="M86 126 V102 q10 -4 12 4 M86 112 q-12 -2 -14 -10" fill="none"/><circle cx="84" cy="94" r="10" fill="#b6e8a8"/><path d="M94 94 h12" stroke-width="5"/><circle cx="114" cy="94" r="3.5" fill="#9bdc8f" stroke-width="2"/>' +
    person(168, 62, { s: 1, arms: "point", face: "sad", skin: "#c6e6b6", legs: "walk", look: -1 }) +
    '<path d="M60 52 q22 -28 66 -6" fill="none" stroke-dasharray="3 6" stroke-width="2.5"/><path d="M122 38 l6 8 -10 2" fill="none" stroke-width="2.5"/>', T(100, 135, 12, "阳光→种植→抵挡→新植物", "middle"));
  addUp("c02_mc", "生存沙盒的循环：挥镐采集方块，合成工具，建起小屋，再走向更远的地方", ground +
    person(40, 62, { arms: "throw", face: "grin", legs: "walk" }) + '<path d="M62 56 L82 76" stroke-width="4"/><path d="M78 68 l12 -6" stroke-width="4"/>' +
    '<rect x="88" y="96" width="28" height="28" fill="#c98f5a"/><path d="M88 110 h28 M102 96 v28" stroke-width="2"/><rect x="118" y="108" width="20" height="16" fill="#9aa0ad"/>' +
    '<rect x="142" y="88" width="46" height="36" fill="#ffe58a"/><path d="M138 90 L165 62 L192 90 Z" fill="#ff8fab"/><rect x="158" y="102" width="14" height="22" fill="#c98f5a"/>' +
    '<g stroke-width="2"><rect x="14" y="14" width="16" height="16" fill="#fff"/><rect x="30" y="14" width="16" height="16" fill="#fff"/><rect x="14" y="30" width="16" height="16" fill="#fff"/><rect x="30" y="30" width="16" height="16" fill="#ffe58a"/></g>', T(58, 28, 12, "→", "middle") + T(100, 135, 12, "采集→合成→建造→远行", "middle"));
  add("c02_feed", "刷短视频：拇指一路下滑，大多数内容平平，偶尔蹦出一条特别对胃口的，弹出一颗星", ground +
    '<rect x="70" y="14" width="52" height="110" rx="8" fill="#fff"/><rect x="76" y="24" width="40" height="22" fill="#e8e8f0" stroke-width="2"/><rect x="76" y="50" width="40" height="22" fill="#e8e8f0" stroke-width="2"/><rect x="76" y="76" width="40" height="26" fill="#ffe9ef" stroke-width="2"/>' + star(96, 90, 0.9) +
    '<path d="M138 40 v36 M130 68 l8 10 8 -10" stroke-width="4"/>' + person(30, 70, { s: 0.85, arms: "point", face: "wide", look: 1 }), T(160, 100, 12, "再来一条", "middle") + T(160, 116, 12, "偶尔才中", "middle"));
  add("c02_vocab", "背单词打卡：火柴人举着手机，屏幕上是一团火焰和连续天数", ground +
    person(64, 62, { arms: "hold", face: "grin", look: 1 }) +
    '<rect x="88" y="52" width="46" height="70" rx="7" fill="#fff"/><path d="M111 62 q-14 14 -4 24 q-4 -8 6 -12 q8 8 -2 18 q16 -6 8 -22 q-2 6 -6 2 z" fill="#ff8f3a" stroke-width="2.5"/>' +
    '<rect x="146" y="30" width="44" height="28" fill="#fff6c9" transform="rotate(4 168 44)"/><path d="M154 40 h28 M154 48 h18" stroke-width="2"/>', T(111, 112, 13, "12 天", "middle") + T(166, 80, 12, "守住连续！", "middle"));
  addUp("c02_cutscene", "反例：一段过场动画，箭头一路直走到“完”，没有任何一根线绕回起点", ground +
    '<rect x="88" y="20" width="90" height="42" rx="5" fill="#d8c8ff"/><path d="M124 30 L146 41 L124 52 Z" fill="#fff"/>' +
    person(40, 62, { arms: "stand", face: "flat", look: 1 }) +
    '<circle cx="92" cy="100" r="11" fill="#fff"/><circle cx="176" cy="100" r="11" fill="#fff"/><path d="M104 100 H162" stroke-width="4"/><path d="M155 93 l9 7 -9 7" fill="none" stroke-width="4"/>' +
    '<path d="M176 88 q-42 -30 -84 0" fill="none" stroke-dasharray="3 6" stroke="#e5484d"/><path d="M99 80 l-8 7 11 3" fill="none" stroke="#e5484d" stroke-width="2.5"/>' +
    '<path d="M127 70 l14 14 M141 70 l-14 14" stroke="#e5484d" stroke-width="3.5"/>', T(92, 95, 11, "始", "middle") + T(176, 95, 11, "完", "middle") + T(100, 135, 12, "看完就完，没有回到起点的理由", "middle"));
  addUp("c02_clicker", "反例：一个火柴人木然地点着大按钮，每点一下得一枚金币，行动本身毫无乐趣", ground +
    person(62, 60, { arms: "desk", face: "flat", look: 1 }) +
    '<ellipse cx="116" cy="112" rx="34" ry="12" fill="#e5484d"/><rect x="86" y="96" width="60" height="16" fill="#e5484d" stroke="none"/><ellipse cx="116" cy="96" rx="30" ry="9" fill="#ff8f8f"/>' +
    coin(168, 40, 8) + coin(152, 62, 8) + '<path d="M120 84 V58 M112 66 l8 -8 8 8" stroke-width="3.5"/>' +
    '<path d="M140 52 q14 -16 30 -8" fill="none" stroke-dasharray="3 5" stroke-width="2.5"/>', T(108, 30, 13, "点→+1→再点", "middle") + T(100, 135, 12, "圈闭合了，行动却没意思", "middle"));

  /* ---- 第2节：四种发奖规则 ---- */
  addUp("c02_vending", "反例：自动售货机，每投一次币必定掉出一瓶饮料，一个火柴人面无表情地取走", ground +
    '<rect x="96" y="14" width="64" height="110" rx="5" fill="#a8dcf0"/><rect x="104" y="22" width="34" height="62" fill="#fff"/><path d="M104 40 h34 M104 58 h34" stroke-width="2"/><rect x="144" y="30" width="10" height="24" fill="#ffd34d" stroke-width="2"/><rect x="108" y="100" width="40" height="16" fill="#2b2b3a"/>' +
    person(66, 62, { arms: "desk", face: "flat" }) + '<rect x="120" y="102" width="10" height="14" fill="#ffb3c6" stroke-width="2"/>', T(100, 135, 12, "投币 → 必出货：没有悬念", "middle"));
  addUp("c02_payday", "发工资：月历上每个月同一天画着一圈，火柴人在那天收到一袋钱", ground +
    '<rect x="14" y="14" width="100" height="80" fill="#fff"/><path d="M14 34 H114" stroke-width="3"/><g stroke-width="1.8"><path d="M14 54 H114 M14 74 H114 M39 34 V94 M64 34 V94 M89 34 V94"/></g><circle cx="76" cy="64" r="11" fill="none" stroke="#e5484d" stroke-width="3.5"/>' +
    person(150, 62, { arms: "up", face: "smile" }) + '<path d="M142 30 q-4 14 8 14 q12 0 8 -14 z" fill="#ffd34d" stroke-width="2.5"/>', T(64, 19, 12, "每月 15 号", "middle") + T(100, 135, 12, "固定间隔（FI）", "middle"));
  add("c02_fishing", "钓鱼：火柴人拿着鱼竿坐在水边的木栈桥上，不知道鱼什么时候咬钩，头上一个问号", '<path d="M86 118 Q112 112 140 118 T194 118 V138 H86 Z" fill="#a8dcf0"/><path d="M86 118 Q112 112 140 118 T194 118" fill="none"/><rect x="6" y="126" width="82" height="8" fill="#c98f5a"/>' +
    person(40, 67, { arms: "hold", legs: "sit", face: "flat", look: 1 }) + '<path d="M62 94 L120 34 M120 34 V114" fill="none"/><circle cx="120" cy="116" r="3.5" fill="#ff8fab" stroke-width="2"/>' +
    '<ellipse cx="150" cy="128" rx="14" ry="6" fill="#ffb3c6"/><path d="M162 128 l8 -6 v12z" fill="#ffb3c6" stroke-width="2.5"/>', T(140, 26, 22, "?", "middle"));
  add("c02_loot", "刷怪掉落：一排五只怪物，只有其中一只掉下一个发光的紫色宝箱，其余什么都没掉", ground +
    [20, 56, 92, 128, 164].map((x, i) => '<circle cx="' + x + '" cy="82" r="14" fill="' + (i === 3 ? "#ffb3c6" : "#c7d3c2") + '"/>' + eye(x - 5, 80) + eye(x + 5, 80) + '<path d="M' + (x - 5) + " " + 90 + ' q5 -4 10 0" fill="none" stroke-width="2"/>').join("") +
    '<rect x="116" y="106" width="26" height="18" rx="3" fill="#d8c8ff" stroke-width="3"/><path d="M116 113 h26" stroke-width="2.5"/>' +
    '<path d="M129 98 v-6 M112 100 l-6 -5 M146 100 l6 -5" stroke="#8f6cf5" stroke-width="3"/>', T(20, 118, 12, "无", "middle") + T(56, 118, 12, "无", "middle") + T(92, 118, 12, "无", "middle") + T(164, 118, 12, "无", "middle") + T(100, 30, 13, "平均五只掉一次", "middle"));

  /* ---- 第3节：斯金纳时间线 ---- */
  add("c02_thorndike", "桑代克的迷笼：一只猫关在木笼里，爪子碰到门闩，笼门打开，笼外有一条鱼", ground +
    '<path d="M24 126 V40 H110 V126 Z" fill="#fff6e0"/><path d="M40 40 V126 M56 40 V126 M72 40 V126 M88 40 V126" stroke-width="2.5"/><path d="M110 60 V126" stroke-width="2.5"/>' +
    '<ellipse cx="66" cy="114" rx="20" ry="10" fill="#ffd9a8"/><circle cx="90" cy="106" r="9" fill="#ffd9a8"/>' + eye(92, 104) + eye(98, 104) + '<path d="M84 100 l-2 -8 6 4 M96 100 l4 -8 -2 8" fill="#ffd9a8" stroke-width="2.5"/>' +
    '<path d="M46 112 q-8 -2 -8 -14" fill="none" stroke-width="2.5"/><path d="M96 112 L108 88" stroke-width="3.5"/><path d="M110 84 l22 -8" stroke-width="4"/><circle cx="110" cy="84" r="4" fill="#ffd34d" stroke-width="2.5"/>' +
    '<ellipse cx="160" cy="116" rx="18" ry="9" fill="#a8dcf0"/><path d="M176 116 l12 -8 v16z" fill="#a8dcf0" stroke-width="2.5"/>', T(100, 22, 12.5, "试错：碰到门闩，笼门就开了", "middle"));
  add("c02_skinnerbox", "斯金纳的操作箱：箱里一只大鼠按压杠杆，食物自动掉进食盘，箱外的记录纸带画出每一次按压", ground +
    '<rect x="20" y="30" width="96" height="86" fill="#fff"/><path d="M30 116 V126 M106 116 V126" stroke-width="3.5"/><path d="M38 70 h24" stroke-width="5"/><rect x="62" y="62" width="8" height="16" fill="#9aa0ad" stroke-width="2.5"/>' +
    '<ellipse cx="42" cy="104" rx="14" ry="8" fill="#e9dccb"/><circle cx="30" cy="100" r="6" fill="#e9dccb"/><circle cx="26" cy="94" r="3" fill="#e9dccb" stroke-width="2"/>' + eye(29, 99) +
    '<path d="M100 40 v14" stroke-width="3"/><rect x="92" y="54" width="16" height="8" fill="#c98f5a" stroke-width="2.5"/><circle cx="100" cy="106" r="3" fill="#c98f5a" stroke-width="2"/>' +
    '<rect x="132" y="50" width="54" height="52" fill="#e8e8f0"/><path d="M138 94 L148 86 L158 90 L168 72 L180 62" fill="none" stroke="#e5484d" stroke-width="3"/><path d="M116 76 H132" stroke-width="2.5" stroke-dasharray="3 4"/>', T(159, 118, 12, "自动记录", "middle") + T(68, 22, 12.5, "按一下，掉一粒", "middle"));
  add("c02_pigeons", "斯金纳与弗斯特的鸽子：一排鸽子在各自的箱子里啄着发光的按键，旁边有规则不同的记录曲线", ground +
    [20, 74].map(x => '<ellipse cx="' + x + '" cy="98" rx="16" ry="11" fill="#cfd3dc"/><circle cx="' + (x + 14) + '" cy="86" r="8" fill="#cfd3dc"/>' + eye(x + 17, 85) + '<path d="M' + (x + 22) + " 86 l7 2 -7 3" + '" fill="#ffd34d" stroke-width="2"/><path d="M' + (x - 14) + " 98 l-8 4" + '" stroke-width="2.5"/><path d="M' + (x - 4) + " 109 v17 M" + (x + 4) + ' 109 v17" stroke-width="2.5"/>').join("") +
    '<circle cx="56" cy="84" r="5" fill="#ffd34d" stroke-width="2.5"/><circle cx="112" cy="84" r="5" fill="#ffd34d" stroke-width="2.5"/><path d="M56 89 V126 M112 89 V126" stroke-width="2.5"/>' +
    '<rect x="132" y="22" width="56" height="86" fill="#fff"/><path d="M138 100 L144 88 L148 88 L154 72 L158 72 L166 52 L182 32" fill="none" stroke="#3a86ff" stroke-width="3"/>', T(160, 121, 12, "不同规则", "middle") + T(66, 40, 12.5, "不是每次都给饲料", "middle"));
  add("c02_designers", "游戏设计师们围着一张写满“掉落率”的白板，一人举着宝箱，借用实验室里的规则设计奖励", ground +
    '<rect x="10" y="10" width="100" height="62" fill="#fff"/><path d="M20 28 h56 M20 42 h72 M20 56 h40" stroke-width="2.5"/>' +
    person(130, 71, { s: 0.85, arms: "up", face: "grin" }) + chest(117, 44, "#d8c8ff") + person(172, 71, { s: 0.85, arms: "point", face: "smile", look: -1 }), T(60, 90, 12, "掉率 20%", "middle") + T(60, 108, 12, "每5个必出？", "middle"));

  /* ---- 第4节：可变奖励的例子 ---- */
  add("c02_gacha", "抽卡：火柴人拧着扭蛋机的把手，一颗彩色胶囊正在掉出来，没人知道里面是什么", ground +
    '<circle cx="124" cy="52" r="34" fill="#e8f6fc"/><circle cx="112" cy="46" r="7" fill="#ffb3c6" stroke-width="2"/><circle cx="130" cy="38" r="7" fill="#ffe58a" stroke-width="2"/><circle cx="136" cy="58" r="7" fill="#b6e8a8" stroke-width="2"/><rect x="100" y="84" width="48" height="40" fill="#e5484d"/><circle cx="124" cy="104" r="9" fill="#fff"/>' +
    person(62, 62, { arms: "none", face: "wide", look: 1 }) + '<path d="M62 80 L90 98 L116 104 M62 80 L48 94" fill="none"/><circle cx="140" cy="118" r="5" fill="#d8c8ff" stroke-width="2"/>' +
    '<path d="M164 70 v-8 M174 76 h8 M168 86 l6 6" stroke-width="2.5"/>', T(176, 30, 22, "?", "middle"));
  add("c02_pull", "下拉刷新：手机屏幕被向下拉出一圈转动的箭头，松手前不知道会出现什么", ground +
    '<rect x="66" y="12" width="66" height="112" rx="9" fill="#fff"/><path d="M82 34 A12 12 0 1 1 90 52" fill="none" stroke-width="3.5"/><path d="M84 52 l6 0 -2 -6" fill="none" stroke-width="3"/>' +
    '<rect x="76" y="72" width="46" height="14" fill="#e8e8f0" stroke-width="2"/><rect x="76" y="92" width="46" height="14" fill="#e8e8f0" stroke-width="2"/>' +
    '<path d="M148 30 v40 M140 60 l8 12 8 -12" stroke-width="4"/>' + person(36, 66, { s: 0.8, arms: "point", face: "wide", look: 1 }), T(106, 62, 18, "?", "middle") + T(164, 96, 12, "再刷一次", "middle"));
  add("c02_dailybad", "反例：七天签到日历，每一格都是同样的一枚金币，火柴人打着哈欠", ground +
    '<g stroke-width="2.5" fill="#fff">' + [0, 1, 2, 3, 4, 5, 6].map(i => '<rect x="' + (10 + i * 26) + '" y="26" width="24" height="30"/>').join("") + "</g>" +
    [0, 1, 2, 3, 4, 5, 6].map(i => coin(22 + i * 26, 41, 6)).join("") +
    person(100, 77, { s: 0.8, arms: "stand", face: "o" }), T(100, 18, 12, "一模一样，天天如此", "middle") + T(138, 84, 12, "哈——", "middle"));

  /* ---- 第5节：预测误差时间线 ---- */
  addUp("c02_kamin", "卡明的阻断实验：灯已经能预告电击，再加一个铃声，动物也学不会铃声的含义", ground +
    '<circle cx="36" cy="40" r="16" fill="#ffe58a"/><path d="M36 16 v-6 M12 40 h-6 M60 40 h6" stroke-width="2.5"/>' +
    '<path d="M96 28 q-12 8 -10 20 h30 q2 -12 -10 -20 z M101 52 q2 6 6 0" fill="#ffc078" stroke-width="2.5"/>' +
    '<ellipse cx="60" cy="106" rx="20" ry="11" fill="#e9dccb"/><circle cx="82" cy="98" r="8" fill="#e9dccb"/>' + eye(85, 96) +
    '<path d="M126 90 l10 -10 4 12 10 -12 6 16" fill="none" stroke="#ffb000" stroke-width="3.5"/>' +
    '<path d="M50 62 L78 86" stroke-dasharray="3 5" stroke-width="2.5"/>', T(36, 60, 12, "灯", "middle") + T(100, 14, 12, "铃", "middle") + T(150, 66, 12, "电击", "middle") + T(100, 135, 12, "被预告的，不必再学", "middle"));
  add("c02_rw", "雷斯克拉与瓦格纳的黑板：新的预期等于旧的预期加上一小份“实际减预期”", '<rect x="10" y="12" width="180" height="94" rx="4" fill="#2f4a3d"/>' +
    person(168, 73, { s: 0.7, arms: "point", face: "smile", look: -1, glasses: true }).replace(/<g /g, '<g ') +
    '<path d="M14 120 H186" stroke-dasharray="2 7" stroke-width="3"/>', '<g fill="#fff" stroke="none" font-size="11.5" text-anchor="start"><text x="18" y="40">新预期 =</text><text x="18" y="62">旧预期 +</text><text x="18" y="84">速度 ×（实际−预期）</text></g>');
  addUp("c02_monkey", "舒尔茨的猴子：猴子盯着亮起的灯，嘴边是一管果汁，旁边的屏幕上跳出一条神经元放电的脉冲线", ground +
    '<g transform="translate(0 12)"><ellipse cx="46" cy="92" rx="22" ry="22" fill="#c98f5a"/><circle cx="46" cy="62" r="16" fill="#c98f5a"/><circle cx="46" cy="66" r="9" fill="#ffd9a8"/>' + eye(40, 60) + eye(52, 60) + '<circle cx="28" cy="58" r="6" fill="#c98f5a"/><circle cx="64" cy="58" r="6" fill="#c98f5a"/>' +
    '<path d="M52 70 H72" stroke-width="3"/><rect x="70" y="62" width="9" height="20" rx="2" fill="#ffb347" stroke-width="2.5"/></g>' + '<circle cx="104" cy="30" r="12" fill="#ffe58a"/><path d="M104 12 v-4 M86 30 h-4 M122 30 h4" stroke-width="2.5"/>' +
    '<rect x="116" y="70" width="70" height="44" fill="#1f2937"/><path d="M151 114 V126 M136 126 H166" stroke-width="3.5"/><path d="M122 104 H140 L142 78 L144 104 H162 H180" fill="none" stroke="#7bf29a" stroke-width="2.5"/>', T(151, 135, 12, "多巴胺神经元", "middle"));
  add("c02_rl", "强化学习：一个小机器人在迷宫里一格一格试路，每走对一步，头顶的“预测”数字就更新一次", '<g stroke-width="3" fill="none"><path d="M20 20 H180 V120 H20 Z"/><path d="M60 20 V80 M100 120 V60 M140 20 V80"/></g>' +
    '<g transform="translate(0 8)"><rect x="26" y="90" width="22" height="22" rx="5" fill="#a8dcf0"/><circle cx="33" cy="98" r="2.5" fill="' + INK + '" stroke="none"/><circle cx="42" cy="98" r="2.5" fill="' + INK + '" stroke="none"/><path d="M31 105 h12" stroke-width="2.5"/><path d="M37 90 v-8" stroke-width="2.5"/></g>' +
    star(158, 108, 1) + '<path d="M52 110 H80 V50 H120 V100 H146" stroke-dasharray="3 5" stroke-width="2.5" fill="none"/>', T(37, 85, 10, "预测 5", "middle") + T(100, 134, 12, "预期向实际一点点靠拢", "middle"));

  /* ---- 第6节：预测误差的例子 ---- */
  add("c02_surprise", "火柴人收到一个出乎意料的礼物，头上蹦出三个感叹号", ground +
    person(70, 62, { arms: "up", face: "shout", legs: "run" }) + '<rect x="112" y="86" width="40" height="38" fill="#ffb3c6"/><path d="M132 86 V124 M112 104 H152" stroke-width="3"/><path d="M132 86 q-14 -18 -2 -18 q10 0 2 18 q14 -18 4 -18 q-10 0 -4 18" fill="none" stroke-width="2.5"/>' +
    '<path d="M30 28 l6 10 M60 16 v12 M92 28 l-6 10 M130 14 v16 M130 38 v2" stroke-width="4"/>');
  add("c02_hundred", "七天里天天领同样的一百金币，第七天火柴人对着钱袋一脸平静", ground +
    '<g stroke-width="2.5" fill="#fff">' + [0, 1, 2, 3, 4, 5, 6].map(i => '<rect x="' + (10 + i * 26) + '" y="16" width="24" height="24"/>').join("") + "</g>" +
    [0, 1, 2, 3, 4, 5, 6].map(i => '<text x="' + (22 + i * 26) + '" y="33" font-size="9.5" text-anchor="middle" stroke="none" fill="' + INK + '">100</text>').join("") +
    person(60, 66, { arms: "stand", face: "flat" }) + '<path d="M88 100 q-14 -4 -6 -18 q6 -2 12 0 q8 12 -6 18z" fill="#ffd34d" stroke-width="2.5"/>' +
    '<path d="M150 100 H190 M150 100 V60" stroke-width="2.5"/><path d="M152 84 L170 82 L190 82" fill="none" stroke="#3a86ff" stroke-width="3"/>', T(160, 118, 11, "惊喜→0", "middle"));
  addUp("c02_bonus", "工资单旁边多出一个意外的年终奖信封，火柴人惊讶得跳起来", ground +
    '<rect x="14" y="76" width="64" height="44" fill="#fff"/><path d="M22 90 h40 M22 100 h26" stroke-width="2.5"/><rect x="92" y="82" width="46" height="34" fill="#ffe58a"/><path d="M92 82 L115 100 L138 82" fill="none" stroke-width="2.5"/>' +
    person(168, 46, { s: 0.85, arms: "up", face: "shout", legs: "run" }) + '<path d="M140 30 l8 8 M150 18 v10" stroke-width="3"/>', T(46, 62, 12, "月薪", "middle") + T(115, 135, 12, "年终奖！", "middle"));
  addUp("c02_purple", "刷怪掉落：满地灰色小东西里，突然亮起一件紫色装备，火柴人瞪大眼睛", ground +
    '<rect x="14" y="108" width="14" height="14" fill="#c7d3c2" stroke-width="2"/><rect x="38" y="112" width="12" height="12" fill="#c7d3c2" stroke-width="2"/><rect x="58" y="106" width="14" height="14" fill="#c7d3c2" stroke-width="2"/>' +
    person(40, 56, { s: 0.9, arms: "point", face: "wide", look: 1 }) + '<path d="M120 114 L128 70 h22 L158 114 z" fill="#d8c8ff"/><path d="M130 76 h18" stroke-width="2.5"/>' +
    '<path d="M118 62 l-8 -8 M138 56 v-12 M160 62 l8 -8" stroke="#8f6cf5" stroke-width="3"/>', T(139, 135, 12, "紫装！", "middle"));
  add("c02_thousand", "反例：每次都发一千金币，金币堆成了山，火柴人站在山旁打哈欠", ground +
    '<path d="M70 126 Q110 52 160 126 Z" fill="#ffd34d"/>' + [[100, 104], [124, 92], [140, 110], [112, 118]].map(p => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="6" fill="#ffe58a" stroke-width="2"/>').join("") +
    person(36, 62, { arms: "stand", face: "flat" }) + '<ellipse cx="38" cy="20" rx="30" ry="12" fill="#fff"/>', T(38, 25, 12, "哈——", "middle") + T(118, 80, 11, "+1000", "middle"));

  /* ---- 第7节：目标梯度 ---- */
  add("c02_stampcard", "集章卡：两张卡，一张空白，一张已经预先盖好了两个章，火柴人把盖了章的那张拿在手里", ground +
    '<path d="M8 104 H88 M14 104 V126 M82 104 V126" stroke-width="4"/><rect x="16" y="68" width="66" height="36" fill="#fff"/><rect x="92" y="72" width="66" height="36" fill="#fff"/>' +
    [0, 1, 2, 3].map(i => '<rect x="' + (22 + i * 15) + '" y="80" width="13" height="13" fill="#fff" stroke-width="2"/>').join("") + [0, 1, 2, 3].map(i => '<rect x="' + (98 + i * 15) + '" y="84" width="13" height="13" fill="' + (i < 2 ? "#ffe58a" : "#fff") + '" stroke-width="2"/>').join("") +
    person(176, 62, { arms: "hold", face: "grin", look: -1 }), T(49, 56, 12, "空白", "middle") + T(125, 60, 12, "送了两格", "middle"));
  add("c02_coffee", "咖啡店的集点卡：火柴人拿着只差一格就满的卡，快步走向柜台", ground +
    person(70, 60, { arms: "hold", face: "grin", legs: "run", look: 1 }) + '<rect x="94" y="64" width="40" height="26" fill="#fff6c9" stroke-width="2.5"/><g stroke-width="1.8" fill="#ffe58a"><rect x="98" y="70" width="6" height="6"/><rect x="106" y="70" width="6" height="6"/><rect x="114" y="70" width="6" height="6"/><rect x="122" y="70" width="6" height="6"/><rect x="98" y="80" width="6" height="6"/><rect x="106" y="80" width="6" height="6"/><rect x="114" y="80" width="6" height="6" fill="#fff"/></g>' +
    '<path d="M150 126 V84 H190 V126" fill="#c98f5a"/><path d="M158 84 q4 -14 12 0 M164 62 q-4 10 4 12" fill="none" stroke-width="2.5"/><rect x="160" y="66" width="14" height="16" fill="#fff" stroke-width="2.5"/>', T(114, 56, 12, "差一格！", "middle"));
  add("c02_xpbar", "游戏里的经验条快要满了，火柴人说着“再打一局就升级”，手柄还在手里", ground +
    person(58, 67, { arms: "hold", face: "grin", legs: "sit", look: 1 }) + '<rect x="76" y="90" width="16" height="9" rx="4" fill="#9aa0ad" stroke-width="2.5"/><rect x="96" y="30" width="86" height="16" rx="8" fill="#fff"/><rect x="98" y="32" width="72" height="12" rx="6" fill="#b6e8a8" stroke="none"/><path d="M170 52 l-6 8 h12 z" fill="#e5484d" stroke-width="2"/>' +
    '<rect x="100" y="76" width="60" height="38" fill="#a8dcf0"/><path d="M84 114 H176 M90 114 V126 M170 114 V126" stroke-width="3.5"/>', T(139, 22, 12, "经验 95%", "middle") + T(6, 24, 12, "再打一局就升级"));
  add("c02_book", "读书读到关键情节被叫去吃饭：书摊开倒扣在桌上，火柴人一边端碗一边回头看", ground +
    '<path d="M16 100 H110 M24 100 V126 M102 100 V126" stroke-width="4"/><path d="M36 100 L50 78 L64 100 M64 100 L78 78 L92 100" fill="#fff6c9"/>' +
    person(150, 62, { arms: "hold", face: "wide", look: -1, legs: "walk" }) + '<ellipse cx="138" cy="92" rx="14" ry="5" fill="#ffe58a" stroke-width="2.5"/>', T(64, 62, 12, "后来呢？", "middle"));
  add("c02_noprogress", "反例：一份长长的任务清单，没有任何进度显示，火柴人在清单前一脸茫然", ground +
    '<rect x="96" y="14" width="86" height="106" fill="#fff"/><path d="M106 34 h66 M106 52 h66 M106 70 h66 M106 88 h50" stroke-width="2.5"/><circle cx="102" cy="34" r="2" fill="' + INK + '" stroke="none"/>' +
    person(46, 62, { arms: "chin", face: "flat", look: 1 }) + '<ellipse cx="46" cy="22" rx="30" ry="12" fill="#fff"/>', T(46, 27, 12, "还有多少？", "middle") + T(139, 108, 12, "看不到进度", "middle"));
})();
