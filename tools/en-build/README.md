# 英文版流水线（en-build）

这些脚本是翻译英文版时用的工作流程，从 scratchpad 拷贝而来。脚本里的 `REPO` / `WORK` 路径仍写死在原 scratchpad 位置，换机器或换目录后先改 `entool.py`、`illusprep.py`、`merge.py` 开头的路径（WORK = 脚本所在目录下的 `work/`，需要自己建）。

流程
1. `python entool.py extract NN`：从中文章节抽出待译片段到 `work/chNN.zh.txt`（片段格式 `@@id 类型`）。
2. 写译文到 `work/chNN.en*.txt`（同样用 `@@id`，后面的文件覆盖前面的）；JS 里拼接处的空格由 `autosp` 自动补，特殊情况写到 `work/chNN.fix.txt`（`<<<旧===新>>>`，旧文必须在输出里恰好出现一次）；代码里被展示的中文注释写到 `work/chNN.cm.txt`。
3. `python applyall.py NN`：生成 `en/chNN-*.html`；`python entool.py check NN`：对照 id、标签结构、术语和练习题数量。
4. 插图文字：`python illusprep.py dump NN` 导出，译文写 `work/illus-chNN.en.txt`（`## 名字 / alt: / t:`），`python illusprep.py build NN` 生成 `js/en/illus-chNN.js`。
5. 中文变动后：`./cycle.sh` 会重新抽取、把旧译文按（类型, 原文）迁移到新编号，只列出需要新译的片段（`work/chNN.todo.txt`）；译完放进 `work/chNN.enS.txt` 再跑一遍。
6. `node tools/qa.mjs <绝对路径>/en` 做全课点击测试；`python tools/build_glossary.py <课程文件夹>` 重新生成术语表数据（含英文）。
