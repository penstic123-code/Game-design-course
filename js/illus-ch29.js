/* 第29章 网页小游戏：插图包（火柴人风，viewBox 200×140） */
(function () {
  const { person, ground: g0, T, E, eye, SK, INK } = window.illusKit;
  const ground = g0.replace("M6 126", "M6 121");

  /* ---------- 三个角色 例子轮播 ---------- */
  illusAdd("c29_widen", "上面的代码框里写着篮子宽度的数字，火柴人指着它；下面的篮子因此变宽，虚线是加宽后的样子，苹果更容易接到",
    ground +
    '<rect x="14" y="14" width="104" height="26" fill="#fff7cf"/>' +
    person(28, 57, { arms: "point", face: "grin" }) +
    '<circle cx="112" cy="70" r="6" fill="#e5484d"/><circle cx="136" cy="92" r="6" fill="#e5484d"/>' +
    '<rect x="108" y="112" width="40" height="10" fill="#ffe58a"/><rect x="92" y="112" width="72" height="10" fill="none" stroke-dasharray="3 4" stroke-width="2.5"/>',
    T(66, 32, 12, "width = 100", "middle") + T(160, 56, 12, "改数字，", "middle") + T(160, 72, 12, "篮子就宽了", "middle") + T(124, 134, 11, "规则藏在 JS 的数字里", "middle"));

  illusAdd("c29_cooking", "做一桌菜：食材清单对应 HTML，摆盘餐具对应 CSS，菜谱步骤和火候对应 JavaScript",
    ground + '<path d="M66 40 V106 M134 40 V106" stroke-dasharray="3 5" stroke-width="2" fill="none"/>',
    E(34, 72, 28, "🥕") + E(100, 72, 28, "🍽️") + E(168, 72, 28, "📖") +
    T(34, 100, 12, "有什么", "middle") + T(100, 100, 12, "什么样", "middle") + T(168, 100, 12, "怎么做", "middle") +
    T(34, 30, 14, "HTML", "middle") + T(100, 30, 14, "CSS", "middle") + T(168, 30, 14, "JS", "middle") + T(100, 134, 11, "三样配合，才是一桌菜", "middle"));

  illusAdd("c29_cssonly", "反例：只会涂颜色的火柴人想靠 CSS 判断接没接到，苹果穿过篮子下面的空隙，得分牌上只有问号",
    ground +
    person(30, 57, { arms: "point", face: "sad" }) +
    '<rect x="104" y="84" width="46" height="8" fill="#ffe58a"/><path d="M108 92 V121 M146 92 V121" stroke-width="3" fill="none"/><circle cx="127" cy="56" r="7" fill="#e5484d"/><path d="M127 66 V80" fill="none" stroke-dasharray="3 4" stroke-width="2"/>' +
    '<circle cx="127" cy="110" r="7" fill="none" stroke="#e5484d" stroke-dasharray="3 3" stroke-width="2.5"/>' +
    '<rect x="132" y="14" width="56" height="26" fill="#fff"/>',
    T(160, 32, 13, "得分 ？", "middle") + T(100, 134, 11, "CSS 管样子，算不出接没接到", "middle"));

  /* ---------- 游戏循环 例子轮播 ---------- */
  illusAdd("c29_idle", "火柴人双手垂着什么也没按，可苹果还在一个接一个往下掉，顶上的红心一颗接一颗变空",
    ground +
    person(36, 57, { arms: "stand", face: "flat" }) +
    '<circle cx="96" cy="48" r="7" fill="#e5484d"/><circle cx="130" cy="74" r="7" fill="#e5484d"/><circle cx="164" cy="98" r="7" fill="#e5484d"/>' +
    '<path d="M96 58 V70 M130 84 V96 M164 108 V120" stroke-dasharray="3 4" stroke-width="2" fill="none"/>',
    E(24, 24, 16, "❤️") + E(48, 24, 16, "❤️") + E(72, 24, 16, "🤍") + T(150, 28, 12, "他没按任何键", "middle") + T(100, 134, 11, "苹果照样在掉", "middle"));

  illusAdd("c29_flipbook", "日常：一排四张小纸片，球每一张只比上一张高一点点，火柴人用拇指快速翻过，球就像在飞",
    ground +
    '<rect x="14" y="56" width="30" height="40" fill="#fff"/><rect x="50" y="56" width="30" height="40" fill="#fff"/><rect x="86" y="56" width="30" height="40" fill="#fff"/><rect x="122" y="56" width="30" height="40" fill="#fff"/>' +
    '<circle cx="29" cy="88" r="4" fill="#e5484d"/><circle cx="65" cy="78" r="4" fill="#e5484d"/><circle cx="101" cy="68" r="4" fill="#e5484d"/><circle cx="137" cy="62" r="4" fill="#e5484d"/>' +
    person(176, 70, { s: 0.8, arms: "hold", face: "grin", look: -1 }),
    T(83, 44, 12, "每页只动一点点", "middle") + T(100, 134, 11, "翻得快，眼睛就看到“动”", "middle"));

  illusAdd("c29_freeze", "反例：火柴人被困在一圈 while(true) 的循环箭头里转个不停，旁边的浏览器窗口写着无响应，按钮点不动",
    ground +
    '<rect x="14" y="36" width="82" height="62" fill="#fff"/><rect x="24" y="76" width="30" height="14" fill="#a8dcf0"/>' +
    '<circle cx="150" cy="76" r="38" fill="none" stroke-dasharray="5 4" stroke-width="2.5"/><path d="M118 62 l-4 -10 l10 3" fill="none"/>' +
    person(150, 57, { arms: "up", face: "o", legs: "stand" }),
    T(55, 60, 12, "无响应", "middle") + T(150, 24, 12, "while(true)", "middle") + T(100, 134, 11, "霸占了循环，页面卡死", "middle"));

  /* ---------- 发明故事时间线 ---------- */
  illusAdd("c29_spacewar", "屏幕上两艘三角形的飞船隔着中间的星星对射，玩家一松手飞船也不会停，这是最早的实时游戏之一",
    
    '<path d="M44 30 L32 60 L56 60z" fill="#ffe58a"/><path d="M156 74 L144 104 L168 104z" fill="#ffb3c6"/>' +
    '<circle cx="100" cy="68" r="7" fill="#fff7cf"/><path d="M100 56 v-5 M100 80 v5 M88 68 h-5 M112 68 h5" fill="none"/>' +
    '<path d="M60 52 L132 82" fill="none" stroke-dasharray="3 5" stroke-width="2.5"/>',
    T(100, 22, 13, "两艘飞船，实时对射", "middle") + T(100, 134, 11, "不按键，飞船也在动", "middle"));

  illusAdd("c29_turbo", "一台电脑机箱，前面有个红色的 Turbo 按钮，火柴人伸手去按，因为新电脑太快、老游戏跑得太猛了",
    ground +
    '<rect x="40" y="107" width="130" height="6" fill="#c58b4e"/><path d="M48 113 V121 M162 113 V121" stroke-width="3" fill="none"/><rect x="56" y="46" width="100" height="61" fill="#e8f6fc"/><rect x="66" y="58" width="48" height="16" fill="#fff"/><circle cx="134" cy="78" r="9" fill="#e5484d"/>' +
    person(22, 57, { arms: "point", face: "o" }),
    T(100, 28, 13, "电脑变快，游戏也变快", "middle") + T(134, 134, 11, "Turbo 键", "middle"));

  illusAdd("c29_flash", "一个浏览器窗口，旁边要先插上一块粉色的插件才能放动画，意思是动画得靠额外的插件",
    ground +
    '<rect x="16" y="36" width="104" height="70" fill="#fff"/><path d="M16 52 H120" fill="none"/>' +
    '<rect x="146" y="54" width="38" height="36" fill="#ffb3c6"/><path d="M120 72 H146" stroke-width="3" fill="none"/>',
    E(165, 80, 18, "⚡") + T(68, 84, 12, "网页", "middle") + T(165, 46, 12, "插件", "middle") + T(100, 134, 11, "要先装，才能玩", "middle"));

  illusAdd("c29_canvas", "浏览器窗口里有一块画布，火柴人拿着画笔在上面一帧帧画小球，球的位置每一帧都是他自己决定的",
    ground +
    '<rect x="64" y="28" width="122" height="84" fill="#fff"/><rect x="76" y="44" width="98" height="56" fill="#fff7cf"/>' +
    '<circle cx="96" cy="84" r="6" fill="#e5484d"/><circle cx="124" cy="66" r="6" fill="#e5484d"/><circle cx="152" cy="82" r="6" fill="#e5484d"/>' +
    person(28, 57, { arms: "point", face: "grin" }),
    T(125, 22, 12, "canvas：自己画每一帧", "middle") + T(100, 134, 12, "画什么，由代码决定", "middle"));

  illusAdd("c29_iphone", "火柴人拿着一部手机，手机屏幕上是一个禁止符号压着插件图标，表示手机上不支持 Flash 插件",
    ground +
    person(36, 57, { arms: "hold", face: "flat" }) +
    '<rect x="68" y="28" width="52" height="86" fill="#fff"/><rect x="74" y="38" width="40" height="62" fill="#e8f6fc"/><rect x="84" y="56" width="20" height="20" fill="#ffb3c6"/>',
    E(94, 66, 28, "🚫") + T(94, 22, 12, "手机屏", "middle") + T(100, 134, 12, "2010：iPhone 不装 Flash", "middle"));

  illusAdd("c29_sunset", "一块墓碑上写着 Flash，火柴人低头默哀，旁边放着一朵花，说明 Flash 在 2020 年底结束支持",
    ground +
    person(48, 57, { arms: "cover", face: "sad" }) +
    '<path d="M104 121 V58 Q104 36 124 36 Q144 36 144 58 V121z" fill="#e8e8f0"/>' +
    '<path d="M160 118 V100" fill="none"/><circle cx="160" cy="96" r="5" fill="#ffb3c6"/>',
    T(124, 70, 13, "Flash", "middle") + T(124, 90, 11, "2020", "middle") + T(100, 134, 11, "2021 年起不再运行", "middle"));

  /* ---------- 配图（withimg） ---------- */
  illusAdd("c29_dtwalk", "两个火柴人都按每秒 1.4 米走路：左边步子大、脚印稀，右边步子小、脚印密，速度一样，所以用“每秒多远”比较才公平",
    ground +
    person(80, 57, { arms: "stand", legs: "wide", face: "smile" }) + person(176, 70, { s: 0.8, arms: "stand", legs: "walk", face: "smile" }) +
    '<g fill="#2b2b3a" stroke="none"><ellipse cx="12" cy="118" rx="4" ry="2"/><ellipse cx="46" cy="118" rx="4" ry="2"/><ellipse cx="116" cy="118" rx="3" ry="2"/><ellipse cx="126" cy="118" rx="3" ry="2"/><ellipse cx="136" cy="118" rx="3" ry="2"/><ellipse cx="146" cy="118" rx="3" ry="2"/><ellipse cx="156" cy="118" rx="3" ry="2"/></g>',
    T(52, 22, 11, "步子大，步频慢", "middle") + T(154, 22, 11, "步子小，步频快", "middle") + T(52, 37, 11, "每秒 1.4 米", "middle") + T(154, 37, 11, "每秒 1.4 米", "middle"));

  illusAdd("c29_knob", "左边一个大旋钮转到了头，苹果变得又密又快，右边的火柴人手忙脚乱，说明数字（机制）改变了体验",
    ground +
    '<circle cx="36" cy="76" r="22" fill="#fff7cf"/><path d="M36 76 L50 62" stroke-width="3.5" fill="none"/>' +
    '<circle cx="100" cy="40" r="6" fill="#e5484d"/><circle cx="118" cy="66" r="6" fill="#e5484d"/><circle cx="96" cy="88" r="6" fill="#e5484d"/><circle cx="124" cy="102" r="6" fill="#e5484d"/>' +
    person(168, 57, { arms: "up", face: "shout", legs: "run" }),
    T(36, 44, 12, "拧旋钮", "middle") + T(110, 22, 12, "苹果更密更快", "middle") + T(168, 24, 12, "手忙脚乱", "middle") + T(100, 134, 11, "数字一变，感受就变", "middle"));

  illusAdd("c29_phi", "三帧静止的画面里，小球分别在左、中、右，一张接一张快速出现，眼睛就看到球在移动",
    '<rect x="12" y="38" width="54" height="46" fill="#fff"/><rect x="73" y="38" width="54" height="46" fill="#fff"/><rect x="134" y="38" width="54" height="46" fill="#fff"/>' +
    '<circle cx="24" cy="62" r="6" fill="#e5484d"/><circle cx="100" cy="62" r="6" fill="#e5484d"/><circle cx="176" cy="62" r="6" fill="#e5484d"/>' +
    '<path d="M70 106 H130 M122 100 l8 6 -8 6" fill="none" stroke-width="2.5"/>',
    T(39, 30, 12, "第 1 帧", "middle") + T(100, 30, 12, "第 2 帧", "middle") + T(161, 30, 12, "第 3 帧", "middle") + E(34, 114, 20, "👁️") + T(100, 134, 12, "每张都不动，连起来就动", "middle"));
})();
