/* 共享脚本：导航、进度、测验、笔记保存 */
(function () {
  const SCRIPT_SRC = (document.currentScript && document.currentScript.src) || "";
  const CH = [
    ["什么是游戏", "ch01-what-is-a-game.html", "What Is a Game"],
    ["核心循环", "ch02-core-loop.html", "Core Loop"],
    ["玩家动机", "ch03-player-motivation.html", "Player Motivation"],
    ["规则与 MDA", "ch04-rules-mda.html", "Rules & MDA"],
    ["涌现与系统思考", "ch05-emergence-systems.html", "Emergence & Systems Thinking"],
    ["心流与难度", "ch06-flow.html", "Flow & Difficulty"],
    ["反馈与手感", "ch07-game-feel.html", "Feedback & Game Feel"],
    ["有意义的选择", "ch08-meaningful-choices.html", "Meaningful Choices"],
    ["叙事设计", "ch09-narrative.html", "Narrative Design"],
    ["界面与新手引导", "ch10-ui-onboarding.html", "UI & Onboarding"],
    ["关卡与教学", "ch11-level-design.html", "Level Design & Teaching"],
    ["声音与视觉", "ch12-audio-visual.html", "Audio & Visual Design"],
    ["可访问性", "ch13-accessibility.html", "Accessibility"],
    ["随机性与概率", "ch14-randomness-probability.html", "Randomness & Probability"],
    ["平衡与经济", "ch15-balance-economy.html", "Balance & Economy"],
    ["进度与成长系统", "ch16-progression.html", "Progression Systems"],
    ["古德哈特与指标", "ch17-goodhart-metrics.html", "Goodhart & Metrics"],
    ["多人游戏设计", "ch18-multiplayer.html", "Multiplayer Design"],
    ["博弈论与合作", "ch19-game-theory.html", "Game Theory & Cooperation"],
    ["类型设计套路", "ch20-genres.html", "Genre Playbooks"],
    ["伦理与商业化", "ch21-ethics-monetization.html", "Ethics & Monetization"],
    ["游戏与现实", "ch22-games-and-reality.html", "Games & Reality"],
    ["案例：俄罗斯方块", "ch23-case-tetris.html", "Case: Tetris"],
    ["案例：马力欧 1-1", "ch24-case-mario.html", "Case: Super Mario 1-1"],
    ["案例：旷野之息", "ch25-case-zelda-botw.html", "Case: Breath of the Wild"],
    ["原型与迭代", "ch26-prototype-iterate.html", "Prototyping & Iteration"],
    ["玩家研究与试玩", "ch27-playtesting.html", "Playtesting & Player Research"],
    ["实战：纸面原型", "ch28-paper-prototype.html", "Workshop: Paper Prototype"],
    ["实战：做网页小游戏", "ch29-build-web-game.html", "Workshop: Build a Web Game"],
  ];
  // 篇章：范围（含）、主题色（accent=主色, accent2=强调色, paper=纸张底色, line=网格线色）
  const PARTS = [
    { zh: "一、认识游戏", en: "I. Understanding Games", from: 1, to: 5, accent: "#ffe58a", accent2: "#ffc078", paper: "#fdf8ec", line: "#e6dcc3" },
    { zh: "二、体验", en: "II. Experience", from: 6, to: 13, accent: "#a8dcf0", accent2: "#7ec8e3", paper: "#f2f9fd", line: "#d3e6ef" },
    { zh: "三、系统", en: "III. Systems", from: 14, to: 20, accent: "#b6e8a8", accent2: "#8fd47e", paper: "#f3faee", line: "#d4e8c9" },
    { zh: "四、立场", en: "IV. Stance", from: 21, to: 22, accent: "#ffb3c6", accent2: "#ff8fab", paper: "#fff4f7", line: "#f0d4dc" },
    { zh: "五、案例与实战", en: "V. Cases & Workshops", from: 23, to: 29, accent: "#d8c8ff", accent2: "#b9a2ff", paper: "#f7f3ff", line: "#e1d9f2" },
  ];
  const partOf = n => PARTS.findIndex(p => n >= p.from && n <= p.to);

  const EN_READY = false; // 英文版翻译完成后改为 true，才会显示语言切换按钮
  const EN = (document.documentElement.lang || "").toLowerCase().startsWith("en");
  const L = EN ? {
    home: "📖 Contents", toc: "Contents", next: "Next: ", back: "🎉 Back to contents",
    badge: "🎉 Chapter cleared! You've got the core ideas.",
    score: (a, n, f) => "Correct " + a + " / " + n + "   First try: " + f,
    qzSlot: "Drag your answer here", qzPicked: "Card selected. Press Enter on the answer slot to place it.", qzRight: "Correct.", qzWrong: "Not that one. Try another.",
    sw: "中文", mapT: "Concept map", related: "Related chapters", relPre: "Builds on / explained by", relNext: "Leads to / applied in", relSee: "Compare & connect", chapterWord: n => "Ch. " + n,
    navTitle: "In this chapter", expandAll: "Expand all", collapseAll: "Collapse all", top: "Back to top", fold: "Fold / unfold",
  } : {
    home: "📖 目录", toc: "目录", next: "下一章：", back: "🎉 回到目录",
    badge: "🎉 本章通关！你已经掌握了核心概念",
    score: (a, n, f) => "已答对 " + a + " / " + n + (f === null ? "" : "　一次答对 " + f),
    qzSlot: "把答案拖到这里", qzPicked: "已选中卡片，在答题位上按回车放入。", qzRight: "答对了。", qzWrong: "不是这个，再试试别的。",
    sw: "EN", mapT: "概念关系图", related: "相关章节", relPre: "先修与原理", relNext: "延伸与应用", relSee: "对照与关联", chapterWord: n => "第" + n + "章",
    navTitle: "本章目录", expandAll: "全部展开", collapseAll: "全部收起", top: "回到顶部", fold: "收起 / 展开",
  };
  const nm = c => (EN ? c[2] : c[0]);
  const KEY = "gdc-progress";
  const Progress = {
    get() { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; } },
    done(n) {
      const p = this.get(); p[n] = true;
      try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {}
      document.querySelectorAll('.dots a[data-n="' + n + '"]').forEach(a => a.classList.add("done"));
    },
  };
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  // 手绘滤镜（给 SVG 插图加抖动线条）
  document.body.insertAdjacentHTML("afterbegin",
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
    '<filter id="rough"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" result="n"/>' +
    '<feDisplacementMap in="SourceGraphic" in2="n" scale="3.2"/></filter></defs></svg>');

  const file = location.pathname.split("/").pop() || "index.html";
  const swHref = (EN ? "../" : "en/") + file;
  const cur = parseInt(document.body.dataset.ch || "0", 10);
  if (cur > 0 && partOf(cur) >= 0) {
    // 同一篇章共用一套主题色；每章在此基础上做细微变化（色相微移、纸面图案、角标数字），风格保持一致
    const P = PARTS[partOf(cur)], r = document.documentElement.style, k = cur - P.from;
    const hexToHsl = h => { const n = parseInt(h.slice(1), 16), R = (n >> 16) / 255, G = ((n >> 8) & 255) / 255, B = (n & 255) / 255, mx = Math.max(R, G, B), mn = Math.min(R, G, B), l = (mx + mn) / 2; let hh = 0, ss = 0; if (mx !== mn) { const d = mx - mn; ss = l > .5 ? d / (2 - mx - mn) : d / (mx + mn); hh = mx === R ? (G - B) / d + (G < B ? 6 : 0) : mx === G ? (B - R) / d + 2 : (R - G) / d + 4; hh *= 60; } return [hh, ss * 100, l * 100]; };
    const shift = (hex, dh, dl) => { const [h, s2, l] = hexToHsl(hex); return "hsl(" + ((h + dh + 360) % 360).toFixed(0) + "," + s2.toFixed(0) + "%," + Math.max(0, Math.min(98, l + (dl || 0))).toFixed(0) + "%)"; };
    const dh = ((k % 5) - 2) * 9;                      // -18°…+18° 的色相微移
    document.body.dataset.part = String(partOf(cur) + 1);
    document.body.dataset.pat = String(cur % 4);       // 四种纸面图案：方格 / 点阵 / 横线 / 斜纹
    r.setProperty("--paper", shift(P.paper, dh * 0.5, 0)); r.setProperty("--line", shift(P.line, dh * 0.5, 0));
    r.setProperty("--accent", shift(P.accent, dh, 0)); r.setProperty("--accent2", shift(P.accent2, dh, 0));
    r.setProperty("--chnum", '"' + String(cur).padStart(2, "0") + '"');
  }
  const prog = Progress.get();

  // 顶栏（章节页）
  if (cur > 0) {
    const bar = document.createElement("div");
    bar.className = "topbar";
    bar.innerHTML = '<a class="home" href="index.html">' + L.home + '</a><a class="home" href="map.html" title="' + L.mapT + '">🗺️</a><div class="dots">' +
      CH.map((c, i) => '<a data-n="' + (i + 1) + '" href="' + c[1] + '" title="' + nm(c) + '" class="' +
        (i + 1 === cur ? "cur " : "") + (prog[i + 1] ? "done" : "") + '" style="--dot:' + PARTS[partOf(i + 1)].accent + '">' + (i + 1) + "</a>").join("") + "</div>";
    if (EN_READY || EN) bar.insertAdjacentHTML("beforeend", '<a class="langsw" href="' + swHref + '">' + L.sw + "</a>");
    document.body.insertBefore(bar, document.body.firstChild.nextSibling);

    const main = document.querySelector("main") || document.body;
    const prev = CH[cur - 2], next = CH[cur];
    const pager = document.createElement("div");
    pager.className = "pager";
    pager.innerHTML =
      (prev ? '<a href="' + prev[1] + '"><span class="btn alt">← ' + nm(prev) + "</span></a>" : '<a href="index.html"><span class="btn alt">← ' + L.toc + "</span></a>") +
      (next ? '<a href="' + next[1] + '"><span class="btn">' + L.next + nm(next) + " →</span></a>" : '<a href="index.html"><span class="btn green">' + L.back + "</span></a>");
    main.appendChild(pager);
  }

  // 测验组件
  function mountQuiz(el, items) {
    let right = 0, answered = 0, firstTry = 0;
    const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    const score = document.createElement("div");
    score.className = "score";
    const badge = document.createElement("div");
    badge.className = "done-badge";
    badge.textContent = L.badge;
    items.forEach((it, qi) => {
      const q = document.createElement("div");
      q.className = "q";
      q.innerHTML = '<div class="qt">' + (qi + 1) + ". " + it.q + "</div>";
      let tried = false, solved = false, picked = null;
      const live = document.createElement("div");
      live.className = "qz-live"; live.setAttribute("role", "status"); live.setAttribute("aria-live", "polite");
      const slot = document.createElement("div");
      slot.className = "qz-slot"; slot.tabIndex = 0; slot.setAttribute("role", "button");
      slot.setAttribute("aria-label", L.qzSlot);
      slot.innerHTML = '<span class="qz-ph">' + L.qzSlot + "</span>";
      const tray = document.createElement("div");
      tray.className = "qz-tray";
      const why = document.createElement("div");
      why.className = "why";
      why.innerHTML = it.why || "";
      const cards = [];
      const setPicked = c => {
        if (picked) { picked.classList.remove("sel"); picked.setAttribute("aria-pressed", "false"); }
        picked = c;
        slot.classList.toggle("armed", !!c);
        if (c) { c.classList.add("sel"); c.setAttribute("aria-pressed", "true"); live.textContent = L.qzPicked; }
      };
      const inSlot = e => {
        const r = slot.getBoundingClientRect(), m = 8;
        return e.clientX > r.left - m && e.clientX < r.right + m && e.clientY > r.top - m && e.clientY < r.bottom + m;
      };
      const attempt = (c, oi) => {
        if (solved || c.disabled) return;
        setPicked(null);
        if (oi === it.a) {
          solved = true;
          slot.querySelector(".qz-ph").style.display = "none";
          c.style.transform = ""; c.classList.remove("drag"); c.classList.add("ok");
          slot.appendChild(c); slot.classList.add("ok");
          cards.forEach(x => { x.disabled = true; });
          why.classList.add("show");
          live.textContent = L.qzRight;
          answered++; right++;
          if (!tried) firstTry++;
          score.textContent = L.score(answered, items.length, firstTry);
          if (answered === items.length) { badge.classList.add("show"); Progress.done(cur); }
        } else {
          tried = true; c.classList.add("no"); c.disabled = true;
          live.textContent = L.qzWrong;
          if (!reduce) { c.classList.add("shake"); setTimeout(() => c.classList.remove("shake"), 450); }
        }
      };
      it.opts.forEach((o, oi) => {
        const c = document.createElement("button");
        c.type = "button"; c.className = "qz-card opt"; c.innerHTML = o;
        c.setAttribute("aria-pressed", "false");
        let sx = 0, sy = 0, dragging = false, down = false;
        c.addEventListener("pointerdown", e => {
          if (c.disabled || solved || (e.pointerType === "mouse" && e.button !== 0)) return;
          down = true; dragging = false; sx = e.clientX; sy = e.clientY;
          try { c.setPointerCapture(e.pointerId); } catch (_) {}
        });
        c.addEventListener("pointermove", e => {
          if (!down) return;
          const dx = e.clientX - sx, dy = e.clientY - sy;
          if (!dragging && Math.hypot(dx, dy) > 6) { dragging = true; c.classList.add("drag"); setPicked(null); }
          if (dragging) {
            e.preventDefault();
            c.style.transform = "translate(" + dx + "px," + dy + "px)";
            slot.classList.toggle("over", inSlot(e));
          }
        });
        const end = e => {
          if (!down) return;
          down = false;
          try { c.releasePointerCapture(e.pointerId); } catch (_) {}
          if (!dragging) return;
          const hit = e.type === "pointerup" && inSlot(e);
          slot.classList.remove("over");
          c.classList.remove("drag");
          c.style.transform = "";
          dragging = false;
          c._moved = true; setTimeout(() => { c._moved = false; }, 0);
          if (hit) attempt(c, oi);
        };
        c.addEventListener("pointerup", end);
        c.addEventListener("pointercancel", end);
        c.addEventListener("click", () => {
          if (c._moved || c.disabled || solved) return;
          setPicked(picked === c ? null : c);
          if (picked) slot.focus({ preventScroll: true });
        });
        cards.push(c); tray.appendChild(c);
      });
      const place = () => { if (picked && !solved) attempt(picked, cards.indexOf(picked)); };
      slot.addEventListener("click", place);
      slot.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); place(); } });
      q.appendChild(slot); q.appendChild(tray); q.appendChild(live); q.appendChild(why);
      el.appendChild(q);
    });
    score.textContent = L.score(0, items.length, null);
    el.appendChild(score);
    el.appendChild(badge);
  }

  // 自动保存的文本框
  document.querySelectorAll("textarea[data-save], input[data-save]").forEach(t => {
    const k = "gdc-note-" + t.dataset.save;
    const v = store.get(k); if (v) t.value = v;
    t.addEventListener("input", () => store.set(k, t.value));
  });

  // ---------- 手绘插图：<span data-illus="名字"> 自动替换成插图库里的 SVG ----------
  (function () {
    const hosts = document.querySelectorAll("[data-illus]");
    if (!hosts.length || !SCRIPT_SRC) return;
    const fill = () => hosts.forEach(el => { el.classList.add("illus"); el.innerHTML = window.illusSvg(el.dataset.illus); });
    if (window.illusSvg) return fill();
    const s2 = document.createElement("script");
    s2.src = SCRIPT_SRC.replace(/common\.js(\?.*)?$/, "illus.js"); s2.onload = fill;
    document.head.appendChild(s2);
  })();

  // ---------- 例子轮播：连续的 .eg 自动合并成"横向切换"的一组，减少纵向长度 ----------
  (function () {
    const seen = new Set();
    document.querySelectorAll("main .eg").forEach(el => {
      if (seen.has(el) || el.closest(".egcar")) return;
      const run = []; let n = el;
      while (n && n.classList && n.classList.contains("eg")) { run.push(n); seen.add(n); n = n.nextElementSibling; }
      if (run.length >= 2) build(run);
    });
    function label(item) {
      if (item.dataset.t) return item.dataset.t;
      const b = item.querySelector("b");
      if (!b) return EN ? "Example" : "例子";
      if (!EN) return b.textContent.replace(/[：:，,。\s]+$/, "").slice(0, 14);
      const t = b.textContent.replace(/[：:，,。.\s]+$/, "");
      if (t.length <= 24) return t;
      const cut = t.slice(0, 24), sp = cut.lastIndexOf(" ");
      return (sp > 10 ? cut.slice(0, sp) : cut) + "…";
    }
    function build(run) {
      const car = document.createElement("div"); car.className = "egcar"; car.tabIndex = 0;
      const tabs = document.createElement("div"); tabs.className = "egtabs";
      const stage = document.createElement("div"); stage.className = "egstage";
      const prev = document.createElement("button"); prev.type = "button"; prev.className = "egnav prev"; prev.textContent = "‹"; prev.setAttribute("aria-label", EN ? "Previous" : "上一个");
      const next = document.createElement("button"); next.type = "button"; next.className = "egnav next"; next.textContent = "›"; next.setAttribute("aria-label", EN ? "Next" : "下一个");
      const count = document.createElement("div"); count.className = "egcount";
      run[0].before(car); car.append(tabs, stage, count); stage.append(prev, next);
      const btns = run.map((item, k) => {
        const bad = item.classList.contains("bad");
        // 把正文包进 .egt，前面放"例/反例"小标签
        const kids = Array.from(item.childNodes).filter(c => !(c.nodeType === 1 && (c.classList.contains("illus") || c.hasAttribute("data-illus"))));
        if (!item.querySelector(".egt")) { const t = document.createElement("div"); t.className = "egt"; kids.forEach(c => t.appendChild(c)); item.appendChild(t); }
        item.querySelector(".egt").insertAdjacentHTML("afterbegin", '<span class="egk">' + (bad ? (EN ? "Counter-example" : "反例") : (EN ? "Example" : "例子")) + "</span>");
        if (item.querySelector(".illus, [data-illus]")) item.classList.add("hasimg");
        stage.insertBefore(item, next);
        const b = document.createElement("button"); b.type = "button"; b.className = "egtab" + (bad ? " bad" : "");
        b.textContent = (item.dataset.ic ? item.dataset.ic + " " : (bad ? "✘ " : "")) + label(item);
        b.onclick = () => show(k); tabs.appendChild(b); return b;
      });
      let cur = 0;
      function show(k) {
        cur = (k + run.length) % run.length;
        run.forEach((it, j) => it.classList.toggle("on", j === cur));
        btns.forEach((b, j) => b.classList.toggle("on", j === cur));
        const bt = btns[cur]; tabs.scrollLeft = bt.offsetLeft - (tabs.clientWidth - bt.offsetWidth) / 2;   // 只滚动页签条，不滚动整个页面
        count.textContent = (cur + 1) + " / " + run.length;
      }
      prev.onclick = () => show(cur - 1); next.onclick = () => show(cur + 1);
      car.addEventListener("keydown", e => { if (e.key === "ArrowLeft") show(cur - 1); if (e.key === "ArrowRight") show(cur + 1); });
      let x0 = null;
      stage.addEventListener("pointerdown", e => { x0 = e.clientX; });
      stage.addEventListener("pointerup", e => { if (x0 !== null && Math.abs(e.clientX - x0) > 50) show(cur + (e.clientX < x0 ? 1 : -1)); x0 = null; });
      show(0);
    }
  })();

  // ---------- 章内导航：可收起的分节 + 目录面板 + 阅读进度 ----------
  (function buildNav() {
    const main = document.querySelector("main");
    if (!main || cur === 0) return;
    const secs = Array.from(main.children).filter(el => el.classList && el.classList.contains("sec"));
    if (secs.length < 2) return;
    const bodies = [];
    secs.forEach((sec, i) => {
      const body = document.createElement("div");
      body.className = "sec-body";
      let n = sec.nextSibling;
      while (n && !(n.nodeType === 1 && (n.classList.contains("sec") || n.classList.contains("pager")))) {
        const nx = n.nextSibling; body.appendChild(n); n = nx;
      }
      sec.after(body);
      bodies.push(body);
      sec.id = sec.id || "sec" + (i + 1);
      sec.tabIndex = 0; sec.setAttribute("role", "button"); sec.setAttribute("aria-expanded", "true");
      sec.title = L.fold;
      sec.insertAdjacentHTML("beforeend", '<span class="caret" aria-hidden="true">▾</span>');
      const toggle = open => {
        const willOpen = open === undefined ? body.classList.contains("collapsed") : open;
        body.classList.toggle("collapsed", !willOpen); sec.classList.toggle("folded", !willOpen);
        sec.setAttribute("aria-expanded", String(willOpen));
      };
      sec._toggle = toggle;
      sec.addEventListener("click", () => toggle());
      sec.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    });

    // 面板
    const fab = document.createElement("button");
    fab.className = "navfab"; fab.type = "button"; fab.setAttribute("aria-label", L.navTitle); fab.textContent = "☰";
    const panel = document.createElement("div");
    panel.className = "navpanel";
    panel.innerHTML = "<h4>" + L.navTitle + "</h4><ol>" + secs.map((sec, i) => {
      const h = sec.querySelector("h2");
      return '<li><a href="#' + sec.id + '" data-i="' + i + '">' + (h ? h.textContent : "") + "</a></li>";
    }).join("") + '</ol><div class="navtools"><button type="button" data-a="open">' + L.expandAll + '</button><button type="button" data-a="close">' + L.collapseAll + '</button><button type="button" data-a="top">' + L.top + "</button></div>";
    const bar = document.createElement("div");
    bar.className = "readbar"; bar.innerHTML = "<i></i>";
    document.body.append(bar, fab, panel);
    fab.onclick = () => panel.classList.toggle("open");
    panel.addEventListener("click", e => {
      const a = e.target.closest("a[data-i]");
      if (a) {
        e.preventDefault();
        const sec = secs[+a.dataset.i]; sec._toggle(true);
        sec.scrollIntoView({ behavior: "smooth", block: "start" });
        panel.classList.remove("open");
      }
      const b = e.target.closest("button[data-a]");
      if (b) {
        if (b.dataset.a === "open") secs.forEach(s => s._toggle(true));
        if (b.dataset.a === "close") secs.forEach(s => s._toggle(false));
        if (b.dataset.a === "top") window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
    document.addEventListener("click", e => { if (!panel.contains(e.target) && e.target !== fab) panel.classList.remove("open"); });
    // 滚动：进度条 + 当前分节高亮
    const links = panel.querySelectorAll("a[data-i]");
    let tick = false;
    function onScroll() {
      tick = false;
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.firstChild.style.width = (h > 0 ? Math.min(100, scrollY / h * 100) : 0) + "%";
      let cur2 = 0;
      secs.forEach((s, i) => { if (s.getBoundingClientRect().top < innerHeight * 0.35) cur2 = i; });
      links.forEach((a, i) => a.classList.toggle("on", i === cur2));
    }
    addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();
    // 打印时全部展开
    addEventListener("beforeprint", () => secs.forEach(s => s._toggle(true)));
  })();

  // ---------- 章末"相关章节"（由 graph.js 的概念关系自动生成） ----------
  if (cur > 0 && SCRIPT_SRC) {
    const g = document.createElement("script");
    g.src = SCRIPT_SRC.replace(/common\.js(\?.*)?$/, "graph.js");
    g.onload = () => {
      try {
        const G = window.GRAPH, byId = {}; G.nodes.forEach(n => (byId[n.id] = n));
        const mine = new Set(G.nodes.filter(n => n.ch === cur).map(n => n.id));
        const groups = { pre: new Map(), next: new Map(), see: new Map() };
        const add = (grp, other, via) => {
          if (!other || other.ch === cur) return;
          const m = groups[grp]; if (!m.has(other.ch)) m.set(other.ch, new Set()); m.get(other.ch).add(EN ? other.en : other.zh);
        };
        G.edges.forEach(e => {
          const a = byId[e.a], b = byId[e.b];
          const aIn = mine.has(e.a), bIn = mine.has(e.b);
          if (!aIn && !bIn) return;
          if (e.type === "contrast" || e.type === "link") add("see", aIn ? b : a);
          else if (bIn) add("pre", a);
          else add("next", b);
        });
        const box = document.createElement("div");
        box.className = "related";
        let html = "<h3>🔗 " + L.related + "</h3>";
        [["pre", L.relPre], ["next", L.relNext], ["see", L.relSee]].forEach(([k, title]) => {
          const m = groups[k]; if (!m.size) return;
          html += '<div class="relrow"><span class="relh">' + title + "</span>" +
            [...m.entries()].sort((x, y) => x[0] - y[0]).map(([ch, set]) =>
              '<a href="' + CH[ch - 1][1] + '"><b>' + L.chapterWord(ch) + "</b> " + nm(CH[ch - 1]) + "<small>" + [...set].slice(0, 3).join(" · ") + "</small></a>").join("") + "</div>";
        });
        if (html.indexOf("relrow") < 0) return;
        box.innerHTML = html + '<a class="maplink" href="map.html">🗺️ ' + L.mapT + " →</a>";
        const pager = document.querySelector(".pager");
        (pager ? pager.parentNode : document.body).insertBefore(box, pager || null);
      } catch (e) {}
    };
    document.head.appendChild(g);
  }

  // 目录页的语言切换按钮
  if (cur === 0 && (EN_READY || EN)) document.body.insertAdjacentHTML("afterbegin", '<a class="langsw fixed" href="' + swHref + '">' + L.sw + "</a>");

  window.GD = { Progress, store, mountQuiz, CH, PARTS, partOf, cur, EN, nm, L };
})();
