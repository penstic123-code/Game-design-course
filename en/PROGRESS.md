# 英文版进度

方法：流水线脚本在仓库 `tools/en-build/`（拷贝，内部路径仍写死 scratchpad，需改 REPO/WORK 后才能在别处运行；用法见该目录 README.md）。
中文变动后：`./cycle.sh` 重新抽取、把旧译文按（类型, 原文）迁移到新编号，列出需要新译的片段（work/chNN.todo.txt），译完放进 work/chNN.enS.txt 再跑；JS 字符串拼接处的空格由 entool.py 的 autosp 自动补。

## 状态（暂停于中文新一轮改写之前）
- 章节：01–29 均有英文文件，已同步到 2026-10-21 下午的中文（含 ch03、ch19、ch22 的概念卡改写）。
- 配套页：en/index.html、map.html、glossary.html、flashcards.html 已做；tools/build_glossary.py 已扩展，js/glossary-data.js 含英文字段（te/de，219 条）；en/GLOSSARY-ZH-EN.md 已附术语对照表。
- 插图文字：js/en/illus-lib.js、illus-ch02…ch29.js 已按当时的中文更新。
- 校验：中英 id / data-save / .sec / .term / 练习题 / svg / button 数量逐章对照，0 处差异；entool check 全部通过。
- 全课 qa（手机 420 + 桌面 1100）：除 ch19 手机宽度外无 JS 报错、无横向溢出；其余仅有“贴图边缘/文字压边框/emoji”类提示（多为假阳性）。
- 未完成：ch19 在 420px 下出现横向溢出（overflow 46，疑为新概念卡或收益矩阵表过宽），未排查；个别图内文字挤线提示未逐张看。
- EN_READY：仍为 false（等中文定稿、英文再同步一遍后再改）。

## 下一步
中文定稿后：按 en-sync/ 记录运行 ./cycle.sh，翻译 todo，重跑全课 qa，修 ch19 溢出，再把 js/common.js 里的 EN_READY 改为 true。
