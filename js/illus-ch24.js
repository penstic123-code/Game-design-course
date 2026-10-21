/* 第24章 案例：马力欧 1-1：插图包（火柴人风，viewBox 200×140） */
(function () {
  const { person, ground, T, E, eye, SK, INK } = window.illusKit;
  const none = ' fill="none"';
  const rc = (x, y, w, h, f, extra) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + f + '"' + (extra || "") + "/>";
  /* 栗宝宝：棕色圆身子 + 两只脚；(x,y) 为身体中心 */
  const goomba = (x, y, s) => { s = s || 1; return '<ellipse cx="' + x + '" cy="' + y + '" rx="' + 14 * s + '" ry="' + 11 * s + '" fill="#a5683d"/>' +
    rc(x - 12 * s, y + 8 * s, 9 * s, 5 * s, "#6b4226", ' stroke-width="2"') + rc(x + 3 * s, y + 8 * s, 9 * s, 5 * s, "#6b4226", ' stroke-width="2"') +
    '<circle cx="' + (x - 5 * s) + '" cy="' + (y - 2 * s) + '" r="' + 3 * s + '" fill="#fff" stroke-width="2"/><circle cx="' + (x + 5 * s) + '" cy="' + (y - 2 * s) + '" r="' + 3 * s + '" fill="#fff" stroke-width="2"/>' + eye(x - 4 * s, y - 2 * s) + eye(x + 6 * s, y - 2 * s); };
  const cap = { hat: "cap" };

  /* ---------- 是什么 ---------- */
  illusAdd("c24_screen", "第一屏：火柴人戴着帽子站在地面上，前面只有一只栗宝宝慢慢走来，头顶有一个问号砖块，没有别的东西",
    rc(6, 110, 188, 16, "#e0a06a") + '<path d="M38 110 V126 M70 110 V126 M102 110 V126 M134 110 V126 M166 110 V126" stroke-width="2"' + none + '/>' +
    person(34, 46, { arms: "stand", face: "smile", hat: "cap" }) + goomba(132, 98, 0.9) + rc(150, 46, 24, 24, "#ffd34d") +
    '<path d="M64 98 H104" stroke-dasharray="3 6" stroke-width="2.5"' + none + '/><path d="M98 92 l8 6 -8 6"' + none + ' stroke-width="2.5"/>',
    E(162, 64, 18, "?") + T(100, 22, 13, "第一屏：只有一只敌人", "middle"));

  /* ---------- 例子：先单独引入 ---------- */
  illusAdd("c24_e_goomba", "火柴人面前只有一只孤零零的栗宝宝，旁边什么别的威胁也没有，空旷的画面一目了然",
    ground + person(36, 62, { arms: "stand", face: "o", look: 1, hat: "cap" }) + goomba(138, 113, 0.95) +
    '<path d="M62 100 H112" stroke-dasharray="3 6" stroke-width="2.5"' + none + '/>', T(100, 28, 13, "孤零零一只，没有干扰", "middle"));
  illusAdd("c24_e_drive", "空旷的场地里，一个火柴人开着小车，只放了几个路锥，先练起步和停车",
    ground + person(94, 58, { s: 0.7, arms: "none", legs: "none", face: "smile" }) + rc(60, 78, 70, 26, "#a8dcf0") + '<circle cx="78" cy="108" r="9" fill="#fff"/><circle cx="114" cy="108" r="9" fill="#fff"/>' +
    '<path d="M150 124 l8 -26 8 26 Z" fill="#ffc078"/><path d="M174 124 l7 -22 7 22 Z" fill="#ffc078"/>', T(100, 22, 13, "空场地，先练起步停车", "middle"));
  illusAdd("c24_e_piano", "钢琴的琴键上只有一只手在弹，另一只手还空着，火柴人指着说先单手",
    ground + person(28, 62, { arms: "point", face: "smile" }) + rc(60, 88, 120, 34, "#fff") +
    '<path d="M80 88 V122 M100 88 V122 M120 88 V122 M140 88 V122 M160 88 V122" stroke-width="2"' + none + '/>' +
    rc(72, 88, 12, 20, INK, ' stroke-width="1"') + rc(108, 88, 12, 20, INK, ' stroke-width="1"') + rc(132, 88, 12, 20, INK, ' stroke-width="1"') +
    '<circle cx="106" cy="76" r="8" fill="#ffd9b0"/><path d="M100 82 V90 M106 84 V90 M112 82 V90" stroke-width="2.5"' + none + '/>', T(120, 40, 13, "先单手，熟了再双手", "middle"));
  illusAdd("c24_e_wall", "新手一进游戏，屏幕上同时弹出十个提示框，火柴人捂着头不知所措",
    ground + person(34, 62, { arms: "cover", face: "shout" }) +
    '<g transform="rotate(-8 100 60)"><rect x="70" y="30" width="48" height="30" fill="#fff"/><path d="M76 40 h36 M76 48 h26" stroke-width="2"' + none + '/></g>' +
    '<g transform="rotate(6 140 60)"><rect x="110" y="44" width="48" height="30" fill="#ffe9ef"/><path d="M116 54 h36 M116 62 h26" stroke-width="2"' + none + '/></g>' +
    '<g transform="rotate(-4 120 90)"><rect x="82" y="70" width="48" height="30" fill="#e8f6fc"/><path d="M88 80 h36 M88 88 h26" stroke-width="2"' + none + '/></g>' +
    '<g transform="rotate(10 160 100)"><rect x="140" y="80" width="48" height="30" fill="#eaf9e4"/><path d="M146 90 h36 M146 98 h26" stroke-width="2"' + none + '/></g>',
    T(120, 20, 13, "十个提示框一起弹出", "middle"));

  /* ---------- 例子：宽容手感 ---------- */
  illusAdd("c24_e_coyote", "火柴人已经跑出了平台边缘，却仍在空中起跳，脚下的虚线表示刚刚离开的那一小段时间",
    rc(6, 84, 84, 42, "#e0a06a") + '<path d="M90 90 q14 0 20 16" stroke-dasharray="3 5" stroke-width="2.5"' + none + '/>' +
    person(124, 50, { arms: "up", legs: "run", face: "grin", hat: "cap" }) + '<path d="M96 70 V84" stroke-width="2.5" stroke-dasharray="3 4"' + none + '/>',
    T(130, 22, 12.5, "刚离开边缘，仍能起跳", "middle"));
  illusAdd("c24_e_buffer", "火柴人还在空中就提前按了跳跃，右下的时间条里，提前按的那一段被记住了，落地后立刻起跳",
    ground + person(50, 34, { arms: "up", face: "wide", legs: "wide", hat: "cap" }) + '<path d="M46 108 V124"' + none + ' stroke-dasharray="3 4"/>' +
    rc(100, 104, 50, 14, "#ffe58a") + rc(150, 104, 44, 14, "#b6e8a8") + '<path d="M150 98 V122" stroke-width="3"/>',
    T(125, 98, 12, "提前按", "middle") + T(172, 98, 12, "落地", "middle") + T(142, 28, 13, "落地前一瞬按下", "middle"));
  illusAdd("c24_e_phone", "手机键盘上，手指点在两个按键之间偏了一点，系统仍然亮起了你想打的那个字",
    ground + person(28, 62, { arms: "point", face: "smile", look: 1 }) + rc(78, 22, 80, 104, "#fff", ' rx="8"') + rc(86, 32, 64, 24, "#e8f6fc") +
    rc(86, 64, 18, 18, "#fff") + rc(109, 64, 18, 18, "#ffe58a") + rc(132, 64, 18, 18, "#fff") + rc(86, 88, 18, 18, "#fff") + rc(109, 88, 18, 18, "#fff") + rc(132, 88, 18, 18, "#fff") +
    '<circle cx="106" cy="74" r="7" fill="none" stroke="#e5484d" stroke-width="3"/>', T(176, 80, 12, "点偏", "middle") + T(176, 96, 12, "也认", "middle"));
  illusAdd("c24_e_frame", "平台边缘一条细线，火柴人晚了一点点起跳，掉进了坑里，气得喊“我明明按了”",
    rc(6, 84, 80, 42, "#e0a06a") + '<path d="M86 60 V126" stroke="#e5484d" stroke-width="3" stroke-dasharray="4 4"' + none + '/>' +
    person(120, 46, { arms: "up", face: "shout", legs: "run" }) + '<path d="M120 90 V122 M114 114 l6 8 6 -8"' + none + '/>',
    T(130, 22, 13, "差一帧就算失败", "middle") + T(44, 76, 12, "我明明按了！", "middle"));

  /* ---------- 例子：失败很便宜 ---------- */
  illusAdd("c24_e_respawn", "火柴人掉进一个坑里，同一秒另一个新的他已经在不远的出发处重新站好",
    '<path d="M6 126 H80 M116 126 H194" stroke-width="3"' + none + '/>' + rc(6, 108, 74, 18, "#e0a06a") + rc(116, 108, 78, 18, "#e0a06a") +
    person(98, 44, { s: 0.5, arms: "up", legs: "none", face: "shout" }) + '<path d="M98 82 V104 M92 96 l6 8 6 -8"' + none + '/>' +
    person(152, 42, { arms: "stand", face: "grin", hat: "cap" }) + '<path d="M184 108 V70" stroke-width="3"/><path d="M184 70 l12 5 -12 5z" fill="#ff8fab"/>',
    T(100, 20, 13, "几秒后，就在不远处重来", "middle"));
  illusAdd("c24_e_pool", "孩子站在泳池的浅水区扑腾，旁边的深水区用绳子拦着，先不进去",
    rc(10, 80, 180, 46, "#a8dcf0") + '<path d="M10 96 L190 120" stroke-width="3"' + none + '/>' + '<path d="M120 80 V126" stroke="#e5484d" stroke-width="3" stroke-dasharray="4 4"' + none + '/>' +
    person(60, 58, { s: 0.7, arms: "up", legs: "stand", face: "grin" }) + '<path d="M36 92 q6 -6 12 0 M72 92 q6 -6 12 0" stroke-width="2.5"' + none + '/>',
    T(62, 22, 13, "浅水区", "middle") + T(158, 22, 13, "深水区", "middle"));
  illusAdd("c24_e_draft", "一张草稿纸上写满了划掉重来的字，旁边放着一块橡皮，火柴人放松地笑着",
    ground + person(34, 62, { arms: "stand", face: "grin" }) + rc(76, 30, 98, 92, "#fffdf3") +
    '<path d="M86 48 H160 M86 62 H146 M86 76 H160" stroke-width="2.5"' + none + '/>' + '<path d="M96 90 l36 12 M132 90 l-36 12" stroke="#e5484d" stroke-width="3"' + none + '/>' + rc(146, 94, 22, 14, "#ffb3c6"),
    T(125, 20, 13, "草稿纸，随便划", "middle"));
  illusAdd("c24_e_longrun", "火柴人每死一次，都要沿着一条又长又弯的路走回关底，路上标着半小时，他愁眉苦脸",
    ground + person(24, 62, { arms: "stand", face: "sad", legs: "walk" }) +
    '<path d="M44 118 C70 118 70 90 96 90 C122 90 122 60 148 60 C164 60 168 54 172 46" stroke-dasharray="4 6" stroke-width="3"' + none + '/>' +
    rc(168, 30, 24, 40, "#e5484d") + '<path d="M168 30 l6 -8 6 8 6 -8 6 8" stroke-width="3"' + none + '/>',
    T(100, 22, 13, "死一次，先走半小时", "middle") + T(96, 112, 12, "30 分钟", "middle"));

  /* ---------- 发明故事时间线 ---------- */
  illusAdd("c24_t_graph", "一张方格纸上画着关卡草图，上面盖着一张描图纸，火柴人拿着铅笔在上面改动一点点",
    ground + rc(34, 28, 108, 92, "#fffdf3") + '<path d="M54 28 V120 M74 28 V120 M94 28 V120 M114 28 V120 M34 48 H142 M34 68 H142 M34 88 H142 M34 108 H142" stroke-width="1.5"' + none + '/>' +
    '<path d="M34 100 H70 V84 H88 V100 H142" stroke="#e5484d" stroke-width="3.5"' + none + '/>' + rc(80, 40, 20, 20, "#ffd34d") +
    person(168, 74, { s: 0.8, arms: "stand", face: "smile", glasses: true, look: -1 }) + '<path d="M150 106 L122 116" stroke-width="3.5"/>', T(90, 18, 13, "方格纸 + 描图纸", "middle"));
  illusAdd("c24_t_koopa", "左边的乌龟被打了红叉，右边的栗宝宝画了对勾，旁边的箭头表示最后选了栗宝宝作为第一个敌人",
    ground + '<ellipse cx="50" cy="106" rx="24" ry="16" fill="#7ed17f"/><circle cx="76" cy="98" r="8" fill="#ffe58a"/>' + '<path d="M26 84 l48 40 M74 84 l-48 40" stroke="#e5484d" stroke-width="5"' + none + '/>' +
    goomba(152, 113, 1.1) + '<path d="M96 76 q18 -16 36 0" stroke-width="3"' + none + '/><path d="M128 70 l6 6 -8 4" stroke-width="3"' + none + '/>',
    T(50, 60, 13, "乌龟：太难", "middle") + T(152, 60, 13, "栗宝宝", "middle"));
  illusAdd("c24_t_mush", "红色的蘑菇道具和棕色的栗宝宝长得有点像，火柴人头顶低矮的砖块让他想躲也躲不开",
    ground + goomba(32, 113, 0.9) + '<path d="M150 124 V108" stroke-width="3"' + none + '/><path d="M136 108 q14 -26 28 0 z" fill="#e5484d"/><circle cx="144" cy="100" r="3" fill="#fff" stroke="none"/><circle cx="156" cy="98" r="3" fill="#fff" stroke="none"/>' +
    rc(70, 30, 60, 18, "#e08a5a") + '<path d="M90 30 V48 M110 30 V48" stroke-width="2.5"' + none + '/>' + person(100, 66, { arms: "up", face: "o", hat: "cap" }),
    T(100, 20, 13, "长得像？可躲不开", "middle"));
  illusAdd("c24_t_hole", "火柴人起跳顶了头顶的问号砖块，金币从砖块里弹了出来，他做着做着就懂了",
    ground + person(56, 62, { arms: "up", legs: "run", face: "grin", hat: "cap" }) + rc(44, 26, 28, 28, "#ffd34d") +
    '<circle cx="94" cy="40" r="8" fill="#ffd34d"/><path d="M80 30 l6 -6 M86 52 l8 4" stroke-width="2.5"' + none + '/>' + rc(150, 100, 38, 26, "#7ed17f"),
    E(58, 46, 18, "?") + T(140, 22, 13, "做着做着就懂了", "middle"));
  illusAdd("c24_t_watch", "设计者拿着小本子站在一旁，看另一个人玩他做的关卡，不出声，只记录",
    ground + person(30, 62, { arms: "hold", face: "flat", look: 1, glasses: true }) + rc(40, 82, 18, 22, "#fff6c9") + '<path d="M44 90 h10 M44 96 h8" stroke-width="2"' + none + '/>' +
    rc(86, 40, 48, 36, "#e8f6fc") + rc(90, 62, 40, 10, "#e0a06a") + goomba(112, 56, 0.45) +
    person(168, 66, { arms: "desk", legs: "sit", face: "grin", look: -1 }) + '<path d="M110 76 V104 M96 104 H124" stroke-width="3"' + none + '/>',
    T(100, 24, 13, "看，别说", "middle"));

  /* ---------- 为什么成立 ---------- */
  illusAdd("c24_ramp", "四根水管一根比一根高，火柴人一次一次跳过去，越跳越稳，右边是更高的下一根",
    ground + rc(46, 106, 20, 20, "#7ed17f") + rc(80, 90, 20, 36, "#7ed17f") + rc(114, 72, 20, 54, "#7ed17f") + rc(148, 52, 20, 74, "#7ed17f") +
    person(22, 40, { arms: "up", legs: "run", face: "grin", hat: "cap", s: 0.8 }) + '<path d="M60 100 q8 -22 18 -8 M96 82 q10 -22 20 -8" stroke-dasharray="3 5" stroke-width="2.5"' + none + '/>',
    T(100, 22, 13, "台阶一格比一格高", "middle"));
  illusAdd("c24_safe", "坑底铺着一张软垫，火柴人掉下来笑嘻嘻地弹了起来，说再来一次",
    rc(6, 84, 56, 42, "#e0a06a") + rc(138, 84, 56, 42, "#e0a06a") + rc(62, 112, 76, 14, "#ffb3c6") +
    person(100, 32, { arms: "up", legs: "wide", face: "grin", hat: "cap", s: 0.8 }) + '<path d="M86 100 q14 -8 28 0" stroke-width="2.5"' + none + '/>',
    T(100, 20, 13, "掉下去也没事", "middle"));
  illusAdd("c24_weight", "火柴人刹车时脚下拖出一道长长的滑痕，带着一点惯性往前滑，显得有分量",
    ground + person(110, 58, { arms: "stand", legs: "wide", face: "o", hat: "cap" }) + '<path d="M30 122 H98" stroke-width="3.5" stroke-dasharray="8 4"' + none + '/>' +
    '<path d="M138 96 h18 M142 106 h24 M138 116 h16" stroke-width="2.5"' + none + '/>',
    T(100, 24, 13, "刹车有惯性，才有分量", "middle"));
})();
