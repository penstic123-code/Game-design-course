/* 第27章 玩家研究与试玩：插图包（火柴人风，viewBox 200×140） */
(function () {
  const { person, ground, T, E, eye, SK, INK } = window.illusKit;
  const bub = (x, y, w, h, f) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="9" fill="' + (f || "#fff") + '"/>';
  const bar = (x, h, f) => '<rect x="' + x + '" y="' + (112 - h) + '" width="22" height="' + h + '" fill="' + f + '"/>';

  /* ---------- 时间线 ---------- */
  illusAdd("c27_nisbett", "一个人张口说出一个理由，而他真正的原因藏在身后一只上了锁的黑盒子里，他自己也打不开",
    person(40, 62, { arms: "up", face: "shout" }) + bub(60, 16, 80, 28) +
    '<rect x="132" y="70" width="52" height="46" fill="#555"/><circle cx="158" cy="94" r="6" fill="#ffd34d"/><path d="M158 94 v8" stroke="#ffd34d" stroke-width="3"/>',
    T(100, 35, 12, "因为……吧", "middle") + T(158, 64, 12, "真正的原因", "middle") + T(158, 132, 11, "自己也看不见", "middle"));

  illusAdd("c27_aloud", "一个人边操作边把脑子里的话说出来，旁边的人只拿笔记录，不插嘴",
    ground + person(40, 62, { arms: "desk", face: "o", legs: "sit" }) + '<rect x="14" y="94" width="50" height="6" fill="#c58b4e"/>' +
    bub(14, 8, 84, 26) + person(166, 62, { arms: "hold", face: "flat", look: -1 }) + '<rect x="140" y="82" width="16" height="22" fill="#fff"/>',
    T(56, 26, 12, "门……要钥匙？", "middle") + T(166, 28, 12, "只记录", "middle"));

  illusAdd("c27_gl", "三步循环：先看用户，再测量他们怎么用，然后改设计，箭头绕成一圈",
    ground + person(34, 62, { arms: "point", face: "smile" }) +
    '<rect x="72" y="22" width="52" height="24" fill="#ffe58a"/><rect x="132" y="62" width="52" height="24" fill="#a8dcf0"/><rect x="72" y="100" width="52" height="24" fill="#b6e8a8"/>' +
    '<path d="M124 38 Q150 40 156 58 M156 90 Q150 112 128 112 M72 112 Q48 100 52 70 Q54 46 70 36" fill="none"/><path d="M156 62 l-5 -8 M156 62 l5 -8 M128 112 l9 -5 M128 112 l9 5 M71 36 l-9 -1 M71 36 l-5 8" fill="none"/>',
    T(98, 39, 12, "看用户", "middle") + T(158, 79, 12, "测量", "middle") + T(98, 117, 12, "改设计", "middle"));

  illusAdd("c27_virzi", "五个测试者站成一排，右边五根柱子一根比一根高但增幅越来越小，到第五个人时已经找到大约八成的问题",
    ground + person(16, 94, { s: 0.5, arms: "up" }) + person(36, 94, { s: 0.5, arms: "up" }) + person(56, 94, { s: 0.5, arms: "up" }) + person(76, 94, { s: 0.5, arms: "up" }) + person(96, 94, { s: 0.5, arms: "up" }) +
    '<rect x="118" y="104" width="12" height="22" fill="#d9f0cf"/><rect x="134" y="91" width="12" height="35" fill="#d9f0cf"/><rect x="150" y="80" width="12" height="46" fill="#d9f0cf"/><rect x="166" y="73" width="12" height="53" fill="#d9f0cf"/><rect x="182" y="70" width="12" height="56" fill="#b6e8a8"/>',
    T(176, 62, 12, "约 80%", "middle") + T(100, 26, 12, "再多测，新增的问题越来越少", "middle"));

  illusAdd("c27_three", "三轮小测试排成一排，每轮两个测试者代表五个人，每轮之间有一把扳手表示改设计",
    ground + person(24, 94, { s: 0.5, arms: "stand" }) + person(48, 94, { s: 0.5, arms: "stand" }) + person(86, 94, { s: 0.5, arms: "stand" }) + person(110, 94, { s: 0.5, arms: "stand" }) + person(148, 94, { s: 0.5, arms: "stand" }) + person(172, 94, { s: 0.5, arms: "stand" }) +
    '<path d="M60 108 L72 90 M122 108 L134 90" stroke-width="4" fill="none"/><circle cx="74" cy="87" r="5" fill="none" stroke-width="3"/><circle cx="136" cy="87" r="5" fill="none" stroke-width="3"/>',
    T(36, 62, 12, "第1轮", "middle") + T(98, 62, 12, "第2轮", "middle") + T(160, 62, 12, "第3轮", "middle") + T(67, 76, 11, "改设计", "middle") + T(129, 76, 11, "改设计", "middle") + T(100, 24, 12, "每轮 5 人，轮与轮之间改设计", "middle"));

  illusAdd("c27_faulkner", "两组同样是五个人的测试者，一组发现了五成多的问题，另一组几乎全部发现，柱子高矮悬殊",
    bar(48, 44, "#ffb3c6") + bar(116, 86, "#b6e8a8"),
    T(59, 62, 12, "55%", "middle") + T(127, 20, 12, "99%", "middle") + T(100, 132, 11, "同样5人，结果相差很大", "middle"));

  illusAdd("c27_mirror", "单向玻璃后面的研究员看着屏幕，玻璃另一侧的玩家全神贯注玩手柄，并不知道正在被观察",
    ground + '<rect x="84" y="30" width="10" height="96" fill="#cfe9f5"/>' + person(40, 62, { arms: "desk", face: "wide", legs: "sit" }) +
    '<rect x="14" y="94" width="50" height="6" fill="#c58b4e"/><rect x="48" y="86" width="12" height="8" fill="#a8dcf0"/>' + person(150, 62, { arms: "desk", face: "flat", look: -1, legs: "sit" }) + '<rect x="120" y="94" width="50" height="6" fill="#c58b4e"/><rect x="124" y="78" width="22" height="16" fill="#fff"/>',
    T(40, 30, 12, "玩家", "middle") + T(150, 30, 12, "研究员", "middle") + T(100, 20, 11, "单向玻璃", "middle"));

  /* ---------- 例子：试玩 ---------- */
  illusAdd("c27_deathmap", "一张关卡平面图，路线虚线绕来绕去，同一个尖刺位置叠着三个红叉",
    '<rect x="14" y="20" width="172" height="100" fill="#fffdf3"/><path d="M30 80 H80 V50 H120 V86 H160" fill="none" stroke-dasharray="4 4" stroke-width="2.5"/>' +
    '<path d="M106 76 l8 -10 l8 10z" fill="#d6436f" stroke-width="2"/>',
    T(112, 44, 13, "✖✖✖", "middle") + T(100, 12, 11, "死亡位置叠在一起", "middle") + T(100, 132, 11, "记录路线、死亡点", "middle"));

  illusAdd("c27_ikea", "一个陌生人对着零件组装，把板子装反了；旁边的人站着看，一句话也不说",
    person(60, 62, { arms: "desk", face: "o", legs: "sit" }) + '<rect x="84" y="82" width="46" height="8" fill="#d9b382" transform="rotate(-18 107 86)"/><rect x="92" y="96" width="30" height="8" fill="#c58b4e"/>' +
    person(160, 62, { arms: "stand", face: "flat", look: -1 }) + ground,
    T(160, 34, 13, "……", "middle") + T(100, 14, 11, "不问“清楚吗”，看他怎么装", "middle"));

  illusAdd("c27_letter", "朋友边读求职信边用手指着一个词问“这是什么意思”，作者在一旁记下这句",
    '<rect x="30" y="44" width="62" height="80" fill="#fff"/><path d="M40 58 H82 M40 72 H82 M40 86 H82 M40 100 H64" stroke-width="2.5"/><path d="M50 86 H70" stroke="#e5484d" stroke-width="3"/>' +
    ground + person(130, 62, { arms: "point", face: "o", legs: "stand", look: -1 }) + bub(120, 6, 76, 24),
    T(158, 23, 11, "“赋能”是啥？", "middle") + T(62, 34, 11, "他卡的那句就是要改的", "middle"));

  illusAdd("c27_roommate", "设计者问“好玩吗”，朋友笑着竖起双手说“挺好玩的”，可他心里其实在想门到底在哪",
    person(36, 62, { arms: "point", face: "smile" }) + person(150, 62, { arms: "up", face: "grin", look: -1 }) + bub(4, 8, 66, 26) + bub(98, 8, 96, 26, "#fff7cf"),
    T(37, 26, 12, "好玩吗？", "middle") + T(146, 26, 12, "挺好玩的！", "middle") + T(100, 136, 11, "他心里：门到底在哪？", "middle"));

  /* ---------- 例子：偏差 ---------- */
  illusAdd("c27_confirm", "设计者戴着玫瑰色眼镜，看着玩家在原地打转，把它看成了“在欣赏风景”",
    ground + person(40, 62, { arms: "chin", face: "grin", glasses: true }) + '<circle cx="112" cy="100" r="9" fill="#ffb347"/><path d="M112 100 m-22 -10 a24 20 0 1 1 40 6" fill="none" stroke-dasharray="3 4" stroke-width="2.5"/>' +
    bub(10, 8, 96, 24, "#ffe9ef"),
    T(58, 25, 12, "他在欣赏风景", "middle") + T(150, 60, 12, "其实是迷路", "middle") + T(112, 120, 11, "玩家", "middle"));

  illusAdd("c27_polite", "玩家嘴上说“挺好的”，额头冒汗，手还攥紧了手柄，头上的虚线云里写着真话：其实很难",
    person(100, 70, { arms: "hold", face: "smile" }) + '<path d="M114 52 q-3 6 0 10 M86 52 q3 6 0 10" fill="none" stroke="#3d7fb8" stroke-width="2.5"/><rect x="118" y="88" width="18" height="10" rx="4" fill="#cfd3dc"/>' +
    bub(116, 10, 78, 26) + '<ellipse cx="46" cy="30" rx="40" ry="16" fill="#fff" stroke-dasharray="4 4"/>',
    T(155, 28, 12, "挺好的呀", "middle") + T(46, 35, 12, "其实很难", "middle"));

  illusAdd("c27_curse", "设计者眼里钥匙在发光，玩家眼里木箱后面什么也没有；两个人的气泡里看到的画面完全不同",
    ground + person(34, 62, { arms: "point", face: "grin" }) + person(168, 62, { arms: "cover", face: "sad" }) +
    '<rect x="64" y="84" width="40" height="42" fill="#d9b382"/><circle cx="98" cy="118" r="4" fill="#ffd34d"/><path d="M98 108 v-6 M92 112 h-5 M104 112 h5" stroke="#ffd34d" stroke-width="2.5"/>',
    T(34, 28, 12, "很明显啊", "middle") + T(168, 28, 12, "哪里有？", "middle") + T(84, 76, 11, "木箱", "middle"));

  illusAdd("c27_mixednote", "一张便利贴里把“看到的事实”和“猜的原因”写在了一起，被一道线划成两半才看清",
    '<rect x="22" y="22" width="100" height="90" fill="#ffe58a"/><path d="M22 68 H122" stroke="#e5484d" stroke-width="3" stroke-dasharray="5 4" fill="none"/>' +
    person(160, 62, { arms: "point", face: "flat" }),
    T(72, 44, 12, "他走了三次", "middle") + T(72, 60, 12, "到门前", "middle") + T(72, 86, 12, "可能没看到钥匙", "middle") + T(72, 102, 12, "（我猜的）", "middle") + T(160, 28, 12, "分开写", "middle"));

  /* ---------- 例子：幸存者偏差 ---------- */
  illusAdd("c27_wald", "一架飞回来的飞机，机翼和机身布满弹孔，发动机处却几乎没有；绿色虚线圈出的发动机处几乎没有弹孔，该加装甲的恰恰是这里",
    '<ellipse cx="100" cy="72" rx="62" ry="12" fill="#cfd3dc"/><path d="M86 72 L60 30 H80 L106 72 L80 114 H60Z" fill="#cfd3dc"/><path d="M40 72 L24 54 L32 72 L24 90Z" fill="#cfd3dc"/>' +
    '<circle cx="68" cy="58" r="2.5" fill="#e5484d"/><circle cx="76" cy="90" r="2.5" fill="#e5484d"/><circle cx="52" cy="72" r="2.5" fill="#e5484d"/><circle cx="130" cy="72" r="2.5" fill="#e5484d"/><circle cx="72" cy="100" r="2.5" fill="#e5484d"/><circle cx="64" cy="44" r="2.5" fill="#e5484d"/><circle cx="148" cy="70" r="2.5" fill="#e5484d"/>' +
    '<circle cx="164" cy="70" r="9" fill="none" stroke="#2f8f48" stroke-dasharray="3 3"/>',
    T(100, 22, 12, "红点 = 弹孔（示意）", "middle") + T(164, 54, 11, "几乎没有", "middle") + T(100, 132, 11, "没飞回来的，才是被打中要害的", "middle"));

  illusAdd("c27_activeonly", "一群玩家陆续从大门离开，只有门里一位活跃玩家被拉着做访谈，走了的人没被问到",
    ground + '<rect x="84" y="44" width="10" height="82" fill="#cfd3dc"/><rect x="126" y="44" width="10" height="82" fill="#cfd3dc"/>' +
    person(110, 62, { arms: "up", face: "grin" }) + person(30, 84, { s: 0.65, arms: "wave", legs: "walk", face: "sad", look: -1 }) + person(58, 84, { s: 0.65, arms: "wave", legs: "walk", face: "sad", look: -1 }) +
    person(170, 62, { arms: "hold", face: "flat", look: -1 }),
    T(44, 26, 11, "离开的人", "middle") + T(110, 26, 11, "还在玩", "middle") + T(170, 26, 12, "访谈", "middle"));

  illusAdd("c27_stage", "台上一个人举着奖杯讲成功经验，台下看不见的黑影里站着无数没成功的人",
    ground + '<rect x="14" y="98" width="76" height="28" fill="#c58b4e"/>' + person(52, 38, { arms: "up", face: "grin" }) + '<path d="M70 56 h12 l-2 10 h-8z" fill="#ffd34d"/>' +
    '<rect x="110" y="46" width="80" height="80" fill="#cfd3dc" stroke-dasharray="4 4"/><circle cx="128" cy="76" r="5" fill="#9a9aae"/><circle cx="150" cy="82" r="5" fill="#9a9aae"/><circle cx="172" cy="76" r="5" fill="#9a9aae"/><circle cx="138" cy="102" r="5" fill="#9a9aae"/><circle cx="162" cy="104" r="5" fill="#9a9aae"/>',
    T(52, 16, 12, "我就是这么成的", "middle") + T(150, 40, 12, "没被听到的人", "middle"));

  illusAdd("c27_exitsurvey", "给流失玩家发退出问卷，一百封只回来三封，回信的人只是爱回复的那一小撮",
    '<rect x="14" y="52" width="40" height="28" fill="#fff"/><path d="M14 52 L34 70 L54 52" fill="none"/><rect x="62" y="40" width="40" height="28" fill="#fff"/><rect x="62" y="84" width="40" height="28" fill="#fff"/>' +
    person(160, 62, { arms: "hold", face: "flat" }) + '<rect x="132" y="86" width="16" height="22" fill="#b6e8a8"/>',
    T(60, 26, 12, "发出 100 封", "middle") + T(160, 28, 12, "回信 3 封", "middle") + T(100, 132, 11, "回信的只是一小撮", "middle"));

  /* ---------- 随文插图 ---------- */
  illusAdd("c27_silent", "观察的人用手捂住自己的嘴，另一只手飞快写字，玩家在旁边自己摸索",
    ground + person(50, 62, { arms: "cover", face: "flat" }) + '<path d="M44 68 h12" stroke-width="5"/>' + person(150, 62, { arms: "desk", face: "o", legs: "sit" }) + '<rect x="124" y="94" width="46" height="6" fill="#c58b4e"/>',
    T(50, 28, 13, "闭嘴", "middle") + T(150, 28, 12, "自己试", "middle"));

  illusAdd("c27_coin", "掷了五次硬币出现四次正面，旁边的人惊呼“这枚硬币有问题”，其实只是样本太小",
    ground + person(50, 62, { arms: "up", face: "shout" }) + '<circle cx="96" cy="114" r="9" fill="#ffd34d"/><circle cx="116" cy="114" r="9" fill="#ffd34d"/><circle cx="136" cy="114" r="9" fill="#fff" stroke-dasharray="3 3"/><circle cx="156" cy="114" r="9" fill="#ffd34d"/><circle cx="176" cy="114" r="9" fill="#ffd34d"/>' + bub(8, 8, 96, 24),
    T(56, 25, 12, "这硬币有问题！", "middle") + T(140, 88, 12, "5 次里 4 次正面", "middle") + T(100, 136, 11, "只是样本太小", "middle"));

  illusAdd("c27_ab", "两组各五十人，版本B比版本A多了两个人点击，但两根柱子的高度差还不如晃动的误差线",
    ground + '<rect x="30" y="62" width="40" height="64" fill="#a8dcf0"/><rect x="100" y="58" width="40" height="68" fill="#b6e8a8"/><path d="M50 52 V72 M44 52 h12 M44 72 h12 M120 48 V68 M114 48 h12 M114 68 h12" fill="none" stroke-width="2.5"/>',
    T(50, 114, 12, "A 组", "middle") + T(120, 114, 12, "B 组", "middle") + T(100, 20, 12, "多 2 人，是真差别吗？", "middle") + T(170, 70, 11, "每组", "middle") + T(170, 84, 11, "50 人", "middle"));

  illusAdd("c27_coin2", "一个人连赢三把，头上冒出“手气来了”，桌上三枚硬币只是随机排成的三个正面",
    ground + person(50, 62, { arms: "up", face: "grin" }) + bub(88, 18, 100, 28) +
    '<circle cx="110" cy="114" r="11" fill="#ffd34d"/><circle cx="140" cy="114" r="11" fill="#ffd34d"/><circle cx="170" cy="114" r="11" fill="#ffd34d"/>',
    T(138, 37, 12, "手气来了！", "middle") + T(140, 92, 12, "只是 3 次", "middle"));

  illusAdd("c27_five", "五个测试者在一扇门前，四个人捂着脸找不到门，只有一个人找到了，足够让你去查这扇门",
    ground + '<rect x="150" y="56" width="34" height="70" fill="#c58b4e"/><circle cx="176" cy="92" r="2.5" fill="#ffd34d"/>' +
    person(18, 81, { s: 0.7, arms: "cover", face: "sad" }) + person(44, 81, { s: 0.7, arms: "cover", face: "sad" }) + person(70, 81, { s: 0.7, arms: "cover", face: "sad" }) + person(96, 81, { s: 0.7, arms: "cover", face: "sad" }) + person(126, 81, { s: 0.7, arms: "point", face: "smile" }),
    T(57, 40, 12, "4 个人找不到门", "middle") + T(168, 46, 12, "门", "middle"));

  illusAdd("c27_goodhart", "一根“停留时长”的柱子越长越高，旁边的玩家却无聊得打哈欠：指标上去了，体验下去了",
    ground + '<rect x="22" y="94" width="24" height="32" fill="#a8dcf0"/><rect x="54" y="70" width="24" height="56" fill="#a8dcf0"/><rect x="86" y="42" width="24" height="84" fill="#a8dcf0"/>' +
    person(160, 62, { arms: "chin", face: "flat" }) + '<path d="M168 44 q4 -6 8 0" fill="none" stroke-width="2.5"/>',
    T(66, 26, 12, "停留时长 ↑", "middle") + T(160, 28, 12, "好无聊……", "middle"));

  illusAdd("c27_predict", "左边的人自信地说一分钟就能学会，右边的同一个人挠着头，钟已经过了很久",
    '<path d="M100 12 V126" stroke-dasharray="4 5" stroke-width="2.5" fill="none"/>' +
    person(50, 62, { arms: "up", face: "grin" }) + person(150, 62, { arms: "chin", face: "sad" }) + '<circle cx="182" cy="42" r="10" fill="#fff"/><path d="M182 42 V35 M182 42 L187 45" fill="none" stroke-width="2.5"/>',
    T(50, 28, 12, "预测：1 分钟", "middle") + T(142, 28, 12, "实际：很久", "middle"));

  illusAdd("c27_symptom", "三个玩家都喊“太难了”，其实他们都死在同一个尖刺前；设计者在尖刺前竖起一块预警牌，而没有把所有关卡调简单",
    ground + '<path d="M96 126 L112 90 L128 126Z" fill="#e5484d"/>' +
    person(24, 81, { s: 0.7, arms: "up", face: "sad" }) + person(54, 81, { s: 0.7, arms: "up", face: "sad" }) +
    '<rect x="140" y="64" width="40" height="26" fill="#ffe58a"/><path d="M160 90 V126" stroke-width="3"/>',
    T(160, 82, 14, "!", "middle") + T(40, 44, 12, "“太难了”", "middle") + T(110, 70, 12, "同一处", "middle") + T(160, 50, 12, "加预警", "middle"));

  illusAdd("c27_allfix", "一个有棱角的星星被四面八方的意见推着，渐渐磨成一个光滑的圆",
    '<path d="M40 40 l8 20 20 2 -16 12 6 20 -18 -12 -18 12 6 -20 -16 -12 20 -2z" fill="#ffe58a"/><path d="M82 70 H112 M112 70 l-6 -5 M112 70 l-6 5" fill="none"/><circle cx="154" cy="70" r="24" fill="#e8f6fc"/>',
    T(40, 20, 12, "有个性", "middle") + T(154, 20, 12, "最大公约数", "middle") + T(100, 120, 12, "每条意见都照做", "middle"));
})();
