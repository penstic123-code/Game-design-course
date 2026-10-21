/* 第25章 案例：旷野之息：插图包（火柴人风，viewBox 200×140） */
(function () {
  const { person, ground, T, E, eye, SK, INK } = window.illusKit;
  const _svg = window.illusSvg;
  window.illusSvg = function (n) { const r = _svg(n); return r ? r.replace('viewBox="0 0 200 140"', 'viewBox="0 0 200 160"') : r; };
  const _add = window.illusAdd;
  const illusAdd = (n, a, b, x) => _add(n, a, b, (x || "").replace(/ y="(13\d)"/g, (m, y) => ' y="' + (+y + 14) + '"'));


  /* ---------- 发明故事时间线 ---------- */
  illusAdd("c25_walls", "传统塞尔达：火柴人被一堵过不去的墙挡住，只能按固定的 1、2、3 顺序前进",
    ground +
    person(32, 62, { arms: "point", face: "sad", legs: "walk" }) +
    '<rect x="78" y="30" width="22" height="96" fill="#cfd3dc"/><path d="M78 54 H100 M78 78 H100 M78 102 H100 M89 30 V54 M89 78 V102" stroke-width="2.5"/>' +
    '<path d="M130 104 L158 88 L184 72" fill="none" stroke-dasharray="3 5" stroke-width="2.5"/>' +
    '<circle cx="128" cy="104" r="9" fill="#ffe58a"/><circle cx="156" cy="88" r="9" fill="#ffe58a"/><circle cx="184" cy="72" r="9" fill="#ffe58a"/>',
    T(89, 22, 12, "过不去的墙", "middle") + T(128, 108, 11, "1", "middle") + T(156, 92, 11, "2", "middle") + T(184, 76, 11, "3", "middle") + T(156, 137, 12, "顺序固定", "middle"));

  illusAdd("c25_proto", "看起来是 2D 像素小人踩着一根倒下的树干过河，旁边的方块标注：底下跑的是 3D 引擎",
    ground +
    '<rect x="60" y="56" width="10" height="10" fill="#ffd9a0"/><rect x="58" y="66" width="14" height="14" fill="#3aa655"/><rect x="60" y="80" width="4" height="12" fill="#3aa655"/><rect x="66" y="80" width="4" height="12" fill="#3aa655"/>' +
    '<rect x="44" y="96" width="62" height="30" fill="#a8dcf0"/><rect x="34" y="94" width="86" height="8" rx="4" fill="#c58b4e"/>' +
    '<rect x="132" y="38" width="56" height="56" fill="#fff"/><path d="M146 54 L170 54 L170 80 L146 80z M146 54 L154 46 L178 46 L170 54 M170 54 L178 46 L178 72 L170 80" fill="#e8f6fc"/>',
    T(70, 22, 13, "外表像 2D", "middle") + T(160, 106, 12, "底下是 3D", "middle") + T(160, 119, 12, "物理引擎", "middle"));

  illusAdd("c25_chem", "三种元素乘三种物体，格子里每一格都冒出一个反应，共 9 种互动",
    '<path d="M60 36 H190 M60 62 H190 M60 88 H190 M60 114 H190 M60 36 V114 M104 36 V114 M147 36 V114 M190 36 V114" stroke-width="2.5" fill="none"/>' +
    '<circle cx="82" cy="49" r="4" fill="#ffe58a"/><circle cx="125" cy="49" r="4" fill="#ffe58a"/><circle cx="168" cy="49" r="4" fill="#ffe58a"/><circle cx="82" cy="75" r="4" fill="#ffe58a"/><circle cx="125" cy="75" r="4" fill="#ffe58a"/><circle cx="168" cy="75" r="4" fill="#ffe58a"/><circle cx="82" cy="101" r="4" fill="#ffe58a"/><circle cx="125" cy="101" r="4" fill="#ffe58a"/><circle cx="168" cy="101" r="4" fill="#ffe58a"/>',
    E(82, 28, 18, "🔥") + E(125, 28, 18, "💧") + E(168, 28, 18, "⚡") + E(30, 54, 18, "🌿") + E(30, 80, 18, "🪵") + E(30, 106, 18, "🔩") + T(125, 134, 13, "3 × 3 = 9 种互动", "middle"));

  illusAdd("c25_art", "美术总监让原木一碰就变成一捆柴，冒出一团烟，用夸张的表现告诉玩家这里有玩法",
    ground +
    person(28, 58, { arms: "point", face: "grin" }) +
    '<rect x="72" y="108" width="40" height="14" rx="6" fill="#c58b4e"/><path d="M118 115 H138" stroke-width="3"/><path d="M134 109 l6 6 -6 6" fill="none"/>' +
    '<rect x="148" y="98" width="30" height="7" rx="3" fill="#c58b4e"/><rect x="146" y="106" width="30" height="7" rx="3" fill="#c58b4e"/><rect x="150" y="114" width="30" height="7" rx="3" fill="#c58b4e"/><path d="M158 96 V122" stroke="#e5484d" stroke-width="3"/>' +
    '<circle cx="166" cy="84" r="7" fill="#fff"/><circle cx="178" cy="74" r="5" fill="#fff"/>',
    T(92, 102, 12, "原木", "middle") + T(150, 60, 12, "一捆柴", "middle") + T(100, 22, 13, "夸张，玩家才看得懂", "middle"));

  illusAdd("c25_gravity", "地标像一个碗，路人不是直线赶路，而是绕着山丘和塔转着靠近，用热力图校准后分散了人流",
    ground +
    '<path d="M70 126 L112 56 L154 126z" fill="#b6e8a8"/><rect x="108" y="30" width="8" height="28" fill="#ffe58a"/>' +
    '<path d="M18 112 Q24 50 72 40 Q130 30 178 90" fill="none" stroke="#e5484d" stroke-dasharray="3 5" stroke-width="2.5"/>' +
    '<path d="M18 118 Q60 130 120 128 Q170 126 186 108" fill="none" stroke="#e5484d" stroke-dasharray="3 5" stroke-width="2.5"/>' +
    person(30, 78, { s: 0.55, legs: "walk", face: "smile" }),
    T(100, 22, 13, "绕着地标转，不走直线", "middle") + T(100, 138, 12, "引力", "middle"));

  /* ---------- 视线引导 例子轮播 ---------- */
  illusAdd("c25_peek", "火柴人看见山后探出一截塔尖，红色虚线是他的视线：山遮住了一半，塔尖是一个邀请",
    ground +
    '<rect x="140" y="34" width="14" height="92" fill="#ffe58a"/><path d="M134 34 L147 14 L160 34z" fill="#ffb3c6"/>' +
    '<path d="M30 126 L112 52 L194 126z" fill="#b6e8a8"/>' +
    person(24, 62, { arms: "point", face: "grin", look: 1 }) +
    '<path d="M40 56 L142 26" fill="none" stroke="#e5484d" stroke-dasharray="4 5" stroke-width="2.5"/>',
    T(168, 20, 12, "塔尖", "middle") + T(100, 138, 12, "山遮一半，留下邀请", "middle"));

  illusAdd("c25_bend", "日常：公园小路拐了个弯，树后只露出一角屋顶，让人想走过去看看",
    ground +
    '<rect x="146" y="64" width="34" height="34" fill="#ffe9ef"/><path d="M140 64 L163 40 L186 64z" fill="#ffb3c6"/>' +
    '<circle cx="136" cy="98" r="19" fill="#b6e8a8"/><circle cx="168" cy="102" r="17" fill="#b6e8a8"/>' +
    '<path d="M60 126 Q96 118 82 100 T116 84" fill="none" stroke-dasharray="3 5" stroke-width="2.5"/>' +
    person(34, 64, { arms: "point", face: "smile" }),
    T(163, 28, 12, "一角屋顶", "middle") + T(100, 138, 12, "路是弯的，不一次看全", "middle"));

  illusAdd("c25_flat", "反例：一马平川，所有景点一眼全看见，火柴人打着哈欠，没有任何想去探索的悬念",
    ground +
    person(34, 64, { arms: "stand", face: "o", look: 1 }) +
    '<path d="M54 60 L96 108 M54 62 L138 108 M54 64 L180 108" fill="none" stroke="#e5484d" stroke-dasharray="3 5" stroke-width="2"/>',
    E(100, 120, 20, "🌳") + E(142, 120, 20, "🏛️") + E(184, 120, 20, "🗼") + T(120, 36, 13, "全部看见了", "middle") + T(100, 138, 12, "没有悬念，没有想去的地方", "middle"));

  illusAdd("c25_unreach", "反例：塔明明就在眼前，火柴人却被一堵看不见的墙拦住，只能干着急；看得见却去不了会让玩家失去信任",
    ground +
    person(34, 64, { arms: "up", face: "sad", legs: "walk" }) +
    '<rect x="82" y="22" width="12" height="104" fill="none" stroke="#e5484d" stroke-dasharray="5 4" stroke-width="3"/><path d="M76 56 L100 84 M100 56 L76 84" stroke="#e5484d" stroke-width="4"/>' +
    '<rect x="150" y="40" width="14" height="86" fill="#ffe58a"/><path d="M144 40 L157 20 L170 40z" fill="#ffb3c6"/>',
    T(88, 16, 12, "看不见的墙", "middle") + T(184, 40, 12, "塔", "middle") + T(100, 138, 12, "看得见，去不了", "middle"));

  /* ---------- 乘法式玩法 例子轮播 ---------- */
  illusAdd("c25_updraft", "火点燃草地产生热空气，火柴人张开滑翔伞借上升气流飞起来",
    '<path d="M6 126 H194" stroke-dasharray="2 7" stroke-width="3"/>' +
    '<path d="M20 124 Q40 112 60 124 T100 124 T140 124 T180 124 V128 H20z" fill="#b6e8a8"/>' +
    '<path d="M96 110 V70 M104 110 V76 M112 110 V84" fill="none" stroke="#e5484d" stroke-dasharray="3 5" stroke-width="2.5"/>' +
    '<path d="M64 36 Q100 4 136 36" fill="#ffc078"/><path d="M70 34 L96 50 M130 34 L104 50" fill="none" stroke-width="2"/>' +
    person(100, 56, { s: 0.7, arms: "up", legs: "none", face: "grin" }),
    E(104, 120, 24, "🔥") + T(156, 80, 12, "热空气上升", "middle") + T(56, 100, 12, "火烧草", "middle"));

  illusAdd("c25_lego", "日常：火柴人手里只有三种积木，却拼出了塔、桥和房子，少量规则组合出无限造型",
    ground +
    person(26, 52, { arms: "hold", face: "grin" }) +
    '<rect x="56" y="98" width="20" height="14" fill="#ffb3c6"/><rect x="56" y="112" width="30" height="14" fill="#a8dcf0"/><rect x="76" y="98" width="14" height="14" fill="#ffe58a"/>' +
    '<rect x="110" y="86" width="14" height="40" fill="#a8dcf0"/><rect x="110" y="72" width="14" height="14" fill="#ffb3c6"/>' +
    '<rect x="136" y="100" width="10" height="26" fill="#ffe58a"/><rect x="160" y="100" width="10" height="26" fill="#ffe58a"/><rect x="132" y="90" width="42" height="10" fill="#a8dcf0"/>',
    T(72, 90, 12, "3 种积木", "middle") + T(152, 80, 12, "桥", "middle") + T(117, 64, 12, "塔", "middle") + T(100, 138, 12, "少量规则，无数造型", "middle"));

  illusAdd("c25_oneoff", "反例：一把钥匙只对应一扇门，只有一种解法，玩家挠头也没有第二条路，这是手工做的一次性机关",
    ground +
    person(34, 64, { arms: "chin", face: "flat" }) +
    '<rect x="132" y="40" width="46" height="86" fill="#e8e8f0"/><circle cx="144" cy="84" r="4" fill="#2b2b3a"/>' +
    '<path d="M66 100 Q96 86 128 86" fill="none" stroke-dasharray="3 5" stroke-width="2.5"/>',
    E(80, 106, 22, "🔑") + T(155, 32, 12, "上锁的门", "middle") + T(100, 138, 12, "只有一种解法", "middle"));

  illusAdd("c25_inconsistent", "反例：同样的两片草地，左边一点火就烧起来，右边却烧不起来，火柴人满头问号：规则前后不一致，猜测就失去价值",
    ground +
    '<path d="M16 126 L16 104 H84 V126z" fill="#b6e8a8"/><path d="M116 126 L116 104 H184 V126z" fill="#b6e8a8"/>' +
    person(100, 78, { s: 0.75, arms: "up", face: "o" }) +
    '<path d="M136 96 L164 70 M164 96 L136 70" stroke="#e5484d" stroke-width="3.5"/>',
    E(50, 98, 24, "🔥") + T(50, 74, 12, "能烧", "middle") + T(150, 64, 12, "烧不起来", "middle") + E(100, 38, 18, "❓") + T(100, 138, 12, "同样的草，规则却不同", "middle"));

  /* ---------- 取舍（武器耐久） 例子轮播 ---------- */
  illusAdd("c25_weapon", "火柴人一剑砍下去，手里的剑断成两截，而更强的敌人还在后面等着",
    ground +
    person(36, 62, { arms: "throw", face: "shout", legs: "run" }) +
    '<path d="M66 54 L84 40" stroke-width="4"/><path d="M92 36 L106 24" stroke-width="4"/><path d="M82 38 l4 -6 M88 44 l5 2" stroke="#e5484d" stroke-width="2.5"/>' +
    person(160, 48, { s: 1.15, arms: "stand", face: "grin", cape: true }),
    T(86, 18, 13, "耐久见底！", "middle") + T(160, 20, 12, "强敌在后面", "middle") + T(100, 138, 12, "现在用，还是留着？", "middle"));

  illusAdd("c25_backpack", "日常：背包只能装三样，火柴人犹豫该带哪一样，旁边第四样放不下被打了叉",
    ground +
    person(30, 62, { arms: "chin", face: "flat", look: 1 }) +
    '<rect x="74" y="38" width="64" height="86" rx="14" fill="#ffe58a"/><rect x="82" y="46" width="48" height="20" rx="4" fill="#fff"/><rect x="82" y="70" width="48" height="20" rx="4" fill="#fff"/><rect x="82" y="94" width="48" height="20" rx="4" fill="#fff"/>' +
    '<rect x="154" y="86" width="26" height="26" fill="#e8f6fc"/><path d="M148 82 L186 116 M186 82 L148 116" stroke="#e5484d" stroke-width="3.5"/>',
    E(106, 62, 16, "🗡️") + E(106, 86, 16, "🍎") + E(106, 110, 16, "🛡️") + E(167, 106, 16, "🏹") + T(106, 30, 12, "只装三样", "middle") + T(167, 78, 12, "放不下", "middle"));

  illusAdd("c25_infinite", "反例：永远不坏的金剑，火柴人对每个敌人都用同一招，没有任何取舍，打到后面只剩重复",
    ground +
    person(48, 62, { arms: "throw", face: "flat", legs: "wide" }) +
    '<path d="M76 56 L112 30" stroke="#d9a400" stroke-width="6"/>' +
    '<circle cx="140" cy="108" r="9" fill="#fff"/><circle cx="162" cy="108" r="9" fill="#fff"/><circle cx="184" cy="108" r="9" fill="#fff"/>',
    T(90, 22, 14, "耐久 ∞", "middle") + T(140, 112, 12, "招", "middle") + T(162, 112, 12, "招", "middle") + T(184, 112, 12, "招", "middle") + T(100, 138, 12, "每一战同一招，不用想", "middle"));

  /* ---------- 其他 ---------- */
  illusAdd("c25_hill", "一个小孩爬上家附近的小山，一路望着山顶的小塔，想去看看那边是什么",
    ground +
    '<path d="M20 126 L96 46 L172 126z" fill="#b6e8a8"/><rect x="92" y="30" width="8" height="18" fill="#ffe58a"/><path d="M88 30 L96 16 L104 30z" fill="#ffb3c6"/>' +
    person(56, 48, { s: 0.6, arms: "up", legs: "run", face: "grin", look: 1 }) +
    '<path d="M66 40 L88 32" fill="none" stroke="#e5484d" stroke-dasharray="3 5" stroke-width="2"/>',
    T(150, 40, 12, "上去看看", "middle") + T(100, 137, 12, "想去山那边看看", "middle"));

  illusAdd("c25_ants", "左边一只蚂蚁只会走和留下气味，右边一群蚂蚁没有谁指挥，却排成了一条蜿蜒的路线通向食物",
    ground +
    '<g transform="translate(28 126) scale(1.5) translate(-28 -126)" stroke-width="1.6"><ellipse cx="28" cy="120" rx="9" ry="5" fill="#2b2b3a"/><circle cx="19" cy="118" r="4" fill="#2b2b3a"/><path d="M23 123 l-3 3 M29 124 l0 2 M35 123 l3 3 M21 118 l-6 -6" stroke-width="2" fill="none"/></g>' +
    '<path d="M92 112 Q106 100 118 110 T146 110 T166 106" fill="none" stroke-dasharray="3 5" stroke-width="2"/>' +
    '<g transform="translate(104 126) scale(1.7) translate(-104 -126)" stroke-width="1.1"><ellipse cx="104" cy="120" rx="6" ry="3.5" fill="#2b2b3a"/><circle cx="97" cy="118.5" r="2.6" fill="#2b2b3a"/><path d="M101 122 l-2 4 M104 123 l0 3 M107 122 l2 4" stroke-width="1" fill="none"/></g><g transform="translate(126 126) scale(1.7) translate(-126 -126)" stroke-width="1.1"><ellipse cx="126" cy="120" rx="6" ry="3.5" fill="#2b2b3a"/><circle cx="119" cy="118.5" r="2.6" fill="#2b2b3a"/><path d="M123 122 l-2 4 M126 123 l0 3 M129 122 l2 4" stroke-width="1" fill="none"/></g><g transform="translate(148 126) scale(1.7) translate(-148 -126)" stroke-width="1.1"><ellipse cx="148" cy="120" rx="6" ry="3.5" fill="#2b2b3a"/><circle cx="141" cy="118.5" r="2.6" fill="#2b2b3a"/><path d="M145 122 l-2 4 M148 123 l0 3 M151 122 l2 4" stroke-width="1" fill="none"/></g>' +''  +
    '<circle cx="180" cy="114" r="11" fill="#ffb3c6"/><path d="M52 126 Q70 108 88 126z" fill="#c58b4e"/>',
    T(36, 88, 12, "一只：", "middle") + T(36, 102, 12, "规则很简单", "middle") + T(132, 92, 13, "一群：整条路线", "middle") + T(100, 137, 12, "没人指挥", "middle"));
})();
