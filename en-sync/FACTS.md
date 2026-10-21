# 事实核实记录（全课通读时做）

每条格式：位置 | 原文 | 核实结论 | 来源 | 是否修改。
“已核实”指与来源一致；“二手来源一致”指只找到转述或搜索摘要，没能打开原文；“改保守”指改成了不带具体数字或年份的说法。

## 简报点名的几条

| 位置 | 原文 | 结论 | 来源 | 修改 |
|---|---|---|---|---|
| ch04 第 5 节 | OpenAI 的程序“平均得分比人类玩家高出约 20%，却从不去终点” | 与 OpenAI 2016-12 博文《Faulty Reward Functions in the Wild》的原话一致（“on average 20 percent higher than that achieved by human players”）。openai.com 对抓取返回 403，原话来自搜索结果对博文的引用，另有两篇二手来源转述同一数字 | https://openai.com/index/faulty-reward-functions/ | 否 |
| ch07 时间线 2012 | Jonasson 与 Purho“在 5 月的 Nordic Game 上做了演讲《Juice it or lose it》” | 属实：2012-05-23 Nordic Game Indie Night；GDC Vault 另有 GDC Europe 2012 同名演讲 | https://www.gdcvault.com/play/1016487/juice-it-or-lose ；Flickr 现场照片说明（2012-05-23） | 是，补了“同年稍晚在 GDC Europe 又讲了一次” |
| ch02 第 7 节 | 赫尔（Hull）1932 年，用大鼠研究目标梯度 | 属实：Hull, C. L. (1932). The goal-gradient hypothesis and maze learning. Psychological Review, 39, 25–43。搜索只找到二手引用，页码凭已有知识 | https://yukaichou.com/behavioral-analysis/goal-gradient-hypothesis-hull-kivetz-motivation-acceleration/（二手） | 否（二手来源一致） |
| ch07 第 4 节（简报写作 ch12） | 口型同步 ITU-R BT.1359：声音比画面早约 45 毫秒、晚约 125 毫秒，观众开始察觉 | 与建议书的检测阈值一致（早 45 ms、晚 125 ms）；该数字在第 7 章而不在第 12 章，已按“检测阈值”补了范围说明 | ITU-R BT.1359-1（1998） | 是，补范围说明 |
| ch13 第 5 节 障碍模拟器 | 红、绿、蓝黄三组滤镜矩阵 | 与 Machado、Oliveira、Fernandes（2009, IEEE TVCG 15(6)）作者主页上严重程度 1.0 的矩阵逐项一致；全色盲用 Rec.709 亮度权重。矩阵原为线性 RGB 设计，页面直接用于屏幕颜色，只能算近似 | http://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html | 是，小字声明改成实情 |
| ch11 第 3 节（简报写作 ch24） | 马力欧 1-1“第一个坑底下有地面、第二个才是真的无底，是刻意设计” | 三篇转述（MCV、SoraNews24、Gigazine）都没提坑；只有维基百科“World 1-1”词条（引 Eurogamer 2015）写到“有些坑有底，可以爬出来”。“第一个/第二个”与“刻意”无依据 | https://en.wikipedia.org/wiki/World_1-1 | 是，改为词条说法 |

## 各章概念卡 / 出处抽查

| 章 | 条目 | 结论 | 修改 |
|---|---|---|---|
| ch01 | 麦戈尼格尔 2011《游戏改变世界》；凯卢瓦 1958《游戏与人》；维特根斯坦 1953 §66–67；休茨 1978《蚱蜢》；Špinka 等 2001 Q Rev Biol 76(2):141–168 | 均与已知文献一致 | 否 |
| ch02 | 努内斯与德雷泽 2006 JCR 32(4):504–512，300 张卡，34% 对 19%；Ghibellini 与 Meier 2025（Humanities and Social Sciences Communications）结论：难以复现“记得更牢”，“倾向回头继续做”更稳；Schultz–Dayan–Montague 1997 Science 275:1593–1599；Berridge 与 Robinson 2016 | 与摘要一致 | 否 |
| ch03 | Bartle 论文起源：1989-11 至 1990-05，英国商业 MUD 公告板，几百条帖子，约 15 人主要参与（对照 Bartle 本人网页 mud.co.uk/richard/hcds.htm）；德西 1971、莱珀等 1973、Deci 等 1999、Festinger 1954、Gouldner 1960、Yee 2006 | 一致 | 否 |
| ch04 | MDA 2004 年 AAAI-04 研讨会、WS-04-04；Krakovna 等 2020-04；Magie 1904 专利 | 与已知文献一致 | 否 |
| ch05 | 康威 1968 年起用纸笔试规则 | 只在一个二手时间线里见到，别处没有，改保守 | 是：“此后几年”；时间线与插图文字写“1960 年代末”/去掉年份 |
| ch05 | Krebs 等 1995 Kluane 实验“八年” | 摘要写 8 年，一致 | 否 |
| ch05 | 加德纳 1970-10、戈斯珀滑翔机枪 1970-11、50 美元悬赏、每 30 代一只 | 一致（LifeWiki 与维基） | 否 |
| ch06 | 冷水实验（14 度、60 秒对 90 秒）、结肠镜 682 人、伍德等 1976 | 与已知文献一致 | 否 |
| ch07 | BT.1359 的 45/125 毫秒见 ch12 条目；Woods 2015 视觉简单反应时约 231 ms | 一致 | 否 |
| ch08 | Nicolaus Bernoulli 1713 信、Cramer 1728、Daniel Bernoulli 1738、冯·诺依曼与摩根斯特恩 1944、卡尼曼与特沃斯基 1979/1992（0.88、2.25）、Iyengar 与 Lepper 2000（24 对 6，60% 对 40%，3% 对约 30%）、Scheibehenne 2010、Sid Meier GDC 2012 | 一致；Cramer 与 D. Bernoulli 相隔十年，原文“几乎同时”不对 | 是，改正“几乎同时” |
| ch09 | Packard《Sugarcane Island》出版经过、Hocking 2007-10-07、Heider 与 Simmel 1944、Loewenstein 1994、Fighting Fantasy 1982 | 一致 | 否 |
| ch10 | 1942 年 TRE 的 HUD 实验 | 维基“Head-up display”只说 1942-10 TRE 把雷达图像与陀螺瞄准具投影合到挡风玻璃上；“当时并未装上飞机”“具备现代 HUD 核心特征”无依据 | 是：删两句，改保守说法 |
| ch10 | Fagerholt 与 Lorentzon 2009、Miller 1956、Cowan 2001、Sweller 1988、Wertheimer 1912/1923、Johnson 与 Goldstein 2003、WCAG 4.5:1/3:1 | 一致 | 否 |
| ch11 | 宫本茂与手冢卓志 2015-09 Eurogamer 视频、蘑菇头顶砖块；艾宾浩斯 1885、Murre 与 Dros 2015、Cepeda 等 2006（184/317/839）、Ericsson 1993、Macnamara 与 Maitra 2019、Kirschner 等 2006 | 一致 | 否 |
| ch12 | SID（Bob Yannes、6581、3 声部）、Ricoh 2A03 五声道、iMUSE（Land 与 McConnell、1991、US 5,315,057）、Tinbergen 与 Perdeck 1950、Whitfield 2009、bouba/kiki 95–98% 与 2022 年 25 种语言研究 | 一致 | 否 |
| ch13 | UPIAS 1976、Oliver 1983、伯克利 1971-09-28、字幕 1972/1979/1980/1993、AbleGamers 2004、GAG 2012、Xbox 自适应手柄 2018-09-04、WCAG 阈值 | 一致 | 否 |
| ch14 | 帕乔利 1494、帕斯卡与费马 1654、惠更斯 1657、雅各布·伯努利 1713、棣莫弗 1733、蒙特卡洛 1913、Gigerenzer 与 Hoffrage 1995、Dota 2 伪随机 C≈0.0557、互动内各道算术 | 一致 | 否 |
| ch15 | 《暗黑破坏神 II》Stone of Jordan 与 1.10 补丁、Castronova 2001、Tversky 与 Kahneman 1992、帕累托、安德森、Forrester 1961、Meadows 2008、72 法则 | 一致；各来源对“献出/出售/销毁”措辞不一 | 是，改用“消耗”并标明出处是游戏维基 |
| ch16 | Chainmail 1971、Blackmoor、1974《D&D》、PLATO dnd、Peterson 关于宝藏经验、Goodhart 1975、Strathern 1997、Ryan 与 Deci 2000、Kivetz 2006、Nunes 与 Drèze 2006 | 一致 | 否 |
| ch17 | Goodhart 1975、Campbell 1976/1979、Strathern 1997、OpenAI 2016、Krakovna 2020-04-21、Manheim 与 Garrabrant 2018、Lepper 1973、Deci 1999 | 一致；“三个领域互相不知道对方”过度断言（AI 文献引用过古德哈特） | 是，改成“各自独立地撞上” |
| ch18 | 狼人杀 Davidoff（1987 春）、《瘟疫危机》2008、Magie 1904、Elo（1960/1970/1978，1200 对 1800 约 31 分）、TrueSkill 2006、Flood 与 Dresher 1950、Fischbacher 2001、Herrmann 2008、李嘉图 1817、Barabási 与 Albert 1999 | 一致 | 否 |
| ch19 | Nash 1950、Flood 与 Dresher、Tucker、Axelrod 1980/1981、Nowak 与 Sigmund 1993、Rapoport 2015、Hardin 1968、Ostrom 1990、Balliet 2010、互动内算术 | 一致 | 否 |
| ch20 | 《Rogue》、4.2BSD 1983/4.3BSD 1986、rec.games.roguelike.* 1993、柏林诠释 2008、Wald 1943、Bartlett 1932、Wright 1932 | 一致 | 否 |
| ch21 | Brignull 2010-07、中国 2017-05-01 概率公示与 2021-08-30 未成年人限时、比利时 2018-04、FTC 与 Epic（2022-12，2.45 亿美元）、FTC 与 Cognosphere（2025-01-17，2000 万美元）、《毁灭战士》1993-12-10、苹果 2009-10、日本 2012 kompu gacha、Arkes 与 Blumer 1985、Cialdini 1984、WHO ICD-11 | 一致 | 否 |
| ch22 | 赫伊津哈 1938、萨伦与齐默尔曼 2003、Deterding 2011、Hamari 2014、卡斯 1986、Castronova 2005、D3 拍卖行 2014-03 关闭、博格斯特、Magie 专利 748,626 | 一致；“Deterding 本人后来说对‘游戏设计元素’越来越怀疑”只有二手转述 | 是，删除该句 |
| ch23 | 帕基特诺夫（《卫报》1984-06）、格拉西莫夫、Henk Rogers 1989、Game Boy 日美发售日、Golomb、Burgiel 1997、NES 计分与第 0 级 48 帧、7-bag、《The New Tetris》63 块袋子；四行 1200 对 160 为 7.5 倍 | 一致；“将近 7.5 倍”不准确 | 是，改“整整 7.5 倍” |
| ch24 | 手塚卓志访谈（方格纸、第二天拿回可玩版本、“几乎从不一次成功”）、1-1 开发最后定下、蘑菇头顶砖块、《大金刚》自由度低故可空中移动、打滑给重量感 | 一致；“因为设计者知道答案所以难免太难”访谈里没有 | 是，删该因果；时间线 ④“以前掉不下去”改“无底的坑” |
| ch25 | 发行 2017-03-03、藤林秀麿与青沼英二、GDC 2017、CEDEC 2017 三角形规则（经 Matt Walker 英译转述）、2017 TGA 年度游戏、Anderson 1972、Juul、Loewenstein 1994、Deci 与 Ryan 1985 | 一致；耐久设计的开发者说法页面已标明是转述 | 否 |
| ch26 | 万智牌 Alpha 120 张牌、Gamma 版调整、Armello 八个月纸面原型与两位主持人、Shewhart、Royce 1970、Bell 与 Thayer 1976、Boehm 1986–88、敏捷宣言 2001、March 1991、Schmidt 与 Bjork 1992 | 一致；访谈里没有“屏风” | 是，Gamma 版措辞改为“已经很少，后来干脆拿掉”；删“屏风” |
| ch27 | Gould 与 Lewis 1985、Nisbett 与 Wilson 1977、Ericsson 与 Simon、Virzi 1992、Nielsen 与 Landauer 1993（31%）、Nielsen 2000、Spool 与 Schroeder 2001、Faulkner 2003（55%/80%/95%）、Camerer 1989、川喜田二郎、0.69^5≈16% | 一致 | 否 |
| ch28 | Garfield 1991 Alpha Magic、1993-08-05 发售、Rettig 1994、Snyder 2003、Newton 1990（3/120 约 2.5%）、Špinka 2001 | 一致；“屏风”与 ch26 同 | 是，删“屏风” |
| ch29 | Spacewar! 1962、FutureSplash 1996、苹果 2004 WebKit canvas、Jobs 2010-04、Adobe 2017-07 / 2020-12-31 / 2021-01-12、Box 1976/1987、Wertheimer 1912、Nystrom 2014 | 一致 | 否 |

## 汇总

- 修改（改正或改保守）：13 章共 14 处：ch05（年份）、ch07（补 GDC Europe、BT.1359 范围）、ch08（几乎同时）、ch10、ch11、ch13、ch15、ch17、ch22、ch23、ch24、ch26、ch28（含屏风）。
- 删除：5 处（ch10 两句、ch22 一句、ch24 一句因果、ch26 与 ch28 的“屏风”）。
- 仍不确定（页面保留，但只有二手来源或未能打开原文）：
  1. ch02 / ch16 Hull 1932 的期刊页码（只找到二手引用，页码凭已有知识）。
  2. ch04 / ch17 OpenAI“高出约 20%”（openai.com 抓取 403，原话来自搜索摘要和两篇转述）。
  3. ch25 CEDEC 2017 三角形规则（据 Matt Walker 英译，非原始演讲）。
  4. `js/illus-ch26.js` 里 `c26_armello` 的图意说明仍写“屏风后面”，画面未改，属于插图，需要时单独处理。
