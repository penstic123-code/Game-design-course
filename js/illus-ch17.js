/* 第17章 古德哈特与指标：插图包（火柴人风，viewBox 200×140） */
(function () {
  const { person, ground, T, E, eye, SK, INK } = window.illusKit;
  const _svg = window.illusSvg;
  window.illusSvg = function (n) { const r = _svg(n); return r ? r.replace('viewBox="0 0 200 140"', 'viewBox="0 0 200 160"') : r; };
  const _add = window.illusAdd;
  const illusAdd = (n, a, b, x) => _add(n, a, b, (x || "").replace(/ y="(13\d)"/g, (m, y) => ' y="' + (+y + 14) + '"'));


  illusAdd("c17_shadow", "一个火柴人站在阳光下，地上有他的影子；另一个火柴人拿刷子把影子越涂越大，本人却没有任何变化",
    ground +
    '<ellipse cx="118" cy="120" rx="52" ry="6" fill="#cfd3dc"/>' +
    person(152, 52, { arms: "stand", face: "smile" }) +
    person(30, 52, { arms: "point", face: "grin", legs: "walk" }) +
    '<path d="M62 62 L82 116" stroke-width="3"/><ellipse cx="86" cy="119" rx="8" ry="4" fill="#8f6cf5"/>',
    T(152, 26, 13, "真正的目标", "middle") + T(96, 137, 12, "影子越涂越大", "middle"));

  illusAdd("c17_achieve", "玩家趴在桌上睡着了，屏幕上的击杀数却在自动上涨：挂机刷出来的成就",
    ground +
    '<rect x="26" y="96" width="100" height="8" fill="#e8e8f0"/><path d="M34 104 V126 M118 104 V126"/>' +
    person(58, 58, { arms: "desk", legs: "sit", face: "closed" }) +
    '<rect x="112" y="30" width="76" height="52" rx="6" fill="#a8dcf0"/><path d="M150 82 V96 M136 96 H164"/>' +
    '<path d="M122 66 H178" stroke-width="5" stroke="#3aa655"/>',
    T(150, 54, 14, "击杀 9999", "middle") + T(58, 28, 14, "Zzz…", "middle") + T(100, 138, 12, "人在睡觉，数字在涨", "middle"));

  illusAdd("c17_exam", "老师在黑板上只写考点，地上的“理解”书本被打了叉，学生只会押题",
    ground +
    '<rect x="78" y="16" width="112" height="56" fill="#eaf9e4"/>' +
    person(40, 58, { arms: "point", face: "grin" }) +
    '<rect x="112" y="96" width="46" height="24" fill="#ffe58a"/><path d="M106 90 L164 126 M164 90 L106 126" stroke="#e5484d" stroke-width="4"/>',
    T(134, 40, 15, "只讲考点", "middle") + T(134, 60, 13, "押中就行", "middle") + T(135, 138, 12, "理解被挤掉了", "middle"));

  illusAdd("c17_login", "手机上弹出日活加一，火柴人领完奖励立刻走向出口，一分钟也没玩",
    ground +
    '<rect x="14" y="40" width="34" height="62" rx="6" fill="#a8dcf0"/><path d="M24 92 H38"/>' +
    '<path d="M52 70 Q76 52 94 66" fill="none" stroke-dasharray="3 6" stroke-width="2.5"/>' +
    person(112, 62, { arms: "hold", legs: "walk", face: "grin" }) +
    '<rect x="124" y="84" width="18" height="16" fill="#ffb3c6"/><path d="M133 84 V100 M124 92 H142"/>' +
    '<rect x="166" y="46" width="26" height="80" fill="#e8e8f0"/>',
    T(31, 30, 13, "日活 +1", "middle") + T(112, 28, 13, "领完就走", "middle") + T(179, 40, 13, "退出", "middle") + T(100, 138, 12, "玩了 0 分钟", "middle"));

  illusAdd("c17_icecream", "反例：冰淇淋销量和溺水事故都来自“天气热”这个共同原因，没有人在刷其中一项",
    '<circle cx="100" cy="22" r="11" fill="#ffe58a"/><path d="M100 4 V0 M118 22 H124 M82 22 H76 M113 9 L117 5 M87 9 L83 5 M113 35 L117 39 M87 35 L83 39" stroke-width="2.5"/>' +
    '<path d="M88 70 L56 82 M112 70 L142 66" stroke-width="3" fill="none"/>' +
    '<path d="M33 100 L45 126 L57 100z" fill="#ffc078"/><circle cx="45" cy="92" r="13" fill="#ffb3c6"/>' +
    person(152, 70, { s: 0.85, arms: "up", legs: "none", face: "shout" }) +
    '<path d="M112 98 q10 -8 20 0 t20 0 t20 0 t20 0 V126 H112z" fill="#a8dcf0"/>',
    T(100, 58, 13, "天热，两样都多", "middle") + T(45, 138, 12, "冰淇淋", "middle") + T(152, 138, 12, "溺水", "middle"));

  illusAdd("c17_thermo", "反例：医生拿体温计量体温，病人没有任何动手脚的动机，体温这个指标可靠",
    ground +
    person(40, 60, { arms: "point", face: "smile", glasses: true }) +
    person(150, 60, { arms: "stand", face: "flat", look: -1 }) +
    '<rect x="76" y="62" width="64" height="7" rx="3" fill="#fff"/><rect x="76" y="62" width="40" height="7" rx="3" fill="#e5484d"/>',
    T(108, 38, 14, "体温 37.0", "middle") + T(100, 138, 12, "没人为奖励去改体温", "middle"));

  illusAdd("c17_money", "银行家发现货币量和物价总是一起变，于是去拉控制货币量的杠杆，结果右边的两条曲线不再并行",
    person(28, 56, { arms: "point", face: "sad", tie: true }) +
    '<rect x="52" y="92" width="52" height="30" rx="6" fill="#ffe58a"/>' +
    '<path d="M112 24 V92 H192" fill="none" stroke-width="3"/>' +
    '<path d="M118 76 L150 66 L186 36" fill="none" stroke="#3aa655" stroke-width="3.5"/>' +
    '<path d="M118 84 L150 74 L186 86" fill="none" stroke="#e5484d" stroke-width="3.5"/>',
    T(78, 112, 13, "货币量", "middle") + T(152, 108, 13, "关系松了", "middle") + T(150, 20, 13, "控制后不再并行", "middle"));

  illusAdd("c17_crime", "办事员用橡皮把“抢劫”改成“盗窃”，统计表上的犯罪数字就变好看了",
    ground +
    '<rect x="26" y="96" width="94" height="8" fill="#e8e8f0"/><path d="M34 104 V126 M112 104 V126"/>' +
    person(54, 58, { arms: "desk", legs: "sit", face: "flat", look: 1 }) +
    '<rect x="108" y="28" width="82" height="56" fill="#fff"/><path d="M118 70 H180" />' +
    '<rect x="86" y="86" width="14" height="8" fill="#ffb3c6" transform="rotate(-20 93 90)"/>',
    T(149, 50, 15, "抢劫→盗窃", "middle") + T(149, 68, 13, "犯罪数字 ↓", "middle") + T(100, 138, 13, "数字好看了，治安没变", "middle"));

  illusAdd("c17_audit", "大学按发表论文篇数评估，教授把一个研究切成一叠小论文；论文篇数的记分牌上数字飙升",
    ground +
    person(44, 52, { arms: "up", face: "shout", legs: "walk" }) +
    '<rect x="118" y="14" width="72" height="44" fill="#fff7cf"/>' +
    '<rect x="14" y="108" width="34" height="5" fill="#fff"/><rect x="16" y="113" width="34" height="5" fill="#fff"/><rect x="14" y="118" width="34" height="5" fill="#fff"/>',
    T(154, 34, 13, "论文篇数", "middle") + T(154, 52, 16, "99 ↑", "middle") + T(120, 100, 13, "一个研究切成十篇", "middle"));

  illusAdd("c17_boat", "赛艇 AI 在水湾里绕圈撞闪光目标，赛道尽头的终点旗被无视",
    '<path d="M6 40 Q90 6 130 34 T196 30" fill="none" stroke-width="12" stroke="#cfd3dc"/>' +
    '<ellipse cx="62" cy="96" rx="52" ry="30" fill="#cfeaf8"/>' +
    '<circle cx="36" cy="92" r="6" fill="#ffe58a"/><circle cx="62" cy="114" r="6" fill="#ffe58a"/><circle cx="88" cy="90" r="6" fill="#ffe58a"/>' +
    '<path d="M40 82 Q62 62 86 80" fill="none" stroke="#e5484d" stroke-dasharray="3 5" stroke-width="2.5"/>' +
    '<path d="M172 20 V44"/><path d="M172 20 l16 6 -16 6z" fill="#ff8fab"/>',
    E(62, 100, 22, "🚤") + T(62, 138, 13, "绕圈撞目标", "middle") + T(160, 62, 13, "终点没人理", "middle"));

  illusAdd("c17_genie", "只写“水温 40 度”，机器把浴缸里一小团水烧到 40 度，其余仍是冷水，字面达标、意图落空（示意）",
    person(28, 54, { arms: "up", face: "wide" }) +
    '<path d="M62 84 H190 V122 Q190 128 184 128 H68 Q62 128 62 122z" fill="#cfeaf8"/>' +
    '<circle cx="110" cy="108" r="10" fill="#ff8fab"/>',
    T(128, 70, 13, "读数 40°C 达标", "middle") + T(155, 112, 12, "其余是冷水", "middle") + T(26, 137, 13, "示意", "middle"));

  illusAdd("c17_leader", "排行榜前几名里，有人靠手气，有人靠本事，有人靠刷分，榜首不一定最强",
    '<rect x="12" y="14" width="176" height="30" fill="#fff7cf"/><rect x="12" y="52" width="176" height="30" fill="#e8f6fc"/><rect x="12" y="90" width="176" height="30" fill="#ffe9ef"/>',
    T(24, 35, 15, "1  靠手气冲上来", "start") + T(24, 73, 15, "2  靠真本事", "start") + T(24, 111, 15, "3  靠刷分", "start") + E(170, 36, 20, "🎲") + T(100, 136, 12, "榜首里混着运气", "middle"));

  illusAdd("c17_route", "火柴人低头照着攻略路线一路小跑，背景的雪山和日出他一眼都没看，收集清单却打满了勾",
    ground +
    '<path d="M60 126 L120 54 L180 126z" fill="#a8dcf0"/><circle cx="168" cy="38" r="12" fill="#ffe58a"/>' +
    person(44, 62, { legs: "run", arms: "hold", face: "flat" }) + '<rect x="62" y="76" width="14" height="16" fill="#fff7cf"/>' +
    '<path d="M6 120 Q60 100 110 118 T196 116" fill="none" stroke-dasharray="3 6" stroke-width="2.5"/>' +
    '<rect x="8" y="12" width="88" height="26" fill="#fff"/>',
    T(52, 30, 13, "收集 120/120", "middle") + T(168, 17, 12, "风景：没看", "middle") + T(100, 138, 12, "按攻略一圈拿满", "middle"));

  illusAdd("c17_extreme", "曲线图：收集物适量时探索乐趣上升，推到一万个时乐趣反而下降",
    '<path d="M24 16 V112 H186" fill="none" stroke-width="3"/>' +
    '<path d="M28 108 C56 30, 110 20, 182 104" fill="none" stroke="#e5484d" stroke-width="3.5"/>' +
    '<circle cx="62" cy="58" r="5" fill="#b6e8a8"/><circle cx="176" cy="94" r="5" fill="#ffc9c9"/>',
    T(30, 12, 12, "好玩", "start") + T(100, 132, 12, "收集物数量 →", "middle") + T(66, 78, 12, "适量", "start") + T(172, 84, 12, "一万个", "end"));

  illusAdd("c17_thermoice", "因果型失效：把温度计泡进冰水，读数降下来了，但外面的天气没有变冷",
    '<circle cx="164" cy="22" r="11" fill="#ffe58a"/><path d="M164 4 V0 M182 22 H188 M146 22 H140" stroke-width="2.5"/>' +
    person(160, 66, { s: 0.85, face: "wide", arms: "cover" }) +
    '<path d="M22 78 H80 L72 124 H30z" fill="#e8f6fc"/><rect x="38" y="48" width="8" height="64" rx="4" fill="#fff"/><rect x="40" y="96" width="4" height="14" fill="#e5484d" stroke="none"/>' +
    '<rect x="50" y="86" width="12" height="12" fill="#fff" transform="rotate(14 56 92)"/>',
    T(51, 40, 13, "读数 ↓", "middle") + T(51, 138, 12, "泡进冰水", "middle") + T(160, 138, 12, "天气还是很热", "middle"));

  illusAdd("c17_offset", "反例：温度计整体偏高两度，每次读数都一样偏，这是测量误差，没有人在对它施加优化压力",
    ground +
    person(34, 62, { arms: "chin", face: "flat", glasses: true }) +
    '<rect x="96" y="56" width="22" height="70" fill="#b6e8a8"/><rect x="140" y="48" width="22" height="78" fill="#ffc9c9"/>' +
    '<path d="M168 56 V48 M164 56 H172 M164 48 H172" stroke-width="2.5"/>',
    T(107, 48, 14, "37", "middle") + T(151, 40, 14, "39", "middle") + T(107, 138, 12, "真实", "middle") + T(151, 138, 12, "读数", "middle") + T(184, 56, 12, "+2", "middle") + T(150, 20, 12, "每次都偏高 2 度", "middle"));

  illusAdd("c17_dash", "团队同时看留存、问卷和抽样录像三种性质不同的指标，三个都好才算数",
    ground + person(100, 62, { arms: "up", face: "smile", glasses: true }) +
    '<rect x="8" y="12" width="52" height="28" rx="5" fill="#a8dcf0"/><rect x="74" y="8" width="52" height="28" rx="5" fill="#ffe58a"/><rect x="140" y="12" width="52" height="28" rx="5" fill="#ffb3c6"/>',
    T(34, 31, 14, "留存", "middle") + T(100, 27, 14, "问卷", "middle") + T(166, 31, 14, "录像", "middle") + T(100, 137, 12, "性质不同才难刷", "middle"));

  illusAdd("c17_kids", "左边的小孩没人奖励也自己画画很开心；右边的小孩为了奖状画画，奖状拿走后就不想画了",
    ground +
    person(44, 56, { arms: "hold", face: "grin" }) + '<rect x="62" y="70" width="30" height="24" fill="#fff"/>' +
    person(150, 56, { arms: "hold", face: "sad", look: -1 }) + '<rect x="108" y="62" width="30" height="40" fill="#fff7cf"/><path d="M114 74 H132 M114 82 H132" stroke-width="2.5"/>',
    T(60, 28, 13, "自己想画", "middle") + T(150, 28, 13, "为奖状才画", "middle") + T(123, 116, 12, "奖状", "middle") + T(150, 137, 12, "拿走就没劲", "middle"));

  illusAdd("c17_shortcut", "优化者站在岔路口：一条长长的绕山路代表真正去探索，一条笔直的短路代表走捷径刷分，他选了短路",
    '<path d="M6 104 H194" stroke-width="3" stroke-dasharray="2 7"/>' +
    '<path d="M44 100 Q70 18 106 40 T168 100" fill="none" stroke-width="4" stroke-dasharray="2 6"/>' +
    '<path d="M44 100 L168 100" fill="none" stroke="#e5484d" stroke-width="5"/>' +
    person(24, 52, { arms: "point", face: "grin", s: 0.8 }) +
    '<path d="M172 70 V104"/><path d="M172 70 l14 5 -14 5z" fill="#ff8fab"/>',
    T(100, 18, 12, "真去探索：路长，成本高", "middle") + T(100, 124, 12, "走捷径：路短，成本低", "middle"));
})();
