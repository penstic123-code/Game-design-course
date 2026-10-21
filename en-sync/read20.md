# 第 20 章 通读修改（read20）

事实核实：《Rogue》（Toy、Wichman，约 1980，Arnold 的 curses）、4.2BSD（1983，无源码）与 4.3BSD（1986）、rec.games.roguelike.*（1993）、柏林诠释（2008）的五款基准游戏、Wald 1943 备忘录与 Mangel 和 Samaniego 1984、Bartlett 1932、Wright 1932，均与已知文献一致，未改。

- 第 4 节 “当时的问题”：1980 年前后，加州大学圣克鲁兹分校的学生 Michael Toy 和 Glenn Wichman 做了一个用字符画地牢的游戏《Rogue》。地图靠 Ken Arnold 写的 curses 库显示在终端上。它随 BSD UNIX 流传，……想玩“类似的东西”的人，只能自己从零做起。
- 第 4 节 “然后边界开始漂”段 2：它拿 ADOM、Angband、Linley’s Dungeon Crawl、NetHack、Rogue 这五款当基准，衡量“一个游戏有多像 roguelike”。同一年，独立游戏《Spelunky》问世。它只满足其中一部分因素，却被很多人叫作肉鸽，于是 roguelite 这类说法也跟着出现了。
- 第 6 节 开头：想做“下一个爆款”，于是研究了 20 款最成功的独立游戏，发现“70% 都是像素风”“约三成有肉鸽元素”。结论似乎一目了然：做个像素风肉鸽！

## 备注（不在本章范围，提请注意）
`en/GLOSSARY-ZH-EN.md` 的“术语表数据对照”里，第 3 章两行似乎对调了：“内在动机 → self-determination theory”“自我决定理论 → intrinsic motivation”，应为“内在动机 → intrinsic motivation”“自我决定理论 → self-determination theory”。该表由 `js/glossary-data.js` 生成，需要在重跑 `tools/build_glossary.py` 之后再看是否仍然如此。
