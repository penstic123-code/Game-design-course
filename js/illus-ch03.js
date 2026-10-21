/* 第3章插图包（火柴人风）。每张图只在第3章用一次。 */
(function () {
  const { person, ground, T, E, eye, SK, INK } = window.illusKit;
  const add = window.illusAdd;
  const bubble = (cx, cy, rx, ry) => '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="#fff"/>';
  const star = (x, y, k) => '<path d="M' + x + " " + (y - 10 * k) + " l" + 3 * k + " " + 7 * k + " " + 8 * k + " " + 1 * k + " -" + 6 * k + " " + 5 * k + " " + 2 * k + " " + 8 * k + " -" + 7 * k + " -" + 4 * k + " -" + 7 * k + " " + 4 * k + " " + 2 * k + " -" + 8 * k + " -" + 6 * k + " -" + 5 * k + " " + 8 * k + " -" + 1 * k + 'z" fill="#ffd34d" stroke-width="2.5"/>';
  const desk = (x1, x2) => '<path d="M' + x1 + " 100 H" + x2 + " M" + (x1 + 10) + " 100 V126 M" + (x2 - 10) + ' 100 V126" stroke-width="4"/>';

  /* ---- 钩子 ---- */
  add("c03_hook", "左边：火柴人坐在桌前写作业，昏昏欲睡；右边：同一个火柴人举起双手两眼放光，面前是亮着的屏幕，钟已经指向深夜", ground +
    '<path d="M100 14 V126" stroke-dasharray="4 6" stroke-width="2.5"/>' +
    '<path d="M50 100 H96 M60 100 V126 M86 100 V126" stroke-width="4"/>' + person(30, 62, { arms: "desk", legs: "sit", face: "sad", look: 1 }) + '<rect x="62" y="86" width="26" height="14" fill="#fff"/>' +
    person(136, 62, { arms: "up", face: "shout", legs: "wide" }) + '<path d="M158 100 H196 M162 100 V126 M192 100 V126" stroke-width="4"/><rect x="168" y="74" width="24" height="26" fill="#a8dcf0"/>' +
    '<circle cx="172" cy="26" r="13" fill="#fff"/><path d="M172 26 V17 M172 26 L178 29" stroke-width="2.5"/>', T(46, 24, 12, "作业……", "middle") + T(128, 22, 12, "再来！", "middle"));

  /* ---- 第1节：三种需求 ---- */
  add("c03_botw", "自主：火柴人站在草坡上，远处有一座山，脚下的路分成三条，哪条都可以走", '<path d="M0 126 Q60 96 110 112 T200 100 V136 H0 Z" fill="#b6e8a8"/><path d="M150 100 L172 52 L196 100 Z" fill="#a8dcf0"/>' +
    person(34, 60, { arms: "point", face: "grin", look: 1 }) + '<path d="M58 110 Q96 70 140 92 M60 116 H138 M58 122 Q92 138 128 134" fill="none" stroke-dasharray="4 5" stroke-width="3"/>' +
    '<path d="M131 89 L141 96 L129 99 M130 108 L139 114 L129 120 M119 123 L129 128 L118 132" fill="none" stroke-width="2.5"/>', T(100, 22, 13, "想去哪儿都行", "middle"));
  add("c03_hades", "胜任：火柴人面对一只怪物，身后立着几块写着失败次数的小墓碑，这一次他躲开了攻击", ground +
    person(72, 62, { arms: "throw", face: "grin", legs: "run" }) + '<path d="M100 58 L124 38" stroke-width="4"/>' +
    '<circle cx="158" cy="86" r="26" fill="#d8c8ff"/>' + eye(148, 80) + eye(168, 80) + '<path d="M146 98 q12 -8 24 0" fill="none" stroke-width="2.5"/><path d="M138 66 l-6 -12 M178 66 l6 -12" stroke-width="3"/>' +
    '<path d="M130 84 l-10 -8 M132 94 h-14" stroke-width="2.5"/>' +
    '<path d="M10 126 V104 q8 -10 16 0 V126 M32 126 V108 q8 -10 16 0 V126" fill="#e8e8f0" stroke-width="2.5"/><path d="M13 114 h10 M13 120 h10 M35 116 h10 M35 122 h10" stroke-width="2"/>', T(100, 22, 12.5, "死了几次，招式都熟了", "middle"));
  add("c03_acnh", "关联：小岛上两个火柴人隔着篱笆打招呼，一个提着礼物，岛上有一间小房子", '<ellipse cx="100" cy="116" rx="92" ry="18" fill="#b6e8a8"/>' +
    '<rect x="132" y="70" width="40" height="34" fill="#ffe58a"/><path d="M126 72 L152 48 L178 72 Z" fill="#ff8fab"/><rect x="146" y="86" width="12" height="18" fill="#c98f5a"/>' +
    person(40, 60, { arms: "wave", face: "grin" }) + person(100, 60, { arms: "hold", face: "smile", look: -1 }) + '<rect x="68" y="78" width="16" height="14" fill="#ffb3c6" stroke-width="2.5"/><path d="M76 78 v14 M68 85 h16" stroke-width="2"/>' +
    '<path d="M56 108 V126 M66 108 V126 M76 108 V126 M52 114 H80 M52 121 H80" stroke-width="2.5"/>' +
    '<path d="M16 108 q4 -8 8 0 M118 112 q4 -8 8 0" fill="none" stroke-width="2"/>', T(68, 22, 12, "欢迎来我的岛！", "middle"));
  add("c03_guitar", "学吉他：火柴人抱着吉他弹出第一首完整的曲子，朋友在旁边拿着手鼓合奏，音符飘在空中", ground +
    person(52, 62, { arms: "hold", face: "grin" }) + '<ellipse cx="68" cy="94" rx="14" ry="10" fill="#c98f5a"/><path d="M80 90 L112 70" stroke-width="4"/>' +
    person(150, 62, { arms: "hold", face: "smile", look: -1 }) + '<rect x="136" y="94" width="28" height="22" fill="#ffe58a"/><ellipse cx="150" cy="94" rx="14" ry="5" fill="#fff6c9"/><path d="M142 116 L138 126 M158 116 L162 126" stroke-width="3"/>' +
    '<g transform="translate(0 10)"><path d="M96 40 v-16 h10 M118 34 v-14 h9 M84 28 v-12 h8" fill="none" stroke-width="3"/><circle cx="94" cy="42" r="3.5" fill="' + INK + '" stroke="none"/><circle cx="116" cy="36" r="3.5" fill="' + INK + '" stroke="none"/></g>',
    T(100, 14, 11, "自己选歌 · 弹完整首 · 一起合奏", "middle"));
  add("c03_tutorial", "反例：火柴人被一只大手牵着往前走，路被围栏封住，头上写着“不能跳过”", ground +
    '<path d="M112 100 H194 M112 116 H194" stroke-width="3"/><path d="M120 100 V126 M146 100 V126 M172 100 V126 M192 100 V126" stroke-width="2.5"/>' +
    person(60, 62, { arms: "none", face: "sad", legs: "walk", look: 1 }) + '<path d="M60 80 L46 98 M60 80 L104 74" fill="none"/>' +
    '<path d="M126 62 L196 50 M126 82 L196 94" fill="none" stroke-width="3"/><circle cx="116" cy="72" r="12" fill="#ffd9a8" stroke-width="3"/><path d="M108 63 q2 -6 6 -1 M116 61 q3 -6 7 0" fill="none" stroke-width="2.5"/>' + bubble(70, 20, 44, 14), T(70, 25, 12, "不能跳过！", "middle"));
  add("c03_invite", "反例：活动页要求拉三个人才能解锁，火柴人满脸尴尬地举着手机，朋友们摆手后退", ground +
    person(40, 62, { arms: "hold", face: "sad", look: 1 }) + '<rect x="62" y="52" width="30" height="46" rx="5" fill="#fff"/><path d="M68 66 h18 M68 76 h18 M68 86 h10" stroke-width="2"/>' +
    person(130, 64, { s: 0.8, arms: "wave", face: "flat", look: -1 }) + person(172, 64, { s: 0.8, arms: "wave", face: "flat", look: -1 }) +
    bubble(68, 22, 56, 14), T(68, 27, 12, "拉 3 人才能解锁！", "middle"));

  /* ---- 第2节：发明故事 ---- */
  add("c03_soma", "德西的积木实验：学生独自坐在桌前摆弄立体积木，墙上的单向镜后面有个人在悄悄记录", ground +
    desk(14, 100) + person(44, 62, { arms: "desk", legs: "sit", face: "smile", look: 1 }) + '<rect x="68" y="84" width="14" height="14" fill="#ffb3c6"/><rect x="82" y="84" width="14" height="14" fill="#a8dcf0"/><rect x="75" y="70" width="14" height="14" fill="#ffe58a"/>' +
    '<rect x="124" y="20" width="62" height="78" fill="#d9e8f0"/><path d="M130 30 L180 90" stroke="#fff" stroke-width="4"/>' + person(165, 62, { s: 0.55, arms: "hold", face: "flat", look: -1 }) + '<rect x="120" y="14" width="70" height="88" fill="none" stroke-width="3"/>', T(155, 118, 11, "单向镜", "middle") + T(44, 22, 12, "休息时间", "middle"));
  add("c03_kids", "莱珀的彩笔实验：一个小孩拿着彩笔画画，旁边的架子上摆着一张“好孩子”奖状", ground +
    person(52, 70, { s: 0.85, arms: "desk", legs: "sit", face: "smile", look: 1 }) + '<path d="M74 114 H124 M78 114 V126 M120 114 V126" stroke-width="3.5"/><rect x="78" y="88" width="32" height="26" fill="#fff" transform="rotate(-6 94 100)"/><path d="M84 96 q8 -8 16 0" fill="none" stroke="#e5484d" stroke-width="3"/>' +
    '<rect x="132" y="24" width="50" height="40" fill="#fff6c9"/><path d="M140 36 h34 M140 46 h24" stroke-width="2.5"/>' + star(158, 56, 0.7) + '<path d="M124 70 H190 M130 70 V78 M184 70 V78" stroke-width="3"/>', T(157, 98, 12, "画画有奖状！", "middle"));
  add("c03_sdt", "自我决定理论：一个小三角形，三个顶点分别写着“自”“胜”“关”，中间站着一个火柴人", '<path d="M100 20 L36 104 H164 Z" fill="#fff7cf"/>' +
    '<circle cx="100" cy="20" r="13" fill="#ffb3c6"/><circle cx="36" cy="104" r="13" fill="#a8dcf0"/><circle cx="164" cy="104" r="13" fill="#b6e8a8"/>' +
    person(100, 66, { s: 0.55, arms: "up", face: "grin" }), T(100, 24.5, 12, "自", "middle") + T(36, 108.5, 12, "胜", "middle") + T(164, 108.5, 12, "关", "middle") + T(100, 134, 12, "三种基本需求", "middle"));
  add("c03_debate", "两位学者各举着一叠论文争论奖励到底削不削弱兴趣，中间悬着一个问号", ground +
    person(40, 62, { arms: "up", face: "shout" }) + '<rect x="27" y="22" width="26" height="28" fill="#fff" transform="rotate(-8 40 36)"/>' +
    person(160, 62, { arms: "up", face: "shout", look: -1 }) + '<rect x="147" y="22" width="26" height="28" fill="#fff" transform="rotate(8 160 36)"/>', T(100, 40, 30, "?", "middle") + T(100, 16, 12, "元分析 vs 元分析", "middle"));

  /* ---- 第3节：过度理由效应 ---- */
  add("c03_candy", "一个爱画画的孩子被许诺“画一幅给一颗糖”，眼睛已经盯着糖罐，画纸只画了一半", ground +
    person(52, 70, { s: 0.85, arms: "desk", legs: "sit", face: "wide", look: 1 }) + '<path d="M72 116 H112 M76 116 V126 M108 116 V126" stroke-width="3.5"/><rect x="70" y="92" width="30" height="24" fill="#fff"/><path d="M76 100 q6 -6 12 0" fill="none" stroke="#e5484d" stroke-width="3"/>' +
    '<path d="M128 102 H182 M134 102 V126 M176 102 V126" stroke-width="3.5"/><path d="M138 56 H172 V100 H138 Z" fill="#fff"/><circle cx="148" cy="88" r="5" fill="#ff8fab" stroke-width="2"/><circle cx="160" cy="84" r="5" fill="#ffe58a" stroke-width="2"/><circle cx="154" cy="94" r="5" fill="#a8dcf0" stroke-width="2"/><rect x="136" y="48" width="38" height="8" fill="#c98f5a"/>', T(152, 38, 12, "一幅换一颗", "middle"));
  add("c03_daily", "每日任务清单：火柴人对着打卡清单叹气，墙上的钟指着“上班”的时间", ground +
    '<rect x="96" y="14" width="78" height="100" fill="#fff"/><path d="M106 34 h50 M106 54 h50 M106 74 h50 M106 94 h30" stroke-width="2.5"/><path d="M162 30 l4 4 8 -8 M162 50 l4 4 8 -8 M162 70 l4 4 8 -8" stroke="#3aa655" stroke-width="3" fill="none"/>' +
    person(44, 62, { arms: "stand", face: "sad", look: 1 }) + bubble(44, 18, 36, 12) + '<circle cx="186" cy="26" r="10" fill="#fff"/><path d="M186 26 V19 M186 26 L191 29" stroke-width="2.5"/>', T(44, 22, 12, "又是上班……", "middle") + T(135, 108, 12, "今日必做", "middle"));
  add("c03_reading", "给孩子的阅读奖励：孩子一边翻书一边偷偷看书架上的小玩具", ground +
    '<path d="M110 126 V30 H182 V126" fill="none" stroke-width="3.5"/><path d="M110 66 H182" stroke-width="3.5"/><rect x="124" y="42" width="20" height="24" fill="#ffb3c6"/><circle cx="162" cy="54" r="10" fill="#a8dcf0"/>' +
    person(52, 62, { arms: "hold", face: "wide", look: 1 }) + '<rect x="64" y="84" width="26" height="14" fill="#ffe58a" transform="rotate(-8 77 91)"/>', T(146, 98, 12, "读完换玩具", "middle"));
  add("c03_praise", "通关后屏幕弹出“你用了一个很少见的打法”，火柴人挺起胸，脸上有光", ground +
    person(48, 62, { arms: "up", face: "grin" }) + '<rect x="92" y="30" width="86" height="56" rx="6" fill="#e8f6fc"/>' + star(112, 56, 0.9) + '<path d="M92 66 L74 74 L92 52" fill="#e8f6fc"/>', T(146, 52, 11.5, "你的打法", "middle") + T(146, 68, 11.5, "很少见！", "middle"));
  add("c03_boring", "反例：火柴人面无表情地录入一张又一张表格，桌上放着一枚硬币，兴趣本来就是零", ground +
    desk(14, 112) + person(50, 62, { arms: "desk", legs: "sit", face: "flat", look: 1 }) + '<rect x="64" y="86" width="26" height="14" fill="#fff"/><path d="M70 92 h14" stroke-width="2"/>' +
    '<circle cx="100" cy="91" r="9" fill="#ffd34d" stroke-width="2.5"/><rect x="146" y="24" width="38" height="26" fill="#fff"/><path d="M152 34 h26 M152 42 h20" stroke-width="2"/>', T(50, 22, 12, "本来就没兴趣", "middle"));

  /* ---- 第4节：Bartle 四种类型 ---- */
  add("c03_achiever", "成就者：火柴人一手举着奖杯，一手拿着几乎全部打了钩的清单，身后的架子上摆满奖杯", ground +
    '<path d="M120 100 H190 M120 70 H190" stroke-width="3.5"/><rect x="128" y="50" width="12" height="20" fill="#ffd34d"/><rect x="150" y="50" width="12" height="20" fill="#ffd34d"/><rect x="172" y="50" width="12" height="20" fill="#ffd34d"/><rect x="134" y="80" width="12" height="20" fill="#ffd34d"/><rect x="160" y="80" width="12" height="20" fill="#ffd34d"/>' +
    person(54, 62, { arms: "wave", face: "grin" }) + '<path d="M65 42 H81 V50 q0 8 -8 10 q-8 -2 -8 -10 Z" fill="#ffd34d" stroke-width="2.5"/>' +
    '<rect x="18" y="82" width="22" height="30" fill="#fff"/><path d="M23 92 l3 3 6 -6 M23 102 l3 3 6 -6" fill="none" stroke="#3aa655" stroke-width="2.5"/>');
  add("c03_explorer", "探索者：火柴人举着放大镜，趴在地图边缘的一堵墙前，墙后面藏着一个隐藏房间", ground +
    '<path d="M110 20 V126 H192" fill="none" stroke-width="4"/><rect x="132" y="62" width="48" height="48" fill="#e8e8f0" stroke-dasharray="5 5"/>' + star(156, 92, 1.1) +
    person(60, 62, { arms: "point", face: "wide", look: 1, legs: "walk" }) + '<circle cx="106" cy="56" r="11" fill="#e8f6fc" stroke-width="3"/><path d="M98 64 L88 72" stroke-width="3.5"/>', T(156, 56, 11, "隐藏房间", "middle") + T(98, 40, 11, "放大镜", "end"));
  add("c03_socializer", "社交者：两个火柴人并排坐着聊得开心，头顶是互相交叠的对话气泡和爱心", ground +
    person(60, 64, { arms: "wave", legs: "sit", face: "grin", look: 1 }) + person(130, 64, { arms: "hold", legs: "sit", face: "smile", look: -1 }) +
    '<ellipse cx="62" cy="24" rx="34" ry="14" fill="#fff"/><ellipse cx="132" cy="20" rx="34" ry="14" fill="#fff"/>' + E(62, 31, 16, "☺") + E(132, 28, 16, "♥"));
  add("c03_killer", "竞争者：两个火柴人站在擂台上对峙，中间的排名牌写着第一名", ground +
    '<path d="M14 100 H186 M30 100 V126 M170 100 V126" stroke-width="5"/>' + person(46, 36, { arms: "throw", face: "grin", legs: "wide" }) + person(154, 36, { arms: "throw", face: "shout", legs: "wide", look: -1 }) +
    '<path d="M84 30 H116 V54 q0 12 -16 12 q-16 0 -16 -12 Z" fill="#ffd34d" stroke-width="3"/>', T(100, 51, 14, "1", "middle") + T(100, 18, 12, "排名", "middle"));
  add("c03_tour", "同一个旅行团：四个火柴人各干各的，一个举着手机拍打卡照，一个钻进小巷，一个边走边聊天，一个冲向旗子标出的好位置", ground +
    person(24, 71, { s: 0.85, arms: "up", face: "grin" }) + '<rect x="33" y="48" width="14" height="22" fill="#a8dcf0" stroke-width="2"/>' +
    person(70, 71, { s: 0.85, arms: "point", face: "wide", look: 1, legs: "walk" }) + '<path d="M96 126 V96 H110 V126" fill="#e8e8f0" stroke-width="2.5"/>' +
    person(128, 71, { s: 0.85, arms: "wave", face: "smile" }) + '<ellipse cx="128" cy="30" rx="24" ry="10" fill="#fff"/>' +
    person(162, 71, { s: 0.85, arms: "throw", face: "shout", look: 1, legs: "run" }) + '<path d="M190 126 V56" stroke-width="3"/><path d="M190 56 L190 70 L177 63 Z" fill="#ffd34d" stroke-width="2.5"/>', T(128, 34, 11, "聊聊聊", "middle"));
  add("c03_context", "反例：同一个火柴人在三个场景里，手里拿着不同的东西：研究地图时举着放大镜，冲排名时捧着奖杯，和朋友开黑时说着话", '<path d="M6 112 H194" stroke-dasharray="2 7" stroke-width="3"/><path d="M68 14 V112 M134 14 V112" stroke-dasharray="4 6" stroke-width="2.5"/>' +
    person(34, 67, { s: 0.7, arms: "point", face: "wide", hair: true, legs: "walk" }) + '<circle cx="53" cy="70" r="6" fill="#e8f6fc" stroke-width="2.5"/><path d="M49 74 L56 73" stroke-width="2"/>' +
    person(100, 67, { s: 0.7, arms: "throw", face: "grin", hair: true, legs: "stand" }) + '<path d="M114 48 h9 v5 q0 5 -4.5 5 q-4.5 0 -4.5 -5 z M118.5 58 v4 h-4 h8" fill="#ffd34d" stroke-width="2"/>' +
    person(166, 67, { s: 0.7, arms: "wave", face: "smile", hair: true, legs: "stand" }) + '<ellipse cx="186" cy="40" rx="8" ry="6" fill="#fff" stroke-width="2"/>',
    T(34, 130, 11, "刚入坑", "middle") + T(100, 130, 11, "满级后", "middle") + T(166, 130, 11, "和朋友开黑", "middle") + E(186, 44, 8, "♥"));

  /* ---- 第5节：Bartle 发明故事 ---- */
  add("c03_mud1", "MUD1 的黑色终端屏幕：绿色文字写着“你站在一间昏暗的石室里”，光标在闪", '<rect x="16" y="14" width="168" height="100" rx="8" fill="#1f2937"/><rect x="72" y="118" width="56" height="8" fill="#9aa0ad"/>' +
    '<path d="M28 30 h96 M28 46 h120 M28 62 h70" stroke="#7bf29a" stroke-width="3.5"/>', T(100, 102, 12.5, "> go north_", "middle").replace('fill="' + INK + '"', 'fill="#b9f7c9"'));
  add("c03_forum", "公告板上几百条帖子：好几个火柴人围着一块板子，每人手里都举着自己的留言，在争论玩家想要什么", ground +
    '<rect x="50" y="26" width="100" height="50" fill="#fff6c9"/><path d="M58 38 h84 M58 48 h70 M58 58 h84 M58 68 h50" stroke-width="2.5"/>' +
    person(22, 78, { s: 0.75, arms: "up", face: "shout" }) + '<rect x="28" y="58" width="14" height="17" fill="#fff" transform="rotate(8 35 66)"/>' +
    person(100, 88, { s: 0.6, arms: "wave", face: "smile" }) +
    person(178, 78, { s: 0.75, arms: "up", face: "shout", look: -1 }) + '<rect x="162" y="58" width="14" height="17" fill="#fff" transform="rotate(-8 169 66)"/>', T(100, 18, 11, "几百条帖子", "middle"));
  add("c03_suits", "1996 年的论文用扑克花色命名四类玩家：方片、黑桃、红桃、梅花", ground +
    '<rect x="14" y="30" width="38" height="56" rx="4" fill="#fff"/><rect x="58" y="30" width="38" height="56" rx="4" fill="#fff"/><rect x="104" y="30" width="38" height="56" rx="4" fill="#fff"/><rect x="148" y="30" width="38" height="56" rx="4" fill="#fff"/>',
    E(33, 66, 26, "♦️") + E(77, 66, 26, "♠️") + E(123, 66, 26, "♥️") + E(167, 66, 26, "♣️") + T(33, 108, 12, "成就", "middle") + T(77, 108, 12, "探索", "middle") + T(123, 108, 12, "社交", "middle") + T(167, 108, 12, "杀手", "middle"));
  add("c03_yee", "Nick Yee 的问卷：一张填满勾选的问卷旁边，三根柱子分别写着成就、社交、沉浸", ground +
    '<rect x="14" y="14" width="64" height="100" fill="#fff"/><path d="M24 34 h40 M24 54 h40 M24 74 h40 M24 94 h26" stroke-width="2.5"/><path d="M26 30 l4 4 8 -8" stroke="#3aa655" stroke-width="2.5" fill="none"/><path d="M26 50 l4 4 8 -8" stroke="#3aa655" stroke-width="2.5" fill="none"/>' +
    '<rect x="98" y="70" width="26" height="56" fill="#ffc078"/><rect x="127" y="50" width="26" height="76" fill="#a8dcf0"/><rect x="156" y="82" width="26" height="44" fill="#b6e8a8"/>', T(111, 118, 11.5, "成就", "middle") + T(140, 118, 11.5, "社交", "middle") + T(169, 118, 11.5, "沉浸", "middle"));

  /* ---- 第6节：设计里的应用 ---- */
  add("c03_rankonly", "只有对战排名的游戏：一个火柴人在排行榜前兴奋，另外两个火柴人看看榜单就转身离开了", ground +
    '<rect x="60" y="20" width="60" height="70" fill="#fff"/><path d="M68 36 h44 M68 50 h44 M68 64 h44" stroke-width="2.5"/>' +
    person(30, 71, { s: 0.85, arms: "up", face: "grin" }) + person(138, 71, { s: 0.85, arms: "stand", face: "flat", legs: "walk", look: 1 }) + person(176, 71, { s: 0.85, arms: "stand", face: "flat", legs: "walk", look: 1 }), T(90, 14, 12, "排行榜", "middle") + T(156, 44, 11, "没我的事", "middle"));
  add("c03_party", "派对游戏：一个火柴人使劲想赢，另一个笑得东倒西歪，桌上摊着一副牌", ground +
    '<path d="M60 100 H140 M70 100 V126 M130 100 V126" stroke-width="4"/><rect x="82" y="88" width="14" height="12" fill="#fff"/><rect x="100" y="88" width="14" height="12" fill="#ffb3c6"/>' +
    person(34, 60, { arms: "throw", face: "grin", legs: "wide" }) + person(166, 62, { arms: "up", face: "shout", legs: "wide", look: -1 }), T(34, 28, 11, "我要赢！", "middle") + T(166, 28, 11, "哈哈哈！", "middle"));
  add("c03_label", "反例：一个火柴人额头上贴着“成就者”的标签，朋友在旁边挥手说“来聊天吧”，他却盯着成就清单", ground +
    person(60, 62, { arms: "hold", face: "flat", look: 1 }) + '<rect x="42" y="34" width="36" height="16" fill="#ffc078" stroke-width="2"/>' + '<rect x="88" y="58" width="26" height="34" fill="#fff"/><path d="M92 68 h18 M92 78 h18" stroke-width="2"/>' +
    person(158, 62, { arms: "wave", face: "grin", look: -1 }) + bubble(150, 20, 40, 12), T(60, 46, 10, "成就者", "middle") + T(150, 24, 11, "来聊天呀！", "middle"));

  /* ---- 第7节：社会力量 ---- */
  add("c03_compare", "跑步的火柴人一边跑，一边斜眼看手机里朋友们今天跑了多少公里", ground +
    person(54, 62, { arms: "hold", face: "wide", legs: "run", look: 1 }) + '<rect x="80" y="64" width="30" height="46" rx="6" fill="#fff"/><path d="M86 76 h18 M86 86 h14 M86 96 h18" stroke-width="2.5"/>', T(100, 52, 11, "朋友：8 km", "middle"));
  add("c03_global", "全服榜：顶尖玩家站在高高的领奖台上，台子旁边是一眼望不到头的长名单", ground +
    '<rect x="68" y="52" width="40" height="74" fill="#ffd34d"/><rect x="32" y="80" width="36" height="46" fill="#e8e8f0"/><rect x="108" y="96" width="36" height="30" fill="#e8e8f0"/>' +
    person(88, 20, { s: 0.5, arms: "up", face: "grin" }) +
    '<rect x="152" y="14" width="38" height="112" fill="#fff"/><path d="M158 28 h26 M158 42 h26 M158 56 h26 M158 70 h26 M158 84 h26 M158 98 h26 M158 112 h16" stroke-width="2.5"/>', T(88, 98, 10.5, "第1名", "middle"));
  add("c03_friends", "好友榜：一张只有五个朋友名字的小榜单，火柴人排第三，旁边的朋友朝他挥手", ground +
    '<rect x="94" y="16" width="86" height="104" fill="#fff"/><path d="M104 34 h66 M104 48 h66 M104 62 h66 M104 76 h66 M104 90 h66" stroke-width="2.5"/><rect x="100" y="53" width="74" height="18" fill="#fff6c9" stroke-width="2" stroke-dasharray="4 3"/>' +
    person(26, 62, { arms: "up", face: "grin" }) + person(64, 62, { arms: "wave", face: "smile", look: -1 }), T(137, 108, 11, "好友榜 · 第 3", "middle"));
  add("c03_tiers", "分段榜：一座按段位分层的梯子，火柴人站在最下面一层，抬头能看见只高一格的下一个人", ground +
    '<path d="M110 126 V14 M170 126 V14 M110 40 H170 M110 66 H170 M110 92 H170" stroke-width="3.5"/>' +
    [92, 66, 40].map(f => '<circle cx="140" cy="' + (f - 24) + '" r="5" fill="' + SK + '"/><path d="M140 ' + (f - 19) + " V" + (f - 8) + " M140 " + (f - 8) + " L135 " + f + " M140 " + (f - 8) + " L145 " + f + '" fill="none"/>').join("") +
    person(48, 62, { arms: "point", face: "grin", look: 1 }) + '<path d="M82 68 q22 -12 46 -4" fill="none" stroke-dasharray="3 5" stroke-width="2.5"/><path d="M120 58 l9 6 -10 4" fill="none" stroke-width="2.5"/>', T(48, 22, 12, "追上前面那个", "middle"));
  add("c03_gift", "互赠礼物：两个火柴人互相递给对方一个小礼盒，头上都冒出一个爱心", ground +
    person(48, 62, { arms: "hold", face: "grin", look: 1 }) + person(152, 62, { arms: "hold", face: "smile", look: -1 }) +
    '<rect x="72" y="80" width="16" height="14" fill="#ffb3c6" stroke-width="2.5"/><rect x="112" y="80" width="16" height="14" fill="#a8dcf0" stroke-width="2.5"/><path d="M92 70 q8 -14 16 0 M92 100 q8 14 16 0" fill="none" stroke-dasharray="3 4" stroke-width="2.5"/>', E(48, 24, 16, "♥") + E(152, 24, 16, "♥"));
  add("c03_globalbad", "反例：火柴人在只有全服榜的手游里，榜单上他的名次是第482913名，他耸耸肩转身走了", ground +
    '<rect x="96" y="18" width="84" height="84" fill="#fff"/><path d="M106 36 h64 M106 52 h64 M106 68 h64" stroke-width="2.5"/><path d="M106 88 h64" stroke="#e5484d" stroke-width="3"/>' +
    person(44, 62, { arms: "stand", face: "flat", legs: "walk", look: -1 }) + bubble(44, 20, 38, 12), T(138, 116, 11, "第 482913 名", "middle") + T(44, 24, 11.5, "跟我没关系", "middle"));
})();
