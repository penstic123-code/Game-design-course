/* 第22章 游戏与现实：插图包（火柴人风）。名字统一 c22_ 前缀。 */
(function () {
  const { person, ground, T, E, eye, SK, INK } = window.illusKit;
  const R = (x, y, w, h, fill, rx) => `<rect x="${x}" y="${y}" width="${w}" height="${h}"${rx ? ` rx="${rx}"` : ""} fill="${fill || "none"}"/>`;
  const C = (x, y, r, fill) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill || "none"}"/>`;
  const O = (x, y, rx, ry, fill) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill || "none"}"/>`;
  const OD = (x, y, rx, ry, fill) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill || "none"}" stroke-dasharray="7 6"/>`;
  const L = (d, w) => `<path d="${d}" fill="none"${w ? ` stroke-width="${w}"` : ""}/>`;
  const P = (d, fill) => `<path d="${d}" fill="${fill || "none"}"/>`;
  const pp = (x, s, o) => person(x, 126 - 64 * s, Object.assign({ s }, o || {}));

  /* ===== 魔圈 ===== */
  illusAdd("c22_pretend", "一圈虚线里，一个头上长角的火柴人假装怪兽追着另一个尖叫的火柴人，虚线外一只真的小狗在看，圈里的追逐是假装的",
    ground + OD(80, 80, 70, 44, "#fff7cf") + pp(50, .7, { arms: "up", face: "grin" }) + L("M42 74 l-4 -8 M58 74 l4 -8", 3) + pp(100, .7, { arms: "up", legs: "run", face: "shout" }) +
    O(176, 108, 14, 9, "#e8c39a") + C(166, 98, 7, "#e8c39a") + L("M186 104 q8 -6 6 -14", 2.5) + eye(164, 96),
    T(100, 16, 13, "现在，我们在玩", "middle") + T(176, 84, 13, "真狗", "middle"));

  illusAdd("c22_chess", "一个火柴人吃掉了对方的皇后，对方笑着捂头说我的皇后，棋盘外画着一圈虚线表示后果留在游戏里",
    ground + OD(100, 92, 64, 30, "#fff") + R(66, 88, 68, 8, "#ffe58a") + L("M72 96 V122 M128 96 V122", 3) + R(90, 74, 8, 14, "#d8c8ff") + R(106, 74, 8, 14, "#ffb3c6") +
    pp(26, .8, { arms: "point", face: "grin" }) + pp(174, .8, { arms: "up", face: "grin", look: -1 }),
    T(100, 22, 13, "后果留在圈里", "middle") + T(174, 40, 13, "我的后！", "middle"));

  illusAdd("c22_boxing", "左边拳击台上两个火柴人出拳，是合法的比赛；右边街上一个火柴人打了另一个，是违法的",
    ground + R(8, 76, 84, 50, "#fff") + L("M8 92 H92 M8 108 H92", 3) + pp(32, .6, { arms: "throw", face: "shout" }) + pp(70, .6, { arms: "up", face: "sad", look: -1 }) +
    L("M100 20 V120", 2.5) + pp(128, .6, { arms: "throw", face: "shout" }) + pp(170, .6, { arms: "up", face: "sad", look: -1 }),
    T(50, 24, 13, "圈内：比赛", "middle") + T(150, 24, 13, "圈外：违法", "middle"));

  illusAdd("c22_villain", "左边舞台上披着披风的火柴人扮演反派张牙舞爪，右边下台后两个火柴人握手微笑",
    ground + R(6, 98, 90, 28, "#c9955a") + person(50, 50, { s: .75, arms: "up", face: "shout", cape: true }) + L("M100 26 V118", 2.5) + pp(128, .75, { arms: "hold", face: "smile" }) + pp(176, .75, { arms: "hold", face: "smile", look: -1 }) + L("M144 94 H164", 3),
    T(48, 22, 13, "台上：反派", "middle") + T(150, 22, 13, "台下：握手", "middle"));

  illusAdd("c22_rmt", "一圈虚线的围墙破了个洞，圈内的宝剑装备通过洞换成了圈外的钱袋，旁边一个火柴人拿着钱，另一个火柴人因被盗号而发愁",
    ground + OD(62, 76, 56, 46, "#fff7cf") + `<path d="M104 70 Q122 84 104 98" fill="#fff7cf" stroke="none"/>` + L("M96 82 H138 m-7 -5 l7 5 l-7 5", 3) + pp(168, .75, { arms: "up", face: "grin" }) + pp(24, .6, { arms: "stand", face: "sad", legs: "stand" }),
    E(60, 84, 26, "⚔️") + E(140, 112, 20, "💰") + T(100, 16, 13, "圈壁破了洞", "middle") + T(62, 54, 13, "被盗号", "middle"));

  illusAdd("c22_leak", "一圈虚线的魔圈，四条箭头从圈里穿出去，分别写着金钱、身份、关系、不可逆，说明圈会漏",
    OD(100, 70, 40, 46, "#fff7cf") + L("M64 46 H28 m6 -5 l-6 5 l6 5", 3) + L("M136 46 H172 m-6 -5 l6 5 l-6 5", 3) + L("M64 98 H28 m6 -5 l-6 5 l6 5", 3) + L("M136 98 H172 m-6 -5 l6 5 l-6 5", 3),
    T(100, 74, 13, "圈", "middle") + T(28, 36, 13, "金钱", "middle") + T(172, 36, 13, "身份", "middle") + T(28, 120, 13, "关系", "middle") + T(172, 120, 13, "不可逆", "middle"));

  illusAdd("c22_streak", "一个火柴人拿着手机，屏幕上写着连续打卡37天并有一团火焰，他很得意；说明游戏化把连续天数放进学习",
    ground + pp(30, .85, { arms: "hold", face: "grin" }) + R(78, 20, 78, 96, "#fff") + R(86, 30, 62, 30, "#ffe58a") + L("M96 90 H138", 3) + R(98, 98, 22, 10, "#b6e8a8"),
    E(116, 52, 22, "🔥") + T(117, 80, 13, "连续 37 天", "middle") + T(40, 46, 13, "背单词", "middle"));

  illusAdd("c22_flightsim", "一个火柴人坐在模拟驾驶舱里握着操纵杆，窗外是屏幕里的天空和跑道，整个装置就是一个用来训练的游戏",
    ground + R(20, 14, 160, 62, "#a8dcf0") + R(20, 56, 160, 20, "#b6e8a8") + P("M78 40 L122 40 L100 22z", "#fff") + R(60, 96, 80, 30, "#d8dce6") + pp(100, .6, { arms: "hold", face: "smile" }) + L("M100 100 V88", 3),
    T(52, 40, 13, "训练", "middle"));

  illusAdd("c22_stairpiano", "一段台阶被做成黑白琴键，一个火柴人跳着上楼冒出音符，旁边的扶梯空无一人",
    ground + R(14, 110, 20, 16, "#fff") + R(34, 98, 20, 28, "#2b2b3a") + R(54, 86, 20, 40, "#fff") + R(74, 74, 20, 52, "#2b2b3a") + R(94, 62, 20, 64, "#fff") + pp(64, .5, { arms: "wave", legs: "walk", face: "grin" }) + P("M130 126 L190 62 V126z", "#e8ecf2") + L("M142 126 V112 M154 126 V99 M166 126 V86 M178 126 V73", 2),
    E(90, 46, 18, "♪") + E(34, 82, 16, "♫") + T(100, 16, 13, "琴键楼梯", "middle") + T(166, 118, 12, "扶梯", "middle"));

  illusAdd("c22_ticketboard", "客服排行榜上按处理工单数量排名，一个疲惫的火柴人在盖章草草关闭工单，旁边堆着没解决的工单",
    ground + R(8, 26, 92, 86, "#fff") + L("M8 48 H100 M8 70 H100 M8 92 H100", 2.5) + pp(150, .75, { arms: "desk", face: "sad" }) + R(130, 106, 34, 8, "#ffc9c9") + R(136, 100, 30, 8, "#fff"),
    T(54, 18, 13, "工单榜", "middle") + T(54, 42, 13, "小李 96", "middle") + T(54, 64, 13, "小王 90", "middle") + T(54, 86, 13, "小陈 88", "middle") + T(160, 34, 13, "草草关单", "middle"));

  illusAdd("c22_certificate", "左边一个孩子画画，收到你进步了的小星星，兴趣被放大；右边孩子盯着奖状画画，只是为了奖状，兴趣被替代",
    ground + L("M100 18 V126", 2.5) + pp(44, .6, { arms: "hold", face: "grin" }) + R(66, 80, 26, 22, "#fff") + P("M79 84 l2 6 6 0 -5 4 2 6 -5 -4 -5 4 2 -6 -5 -4 6 0z", "#ffd34d") +
    pp(142, .6, { arms: "hold", face: "flat", look: -1 }) + R(114, 52, 40, 26, "#ffe58a"),
    T(50, 18, 13, "放大兴趣", "middle") + T(150, 18, 13, "替代兴趣", "middle") + T(134, 70, 13, "奖状", "middle") + T(50, 38, 13, "你进步了", "middle") + T(150, 42, 13, "为了奖状", "middle"));

  illusAdd("c22_final", "一个火柴人冲过终点线张开双臂夺冠，身后的对手停下来，终点线说明有限游戏有终点",
    ground + L("M150 34 V126", 3) + P("M150 34 h22 v14 h-22z", "#e5484d") + pp(110, .75, { arms: "up", legs: "run", face: "grin" }) + pp(48, .75, { arms: "stand", legs: "walk", face: "flat" }),
    T(100, 18, 13, "有终点，赢了就结束", "middle"));

  illusAdd("c22_house", "两个孩子玩过家家，其中一个说现在你当爸爸，两人交换角色，游戏没有终点",
    ground + pp(56, .75, { arms: "wave", face: "grin" }) + pp(144, .75, { arms: "wave", face: "smile", look: -1 }) + O(100, 42, 62, 15, "#fff") + L("M76 82 Q100 66 124 82 m-8 -2 l8 2 l-2 -8", 2.5),
    T(100, 47, 13, "现在你当爸爸！", "middle"));

  illusAdd("c22_boss", "老板站在讲台前指着横幅无限游戏，两个员工脸色疲惫地看着时钟，说明被口号简化成永远加班",
    ground + R(36, 12, 128, 26, "#fff7cf") + pp(36, .75, { arms: "point", face: "grin", tie: true }) + pp(124, .65, { arms: "stand", face: "sad" }) + pp(170, .65, { arms: "stand", face: "closed" }) + C(124, 60, 10, "#fff") + L("M124 60 V54 M124 60 L130 62", 2),
    T(100, 31, 13, "做无限游戏！", "middle") + T(160, 64, 13, "加班", "middle"));

  /* ===== 时间线 ===== */
  illusAdd("c22_huizinga", "一个留胡子的火柴人举着书，地上用虚线画了一个圈，两个小人在圈里玩，圈就是魔圈",
    ground + pp(30, .85, { arms: "hold", face: "smile", beard: true }) + R(48, 66, 24, 30, "#a8dcf0") + OD(140, 106, 52, 16, "#fff7cf") + person(124, 76, { s: .35, arms: "up", face: "grin" }) + person(158, 76, { s: .35, arms: "up", face: "grin" }),
    T(100, 22, 13, "圈出来的“玩”", "middle") + T(60, 86, 13, "书", "middle"));

  illusAdd("c22_wittgenstein", "一个火柴人托着下巴看着桌上的球、纸牌和棋盘，头上问号，想找它们的共同点却找不到",
    ground + R(76, 100, 118, 6, "#c9955a") + L("M84 106 V126 M186 106 V126", 3) + C(98, 88, 10, "#ffb3c6") + R(122, 68, 18, 28, "#fff") + R(156, 82, 28, 18, "#ffe58a") + pp(30, .85, { arms: "chin", face: "flat", glasses: true }),
    T(136, 30, 13, "共同点是什么？", "middle"));

  illusAdd("c22_hurdle", "一个火柴人在跑道上跨栏，旁边一条平坦的近路被封住，写着禁止，说明规则封住省事的路",
    ground + L("M96 126 V96 M92 96 H108", 4) + L("M140 126 V96 M136 96 H152", 4) + pp(66, .8, { arms: "up", legs: "run", face: "grin" }) + R(160, 100, 34, 26, "#fff") + L("M164 104 L190 122 M190 104 L164 122", 3),
    T(100, 24, 13, "近路被规则封了", "middle"));

  illusAdd("c22_carse", "一个火柴人两手各举一块牌：左边写着赢，右边写着无穷符号，表示有限游戏与无限游戏",
    ground + pp(100, .8, { arms: "up", face: "smile", glasses: true }) + R(10, 44, 54, 38, "#e8f6fc") + R(136, 44, 54, 38, "#ffe9ef") + L("M64 62 L84 74 M136 62 L116 74", 2.5),
    T(37, 68, 15, "赢", "middle") + T(163, 70, 20, "∞", "middle") + T(100, 22, 13, "两种游戏", "middle"));

  illusAdd("c22_salen", "两个火柴人围着显示器讨论，屏幕上画着一个虚线圈，桌上放着一本书，说明设计师把魔圈变成了设计工具",
    ground + R(16, 100, 128, 6, "#c9955a") + L("M24 106 V126 M136 106 V126", 3) + R(96, 46, 58, 40, "#fff") + L("M125 86 V100", 3) + OD(125, 66, 20, 12, "#fff7cf") + R(34, 90, 28, 10, "#a8dcf0") + pp(24, .85, { arms: "point", face: "grin" }) + pp(176, .85, { arms: "chin", face: "smile", look: -1 }),
    T(125, 34, 13, "魔圈", "middle"));

  illusAdd("c22_deterding", "一个火柴人在讲台前指着幻灯片，上面写着积分、徽章、排行榜，等于游戏吗，台下是个大问号",
    ground + pp(26, .85, { arms: "point", face: "flat", glasses: true }) + R(66, 14, 124, 82, "#fff") + L("M66 32 H190", 2),
    T(128, 28, 13, "游戏化？", "middle") + T(128, 52, 13, "积分 徽章", "middle") + T(128, 70, 13, "排行榜", "middle") + T(128, 88, 13, "= 游戏吗？", "middle"));

  /* ===== 有观点的游戏 / 其他 ===== */
  illusAdd("c22_landlord", "一张棋盘游戏旁，戴皇冠的火柴人地主抱着一大袋钱，租客口袋空空，金币从租客流向地主",
    ground + R(8, 26, 76, 76, "#fff") + L("M8 52 H84 M8 76 H84 M34 26 V102 M58 26 V102", 2.5) + R(12, 30, 20, 20, "#ffb3c6") +
    pp(122, .75, { arms: "hold", face: "grin", hat: "crown" }) + R(140, 92, 18, 18, "#ffd34d") + pp(176, .75, { arms: "stand", face: "sad", look: -1 }) + L("M168 76 H146 m6 -5 l-6 5 l6 5", 2.5),
    T(46, 18, 13, "地主游戏", "middle") + T(172, 30, 13, "口袋空", "middle"));

  illusAdd("c22_lecture", "游戏屏幕上弹出一大块说教对话框，玩家无聊地按着跳过，说明观点写在台词里没用",
    ground + R(10, 28, 100, 74, "#fff") + R(18, 36, 84, 38, "#ffe58a") + L("M24 46 H96 M24 56 H96 M24 66 H80", 2.5) + R(62, 80, 40, 18, "#d8dce6") + pp(152, .8, { arms: "chin", face: "flat", look: -1 }),
    T(60, 20, 13, "观点写在台词里", "middle") + T(82, 94, 13, "跳过", "middle") + T(152, 34, 13, "又来了", "middle"));

  illusAdd("c22_leaderboard", "一个火柴人处在排行榜第38名，只盯着前面一名，对前几名没有感觉，说明社会比较对象是相近的人",
    ground + R(8, 12, 96, 106, "#fff") + L("M8 34 H104 M8 56 H104 M8 78 H104 M8 98 H104", 2.5) + pp(152, .75, { arms: "chin", face: "smile", look: -1 }) + L("M128 82 H108 m6 -5 l-6 5 l6 5", 2.5),
    T(56, 28, 13, "第 1 名", "middle") + T(56, 50, 13, "……", "middle") + T(56, 72, 13, "第 37 名", "middle") + T(56, 92, 13, "我 38", "middle") + T(152, 30, 13, "追上他！", "middle"));

  illusAdd("c22_progress", "一个火柴人看着手机里本周比上周多记三十个单词的柱状图笑了，奖励在告诉他你进步了",
    ground + pp(40, .85, { arms: "hold", face: "grin" }) + R(88, 76, 26, 50, "#d8c8ff") + R(124, 50, 26, 76, "#b6e8a8") + L("M84 126 H156", 3),
    T(101, 66, 13, "上周", "middle") + T(137, 40, 13, "本周", "middle") + T(100, 18, 13, "多记 30 个", "middle"));

  illusAdd("c22_tapclose", "一个火柴人只是点开应用一秒就关掉，手指停在手机上，旁边的课本一页没翻，连续打卡的火焰却照常亮着",
    ground + pp(40, .85, { arms: "hold", face: "flat", look: 1 }) + R(78, 70, 20, 32, "#fff") + R(130, 96, 50, 30, "#a8dcf0") + L("M130 104 H180", 2.5),
    T(88, 62, 13, "1秒", "middle") + T(155, 90, 13, "课本没翻", "middle") + E(88, 40, 22, "🔥") + T(150, 40, 13, "打卡成功", "middle"));
})();
