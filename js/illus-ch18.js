/* 第18章 多人游戏设计：插图包（火柴人风）。名字统一 c18_ 前缀。 */
(function () {
  const { person, ground, T, E, eye, SK, INK } = window.illusKit;
  const R = (x, y, w, h, fill, rx) => `<rect x="${x}" y="${y}" width="${w}" height="${h}"${rx ? ` rx="${rx}"` : ""} fill="${fill || "none"}"/>`;
  const C = (x, y, r, fill) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill || "none"}"/>`;
  const O = (x, y, rx, ry, fill) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill || "none"}"/>`;
  const L = (d, w) => `<path d="${d}" fill="none"${w ? ` stroke-width="${w}"` : ""}/>`;
  const P = (d, fill) => `<path d="${d}" fill="${fill || "none"}"/>`;
  const kart = (x, y, col) => R(x - 18, y, 36, 14, col, 4) + C(x - 11, y + 16, 5, "#fff") + C(x + 11, y + 16, 5, "#fff");

  /* ===== 三种关系 / 零和 ===== */
  illusAdd("c18_coop", "三个火柴人并肩对着一只大怪物一起出手，头顶写着“一起打”，怪物上方写着“大家的敌人”",
    ground + person(24, 62, { arms: "up", face: "grin" }) + person(62, 62, { arms: "point", face: "shout" }) + person(100, 62, { arms: "wave", face: "grin" }) +
    O(166, 88, 26, 34, "#ffc9c9") + L("M148 58 l-6 -14 M184 58 l6 -14", 4) + eye(158, 80) + eye(174, 80) + L("M156 100 q10 8 20 0") + L("M106 78 H132 m-7 -5 l7 5 l-7 5", 2.5),
    T(62, 24, 13, "一起打 Boss！", "middle") + T(166, 24, 13, "大家的敌人", "middle"));

  illusAdd("c18_versus", "两个火柴人隔着棋盘对弈，左边头顶写着赢了加一分，右边写着输了减一分，中间写着总和为零",
    ground + person(34, 62, { arms: "desk", face: "grin" }) + person(166, 62, { arms: "desk", face: "sad", look: -1 }) +
    R(66, 98, 68, 7, "#ffe58a") + L("M72 105 V126 M128 105 V126", 3) + R(84, 84, 32, 14, "#fff") + L("M92 84 V98 M100 84 V98 M108 84 V98", 2),
    T(34, 24, 13, "赢了 +1", "middle") + T(166, 24, 13, "输了 −1", "middle") + T(100, 52, 14, "总和 = 0", "middle"));

  illusAdd("c18_mixed", "四个火柴人围坐，其中一个背后藏着小刀，嘴上说“我是好人”，其他人头上冒出问号",
    ground + person(28, 74, { s: 0.8, arms: "stand", face: "flat", legs: "sit" }) + person(76, 74, { s: 0.8, arms: "chin", face: "flat", legs: "sit" }) +
    person(128, 74, { s: 0.8, arms: "stand", face: "grin", legs: "sit" }) + person(174, 74, { s: 0.8, arms: "stand", face: "flat", look: -1, legs: "sit" }) +
    P("M142 104 l12 -6 l2 4 l-12 8z", "#d8dce6") + O(128, 38, 34, 13, "#fff") +
    "",
    T(128, 42, 11, "我是好人", "middle") + T(12, 18, 13, "谁在说谎？", "start") + T(28, 56, 13, "？", "middle") + T(76, 56, 13, "？", "middle") + T(174, 56, 13, "？", "middle"));

  illusAdd("c18_carry", "合作游戏里一个强玩家大喊“让我来”独自操作，旁边两个火柴人双手垂下发呆，下方写着一人通关两人围观",
    ground + person(100, 52, { s: 1.1, arms: "up", face: "shout", hair: true }) + person(34, 62, { arms: "stand", face: "flat" }) + person(168, 62, { arms: "stand", face: "flat" }) +
    O(36, 22, 18, 11, "#fff") + O(166, 22, 18, 11, "#fff"),
    T(100, 22, 12, "让我来！", "middle") + T(36, 26, 12, "……", "middle") + T(166, 26, 12, "……", "middle") + T(100, 136, 11, "一人通关，两人围观", "middle"));

  illusAdd("c18_landlord", "同一块棋盘的两套规则：垄断规则下四个人里只有一个人的柱子很高，繁荣规则下四根柱子一样高",
    R(14, 60, 14, 58, "#ffb3c6") + R(34, 108, 14, 10, "#ffb3c6") + R(54, 108, 14, 10, "#ffb3c6") + R(74, 108, 14, 10, "#ffb3c6") +
    R(112, 80, 14, 38, "#b6e8a8") + R(132, 80, 14, 38, "#b6e8a8") + R(152, 80, 14, 38, "#b6e8a8") + R(172, 80, 14, 38, "#b6e8a8") + L("M6 112 H194", 3),
    T(46, 24, 12, "垄断规则", "middle") + T(46, 38, 12, "只有一人赢", "middle") + T(146, 24, 12, "繁荣规则", "middle") + T(146, 38, 12, "人人都赢", "middle") + T(100, 134, 11, "同一块棋盘，两套规则", "middle"));

  /* ===== 合作 / 声誉 ===== */
  illusAdd("c18_heal", "一个火柴人给素不相识的队友丢出绿色加号，头顶有一枚好评徽章",
    ground + person(36, 62, { arms: "throw", face: "grin" }) + person(160, 62, { arms: "up", face: "smile" }) +
    R(132, 34, 56, 8, "#fff") + R(132, 34, 44, 8, "#b6e8a8") + L("M72 56 q24 -22 52 -6 M92 46 v8 M88 50 h8 M116 40 v8 M112 44 h8", 3) +
    R(8, 26, 54, 16, "#ffe58a", 6),
    T(35, 38, 12, "★ 好评", "middle") + T(100, 18, 13, "素不相识，照样加血", "middle"));

  illusAdd("c18_rating", "赛后评价：一个火柴人头顶有“★4.9”靠谱徽章，另一个火柴人一边想一边说要邀请他组队",
    ground + person(42, 62, { arms: "chin", face: "smile", look: 1 }) + person(152, 62, { arms: "wave", face: "grin" }) +
    R(126, 24, 52, 18, "#ffe58a", 6) + O(78, 28, 40, 13, "#fff") + C(54, 44, 3, "#fff") + C(60, 50, 2.5, "#fff"),
    T(152, 37, 13, "★ 4.9", "middle") + T(78, 32, 11, "他靠谱，邀请！", "middle"));

  illusAdd("c18_fund", "办公室咖啡基金：火柴人把硬币丢进罐子，墙上的名单记录着谁投了谁没投",
    ground + person(40, 62, { arms: "throw", face: "smile" }) + R(80, 98, 28, 28, "#e8f6fc", 4) + C(94, 112, 4, "#ffe58a") + C(100, 118, 4, "#ffe58a") + L("M62 56 q10 -14 22 20", 2.5) +
    R(122, 28, 68, 72, "#fff", 4),
    T(156, 44, 12, "咖啡基金", "middle") + T(156, 62, 12, "小王 ✓", "middle") + T(156, 77, 12, "小李 ✓", "middle") + T(156, 92, 12, "阿K ✗", "middle") + T(50, 24, 12, "投了，就有名字", "middle"));

  illusAdd("c18_freeride", "合租厨房水槽里堆满脏碗，两个火柴人头也不回地走开，嘴里说反正有人会洗",
    ground + R(124, 92, 66, 34, "#e8f6fc", 4) + O(142, 86, 14, 5, "#fff") + O(160, 80, 14, 5, "#fff") + O(176, 86, 12, 5, "#fff") + O(152, 74, 12, 5, "#fff") +
    person(30, 62, { arms: "stand", legs: "walk", face: "flat", look: -1 }) + person(78, 62, { arms: "stand", legs: "walk", face: "grin", look: -1 }) + O(54, 24, 46, 13, "#fff"),
    T(54, 28, 11, "反正有人会洗", "middle") + T(100, 136, 11, "看不见是谁没洗", "middle"));

  illusAdd("c18_strangers", "五个素不相识的玩家排成一排，绿色加号在他们之间传来传去，一个人说谢谢",
    ground + person(24, 88, { s: 0.6, arms: "stand" }) + person(62, 88, { s: 0.6, arms: "wave" }) + person(100, 88, { s: 0.6, arms: "stand" }) + person(138, 88, { s: 0.6, arms: "up" }) + person(176, 88, { s: 0.6, arms: "stand" }) +
    L("M26 74 q36 -34 72 0 M64 74 q38 -38 74 0 M102 74 q38 -34 74 0", 2.5) + L("M58 44 v8 M54 48 h8 M118 40 v8 M114 44 h8 M76 40 v8 M72 44 h8", 2.5) + O(150, 40, 30, 12, "#fff"),
    T(100, 18, 13, "素不相识的五个人", "middle") + T(150, 44, 11, "谢谢！", "middle"));

  /* ===== 反馈循环 / 追赶 ===== */
  illusAdd("c18_kart", "赛车游戏里落后的赛车拿到火箭道具，领先的赛车只拿到香蕉皮",
    L("M6 112 H194", 3) + kart(46, 90, "#ffb3c6") + person(46, 70, { s: 0.55, arms: "hold", legs: "none", face: "grin" }) +
    kart(150, 90, "#a8dcf0") + person(150, 70, { s: 0.55, arms: "hold", legs: "none", face: "smile" }) +
    P("M72 58 l22 -8 l8 6 l-8 6 l-22 -2z", "#ff8b8b") + P("M72 58 l-8 -6 v12z", "#ffe58a") + P("M120 100 q8 -10 16 0 q-8 4 -16 0z", "#ffe58a"),
    T(46, 24, 12, "落后：拿到火箭", "middle") + T(150, 24, 12, "领先：只有香蕉", "middle"));

  illusAdd("c18_snowball", "雪球从山坡顶滚下，越滚越大，山顶的火柴人只推了一下",
    L("M10 44 L190 118", 4) + person(34, 18, { s: 0.55, arms: "throw", face: "grin" }) + C(64, 58, 6, "#fff") + C(104, 68, 11, "#fff") + C(156, 76, 22, "#fff") + L("M48 40 l14 8", 2),
    T(64, 44, 11, "+1", "middle") + T(104, 48, 11, "+3", "middle") + T(156, 44, 12, "+9", "middle") + T(100, 134, 11, "早期一点优势 → 越滚越大", "middle"));

  illusAdd("c18_toostrong", "追赶机制太强：领先的赛车被各种道具追着砸，驾驶员哭丧着脸，后面的人偷笑",
    L("M6 112 H194", 3) + kart(146, 90, "#a8dcf0") + person(146, 70, { s: 0.55, arms: "hold", legs: "none", face: "sad" }) +
    kart(40, 90, "#ffb3c6") + person(40, 70, { s: 0.55, arms: "hold", legs: "none", face: "grin" }) +
    C(96, 66, 6, "#ff8b8b") + C(112, 50, 6, "#ff8b8b") + L("M80 70 l10 -2 M96 54 l10 -2", 2.5),
    T(140, 24, 11, "我领先，却一直挨打", "middle") + T(40, 54, 12, "嘿嘿", "middle"));

  /* ===== Elo ===== */
  illusAdd("c18_upset", "一千二百分的小个子火柴人击败一千八百分的大个子，小个子的分数加三十一，大个子扣三十一",
    ground + person(40, 62, { arms: "up", face: "grin" }) + person(150, 50, { s: 1.2, arms: "stand", face: "sad" }) + L("M94 70 H112 m-6 -5 l6 5 l-6 5", 2.5),
    T(40, 16, 13, "1200 分", "middle") + T(40, 38, 18, "+31", "middle") + T(150, 14, 13, "1800 分", "middle") + T(150, 32, 16, "−31", "middle") + T(100, 136, 11, "爆冷：加得多（K=32）", "middle"));

  illusAdd("c18_newcomer", "新玩家的评分折线在前几局上蹿下跳，之后慢慢平稳",
    ground + person(34, 62, { arms: "up", face: "wide" }) + L("M78 112 H190 M78 112 V34", 3) + L("M82 100 L96 44 L110 90 L124 56 L138 80 L152 68 L170 72 L188 70", 3.5),
    T(134, 24, 12, "新号：前几局大起大落", "middle") + T(150, 102, 12, "渐渐稳定", "middle"));

  illusAdd("c18_smurf", "一个披着披风的高手混进新手房间，三个小新手吓得举手尖叫；牌子上写着显示新手、实际大神",
    ground + person(58, 43, { s: 1.3, arms: "hold", face: "grin", cape: true, hair: true }) + person(136, 81, { s: 0.7, arms: "up", face: "shout" }) + person(172, 81, { s: 0.7, arms: "up", face: "shout" }),
    T(100, 16, 12, "显示：新手　实际：大神", "middle"));

  illusAdd("c18_tourn", "墙上的积分表上各俱乐部数字不同，一个火柴人托腮想：这些分数怎么比",
    ground + R(16, 26, 90, 76, "#fff", 4) + L("M16 52 H106 M16 78 H106 M61 26 V102", 2.5) + person(150, 62, { arms: "chin", face: "flat" }) + O(150, 30, 30, 12, "#fff"),
    T(61, 17, 12, "各俱乐部各算各的", "middle") + T(38, 44, 12, "1800", "middle") + T(84, 44, 12, "1650", "middle") + T(38, 70, 12, "1700", "middle") + T(84, 70, 12, "？", "middle") + T(150, 34, 11, "怎么比？", "middle"));

  illusAdd("c18_elo", "戴眼镜的火柴人指着一条S形曲线，曲线表示评分差越大，强者的预期胜率越高",
    ground + person(42, 62, { arms: "point", face: "smile", glasses: true }) + R(108, 28, 82, 74, "#fff", 4) + L("M114 96 C140 96 140 96 148 66 C156 36 156 36 184 36", 3.5) + L("M114 66 H184", 1.5),
    T(149, 20, 12, "评分差 → 胜率", "middle") + T(140, 118, 11, "评分差越大，胜率越高", "middle"));

  illusAdd("c18_world", "地球两端的两个火柴人拿着同样的积分牌挥手，说明同一把尺子到处通用",
    ground + C(100, 66, 36, "#a8dcf0") + O(100, 66, 16, 36) + L("M64 66 H136 M70 48 H130 M70 84 H130") + person(24, 74, { s: 0.8, arms: "wave", face: "smile" }) + person(176, 74, { s: 0.8, arms: "wave", face: "smile", look: -1 }) + R(31, 54, 16, 14, "#ffe58a") + L("M39 68 V73", 2.5) + R(153, 54, 16, 14, "#ffe58a") + L("M161 68 V73", 2.5),
    T(100, 20, 13, "1970：国际棋联采用", "middle") + T(100, 135, 11, "同一把尺子，到处通用", "middle"));

  illusAdd("c18_team", "两支各两人的队伍隔着中间对峙，头顶问号：团队赢了，每个人各贡献了多少",
    ground + L("M50 36 V126 M150 36 V126", 3) + P("M50 36 h22 l-5 7 l5 7 h-22z", "#a8dcf0") + P("M150 36 h22 l-5 7 l5 7 h-22z", "#ffb3c6") +
    person(24, 76, { s: 0.75, arms: "stand", face: "smile", look: 1 }) + person(76, 76, { s: 0.75, arms: "stand", face: "smile", look: 1 }) + person(128, 76, { s: 0.75, arms: "stand", face: "smile", look: -1 }) + person(178, 76, { s: 0.75, arms: "stand", face: "smile", look: -1 }),
    T(100, 22, 13, "队伍赢了，谁的功劳？", "middle") + T(100, 135, 11, "2006：评分开始支持团队", "middle"));

  /* ===== 比较优势 / 赢家通吃 ===== */
  illusAdd("c18_trade", "左边的火柴人抱着木材，右边的火柴人抱着草药，两人用箭头互换",
    ground + person(34, 62, { arms: "hold", face: "smile" }) + person(166, 62, { arms: "hold", face: "smile", look: -1 }) +
    R(52, 84, 22, 8, "#c9904a") + R(52, 94, 22, 8, "#c9904a") + C(146, 86, 7, "#8fd88a") + C(138, 94, 7, "#8fd88a") + C(150, 94, 7, "#8fd88a") +
    L("M78 72 H122 m-8 -5 l8 5 l-8 5", 2.5) + L("M122 94 H78 m8 -5 l-8 5 l8 5", 2.5),
    T(100, 64, 12, "木材", "middle") + T(100, 112, 12, "草药", "middle") + T(100, 136, 11, "各做擅长的，再交换", "middle"));

  illusAdd("c18_crowd", "两个服务器：左边挤满了玩家的点，右边几乎空荡荡，新来的人都往人多的那边走",
    R(12, 40, 84, 70, "#ffe9ef", 4) + R(110, 40, 84, 70, "#e8f6fc", 4) +
    [0, 1, 2, 3, 4, 5, 6, 7].map(i => [0, 1, 2, 3].map(j => C(22 + i * 10, 52 + j * 14, 3.4, "#2b2b3a")).join("")).join("") + C(130, 74, 3.4, "#2b2b3a") + C(168, 90, 3.4, "#2b2b3a") + L("M100 119 H70 m8 -5 l-8 5 l8 5", 2.5),
    T(54, 32, 13, "热门服", "middle") + T(152, 32, 13, "冷清服", "middle") + T(100, 136, 11, "新人都往人多的地方挤", "middle"));
})();
