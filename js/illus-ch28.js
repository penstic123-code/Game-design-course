/* 第28章 纸面原型工作坊：插图包（火柴人风，viewBox 200×140） */
(function () {
  const { person, ground: g0, T, E, eye, SK, INK } = window.illusKit;
  const ground = g0.replace("M6 126", "M6 121");

  /* ---------- 例子轮播 ---------- */
  illusAdd("c28_magic", "两个火柴人隔着桌子玩手写的纸牌，桌上的牌是手工做的，写错了随时涂改",
    ground +
    person(30, 48, { arms: "hold", face: "grin" }) + person(170, 48, { arms: "hold", face: "smile" }) +
    '<rect x="52" y="96" width="96" height="8" fill="#ffe58a"/><path d="M60 104 V121 M140 104 V121"/>' +
    '<rect x="66" y="80" width="18" height="16" fill="#fff"/><rect x="90" y="80" width="18" height="16" fill="#fff"/><rect x="114" y="80" width="18" height="16" fill="#fff"/>' +
    '<path d="M70 86 h10 M70 90 h7 M94 86 h10 M94 90 h8 M118 86 h10 M118 90 h6" stroke-width="1.6" fill="none"/>',
    T(100, 24, 13, "手写的 120 张牌", "middle") + T(100, 70, 12, "写错就涂掉重写", "middle") + T(100, 134, 11, "牌是人做的，规则也是", "middle"));

  illusAdd("c28_armello", "左边棋盘是玩家看到的，中间有一道帘子，帘子后面的主持人用手替电脑处理隐藏的规则",
    ground +
    '<rect x="14" y="52" width="76" height="60" fill="#fff"/><path d="M39 52 V112 M65 52 V112 M14 72 H90 M14 92 H90" stroke-width="2" fill="none"/>' +
    '<circle cx="26" cy="102" r="5" fill="#ffb3c6"/><circle cx="78" cy="62" r="5" fill="#a8dcf0"/>' +
    '<rect x="102" y="36" width="14" height="90" fill="#d8c8ff"/><path d="M109 36 V126" stroke-dasharray="3 4" stroke-width="2" fill="none"/>' +
    person(160, 57, { arms: "desk", face: "grin" }) +
    '<rect x="132" y="104" width="24" height="16" fill="#fff"/>',
    T(52, 40, 12, "玩家看到的", "middle") + T(109, 26, 12, "帘子", "middle") + T(160, 40, 12, "幕后主持人", "middle") + T(100, 134, 11, "人在“模拟电脑”", "middle"));

  illusAdd("c28_sofa", "火柴人把一块纸板剪的沙发摆进平面图，沙发旁的虚线是另一种摆法，不合适就挪一下",
    ground +
    '<rect x="62" y="40" width="110" height="74" fill="#fff"/><path d="M62 78 H84" stroke="#fff" stroke-width="5" fill="none"/>' +
    '<rect x="94" y="52" width="46" height="20" fill="#e8d3a8"/><rect x="138" y="82" width="20" height="26" fill="none" stroke-dasharray="3 4" stroke-width="2.5"/>' +
    person(30, 57, { arms: "point", face: "smile" }),
    T(117, 32, 12, "纸板沙发摆进图纸", "middle") + T(100, 134, 11, "不合适就挪一下，不花钱", "middle"));

  illusAdd("c28_pretty", "反例：火柴人给一堆卡牌涂了精美的色彩，可旁边的规则纸条被叉掉了，第一次试玩才发现规则根本不成立",
    ground +
    person(30, 56, { arms: "point", face: "sad" }) +
    '<rect x="64" y="100" width="130" height="6" fill="#c58b4e"/><path d="M70 106 V121 M188 106 V121" stroke-width="3" fill="none"/>' +
    '<rect x="68" y="72" width="20" height="28" fill="#ffb3c6"/><rect x="92" y="72" width="20" height="28" fill="#a8dcf0"/><rect x="116" y="72" width="20" height="28" fill="#b6e8a8"/><rect x="140" y="72" width="20" height="28" fill="#d8c8ff"/>' +
    '<circle cx="78" cy="84" r="4" fill="#ffe58a"/><circle cx="102" cy="84" r="4" fill="#ffe58a"/><circle cx="126" cy="84" r="4" fill="#ffe58a"/><circle cx="150" cy="84" r="4" fill="#ffe58a"/>' +
    '<rect x="166" y="70" width="24" height="30" fill="#fff"/><path d="M171 80 h14 M171 88 h10" stroke-width="2" fill="none"/><path d="M164 68 L192 102 M192 68 L164 102" stroke="#e5484d" stroke-width="3.5" fill="none"/>',
    T(112, 56, 12, "三个晚上画好的卡面", "middle") + T(128, 134, 11, "规则纸条没试过，被叉掉", "middle"));

  illusAdd("c28_jump", "反例：纸片小人站在一块纸平台上，想验证跳起来爽不爽，可纸上没有实时的手眼配合，虚线跳跃弧线上只有问号",
    ground +
    '<rect x="26" y="96" width="46" height="25" fill="#fff"/><rect x="128" y="96" width="46" height="25" fill="#fff"/>' +
    person(48, 51, { s: 0.7, arms: "up", legs: "run", face: "o" }) +
    '<path d="M72 92 Q100 40 128 92" fill="none" stroke-dasharray="3 5" stroke-width="2.5"/>',
    E(100, 54, 20, "❓") + T(100, 26, 12, "跳得爽不爽？", "middle") + T(100, 134, 11, "纸上没有实时手感", "middle"));

  /* ---------- 发明故事时间线 ---------- */
  illusAdd("c28_t1991", "火柴人用剪刀把一张纸剪成一小张一小张的牌，桌上堆着剪好的牌，这就是最早的手工试玩版",
    ground +
    person(40, 57, { arms: "hold", face: "grin" }) +
    '<rect x="92" y="108" width="84" height="6" fill="#c58b4e"/><path d="M98 114 V121 M170 114 V121" stroke-width="3" fill="none"/>' +
    '<rect x="98" y="76" width="22" height="32" fill="#fff"/><rect x="124" y="76" width="22" height="32" fill="#fff"/><rect x="150" y="76" width="22" height="32" fill="#fff"/>' +
    '<path d="M104 86 h10 M104 92 h8 M130 86 h10 M130 92 h8 M156 86 h10 M156 92 h8" stroke-width="1.6" fill="none"/>',
    E(76, 78, 22, "✂️") + T(100, 24, 13, "剪出来的试玩牌", "middle") + T(133, 134, 11, "一版一版地改", "middle"));

  illusAdd("c28_t1993", "货架上整齐摆着印好的游戏盒子，火柴人开心地看着，试玩版终于变成了正式商品",
    ground +
    '<rect x="64" y="100" width="128" height="6" fill="#c58b4e"/><path d="M70 106 V121 M186 106 V121" stroke-width="3" fill="none"/>' +
    '<rect x="72" y="64" width="34" height="36" fill="#ffb3c6"/><rect x="112" y="64" width="34" height="36" fill="#a8dcf0"/><rect x="152" y="64" width="34" height="36" fill="#ffe58a"/>' +
    person(30, 57, { arms: "up", face: "grin" }),
    T(100, 134, 11, "试玩版变成了商品", "middle"));

  illusAdd("c28_rettig", "左边的火柴人用手指点一张纸画的界面，右边的火柴人拿着另一张纸，用户一点，他就换上相应的下一页，扮演电脑",
    ground +
    person(28, 57, { arms: "point", face: "smile" }) +
    '<rect x="72" y="44" width="46" height="62" fill="#fff"/><rect x="80" y="82" width="30" height="12" fill="#a8dcf0"/><path d="M80 56 h30 M80 66 h20" stroke-width="2" fill="none"/>' +
    person(170, 57, { arms: "hold", face: "grin", look: -1 }) +
    '<rect x="132" y="88" width="26" height="22" fill="#ffe58a"/>',
    T(95, 34, 12, "纸做的界面", "middle") + T(168, 34, 12, "扮演“电脑”", "middle") + T(100, 134, 11, "点一下，他换一页", "middle"));

  illusAdd("c28_palm", "火柴人手里拿着一块木头当掌上电脑，另一只手拿笔在木头上假装写字，感受这个大小的设备用起来如何",
    ground +
    person(50, 57, { arms: "hold", face: "smile" }) +
    '<rect x="80" y="70" width="32" height="44" fill="#c58b4e"/><path d="M86 80 h20 M86 88 h20" stroke-width="2" fill="none"/>' +
    '<path d="M134 62 L100 102 l-4 6 l8 -3 L138 66z" fill="#ffb347"/>',
    T(113, 52, 12, "一块木头", "middle") + T(100, 134, 11, "先假装它是掌上电脑", "middle"));

  illusAdd("c28_book", "一本摊开的书旁边，火柴人指着书里一页页纸做的界面图，把做法整理成方法",
    ground +
    person(30, 57, { arms: "point", face: "grin" }) +
    '<rect x="66" y="100" width="116" height="6" fill="#c58b4e"/><path d="M72 106 V121 M176 106 V121" stroke-width="3" fill="none"/>' +
    '<path d="M76 100 L110 90 L110 56 L76 66z M110 90 L144 100 L144 66 L110 56z" fill="#fff"/><path d="M84 72 L102 68 M84 80 L102 76 M118 68 L136 72 M118 76 L136 80" stroke-width="1.8" fill="none"/>' +
    '<rect x="154" y="70" width="22" height="30" fill="#ffe58a"/>',
    T(110, 40, 12, "把做法写成一本书", "middle") + T(165, 62, 11, "清单", "middle") + T(100, 131, 11, "Paper Prototyping", "middle"));

  /* ---------- 配图（withimg） ---------- */
  illusAdd("c28_sixhrs", "同样的六小时：用纸能走完十二轮改规则加试玩，写代码只够走两轮",
    '<g fill="#ffe58a">' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (28 + i * 12) + '" y="52" width="10" height="14"/>').join("") + "</g>" +
    '<rect x="28" y="84" width="40" height="26" fill="#a8dcf0"/><rect x="74" y="84" width="40" height="26" fill="#a8dcf0"/>',
    T(100, 24, 14, "同样 6 小时", "middle") + T(100, 46, 12, "纸：12 轮", "middle") + T(124, 102, 12, "代码：2 轮", "start") + T(100, 134, 12, "（示意）", "middle"));

  illusAdd("c28_rehearse", "火柴人摔向一个大软垫，旁边的虚线弧线是他故意把自己摔出去的路径，摔一跤也不疼，这是在练习应对失控",
    ground +
    '<ellipse cx="128" cy="106" rx="46" ry="9" fill="#ffb3c6"/>' +
    person(70, 40, { arms: "up", legs: "run", face: "shout" }) +
    '<path d="M44 34 Q90 10 126 98" fill="none" stroke-dasharray="3 5" stroke-width="2.5"/>',
    T(150, 84, 12, "软垫", "middle") + T(100, 134, 11, "安全地练习“失控”", "middle"));

  illusAdd("c28_curse", "左边的火柴人敲桌子，脑袋里响着一整首歌；右边的火柴人只听到咚咚声，一头雾水",
    ground +
    person(34, 57, { arms: "desk", face: "grin" }) + person(166, 57, { arms: "chin", face: "flat", look: -1 }) +
    '<ellipse cx="34" cy="26" rx="22" ry="12" fill="#fff"/>' +
    '<rect x="52" y="92" width="64" height="8" fill="#ffe58a"/><path d="M60 100 V121 M108 100 V121" fill="none"/>',
    E(34, 32, 15, "🎵") + E(166, 34, 18, "❓") + T(84, 82, 12, "咚咚咚", "middle") + T(100, 134, 11, "一个听见歌，一个只听见咚咚", "middle"));
})();
