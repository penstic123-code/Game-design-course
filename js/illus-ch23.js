/* 第23章 案例：俄罗斯方块：插图包（火柴人风，viewBox 200×140） */
(function () {
  const { person, ground, T, E, eye, SK, INK } = window.illusKit;
  const C = ["#ffb3c6", "#a8dcf0", "#b6e8a8", "#ffe58a", "#d8c8ff", "#ffc078", "#8fb8ff"];
  const sq = (x, y, s, fill) => '<rect x="' + x + '" y="' + y + '" width="' + s + '" height="' + s + '" fill="' + fill + '"/>';
  const none = ' fill="none"';

  /* ---------- 是什么：极简规则 → 丰富局面 ---------- */
  illusAdd("c23_mini", "一个火柴人指着写了三条规则的小卡片，卡片后面延伸出三块堆法完全不同的棋盘",
    ground + person(30, 62, { arms: "point", face: "smile" }) +
    '<rect x="66" y="40" width="40" height="52" fill="#fffdf3"/><path d="M73 54 H99 M73 66 H99 M73 78 H92" stroke-width="2.5"/>' +
    '<path d="M112 66 H122" stroke-width="3"/><path d="M118 60 l6 6 -6 6"' + none + '/>' +
    '<rect x="130" y="52" width="20" height="40" fill="#fffdf3"/>' + sq(130, 82, 10, C[0]) + sq(140, 82, 10, C[1]) + sq(130, 72, 10, C[2]) +
    '<rect x="158" y="52" width="20" height="40" fill="#fffdf3"/>' + sq(158, 82, 10, C[3]) + sq(168, 82, 10, C[4]) + sq(168, 72, 10, C[5]) + sq(168, 62, 10, C[1]) +
    '<rect x="184" y="52" width="14" height="40" fill="#fffdf3"/>' + sq(184, 82, 10, C[6]) + sq(184, 72, 10, C[0]),
    T(86, 30, 13, "3 条规则", "middle") + T(152, 114, 13, "千种局面", "middle"));

  illusAdd("c23_e_pieces", "一个火柴人在桌上摆开七种形状各不相同的方块，一眼就能认全",
    ground + person(34, 62, { arms: "point", face: "grin" }) +
    sq(80, 78, 9, C[1]) + sq(89, 78, 9, C[1]) + sq(98, 78, 9, C[1]) + sq(107, 78, 9, C[1]) +
    sq(128, 70, 9, C[3]) + sq(137, 70, 9, C[3]) + sq(128, 79, 9, C[3]) + sq(137, 79, 9, C[3]) +
    sq(160, 70, 9, C[4]) + sq(151, 79, 9, C[4]) + sq(160, 79, 9, C[4]) + sq(169, 79, 9, C[4]) +
    '<path d="M72 110 H194 M80 110 V126 M186 110 V126" stroke-width="4"' + none + '/>' + sq(80, 100, 9, C[2]) + sq(89, 100, 9, C[2]) + sq(89, 91, 9, C[2]) + sq(98, 91, 9, C[2]) +
    sq(118, 91, 9, C[0]) + sq(127, 91, 9, C[0]) + sq(127, 100, 9, C[0]) + sq(136, 100, 9, C[0]) +
    sq(150, 91, 9, C[6]) + sq(150, 100, 9, C[6]) + sq(159, 100, 9, C[6]) + sq(168, 100, 9, C[6]) +
    sq(182, 100, 9, C[5]) + sq(182, 91, 9, C[5]),
    T(128, 36, 14, "7 种，一眼认全", "middle"));

  illusAdd("c23_e_go", "围棋棋盘上黑白棋子交错，火柴人托着下巴思考下一步",
    ground + person(36, 62, { arms: "chin", face: "flat", look: 1 }) +
    '<rect x="84" y="40" width="96" height="86" fill="#ffe0a8"/><path d="M96 52 V114 M112 52 V114 M128 52 V114 M144 52 V114 M160 52 V114 M92 60 H172 M92 76 H172 M92 92 H172 M92 108 H172" stroke-width="1.8"/>' +
    '<circle cx="112" cy="76" r="7" fill="#2b2b3a"/><circle cx="128" cy="76" r="7" fill="#fff"/><circle cx="128" cy="92" r="7" fill="#2b2b3a"/><circle cx="144" cy="92" r="7" fill="#fff"/><circle cx="144" cy="60" r="7" fill="#fff"/><circle cx="112" cy="108" r="7" fill="#2b2b3a"/>',
    T(132, 28, 13, "落子 · 提子 · 数地", "middle"));

  illusAdd("c23_e_lego", "火柴孩子用同一种带凸点的积木搭出了一座不一样的小房子",
    ground + person(40, 62, { arms: "hold", face: "grin", hair: true }) +
    '<rect x="94" y="100" width="76" height="26" fill="#ff8fab"/><rect x="104" y="74" width="56" height="26" fill="#ffe58a"/><rect x="114" y="48" width="36" height="26" fill="#a8dcf0"/>' +
    '<circle cx="106" cy="96" r="3.4" fill="#ff8fab"/><circle cx="124" cy="96" r="3.4" fill="#ff8fab"/><circle cx="142" cy="96" r="3.4" fill="#ff8fab"/><circle cx="160" cy="96" r="3.4" fill="#ff8fab"/>' +
    '<rect x="120" y="42" width="8" height="6" fill="#a8dcf0"/><rect x="136" y="42" width="8" height="6" fill="#a8dcf0"/>',
    T(100, 22, 13, "一条规则：凸点咬合", "middle"));

  illusAdd("c23_e_ttt", "井字棋盘已经下满，两个火柴人耸着肩，棋局是平局",
    ground + person(30, 62, { arms: "stand", face: "flat" }) + person(170, 62, { arms: "stand", face: "flat" }) +
    '<path d="M82 52 V112 M102 52 V112 M64 72 H120 M64 92 H120" stroke-width="3.5"' + none + '/>' +
    '<path d="M70 56 l8 8 M78 56 l-8 8 M110 76 l8 8 M118 76 l-8 8 M70 96 l8 8 M78 96 l-8 8 M90 56 l6 0" stroke-width="2.5"' + none + '/>' +
    '<circle cx="110" cy="60" r="4" fill="none"/><circle cx="90" cy="82" r="4" fill="none"/><circle cx="90" cy="102" r="4" fill="none"/><circle cx="70" cy="82" r="4" fill="none"/><circle cx="110" cy="102" r="4" fill="none"/>',
    T(92, 32, 14, "几下就解完：平局", "middle"));

  /* ---------- 发明故事时间线 ---------- */
  illusAdd("c23_t_pento", "火柴人在玩具店里拿着一盒五格拼图，盒子里是十二种形状各异的彩色拼块",
    ground + person(36, 62, { arms: "hold", face: "smile", glasses: true }) +
    '<rect x="84" y="74" width="92" height="52" fill="#fffdf3"/>' +
    sq(92, 82, 10, C[0]) + sq(102, 82, 10, C[0]) + sq(102, 92, 10, C[0]) + sq(112, 92, 10, C[0]) + sq(112, 102, 10, C[0]) +
    sq(126, 82, 10, C[1]) + sq(126, 92, 10, C[1]) + sq(126, 102, 10, C[1]) + sq(136, 102, 10, C[1]) + sq(146, 102, 10, C[1]) +
    sq(150, 82, 10, C[2]) + sq(160, 82, 10, C[2]) + sq(150, 92, 10, C[2]) + sq(160, 92, 10, C[2]) + sq(150, 72, 10, C[2]),
    T(130, 32, 13, "五格拼图，12 种", "middle"));

  illusAdd("c23_t_dull", "电脑屏幕上五格的拼块在一点点拼装，火柴人托着腮打哈欠，觉得太闷",
    ground + person(42, 62, { arms: "chin", face: "o", look: 1 }) +
    '<rect x="86" y="46" width="94" height="62" fill="#e8f6fc"/><path d="M122 108 V124 M104 124 H140" stroke-width="4"/>' +
    sq(98, 72, 10, C[0]) + sq(108, 72, 10, C[0]) + sq(108, 82, 10, C[0]) + sq(118, 82, 10, C[0]) + sq(118, 92, 10, C[0]) +
    sq(144, 82, 10, C[1]) + sq(144, 92, 10, C[1]) + sq(154, 92, 10, C[1]) + sq(164, 92, 10, C[1]) + sq(144, 72, 10, C[1]) +
    '<path d="M130 62 q8 -8 16 0"' + none + ' stroke-dasharray="3 5" stroke-width="2.5"/>',
    T(133, 34, 13, "拼完了……然后呢？", "middle"));

  illusAdd("c23_t_fall", "一口竖井里方块一个个落下，最下面一整行被擦掉，闪出星光，上面的堆低了一截",
    '<rect x="64" y="12" width="72" height="116" fill="#fffdf3"/>' +
    sq(64, 108, 12, C[0]) + sq(76, 108, 12, C[1]) + sq(88, 108, 12, C[2]) + sq(100, 108, 12, C[3]) + sq(112, 108, 12, C[4]) + sq(124, 108, 12, C[5]) +
    sq(64, 96, 12, C[2]) + sq(76, 96, 12, C[3]) + sq(112, 96, 12, C[6]) +
    sq(88, 30, 12, C[1]) + sq(100, 30, 12, C[1]) + sq(100, 42, 12, C[1]) + sq(112, 42, 12, C[1]) +
    '<path d="M150 44 v26 M144 62 l6 8 6 -8"' + none + '/>' +
    '<path d="M40 108 l-10 -6 M40 112 h-14 M40 116 l-10 6" stroke-width="3"' + none + '/>' +
    '<path d="M32 30 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="#ffe58a"/>',
    T(34, 92, 12, "整行擦掉", "middle") + T(170, 30, 12, "接着下落", "middle"));

  illusAdd("c23_t_port", "十六岁的火柴少年坐在电脑前，屏幕上的方块第一次有了颜色",
    ground + person(46, 68, { arms: "desk", legs: "sit", face: "grin", look: 1, hair: true, s: 0.9 }) +
    '<rect x="96" y="44" width="84" height="58" fill="#fffdf3"/><path d="M130 102 V120 M112 120 H148" stroke-width="4"/>' +
    sq(118, 84, 12, C[0]) + sq(130, 84, 12, C[1]) + sq(142, 84, 12, C[3]) + sq(154, 84, 12, C[2]) + sq(130, 72, 12, C[4]) + sq(118, 72, 12, C[5]),
    T(138, 30, 13, "加上颜色", "middle"));

  illusAdd("c23_t_gb", "火柴人双手捧着一台掌机，小屏幕里是堆起来的方块",
    ground + person(44, 62, { arms: "hold", face: "grin" }) +
    '<rect x="88" y="26" width="76" height="96" rx="8" fill="#d6d6dc"/><rect x="98" y="36" width="56" height="44" fill="#c4e9a8"/>' +
    sq(112, 64, 8, "#6a8a56") + sq(120, 64, 8, "#6a8a56") + sq(128, 64, 8, "#6a8a56") + sq(120, 56, 8, "#6a8a56") +
    '<path d="M110 100 h14 M117 93 v14" stroke-width="4"/><circle cx="140" cy="100" r="4" fill="#ff8fab"/><circle cx="150" cy="94" r="4" fill="#ff8fab"/>',
    T(128, 16, 13, "1989 · Game Boy", "middle"));

  /* ---------- 难度旋钮 ---------- */
  illusAdd("c23_knob", "火柴人握着一个大旋钮，旋钮上标着速度，从“慢”拧向“快”，旁边的方块随着转动越落越快",
    ground + person(36, 62, { arms: "point", face: "grin" }) +
    '<circle cx="104" cy="70" r="26" fill="#ffe58a"/><path d="M104 70 L118 50" stroke-width="5"/>' +
    '<rect x="150" y="22" width="40" height="104" fill="#fffdf3"/>' + sq(160, 30, 12, C[1]) + sq(160, 62, 12, C[3]) + sq(172, 98, 12, C[0]) +
    '<path d="M154 46 v8 M154 80 v14" stroke-width="2.5"' + none + '/>' +
    '<path d="M82 42 Q102 28 122 40 M115 33 L123 40 L113 45" stroke-width="2.5"' + none + '/>',
    T(100, 112, 13, "旋钮：速度", "middle") + T(70, 48, 13, "慢", "middle") + T(136, 46, 13, "快", "middle"));

  illusAdd("c23_e_tread", "火柴人在跑步机上跑，机器上有一个调速度的旋钮",
    ground + '<path d="M60 108 L170 108 L162 120 L68 120 Z" fill="#c0c4cf"/><path d="M160 108 L170 52 M164 62 H184" stroke-width="4"' + none + '/><circle cx="186" cy="64" r="8" fill="#ffe58a"/>' +
    person(100, 56, { arms: "wave", legs: "run", face: "grin", s: 0.8 }) + '<path d="M40 70 h-14 M40 80 h-20" stroke-width="2.5"' + none + '/>',
    T(100, 24, 13, "只调一个旋钮：速度", "middle"));

  illusAdd("c23_e_snake", "贪吃蛇的身体弯弯曲曲盘满了格子，蛇头被自己的尾巴堵住了去路",
    '<rect x="50" y="20" width="100" height="100" fill="#fffdf3"/>' +
    '<path d="M62 36 H132 V60 H72 V84 H134 V104 H88" stroke-width="12" stroke="#9bdc8f"' + none + ' stroke-linecap="round" stroke-linejoin="round"/>' +
    '<circle cx="84" cy="104" r="9" fill="#9bdc8f"/><circle cx="82" cy="102" r="1.8" fill="' + INK + '" stroke="none"/><circle cx="87" cy="102" r="1.8" fill="' + INK + '" stroke="none"/>' +
    '<circle cx="62" cy="36" r="0.1" fill="none"/>' + person(172, 62, { s: 0.7, face: "flat", arms: "chin" }),
    T(100, 14, 13, "越长，越难绕开自己", "middle"));

  illusAdd("c23_e_pong", "发球机朝火柴人连续打出网球，球的速度一发比一发快",
    ground + '<rect x="14" y="68" width="36" height="34" rx="6" fill="#ffc078"/><path d="M50 82 H64" stroke-width="6"/><path d="M24 102 v24 M42 102 v24" stroke-width="3"/>' +
    '<circle cx="84" cy="80" r="6" fill="#d6f06a"/><circle cx="108" cy="80" r="6" fill="#d6f06a"/><circle cx="140" cy="80" r="6" fill="#d6f06a"/>' +
    '<path d="M72 62 h-8 M96 62 h-14 M128 62 h-22" stroke-width="2.5"' + none + '/>' +
    person(172, 64, { arms: "club", legs: "stand", face: "wide", s: 0.9, look: -1 }),
    T(100, 28, 13, "球速一发比一发快", "middle"));

  illusAdd("c23_e_react", "火柴人满头大汗盯着屏幕上不停闪烁、越闪越快的灯，只剩下拼手速",
    ground + person(44, 66, { arms: "desk", legs: "sit", face: "shout", look: 1 }) +
    '<rect x="90" y="40" width="90" height="64" fill="#2b2b3a"/><circle cx="112" cy="72" r="9" fill="#ff8fab"/><circle cx="135" cy="72" r="9" fill="#ffe58a"/><circle cx="158" cy="72" r="9" fill="#a8dcf0"/>' +
    '<path d="M30 36 l-6 -8 M44 32 l-2 -10" stroke-width="2.5"' + none + '/>',
    T(135, 16, 13, "越闪越快，", "middle") + T(135, 32, 13, "玩法没变", "middle"));

  /* ---------- 随机的设计 ---------- */
  illusAdd("c23_drought", "火柴人望着快堆到顶的方块堆，满头冷汗，等了很久的长条还是没有出现",
    '<rect x="116" y="8" width="72" height="118" fill="#fffdf3"/>' +
    sq(116, 114, 12, C[0]) + sq(128, 114, 12, C[1]) + sq(140, 114, 12, C[2]) + sq(152, 114, 12, C[3]) + sq(164, 114, 12, C[4]) +
    sq(116, 102, 12, C[5]) + sq(128, 90, 12, C[6]) + sq(128, 102, 12, C[6]) + sq(152, 102, 12, C[4]) + sq(152, 90, 12, C[2]) + sq(152, 78, 12, C[2]) +
    sq(116, 90, 12, C[3]) + sq(116, 78, 12, C[3]) + sq(116, 66, 12, C[1]) + sq(116, 54, 12, C[0]) +
    sq(176, 114, 12, "#fffdf3") + '<path d="M176 126 V30"' + none + ' stroke="#e5484d" stroke-dasharray="3 5" stroke-width="2.5"/>' +
    person(48, 62, { arms: "cover", face: "o", look: 1 }) + '<path d="M70 34 q-4 8 0 14 M26 34 q-4 8 0 14"' + none + ' stroke-width="2.5"/>' +
    ground,
    T(60, 22, 13, "长条呢？", "middle"));

  illusAdd("c23_e_bag", "一个纸袋里装着七种形状各一块，火柴人伸手从袋里摸出一块",
    ground + person(40, 62, { arms: "point", face: "smile" }) +
    '<path d="M84 52 L82 126 H156 L154 52 Z" fill="#ffd9a8"/><path d="M84 52 q35 -12 70 0" stroke-width="3"' + none + '/>' +
    sq(94, 70, 11, C[0]) + sq(108, 70, 11, C[1]) + sq(122, 70, 11, C[2]) + sq(136, 70, 11, C[3]) + sq(100, 86, 11, C[4]) + sq(114, 86, 11, C[5]) + sq(128, 86, 11, C[6]),
    T(120, 34, 13, "一袋七块，摸完再换", "middle"));

  illusAdd("c23_e_cards", "火柴人手里扇形拿着一副洗过的扑克牌，每种点数只有一张，抽不到第二张同样的",
    ground + person(40, 62, { arms: "hold", face: "grin" }) +
    '<g transform="rotate(-20 110 120)"><rect x="92" y="62" width="30" height="46" fill="#fff"/></g><g transform="rotate(-6 126 120)"><rect x="110" y="60" width="30" height="46" fill="#ffe9ef"/></g><g transform="rotate(8 142 120)"><rect x="128" y="62" width="30" height="46" fill="#e8f6fc"/></g><g transform="rotate(22 158 120)"><rect x="146" y="66" width="30" height="46" fill="#eaf9e4"/></g>',
    E(112, 90, 18, "♠") + E(128, 88, 18, "♥") + E(146, 90, 18, "♦") + E(166, 94, 18, "♣") + T(118, 38, 12, "洗过牌：不会连抽五张 A", "middle"));

  illusAdd("c23_e_shuffle", "手机播放器的歌单被洗了一遍，每首歌各出现一次，火柴人戴着耳机点头",
    ground + person(46, 62, { arms: "stand", face: "smile" }) + '<path d="M34 40 q-8 -4 -8 6 M58 40 q8 -4 8 6" stroke-width="3"' + none + '/>' +
    '<rect x="96" y="30" width="76" height="96" rx="8" fill="#fffdf3"/><rect x="104" y="42" width="60" height="12" fill="#ffb3c6"/><rect x="104" y="60" width="60" height="12" fill="#a8dcf0"/><rect x="104" y="78" width="60" height="12" fill="#ffe58a"/><rect x="104" y="96" width="60" height="12" fill="#b6e8a8"/>' +
    '<path d="M170 44 l10 8 -10 8 M170 90 l10 8 -10 8" stroke-width="3"' + none + '/>',
    T(134, 20, 13, "先洗一遍，再依次播放", "middle"));

  illusAdd("c23_e_coin", "一枚硬币连续五次都是正面，火柴人挠着头问：下一次总该是反面了吧？硬币却依旧各占一半",
    ground + person(40, 62, { arms: "chin", face: "o", look: 1 }) +
    '<circle cx="96" cy="108" r="12" fill="#ffe58a"/><circle cx="124" cy="108" r="12" fill="#ffe58a"/><circle cx="152" cy="108" r="12" fill="#ffe58a"/><circle cx="96" cy="82" r="12" fill="#ffe58a"/><circle cx="124" cy="82" r="12" fill="#ffe58a"/>' +
    '<circle cx="168" cy="48" r="13" fill="#ffe58a" stroke-dasharray="3 4"/>',
    T(96, 112, 12, "正", "middle") + T(124, 112, 12, "正", "middle") + T(152, 112, 12, "正", "middle") + T(96, 86, 12, "正", "middle") + T(124, 86, 12, "正", "middle") + T(168, 52, 13, "?", "middle") + T(124, 30, 12, "硬币没有记忆", "middle"));

  /* ---------- 为什么成立 ---------- */
  illusAdd("c23_surprise", "长条正好落进四行高的缺口，四行同时炸开，火柴人惊喜地举起双手",
    '<rect x="96" y="10" width="70" height="108" fill="#fffdf3"/>' +
    sq(96, 66, 12, C[0]) + sq(96, 78, 12, C[2]) + sq(96, 90, 12, C[3]) + sq(96, 102, 12, C[4]) +
    sq(108, 66, 12, C[1]) + sq(108, 78, 12, C[0]) + sq(108, 90, 12, C[5]) + sq(108, 102, 12, C[2]) +
    sq(120, 66, 12, C[6]) + sq(120, 78, 12, C[3]) + sq(120, 90, 12, C[1]) + sq(120, 102, 12, C[0]) +
    sq(132, 66, 12, C[2]) + sq(132, 78, 12, C[4]) + sq(132, 90, 12, C[0]) + sq(132, 102, 12, C[3]) +
    sq(144, 66, 12, C[5]) + sq(144, 78, 12, C[1]) + sq(144, 90, 12, C[6]) + sq(144, 102, 12, C[2]) +
    sq(156, 30, 10, C[1]) + sq(156, 40, 10, C[1]) + sq(156, 50, 10, C[1]) + sq(156, 60, 10, C[1]) +
    '<path d="M170 80 l12 -4 M170 94 l14 2 M92 70 l-8 -6 M92 92 l-10 2"' + none + ' stroke-width="3"/>' +
    person(40, 62, { arms: "up", face: "shout", legs: "stand" }) + ground,
    T(40, 28, 15, "4 行！", "middle"));

  illusAdd("c23_peakend", "一条起伏的感受强度曲线，最高处标着峰，最后一刻标着终（比峰低一些），火柴人回头看着这条曲线",
    '<path d="M24 118 V20 M24 118 H186" stroke-width="3"' + none + '/>' +
    '<path d="M28 100 L62 76 L92 30 L118 68 L146 56 L176 46" stroke="#e5484d" stroke-width="4" stroke-linejoin="round"' + none + '/>' +
    '<circle cx="92" cy="30" r="6" fill="#ffe58a"/><circle cx="176" cy="46" r="6" fill="#a8dcf0"/>' +
    person(150, 88, { s: 0.5, arms: "chin", face: "smile", look: -1 }),
    T(104, 34, 13, "峰", "start") + T(176, 34, 13, "终", "middle") + T(28, 15, 12, "感受强度 ↑", "start") + T(100, 132, 12, "时间 →", "middle"));
})();
